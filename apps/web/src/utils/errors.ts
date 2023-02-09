const errors = [
  {
    code: "email_not_verified",
    message: "E-posta adresiniz doğrulanmamış. Lütfen e-posta adresinizi doğrulayın.",
  },
  {
    code: "invalid_credentials",
    message: "E-posta adresiniz veya şifreniz hatalı. Lütfen bilgilerinizi kontrol edin.",
  },
  {
    code: "email_not_unique",
    message: "Bu e-posta adresi zaten kullanımda. Lütfen başka bir e-posta adresi deneyin.",
  },
  {
    code: "missing_required_field_value",
    message: "Lütfen tüm alanları doldurun.",
  },
  {
    code: "create_object_database_error",
    message: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
  },
  {
    code: "invalid_access_token",
    message: "Geçersiz veya süresi dolmuş erişim belirteci",
  },
  {
    code: "missing_access_token",
    message: "Erişim belirteci tanımlanamıyor",
  },
  {
    code: "not_unique",
    field: "username",
    message: "Bu kullanıcı adı zaten kullanımda.",
  },
  {
    code: "not_unique",
    field: "title",
    message: "Bu konu başlığı zaten mevcut..",
  },
  {
    code: "oauth2Error",
    message: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
  },
  {
    code: "already_oauth2_email",
    message: "Bu e-posta adresi ile zaten kayıt olunmuş. Lütfen giriş yapın.",
  },
];

export default function (code: string | undefined, field?: string | undefined) {
  const error = errors.find((error) => error.code === code && error.field === field) || errors.find((error) => error.code === code);

  return error?.message;
}

---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMZCLZ7P%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQC1Op2xQXGIzSjdtZX60a3PDyf89rYdGT0QqOL%2FGabk9gIhANJZ6c%2F3P7T3uHhbDxS6aRNy6R7GHnrWZ7TULRM92pgIKv8DCHwQABoMNjM3NDIzMTgzODA1Igz%2ByVlPJ3nD0WXF9UEq3ANjyR8Bjsq2saZ17koBLeVMc3bk7ritvw809ZGJEqLeeOCdg9LMrYaTyrDC7n48CUqFFpWgQbUQzka1gaPLbpCqiFjl%2Bz5PGI0lA0EkHt%2FDdlHE%2FBt6IPHkNUb4%2FeVcSrgIv33PUvzymKFpRCQLZY%2FM8%2FxRrRm92uMrAG%2BuOplUrZ6%2F0def%2BZfPDyz%2B7FXhtJHfLjd%2FQU2hsFaxCwwYEz3Y3bG0jvugH%2FKjAXDM7AICJw8VsKIQ0%2Bjc8ux0wfuOhMhQE0qzL2U01EJ2oppHDvQuA4E9cq%2FOzvFovlhsVTVBd5zj1Chvukgdgfw%2BwOQ3diYDNbmO1mkWIp01S7lVASIuEFCuuGiEYqQt25P414vVLENjmbW6jNYhqfF0SPtGbAihukt8i9n9%2Bn1pbQiM5l2pcjMMd042ShJ13SSwovK6jlusq8RiUFrdaJTGHEEV5JcqP99Jw9YfbenruN8mHbT5jLSQjyLAxMqgIqJvweijDwCeHcZURwm8Pp%2B3JtccRrcgC%2FzIlUAeNEdo4tn4KxRoZsdgu9mR7SvDlRWgTp0VqEFYexQ0vdoKg48DOHv9QGJTDXu3j8dphuJBy20by99OCxM%2FlaeWXNGgAlytN0xkt0nUbCb2jgITrrRjOTDAtpm9BjqkAYs%2BV9CwqqAkF71Bu798G3WNZrtJzh7zimKkgHfj5uJhv1W8kecB9J21XnJVboyjBzAsdj1u8q6L%2FfqgTJK7D5COkDwa1k5g2DDfqIUJwVSR5oJbvw1bv2s9u6DgxxXwPwy3Pt0U0vE55pcezy7%2F1qtnSh0YSUdu1YQMQmbKNJ0Tp3jB%2FPI0H4VlmP9jgwRy3drrQ3EUZKC%2Bq3wpFLPXWDFhm5%2FV&X-Amz-Signature=d687ccfb9cc5309401dfa789bbbc1699a21a9ffec802ef038ec4a545f2068ef0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

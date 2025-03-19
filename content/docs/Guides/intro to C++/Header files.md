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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJYYDQEU%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICwVaJQbQiJtcwgLWsjneiY1d6OBpNQCjS2HgZ5hgUxAAiEAznfcxYvGTWAkskGUgvKdkQFbrbua9m9ZTLw5%2FF%2Fb2GEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKG8eQLjxdape37%2FvSrcA30eh9MwIokLZxxlFeoGnQYSMr7kj5ZSedv%2F1dsVQHFc%2F6uxVwaVz%2BlzItkm7cBbXwae4UQXOGWkq%2FE0rFAqDYBKi9lOwvRuHR80qWThowtJXObSG%2BvIIp%2FqLgyTu9bWNmdZpghsIcE7OHDpzLr2T6J4ziK4a0is1s%2FaG5Dw5A6MvSAMy0nMdBu9r5lW93%2BSod%2BF9P8G027Rwm%2Fg8vwXhV2QEQBE9fi%2BIyb2%2B9mc5UZ5YNzjks%2FmRd9cFkRrv%2B0LtZefa%2BpsDQWgWOAHoEM0wXejxhOer1jPHyypqqCMTO8FP%2FPzAUHjMgQWuo4Bs6Go9m4Lwd0b5%2FSzxm5%2Bd8iukHsmDgXpBK9q4g0IlpPB0X7%2FAMOu8%2FLI8YSJ41PQhqGzDhB0FVu6N3zeP1oHZdn17cjSd1KnufS18KnRB%2Ffkmk8YJsP8Q%2B%2BpkFQZP5hgGXsYEHWrGRf%2FxD9DugVX11WiAsmq%2B4EbmFG31j0%2B2NA6%2BNu8alujE%2BTCAuyrBY9ck0hKQcuxuftINneDcXgfdgpvSX%2BOLso7wS2WKBNw6n%2FAvyiVgSam7GPEjhTBa9K56o09XYfLwg86p5VN6zjiu%2BS7jPGIt7NJbW0XBS2aTTRg7YqSkvGBJ%2BeHOSqUXimDMI%2B8674GOqUBwHPoQROVfgCZe17fFh7KWjk6V2AWvcQoIFpbQE8uzX%2F9jjZDHI9jkzky9HGqISwWjQ0lylytD4VPYjba2iwRRTJM6HdIPExS3rNeEFkB8KZZCiGvKvgd3V8WPA3z4D%2FogXsQVsMrhOTi01%2B5HPY8dym%2BiP2pGxzTZ2%2B6mUKddE2NnD4ALVO%2FKCF5WIRzk1UrlD5o1nszZOENJiMksBa3FrSgnuf9&X-Amz-Signature=8b3b7f07cfb90192fcc3e7149fe485fe43024b7bc6ef59a81a04c92fc67bf105&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

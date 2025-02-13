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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NXKX7BF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz4PH1dFNKqWNweqFXj7tgnKZRgg0WAA2tj0zWaAzwCgIhAJY9Sb7l7Ql6rP5o7zdncKuYesXsUWa8p%2F1QIBrLVFLCKv8DCBYQABoMNjM3NDIzMTgzODA1Igxb5J0jd9wbQJZXTuoq3APZsPd27W9CEZmbvIjO1Qilmu2SwfspjVgqCEIFCbKPulZENZ3RAbAfwuJyFuL7sRSqNDv7uh%2Bu%2B1rIDWwNMhKvFuT%2FvO61BM6%2BI%2Fnh3%2BIW%2FjjYfxqw0Vd%2FJOfTyYMCP27oOa%2FI1QpcwxDjm0pcpt4EFKhWhUn8Gw%2FlfnKoRk4zT0PJ12GsNTbgAQUnI3WCXgGcYpSidrJK%2BknsDF%2FAZOvo%2BAt9po2ZAdFMwGkTBsAVpWIWpRSN9XkGmF81GayO%2BIq3PmcftXxZs8LJnY4zUEY3%2FtJjOTpMhnZfdIEEbFVPPwaYByFg34%2BUJ0g7OadT1%2Fr70l%2FQO2iVv5ZGNJW9A1DrxW4QF5gsVLwpErt3E%2FT3WvIlz%2FEhfho3pV4ZntF%2FeT%2FHS9zrT7e7sdT8FGnZKaXCF21WEXvU4hj5LcOeCFpt3Iogbz%2BA30RLVGeSrBPyUbkNoq6VRhqBVPAVljNL54chWfZUJaHwl1tYjwTZaNdCakQdtLP%2BZnt95OuVEX4eupJ%2FOwXhgqnpyOadkeElJ0%2FzfeGlx2LWPabX%2FsdfDidt7jcsKGqCsirrceAevxZUF22U8ug7QuE12YZP7gB1O1%2BDXFCWiB2QB%2FlO9cyl6ZZauQxwOlw6IcTlhyhK8DCp3be9BjqkAb4bQ3Rd2Z4idB6CxEy0Ebjw1DburpvpzJOejpF2EId8e1BsXF2ROb2naHc4%2FEiUf2QFy%2FmxdE4iBzYJ6DRRZJtmfSw2phvq0rTtmSsbJqWK9TLN5klgnmkKP1WIye4QHTiUiO9Vw648pfsO8e9wOilhUom5H6FBbk5DjdaBAZMijPa90ZTrcDN%2Fx9tyfW3GF6FXAbvvGBSAj8o3OQZj%2BQwnY92R&X-Amz-Signature=4c30db839552f95fe52c820239f971af73d1133213d2761b2fa49587bd83b479&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

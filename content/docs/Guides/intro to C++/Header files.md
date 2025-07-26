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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7BBACB4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCxYl4Bj52MsCZPwfjttKG86CwzgO0qEQIiNBWwPo2nJgIhAL%2FPvmBKvdgIfETUBLsmUbrNWYDpzP5oQTQcaOVgOLf7Kv8DCGYQABoMNjM3NDIzMTgzODA1IgyhkG%2BpJOvrkxHLEV0q3ANXn19IV7DGlLtxrpBIGVWHtpYGKlRtlPBmPPywfzib9PqxMKpTPqc7eH5bEJ65C9oJyQIz%2BeM9M6NObopfru3Clqk8ztJEq4RCTQ5iuWnm7b%2FasL9P3YTYDa4founnag20qQQKM%2FhVogiYQEXzLoqjxQLrF%2B86LNhwEW87DCe65csXxV%2BqvfkHVwergzM2DMkgMYF%2B3uhIP8AFGaXrcmKyflSSuUHSDiLXcizyB6J%2B8Hvt%2B4mk9v9g05HAm1rE%2Fcd6DmfRee42U8ILMjEUK36q%2FkoG7ueQsPaCyXFbw4RC1YbnEdaKMYE2zZy3vwzAM7UGGM4%2Fze39yTjlXL1kXxbH8tPCc%2Fu2IkhL6ZfUPYscuTAmAmGl%2BGdKCRPyIRxymNOvFYke1B27A0WOGEp1%2Bdi927tsEnq5mlSC6heq4oD65Z67r3dd2qz2irUFcHciaIHigp%2BX%2B1ofrcaHRUs7xpjoQRc6TNkXoMoE2jx5QIORnnEYW5YzqCGIYFw5GzkYwcPXm50I2%2B2OSmqQ1HTTVvpr15jsu7zaPVVIiAGC8Dcc0Q2IzaqKAHpgYmVw%2BR2yATIBIYoQLC5R8gDEAkrK4H98MrZWu9KoYmdXheLOsCT0tPMDsYVHZ8hrF1ibgzCE%2F5TEBjqkAU9%2BP1k%2FuiA2eLAY61WVvtFYyrapqSx2SjeQhrZIwzfv%2BI8RMLgd4SnJ6kFY%2BIOuwuh6lZ71z1cSzzkAnrDJV72QLyFlGA%2F%2BGP1vgSyOF5%2F3NZR7DAJc3kWVGJq%2B%2F%2BJw0ZJ5rBFDGpxTHEuPEc1LrOeIHr6gCPuPdqaP9Ln78aWoITRe%2Bk%2FzGnYMTqamd1%2B%2Fh9AVVvfWs1gEQWliT8jnW2vXkO9z&X-Amz-Signature=b0364611e096d97c71eda8f423140fbb519ade1ab92e5ee4d7dcf85d3bd6961c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

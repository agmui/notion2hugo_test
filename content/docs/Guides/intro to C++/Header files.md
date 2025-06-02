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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2PSP3I3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHpMneSAQ3gwg4B9r3Z1NAwtT1w0phV0Uq8fZ7Oit5fAAiAlD98uhlEl84%2BSIIfTE085M%2Bzxg230oqeu3UAxFmxEfiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzuuPX2bIR5GV4%2BzOKtwDhji0QQK6RjV77S6Xf9Dizj3R%2BQT29Gxu1M%2FY5G6U3VncY%2B6T6RBlUdETlWEsL8mdXB83Q8PdDCrRdy51QaZEPIx0ZkkMF47w8D7mQWeB2RhShZBG88Sy5bd230dGlGosV5AbqrqDgqn%2BM1tr2YZgh9iJxN5gEfA%2FOFFSr4seSWsrdFvnEpdKG19I%2BsDxUKhsCSSYR35gEpzTokF2RNv7PNj9Cpsi%2FA3S3F4NsqSH8r4ezCkYVgkSk9rXJupc1x%2FtQFB5%2FpIy9A1V7p%2BLK6TVO2qhfVeomZ4Vs4Yy8jDQL%2BMv7QWMlUjTidJQ3wM%2FRtjUwwe9LxjSFXDYKMfUO2x5%2BCXiF8uxghYUquIPo1JU%2FKBQu%2BhylD7tL8Vkz5ujdzpiVyFluVOb%2BbsRGcYBU3IpJIg00d866e0KgirmnntH5oJlScIRHDmO9t%2FDSgGR2YT7iFOk3zbpqXC8jCJh18G%2B0H%2FbDKEnkt%2Fgn6K94hpzMoKTZtinjlAz5q3tZPyR6PMGMHzNFlVBk0h%2BvnllHaCkD6eIQjpW%2FGJyIbe3xOPJW7n0%2Bvm7gVeisEx1eTKE3k1Vu1Iaaaa1j1swZh%2FAQ1sc8lr1CK2UbB1keqsPRFvRAuTEvuIg6HQUVMng5kswwZD1wQY6pgGU9Mm43f%2FxT97NY22U27BLV4ECZuqwk6stiVx5BzIEvs3TCdLpltRJSZ3kh8hYc%2FMLilO55SjnExecIT4V0J8XpCn%2Bwaj%2FmZ%2B49dN38lNW%2BvrPITSrjmd1jQeNTP49V7Lbn9shluyUl8kktnJ9md%2B4KZei1zuwPvnogvxudXIy61bR%2BzeA8TsF32VLC4ZWP%2BycdhcfrCZOjY5QnM9%2BRx%2BTkqOVQDvL&X-Amz-Signature=c48bb2d176052b8effe43f24dcbd48f8d9d0bcf8cf4d3b9102ac0b8ffbc24dbb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

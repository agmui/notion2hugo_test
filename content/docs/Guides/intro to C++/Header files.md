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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5EXHPN%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnIdZnT4As5xxbrylXFLRFdSJOeAZhF5PZg3yeKUA1cAiAny8BdoypP%2FTY5y0t7EfEPSTcvy9tgv7FqHA6cdIRoRiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMecOVQmUhoJaKeSGwKtwDNEXgm%2B7drQndrFK6ZGCDhJ%2BdRl%2ByGh376%2B00RUaVPR6R3ReY6IFMgw7v%2BRVkxPXfkSFosKBXDS4ez0SzbxCUeNcWhSTsUBUBsnGOyxFDAJoSBLO9ucxF4QL3TgwhphgKVfv337N0QDkz8JagutKk5PKtAC5OfG%2BUR283%2FAKyePhhl%2BuIY4tXut9KsCo9tnubRN69e0DKECcwhjtlJr6ISX2k%2BzKh1EtI90r1RpriAXA6O5G%2Bg0kPhUfqmco72nVmnXOpkGVWumYERzgqiB68BRmDoXcLt798ZfYf%2B8MvEUYgq1vjXo4QM%2Bluci1JUcoCV3FR%2BJ00LIoq00k3e9HxXta2Evj5YYNH8RaT4NVlk4dS3RbU%2FZUrpzvheJKMxdD73PjtP%2BlphmHVeP0dhThkQ2FLyI1nhJ3cBqK5iqN6dhAm9FvIF8JEmfpz1SgprWKSyi2C2LeY%2B2ED2tJkQhEwc4EFojz5tlHWV66q3QRwqddAgo4HOtETLWoIu8Jju%2BjfxiwdeosMj9ijhxEz6KTCbcQtkzor2pN6%2FKYs4RCEXwFaY77nASEca551Jzfw6gzQKNXytIT9ISgz6j8h0GNanOsbfK39xO%2FRDd8GJEKq8CCr0xupPjEIY3dSmo4wv9yXvgY6pgEApkNo3Uk80R%2FYuK1ktvy0oivOQTqAOV9CYgTUZ9IHZuBYPbR2AxSGrvU8o%2FQO4CAx344h61MQcJbocObNXzrbiiQ4%2FNfCgJ4mhp6KlfvdI6es3Ys7Lsp2bRd5h5tWQ5%2BuLvDWtftAw%2BPszBKOlXC03MJJ5oZzEpwcs0QFbDGSFlmFlAHOzOMWJACZ%2Bxqs%2FhDBrwW02OEw0LYFpdhJxf0qCFQllh0o&X-Amz-Signature=9d58332cc6731f221b6a4d683e2150e80b55909007fbf69053128b4a93774cac&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

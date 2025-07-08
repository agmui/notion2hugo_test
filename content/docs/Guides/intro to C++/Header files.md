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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XXEKQB%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCr0ijuHXzeLUEpXLrefRCtNh17vggjfTTzAfJQKh7hAiBn52JdF6L6MEHdYlwwyacUifH3w%2Fpro1QXLtLp1dQtDSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP7NvFXBPg%2BTOT%2F%2FgKtwDIJ6M6jKnyL02rYG87B8c2XBpTGIvXr778Vsf8C0Q3D%2FAn%2FMEl02pViNKuE5uF2HiJbqzZcDm9j%2B%2FIS4OyAUNMpp%2BYqPWwqhqzB2rY0SsmxdJS7V0oG2SsKBIT1rtM0nGWrgCbTcG6FN0Camv4n0%2BH53czHmvGP48LI385w2bumdWuaxx3RzKqa2u1vbGvYq0UfWp%2BCrWdqNax9OOWYPblkI3d1RjZCUka%2B%2B6ZZZ%2FgmdQ17KoEVGi7ECJb1TJMjQHZq67QecpC9bVBpuo5DNaqKKMMbwvr09ggkT%2B9jAa1Xpx96GC7%2FoNf6mHD3mquDCSsOXNsg67MMczKtU7q1%2FCcfpfwb8L5duzVB9s2ffNnqYz%2FrnJgRaMvnpF5nttPnRGepgtAbjNJ3yRSxQyAXK%2F90lMTVIa24nmOA%2FrfzTj80Ygeo%2FrvYg9qfZUhj44e3ggIw%2BEkvxDJggeDrtYyBg5b%2BRoTdhnW67E6g%2Fj02uSOflxRbfP5E7opFHupSdGi1XHVciHifiBjHW6G7WpG8aNE4nCrUQpw3BIEguw6peKAed3Uc10eN%2FW4toQIVcnAITHfLC8Vfzy2ncjJPvSFm%2BSPIy1YBPd4didmcytlNahRcPH62n6bZlVvBjKSXMwrcizwwY6pgEzrpcTAWOcMiIepdOH0W3swQwZtboKM2Ke%2BpbhMKBpoAl%2BBM2ChUh61vKRyKBmnM6pHdPnsopx%2BtU%2BjUyZ%2FEL3KTEV88MtmCEmF%2FHo1mG9EGdDchTduYruoosU56indtDaGGAu6NxQf0N9cVLa1jq4BUbxSlNzhkK%2FfuwAnUm6NoVgx9jqdt%2Fvy8gEC%2BzEnD9K4PmB9WgBHeUWNw8oI%2Bkuh1GoEg4X&X-Amz-Signature=0eb7e2a25cd8dbb253effe914cb9ac33650251366ab81da03aadbd5bf9415293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

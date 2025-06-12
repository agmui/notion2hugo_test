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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZ5EPFS%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCav4HFUk28B8ghnJncsWSVbY%2BCjpurdhNThLcv%2F64RrwIhAJoHAe29IwJpiwBpcIquSjQitIwpd0x9uzLH%2Fw4zNn7fKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwvKGE%2B7%2F5Irq3HXoq3APzB8Y0ULAtmMDTw6F2B34e%2BlFtLjyrV%2BouputNdl2uNEt8%2BlcIs2DQ7o6f79QINOSaeT5tjnxNTX%2BLRRbZQsOg5COcK6XXYMF9nG2Rt%2Bhd8gJxbYauOfYmp33kBe8nBQV%2FUqZ7m4HuOadypsF%2F2ZXZCkbHOZ4%2FWAursJV4em%2Ft2Z0gNVhehYDmL7Y0NJYpALFNIWCah6A%2BbLPW5DIEcTyrnw0eIx6w1xuUQaefgunfogWmNtPn1ynptykN6V04MOsULyoZRsOtBGUv6oOu2BQV8A0L5U85wv8cpDD9uGdkJqx55Ygw5W3waXyfAA1I5u7X57EgTHzf2Gh9Z%2BjLT4c%2BCR65RqfVDboKcDQ%2FB1V6UVtTsmQM%2Fks2MDk%2Bdpvb%2BgU2Iq1MifZ1nqWlcIlUQWicQwzHZrmhLUFzHV8Ejr%2FVV44DfP78FW4mV4JMCb7zXcc6POvdf37GvBq85NwXpOKdfZ%2BLs%2BeZyqfePUfRwnv5lugdkw873FsI%2BdiK3gy%2B80deQpDUVT6ANjbjHy25MLGR%2FPxvhrw2IP8jhK0e4MZdJIePPkcfV6KlqQUbI7KvNEtC1EthwG3plOjVuyeGIxwy%2BCP82uF10Fn5x7%2FHVCBLkK6Shf6GcZESZd%2BKBjCjlKnCBjqkASzusbkAZVGsUsIptkXyHZ4gpLif991O3HkxAn3Tyj%2FeEFviNR0ubWOTMD0uke1sfBV4yy0IjEvRhu%2FePyP1GjQwjt4XlXMV2%2FJMQJYmvOnzp6gbuYa6AjhDBEBCW6rr8BwiJcn9Rz44665AvkGDYfwFuoqh5LbqgW4GLSNksyZM%2BodDfpxe7VteJgp5uHhto5darWXz3VK9jDZK%2BN86%2BIEZdiHd&X-Amz-Signature=4cf8f81252cb2be7f84afbef49c045887951db7f0f7d11f25993f087f60feb78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

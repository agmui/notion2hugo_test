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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R54DJCS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FbuzrixOo5z0CQ7b08DQ%2ByPe3YIgT9wv%2BCSKZeHriEwIhAKOPmGnKibfVYt%2Fs7EZRRWhIv9p6bvLSSX72TTUla3JCKv8DCGMQABoMNjM3NDIzMTgzODA1IgzeesdoynWQRzFhp4cq3AOJ8uqwhYj0t4QX7u5zH81RSbMJHKl0B6IumQOUq2sFSSjAy2UmJNlvy%2BJC0Vyw1uicdnyrPHHJJs9TKQNaMfglPiUGh73iK0%2FsESzzw4QxA1pjdV0dmQ4WHdCKfdi8OP3o0xzJmcMKHEgjxqD2BzFltoiPzdRG39ogNvwnrhxL7%2B5FLBYhCt86dumnbNQZZLNlsqv0LH7UfeHRFX%2BMqZa6q%2F%2FUrBrmn35LK18sfGQEg6LKlXgkGQ1t5tXD4p3cg1e0PVBbilF5R1Qzsg1RBoY5nNzYWvTaKc9erTr3Wu60Ma6rw4VlA5xqqy1Uxa5UAIh1eGrEc5%2BoyXFalmSHAokihN7%2BdWSfnMbqQzduQkCqDxi%2BsX87o91gXImidbzWDcQTIme89X4q4ZPCcKB9JuTIT781ARV%2BTl4m1aQuY8I4aK9eJE9%2BOu9%2F0RVQGSnlxGv4cMF9n7Bg3QAcK7IWdlDBXQli82ACsytkKEWI%2BLcYAgDR%2FQn8uoSMeeT7y%2BBZacuBZoIqn1mZTZzmO2XnIo5AKtIHdye1B6js2U9O9ajbo6ZLfyf0fcgV6LaQmzsfmRVeEoaQqbkx4SSji3UCMhcXONVaVIpxFlG1cF8ae7DdYcZ7Yxf45qPrBJpvzjCbgoXABjqkASg72n2Xaj4IL0up4Jtj%2FShOGq9tw8LgFF6ikCvPULvEmhI%2BL3lXCeOZvolttADhR0L8ed7BiAnztVQnrAC6PnubDW19St2Y244J4WmYiRZyXiI9coedecqAO5%2FSSMhgCdXCoOzH8MTVJyHsxS4%2FJnC1tcMJYD9s8Uiubj8tGs57Y3wC%2FCH%2BIz9H31KKX09y6nxZi%2F7E4td9Waw%2FeD4JQhOgBp07&X-Amz-Signature=6820f3f83219ebf4f40c0524ca1480ed19b80e83c9edbf54acb9dbbf86483554&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

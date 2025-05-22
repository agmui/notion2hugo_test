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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TY5WW5I%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICPY%2BHg9rRjFvfzSrkuA4h7N35iudmOLKzdWreQiswSVAiEAijWDfu7pvdboH9c6yJCAD7lm5KwU5m32l%2Bq%2FMXpeArEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOO5ZDgvPHhKNt8iVCrcA2mtrpi%2FG4oA0cDQSWAMATPnFFlQOcT1RrzgZ988I2aQVn7dPA03oKq%2FB4M82M5I68NxG9LZkq3HhNQQKAiAt4Bm%2F5Hhny9metF%2BxcxAHSImNQQ6DY2v18hhToIH2%2BaLKRbw6G92B8GZ4SX%2Fq%2BVKnp38PG0Xb0qcA0yKQFrvJXggoNAlEZbJzxZ4up8w42ljlvSvlaMkas5SqJFOjIuoL%2FmfUMh73NGgrOA%2B62S04tGdaLhWArg1Udp6W1rRoZhzoj834RvULFU5WE8FPMIvwo%2BrvxVxck%2BhGS9dJ9Ktmd0zV9jR0JYZkQQ24MfHPw8WFtoVHWyKnLvZ1uXSwoeLT57yXHLyKHnd0FCpsQcJb%2F6eC9clN6R5ShRi44%2B0LjPCuRXXaCFs7C%2BH4NiK%2BXDrO2yzpFeFY%2BGC6c5%2Bsl5Yc0ldMWMfnvW5e0bl7nCf3eu%2BCtIcCbGuvsTzWAtaEZ%2BM6GdyfTQ9Fj%2B1Edh7XpdjIM6GljUv%2BmeKr8aX27S8WIMo3Re5I9noJ%2FcSpkerRbkUAQ7BA3yZjzZC6tGEASUl1iNeUqkNFOU%2BkISTb9kAnRbr7JQVxdjnx002Kh6FgmZ5Ex2iJAfnMmOzLZrawXzH4ULsEBxOZsEqCZR4OF3rMJDhvMEGOqUBmHqijyKIh2Yg%2F%2FIBsNrqfN2%2BRFy4LMik%2B7WNcONaPeIFl4fyssiujS2sX0RMzGN5gG8h59VzpUV4x%2B%2B%2FlGv665n03DdEn%2BO4%2FcK8k2UhHg5ulijMIPXQYpcZm1OVOK1zNRL051py1j6XHlqjUwurXqxed5hOgaHWQugfszxc48gbgwyj%2FkOndVs5rg0o%2BAnApxDPJznhXLFu4h%2F6egM%2F9q3bNmPq&X-Amz-Signature=6ff26317df13f9bb896a91459bfa10c509afb8458ef00cf736892fa108f10c4a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

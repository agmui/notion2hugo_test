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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFGM4YK7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsID%2B%2F0Qo2LP6iy4hrWtSOjAOEFffDhHU%2FuQA7ZsKQiAiBXdG9lnXX0VrD8Mk%2FPklYc%2Fotp4iyZqdyJxNxlRJYAzyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRoAEz1PsYgZYctQsKtwDBhSKGQwBdv9wavhF%2BGthKVG5cTdULbPL8hAIQ%2FfetRr6AYAuU%2F2KP3xjP0p0K%2Bl8t6NdWerQu321AFMhPGr62odm%2FMRoM3%2Fp9l8cJNDcqtvLurwGchalfbuB0NHRSTIZL6TfdpVRD3mUSWqsHV7u5d0IQ%2FU2aR1LJaoD6N18AT9XsFUKtLySwwv%2BUfZh5jtQJJTBli%2BxM2%2FHk9iyhrkl1LQ2FrB6xdM41IuxJCxS8G3%2B2kkkHGeF9J%2BhckpyptAGckpjr1p99XkW%2BU92apM1h2o1IFUjnVxi%2FSP7e0T%2FniEfM8kEXFQAwmgAQNnV6%2FqMXMXNZHau3zyyHt8YkYiFvro%2BXoJtvu50sap9maFQOVc8IeuNSLlAFR5WULgeslgfeqvmq%2FiwwbLyg0HdHS%2BuckTeYzOrKJ9jQnsNTZFP9UdghazLD%2FFg3EdscqSrMagerUGOTdJ9BXjqV7L1OSWCjkOjrLKBnKsqlOT%2BBH3j98GVJTQNn0e7bKMb3ZEl0MwCUj%2BQR6vq5NKtwYlOj4LgsTp0XC%2Fjx2aqYc6tLaB9eCk0uH6JFLr0fc0Y2uQjaqDewEx4mlW6zSzXiY4ZRZ0HTHp9aeF1qJXBNne1%2BYnQXOVUkqAaJobGQj5%2F0Gkw97yxwQY6pgHfHY0EwoyxWPwRmkJVi%2FJlejrVnmOfSjFlDuel6PUx26s%2B0%2B2lsxBEApjYBfWElxro9%2BBgd2H%2FB1LjVuxsY9OYBQEHofVLI%2FlMdQNVXLsy8Em74wiqJ4N3F1nD47DCFvk9bJBzCs5zj7Q0SjwByXEkxNef8u0M7A7UMb0x6W2G1RUpvLKuITLhALyy7hQ0rmB1A%2BBHIuRCHH83JGZRzwD08gpFCGZO&X-Amz-Signature=fc39f02fda6bdbf98f5fcd53c52b42f0d8e115d512103ca1f8b269d2e2148e35&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM626OQP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrn2aq8Mbxk7wqInMK7QwGTlpze7p7YXJJ%2F%2FIIVRmLsAiAbKEzMCmUiKhkQF0BQZrSl6adcjf3vqPyUsnxiTh9q9ir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMKYaA%2BUV8t2XPNhWXKtwDpjcwRi86WkQ6PyyX2ON4howVH7A5UHmswxtKYLaQoicQsTQaTdUyA0vqL%2BE3COY4oS%2BLJUQjW5GDNJwshYEUO2eOPyeTi%2F1NPRMUTXS1GUlpwoTHSpHg%2FjekTuZ9vgnic1a40ZOFU3To5BHY3tfk4EC8%2BzYtLHyuwHhnp%2BXG4X7XWO42Ctq0n8dw66ZmQw2Kzy%2BZfv4Gx4eVCH48It243%2FCQdf5jgZpP53bTqkNzJ1AO0o18EvaxCKdsVefo7WMv%2FLMClWc3nPzB2uJBnSX1qMtk25FN5KcffkMnTGI8%2FOigICRn%2FFXS8KAB%2F0VqqnVX4L8783kJEZelYkhHrRTxmNL2m1KDO3BDqLS%2Bai%2FIQCf2W4BAF7dJZXBWp07h6YhxXZ01hUjtDSpkFJhsFQyHNGT0NurhiAFfJyTn3OzzzI8gzWh2WyCU7QpORpCpBZRDd38jx%2FC3tEBSpkAuT12Sm2ABcDzFJFSIE82Z5lbRLDBPGjl%2FIFTcJsxJDYhfy4PV6ObQorvu8fnn%2FePZF7DN8EJmKDpMwuNbEKIH1ahUs%2FUACKF5i5omaJcIyPi8R99stVVTLAymgPDwfBVDraY3uYbxAYDERnjwFgOBsqmQHfE5jJhXHoMnxWNecIYw0vakvgY6pgHIIQwj%2FpAX8vB4c7nqZYWs6%2BzfmPgGWzTHXxMmLgQodFSZIFUxIoIg1kP8ygEs4B2B7Zc4yNlDwRMrjGXfiOC6jJPloRt10C8jOy3VEETyN%2BUb7P34jl6zjfXlvW8q%2BiDLGaM5cb32jpRruYZuCRsqIJoN7Ds5f%2BF%2B%2B9HxPRhfCkNjCgZ8ox2cv8kzrSxm2ocWsFtMzqGGd5WBcXe4Rl1RR%2BZfZ0xF&X-Amz-Signature=601bc6cee4ccb7d9dca0f24592e93eddffd8605c980f2f4345775f9194116297&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

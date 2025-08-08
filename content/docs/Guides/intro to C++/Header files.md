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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3F6P5CT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAjMabS4zy%2B5UdKyrWQgk3kOjC7Y5MZ%2FOHjdQLI5iAEyAiEA8ESE32%2BrMy5fpfY8e%2FfYe3hfoled%2BdxWAzvxAASvsHsqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXMqveaRwZwgCZ8FircA93AAkU%2FBUYDb4XQiguRAIVotcMSqFLZEz8MsXHXYOcSxDBTqe50QNFP%2F6ELRAKBm8EBZV7rynLHXrtecESy%2B%2FZJaVPwfHE8XI%2B7USA2zxJMAzIC2zIW2zA%2FN%2FUJEAGSKVSlAFzuwP8dx8OHt6Y6MYHytVklVq8ltOZRNLDA%2FBeaWMlgF2wgSE96N3ZHpgCAmeUs3KFAcGnGm0DY1okvs5axidfhdzMDCLbTYvgJd17Mno3ZRNh8%2BFATb84YgVHQzVvXSxhoy%2B3Dmefpn%2BzCqinpeN01DVYKiLaucEj6uaaoxsme4QVqnUXP0Sxy63v%2BIfSrjdy0fsqKMtrYGeYbIs%2FPCzyn8mtSd40y%2BdaKv7ewYVV%2B9o%2BVSVMm2jQ5Qgl57iYsXUnMwY8iiviqnuOs%2FvVyXCiOp0PALiztGU0721qskrZiRcmDslRuBu7S20H1gKDzcYTzDvUdCSTg1lH8CWO0Qjpqz4URMyZ1nvBuQgERMnPtfiaWERodQxAf6tcRpb%2FcvJgxTH4O%2BRopU2HGACa8y45SydFBeE2KqCb0B0i0WqrakNoRsqWHCXzQ3Td90eRxrEI8UuUaisks9gpNJEXrXb%2Fa0b9AQgVOk6F9DvYGkViZCT3uMV6VwRaWMLzt1sQGOqUBL66Je4YVxmcsXYZexJjhKLAyNp9DJCf3cYGdbG52K3WzBLtrnIWAG0ZpGAGhlBBwxfRcI5GzX8fYDo8aJfm9oeyP%2FW9K1jwtAY5zLLtU6WBpWoXDIO5hKoGjNrnBWJmMcV%2B1XERfic%2FHGlYrLM6KN5k7wRGo02PiG0JD1wxW13v0rg8%2FYyyZ6WIaRE7vg9RH0AlTHgMBHKCDJ1VQXPnpY7QFrmTc&X-Amz-Signature=8f6eaa9a0a4db2b1b2db0d232d587d21001850da7dc01359c71981d647341e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

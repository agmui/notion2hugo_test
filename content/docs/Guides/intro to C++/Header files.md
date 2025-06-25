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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDK3VPB5%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIBE2qspLBH5JjbWF7V%2Fw46txazuXCGgK9uQ35QLt%2F%2BifAiEA%2F8sYLXoWLe1hiVQmjGuQzp7nhIlfg%2BYbC6S42P3zeNUq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGXjNvp%2FKS9fK3xmdCrcAyHZo%2FHFXlFkjvXVOMWikLxIxCBeg4%2B8IJR%2Fniw%2BGfJI9WTXLVjZLOiUWDo5MD7inCl0lMTF1XpAzY1ulzWGxHjx46%2BiJksFer9P95O%2FIUFTcHa9hghNHOutdux6PsKCFfZ1u%2BDdq4xBsMS0gWTL0fVEPdMiLL9%2BCOX%2FHZ1CFtoc%2FH4mt2p5uXOBpdtn%2FS705REqHTVuZ7p7nAQ3ZBTcP3Lsz2MqVrSdNf%2BRnPkdF8pQ7nVZYlA7Wf0%2FTRxl6zs9UxqcNlh2VYgcgSM%2BFFo1sMrBVNvNBGWEfmc4iBITTL%2BrR3%2BjXB%2FYMcAh55fX16b4zy2xrhdMnW9EvBA%2BCGVBfXqqX4q%2B9j0o2JapuadjLAeUX7AQIHEAf%2FVv2vl56S1eGvsI1lKZdRVNrL7wlGzGggcaPxl6eF2sq5mfD3jGteIk8w%2FWcWmJq2FO9eJaVj7YDKNZIC1%2FN0Wi7Uu04stJ9ANguGjw6gpLniNqNSVjWgw8lwFbPgiV1FVaNwq8HglIfUQhp7SofMGrdbn%2B0stbjsLKPHaDTPToZHZnQvV3bIo2lI5Bh5JmhSC%2F%2FQNhXoF5rT5O6JGMavhawm95Zq6k9l0oULRChZnpxhbXu8vYDXfwbo6C3YpLorUiJUOBMNj678IGOqUBv6yAKVEP%2FttWQ5GaPypm%2B8R2eEGH8dwMXcLPoCLzvbfQy9wF6%2FIzTcimkeXTunc8DhZV2bR8TRyq9B%2BLggPB7S09yWiifrpC7DTMv5SnJ4u1029iYGlObxtXhYfyeCRXz4pA%2B1K3QWd7m0OtlnnY6dC6JckdAB%2BVS0xefXSvloiY4%2FsHgUC%2BQQa%2FKIteB7M7dMOxI4VtHwlsbtZ0nUm%2FeuXCulNB&X-Amz-Signature=179878a3e275f0ec614a499975c8c61c1f5304c128f2c7272e1e36261f80741b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

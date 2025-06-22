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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQRJARN7%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIHD5N%2FYY9VIfpwDLnrZMheg6LzS8g61pGhkA4ywL0v4mAiEA78YARsCeyhtMseG8lDnIcHKhe1pfVy1DNPTNDzO9BSgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5clM51LpPflVIYTCrcA3zeFye3EtQR7uMdGHxLn8es%2BiPegGsS5i1lf8Cqt54LkJE%2Bj9%2F3k5np%2Bn8U2mkFOKDveMa0J8R5NDpILydlkcRY72Zp49YsTSXngPxNY8%2BXQRLdk3yOwyW7mOKLsDEkosc6hLuX0ja6nbcHUfZejQAVOFms5nHRynuvlGrSN74dQ2KBw0ZwrD1084xmTPIgCdo8w6lh%2B%2BLjd2LG5ABED7rjGPVORTZMXrYJw0qlGXikWzLA6X94MXncSRwpXuUpANzBC6SvgSZPwC%2BjGfSCcVbZlcmyg6Ljx9I4dFrwr1dk%2BFvVzPc%2Fu5aC9BKq%2FaNfhSmAy9RkBthUdQYOZzWMwsxJoWxHh01Xzjj%2FJxRsdkefjPJAXTkkhqIZkbbpPLn6UtKY%2FxkiwmsIRSBuAsWllYUa6R0MDJHdMBQHMO88B9gJZ0IkCzXEKimCp7sLDTG9InM6urG5SKjakjJYIAWsCMH6o1AfGvPnIAnN3fRDn%2BMaxbtZ0rnPQsguyRY6%2FpAdY20M%2FqDJGST4XNfJ5hSUlHQuVcJv1OKrgZmHpVcVI6Kae%2FFW7yrhLK40ibZ4m%2BPua4rFoyM3%2F0dtOO%2BXPpeOdDdnolQrEhnXFr9VL%2BScZaG2CeFk0zIbRgjnFj1wMJnH38IGOqUBU%2B61e8%2FCwBPm7Bj9RWSRuInikPaDbv1x%2BLNt2duG7kiRDZQ4cJhW%2F0rx6da1xzHAJfocmEjMjFlts75kqcu99KR7EhrhI4VkET4jK%2B6wsV0NosAhUUNgilx26tRwf2qNF3T9flo%2FP%2Bjgl3jStgoPBXTzd5n0gCMW%2BVP0xQn5LlIT9sj%2Fx5hq6GbHWQ%2Bto6IPWtWMNkOaeIoI4cArL6r3p78PdaAr&X-Amz-Signature=85f4c95f567bf37860c5796983081fc526d45982806a2e2ef31c389fd00764da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCZBN3BH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCvHGMK3zJ4MHd7Df4Mx%2BmfbBUDNKL54U9Z6jAYhm24gIgKFisKsXKgVjkSYvHqLzlFmCoWemCt24d6uTsWsqiwVYq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCGglbALPEi4f77zOircA7zMUsSwWKoER0lVHwWswnCcAbFaOVeefqpZqJ6mRlHwquUGyPgBjtVnJZytOYJHa9o4hXgtSI%2BXTZgmCjQi4X2igrwZjIUnD%2B6GQscHeJV9lYUFnl4G4BPFe6xm7IY5ceWFCj31zMbVDtjvdkWWdl1%2BKp%2B%2BWF6GI4OnU8%2F5Xi5DuWUlgMpAsvrDNmt9%2BQhmeebFv4m0052nR5a%2Fa8zAGj%2FzNqrli2aQt6VkGWPathwpbsoj6EdJzT5usWuQCqHQJ1%2BRgk7Nx3ZdEDrBBoCzfyyMZEmOnFKffE%2BUGcd%2BHbAyPic%2F3mbLvvm3NfAOcviErSX%2B8kOEV7FILrmoy4X6a2ACHWmnZ%2F2D5fvOhV0kyoz5RkTzHdaskCoIclg%2Bfmzg8nnZXQfU0%2BtAJ989rHqDGNIFul6gLSZGHxc0m2kZQup4anV09Fs3pikd0dsZD3bW1gfHrn8LgmGATFt%2B8V47gUU9SVPmIZbhsJ%2BKUGo6r7NUt4PTwvRcirRPhI8fT%2BDtspLCmsndnBlvRbU%2BF%2BaWY%2FMKGroSr%2FAaMHIygcgqAwE45Fp5O5fdVu5BQFYfi9KZxemdFJYnDMRDwxLsoYX%2FfQv9VxVaVzVZKa5IbEn28RKXuJHmPeJXMmtGoOuRMJ%2FC8MAGOqUB7mcWkaOztHDWNnUedl%2BDws35FpBq4ivXvW5n%2FxuLWyEpVZ%2FgzgTJbHNJXg5MUYVP7fqOVkp58MwsunU442OqHaN%2BPR7Yf2Sz7uAFqowSZKVtuz7Onrdh537ly3XGaCNU%2B9PuYPPt5wKE2Lmi6uSzuhOmZRKJqYSHZ6JGbk8b1s9yfDUXQsb2QMcPSGwSlnOOsSwKxfaTOJyEsvtqBa8XBKEBPktC&X-Amz-Signature=a39b371e57233d2d47c2415b5e749bc0b08421a520cf0dccd1492ec031ee7fbe&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

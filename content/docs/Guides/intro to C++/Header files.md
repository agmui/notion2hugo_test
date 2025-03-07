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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWHDAZU6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRkmdEz%2F5nCJMj%2BCwTvzsZaiUUOrl7CC1hCr0%2B7IV51gIhANjRpg3GUzSGM5x90Ql7Z5dTxjVXPb%2Bf40cBCVj8%2BS6vKv8DCDgQABoMNjM3NDIzMTgzODA1Igze6qwHcP3GP5FLOxYq3ANmAHhvkIc21ftE7sh%2BjJAJMDHOoDSdGr5GfBe0PaiVZDt6kRsx4P97JM87eYV4Vkhj7A2jd78l6ncYHJO%2F%2FufZd2JhU1yWmiiEcjeWToASs5OcNntiZ%2FOp2EHOf%2BX%2F%2FvPqLfO6kiLzfQMvkm8UnmtmvdG1ZyRcJ3YRbqVgrdFuDnPf9NBbObcWSdIRTLxRBUb%2FXidcFXe3dXCxGGuUtcvIrU%2B%2Bv21mdLfsdTrQbwspRSMk0lWyX1daAKGZoJm1RDTW65xa54Q4n6j2jfD%2FOAc18sqf7%2Fk4wfy4m%2FPwDtU%2FdkRkiE7dvl%2F4V01ih7MYrBskNOPPuVV2QJ7nxt0JsEPUYa%2BQA1yljyn469ulz6pIQXv8kL5ZICzLBY8hWBq9ma3XO4AtE7AyuIL7IHAf9GJ6G35CoDZBhfAyG5d8w0AulGXUsuO63tjxOKNJz5E4u0RMbQqil6K0SU81YgzZeJidHLZ8b1fKbmNOkhd5JUNXDteSMueE0q6XGiKWzkRXAR5vYn5jvXnByeA3Tr4VGi2k5UduqFJ7naNBRBJIJfTmAitB1v5R6NYWjpTeTFPAlb9z4Qo5%2B6WfTxGwOIJQj%2BExPKJplqgG6fMqBwzhJ07%2FT4y3Cl2t7tUNkkzHQzCVyai%2BBjqkAU40l6YnKcPNOiRq5lvLpsBYCs%2BW3iEFwuuocfgYsHozyDgiKY4B6jObZsyqXt0%2BUAni%2BPSPpBO%2F1AG%2BQA%2BvK9rOd7vbuGFCEPD9Tza06kHo0rBrJqPoaN9Odxo7meDeSieDXAJm%2BqL1EU59Cj1852h%2B9nlgB%2BvUtvPxCBkYXetbR0byi4MDBI79XRQuqK7d%2BwyMzr3XUuJ9vCrKUL2kqn%2B%2FGlbz&X-Amz-Signature=ab774b3b5d1364721da4f3be3e8295c9a9792487ad7ac3f3ae33c6ee9f393928&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW6JN5FS%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxwkUkG7LwbBp4FEaav69MoTzBgDR8ZOQaWUERvuMFIAiEAqpMiQ0Z8StD3jEZeDnUMzWZtuIF%2FrHaz3YS1orr%2F2NIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyO2iPzh5eXHoVgQSrcAxOSOtJdT%2B0XY91Sztasq44jxDUXHuT4HCU9ZMb%2Fzh%2Fpu%2F900aDRWYDgTqqsFP8a%2B6nsmMBKVSCf%2Bg5vINT2I32nrK9BrDPf8wZ9YUuWVCR0yt2L19YjO734oRcCfuz%2F9dRl6SFg19%2BhnrdhCB5dwlWdCaYEiSqzD5ImgKhLHqtFJOEbgfwz1IqtCQ2OjFVeM8r2SdenGnvp1zRgyz0rrygOEKE5R%2FyjpA1ATsGXS%2Brj15Gwm25LPOjsCYKVmOrfp8Bp%2Bf0c3f%2BEIAi3%2BULRkAusvhKGjlWel5Ioy6jiDcZ1vD4bs4wAgPsV9E4VvgHgNPYoFQFnqo1UoWwY129cnqmCpDhVH61Jf0ronvoe6h0%2BOoocLlchR6Fw7%2B%2F4sO2xj4%2FiOtBm2mZlLe58wNK4gSAXK4rehmWfYqFwPxFjJf79o496D3zfjw9MRpYYlUJsA1seSurBQzN5ATQceM8IR0YPTdvXeG9m%2FBlXMJeaVklXPboIuiA2DQR3FmiVp5WyDxkJI6%2B6JbgzMyGzRG41BYIe8IutNV0dOdYjV9Thpijd9j2W3ev%2F1VOcltb%2F8lKA1ZBmWQaZSr6sBSWbvQ%2BEyGOnLzlGABUs3AfZ5w3eiIuiB3BJ9OruihLayLgpMKWmwsMGOqUBIK7Qp%2FFYv0LQElgl3%2BpzYi2vbTfJ7RBG4w9dcpxn9sMVNejdte%2Bn%2F8ykNU4LbSTZhf8Cb3oFq1urOtKikzYfKidpROO79VQYKSr0CLWYvkIZMBpAvyZo0g7lv5X7ytgZdiV8qsRemxOIGgsxmalOlSXWNRs61G3WDb63Pr9sPZ7bX59o3qEX6O2%2BlbroiY3r%2FrP9XNLhfY8xkBvRFiOmGZ8sPTPM&X-Amz-Signature=3f5669aeae8158161ba6f4787d1327db387d3e10e54ab3012f5eb5c4feb8c54a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

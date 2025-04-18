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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZTUWLR%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs%2FMQGkECmI9yJEYPHwFJyzGRv%2F3gjWSr3Wzal9JQ1gAIge3xahcBURIgx9sFkamb74Kjb0jNM6uYdGuRs%2B9Yj%2F%2Bsq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDOSKLSZpyy2%2BQXDLgyrcA60%2B43hOPFzw8yTkMJWHR0hOdsjrSGRDN1tpMdEWDQuiZTfejbAK9RyA4Amv2EBtuxyUlUAXilV%2FJrl52C%2B3VyDpjgDubjIeVUSkAzfaNIUHKq%2FKDMBdB0ZlelgqDUg60GxqnFFnEzIz4%2FJHHSNfk5HS2DgaIny3HVPDgN9eqVTBQwc%2FiwRxyO62UL%2BzAnQ5lGJ0ksM3dk%2B3SF%2FgWtdsPEhpXyKlHjRpWCer5pZEdj4XuUfbXXib%2BkA%2FLmK2csgQ35Y1E6DaJ1YdSS4LNPAovFjRPnUG8hYtcGfkRU90a7iaf97W2wGzXyO2qPEFZ3m0xo41LO6B4rUMsBnQHEVLMBQCVwwf%2B%2BUQjTAbq3kM%2BhP0gm1RJJmwjSVGMK5GBqtNLCqNSvTb0bZzAqsLRurlx7BJnwGIF2EbmcuIXUOtNWBh2bkjD4ybuTmr15jlv2VugLUmG5v9ARcwnBmbngKH9E1oHL5ELfWdUs5Ul8ih9CNqzxCTMx1NaIWWkFbkLuVlRtjlT6beRur82EXc7Mv0ZHJIhmCPKx1%2BnLHd%2FfQ61ILhad1U9WDXYaGRbZq0QD2s7GnJBu1OR2Ehr2LIserRvb5iDq2t2epOsGJrq3ugvMVlP3g7vVERNC73Zr0ZMLXYhsAGOqUBT72LwNEOKOXQyzgrTAMNbQBazeZjBuCpFsix8AXa1ps6p8TJdGpc9B4GnwnSMY9j%2F55KsuQi4Pil2VvZazbcNzunFKnwMj8dZM49%2Fqw7RsbfSuKvI19DAlU3mM2qkZeL9ORVh4ZKD1%2B6AHZew8Wop6fmv%2B9dNmpcEjXl2i3ypGPM5Hh0wnYhGXIvpzWY3mY63PrBQIb7MaL0fwNu9X6fdnAMbyOC&X-Amz-Signature=a932b8de8da724bf2d0c87b713e8b34f3c512bca90175b256dd30d056b52a516&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

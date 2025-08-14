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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR3FS7OB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSGm35xQ8bcId7O6l79ApCOn8uIQKPhyp3uoLEwVYPKAiEAzT%2F8b6QqDOIqjJrJbrkdi6R9Q3XDwRG4JPgnySiwOnwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDGoPlh0BWWFjjkXmnyrcA34UO0Lv78wmQ06ouGUcvMf3xPVL19wPgX6%2BQ6otwCxFbwegP3zIp46G85hkFd4x0LUlOp1Zf1xmm%2BdXfMkOiPp2sp6l9g5bA0TfLmIpDgaEAocxB%2Ba9vtNXQXE52%2BZ3GiRDVNZGJxx4yrt%2Flx1Z6C6SjefjDGlDfSeDjTiarysBRrfPQZ0Y2ytiEJTqp%2FtlcLIK65Iwi5Eo5TKNH16fhWa265l5%2Fp586iosuutY18LST7UM7ggl%2FhEDccG1%2FK8BwSlAT7V8EVgbbYh8Zl4IAT8r2P8ipHmd68HHDgHGiZaMLaPcnr6korCTNYu312UfkuIoajjO%2Bi%2FIYvCZmAiNW1YwEnwFfzBkzAXIZJQcmxZ2klqjApvuld%2Fs6UNgEKVfteCIFRfInzLi2wfk6EMJ3ssDA23OPxAiZw%2FemfeDqDKRXRom3%2B4gaZaIZNtj6KybS0vF0lzIZiiDr5TMqsoYOla3HpIZbXMqnu8O9IQ6Vhgp3lyxBys1x2QBSelH3w2AjXW87uTxogsj%2FwNtHEB5oZQd1%2FU3nhOis32NzZgI256E6pMF%2BXVxjowPtXnY7WQ8SnsuUDtM6xKk4clCVoe55oxbpizXkbK4ojFgMbhLkrAlGXX88r9%2BlflWYagWMIq79cQGOqUBYgJZWvRf1J7XWWiWB1vQIhDTEI4p2MhUnPGBJ2Ibk5eitI6ripBPooovcnk%2FhfP537g3XpPDY%2B3vEYfgb42EOIcm67ws7h967R76%2FDejtlBtpCnHDtdyZC3v2l%2F1Ax6P%2F7zGO4HggkMKrlnG6skyhD038mj7dBUIn8gulCCDggl%2FCwHa9Yb0qYeVg5g%2F8Wo32TkLR1doqf2aDoQFCLwrQ%2BBHVavp&X-Amz-Signature=d89edca376c786ab53945d54813ea1d56a08fa9d5b4e1c3818c3d20419e94fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

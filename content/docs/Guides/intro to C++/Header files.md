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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3X55BAT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDj1IBK1wBNYuvuFPX5Atis92A01ltjLhuRfhxQy5xYIAiEA8FsSOf8YQ8ss0ZwIN8AuTVKZQ0TRL%2BQHv1Z1XKxzmRIqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdw9U2fBdD5fzyKPCrcA2FhhtM1J%2B99x92IxuBTrymqZPOjQF4ifGzxbrNpNUyNxeKHvAjLFgaRBozAJ74h7fheHUZCWK%2FNvBKvWeeDlGiOkylu62aZ6Wk6%2FB8ZZaPZTWCbS9%2ByDM%2B8ecLmNms9mnaPJE23F%2F%2FD0a3IuyfOuDUSLWpJxRNJPk2BLLa44YAmAycPX0ogo2HmE6c1J40udUaH%2F0iONfOZI29o%2FrmVZ74RuIbk4jptbbE5RFodGFEeiUKqDV4XwX1s3Z9DRKea3iuz9yH84yDXLcZT2JieDtCSnzNYgC%2FpooH5oCmyC%2BgWcDz3HrXNjYru2dnazlvKMCQuimMI6GHwoqB74rRQ7hXce2hIghhUlMIMxDm9UmVIEfXKG%2FzW%2F56dwXXlGS2juoeF%2FzcP1N6pscx7MwvgPP19sRJuvP0joJQkDh3zrFx%2F1%2Fcy2lm6sR7PqSViUfnc2moANH24GZgezTRElrIoPSWWlXsQdIXcEJKqnR7I75rePbo3cc1mDXc4PxjmnvCZMbHZLp%2FdAfpHYBjHAcncmipCtR5gh3WT8F1OUBoeSPUX%2BGxXYMEsnEwVHisMQwBLh810MVAuarSBwL6wBHan%2FCs7OTyHsj7UkpPKxmk83em8A%2F0xMFxHG4YDC0YMMNa3pcQGOqUB%2FrMAuyJUeJT33y%2B9pTDnw2U66hEZC00NpXtqlgPnGlR7LmeoJPtTszc4wTRHM00MBkifT%2F%2F6JikOkKnpJ9FuYaaJWu6nQoaYPZvWRcd6ZUXNnZvgSCBcFO0e5l4jjPR4Y0fiHv6%2FHhLKOqzkXtxFITfjjm0y9L0UdratzTtL%2BwPqGM1gLri1WyPzdbVC1KGY3%2FOZQkFQ9ciYtQ0nb9PMfobT%2FJ1R&X-Amz-Signature=c9860af23ad155d526e6db94f3873cd5d58d84381e5f45ad3d19fe74b85875f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLUZJ7GL%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvh%2BvvAuMhgp4in1ft35xHitlxeYINEH%2FvXnorfhYcKAIgRDZ8PL8r3gUENhhdz7T01IAiHbk3SfEBQScY5v5RitgqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUhE6XKJ9RVadB6uCrcA3fcfuhAT0Z3zbv3f94Gma0rUtcW9qK2%2FLuXDj%2BcJMPjmZOlAV6DJNU7I%2FVdH9%2FLipkacS66L4c5Yg4xlq9hLTFKztLbHwurYuPifG6UHj45YpeDDwxcBAkwzRUL2sbQWvRRyoungaV3kp6eKrnQ3ZAi5Ddya7leZC5msOhR1pi%2F9T6O%2FQw0Bm%2BTqAdmP7rVfHiv94kn29ENkWcHyZuSGIKcW677kgt5uZclUX6Ce6uF6CvJkF6%2FboIZH27%2BcDm%2Fr2JEFvU9KVC5AvnKp03n7C8CLq6kSw4lBvm9nPMkdfM%2FY%2Fu5xhIhucNPJeoZSTTUJdtbHrCwX7N%2F3Eoaw%2B8CUBBzpLYKtOI4QRPKzyxioAs6Dkl9voPXDTdHHaXPq2ePTtG7EOrDOMwTHkS%2B7f2c4Z1BKOH7jkryjkSZgKlpPRWAKd3KzEFwyrsXI%2Fm2JRR%2F72VG5Q04fcBjsceLJONysD8bdnoCkKxprC279K4xCo1%2BYfAD0s2b9ykfI3LSu0ZZS%2FkZG7oMk44wLx%2F7nB91KzM12BavXaFctS7Am6vMf%2FxjcbQQp4dzZ2OkTprFpMxGZ5E9TWaot9WngtdZbVZsqnRhGVdYyuqj4CNUQ0SOt%2FvvX9ZAFodweJFg3V9YMOaN6L0GOqUBqCfYFz2ImZ%2F5avn0Pb%2FW9SJte%2Bflsp8taPOEHblUiFn2Rvl%2B%2FHb47E57XY2dgiHaOM8Kaz7MOV58vfPO%2B%2B4nQhVNtTzazjUd0Ta86Mrge4XOtPpMmzPRYz5RUH0gzLOXCJLtwk3hd1P0xU%2FWOvf1qtmIDaWkugrbek3MkgegYRUkK7pLWgmJbal%2Bs7rHzsLgr4KMpHzeiBruSjZ0%2B5oz%2BzQ5KOvo&X-Amz-Signature=8fe8ac4193bb86e1be1e0155affcc07e92c6a644401ae915457b690f04b75267&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

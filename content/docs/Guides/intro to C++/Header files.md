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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7YPBFYL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ2%2B87HRS8lHWKGFSHNThDEGq%2BJEIllnqsqr5Y4XlaOwIgMZ0NPcSSI9kWGtpkPOmMqyt7zzNJ2bh%2FmvvwmAtc6vUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7XALQFeBqxbA%2BNRircA6PMYLirpKSUgIuYG7Z4O3fPSyRAm%2F7BUGZ2r05RUBzVPH50V7jFIPzm04GZ1DiqkDCl2TUHFMeUQbRFHxxOD60uewt3u74hg8IciDqAAGca74ONC42baw8mGmNTMZIF0VfIKIfubvvUQIMTtPrx5QJzv9IgqUJ8CwMYy7fVls0K4tQUr%2FpkA7Hu9qCC6gXukH7vxUq5tHvLTO%2B5%2FeL5RX%2B%2Fyj%2F%2Fa0Ejo9gj3ag%2Firezmin3xpeOf1NDFjRbfWUwzDRmlWC06Dj%2Bg3DNrsR75p%2FESEcmfiKHvYvc21jUw8Nqh1AeTvGJky62I%2FhT50a6rDnrA1nu404c0kpjyu66Pmi5X25sAdZpng9iD1G5%2BdOGXJIh%2FJuRMgUZx3yS3hQwDINWx80ZdM4m3TsToMU1AHv1kknJcZTPo3RtCm1DMn2Nths0uSAgDh68i%2F27e%2BDyNGLWVSzkmQYwMGwbzCKHae654K32eMCC3niDlmtOQ3J1oINUfvfeJxeXcYlXjLwRmxhOgYAMeQIb6ollKurJ%2FG88SsUULafwfyYRQjbCUyHIsYx04yhEbQaznfLqZ%2BNECsQwb6oabIHv2YQV6PNdgupkz8tzNz5P%2BV0B%2Fy1oWX09kFU%2Fw%2BqkHgMEYmWWMMX43L0GOqUB3F4PlMixkIOOX7%2BmEu0hG%2Bf0HADOqUO2ASLrAivbyBINYKhqASJhvgn0qveMUr5MPTSCx%2BMvgN3kDC4cAMeB3Ef4%2FRwDqIInWlZWsxMAA7j6AwR2D2Sz%2FVzpsZ%2BHR6A1s%2BvYLGFjz674XxwjN7al6faYbzJTs9eCdUhZpUl9boTohk%2B%2FkjJk4snB7YskZlM4TxNUCCK7Af4sjMp61hyjgxWjjkEO&X-Amz-Signature=405d967df94b514d33bef362d4618007337157f14745abd4a876920ea997b830&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

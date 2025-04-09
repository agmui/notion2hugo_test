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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STWBZTX3%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDtahxYaN9vrXfYFhI7CUZWHtd1VN40x9mk%2FnsGije8fgIgCsB1EPdYz%2BziW7sZMBJSNKeoSIGrFDf6K0tKi9q5kWUqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgkRD44soa4pK%2FpwSrcA34hvMCqtmK%2BtNni%2FaxSysQ4tAhrThp5JDwdIqgYSAer910hRy%2Fn9txFp%2BIRIsjatQUb7PH7Bnbf5kBA6NCirwfKFZMLKiKRzb6sd4tXLmZ8W32pqJ4NalDySYUS0GqAQlP94WcNrCmwLN%2Fo1bgXpw55qZVX7aR9oNE6njolSseeTyoENKaCYV1nI%2Br5WP0Z05M%2Bemj9LU86YaZwwwE5PW%2FVtpXyqwNNl%2B0th%2B8Yvs3Q23tTJOSN49lGt1cnYE8HvDRME6UNBwNtf1OoeNMa%2Fc7zkwmNHrRtRsTb18lfL%2BERuZntoMct5bBGAhPqstR%2FUzJmu2ZNJukWrBqFafW%2F5XfGLEbrETyYAuExeGqjyZjBUh5mOcEorQ5nut8YLEf1y3oIoSLwVfxzkDUZhF5Dk0Ingm5Q%2Bfizb6XR%2BvnqpmiUp6VcsMO%2FJl0OoUCxbIrBHHWwhVf4FLejo3V7BuAsUX79w2H1ENMMYgRKdTuK450%2BLncH9kKLgsA6I8flv19lQcAtxGve%2BfATBunm3D%2Bt3t44PS%2FPKPKuQF84YWvgi9XDs%2Fyx5E0WGlT5AQbaS9CjI3qkfMYbiehlEyKNSK5FkUfgEV7wqLhIOySh0VlIxRt9rzzSblJqIgjXdn8IMJTJ2r8GOqUBD37L4tNcWWG%2FgXTK2vy5JZFzKz4V3EAIMQfpJ0vv4QnWWGzm95KIquOeKmjuT8AhRvgHo%2FHLSCtdQSM%2B54HyMtmfbe9u%2FXLTIwybEdZ9%2FDELKD4y8F62RGQEbsEUwh5QNnjQBF6AFDkV4T9dmJb3uYqTduC2VP2IuTkszpWYnTSqfWmuT4ARwF0koyydAuqC4d6SfBDS5cs2Dtm%2BVnTFhAmVipjL&X-Amz-Signature=7902c5436dae0ca904de6ddeba3d9e7fcb6550b5f6fdde01fdacc54b4ca62021&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

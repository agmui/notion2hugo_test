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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNVVZSTR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIE2R9sVvhLkDHCnm55AXEcq73v21WXw%2FDv6n9M4FrCK9AiEAzMxpGanEOztIedRsf2YQV8RUe%2BsUGnNeBvYwpBD32WQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExnnjr%2FiVeZm2mxACrcA1x4Q6hFr5ChRZYHM%2BeWIWLIPjVHtR0cb9jQh%2BrrSNuZ4EwI8HvBOldMG9ZOCE5Mt6PUtkGS9aky8HxDa8IgUq1x6W3Q%2FARpBugISXe0EW12ZQ%2BfROIH8%2FZgBmpRygbE%2B2mlYqelYkciAwO08j8eHvGH1siox9tXmxP2txH6IQpruTss850PS%2B3SEnTMFyAORE8clvuUwu8hbd8YMmM0VvUn1MBwT8Nm2Asi83IvXtbOKyZdBfLrs0sFuRZVJQqDfSp75Stvl9ZqFYsnmHcqJXEGIA%2FsSeEtp4uvyNqVM8q5L9ayAfrueS1FNz5WOLeoyvu6ITEXI1jI%2FO%2Ffl2jWn8k2hZheQNgzR18c%2Fd%2BhSxGOmbc3qXnnwb%2Ftjk3bdB1ZAtxjXgd6xrKpS0XQ%2BkIxoXXGbtvbOEim1pgnf6iVQFA5FopTgyW%2Bv9K6LL0ffpew%2Fp17KsTzt%2FTNjmsRBQMr%2F8X9dyuDtqM%2FqWC8G2LsElfQR%2B49xMSqEz0g02AXuLdiIa422ajQFRPdD7zCMN3XC3iWjvSMEPLs77cFHCcI8aTZf2RQxphWpSz%2BG2DQDWefnM%2BPWH7mPBR%2FmEJ8yuUbKX%2Fgj%2FTPMYNjgBWrB67FmN%2BVR4bncyME88pCjRNTMMi10cQGOqUBJSw2FY6gjdKqLZtxqwBVok5OFG9uG%2FMlRRRPp90J9Ne8MiYuOMxvPzVGpZnsnM5Q7z7ofjksI3tX2WVogE5SJkN2Be7nM4cg5l1lc5kBT%2Bvwd%2FopAdrKpZmxREdq0teYy5dU%2B0tGAvTvlSHWq%2F0tRXJmz5SBZrR3yGFXAybXe1mzSWWOBC62sHWnrCH66xazdLWMdMM4UzVv6qA5AHSA8tx3fPf%2F&X-Amz-Signature=692ba421fba31de323e2ed74b2d17864a40231074c0321751b2eb260c6c20f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

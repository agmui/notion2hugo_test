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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTVGLX47%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIG98Rj5HZc%2FDbycaDclFZmJzZJbtrjmnMdjY1azkb2cHAiBfGqAa%2FhOv7FSoF4WQrj56wEBjnkSgedPSwMvLf%2Bbj5Sr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM8gbR%2BS7VqNh4X9RwKtwDCmBKeNTxiDpu4LkAiX9b2GbcYzRe5xFm6SaWuvMJd5oDHnS9CLGFigL9%2B%2FupwLiAY8BrRWgeqWfOFlcQhJ7mVjqe9BFjBo8xyXF9unBhLNMd6Qh0YkHwHLCaNtWEgxBcU2Fr%2BvQCQ57v2lF2cwnS1Y6q%2BmOWwlAV8AVPSvB3ING25%2FK445J54JAkWf86htmombpAJLIUoV0d7eDuYjH%2FepmJwdWThZv%2FzQqhnp%2BecvfrD1S4v%2Bk1%2BQHGNSIgw%2FPoZ40Bkd%2BEjwAfZhF82aK3TfRZhZcj00gq84Cd673qCSumk828CvrpFyUKxxw8ecy0nunVfRWCCqBbEGqKxydRPiqMccboejgnf47iQiVNFRKrD7tjdAyiFmXTZ9VEWriGRXHTdPH4fxhZL4hDacgua7TI1KWiCugMZT%2BfzglpMxCTv65NUAygrzEK0Og74Y%2Fvx4HRxamfJkk0%2F7l46UnXfyRLTpgw6tMXYypwIztabPk%2FPzL0k5ylTHF%2BKzzMRVzlKv2nloApqddgu1eSRsVTjYStWP46f2dBXtFXWseg90byeDJPim2K7zQ9xJLA5hPNp1WUd6pj7MfWqkzuzGCeNy%2FdD0ep74FXlXMOvq3Fzd87Rx7QqXnktuCZwXowzqqBwgY6pgFss6ds%2Bw97dHnqcJJrJfbsWsoT0OWDa20FgPBi5zITHzvYbs4wBBcFfawEux0s3CZPHIASv7xQSz2A0Ri%2B8LFBJMtS0zWy9lU8fRqhN2yM49fN%2BwA4w6tIY7aBM2zHEy3YcdH8DQcD%2F1pjVJ%2FxQoV2acP7ATQJ1JHzsbWDHyNWjkT1UQDysrhSp3CA71d2%2FJCMMmUx0ceMRCOInf5A%2FanvBHIXsXDB&X-Amz-Signature=fb3193e63790a1c19102d3f1a4eb885dd6fd45f741742bb21b95f576194bc93d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

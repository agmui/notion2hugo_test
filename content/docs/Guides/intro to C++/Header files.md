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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKU3B7QY%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDzgZ6kbSlYJZFJS8n1jy75dLuRcT1n%2BqA%2BvmP%2BMx4llQIgXQ1gpRbo%2Fl3kM%2Bn4dJUHji7S%2BRHkmLUzPI8cxE0a1ekq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDGJZu3AmqwbIbWt6DircA08pj88%2Bq0sCS62T%2F9j%2BXiRWP%2BtH%2B6WUCao%2FRuHx1m3Qwr3v7iNBBDzHBvcp2ca3QrE5P6pOtyEyzsboP9H%2BJurukkSDZJb4gzzkQKm%2FUIfRXHBhld2x9YnZBLYvRTGxUEg04IK6FBH%2Fc%2F4LG14JQktVjJ1alS%2FEe0uaGfz2iZroPxhDkC7rAm1q%2FDZRY8HI1YAdkZKOWuPrtl0MGDvsrpYCpoAukdXh5XGezEbIX5NPJnBVipqCyeoNyiiUmK%2FNe53qb%2BIXtZhfGSpVUCJHPHps7hhYef0%2B8ExprtZyP%2F3L%2BTslr3HuxVNTTKOFUb%2FEty9Ovl7L4b9%2BEKBy8b%2BKNY1l6yugbDlUY0PRE6Q0jNj9%2BSTNSl3SIuetGCL9TLVNTN1xdfDqfy%2Fw%2BkFs3rj5k%2BoPbiOgd8Hdqji0rvS0zX3uXEIJjmohTdZXNG3QqdPYuJI8t1SEqmxol3N53Heb1YFVvdF%2BthXJS8iC8x7lrgI8u350BO1gaxwbhNJZEAap26tyQZDQcX9BWQ1nE2p8t5Po9Fwo26HznKmfeBWgj%2B6XzhWBHiErguAbROVYnlAOzbD%2FSwdpVBjcn%2B%2BCyKFDAfoqyRrkzsUpIWcOSvG8wgT%2FRLMzwTejZBwdkZS0MPPh48MGOqUB%2B6heBDzMUMnkTAUT07a12%2F%2B6%2BGATU7%2BiLYkA2Tirq9kd5mSduPnsppPW5KPOiSXaUs0kpiK87fwH64e3xy5zsfb59oPp3X5%2BRRZLCAMyeYvsYnI5vieyxIx0P%2BBZdWFeNpH3kz2EGOKLk8YIzWWaM5fCaCMT6KxIo%2B3DWZV4N8wrYWpnaQHYN%2Bx9NWhkL5w%2BdkAEAUzhyJSJRamz0Z%2BTaxrfI6wI&X-Amz-Signature=9afba2b0cc893da5ee1a193cb932856768773e7a93d3c76122819d721d1a8455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

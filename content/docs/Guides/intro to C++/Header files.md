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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466422JRR6U%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDmfnHBQWakaLLCVKKcwEnJnp58HrD%2BEto%2BVMPWde9g3AiEAmITXW1BBT3U2Da7rZoqpbRcT554v%2Be%2FnavkV35XdW6oq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEsrVYsMEWRU7DWf6SrcA2w4oGuGT8KGpkqvpyJ3F8AFkba5MgKpDKG3Fw0wvQ6inyswEqcYgZcWrao4sdqKQ2wcI%2FJ2XGPjZnM2iNd4uTLcUtSEd%2FkyqapMxljMkLwZirsINScUpY%2BRTG%2FzgcJx0T12ZcrqiALriGKm8e4iyDAwqqrxxIqqXQM%2BLj5%2BNA5YFXURPGIsBnchyLNH3Pwkem05lFiRYkFxnrIxVtmOvy85mFvw7J7pr9iBmjXJn2RoSi5Rs7untcKQ3ILcZFibfH6KpLztHxgIjHEBa6iQ2KdNdYigL861Dv8Up8tFvsOrdJxJ2YxeVteo2jTHHZ1wywlFuzxSS8Cw56ffXUR3qQeZNybmpiS3RjegB%2BZrnebuZceanHEBYAU4G1zzZ23Nj7OKRgLX1jl8WnivgISVdkc4HEIFOegwh40ahFvv8xilSFxqQBsqpRZqUL%2BK%2BG4Fb%2BMsmibSGjDRhswM%2BEoNSbnRW0mSDBc9iHw3o%2BHzkcPoFjYcX%2BHOHt99TH3eQoUl%2B%2BSxIoboVhiIct7jOA3WmUqAPjF3EPDtUehx9Pys2gG0jAEWTVq%2F7feGfO6z3seIi%2FqWKu9pPsHW0QqHdvlRO56z2Fzr1HrZS2mL7RVGlg6ruWqjmq4t0lsKnm4rMNmHqcMGOqUB8fiJgUd0Hz6wEP3rpzjFGdI3G8P0mkTJhtNk6LvxYi8Is5vvshoR6YTF3ENURY1hzQoRSQ4UmZ%2Fq1SrDg0kyUTOM%2B0mu8zo7ekzV5mMxb3qVQ330kFooUad3pIqXl2QWCJ4S%2BEoKgy2nSf%2Faymcu%2FEYDYxNoGOjs%2BdWG3H735umKTK71TQK12BxQYKOK3dq0vF8UKfu3a52ifj9CvoCY848ZPArR&X-Amz-Signature=7d4a20f760f453c09d2b1b4250ed05c1d61050e3103ce8bd17addd786d2c7e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MNUTCXT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCxwJDZKmSDUo7qdNycWu9g2bIUQOCKh70%2BlFU5nXnC4AIgM8x3dEQvCGHSz370RI%2FA7%2FhfeEkF01ufuEI17RpEXugq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOryV%2FWYR8algMyXoyrcA9qtq2YJTe51iUmRoOi6KvMWl9EuHMIJ%2BrBggah3Rw6T73%2FdLkCFq%2F0Q4pq7U0oalCf%2FmCmNJn%2FUOhSTY8RZXSKjJhKPJBaKp1UkkGm0rpU19ZxGg7ZSM6cODO5n3eYL7yYPwuBs2JHOa3uFYD%2FkaLhxcMjkgVaZ6sUVib%2Fkj9%2B6DajtIDOgDEtYAjjc3Q5FKaaaEO2GAiuzjJL4wP0uNdnTXR6c38BAYOZGwfMpZoCv5dPhyLfAq6xntB61UoukGAlpgamPEAbwPVTedLM1cQmQRzAQVsyC%2FAnCO879Vq4TK0RSoiUbBO01RZ7XLStt46dvYnOAmXQfOL6FmC%2BDWRzl3ChRdHHl8gFOcGYgv9YjnEfVgLjeShMFEumHsyyhxSMvOysiYceis1y5GqJUBHtJgxerVl6MbL4keZEY0jqe8T9FYs2E%2Boydim7VqXzXEQ7mmNudAthipKqIlf4TZ%2BSUDuoJfarnP2r239SpoKJGE%2FSyJ3cIRkKLUtRnxfUXko0lJIWARtbSnCOvbCVDW%2BInG95v5dp73xK%2BVY9mZ5Vh3vchtvL%2Bbdx7%2FVdCYGQeTf3QucD4Ul2N%2BO7E7Fh%2FWbHaLRPZrq%2FFUsjK7BRhzQvYdFmPfidhwKSw1IuTMJ6R68IGOqUBLSyxsgvXLhW8hdfxni3igT4Z549NH8hh5BGOWZF1g%2Bp9nsCnp4ETxiOlk1kOe4bmGk5nz5yQv3yMyWrEYIygFf%2FdHKz6agg1YkDw8lNEo5H9A3htkDF7iW7FYfpQASz7h%2BEVPTdHb388iT0kjugvi%2FThkamrNitwPuoN9SM%2BiAm3kYusuvbN0CRxs2aC6%2Bp2m3cI3ihfhxyDSuR9knG%2FqTtuYf9T&X-Amz-Signature=c9763c390957d1c903d17fca68fea2eab16ebaae0a170394baea0a1b4c7384f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

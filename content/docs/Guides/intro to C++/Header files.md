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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQNN75C%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCID5Vt8jZo0JDsVKhJVDs8vMiFVIHsmbiUic5nwcfAyXbAiAOPNIpkYSLuFQjHTqaluXlIPcV42bBd5jPD1LWiKnXcyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMUn7tdvQiZtSuk7J7KtwD7VlWfKXRVLH2P8Lc7VDLitrmlRM4P%2B8lHGNJuIhVQEO5LBY60dDWIVUaLTUsXuYtnteDDulQxnwI6LTlCBJahOaxiaiBsVmJa4EhisZVGVOA%2FBV%2FsUBVl6QpW67AhADnuiEPzTKFSDoTKFJXu9Fjwz8NG0%2FsomJvLB8fuKFwvbxFFFV4lbpytk%2FHzmqTZASoUGOgBF47leUXjZg2W7VqJXS6AQpp9IE42Yfwuy8DvcdadzIKjkxMY1yHy%2F4s5XBWmt8VdxRZ3VFNsz5K47NBILQsQsol2guRql80Pm0XuuTg3wGWyhe%2BrIopa%2FmNQeT72KT8aIs%2BcQVlxgkNOX6mKeqrXoaYeXGtQ3JwG%2FgF9tDIJvYcq5qlLwk8HKZfJWvaL6%2FAFBdgAcuvaOGohiVVErXlpyIoI51mjL04GYDE%2F1ZHrk1DkFXxC5pYd8R3tLLAm%2Fmk7R1d0UWOo9l37kT4ieIlLhrQXlBGTGmJrnG9Py94o0Ju4SNVEnouZxMxE9hrGKZoIC1f83UmXwxRHtTF5DetEXGSfTLFVrkg9az0JXqPxY8svtZI1Y%2BSX1mX18jMf4FrqgFOf9QH6gycUd9GV%2Be6aNqwihiU306%2Bg2xZztJE8A386uz%2B1DShwlIwydGAvgY6pgEdEni%2BYLt9%2BbYvo7Bx3HGLQOXNlJs2EZjmS03KTqlMtLXkE2LyF1FwS%2BacXZLSM6XZyoLbWLxEUaxSGIZVptIlSlpdabTJaZ76zzj1%2Flm4YyWPOgFXgK1hkOBXFpfPxYX4TxhYkxT5oNxb%2BvGl4%2FAi5jCg1LBMsZP%2FnSFg7eEBrJJktOSM8XzdhUfePl9hMoaSbIj6U51h0roNikU8CKb7K6pGMaxb&X-Amz-Signature=a717d10261319f8e5e1c3ad2f4006f1cb48f3675c47cc1e1fb3c2f62dc709779&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

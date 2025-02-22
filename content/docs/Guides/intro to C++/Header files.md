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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VDBO2EC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBn5urHtihuPrZ%2FKj%2FDyxJIdV9PuPunYoo9xXyPNX7mAIhALu9smIVpSo5I0CLzr%2Bmg8v8KIiPSzAguEISBhtDbaTCKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyk9dRB8wI7Ib1%2Fu50q3AMzBaYUy9%2Fud9cqyt21xjTnaUc%2BA499oKUaZFdk1ZyH7siGslJCaoE5nqQ4XuhvvhodwTnGTjYy56Zcw5E7SFze%2BCxa4p0C5lwIB%2FoY969W%2BDiuNQGPNnXBSLdoN7VDO%2FqRG18Rp8z6NpJuBBlebkEcAuTvhwbe3LyXTpXLs186ylj4qE88C%2Fx2dlHnkUNEmZUWFJfwFHy1Z%2BLwE60iQ%2Bb488X%2BeqDBtWZf1GvNxTfE%2Bw7Q6N7Wat5y6Iyv%2Bm6YQrfm0tGOqVxSo%2BbySuMckxDeiakJkqJp8%2FaKc%2B58Q2Q1Ixos41KqZ9cOR4ZOI6oRqJVjgxXLEXhU%2BSOKXEa19Lk3xvO%2BMsvIqhjRtpRnK0rFSBlKI6bMidEQQmbqO%2BZBnSQgWwqEGztqdxKt3HbQKSExGAHWmVuaL%2B9HOMSAKOPLOYztAYF1pA%2BuMkkgB%2FlkKMEFY%2BXYZ%2BGSnItwSgjAZiZ9BDmeeqWoosCRLKE0nAHlMgO%2B3B66pM8doLBjbgB2wjTkmY965HX%2FP8n%2BhKTXQJ0p7ZMUD5lec6i%2BLui5pgJvUjxG70sGlJJZtBlsOldEsZwhVDIcQgK7tFwfrT9a9%2BW%2FlRWVZsR6o5%2BdDO7z5nXX46sqo5FWj6xCtLyVMzDo%2Bui9BjqkAdHU4QzsR0Goo2Wfbhd9Byo7RgcsR3olnl9yeNsmfOU9Zrsm5W7nqM6bOf3422bQ0OCpsgGs8PL%2FFN00TLNJis9U1B8YJuLHkyOrXta15ZqNw47LiH6SH6AILibpvvap5EZYKNpRkTfs%2FC8P4cItQHZsYqU67HkgvUpasP3%2FWf6aMUSCIVh2hEelG6wMjrGfmVwQ7MXhyXN9zboP94jbGIlnhQzv&X-Amz-Signature=1800557f10903aabb9258cac4eca469cec27470c6cdcf6830f3f330799403037&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

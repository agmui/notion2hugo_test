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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTTK76V2%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIEByhcxB0iC7PgJLm%2FfEYAVnzlN5WPMtQFzjNf%2Ft7SwOAiEAjo79O7o9lWboanehXQAXglXGyHMWOi4eF11zT2frkrcqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDnKDXDgDzuJ7zbQSrcA76i%2BVmzI4unZ20a0LUDhkyjA6fyytRhyAxBSIGaQVpwNaUoZ7VGkj8W3uvjFs%2FXw6HU8C4OLdrxXwdEZCQMY0JF4yv1V64bglX%2FCTHfXLkM9JJs9S2A7sHOE89FMI87dElE5pcICsiSt84zPebqnIgT2vS%2Bh3iFYRpKrTNpJUZL0T2vuA6Mqet%2F911bcJfVQ4P4kewcME66CI%2FhqDA4KZiMtW5XVKwzXGYpImCNwq%2Be9mCc4%2BIlfINCQuGSienrqLxl68MUhMdMReAp8OSU32fLOWi3ox4GaZvGiOV3Trv5%2BXHuHWpDP7vve11r0oFo40T2YJrg%2B2sZ2RaUolxNhOkNdZqVHDBpnHrgZafM7myzAQZRpfPd8ePBmJ8eo2%2FJYZvcfIyMLnJbd4MwgT%2Bl6cYn5DN0hujGNsbP6XGZJYT%2BhbNHqFWIrlra5y6JGGpAalPYU88plE2BLpjdd7u5Y4CXA%2BuDfi4Ro9xS5uIin0vihorB7DVtE7fFy3SNwNwK6LFFfuFtaIcGEb8zp1DDD5dkjxmGNfCj2g8FrEbGKUG6v%2FsB9UWINoJpKNCz87Yh6mStt%2BWlzvlcVW8JKln%2Bv4P%2FmD6EBPqWwHXzQZyXvX2T%2FdjjuZri6uu1fsyIMN%2FBjMEGOqUBGWg8npe2CbPaHfNGvC8Iu5VQ2yTPxq4QtElo3%2FZcwsmwswGPVHkojr0IA30Uekrz4SB28D4jZjhc5Gk9bztqdVzJJA5yar8YFd4aXRGICmWsL%2FX1%2B%2BVSSmdy54K0h3H32IlErtNp8gq7m68v5CKt8hQb8WZJjLXklXX%2F4gbvJsQN40tl6iea1Vp07kHSqg%2FV6bM00mrUbA%2FRqtJMNWbnbkdaK%2F6d&X-Amz-Signature=94d2fab8e237575128741ff5976de234adb6f3b1d162354d0230aaf033a2bc73&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

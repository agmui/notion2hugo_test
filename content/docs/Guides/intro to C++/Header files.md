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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBFCCPGB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvLFWRzdqyi7VJ7gWtfpnpPx%2Bv3KXuepvLdcxoabYdMgIgW%2BrqWhHCvXqYufnU9%2BUnGjBFGcrTlyqKTCCsCpr2V4YqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERHJecPxc%2BzRW6qkSrcAynmSnv3Ddk2DnhUNu5Z9VwCLCv%2FNTFVWvb4P7BAChgP5vyr3p3yy2Cpv%2F32hkGHJ6rLv5Nc9qlT6MAYsQuzVyXR6N0zh6PCRlt9W7o5QaecXYfPNuwowk9VKgFNYJp8liHTUcgC4KPqpXvNwXyt46YLpWp4Fwdipgf8VI%2BiVUSxXF7mnDAd9Ndzo6i3spk%2BhiQVOH2T5G4z6I2xHCgekE8cgyvJdeus%2FWG2YyVa%2Ft6oFTFZKf%2BF2o%2B5UWXti7w3lbQ4iinDuYP4UGJvQd%2FZDYiIe6HCxKABZz6QFbERXr3Vy1JlDN5xjlwME1tVTSM6SAE46KlSo2Ehkih3qKbFEfu9KZeXyh8%2FjWULZk2Y2DAokrB0ISAhQhk3JKqo0AjNH8R0ApMWf1PJL5VPNNcuTjZm3iZhTKSxIFlmw1ofM0EFgvqdQnbG7pqlqzO7m%2BrXW7T2duG3vG0NMUGmzEa%2FDLoSCRX4Ze0txUyk3wjahWDCMncyL7tH1Pk1xxsDIwDf4GIuX6AxXKWncVPCdUo7SxKjke%2FOAHrFUnaFko7BbEGvYy%2BUw5PSv95i%2FQgUY5yt%2BxVoAiQ5XZtZ9XhcttL%2BuU0gJy5U7XaDralk8xVVi6c0TMNm0A4dZqjBNKiBMM%2Bk7LwGOqUB5g1hLZdAh2S%2B7rtfnI%2FzYpEcxLxGJHRUYCjIl26%2Fps73tghwFs0%2BbeYCJmPs886GyrIp04PbzO85noXEqVcJChktTy2j2Zv%2BPJhPoDZ6aqJI98bMT1%2BbMiTdjJoqMgDbUnv%2B%2B%2FjORenqx%2FZMORYLoyF%2BTcEBwyJunfOJHDI7UwISAj1FyfGAUVqUuNqxE4cI%2BtJYl%2B%2F3yjTk4wMkTZ4kqEebQ6np&X-Amz-Signature=63c57a08216c135f6325f1cc5e1ba5ebfd5fb23cc9863a16ba9f089f6a994e74&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

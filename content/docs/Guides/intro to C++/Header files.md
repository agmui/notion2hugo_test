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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ2H3BH3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwuEic6B%2FBUvBKfw5DfS6hPTVO%2BPRo%2F8wMYl8oytNUnAiEA5S85R7jzvh%2FB48x8zX9dTpqoaOywq8tax69rsHKazAcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOB6Hrd6aNoYFt7CPircA8h8CtMaEpKVb5hIxu9yR1QNbbfWknpkm5ZEoU67adE%2FUeQQIdf7D%2BhgDAWghOozqRRYTrVec5a5txxEk1d%2FrGJXOewTgTtv5aEMh%2FzWlgDVUVgPsOrlx1esKDyNSzqrQfRdluFtEt4sI%2Fvw4ONfvalQjh6gd1ZfHt1tt9epieFnAXoz1IoFsQH1vUQ0ev4Vs1qu%2FwsSbGifRaqwupX8IGK8il7akcFvxo6lIvSfeVUcQeEjSwg%2FDI3Hgf9MU0ui1KWqMxkyHAI%2F7eF9KhlV2NOJbkuesAND4v0cjhcsIqVAiOZFHz5ALXxTSKo49WM72xzLYFv%2FNsQWWBfvjEyYwd8ln6i4wacXr0ynVPgmIY77dat2kYhagkhuW6hPAbVV2El1%2BLkleFmoY4L8rAPS5Ar76bmLDRoU3mAkWXX2tYbSNH9xgFB9mJtiBqHBOg1HsQfMaaxahf60sjysZ5RYh4IvpWbSq8YMEEyNQp5qJos5BVxUTDkRXhzVhKtz46MdqNRbeXJtYkNGQsbVU7tvbMGJe6VY%2FBsYll35UvSQq4rP1IndXWyngnQAxqU98Qh%2Fwvf545%2BEAvnCN64B%2Ba79T%2BYPtpUE%2BndcCYBVC6QElX63zv5myjB2sLD4vfXJMKmd5cQGOqUB1Din0ILnhQUL8NXEZRwobDCuolNCDEU6BzZ%2FVhlqjXi3KWygT%2B11KiQFtRi5jM7izYXRIocwLvrtRmk%2FOYGF%2FNcaOIJEUPcD%2FpYnneP6JmveeowTlphGCD%2FUMaz3sDRNxXsZtJCQXXyfVJaufmsxZ1METnvHfgPVW2hi5rCpu9K%2BK9vuTvxzjejzejJOMaXtTfw4MntJi86kf9o3zqUzQNwo5uRC&X-Amz-Signature=4cee523f0f53a1d13c935410e4ccad451cd2134bfac9d646cbd55a76d800302f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZISPUKJL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQC%2Fbwge4VwPLJN1jDz31xoFyzSncJvSTa0NTdTUXh7ZzwIhAMequpTzr5%2B3cCtVn1vsFv98mPK2i2dfRDjz6mfNFB0wKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd2LfJBxVmFXfWQq4q3AP0xlX1OQf%2BZS4%2FHDhdMYGDxyM6Xkvh0cHdnAPMjMkvCdRWq0gHitWoKmwmkoBAk3V4Yr%2BU78cS7zEnWx0dch%2BqLMWAuYRee1fga35P0dzYqkwF76ZQHdX9fV65lmMyWuPfK5ISvF0axv%2BBrWqCarIJyMaXWukzaPFpJIdFsSnL42z0IbRfY%2FVB3LMJd8Pcmn9p9Uq37ehfmAUzqQALGxFN7aVMJXsejU9R0f9P6zTEtWDZ%2BGBcU5ueb8wq3zvW0lBd17OL8oOd0nE9KKNQqeHpsdVQ09HnbEm3hflBXNh%2FDOXIL6zsss1MZfsqEWeoDwq%2BBlHe3s0PArQ4%2FlPZ1qdpZ8vnoy7FzP9PgFlmMed5W%2FO6mRnVlayzXDMyIDmTaixm5KNfViuvaCQot2q10tT5MvUw9UsrnfyN2Gx%2BlTPW7nAfo1wxJug6firet2T7%2Fg3%2Beut17pGwgsYjn%2BhPNty05dqSGQyOhkjVlmPe1ez%2BQ9vxQ%2FURvrGgE1Ft605cnD1v6tAMW0LoIpQKXOeikX1GY%2F7I%2BfqDnOZ89b0QFClaYsqiOF1snRG6q1FdFkG3x3UktfN5xYR05AGikQaZ7COB8GBWHBXTmVB5IHrNNP1krcxomdSW%2FehUKRRmADC3hYXBBjqkARpbHpvz06ZKAdgppIj5DOW%2BP9VHx6CQNPtbOEZ6Gg8x5pKCHTWlJnWhttndBYa6YRBi4ozWpIMupx16fdejQxTZLYKxuwMRrE7LMfew20kNBIWgt11jrLMxIgAR%2BpfyR5crxc7WjG4XQp6MaJbTS0EH7EdA9vQUOJknHOcM14t%2Fi8io8Sr4KHN3sBnhcIxQzNgNTb3J%2FeaDWgSn4zaMELxdr2iP&X-Amz-Signature=f4b848603f1b502a45b09ba6f5a50b1a40d8c619e9f639d7ce9fb9f3ee9610d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ5O53GY%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDR0wdTzDXCRktyN8LlDBP4cHWx9CYE%2BsVjrWwaU7IbAgIhANYYT6xPabgkdpDemB9w2aFdaEG730K3sFooxyOgmPH6KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2B3hbD2%2FqgH1NNssMq3AN2%2FVQquy96rJmr7DGLsQFWQCiMKHsPvt9EpXU9yGBCyoWQCoSPyTJjIgvAMbtpgDX9ywkZF9t3Xv7wSbDqXdNbzEV4AwlNF3Krw22yikPcoVqqU0KrBzJ2%2Bbo1UJ4P09Aq4g4tBxpZE3hMWKK%2F2PnrcGiFC%2BTNCqF5x7z216gZZPgoWVe7acABNIR591QrFheDYIpggQRVRLXlCraI5BbBpekp%2Fy7z%2F304IRkBOvlkY0Qwg6mSV5Bk5DT5ucksubEfpCfWULkUIxLIyBGEpJCnfRtKrpTEc7VXGV0NBcAyk7R%2BfS3Bh%2FZIxvXIRt7zBzqdr0c%2FEI1NW2d5Wjm2JgM5By0Q9O7KW%2BMd5CR9m7QLOKzwsURXCyUYn0dGmbQu0uWLmGPUpBO6XYAEKR9TvM2K3iATyxEWjyoTA7LXbGTNyVulck8ZFzjpB3TZ7xcKUZnq8tk1r%2BzStWF8S93NfgrcS5MRlvMNXuKC9LPmqklW2grvUr2U6ZFuZZepU4PvcvOwODvQSOEjFqfyybbH1%2F2s0UF5BY1%2Bg6Y%2FeFxCzQwgTvx5QmiFoH5u7mcW3gjd3iF2mP01TSf4cvp7DplrATyzoYH7Hzh9GSwQG6c1YaCDABG%2FbXSRJMFeEEkT9TCy2%2Fa%2BBjqkAUP12KCG7j%2F%2FTK7T9PR0%2FgCjLm73W2%2FWqwAYewHt9nAfQ9LliizHXcS3%2FskMMoiWzquoTmR3jyRfRxwKXxCxLdhl3dW5H1a6146sHhUZd5kFpnYqjxgq4lNEB71Kz9GiRVUsXyXp91ICwzOXvIfKr9%2Fg0AIkTflwo3kTYFJ1aaQFtOghoiad3Rzls28N%2BaILtF02%2FNmG6ALWwc%2B3h%2BhVnIgtQA00&X-Amz-Signature=98a4d9d5330d2b3b2d8aee52d622b6ebd3891a7088b0f026ed84fa88536cabb6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

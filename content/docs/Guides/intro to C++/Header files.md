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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WXK34I3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDPtQofd9atmCtr4NWhx1eyH5z5TiU2k4d%2F0OsZBXb6FAIhAOV6BzNAh0ztdqJKQErYs8NRXbexLW%2Fc1F8ilRfTd8qXKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydUFCJNk%2F%2FianIxu0q3AOeu9eLdSqze%2F2781wTfTA3tpApkTzMup9Xsxs9QlAvlSAdapKttuNMrw9PJ6QdDigIa7eNOLBg5zl1sHbeSuHeknue%2BZ3eKwr5mVWUZ9R2%2F0auSSraYvMvlx7KtHZKfVa%2BT%2BRwvIMwOmyCSgLmLQY2KiGMTxQNKhCDZKZQGFmyRDodyO4MoA93xr015j72B%2BmZTdTSd1gbvECWK40yQcBxBal1uBNeAbyk3j3HhIVgKA20Z8sPa6frjFE4oj1ojSu5ZU8VdyoD7eqXWr7ubMFkBrhHSd4fAV7EIflgUByUyg98ZML%2BRqEYVxr8HcZ8axAPGx%2Fz0xycgVr4Xfx1wqKZ%2FK3NAPzH%2F%2BCiSwgbNqkr%2FrEBp5%2F3QEg1AiZNVhgUhskzUhZ%2B0rj6nyxN9BUeJiPtWM7WTMNCq3S%2BUMVpBixH0Iu%2F9EDlSBmQNbkV2KWASzGOHm2d75SLFCt9eB7aSNLw%2B0ecxmEOsbEvAKr%2B1W0yNxqFlsRr7FT5iSdY3WtbFwTZFo2b0U9wgS5E4mxIK8T4PeNi6YO%2FGcb47eXzeGhDcKni3aEVxxe2ZwE3RsWuvz6uw4HuSibPiiGtlb8p2aVOgotw3ibaE8UlEVpEQFtKF6sGX0uOfNYRpykzRDC53K7CBjqkAexqyup%2BBdgAMygImOVeE2daTtaY4r2X5Qywep1wspEvDbXqCG4bNnrleVsnSo8GYmWpm%2BvGAstytTIRrn8Q9EdcqCLThGiejcBWC0ohp8q2786w4rOBmbmD1kyaiWb30lhmgET%2FBiwGBAucUf0CI%2Fjhg9bZhVDvfb2dAoLzHB2g8kxO7jWwCSvQaIASWi3iS2DN1Iznf7Y0IqCM8K2aanjZVdH8&X-Amz-Signature=452d469933f3f9bc336b971e9bb222e9d7354105e9d2881f988e453d4cd0dc9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJANBN3I%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBZNIvIcEaQkYkBUKyhg7NbxlEUEDDuHcPqTA3I%2BEE9AiEAzVxEmSlH4lhpRmJNRHmMWZVTNnxTLNiNG30LdIuSHu4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMygKqj3xMLcDkgj3CrcA3wu%2BsuqAHw1L0NFbucVODPGwH1JJGlv8JMhnTEa7Rl%2F%2BfNbl%2FwF70dqeQBM6017cr1EVT2dlmzhCWBFDAisaqTRqFhj1QJSqR2DHj%2FT4GrsmlZByDQThbnmZ1NT6NLJ7JgLwijug%2Bz482mNwpAsO6vyYflKfjX%2FZFg0cUIHcLJ4V1jY7NWJXDjvd%2FyIEEL661xpwtmHmvs8O13wotiD9V5jWnS3srp%2FxZOcMWXHxuKXzqqmq26bX%2BLp9twA8pQOplUrz2dmZqO8BC%2FdfQIqF8VH9zzUvoAEkvjHISbqrCLMHjgoueaaukhKY0HyFaVUfHtHmdpEZm0wHtsPG0s3Rugs1bD3E9QNVtpMBXRYe7iYltHZAhCfOzPiVJxJ%2BX%2FLrHTJX2AHrzFSyh%2BBHfEk%2F1kHyQyzDVLEHnchkqcnFeS%2BksycQ6LaI8e27vRSsCpbttgS5eHhjvwSyffus%2FoBfFWP0Oojn5%2BL%2F0hY8TE4dKmCAElPJjlbxCdzZ0b9EVTTBF2SBUIUgUiuogRiGhIjC4kKYtE1bobff2cdIIky2oIQz2AlzcXdzeE1V5kF9ew1sRgA1m58vDgZnAoZ620krveBZ6OBMfVy%2FLdI7U9XOBm8sotRBYi3%2B0dh%2BxhdMMDv2L0GOqUBgLzTtVdYDWtTXn2TcOVmmSBqGURrOIjnOHBwa6pAsk8Xtvf2FH57XtO4%2Fp%2Ba6l9No%2Be8ESwJv59HsKmSI06pRddjhzu6ip%2BNBjY7b%2F%2BDcjB2Iu557bkdARgiFzrSOoJZ5442kq4jjcljqbWfWGDg3DI%2Bqp6viDjKjzCMUcUk0GDLPYB3uYBVS%2F8gmpPUpZtSvEsoGk7veMyp3UZcAaQ58vySC0Jz&X-Amz-Signature=770d2fedbea63a81369c5d7a4067d9ec333b3eed2da058b06c897b0e288013be&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

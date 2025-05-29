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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYJH7QBI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAD7JoLwqLRQqyGBdWp53G3JpZgeXAA7jUSQaqvIugyOAiEA82lHu9hUNdgYpqao9GJ9lNoc5LTHKJ7yC4ddBRNsB1sqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNu9%2B2OTzIJd7phqoircA%2FxUxyb0V13X0%2FfTVaceiDQmH9ftL1ot0QqY4Psvi1zP6GO4i7EbDLYEUhxeiqhq%2BQ92XNeCkO3Edv5eGk4Ifkf%2Fi3fPh2AvO7JA8MmvmmSgxS3N7%2BWiSJhS%2FpemfWUxAlkOdWo3GN0SQnR2gETCwiNS4jQj3RFYk0hM5kBm9c5C%2FeRGk%2Btk7Zn3BGLYQT3DgZ%2Fj%2BKciEDYrI%2Fk%2FAimnnKAv7idR504WYvrRTDdmaAnHN%2BIa3d%2FGbN134WF80uMQlIsIJbiPSlDxeFTgrujcK77zKOm9VYfXCsOO7eOLYnyQZrhOKvKi5cTkOOwHfBdpUKsWg5P0dFkJxiW4Rmc2Sx1E5SNd0y98LfwmYNmbd7QRxeEkBOv8IVCkbvcEY6Csab4QG%2BXNdm798JnJaqB2UvCBSUs5buu2UQHIqBovORLZG%2BVgUgNrBgoQ%2FFvrdFMxnhw6A8ucKCD3Tfw2iLDNIMdqn7gRXvBofx4820IWR6CL5YxJ%2BX939%2FLoFzYecYUtDzHU8WIfX1yl3FPoahJTFDm8ODHVyH37oQA44%2Fe%2BtLYIqYB0yCZJt1S2DtFC2O9KXM4bpOr032JsmVRsqcV9udS%2BJHGi41JfJ0McvRx5hmJwZ0VYNSQm7hl0glEPMI6z4sEGOqUB9K%2BtvtVZ4r1uXdqCEXkhy6NPckFvNR7Xhksi2q9Pw6R%2FttZbtCU7nBJ7kAj1P1hzfyfa3d4ZFDRc8JKmmuFn7CiQu9TvWRCWoYNvPgeFyhAKbw%2BBAY1%2BXMhaYgoQdsSk62YhsD1DK%2BzfbjCLH9IMU7a5vo5Katuua14sZeWkgBScF65%2BnIozFi0nC5HgVQgJH1135VZBAXxLs0PMiRdX6iX0r8nR&X-Amz-Signature=3dc3a68556dbf9f434327f4fead5ebdc443e8748655e7454c08f3a3fc390e4e6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

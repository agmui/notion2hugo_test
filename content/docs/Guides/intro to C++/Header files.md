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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGBSSJZZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD8iE4U2q17wey7fDPVjJPF3v71AeEPif01ZeF3A1CsXAIgAYCN5xzj%2Bz1xisQvQtbekeAw%2FbOTaCvfm%2BfnoYmtNwgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPjn%2BkRLUW4TigD2FCrcAwX4ZWJfrxWer%2BnOkex9jGzSGmP1xPG4ISRP8XiZZwtMRfQqQQHLXPX2r%2FPKDtX%2FHhxjH1xYZbvLKT1yd3G9Vu82YBaUOgnIxlWjIYzHlfORTzGqBgVkT%2BoolxbJw3Z9%2FTb96wou1n8Ysm5vHibvOamoF4zwYNIThptJiP7KEVj6weE3vNTby33DW%2FTuSl5NwHop5AnOSZhzsJiL%2BrSeCz65b18nW2pa9hc9cgVK3%2F0UQ7jnx39Ouy2xNrkLMvuJrLYxh5UCRbIqMzfTVplWLyHIcv3KM32ZXm%2BEV3f4tDEjwPFb6OtbrrsB9Z6jexsLxm7IzDofAW3oKdJd%2FvgHgaep3KoQOwo7YnjUV%2BJrATZbn5WY1iF5CP9ZNj7o6JlmvuFWFMdVBcGf4sHvJMKq0Cr%2F12yG9Eh%2BhArYNYVRxigAZjL5wmkjEDViRtquoOOSzm4K5zbX2z6co54N4cGsONMA8CqGwNpSvDZz3N1oT5N2WRITSLw5cCMFgRCB%2Fu1gJv3TVl9qzg0g4xeFwAqF47IvBzrCt76%2FgZmN4QOGj8BgKXyfkQL23J1Nx6PdTaa9xadRPh7z%2FUhf51GJq89LbQz%2BctsMoxgrCmSfXDGg8mz%2FngN1ORG5pjUfMkL7MN2sx8QGOqUBJ4ZfkT3vdg3%2Bxl7%2Ba7XN%2BwTtzW3VtoE9clxWaKLFc8O1OkORKWVZhqpHQKrSmUESeAgTMSLQr466t6%2F%2FR0s56KuvJD7pR0K7yGSDtfdGat67iLXfRKrynVDRgf8ZXdOC8bgWseVTtUWIEwOjKqbS%2FhTkWlf9HAVYIFcbCSYx5vIr%2F0j5knr%2FxT7UoYbQq0ODNRTAprDM2tnISfbd2MK57qwL%2BnXZ&X-Amz-Signature=7f330a53d24fe7faa5439ee5d392d1d42886bf9e98fd1dc9f518e98b5bf5b462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

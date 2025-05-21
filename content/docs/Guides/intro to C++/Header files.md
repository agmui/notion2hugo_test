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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAU2LJOB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoX3fzqZstJxBGKOOPlpgq1w1qiDSKp0PtdxcUvM4%2BawIgO%2FRSSnhBy0qZlvU1Vq6x09QrDSuvDFHfZcaR2BmTQ8gqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwoPUw4O0WQbxsfZircA7ry0evmRQsRXBoa0bxzrH7MJ63PENPKbwWIv77liHGfUK36Vemd3%2BlPOtIy9fsaPDGIFb9EjmQjkLgsKhCHrWlxnFiLM1mGC%2F972%2Bz3XcRLtgUsHCqQdDT98fDDxVQXYn%2Fao37eCIM2cora7llbow8bscAioakSUXLVW4L%2BKxfy3f1Wpi5bG8CVM6fic6m%2FOubfA6OsdNQvVbqm5HhDdkHrjh365pjujQpa1dAX0rGc7iCFzW7fpC7dF59s44JT4OmtUNZd68wtAAyXImdPQGQpYthqfFIDoYMaLnmqE64EZqEgQXwGCOLgkBjlwlGDB7XOyjFzHqAXJfLgIR6GqiRtutyPoM8%2F0FwH6XRXIfPw0NxBFD3giHs3aN199DO6JTVrkDuRp6w%2BdabDTqBsKEAP32J6EO9r%2BLVi%2BxdE4vFOm5lffTEYoLBsGHQETBtdbjhFkPoZ6SepI5d8o2RPMN1aD4sftLKUKI0Iu9WnWFFCoHP1hsrX87zAFRhsXduOj9nkJFUBg3oH%2Fxlu5cAIRHuZSuUmuLOj9fUqm058WQa1irOfKb3efSEYXmC%2FtfZFRrrKFFJTqluTVbcGYcseAXx2bSBCdQ2B8BaULZNyjDAKIm%2F9D%2FcnVDjgQTPCMKuvtcEGOqUB0eKMGJ4%2F9zfTge2DLpYU4YXY7oHK05hwb0ua8SYY7HSs%2FekQCUDWQPkymtJz7HaMzQ%2Fgtjim%2BSrwKxMwrVnttZZRD0UYaw8d1uv%2BLp4EMRD2EHrmAos9j1Z7Bv09zG3BN0YtMXpGx%2FuuC2rLPgA20Mn6RZuMBtCdKqed2DRX64B7vIa78IIBLGQYDqwL%2FAJxHBnvtaUrHT9AadgQ%2BbWeLk6AgZuh&X-Amz-Signature=d8e0a203f5057c3f83b5ca5e3dd278d160f3d696a4081965d87a010d8ca41b33&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

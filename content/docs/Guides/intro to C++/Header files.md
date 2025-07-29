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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EVSA4TE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDouQieSDv1LiqKoaGSgNI3SZx1gUaigEKgFK2emEXQdAiEA2FThH%2BGaRD6rd9EePFAVkh%2FjBm%2FXZX8JG0dFc%2FqTkw4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUOfoMJ48JgW73G3SrcA7fZybv21pbzE7bnn87%2F8YoQXgrwPUr0nfjPAr%2Fn6IWw%2FreXyRyvtvY3NMh7P%2B6P6P8n31%2FdxuPadHnOjs2R7cxf7tNbL2P%2FJkgpNEhQraxaVNUsi5uev32cZ92PBdrdMwaJEDpOYhKrHIT%2BOXZfJ97Sx2UfHLuozb09sCYJLgE8I9gqcBZFt58QkIqs1vKGSqs5cIv9REW9bpfrX7AYWbdBsL09KN3S7qBtddqlnPokIKFEwGMJpOD1pVrtNpGNP0phnmZpdqu7YGVGVUYpwlxJlaFO4GPxdGK%2FEXCgdUg1bbKjbyaFPQMDL8FsmkqqYPsetvvxiU3zG4XHeqcfPveFcLsYIDBeYFb3uPyacvnr%2B51EebBrTYjwUvSIRTStaz18mZaFfZc%2F5tM6B7e4VDM7jymRoHuVyeKWF9Ttu%2FRvQWwrXHK%2BqZ7mIddphuakvjB9dukwd3mUSjUI3vVqpLSFQ0e3yLWPDaCOtq3ZHlbOWOiKh%2BNM6TLaUhQve7vobVkMz7rQu6CjVnpVxpZxm0vk0ztJrcixIAby3ccXKhcdfleeqaLadvx1gzlb1pB1AmMX20pFht%2FhtpxMvi02oIthjEu6lTfulrBUAcKxQhMu6URmj70nEGk%2BDCuEMOiwosQGOqUBGlvMInFIVYKSbvBclwHCMV1gMgMbGXxQf2d%2BmIJPnDD6UCF6w8%2FIyOPFXVOppCMiTNTwGZRl%2FFERsyNv1mKmeISARaae8lqJWnVORPTnigwAVxQairQEJkA5zaotZcNe68t3XwoEIkgoMYctwQ%2FEBdOS0Rz0fKknEvWnpzbE4hVCY%2BjTjq1VWefrWSJxWG%2FJD0uYubTu%2Bl6xZuyoi8Zlwx4IoTwp&X-Amz-Signature=f6894357dacd3af350336d7114be843dfb2ef207c80f44f2a665d60a588faad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

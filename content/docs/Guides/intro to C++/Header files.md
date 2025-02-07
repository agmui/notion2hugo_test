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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MPD5CHW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDlLnEvqPq3rrIgAX3ibUE8TX7gTTpjP8LOXGPhv7oArQIhAKTrsJtFwE4K6UP5LTkiXdDzl5TZZwd9Ii6w42S75imKKv8DCHkQABoMNjM3NDIzMTgzODA1Igwngu%2BKCTgZ91jT7yAq3APfNH2RJKxxEAXnk6N5XeYe6F0ECKK6vd7oxypYkTxc4w4Zm3KcUAsW0uaQsIznzKhKO%2FAh5T0d7Iav5yDHgNU52a39tDxMjP%2B14pWPRQsYfwV1yWFon4UUGoWIGZu1dTopJu0sZafN2cal0gfGQvkszFVBYoSqe45J3GDF9VP89eCDxzq2RzY8j0ZWth6HgLIbBSKm4Ed75wASENrTchyqolnhAm0xJtSmdP1w72tzjUSdSME9OPY9yv%2BIfA0Qy2AG5NVF18HIaGsVFyCt%2BxKmdMs9bj64CslqpLo6IxQ0umu1vVRvJUucbvmN5t5YJBjlqBQHBX%2BwOl64FvRFiEF3Lqa8Csaor%2FHOpMa0phgj2rNkWUy9ywUOrWBh1j%2BCoR1OtE93A1BI8fl34DoY4YTQUZM%2FFgVtI0MhIBJn7qQU9dl5ah848GcLfKxrHYmMDe3gPeJvKUI035FExcYe69%2FZvSZ5hTIoJ7aiJJ23XPtpQRRV8V%2FduAs0UOuyk0ncIDEHo1T3XVTJ5GyXKvdduXdcPYzMtJ42XezZwpOHS8zORmBrBMAooEoLtjGeiXl9qoVx1vn9ZKu2dTnleNnjQXAIijCWUOpglLFpfvRTiF3LvQTUpiP7%2FSQAb3qJHDCm4Zi9BjqkAZeWi2s8kPatmP%2BBptIWwuwzvRaQSdzC4CwdshTlmMbaURj8o0Z7ri7yjJjptx2j%2FUQIl%2FlEV%2BaRDBfRSRyGFxrkgU66G0N1ep0AJzip8QWs0RnQ7lQIKNOVMSZIr4IH2vQyXBjWROZq%2Fy7wdgfCxbf0oSE5Gdue7Sfjcn2dE4EBYnjjMEq9rx%2BwvGx29qEHOO96CiEZouIvs3OLFX736mYIlzHo&X-Amz-Signature=872cf5c0d94b32e6303f304c2994263e1f894e739a29da521a145f354a02f6ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

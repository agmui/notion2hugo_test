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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BDE62DE%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT%2FXun81wNYjFolVmsNkhMeFd1ojoL9VnOYq9IsfKzhQIgckKlVKGVCw9ly8DK31H86uerH6WUDlIgFkZlQPFxt2kqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXU9Jtdt9mMKz5n4CrcAyBaoIC7522MQJ4XAAOiXtlPKLitpgSsmjrswf%2Ft9gDll%2BGTst3sSNXIjhBdHEUTKSMNj0Xhzb49jki%2F7sX1r2IN6v1frhkyDWBpbc6nbcb6GQ3AiLAZmQfdDoaQLyqvO4%2FueiLpOi52B5xLE%2B1Z710sSL%2BbpgjOmYSuMLWFDz6PIGuvocSeHTflHc%2B%2BlmgieaxFgcghdmDUKLuepKmPutHBon%2FE%2FOxNsBH0pVWOQII7S5Yi74QFT%2FcyM%2FyqqYS4lYlfuP2ezZJUbPRwFz%2BYkgCz4DQDhgtqxPWSD4XxUqYxz1YwpOhRPPUUkGL%2FnGk26HL1gaTxMDlKJqOzGp496MYogYuZJRPVzQV3HBf3h4EU%2BhyeAsvIUbkqhl9CNPyrPWwca1ZMAAN7VuAu65YSrN8hPZayiPVYJ4ku4vS%2F3baup%2Ft%2Bcxr%2FHy11kXramwzMQTjg6rIGpXNnJPvtrj5izsVUHg%2BNGpu6YsAJRQwqpW88rSbkAHbODsOT7gV%2FhYXCETIgunPVrUo6wHLVLi3Fuh2VoQosluHtgiuREp5rzv027lKnkavj805Lc0v4pEZ3ag5KehwxMcaQ1WEsuZbkixWWItk1sDCcqe55XaAIywBZzNIwNdxUqHLTc%2FIGMMzMs70GOqUBfLhxOgRdPowkQnn%2BpXweg8fYaWwFVDCr49%2B5jnIud%2FpC%2BG743w1%2FP8gHxI3GN3pz%2BIaG56UG6zOaF9YjyO1J51wrBmZB7PhKahP2%2FxpcLofXpLZ1QRU8Sq1veFjv1WLl5tVqkMDKAg6QNNcSMTXREYrCJ5VmYR39Ca5wQcEzZKP2GRj6fAyVVyupHCHRdpF8UIARPeoVBD%2BSSsst%2FGeGfuy5gVmg&X-Amz-Signature=ef6ad80b2f68873640363035221d57d7eec92cb4eaea4332395434ea4166c712&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

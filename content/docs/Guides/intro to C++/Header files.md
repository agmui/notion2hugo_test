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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5WKVODD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIG%2FSer9KEHaHzynE0sebjkS6XMw8RPDd5mLI51ZmgCRZAiEAkcZrQfDHhs90jc%2FDOXgWy8XLr02QNkBujZRU9TySruUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMngF%2FzSXQqMX4cjySrcA8ZOv%2BMz0F0SRT0JnQ8AGarbVnMtVEk7D%2Bra7dClG3Fu5Jv0b64dMGdk4ojLLIpE%2F5Ww6C2T8pMwdUc0M8VMx9z5j8kVKTtDnx3xpShUEPh32T7RQAxrBcjFy8s1HzF7vvL3jlrP1i%2F2OK%2FHykWcXFT3ASQdx2pszmX3qNX3Qis6fPzQm8qa8wfevIF2qblgNTQSYkvFH0IYju71dzCiDxq2B9h6EGDbYvZota4Br%2Bg%2FEOpBuOyU8E9bCjftophOmosg%2F2PUBMKeOGL80Toqcu8%2FCMk55sizGubIQ268kfL4y33m34pD822%2FDwkh6bAEYSu%2BkWhVm8J9jl4UdpCGBsGwGIK61Qo%2FtSnsKj7meOFKU%2B%2BEmLMRkfC1R77UajzWCPskak5mgPvX1fCEJGXyCDnjP%2B4Sq%2FwkH%2Fy36iVGgL1DL5Gq%2FZDdT%2F%2FLMgT8xskw8pukxZlSncFs4UGB4ZqS%2BYUoUgC9KTBbv7O82Ax7HfJyTjBjvsy0524RPYBdb7%2BY5uP0Cc9fNKNKR0kRACCwxhX8zOWIv3fixuEgC8WoGtsHDrLC21XuMxvhR2oAfiA9pCwwTsMdkz1s4h9KiYHWAPzP5Pnw73xqz1U0sAENXJoS7HmAvbqK%2FOQoU8NGMIG4wcQGOqUBp3GcH%2FmZZq4nvEoPxikS64m4O995T3J1%2B2LFZUUEYCfDpU07dDd%2BHuLTqW80F9JXYRHsTLITBT4Yfod49FzOmzS2vEDF8DDFvBLoDDFEYcQ5YFExZ7%2FcI7AGVnCihFn4hGvyzX8Td0RearGGcHU97U7gC7xeSPUuZmz3ISMmFC5O9sJMp4IpIP3%2FgOprfl3fc0jVsMKHzlF59ZHM0npBRYLID0bT&X-Amz-Signature=ece3f1f597484917243c53155e0ec4851d14d687e4f4cea8926e4ed7986e5a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

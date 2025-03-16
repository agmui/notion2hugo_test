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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626XODXD2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDww24f5Efl6MuTwlRpHM7A3fRLTARsebivH8q5aHBoqQIgebsSHbAYhpOfozTawSAvWd3szIfjcxEI43pPBE026wsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDXCUro6m5RJ0M%2BD0CrcAy94EU9Hfd4JdkpYAN8UPp%2BrHmpmOkMzFnBUMzkvC1R1VL7JEfp9hiOQ4RZ%2Fqpo0WJlF7Mgtrh3p35V3SaLf6CeVTZQKp9pszfn%2FFd3aa199ATue%2BwtoWzjPGKLrrjeZPHnh1LstXwpsNVc4w072SfFiK41j49YOtF%2FzgqGHjWNy7IEaVyNKMTwRu8vf8TwpNQAcrLLiYOi%2B3IpAyJjMabvNf1V8SZA%2FIMWwWJBCuUVBoA4SPiAPINWxmIvwm9hGtEcTzrWfygNtxLNrTAcyzUbz71B8uaQsrejLh4sNUm257IcrHNDGuJaoslH%2FomgSRl4EmVy6ApHf0ZZnyTU7orqo4I%2FAbMMnz%2F5lYH3f5gRncRsQOAlIhvTvYbV1QmftK0JVpbhL2Od9X55VEi3%2Fx5tSMJ2ndsWmT6eoV2SouokXSUDYwCtHv5bcGVWeAbjDcfgArA3sa3Tny%2FYaGPPVeYxbQN2Qus5%2Bs6qakOsVFnu2JJ9QWFlwZfMdnxYtAEEM%2Bcj2MaZT0H%2B26FRKGYl3%2Bqd9ZTR3MvnYlgLJ72IIK0krEC694hEubVah7YGMVaxDb%2FhdIoY6jLaV7G7Jd3qno0O69O8Pe9yLrp4DklfstFx%2BwmEgGdTl%2FRRcbwR4MIff274GOqUBGVW1x43WdEl8f7w6p9D6yzrxjIOxZ2bWFkmcAeW09iPuTLAKoIx39EVtwDhiLHP%2FvFj595tLAD00l2BpcYS9brTWPlOXmnjnkUNuvBXtmSLnCN25pMeEECSgQ49AWvMUOaGWotoynMseniSr5TwqBiWVGhMxI4%2FxTCdclIc5hiqSvtBppFL0Ju5Te1YOvZCzvjp0VZJF35MXLPenfZww43c%2FYcv9&X-Amz-Signature=b1a71faf366eb57063d8f1964beb410db4dd0cd8790411ef88785a20b8217fef&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

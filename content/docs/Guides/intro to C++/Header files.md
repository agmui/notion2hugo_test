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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7442DV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvam11JOoWUlGQ1H3I9eS5Hzm%2FLEEXkCQL48nLdlYMrAIgNNMnJR97kKF%2Bv34bkO5COXTOrxS%2BBzcE5cZ%2F%2Fcjpk8sqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4e%2BoqkyUWB1YSGCSrcAy%2FeJXrCXyOipBc47GYrg7EoSBNe1BpA1qKyRufjqxMncPLsWjymZwWKgJKv2H%2BNCtUDfd3TK1Eq5E9iR0dWheMJBOveCYBYfUffPsFyxyGAleRkgb%2BD86PeKQ6KLnblyn1lMaZtSEiUMdQ1DPsz%2FNa3A0%2BE9URQw5OKaWGoZZb5W8ccvzMf4mYuGGW4cqOtdch%2BQM91Bu%2BE7TrEU%2F9eaWtP8wQC86r4%2FRggENnXbBL67TEwQhvmwg%2B5ZmCLbuVfOF3%2BGHP9f7wScxgTqR48eEJieg76MyZY%2FpAjUyJQmZiHrEK%2Fb%2F04kInYRzJEX61bYGkJYASSQETAUTpNHW4QLyp%2Fj14gJP7W75icU6wXBlCRyuOdKRE5Fa3q1XT8QnNUekiunpwSZ%2BslTAMy0jKgqoK4M6CsfO0PfCdIpJ%2Bb1F0FfNq8i6svK%2Bf6RvDtR4tW8wvlu9wEZvG1PE%2FpRGrdvNH%2FHbazK3Xst2r9GxSndv22pEBR2whpZ5en7huu1FajyYkEZUpJdZ5R2h3RV10DS%2BRIi%2BH%2FAK5TuU4EMSjyvua6DM1ybt3F5Vc0SncauXR7zODifX9W8MsZxBoFkp9IPP0UMKTa46pUFt5PmwNNm9DkV2QyQug5U8g5SO%2BfMM6v2MIGOqUBe4zRMQ5xa1hZUvs6zgjCrNGxSFp69AIpkZRs%2Fe6UDsTzBSNt3axXHaPRpFNb1Qz15KNJq0IvO1TePLaeEbSr%2BEnUQD%2Ftfg1ahEzo6wQNCwBGqSwKF7C6Vpb92aMd10s%2BvYL2vwGTnYHq%2BLo2qMKqS2DZ%2FuqJ%2FBVEINtsqSVyQSDMa%2FceGs1vuZMzDKc%2F6224jKof8vhXF5FCgDpbMddDLovlyO2k&X-Amz-Signature=d1c4aed31d47fb23133c4f17a4147c1b0986c93a4dc2b8f05b5c8b7df92444c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

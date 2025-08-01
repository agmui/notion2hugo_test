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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7M3YW2D%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdrKmjV5U%2BGzDnz9bhQ74dbJ%2FnzIoIPUavpkn%2B6CT6SAiEAwuqB81Tr4uQSDi%2F6mlolyoCCJzMPlKDHddLkMqG66usqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFaJzoXEGLc2yzYlSrcAzNmRkN0UtbsEVKy6jFrxa0WM8I%2BphT2M0oeugKxtdCukSQOdkFEYfU23VNdvQbYMjOC%2BG9i5%2Fl1ld9NxlVHY6didITL5yfp9UPruvW2QpfeCzmSu2ejuV1dMKZLlj4lecoLCNHNkKzB3Nmg2YxsTKq2jSmbOtDdMDhoBpPLSkqEP8vwQTbmkt0cnUg4K9NK2T5R26NHRujoUOfduNH8FxrDYeBqGpT3lhCar0pHlT%2B7kRcTLA6ZmGBKj0BfyvFS9bKKXXeKGz3mMU0TWPGQa6cFTfMsb%2FMcFUssxAZED%2FaP3IBxaWAwDffVk5OhW0NYYsoKH5rB%2B82d6SMeMkXUkzs76CY9%2BDHPFoiazMHbbx2PAVEyM2IRNFi23O9jY2IF9%2FTEdyydj35HL3XIC149QdkAEd%2F0B8a%2F%2BrxteP0zpYuHXUZFM6IMMbhX1x%2FmkVldsx%2BZyplMBTW3xEB5OH%2FnzTZtPrib09S3W3x3EU0%2Bc1w%2BeoFSRkUZ5iyGMicZF5NCpnnsiyC8ggI1YOt9TVK2ngsRcZlZDC95rpxGD746DuBg%2FYlRJHyz546W31qcqL7VC53Wei%2FtFH2LTfTiFMxx8R%2BMVC%2FbvHjNKiZZJf1k1gGFz39ufFUsN0zuG3q7MPG1ssQGOqUBmvorkRmgc4PdrPyd78x6Dpn3AadLRQfD8L6ZFnVCwdc1jmWkaIkSExIvnSrkyQ87kZdTkAn2a3AMsYDYbOCHo3CQp7LYrLOf1HatCRM0zaih%2F1GA5h3ZoXgtqpNsSLdX7VDi44O885Q3pCrmRFl85QO8hEbA0pFYdmcRy9aMPn6hTPQy3iPEcvVHZSe0%2BVF5JiulhPqylyW9Ipmp3SvqCt9R5BQ3&X-Amz-Signature=000ecaed6079757b2dabc998916afe40c9eb59a58b9137d4021b3d0a8424fad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

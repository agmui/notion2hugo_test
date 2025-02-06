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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BEB3I6T%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCG5587MkxOHXz3BspfIZCrPCMLM%2BdQ6dECtWwMtNsnvgIgehq66TzhfzCTZcAyYsFHbchsTyLH8RGrfsjZEBQuwlQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCDRGJcldneaVKkFFSrcA5uGTMJscpX0QG8cFM8sdFk2J48%2BJLHkAyy5EYEydeGRV0tXEG%2FQrAoIfJYKE3IlAh66q5RVBtLUcVXNt4nhY3VNUYHtzsiloB9JILEkGzJLjGlh4j7smPkPWR%2FYHiwLbWeRc7Ih7TWTD2gRH09VGPKcniCKMcUiWT8BHpFF1vngfwyUZ2BiUGEgCmdvaouoBx6Xx%2BGPronoWeWsIPn6V%2FJHWQEecqU9Yv9MoEIX6zjZ0CQlJ1a2%2Fk4LyiwGsNjDeiAPYHSOowET4vS3k7Bqz5L%2FWXy0B9KloDVVaDtDW3Uy5BLbBRmlvyxqrnEhHFICAkBHzitiPVOKA4RlApxrZjzHyBSNatxIyWqcwbqOgoT71vsHAyJ%2FmofqAP2ofKQuH3%2B0YqRKdnOWsmCYAdupE7MdmSqRKTWa9C2M7Mpn9s3es1Onu%2BzCwAyGOwOtfMieQWpJqDkpyrDE7EZhbEzyk6TfGGZaaOqPRSll35Nsk1ih6rnLah795H%2BitJ%2FYQjsu45j5m5xjZpiyHenWo77WoXneU2Y3cnvkUeAruAq%2BcCaeS%2FE%2BNtYAQT6l%2BvORRh1G5KAVTXex7bpapjQpO1qKh0B2s%2FNEhtOHycRisEElEvQpOhAMEtfyUejzFLvaMMW5lL0GOqUBQxavLjQKhjsbAdhc%2B8x%2FgaUV6OMTbI7Q%2FQEi1J2PEyCzpf0nE6XxB6hxWhL%2FIR1GmuttjOy6Na4k308%2BhPj8qu2W%2FYtsQzQlghH62xNmnHrsVySLScRa1149DM3hiPytDyMPWBxltkhycpT6kgyMnTTGLQr2Cgquk%2BVeBlxIqmtGDJQn1LXwS%2FmzB%2BOUVN44%2F4G480e%2FbXRjU6Pr%2B7WrYib2nNLi&X-Amz-Signature=67ddc04196ff0cd6443558ff7611ae14af613c0f22ed6152d024dbb83013acfc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

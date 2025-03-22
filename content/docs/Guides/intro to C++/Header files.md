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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAFNV2G4%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDn5PI%2Btn%2FbCa7bLIgcqu8YAO0f15isxFaz%2FhsYLv5rXQIhAKm8ZXySWGwDbeb53yW%2FYaPdS6SIGu%2FQEr%2FfDdJHGbmDKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrSMf0kciX9gy5Tq4q3AM%2BqiwzEL5a7vBpcbYAt%2FkGGS%2FcCPCHA2w02x9GeAPbAo44ZIHnx%2BSIrV2oK8QrZ52IX%2BmxuX3QMSGTuiyCSC31qHRKzigUhLMG1u%2FVR0%2FTQuewC2skVCPZsYePvEsW5k8T80mmdEqsufB9kTelDilifP9icBhvuwixuxdZf7udU8chKMFwghSRP9qUl6VYnoDtjTRQpROs1HI43uZa4mkimAH8%2BtbyOuqB5by3iPStOlxDXUK4Az0r3q%2FgFmGkNlhJicgPsZ0v%2FZvSTcBrSIamAQHc3oeqCWjceVD0w%2FhAQSqVyQ1uruD1zva6d1LP3cBHpidX1oSbzVICbQQPrqYME%2F2wrGeVMd%2FsbWyg1dFftfXWwpY6%2F%2BCDgyQgYgv50097qnh8hIAos04%2Fl5n%2FUqmMTZN7qLm%2FDIuJ4o9mYbLx49jSIwfSPhCW3G3HClzFzVNFnMHZWV4wISiRAUG8StASnT5vaHVjtz7uIHisFfpowRCKY1UMAZ6Ka1oPXVZjSvV3BcRsnpklhsy9BPSSk66T0sHWArEtUCyigimHxDm2dse7ZXigFo%2FGO2a7SjYSYPtIjAzFDreoLAj20IXynD1jNPTDBxQ3zf9luaTY9zoAZXh2jMaCc%2BtI6n66%2BjDgrfq%2BBjqkAU49BScRooSGAzZS53frGZqu0jM97Xopm2EiNwXjmLuUnMQuq9H6H6HyHBtsKhoWQj4oHU5okW4dSyiCJDXFthbJRYBF%2Fn%2FJj8h56r20fSdWAU4A%2FjmthlVhKienRjijURyX6e%2BOtB3wN4FGUNT9BVFyEX57KOw1LgyJGL9cw%2Bw%2FOa0nr23M8y%2BXatNMrCDfKoFaFWCbxBpIme3%2F0N34kofgDjNT&X-Amz-Signature=a29b16b157a44bf826def4f84a709af244e99f27ea87f549bae09d8b31f8012f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

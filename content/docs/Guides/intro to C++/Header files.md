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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T63I56CR%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsx3RDmVKJv2sLHOtIzaR6k6BYOoWCF4OHFOn8f2oUCAiEAusiU75qM2YbvfpK1cD%2FL6q2%2Fwb%2BMUfQviuVRrl%2F0u2gq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDE%2FbfBwqXQRfeNQlTSrcA2BFHOeoexJuDwB2vFcRN4qNAgbAijVidfxUnQINVDcgsaqdBCtZy05u%2FRKCOilNmOIEDhtMuD5PDgkUnqvoDkW9uYteZUXkaEq5RQITWfy6roM9CY2ehoiccccqC%2BatK7wlwMOsSC9UwQYfjt0FPdeDJqWeaiT1bn1DZX%2BhquaRV8lTBTRXGNI16%2BsdVenYpX1jf9qsLu3bNYfe8XmYGHko6ThE%2FIxogyx1FPynj9pDS5PjVmM03icethMAzrVYiZxIHDpHEbjmz6PUJIfYP2%2BNMo3Jw%2BoOLI8SfkxLBMR1vcIr3ODLTaVHKBfHL%2FXVegvjLrxlIMR2W7iS4i4Q%2BANr2YtQ7DtWtfBjjV6UXxtZi8NOoeFTOenYgPT5eL5tmTMyjmj%2BS8lxbL%2ByDaWeajspjKv4oIURCSM5kDiQMo%2BNqxl3uEveIDtVcOb1phxW%2B3axkOyWPiZidvDJ8qYkCJIeqCPsHCRMI34%2FCPoh5KsKeZJjCw%2FrQAd6hsYPVi54yyjkhC5DHb4V2HFIe9qHj9mAFWspagW4GA1tQcElI0CJij%2F6Tut816NdOUazTRfNds1CVa2afxr3OpPVzOsNUmYODPRt6vxm1UkaSrURFozT48vt%2BfZw9Q0dJzUIMIWMyb8GOqUBuc5rKiazbKoo4y3%2BrJz1%2Bhdv3wtF7qebiriuCQ3n0q0vBGwLkRefvqnrVDf5rLuzuXJkCO%2B48FuZZNkOCN6ouwyRM8h5Evb6lfm2UHU8gJRXxGS%2BEs7VBx4vnOG4WYHUaF8lcWQIlnnrh7qFvzkOGF7yg5SWHx6m%2F%2F0lMf9iLoBTu54thtzOy41U8oYC%2BVp4uNURkm%2Bij9isZbzc23jzOBdpYRp4&X-Amz-Signature=dd75890fd814bad4fb8bdd10a62cc82a29c169bebb53cc61e92c35babbfffca6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

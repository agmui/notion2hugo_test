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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3YXOJJQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAGeGJoWjGwrSVKpE5WY9AhAOZAAdmGSBBrE21cT2UEIAiEA%2FZqrBn8m%2BSsDUqNWTxgrJcBivr%2FW3VCeuSw1%2F39jyHQqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC4UTr24Mai0CyP%2FSrcA8jtPZ4eNMk2C7p9dMJhIsNx2uYD4fD9EBK1w7ssTJ6cYf5%2FUpHKXf0I%2BHK04d9bdgj%2FWWwr9KswApWqZgncFCOLbmMuANtVh226p9Od6fCYwOA%2BqoxYIBwh20CMiJS9U%2BJYmu6tGlMmSModscaw4SzCuD9tPGBMntbZ%2BBa0LjcNiNSEAlBrtJg55ddbjEsHIVkdhyT5389%2FNPCOYLJm2wA78YVRc26T7gXJiQI%2Bd%2F342UD%2B5gLu248NGDzmjrjGaUseBN6h4ZpoSsLascgQlqMGOiH2QySNQuoWfeCohm69cGhJh3e8T3HCsGkB%2B3BpkqMMw2Ni%2FQctpwnFAwtisR%2FRoqH4scHE5bx8eHjbOXbtlHh%2FKj0jO2oAEr85ef3zzR0njrqaMCGt0xvbp%2BfaLjFxHWLLZy8Shv7nESzWtIRRvinQ15QEIGN5FAxmBBkSSlXgFEHlgsa6G8%2FBau%2FHySWA1xWLW%2BvdO26TJqtJcrPCeZLnhRlg1F1FwI7t4Atcpva1GNgl4CKwb1ZieW75ttOWbiXVSo1HNg2ShyE6DyR6djQnk0ze7LInGcQv%2ByzFBRhzgdH7JU15td%2FcrMIykvZuUUiEoZlq0aI2J6yhWr5Vnn0WGOE7HRc44UNZMN%2BFjMAGOqUBEzhGLVtwtcV%2FA6FezkghjLUxAhWMjONMHnoHa57WPiQ19A%2FmQjXU7Mh52Gwl2AJb0oU%2FCGdCf%2BzeT%2FPfBRdZL47fLDbpnXaiCcyZLCQgy80jctPbmUWPfh5O2nEPZlObsvi5%2BbhRsUab8qgb9v%2B4%2BkTRCbK2yieHB6vxwfIDzs%2Fpxanp1petCYfsFjknOVlc09XWCD6i1yosfhoIWQD%2B%2Bn3Fj%2BkQ&X-Amz-Signature=a9cf714e171f35cb878d1c97381ae024490269b72d362abe4b0efdbba56cdd31&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

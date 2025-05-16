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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUVFKPG%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtLpx0EEGudjT%2FGNrPz%2B9rSv5cBBdnRh8a4%2BgOwYIfLwIgPb%2B3abqCpPdOnLlB3sMrl21%2FYhGcEjFE8Y3r%2BgY%2FZ5kq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJcqZkhlBPq7S%2F%2B2hSrcA36fapMZpD6WY6NX83hQ3tGQG%2FmPgV4%2BnrfCL4ZAuVqi9V3UBA85elFJD6HMDig8u6SnWDyrC%2FNBZMsRVzm3oNDVJIditI5tVD9bmqgaClw5upfaeLUacbLr67MyB8PwlPw8hRYF1X0Zs9e3ITI%2BHv%2FaT0RYmRVDVXk%2BZ09xQRHLtOVR7HghlmNCDW77PlGnvhcJBRkCx9kM5M%2BZMCsrzSKbbajMl0taE0fEgIqsJSV1iTO031f8YdNVvgPD%2FROQ55nU%2FWOAPp5yZBh%2FxmIPD5sXJ%2BX1ZJXEvKui7dyePDCNzhgPyDNP1c%2B0JfZtvcADc7qfUGNd%2FuH%2BTPjq4FEO2EgotXX9rYGEjwC%2FtNOG%2BSZJe4bzVnlNOFUWBtJeVJZ55S7NWSTev32vbko9VXhIa6G9qHPDLoylobwTSyrEuCFYX5rtPw6NMILUhyB2gykrvp5kaFAUcDqeHHG8tXFjuLyZNI%2Bocp%2FK4afEzE9pNG7nc5Cx4GJ%2B5DfZcpKpuRHXgJJB04ovdY7aWHwWpoDvsX%2BZgqVdo8XkZidAr112fNiWbgJZXyaq%2FWHV%2BDl05sXq%2FAGem%2BZ9XbH6teIPSfGztnsnoofa9L0q5%2Fb7VeetddErNFnPt67WXtq0p1KRMOWQnsEGOqUB92LwUu7AmUDLUegUg7NCYKL%2FTiXrTiDQjIsleKtCn4LBPTKswXs9v2PzjvARuGS1GdQ1e021NeLeuj41psvCbQeF6Duhl2ficDfn%2Bn9nsoJbGCJfSAcjOOvJnwb8EsJqT3eJ3hiFwFOIy%2BBlsut0YjB4FBKMQcX%2B%2B1bRmSvtgnagpMWRgu7NYiQ5UzoyH16bX07XatAkXa3%2FxCDWEd4I0FiHQ4WF&X-Amz-Signature=f4265cb5bfc010b6d75b6d36f85db0907d16a269ed87e8f8a4defd906d177fe6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

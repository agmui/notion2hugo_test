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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWM7E36E%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2MZD7pP%2BU7p3MdMQL4o5tooYlm3bgxxHFiY1v1NNEYwIgdi%2F%2FXNFryRAKPB%2Buz%2FAgiWzU4n7eMynJhFPhMLMt6AMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKVS%2Fs04gbaQK1b6YSrcA5MFFbkFP72l7JvVH7APtVYxpClK4G38LtGjHXjJA7Py8xsbtCK7OOUgnKTQxohng6kc%2Fa9JK%2BSRy7XldN%2B3ybBtdjwP591bLelhGRFr6CHahWAFRMD1u76Qhz9p6%2FrHzx48ba3QsbGLMC4hSMYk%2FALMOq2NsUUK0zZt1ujyfdjiuOdRDicOS5zoKxwmO9cyz1a3viJH%2FpBULMXwyWJ%2FVyo6VyC1DruFxeC0qJbcMnADXkkcUFzR49r1kmMgLKv6Ueh%2FSrFBo7A%2BH6sincxR7OPF%2Fke6Epan5V668K0IaK6JTiTFduk%2BpQ8QCxj%2BODaMM%2Fbb4Jb0uatCGPHCVgKFJMQLbY%2F53seow2iq5RqSPCfR2b1DYUrNR4P6ONuHnj2F7pz72dhSOOcq6Hpdvp%2FGSrGbZNV8Z7Y0erDK5xpjgCaBCGiyEzX3yX4UO0%2BBI9vyv0u8qVni8aaFd2QM8SAgFgS3yUcm6ErRxEwqUcpnHSoPW%2F%2BmywGvrbROPSknLfcje0xNht%2BsAHvERgChKoSJOBUPs2Yyu7om6OM7FoZV3cfHDLhYFcjz9kwKk6pBlOXLzw4WwbtNMxpbmMFeATd68jIZ7n7FOkuXQ5V4mJMBDXCZnjkM692n7YMYfbPEMISU9b8GOqUBe08%2FWNov22%2FNjR3aSVZYe6ddQZvJyJR%2B3mC4FHhPipVT%2F2PQCw4MCRcLcxeVQwoTR0MwlWBPZA6nRa3fKi8q7qBQcFePISqgoMmGUyuXZuElWmMQxkJWLlSw4%2B89sb8r0n9IjBZ24ubi4SN1bDvbl4MBvA0MFMiIXatq2%2BULGHCV0t5AOnqCHOPasOEd1DnAdrSF8A6jr6qjagVK5v3JQNwjY6oO&X-Amz-Signature=b9e1afeaffefa318dc967e0710b7c3e34123fa055f10b1af40bc3920f0b9c8ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

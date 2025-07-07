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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJFF7RH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIG2Wqydi2EfaoMC30QrjfKUZyohm6sqhlFMZOfTM0t0DAiEAiea%2F0g5ntXqM2SlhZFurnKLxsnv8d3a%2FpBfAgg%2FDfx8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDNYQY19tfafqjhbrircA8G1Z%2BazEnpc30q3x1XSuHH8liSVdS%2Bnqoiw6cB97QB15dbeP30sNlgiV6d5MjuyJmAKBdxUuT21sOV1JsLCOmmTmGdjEdEDu8sdGAGBLdoJvoQTeadv%2FCgXAh32UprHCRdGTRFKZT6194%2FrUGdm0BbZCGYPGtc1%2Fwcxed8GBYd7Vl%2BLy0YX128%2BAW4PteOJvwtlLpdZ%2FCS%2BZ9usBAYn0ErMPlKaA1EsFShBO26vf5ZvUdrCq8R5MRfB%2B3kMr2sguFqgi7W0nH93Y4lWgWO8sOb82X69JFJW7CQ46%2BE2ymrdwp8LrVq634EwErMNL6Io7lAzSvlxeqttRYAZtgTtrBbr7Mj%2FJtenGFAjju65SX6ssSyu75i6zAR6UvYe71%2FfrC1br3ibcZBIaBg9bUWDuCrLXTEE7hp2jmb1UpEYzPj0KcAs3mMYmEgP1LR2cHEOo7G75LxxZCHyrrIjhatCi6YIh5Smc8ZcXUB2DaqswR0AoRXuCop2V8DB6BOetM0XuwoeBJ6NfLoujFYPWnFzmK5Mfd3Yz27J7B9dt4vMseuMh221RagxxBQJt%2FPP9AVL9Tss2mvuOG%2F6iBWZjvRA70iIbh5UYkNDzspNx37%2FOmUh4%2Fj%2FqotypYa6M0zEMIOSrMMGOqUBcEbXgvXwCI85x4ZuEc9LblVD%2FTP06YrlgsrheeOe2F16dibLQ%2BVERyDKGw%2BueseC22oeaIeAj4StgNsV%2FWSr%2FC0%2FAMxcymouORis6h51gLxqMoAWMMj%2FVx3d%2F1NpmpLjxY%2FBmcOigGFO%2FV1u6sPJ6NTuFnvzY%2FgaBQt6Ixaf9s2AR6ESiSrvPUz2S2IIwpmT6mE7mtMdhSeUaY2m%2BxOIJoFdW0i8&X-Amz-Signature=b8dc739d0cd1918caa488f236d300ef91b52366237a525d4d2ba49ca0716ef7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

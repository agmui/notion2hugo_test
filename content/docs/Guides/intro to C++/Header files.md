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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B52X5QZ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCVwS4qx%2FOeVZ2kR6DKWaQCCDKyJLrSUBsvfdsqkA2MEwIgcG8bjyE1eO1PYdcEriIPsHEHSYmy59gDhdymyb0JrR4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDP9SfCtek497hlHUjCrcA8HZH%2Bfp9BWSZKV1imHhDs6RL%2F4RXbtR%2F6Fuhe1fN%2BB%2BORgkQk0W6gk4vSLwlCegCzqDskhHoKnVH2EOY9u3d1%2F1C7hL8Olj74eNgm1UfUOD1wHJTfdX60JKKchPqyuJ9v3cpaw1%2FOMVjigLanV12mG%2F61AQUbQjOA3eQS18zHxTzfuHHn5daCBnwaW1He0GTLGOE26Vk2Y7E2SummsMtnlevsPLOQjSw4oDRBiDpZoJ%2BPV27e62I2BHLwG3OF%2BbU61Q6X8SqY0kWiqTuEfBY3346MZKm227gC%2BbMXQmt3grv2LD3P3IWt7tJGUtbuj%2Bw3S3jk5FNMokOcxYXYhZVW0tQ6UuzVJsLjWuwkddPMQPUI93B9mcR%2B9PwJdKKh56YI200eaZVYB9LVGszGF2tjXnE%2F6hIwp46wEMdx%2BO859pjzDVd%2FAxHWShBTpq4bpW03g55WccspB8n8b4awChAlQCpnVLbvQEIE2f8K8dm7OHlmcy%2FrW5jpqm4YPRzzrssMyeNSWBTVjBGBox3686CF5snQpb3uTKTUiX%2BwEcfZWcZ4mVQ44w4XTGSXjsFLx6GdyEXq8EKhhxsvqEzZ6QPgo46otALi0n3N9eC0mQoWUMv0hz9bgxx97HE4y7MILstb4GOqUBUTIp0BmywKdBoYSOtdgFBVivLqYsO83Xetf2tfBa6VIwkDgv5ciZwrn9QXl41eu2NNSoC2K1xHEzQ%2FSr%2B5Wg5of0p%2BJQoUayZpxyTmhjDZy72bgdEzp15UbDjTcgAv5Zdr3HFHHepBSEYnx8ZRoyg3OXatapnBTiAhGDfEsXuYs9zEvS9h%2FylOm393C8%2BJbLv0lBM01zNU%2FoCdnsAVssKuVY%2F69c&X-Amz-Signature=c71e489bf21eeba004e47b086782ecb5aae1c58770733746de0e17b9986c32cb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V42OG3NM%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCkMtmHIBdVwj6bSui2ewuQiIFEkwF3fTvowaJInh%2BWQgIgYsIdaUhzRXn3YyF88Z%2FhhjpPfK9f8UYzVkVgCTZXENoq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBbmjNcfBErlkObLtCrcA%2Fhn75pgb20dGhAYjssC0PRPb11BqXTGfy0W38ksJO6oBtGrOe7EVI5DTdx3w7RuHAu%2B9YMRcLB3Vc28VwCFuu%2FzXUhMxTT9T669Te%2BBAtteK%2Flkpq0C4nxJvnfa%2BeIu74acF%2FKGj9r65llzxVUadqTqk1PiXCDySP87AoTk0pKvfIUUWjTjRC%2FYqd%2BY4l6NEaDuXkbEwFXckByOMN%2FQDW7qxoTejbyVCEEjMHAflBF5hufzdSZZANShRwoP8TlUlYeAC0XBoLgL77nGtfglgooVHM4EmvLjA%2B24ApKw8J8iSsHauNUBXF%2FF8o8F70hNE1GUZn3fAPE9sGrdj7faOB8CjGaVrSFauqu0NZcaMVVjRHpjXUTAC3%2F%2F8kLaStWV42T7EjsHVKf6V4IZmMJTVK34HJx7hUatGwQsAAD2nSMamZekMDSlJ1OPi0k5fYOI3b%2F9ZC3Ucpm2%2BKV37iDn%2B8l1na%2B8iw1SsFuVkO6Hok3qveca4KpEk5iyAilesoIfInThwZr7QNf9T3NoQnRq7fVpHYLjCEyd%2BU7S9EPo%2BGCE0sa9eOPj4bwSfYvZgV%2FMWak78rCHHbSLGrZr421W9THPh%2BKqfer1olsDyJXgvJDJqlBQucjHlN4WqO2hMIeE9sIGOqUBaQvcvX0KckvZTiJuxM5ZdYlN%2FxF73tYOvbjjBN3qQRB11O1GwGp9XTGBd75asSyb76kOSIr2fGzICxBd9eorzsgA3foSqJ%2FRFHWin37SNwX0yuXMWf3QPAWSUxDkGU5JQvycXqULyAI%2FHWsmLGV4vaHeNBCSwHVtwSPPtKn8JG6LOd%2FQquJdECYpHZe%2BInpkktZ6wJGuBDIgAK0m%2B5YEgODLobBv&X-Amz-Signature=54d670f1b14a3a833b988e8d074c0d48e8ed495b2213d056f3d417547dca903b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCPH5UB3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD9p%2FdAAeYtkOd1WeNNh2xZGObkwYUbv5tV2dzblyIdiwIgZ6vb%2F3OKvEE9PqpajmFeH8bp5Di3MUL1bBKegkme0NQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNf2wNBQFP6vhcaknircA9hyhP1P2z%2BbtlpnRw1snfqVsrdgnMRJfC%2F9kwWdxJ2w8v2yCYa8bSjjQzxzW70oaR%2FGn%2BOh2mpawkKEsi2cqblJMr2LNfAxG%2FhF2sNc4dYo4N1%2FElJFWfc7GAMFx9egysJiup9Bo83onKz1EiENWRfnTbq5lj9jSByfCadUH%2FGvh3IkAX64tKNHw5G9CyfmZFZyz6pFO7TRXdWnU%2BtvvHq7sG6g%2FaWka%2Bw7vnh3GOQfAJTaoOsotjxFiqn%2B3yLW2J2jHU5yH0o57rL1NLXhGFxkTXZC28eACiVexkBVQCtdYhUU5TrF6sUo4QD6to4qPiYmjERQqL5pE%2FAkNhHWWDuPaBIdwoAuwHDHQ8faFjE2VtQobPktZYpKzm69xJaGm5KdsYnT%2FVBrl6pUvRMe995b4eqlKskuhJB7CIGUExftp3Hk6oH%2FGRiyf4pq3f%2BJrZHo4lfbQ9pmc9CRpmnAsOdP%2FFBcuQZquj2bzCsjkWctOxxQQXCUkoWuvmMQIJksoA0GgYsQOTAvm2jeXUO57tkGKwXKX1t1xYsvsD0BrxOVNVl6DFtYcR9QQgbfVM4vFEGlVFe4ms8M0myoV%2BI0xei%2B%2FQQsp3aopHRxeqaxM8G0E04SUGe6Qc1z3zBkMMjFpMMGOqUBn%2FRslzDr6XQoJoJWf4cuu%2BfS%2FUTRmldBUBblalofT0YsJGXirbHOBIKDeP%2FS4r5N5FeO6o1ZDIWZfCb62p%2FsZwT591VGVQsefsJI6i2PKvFGhc2QtR%2Fw1XQxv0aoKN2bTJ1XiOo8%2Fh9QOcyPJ0XGAFPuLOhsMSgEvI6e43ocGUDPcXMLOSNnONK0L7LUvtUpP%2BqqjyQ4RfM%2Bz7sxGdyYqFhGxmZ2&X-Amz-Signature=3818645cefafc8ab5dc032bdacfb356f151bffb967eef58efcc9ba7990899098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

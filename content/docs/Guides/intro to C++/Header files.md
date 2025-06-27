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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WER7RJZA%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIApQBgEIrhN6tAmhjMsSDHBdZ1b%2FBrRzS4dkbI4ayNw5AiBlCvIMiYuwMmcLK7u0y76NklnNLefku0zfbDF8uWdBdyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMbyq%2BDh%2FKrjovVx2hKtwD8pBNbmO7%2BkYGCW9iygfdbG3AJ8PMndOcM0%2BdQJzCcNuHUFuO1Y04kIZLW6Rt5iz2vif%2BCSR0LrTMD7WRiup8gagT16%2FHq7LkxltK6jFc%2B3PzKLKHbTt2vgI1axtQdOm9Fb0DiEypUOPkNW69tOenUXPmNgtU4V8gRuuMcetaKjlaRHqihy2cEFNE%2BEK%2F39v5lu%2BRqg9TU20HDSE7X8U54TfbtvVgyROg9QzRj4anOWDgxKQu%2BBtUfxTakQVUr%2FiVrojgu67CTIgmmnMwIBHNiMBQqHmmSC%2Fz4X2X9kJ3RHme70%2B0u4C39DB1Td5S6%2BvfLRLK0f2k%2BAuzh29Ku%2FpiTMR1JK%2FVySsSEPP5iqhkYGzfv3QE3WpaHmJJwd21eGMqJWVf0%2BMhZIZFPx%2BIBvHaJs1U04TVYkS%2FKHwTDbsVEXH7GoJT98uDOnAbfY338cqtTPblo5F7ELVFr9uR2LP%2B%2Fmhp6472fuIMjkkyaIPJOUj92nJvkih%2FLQEukdEAww9xiXrRTyYqrHaj1BO3gQoL1vweRNi7GT3z14LCW4zvMce8Ac1VeChCtlCGgXOB51wc5ytaXp7%2BHatVcCF0riEzu6n2TGlzxyLAi2XZMsli1JySMI%2FSmqijXUWrfosw2Kb6wgY6pgHMz%2Bztkt%2BzRv2dhvNdgfkTt7kEey%2FIgD16FyMxTddgPVclmWf5IiHWLHjVWxrg%2Bte012t5JygNJCeSm%2Bw%2BqR2ba%2FXqES0j3wdImMm5pA0FPhk5YIMC%2FOBlzuZ%2FWNOXb8h7wbPCCO1MxBknHqOTjdfAWQ5%2FPQcmQNnv4i52bbCbAt75Vp4GTP11u6abGUYPpFhG%2BZOEwBuFfwObBEdFxwONxUyHu549&X-Amz-Signature=ce1610275e9c7460036aa17458ba3d6e1b733d206c4e3830357e7367674606e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

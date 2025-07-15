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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JSAFIK2%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIHHLkp9GIid9XojCHEpzV9lBJgoJybwjnsNeYehhb73DAiEAzWSvmmyrCxcpjNqDwr5MPe4pysZMHPcx9LYyrIe3fawq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDCxQ4DneGzC%2B9NNKbSrcA2KS23hySPpPQwLAR%2BcJCdq7Hvn7SjW7b2GYsRHG7KZgciKwENrPJ07gELP5U9DCXMJZsFCvr0%2Bft7AICMjmQ7cfBP%2BjI5JFP%2F23efELp%2FhF9S%2FGYA77vEyHUPRO99ZgsacfIQv85IOOJK6Sla5oUkQoBBaYMq9h9GMpL1kEvHOfaqt6KO1A%2FILxzkVtC%2FDM8nrFPzcqCUof2qmPPhwc8D7XbigYogmfHL1arzCp%2FaVs6Zn%2FmfCkntyMsLeYXqPmHr9fEThkccgendmaC2qdSewhOOhHCKp8FA%2BwuykV7vd7lnC9RDRuA2wu8MAE01CSVMJO7R2UOEbi62lAiVomijFehHz6ULX4jzTGx8A2p42v9b4jBNG9aZxjz8II%2Fpu%2FbRr1oos7EZmmZZ0KLDZsu7%2FllFV%2BBWR2bXzTpN2lLV9ZkmusnmZIfNH41mZO8Xcy5qZNvqyAuxhGdgSyF6COOTkTmVfTfsog0bc5oio5eL21T80HeLd2c%2FVcp45szFthiRMoLFhu%2BiXsazJUftY%2B52wtvdouLki4ox1j78XVoVGuaAgrrGzifeS5NLaz8Tsg8pbJHFOLiJA%2FMeJjJZcU1%2Fi%2BIs0kRh8RGIqp5DgGObW9WJfgAHbqkEXd6tdaMKmw2MMGOqUBbJk9049bfeDubjSdWgeaPxuYS31XZ5ZhpFvgUxRBAgGUghg4ibc2WDxFLML57Z2EZnC%2F5SW0Xk%2FjsuK2ZK22P9OlscfZf3nFIZ4n6mbamSTqpUQ8EIYHllSBT1r5UClu%2BA%2Bi3ztvGswR%2BS0QLMS40dIWz7zumItd00VLmri%2FLVCAOJXpfCLq02LL4OzlgLOylHKZ5nxAkmsdn2mTFBAtyx4clSBx&X-Amz-Signature=62e3f7554e3f03e555b7aaae6a482d911a48ff87a9a182e32c2cdc3c70c569a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

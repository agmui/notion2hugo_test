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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJPTPNVD%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzTq0Gu8FX9%2FeOJBTuUI%2BDmIy7JyFs0yz%2BRBNjRawo0wIgbzLtkePpfNVMG1x1KWzYzD1z9PDj7UkhkRoRNP3neNUqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKp5erqmuR75gk4EircAy4r5Riw3zfq1BFwKme%2FN8chMB7Xa1wRtR6VoGwfy6kkIJ1qPHAyod%2BRaOey0zgdsXl%2BG1kTxJ6KiA5H8HMMKggDdVorXnRz8w4IaO%2BVjCaJP%2BRbmPSNyPPIKs1U%2By%2F65CB%2FqNUhowKvh4gSH3hiBiopAPRy2yotenfjH0B3RM1Lt6kNsigBEsCWNW4MLZxiz%2BxdeRvWPCNf%2BBn%2FxTXdxcgCjlxWAKdjwD22O4R%2ByyIDVGOjPyGTV9hpeEPf2SEU9jHvj0JTl2SvUQ0feBJA2ATa5v3ZHbgkysiA8zsGNxNsLaL1CA1TQ9Q9HKx9vq3tVxeDKWw1HxiAaT6%2Bavq9gyLTKB7ve%2F4c3qFwa8G1mAu9YSv7DXh%2FRuofM84Oi2h92SrR4Dp%2FTbBbyL61QKPV%2Bau7%2FgOYRnXnm2TqbH%2BVFXqbJrNdolC2oEdrT7kWnBXr12u86aNKh6%2BYjx4mrZZkCLDcziEchf5Vv7%2FKnVliqV8rVISxd8QldHoTIeITjl6SwaZHG49TO0r4d0962j86faAeLcza8vJyO8jdI786rnDJTZtFb%2B5acQmguz79JgrAF1fM1UGIyxhfQENgDXXAyCc0KB%2FgEAiqtCqcRLXvhB1dum6suHI0MNsU0po0MK78uL8GOqUBhVAm%2FsqGKVSVfhlLUKBn3cVLtHrTeMtKeYmy1AkUnCXyXY4hNb2w0oOAXFH5HsNRedF9EJ3x2cU4CA5OGgiOTI9E0EhRn1SO7IRO6Fl4E%2F78BEWzk0VVuHz5YnD3ofEQfCjyq8W7mBp6Bk3nUe7UlLTlwxqS6XP1QWdHDabGKa4QixiGb2DviMzfYqxjVSaHRMLyjcvkeryvsVgLRkRcMBfkxAxs&X-Amz-Signature=a0f3419f613e095414843513f5a583f05e5d26df8e342d926411b8351bdce8a0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

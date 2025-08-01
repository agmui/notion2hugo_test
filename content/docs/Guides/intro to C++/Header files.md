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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WARPSVSB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsyytn9%2B65UrmckhmHkH4VQtgYkOvL%2FYotvFk7cpOYZgIgJ1y3SI9F9YZqcOQRFfLHE5usAVY8bKl1Y5fzAvlj%2FvQqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIromCPmZL%2FT5%2BHrCrcA07Q4P6Sw8G2k6lcoTqU1uVpA%2BSD9tes9gn7mAGODBFvdHgFFThybH1P2HnoYYs1q81zSU4O7UAcNpe%2Ff2KUXEVKorHK4Or84tLs5UW3buZN4YeRjt82I8iDjujWYJ9ITSYGdzY%2BoSTZHDk20%2BfYk4S6CwmdF40zeds2h8nA21in0I%2FM6CUE7yNjNCjsKy40ieHJmy89DzGX%2Bm%2BB2e69L54udnvFDIniV0qH6byFB3%2Fk7CBu2VZQ5V0YhdQVDBPj8AwohIfFA2esAt1U2nmk1DwQSZvGTUycgegFjrosdmim7UA07LOo6%2FlHKFX7tpU1tLAjX7sF3jdZWy%2BZbrmN4PdjpaONjJW4rUXLDdWGN%2BEj61%2FLFVx5i40oTx535PvUZCJ6UK2m%2FIW3cm7ttD2yIIeywmfXKJCqZ4UzB79%2FJs1sA40M39NuXJcnusJ7Yu5%2B3uPnEtXHMQHejMoMIsLiz5MfIyEY%2FAPr01XPeW%2FmS2%2FP6LBm%2FAV451oc2ETr0SQ0Q%2F9ZKqFMu3Yv2UXOEVTxtMfy8p5%2BLSg3GEGY%2FflkQ6vq4hiURLqr2wzFeglSL0oHx3ElRS8oyQXbM4%2FeB%2FbqVY2SilrT%2FSdNQPylnaZqRBOWORcQ0a2Gx6tzzdIiMJSMtMQGOqUBu3HjRrwSDe7fajHpokMPHZIMHKECG1PfPkq7K8uGfQd4lmRJRuikfJ5FJm%2BbLlo%2BJ2qkBbkBgwUi77BERXmBxmOd6cXRerm%2B9zLtqOvazhnAtghgZMztDvux%2BS6vOQ3AQqXdkCOlb56VIY%2F2DddDSWVFQphmjJNhDbBTbVFxRhl8YdpW1hFJL2z92%2FbCpQOAAabK8l6GpHFERzpXpk6kJ3DI0x%2Fc&X-Amz-Signature=926fc279dd18b4798c4fd1947ad6f05b4a157cb7a60a776299eb24d81a1cb768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

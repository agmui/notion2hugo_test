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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636HQ2RJV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDeE%2B5X7u6VwbHM4SdFjALjve0tUrn5vxXM%2B1cyCQ8cEQIhAN9jKv8519Ub4pQ91RbgyzmBLNgvumArk8kzoPAuJj1tKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweaA50Wj6iM9kmvO8q3AP41DoxXCoOTthrL3G0Gbmevu46hy3ZYWQQC1B1n4x93Mvn8tWL2h7BboiAmi7sDkol6xvNBtIlM0F9pY9QM9jLtuqHua1j6o%2BqFArnn7QDm6OxopPXyG1wIV5RWOsAVLfXbGBGnHJcOx8u5exUufaX7KGB26MFkf3PndxJAjfyey4XBemJOao6EHcUfl2PJ74C2hkhXEQsne5MEg1UtFLhLTHfEOby%2B9UJ1c2RI6pDzNHkK9mnOLsOmcac9S2IBGlnohNPU6Sj7h6p5zuNJfPX7X6%2BDsi4xGAc2uCt%2BDgewrnYMFIsE3z4u40Prm%2FvF2cDaZJEszu86zY17CAbRV7YqOOWq7twd5gpJnDibq10bU5Su2Fa6S8a7WcNjOfIvKIbMoUcbPrkVW1ws1Hg%2Be82PJb3lrTFVzfmHbL4k4SegnK7j8kvzzb%2FO1hTttWQBWVIFCjAC4YW8cLTMfWHrHJnCEFb6SJWXSkk5xb04flxaEM3M5%2Fa8%2B13uGfQtz5LoykadDMmMmKlEufh6d4WM8sDkEs9xvdesEz43YShDnqtkE076hqR2leLnTxKiGvwAJU3B0hqEFy%2FMLYtyeE98m3M8POY7UYZOPu4tZuZpK4I%2F5znWlitQe7d5%2FYrfzD4gZHABjqkAXWOIu4V1OrkB1SNPpcaNxgwlrhzNrDkwQ8NBiP6jY2FaAlQm4TUhC%2FtuPuSrO3vXRtU0n%2B5V5JSku32tHLfvO3n%2FaMhaS6s8h8s0AZgfO9Mv0i4cUPsI4bXay8VvhSJgEzagVv1AwZ8TDOJ9%2BGZVAhNqCNIi2Dln6OsI1YuhXmzTK9zC4gUxovbYP1X9lz8i0QhALb34aF7GGOhUDF2wquTPhNp&X-Amz-Signature=2d54447cfba65a3e506be371661bd1144561dcabf35439efc59347866172ebd8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

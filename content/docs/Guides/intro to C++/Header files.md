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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NWGU56Y%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICkHmQrpvI7SQBWsTzqOeeNPG6b7SLw9pg2Wu0QK5bqbAiEA6Q8SfiaDto3cEAJZxjISI6favzV0GwqYYcrQVkjNqcYq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDNBWIiMWwyAOolizYircAwC5ZSWEtxulyAy3v6Af%2FSYtgPxj5OEcLYx8mwUC9vTkr9M3TlLi5yQG67RuNiA49J%2FUS0lnlhttyECAeCIa9kt29W%2FRjgA946E3aTDDCt7B5f4xHrxsFpSD5iFPHpM9GXJTRHfBwpuRcvfy3UIyyDt2JfVixdp8rZNGjAAiHY4V%2Fz0U%2FDAafgJXVi9yPoOjJbabgRMwPGjqYJeQtdpxkzbHX4r%2BHFIStOhHCsRHZo6RGnMzGDksdtcpAMeplf8QK%2FcbVIisiW6%2FxTY0WsvRXX8wuIOg%2F%2FGmyQll3pm8NpJ1MknSXuWTtb49sHqJglHjmjNchquWTm4ng4g9VfuXUqIRvNr%2FxcCiRzhm8leMBp2WGiHQ6JbQRdOPdmtPwVPu%2F1uwL5y0V0KodSLlHQOCtB0AMhutSTI3g4Cwg8OzdNpLcUs2N2cG2qpqQWPSmZQXJnNsjx63EJiLMVrnj6V82yzrdkE1dxXpBuby9L60i29t5W3c0tNB%2FsY3QcB1O4gG5tkBT01y8bicdbAuPiCQB7%2BDDeh6aBOor7q%2FtVI%2BNLFXhT%2FMWVY637fuBOPn7kFkpr4kAG8tILfDdHfBV2Z2jpL1b1Lcg2xiHxtGFMIGPFjhPtqK2ylYyu4rGA6HMOmP0MMGOqUBF1vSHvvWZsX6h5UsJXWwqGjjKxrNQngGA7rBO8ibtijXxib%2FUa1o7kp0yjDgwDgFka2WXrGZazZLTe7fE3%2FHX%2FYPucei%2Fbb7DV0eqp9sEJJ6nn0zeWiMSXMmK3t1bDJH0H2fImt4QgBG7KFBFMSTk%2FYVaxS33Yi8Nx8hgPI9o0nuZ3cGz9WNZ3xMp%2FI5DY73W5cW5%2FjvWHyv4ACOU4aVv7QYoHaz&X-Amz-Signature=a897467a168933320490845a45dd59244ce7113a9349375e2185755c9cc99177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

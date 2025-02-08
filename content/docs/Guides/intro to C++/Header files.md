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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JATF6DI%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDwE5IWA5TGqXG%2BpbWePhi5Bp8kndAhQkQJ%2FsqQbkiAKgIhAO2LbWISfMm0XwYEepdBHf9db3Y7GbTD1MrBxbVfa18rKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FIivB4Aq6KUpsU%2FYq3APLbxPCNdMHwdAiHwVVrN5PnYlk0vQ8LOETUZgIc1cekqmwPvEKDAHZukZEvZpGTxDZ0yfH9SIYHoKCRFVKKZH2ITPcP80HxW8K9bUgGIdKHbfnIzDLVDZdiv349FrvUEpo29ZxWkO17Vg07LMgnQ4lPoM9FKXTMDOG4fhwrIAMdTzrn31TaUBJwKQ6nmxdjN5lKfNPUEWayaukwgWT3%2BYfbCE%2Bx0MsKn2iSPnppihTGnZ%2FqSg49SvQHPBujYO3Ux30y8NcQgFHLTvRW44RNiXGGLOMMu%2FjD%2BXhP%2FKdWMcS9%2FoazWuoVqeP73YYh5rlrmiRgZkQXc2kYiizdp2WVTKO4O5YJ2oK07tANxFeROplLymIlKfRxAHsEMmCmeHy9S%2BBRK4wYdHhh7RmxdI7kknrI0%2B444RN3d5lIzjK8X8UR1SVB6Nv2dRS%2BeFU9YT9pLTTz%2Blf26f3yoGtRnPmyqj8917RIeBK1zxKmvrRMiQtwXNE3hRT0C4sW%2FAHOnhwalyS%2FppoPelvAWIYFe53OCvFmmm0TO76xSItOM%2BEqpdr6wv%2F7D8VZjAYRQIfzSZkfvll6ZYloP4hMrP%2F2DRxzsYfaABegLneOZF2gZUh8CdE3ssCCyo8l4CLHhCltDDswZ69BjqkAdWGO0zzEwu7wMfjbN5D3NTplNLR5euVEuqqAMGm1yVO7xoCRfJOYEOQYkbH0Gp23Ub%2FRrOXuZRAZl%2BTdeI1r%2B5MNmQVPumTlrRTf2JQPSRnIm0a1GB5nQVeOPivt88zH0Qc7BE13hY2wRDa39O6VCOZZ8oZxe24dw4syJxhU4MytuTIhehmX0DVqjSV48hDEvI0iL%2BOCXdKcIvHa4u%2Ba88O%2F47e&X-Amz-Signature=05c5bc9f828315fc4ddc23988cdd057a7f7c60513a5a07ecaef6b52409de3fc5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

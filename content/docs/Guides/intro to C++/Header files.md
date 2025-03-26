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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GP67RHG%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGESYaQaOskAKFSq7P3UbxtmMlImgx34V%2BWMJXqBzaGRAiB9V7DC4nrnC6k87JKboZg2XJ4rXsTHrb2rsL6VrDScIyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMeA95K4qHLbQg%2FClPKtwDFUimQQhWvTAqQY413lAIAjkM%2BoAfJmN1cBGW26Hf0zEVnLHeze1d0%2Fte2DBXFfZAQ%2BwTGSacOnDCrECKrK1kx7p6YA581tQfGk3nmgAFA2q6hmSd64I1Fifji1pSXQp4EmBiOfQDi1xUyJLQvjaPc9V4%2BvT1EyQu6qwnqZ66tdbLFplMzMf7FKl7Z2BPm%2F%2BXvNJkoPbnJ8p%2BKyoyRCM2zr4nzIaBl82TO7JzcsAqJcQgdx9GZhzW7x1AwM0IYcfui2MzhGSKJYARzRDpM%2FkYnZYxe2dx90dPqGbk3KCARr02aqbXaSpaLxTgPehv263KIaoqgKLgY93ljA97TZqWklIyvzYyz1BAPiLUNe%2FmzrtFY5db7mTRAP2Hh2uZJNlsNNOOpwdKH%2FM3we7NLv4CYQTx5yFhSvIVUydo3%2Bw0dxzGMehQqW3M9aD0AmESwL7it1cncCCiRnOPo00kH7HczfZyBIFiq3DZoNztXa4DD%2FepDdHrkfxLxiVFvK5q3a1%2FIAv8NStJYkNn8JeYbPZxelH7Tkab9bU2vexUci%2FPWX9bOB%2FmcyZusoiDtDpyPGGJYQE32AblII3MCAmoTOLGcK8ldTthAvrSCNRxM6jA%2FHfXCMxdm%2BKPFvBdTEUwhY2SvwY6pgF%2BHOujqoh%2BmwSjR1TSGiYPcodPqCsx3eb%2B8Fig2Qx%2BzzxfJtvK%2BRg6iBDK8h8H%2B6rSUaKCdGl6DWNorer122pyxtPWdl63TILcmPZOACNyuf7W3p9XIK5QekY6dSij5GSMo7CkV6P%2FFaWsi4bc%2BUK7eAhOP1B0z7pYaMPET6Sv1wzXetZOMyl8xm1SgoQYhL1SwNjMeTrGbklDx%2BPYuCc6Imuj%2BLHh&X-Amz-Signature=dbaaa16506eac7f86f5dc4c18af76cf907e45ec056403a3479ff45ca75cff126&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

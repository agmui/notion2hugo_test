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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHIOHBKB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxSGOyyWWyxaxyQqZGKFOu3ncVuO4LnCG9FdSo2a0EjAiAsJT4lezELgmb337yeBmr%2Bj0a0zB57wFmfdjTeGWFSLyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMyaoc1RLITwuR%2FD7vKtwDXVCnB8vyIzr0luZRLv%2BWrmMWETCCXwkAfDtiq49m9JZQsr0C%2BcYOS1n7zthYzgB5GDJkZIsaCd03VipiRFErzlrtHkS3mz9ZAwUg1yFQZ64nDne10ZvXINFxNLnaD5oIudUs7CisB%2FRi2CqXtBDL4LnitsBeNd373oCa5D1HxY8UPFk8byon85YANmuIprYS%2FZPIpOL%2BHI9gt2s8A%2FHJvgNhp8ejty1mkIg2LOwCTpwAPDPkEzgbFWU4loOH1KK4SnOzj9x5413Sdmgg0HpHXeXr5Z9%2FYZsaJAvXhMpdjLFIzOS0B2xcb8xgM5mxauPKW6KmssyifQ3%2F7o0DWPW6edP9%2B%2Bf0mxffKMAA2iBApMVV7FIIA%2FNAxA%2Bt4bEVYBB5yBLy5cb4aLog%2BvdrG4SFEPM2uBgr5BygMRewmdlB1%2FuhtP%2BUXUyyQaIgv8dT7wODbG8JrZk4t8auVz05Dhztul9zkEaEkoILQHPP6yEm%2BkyKPGpHpSnxgrGr4GTBwN2E1Wvzy7BDUgSLeZ37D7AeHWX2xN8LCthASxNlM5bFYdWLzcJZeGQn%2FDRXqO%2F5TUQfj6pRVbHh5xAdvrMvwOagD%2BZI%2BPDZbYAetuSgN7WRhdNe1dCnHNRDBxLw%2BHgwmvnwxAY6pgFcQne7qRkhNM0VqB7w5vkFHbT%2Fs5Yli539YFvAe3MUu5vkBXEkVm5O7qJeomCxRgxxvs7%2BC9UIsgZ9Py5s5aIZ5xjoG6UcV2tUV2sAmdjKBtv5lo905SaXcn1nyNG%2FQRaIixzKo%2BAS5dePDVwmDYytMtdDQgzudTX9%2B5jgV8sKLsWwzPaF%2FdfMagcpoXwBdCgJNcKrkm7TikM1rqivwRP9u6gqH0YX&X-Amz-Signature=eb08f8e0cb5518f52ca4e3f0d18f8d98ffe25a5e467c8cd329a000a4d5ac36b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

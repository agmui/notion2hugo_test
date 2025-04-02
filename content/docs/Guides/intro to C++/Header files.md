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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DZZOVPG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDV0ooodSkwF1tXdDOoTT%2FqYXKpbM2NG96Hux0BDLrNlwIgVPNgzudx0C1n6fWYOSZjsjAV%2FCyPyNxuoWkF3Kc4wa8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA8Lv4BzR5TWKkJjyrcA27JiuJI62Rr9NJty2aApd3n756i5gdkV%2BpUKLBf1RuSnkgSTHhtv45WXQJy3c8DRpZUlXJEP4A6BKPJoI36PxndSWg8ndNufOOOibZiwElCqrhbq9Wdo5oWHiEZuNJ7MUUP3h%2BrETBBQJDooFhpB81TgOQqXcLF91zFwnhczkzYn9i0JSXFhpT5o319DPMDMuJoXKsXYQQP%2Byt8VRk%2BNWaF6RTlarrIjdcaDd8rtzcGrxMwcQnaeBEKLH6oKIk%2B7%2FUb53LarkVAjPQAy8RsDEvX6nt6Do9jft8mFLenEzWDPBLYZIl0ZH70dxCtuLQs6L8mH9nUIYjXT%2F070WpW1Nwpn2fIYjGnWfDZcf2DUenKet9ur0G%2FUR%2Fmi74VjnP5RzSe2lBqOwk3WedFGNaqXBnG8pLNvqvWH4D2gZ1TS7SxS3MnfGO6s4a8fm%2F4yGCI7aEXnkWLAVEbIY7bmVlUFpZFh8FaP0BD9Cd3KUH6gxGS3QjQAGXyZtoX6qgjE%2FKetE31zIMegLXxu9zrH1PN5GOMXhNmH56EH1bBkExKGZTbucZ%2BUmSHwzkQU%2F7Q3FwsmDgQ698iJflkt5Vr7KB9YzO4mB6%2BPGnc4MgU8R%2FWDgqyIegu8voplms9h5agMI7EtL8GOqUBRthIh3oYcAIrTDd3t6hhShkgwN138wwV0%2Bgps8jqEvRvqrC98EoCDtVGsNvmPKN1JnvDbBgEzacIQzxbMp0aFytCSNi4cGB0VfzRHziHb8CimNP%2FAACfUzyU0R32Bn8RfOrRKRECDlk9BAU7%2FHqLeDJdVwBeD%2BpJ0XGYPetj0nNOFurHK5QQZarC%2B6hcoFIbQTtRlTzgT1i6KSNi2n7u3Y5oF8eS&X-Amz-Signature=290f6d6a3c6ac8cc4ba0f2fca00c8dd0e214a85f026d475b05cc9e3d6f87da30&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

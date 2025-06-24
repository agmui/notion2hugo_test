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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNNQI2S2%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBtPxELBBkOa7BggmC3E%2BBEWVFMV%2BHkV2s9eXYR8SECGAiBYm0w7lof8pmOR97qYHHe0CB%2Bkm79txMfk1MTlT%2B2bACr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMDUnLA58DgwEFCaJ8KtwDHDx%2BTdzzGjPXjF7tjG1agvkrPLibVUIZYm5oAXM9YHqg8Zbcg8w3tbYp9sIcuof%2FqeVqvusWvYqDDuMNThQeOij2mkUuKqrH5enNeXyQ3zPKzzkN2Z4Nqdxg7xqluCsg%2FutqFVtdnDIWt%2BhV7GNRohfkGCx0OcA1adyTK4pD3rSgelUvOvNWZNIiKwFKaVlleTbthnJ1wz3YOV6OWt1pVj35MJOIoCLkY%2FId2u6s0zpFYj2xKxDEbN04DhMuDmvQAwc3Gp%2FOipWScseiKea3DXncrzok%2BQ3Kj4NiUF%2Bbt5rs4ICbNjCFvWgfizc9RjqQiI4T84UY2PHW3n5eyh2tQN%2BUUqmqO1%2Fnaqfr2m33dORMGq12OrYY6GEp9C8WTFnf6hCA7mKrwJCs7gSMDyK2DG5hIvt%2FY6%2BLg5znw8MQhLcTDWQd1LCf66k1ychJRgCbfL1ZOt4DGs8volULKTXw0pN4TNXyyueP%2FJZK0TOhZaUeQwiMEwUdcALT5Svr%2BA%2Bs5M46wgyt5KfgJz1wL1NLF%2FYMvLuvDq1%2FueXquahAqgxnapNYB0%2BiilpSi%2F%2FXYeLf3FKJFe38UFzXMJSIBrZFJYkwL3Bh9A0a0rC%2BV13TBCf0uuAJO0NMj11CiM4wy%2FfowgY6pgG9eLgyTrrWiYdq36L%2BxzdwyoEUESTQrDRqgOhjRW8n71tjqUyj27tc7aPwpcyfFva%2FY9dqupmWzxhQDBmigXCpjDCG16PdLwmHgS5a9j6FW5cxeVagNAXqeT%2Fx45LhVMfFaMJCMhVLu9ESWle9n%2Fa7BI2Wx31VNsdc8LieEw0g7wM8fkKfrsc4gkdcC2ZJLFo2RCMHpocBf%2F30Sh7XtHnGcTmd%2BYgw&X-Amz-Signature=18753e28fca626a1003ab40d324e3f9018ad496d0214bd902e2e51f7e12b99dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

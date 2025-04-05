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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z5CYLYF%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBO786dFEpyUk9gVkbCmixB4MtXeQSMzfw6A70oz5Ge8AiEA6B4E16EAGKLokyl%2FlUyF9irRPMGwcPCvyBO1spKsDTAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJeR84fheJnD%2FoF%2FfircA6CeAxBtnNpNG9%2BeNlluH128MJEWCppOm84bxMCqT74G4izKjXrtd4vgBn86wcjJy3ztfC4hc5uErtO3HCsgSvL7f8Ge%2BuEJYkUjUdk%2Bk2fhcCGDGpVh6v8AGxgwgqE2%2Bgr96vc3zkFlqg2sslXcooK6SpaVP3Fl06TK6IrVuABMD4o19w%2FquoVbPYvKZBBu6RneZd399Ll4epJpn7d%2Be%2Bh7sRtlZwaktw2d1pZ6JSdGExpI0io0tgriS3dVj95jErFKRXvBlghzZIe5HYwDW6D6G%2F9LtZm4R2027U1caqXfWj5eTCZXnhE7HufFcHI55p2l1wRcjfzSy6ve0eIrrJwvUV%2FEhUryciHHnf99GFXZnbjyC42XO06MM%2BNQM8N86yPCmfz8DKVCHfupiE9TWBflZZsk57FTcacoq%2FuDfl3LyNeqx2o%2FgGsF5SIfqUNChlvWex7eVu0h4EMEtiY2ISxWyHxWf791RzfNgQ4vnPUx3w1e6zUiUADDYtVfk8jtUz1s5Cu%2FxDqnKogxCf3a40sqbnf3DawI2rBnqgporJdRZeWYW%2B1Vt8p9JTiGR60Gy%2BhNKDUpMPO%2FARL11GMpXDzpp0UEkDjsN%2B01nqkofBn73NtrDq1BrU2M2DNoMMbrw78GOqUBuL2I4z5JfiDd%2Ba5v%2BsMxiqcvGLBIqOET1bObzy3PzwxPfCNKJa8d5G%2Bzvo98qG4M8DB6ywp85BMTfzty33FkS8%2F4W%2F1FMJdlE5X0lMpraawNGIZAcWSRZ9PKzzqFZzOw0EGb3GdspI64O8XCwh7kx%2FtEp16MeMuDyaLWOECTRFq%2BhmJAvCwQJcrnbwTpCWxQKO5SV7HeX1hMg6RfOOhluyugTwZ3&X-Amz-Signature=c24edf51fe35c8611b9039fd8581b41459c812c8f847c66791362a2ff77c4204&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

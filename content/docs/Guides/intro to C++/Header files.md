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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652G4MIX6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaBDBwPGHE44bYSzDIpSbR7u8UPncjuDVdsx16T57UUAiAfKvonTlA%2BT54jzrme%2BAyiFBNqbYujOxLvU1l9m3Kx3CqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbi763zEXpx7z6VFDKtwDKUS5ma5iuMyIRc3CBFJpTRvxLabMb4COEmKvu2e8L4jJDAEmwCIzP1AmbM4PCnvL9ns8hCBCpEN7ZP2fL4oCfGRZjiFAz%2BFA7c0Rn0LKLhY8mJUpyEYJqPnvMKMaXjIlrjLGeBOO3tvyo7%2BTORaZhoQ3XwfLZIo9hZ9ofN2%2FceVwtEMg2vW5XAqTNq0LOVKVEXTGnZ33yyTz8QrA3%2BjlKbi3Y%2Fny1wCuByjTxlVcxXiHnyY5%2BX5FpkbluZMZpTw51T5%2BBXqqcJ655I12G0v61yKtbpC06rgptAqDWoqhlCp%2Fr5A9cMws7VPaHNDV2TXe58%2F9QGN%2BET6VoL2Xm4YGliyqZvDIVTvyVRqjV9%2Bv%2F3q2rMYxxS%2FvsyfkAwj9vzhB%2BXx7cIfG9MN1li9MF7XCBmU%2FAtnLDHAEABvQ7st7duarmMxsTHLwCQ%2FZvVG4s0oTDtNnXvifKsYvMmp8J%2Bn0iYw0VA7UVSYU%2B0gTlhYRTJveieY%2FIex5tLIX34RcDhzDdho31ZHGdVwUvel86tkdCBWeSiUII4MGZfpLfTBjnL%2Fwg%2Fwb0qX5rGk22Vn%2FMJ03n2GDLx9nzhtRu7%2FLDOYZAkzIgiR7SsjoVHSVfKwhi8SuQ%2BqA454TsYkXBRIwvu%2FWwgY6pgE78di8o7ckR23koTGFnYtrP0V6GKLoTbhR7uwxB8zOUygfwXeDfUnOfCO97xHMKVw78%2BmmnFCfXOdxGZyCrBvzzBoVW56ZFmx5P7BqL%2B4yQoqkM1xy%2BY12JW1CdZHbaBFVs2NdUXTf7WA%2BkV9oxmbnyO1tsXWolX%2F2ako8HaP%2FfPcyi5FKEVDpcxwgkyssBntPNPh3XpddUMJzcNuJjSa56pHwNjzt&X-Amz-Signature=04b18e0956f277ed60927ee5de1e807903ddb95475ec4fc75300120e8b4c973f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

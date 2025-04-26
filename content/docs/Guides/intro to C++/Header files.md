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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKXKP5G%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGo7x%2F2VIAFseOfkJWpH74V086Hi4ybNQs4hnsUehT2RAiEA1KPxRfZPFpveTOGJX4xBFINLSIZisq9it8Fi05CJzlAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCsN1wdA38IAAEPcJSrcA%2BS3J6FYJ3K4auxut1uITDRSCUzpLFeCddR6z262wCJburFFQAEcx2AhSPs7m%2F4rpJW0ll8cwSogvDEEBn60%2F4yv39%2BqCcOaUVOZCpPTc0Emk5ImBoePhmUIzrzow%2BYwpivSLYWoJFHPj3Dk%2BevI1bbqOJRrJwFvYy9BOCAWuH5QIBBnO9KT8TWH2wlU3CYeaK%2BcK0OWXcL0sERPPQgo64Ydqumw%2FegtY2aZzZthSPfJDUTy%2BkqCr9XvQ7zXRy2lpcmt3C21y8b7gAnRsmq9pRjCbF15TV%2B1AE1vm8n9ALrmTaXHDE%2FBzMadUoyi7RXEa9aP2BH%2BsDgHq%2BXrEIsiywwsxnHstihrvQlxPz%2BBig9fhpv%2F6ekwQmMJnw96xUk5ouq6T9WjRkc5G%2BO2yvEEjCovOB69joSUlibMr1izKW6ZteUAKMmd3qX2GP7LPMGca6FZFfFDg7MnwiBMASVBq%2BGtx53X7uxM2UGwoYAQHnQlnpnkOCbzQ2PqFYE7L2uZMcyRVeGZKTxfnTI3M%2BqfiXs9MU7qfBsPxoQc9aY9jsWHO7wZzqTLtdHi%2BB9lSpOUt%2BixTFmM5uZMih5jfutWels%2B8aHl58%2FyhTOh7CnmO3RuvTfuStmq5bRG%2F%2BI7MJeEssAGOqUBFVQ01U8IS0ndhyCiC%2FSps3I5AkNjguQD3b82uSPQTNEiI%2FxCBfEiCgWeZE36dx5%2Blp4b5yTL0HFR9awqM%2BrDdUFKrKUWeTJsQprzdZKVhxCvnciKQWMRO7cAg6FUDfFzhaz6C3fYXohVhVVaBIlztMzXidQR5ojzpL%2F%2BDHfqrCUDk3Zcw4ZrBVRiIvoMjIPOpQ3RzOclz%2B%2FsqCfI5Di9iq%2FcHs5X&X-Amz-Signature=3824beb44f532d31b9875b296e3b023a3654b14ff81386bf2cefad3d788fc830&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

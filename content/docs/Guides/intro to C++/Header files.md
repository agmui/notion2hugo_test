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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HMSV6H4%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDClXr1uaC2SO7iMFN953EQ1uMv2yh7BlATTUWSA6SRrwIhAOuCSuFP15y9iTyh4VT1uVenXMW9lnLCKy1fM%2FiFTXTiKv8DCD4QABoMNjM3NDIzMTgzODA1IgxN3XhO5Ev0%2Bu3jH6wq3AObypUg%2Bf%2FNuqWyoNemOxokZSiBjH%2Fc6O4DjS48%2BIQYR7cyALaLH8djSQ6oi1ylWRidNgcw3i%2BojWyc3wXZ2oiF85UtaSP8Fh9ADgmGomDy38WGHODGcmeUf0tRE4lxDBSfTxDktGDTQYnskksiHNeaRg%2BOs2wwAL8poUPuJZQnPUyr4d%2F6pGcGM7tTw3p1cI8FrjS5sXOrrC8C7AZZ2t7eL7pJeIm13hjD3I4zMycnQMZ2yGVYdxP5qQo1KITUVWp1Mp3KXqKKdI5LcwbqvpQoyC8UF6YDxnRzGI%2F%2BHAKDyFaCTl5wX1yyhZU8a5%2BoEh70FqcMQs4zXcxNg0XpRFJ%2FolS%2BxMzaimZJL%2Bqe53GgYCgir99CuigMXmSkTtfEzQQl4KbQKIhgSsF4914jREgqHh0PKLZAqkXWW4epEn4B7l1Btp6w6YzVmBU3Q3%2BL%2FxYacm5noHrJwxEcMREi%2FMa3Z1WbK8AxwX0TWrij5F4p1UgU7p0yBU57wra%2Fw5w6ssAuugzgCefod3H%2FNwPyiol21PD2l9VjWr824v%2FsI46eb7JDmEiUNiT4WFG991OBDLbtH3mZIpOQttA34fuavDThaoZujcVMTFfo7tIXQRPprAoyR7AIBg1rnKGBUjCoybHABjqkAaIZ71CKk88wMMbE8dbyyjUa5BYYKsl%2FeMjjOncc1LFJjF7%2B%2BOkGy4GzPDPwj72F6Ag01rMUTWm6diDgdC%2BlfZ%2BuS0bPJAYXrsSbq%2FdQwNLwoP7jZDDW5S9vcUreJN7AfR6D7lvSdHjQKeV86mstdKgQ2n3j9aaz9ZRyTUfsXxUX1utag9NN8WRhfhci6x2jxRzug7FuB3mnND%2FErVEMCHRNwNvf&X-Amz-Signature=1abae942bf684288308a91b13e288f2f7be6860a5659a2787eff375d4ef3f1ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

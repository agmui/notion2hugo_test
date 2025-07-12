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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HB2PSW5%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi6jVE5oL1YKGSHoE3GAJYXOO8s%2FLTIMwWFxMlzJtwpAIhALfOy%2FiRZgQxxs4iUC2l%2BlkGXdI%2FvrG%2FFZ5aYcgTP6%2FxKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSI6mr7mVNQr0al3kq3AO8EbbjClwA9NxYgHuz2KpZ33lPzem1EjrYp67172Voq0us%2F%2BD9ShC2VYPI%2BgONZ8au6Bi4vMG22XvO5ZwAzKEPATL2d4PVvkHYSeDdnqrqdBqnkZxdziqKnjgRNRO20LYhpT%2BRU%2FigzVqh%2BdrzjV%2FapBPh8e%2FTTm7ducS84JWUvb0S0D2W8fTj5a9feVqQj2NjktI0wF2jD%2BmPFUqNbGIxxivuVJ83wmbgO5%2BWOu29nEgqAVwcLmcP%2BPNIeRepNpPhwBIpmZ4M%2FqY2qr6qew21MGnNwVq4awv3dsiplaB5CjzhcinR1r2Ua2hF7fp48QlG42KT3fKfIUtFgiJMOiryE6X0bINTGnjgbJSMQi7MaZXi8M4ilwYA%2BJB9QCXM7qlHlLsLm92b9%2F8gl74yk3R1HSgOSI9R4Dezzn%2BqFAr5eCjzZNTTeUEMDEKykefoxxetIlTtmFsmnNdkf5B6GwNCnsZuIPhIC8YZVQemu9hc3HmTnex7f8UghogBimzxw3hFKNCFRvcQJ1%2FALim02GAwCTtIGh9N6CbhGqHsi1YCxuYd3YRBsYSeMm738BUupR2FWgpbXy9t1Qe2m0iFesTi2HCU%2FVx07Hxo2v3OLkkX21z7MeuFzJF%2BdX4%2BGDDBtcbDBjqkAYl9OL4QVqxYvX7xEJX7ai9wOPnyqqlRn%2BB%2Bpo2DAq2bE8%2BFmSgZxviXzM2IS9XnNeqMFoqifz8T4EGuW1nL6PQI6q9HzvM3pMfgn%2Fslp5SUNQ3L9ZEHnmSXjlJv6fRxo6h8IiKaXIbDBvKa14hTGmFgqvk3JuflTeffHymjeR0aGzG2LtHmXm%2FTxBTijZPuoGZGlMWFhKsCAUsnPGSqsALpt5VK&X-Amz-Signature=1dfb164cc7cac68a3385b546794739abfbbbdd2d4e349f6cc314164840821dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

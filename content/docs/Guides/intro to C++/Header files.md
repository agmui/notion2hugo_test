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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDTFTPAM%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHbA6HBKlQyB3EdoNeWr1LYe2jHxVoJ7qNZ%2BZubTCTaQIgRr4QgcqgkFPpdbhyOPdlWoy%2FmByZkh2jfM8ZvNquZiwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOEAI3HxcTmAcLV36CrcAxth0TEIFaoGSk69eVtk7CjCqc9wn9x615nFLH0w6nMFMsqyaAm8%2Fve3cii9dOCXAkCqnwpL8YP1JYF%2FhnfiffBTTQuH9pebjPXKOHsiWuiKVlOBXZ5CnchKdPpoJyhImNzoNw2YvDUHfqn%2FpTd%2BQedgA%2FEFl%2BMO1K2kkTv7BUTX6KxU3h8eMjzBUSYXMk5gza1XCAv%2B9AE3wMw9zpefPVAA0wzqSW4q8RwNknP2Ojri1Ytn5TeY%2FTDVY9ppHS%2BDEQLcEQMzBSszBjsqqw%2F3WK2%2FBtezVeTX94KK%2BOB%2F7MwvSPVldS%2Fh3Rwy0TNMQFg2Obf1DPMyF4e%2BlNkCayu%2Bmu%2BbmE65HJcImHRO50keqHZcm5%2FZrTrTYN%2BJFYwL7Dd3J2ywQZFZo2Z76P6CWf5czH7hZzk8G6byQbSY%2FxeK3H7XceZx0zgVMPdZnztw5plpCwq97gMIFU1L4Kh%2BrV0ZGA0hhoKzxPxVZP5FStZTEMGaUPBe0onyruLCn9zXfqb9r1WvvNaKueNSSSLcuF6cCuXnBbEkcdo%2B4qb7FAdw%2BLuA%2FQjOGPoAcSwfSGgwnxmTOaM5pNSNr9PBLX0vLJ0AgF1S5gpj1NmJX52rs3aGGh5WUCYwO6KVEtASiEj8MIys8cAGOqUBPL2S7%2Fx9ZPfwBfLcf%2B9%2BHkkRdImRh6vhirK9rJg24BGtwRQe%2BwJKjlPJFTWKtMr6UyMMvwwnFC%2Fk8f%2FiwbuPh2rMe%2BebxP7WnYLvA0j67WTn9NeiJwBiPNPiIUowKP8iECTT2O7tmpcd0b%2BdZf6lHj0dJNFUDf9GLsQ7OQEZZa6tpXXGwa6pW8k7U0QrR5Yf8LyiT66qV%2FSaNkcl%2FGy4ZczeszB8&X-Amz-Signature=4b89a198cd7a77a10197afbefe2a5ade11536289aeb2fe7eba5e09611a101116&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

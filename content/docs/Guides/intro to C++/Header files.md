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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOIBN2ZN%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIE4z5YtrFP%2F7g2SX%2Bypf%2BJctp30LE822%2FdELXjzjdnf%2BAiBSLm3q2PdQDsUp0oYFn%2Fptjx2nbUZRi0rmEgOihjKsfiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHPKvtCN5fFNceRPaKtwDbHBpEA1KBAc29Y6J2z59aJ5BWlRlUad%2BXrDm8D5OXFWDsIof6x5dGjYIWLwuZzmRzhvhICZfitlxBBeP1XQdCDFbA86eyLRybYjfqooqWLD1yiutNeEW49Nxu7HdhSmaPdus3x6YHsUz%2F3x3T0euqwoG99MTxqjxexRimVwTEKwZziFR1jSgSLGrChaYODRTGDgYsLWXHGD%2BQV57AvrKOXLywCuZdteJGZ%2F2KrgfRQ8Veak4BOJUZXNCU9ovnUqa3QvG2v4%2FORzyGEf72MJuI6LbcSfdnxukymC2CQiRvVQpu9BjrLJAi%2BD%2FyPCXhUUo17CyFnUPoyc%2FQWRsRuZz4OIcABgWryEqDaE3157Y%2BW2BpeeOZo4WBvrCv0wBLyEg%2BC9GQqCie2HxpPolPmJrMa7VK%2Bp%2BNvuHFeakH0vDtEFisC2Tgq2SkY%2FFI1dpeTx3uz6rL8BZW0w5vnTBsYF99f1JqSs5QCK7uMLaYM6Cos7S00kE4x14PgMlHBVW%2BtMRtMdzXE2A3t%2Be8OCVW8pZ5zcUimugBtAU%2B5DfGFzyGSthXw3Mzx8w1kxDaq%2BWANaFAfshvNZ%2FRaoNgmzhbvAtWtueRC5WCDFXGHjY1R7FrMb3yYsBxsWnbk6BLZ4ws6D%2BwAY6pgF7LQLNthFg2pO60XITw37jWsms3yFOTIxZkP8ec1Tg%2BYkXz%2BjZqI8AQ29HkameemrWi2SX2IIlaHK%2FCms9TgtkuQH4ZSz6dDR1xGAbxQdLjIb%2BzqC746bfAeDn9m8KsfNfhPTx6%2FeOwrngaXRApnR%2Bq7nDvKhSr7bXVvVWPVWHnRn9yrE5SmgmdYEaM9Y6oGJeX5EbvRVDB75j1XtxNH%2Fx11ytMQrJ&X-Amz-Signature=ec706035863c62bb502c7cab4a41dba12665c528ab7473bf414c4f46960b53a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

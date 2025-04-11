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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643R54BWO%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICSJy1WDdnKUeERpiJLfq4NHoTCX1Kb5ki8A0Xk2kRakAiACK2RDCbJ9%2BNwil%2FfcQM5flRDT%2F%2BojncKFOY1lZNSGtCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMScFaUVGsHnBDrwtnKtwDUhjADFouOIGDgvSbtHYsKPhlIWYFP0kcEgHVv0boaTUbOjXnYHeKythrk2MrFuwKBFFc6esTnbPFqpRubsTJ8fiMlkYl%2FLueX7T10Z26JC1IxJTN14R5u95ZEwVrnifYkxOsbiULmppw8lkR3ko0yjKWHlTI3%2F1jH6ci1SLPb8RFTVpsOPMp4QYlhY1CrHvkE0yj6Iid5%2FPblJMFXximYjvnRjrJ3xyVYwUR507bAu2YZOnPF3HuX5YOuFU3wxb8n6qrP0KrJKmC04exc8Vqe56T%2BaQumRxcibTofcvIo08nipw9Kpwf61JXTkOP%2BiDf01zJPPTYJZWZxjam3j9i1bn865aCxKGyPK6aFug4rCmne7Xv0KkLsT9FXp8jYVlSBNbMhGz1aTwFGgg6Vjlif9NDR902n7B8u8nYV5dhEcaZ1Ys9l11aUKbMLpkLWRVUC5yyurrxXuByx%2BdYv2OieuAUcPcXAEOLfdmC97OEzX10Z0hKoCpjPjJAmOdThAoAvY4zTyf6pE0Af03cJF6gJtfm%2FdCQg3nKbP3FfTx9YQ5DUNX1Rnj7Z8K9Dvn3t%2BMAZ53%2FiQ%2BykuSbsswUFZfh21igTNI5%2FP3c54x65%2BggZkTKYHSf4eRLExr%2FRSUw05LivwY6pgHwit%2FZrjGmfhn%2FuWr1Q33D%2FbJxozzcubmIg9sV6a0Q2oBCMFFLkwBncUtVUP7Jzb6RAUkTKGOkjDT%2FsE0%2BIKeaoVriEdUajQ6rulOZ12UXoXBXVUV5Rpmlew2wH5qMHwwwR7%2FQAG1g6nApe3M37JQEIGihM4clkchMS5V1s2LHj7coeNgLue73BhJJgJenexFn9nJApxty55GdRrloY5DIhZGIDJSC&X-Amz-Signature=8daca6716f74a91cf49b3e0d8f712c201d77aaf3e43cbdfbfdf36b6c6a0e72eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

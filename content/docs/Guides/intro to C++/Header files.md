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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCQQDGLX%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGw1FV3RQWYUdBEjQ3O8yku2BnVufS3e2rOt0%2FcNu%2FJgIhAIh8YybDXcGPqNiQ5K%2FNdCjZQzza%2F7uL79jEr1NcuMxTKv8DCE8QABoMNjM3NDIzMTgzODA1IgyHXdIkB9naXOQ09Tgq3AOTJsBD2N%2BcS1Do1vtcYt8oeqGWLFcJSLoe1KPxGeZ7h2r5zsmXkUflH8y4MWChf5%2B5lK1OuBhZ3r91RaZdZpq9fri7M36hTWavv%2BoqSOS3RiNO1L0n%2B9tXSMICLiKtAF3scWL9MsJlyJjiToDTYqYIYD8xAsIuDmMoTj7KYYv0PfeAGKybh5TIQme%2Fk5mnMvOO8ab7zeU9EEeXTewNmtXOI5lDxNA5MPqiMFYXgTstEewi5TOYvplDGfPIfxUFIcweq8yX9WZww%2BYsaYEMtFPVnfU1RGcSF4DmZ5vFyW6pJilJLo9EZnG0%2FFIM3iqZhVOZmZReX2Ttao3rPkesb%2BMd%2BoOAbmk9t2GAvyA49wTKsxG4MC%2BfCTa%2BMAeAjyLq22DwHXlwqejiAsM9MbgAm%2BKKLG%2Ft9%2BmGHVbInS3kyM3MTNzp380bEkPlVN9R%2B0EyzmBtyyJgfyq%2Fb4IE2F2hYo7KkoFJt82iwv%2BpQgvObzJYgcIBeZSOa4sY%2FopcmKjX78BpO85ozIHH0U6MCiBisBpPHwKRKdvjm%2F9HZrliA6ol2g%2F7eznhF1SY%2BPiYs02IQAHJzBaQcYtiN9hpftoWh4jdDhuqp26aJ8uRIXMXbTaVasCgp4ySYYv6L22kqTCK9cu%2FBjqkAdFHbcTtjv0NcJZP%2BYNfpmaxhubDVF110gs8XIJU%2B23c3zwV8i%2F0IyckcqI5lYkmYAR1zAbEiiEmUNRZb0CncMfDlbHy1dsA3nenl%2F4X6PbaW5J0u8DT9I30DzwPhkT2RGTpEkvEkOu3NSR3HYzQPHmLFFkhDkmIH%2BcwZlcUQhADizf8TNeV18I7kT%2BRInolaqcIsgAOpOyfrrHPjwyjWiRputbU&X-Amz-Signature=88df5e954a404bee44ddbdad96de4a0b1ed01297317fa2f713e438d11ce61758&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H3AYB2D%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnaOd7M9DaiAaE5ObEfZAKW%2Bhy6VP%2BfVlOm9E4R%2Fhs8AiAzFUlhL4Xr0%2BuKaCYS9M4U4DKMi1SEu8NZRz5bzP%2F9syr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMuWEGLaKw5HkM1BJbKtwDFTY5PMQ%2BE4VWCwywJ11BBdUFcHr3DiQFYWG1ZmEz7WhHbVcjREkP%2FSO%2Fsn6q5fryD7IiDZ5qc%2B9%2BHd8bY3dCFKU2vMz2NSE0HksVQ%2BCJDHYqitoaQ6YEWW6oJyUFQTo68zMBd5h7UulZ8rpi07F%2FycS2b7qRPHJgNXd3UxXiMHv1AACYUYmpd8RKVW96LrZHam9GJjyVFTbTr4LKIVTZKL%2FKU0MKXt5mA%2ByFcBUGc76RJ3uj42JoqKE7OxuOB61%2BncKa2Cei54T8qAi%2BHE%2F%2Fsj%2B0yGxigBoCSuQPOkyehALxJZfi4pr3zh2vfLoowsdOfVsT0d%2F1NknurOuV6lRb463I0OIzRz9Nk99J7iv%2FDl4kCUEayplAUH2hZTGgssvNFXHyIAgijlQ9Huuf7rVFqp3eebs2qeV7u4E%2B2qo17p8DZBnSk3f3vqwakahIynqf8ljADXrqhAiqeBh1KuOniVeR2Xla%2BCE2DBFSqzde%2BZwSNjfmNa1m4Dft3IYowZ9FPFtgFxr8CT8mA2qLJzUUB%2FccZuTpUBCgU6wK6kgFZFg3Zf1edTJdZ01DlYPW%2FqrgC%2BGzLS0um4JYIWV4UKndesZYetFVk78cffp91ApIh3cjhvOEq5ltf%2BKdDPMw%2Fo%2BnvgY6pgF92S4V0nyxxiN14sbCd8MZ4YMrDuTcvHRXft%2BQ7LOQf1k0deSecS2dSK4TFD84Abe%2FAlD2mtIXwgS%2BQm2bbpRUAeenRIIdj76C%2BIAvsdLFGveCNCDqlPwL5RfGa2FKg7mQqtg%2Fo7JegWbnQmLIvCnxadKccevvYg9WsqRKqlyqa65GKT%2B0aLfr0FaIxeGlM9zuDBL5jzTJJc6y%2BEE84CbOxxtHGuge&X-Amz-Signature=bdd68ba815a724d660917a0cba25e2203fcd0b91feb2e9d1338046466055b284&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

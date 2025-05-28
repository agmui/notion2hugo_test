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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626CD4BYY%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzGcvq%2Bw9iu0Pn%2FXHeRh9erFlZzKDueyEMvD6B5z5hfAiEAutkmTYS4jgHkn2YA4XTuFj2%2BbnTr4a9oqYoOys2YIAAq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDPPvO2xAumE1gkhYQyrcA3qrVbm89%2FutqgazLJBECLnYtQf2NKqUt12LlEo7dsG%2Bvf%2FeXJA3j59jjJGjQ55HpaUWXm1o2TriujdKnQ9iqccJNHq56uImFmw33Ir81IBLkZq2NOXr568SJS3SLKYM6FD1HBjh3w%2FPTuz0ayCDQqelWe74bkmuFi9UAtGAyyFhgK8hexNplcayD4jxQEfkeJPQGRwlG3LIJNmR6NyIGaqPJ0y09DE7nKIbBtlvEus0CZ4yKZzmnbJlnWH4wBt6bHpytB68eitxM5ROhPDOfbJsPQdMrC9FC%2BdPMW4hy0JAfCKBP1%2BkvjjcB%2Ffyk1ZQsQm6yUSSyFwAGcpBhlqHAknAinpgGdzpJa7K646Jggd0SEh%2BlQcGgV7NShW0Y8%2FUSF8dy2nUWgyvBaNFcZgvshd4HgEy1c%2BYMo20vzNX7%2BPAeibxGoUQglhrmoz%2BYZelgEGIgtYvSRjiEtjcymJ%2BMMuoQg%2FoifGHdHEmcneVKzE%2FbHgROPgAWzf9ZTB0YiX4PLUV4OCajnnRxQKSVbAi8bNu9QRejIrEhLk2pPtdaIQ9UGjE1PdqP575JV3ZbOf6TlvLO0U9bSnfLZ4ESg7MrvV%2FwkcFhOkLHYXLW8ZUU9Ndpv8Vf8WFLq7LSQ0eMIik2cEGOqUBgOK1VJbJz9mjEY93sedNpz%2BY0Ge7yhgOmWeR4j23qg9L72xqI0zx3zQ9AA9xY4nuvEjCLeAY%2FTmI%2Fkd7S0Kjwc08i7g186r2L6DMCp42czRR6V8NImEOfspJk3wleOWjTcas7dLD33D3OI67zflohiheifHSq8g8nSu6xjm0rBumhx3u4f1LrgjiWf1p4xKAibWf7tddaYY%2BaMU6BSH2oF9gCw34&X-Amz-Signature=2c490ee8a9ea7fb2a2b2e76686f8eb8261f09fd92928702386634305d86bcf12&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

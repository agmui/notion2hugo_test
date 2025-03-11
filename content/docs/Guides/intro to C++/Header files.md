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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBO3267Z%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCJN9PU7CifuoN0Cx%2B2HfgPYDR5k74a6eah98Ti%2FJizeAIgKmKKuLGgTrI8ou0RY0FERrEn1oMYOXdnm6wn20s9i9YqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhY18uC4%2BHrew4rhSrcA8aws4UWmrsttBziPsDN8AHsEdd03%2FDqK0FlPSN%2FCffubTKEGTakC47VdYNM1Pr5FFeWT5HYSuSPG1KXPmqRYaKOY6Z4vBrRx92xokSWiSaMCAEJHcd7NMXLMpE1o1kBdXlcwEZ%2FBHRSLQtoZ%2FOhcRODtB%2Bbd75iNGHhDD8ZODuPXq%2BKuF96vSNO5H3KVz2dl5WrlONvbA43lt9N%2FBnIt2pUOs6KUlM9cGSull6v1khiu4j1WX6BOUhE4IQ9TQ8Q5XSaUGqEj0nR2uNGc2eBlA3NQyzIgPEqhQbibcJa%2BpXJWTf8t9txSRZFQnEyn6EX1yJull%2BgaqL7qSm9tOho%2Bf43fVfPRKQD%2B8NRCN7LO8HSq6EzKG0OqkK%2B0Anzp8Iq7C4dB65zPhYDXP9TjOKnwxq8endBMF%2BO32XXUIHuPXWIz8dt9wr18G54S1O7rG%2BCdE4hK7OdbWUnDFaG85QoZse24c9hoVonFYThLU5eXUP29yrEKGTZSgrxIlMLfykRSL23SoiO1fyt2j2CmzCXwH3wzqNdwtVemT%2Bw3fKsrrcvdnPsA8rtq8x4mevQaaFJNVzqLWQuzXnCTxj%2Fk9wwLR17%2BOQ8Ns6r2qehS4gZYx%2BfmrAfvCZ2Gld7ywRLMLnQvr4GOqUBVIOgOlcYjB8J4T3yuh%2FgiXm1Ed78FqWnQP79olbCNkTprqpGsxQLMUHpvxpf1vjCxvmjON6bHQ4hQpWgg7mH18BAPmrmC56wvCZkyyYJnokzdqxgjqgFtp7kLNe1Shr44SWfbStknRRIGS5xvGmimpuZNiEoeTLu1S3JruwVw7CFu8JolmTLE6WKbQogwqCftOdOZ1C7mxbl3H1EinxCBHqsNUz%2F&X-Amz-Signature=fa50996e1b23cd16b56e3806f026b293ee4920ecab60ad3f35dcc8f1bd5b9a3d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

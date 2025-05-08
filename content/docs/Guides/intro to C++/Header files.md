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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMYEFC67%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5juuacJvQNxrSwVfJ%2FFmHEMicHJWmx8y5lgX4n3jBSwIgCH7zncZFNtf2u8eS8dLltiKQmmugRjpvfYNvxDtBj9gq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIAD4SL0jvVs8ndn%2BCrcA8DDwCwMaSFnbw4XVckkkx7uquh4leROyDFjjTx45oQNZQJixB5e45A%2FYPjdBICfk3MHF8gCuFoC7Htw3UO%2BXTEkfB77hiKXEKJ4quT0A6GGXcIq2Nnj%2BPyFUrr5gC1PdJGfY2JAlOwiCpLC3ghhWAAF2OBKO0mWBx%2Bz2Xs0l%2Fa3Qc3NBq%2BQXZ8nnw382ti7ZWPkVO88Izt3n7vMgv%2BvKg%2BnDAfzo0cLYqb2CkLAhrwn1o0qT9yTEqd%2Bnju%2BqALZpspsm58s%2FLjV%2BnM9nKGtsGZzCC0K2BF%2FCriL4PdsRQSKV9yrn48%2FV243usayGQFKiMSS2ywPN7tgQlpoFLz14GPgbl0YXe3gitCUv1xj6%2F%2FeniHz3Ilc7SLNxtlYMyxzBSFdryIZl4y5KpY1XqoMvRyA3NjG1NtU53QiD3oraGngVIZvMmXkpK3QGoOzKMeh2zfnqiIMAWfUjdRWZngYwGgERIctoRPPHJajXU5RptVOP%2FT7m3n5Q815fZiEZQ2fXZSpl7UuzyERMdmyf54RqJ4vic8K0Vnxfp0nhrsq5Q6Ya2dOx1PgAZJY1tT109DkQNtRHaIlrGTtqiIJKPTLkQcmoWjyot2%2Fw9sUXz3ZzfVdpNfDQR%2FkLfIc%2BgXyMJqB88AGOqUBbj6uNp0V8NVVBPDktEZeJNDypl4ULDcI3o6s7e%2FC%2FFoB3qwa7LlGleV6WZxgthNAiy%2Fadml6OwGJUrV6JX5XVByMRcvPWh0wl6j0%2FvDjrBK%2FhBNOru57IePZRJk3LCTi7hpyYthltTIYWf7boDNZaUI56KeWUNA98%2Fj9w2lX3K5YpHa4vmXb0eo4zaYPK2Aog%2F11Ppo1vwMBVVvX78GDnYUDl9kB&X-Amz-Signature=59230c86e0a7d8f3648349493079cd35d1a2b6347a0fce055367f95cd31d75f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

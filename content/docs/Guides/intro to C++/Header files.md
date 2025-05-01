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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LS6H2H%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCMwabyOoohLNpSZBqCkcPfv4sAggn%2BW3idbCWKQjGaZwIhAMGUYmSvSmTLyFLkhetptHbTXB0ldXr%2FY4TVin%2FSCSC%2FKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDEUVFHLk5uIhi3lIq3ANz6TG9o5HUf3TTNr9RjCLgYKaYmRMo6OUhXmhysaZwFsKuqbTSRD7R49eit4GI%2BhPuIT8lzkw2O6YQ3LK9ur78rQdsd8nnWmiWzNMRtYtSOzQgJvlgFi62w%2BFQAV%2B%2BKdHel9ku%2ByVvOhSCARa6PsqLfRmc0HJUvD2m4Il9QHciHy%2BneZoPTTYFHik9WZaJ3WUquUlN8dhPGp5Bi98yOAXOF4adfmDlnBeVev7qpqK18OOWnlfDq0PcfTLpt8jJ3%2BF4qXUk61fjO2MMy%2BpihdWMnCNT2Xe7StncKKXrMTP3xVY5Bg3Jb%2Fx1y34g6om%2Fg8eEqG7DfrF1WqGAEEPMXYUHxV0pcTIHXmqFC2QE%2FvfBXW%2FpkceSXPOD1qHVnx3hGexwX%2BFiy%2FQ5Y3Fb7iIVplbT9siDVamhAY7%2Bh7%2Bd0IhEKRkqj25mrZxhZFAgl4dvx%2BhALjnGB8YBwSLkaQg3B4MLtm3AIdO5A50XG5rnHwwf1hVWNotvNcqYjBvP0HjOclQMfkAvGAfCEl5CZOZ0Bq5uwzB25hja5oONsmMYekF023AFv%2FVr64OC3tr54FadTWXSfqfYjg%2FzIH7dW%2BtXEWEEwElhhEoLJh71cO4T5LECz0ggVh4or4sEnrppNjCayc3ABjqkAS9uOC%2Fm6HfM0qO0myqXery%2F6dW4JRqvYMzNO1vQdtSgBS8tnnS5lxDJJqgT8YM9WuWMpQXdR2JqDHrdnLzu0E3ejzJUwsHzpasx4AILRVveyWJUIj0YuGatlrfNN0%2BCYwDhIsQB03xAddO78TmElKY7jFkeoWEJCU8A%2FQuhpr8lmyDA6QVNbcHx9S7DXhkRNiNL850v%2BVxDyEmm4uHe88nVH6VJ&X-Amz-Signature=b9af3f0077d96a607d1e68ffb37b2cbce36fe7c14a2df5f0831d33bbc3bce3ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVLI46AF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3fyIADjZOm3duRWeWy8LfO4Hcxq0b9bzIhf8imFjm4AiEA6cjsyX5WXuliFXvfSbqniYabyHDMqX3nk10Mn3qRAjkqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTQws%2BjlwKpjd93pCrcA6irQVdLaLNZGYz3FTX1nZ9JSbBN2QldqTN5tfbGaaB2kX4exdgsH8R9ovq0CUmB6sh4veDSiPu0KfIyNd0ExrjMCe9tPEu7SEhzr70AQT9Xtp3hlyx3cdLCChCVGZRUBqq%2Bojtg7kIZGspcl9B32n7ykFDepUGjZMhGpnNXMzo8T9cNuvChsaeXNAlYJAuTwnDQCesjaAYC0ab1T5YahEnDMwfEUhKDvbpXOPkoNVKyOlN%2BTWL6Vp%2FHnnZoNsU557osvTsiEjXu5GILvFAHQxgvjmcqhSzAysTxQzCM%2Bw5MM%2FD3%2B7S%2Fg42FC%2BWsoDcl0y5kaToGXuidmdlmc7SnbqpnicEpD4RDwkVlvmT%2BIZbBjL7VCUi4veGv2eIQgxRp93mR9Ui5ioD8lB5dKuylxVS0ftuD%2BevA%2BT8xO5tdYnVcl3oXwrRf9OS%2BNYJhvbeU0qF0no1z4J5f0pEIjw3qGhNCS1HDtb1AGM7z35yaiR4G4yQKaa3j1kUtnnXxFdME3asGxhD%2BXBZJfTWBib7ibtjcNqdeQN8dNvZvCqRhXv9JXj07qWOMRtoZCKEHS3DKpUzwXotVk8wcPig8AKrJhLBf6jjFjVyH4EXSfQ1xmUciMqc8ZLzR3QArUlp3MK%2FhyL4GOqUBWgiRB47bI9PziI1%2BnvsAO7i0k9LQbQNGcf5PORAUoyxHCFmbR0zl6k6v968vrowrb7DIBnB%2BqF21RfLf%2BJCuRGEe8IGuYJeoNEVxGAFSDewwkquiKjYiKOFMdQ4EoyeY8YvP6vevXqx2yxbeQkamgqxksd8Mh%2FKkx29UcY%2BkX8BsDZ9BaJqA0BfX6vJAdocThDjB1HiVmUbD3ZDQA4qVAdPAQ%2FnU&X-Amz-Signature=a513d5194461ac5acf585bef235f4ab019334373862f72e7902b2b9f431592d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

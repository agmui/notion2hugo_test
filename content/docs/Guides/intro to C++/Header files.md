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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655Y6OFAH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGVpcKtk1yzhkeFom9c6%2FAz0wLCxVm3n7NerQj%2FgoJTAiEAw0bSo%2FK1lT6WhhFdp5NHlk8MevRrRxso%2BDuTZUCP%2BIkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJLujbaXipLXie%2BHVircAwmSDc8P4tHNgV6jB8%2FyVHzV%2FqHu98o4jiHGnG%2Fa7tW6mW80diUBr737x2VuORGgb39l4HLjMSdZHJTShItCzHGW8w77xBrQFcXuns7VDj9sgfdAaJtKp0P2JYvyDgBjdwy%2FfntEU44dfFMgljxCNkG9aiOLggzjNkTTSqbqUBoGNjNLMJnbNnVlEo6I9aKzf9ydHVg6gH9wmK%2FYsdvjUn6aIFGPC8jbvA79LnprDh5Yzmv281WUbb3HnM3e8miFuPTJJFLdF%2BddGWvVWKmYqvkNkfXql0f6HcfQPnSaYt8iHRQO9%2F2l0RCEW%2FmE1aJoeJBffBvNOq0eXnoATUJ%2BpOJhRyG%2FINssDc0FVitjvo32d0JXAWtqc%2FgAukxqGA3uWY0fvoxjl0KPgySyGftJNVrDMrHnUPmeAsU5%2BxUhbJXMm8f%2FzWI7Y9hAJIEdpjFQTHvPsuwS6BPeDqilrHeGgHIyxCvYwq045RrGMN8AhByQl2yBvB7%2B50X4M7nD6FAW2%2BqKKz2BJQgx0IgkrQZ3CJG%2F7eKhpw21HNVJijJIzTkNI60t5Chzi8QJNzz6rNoWKfIfevA1eJ2JLStizhpn%2BfMvEW%2FYfFgE5a%2BRN1yeP0GnHd5kvJNN55KZbc%2BOMNLV870GOqUBOrnMENvg0ot2YOTy0%2BK3%2BVfJhssXIvvE89aUjAFUJnEitznB8SAcMdE4NVFfV%2B019xlYLqy6oC4bGVFCFLVcIAtXbshkjIeiOwc7yAhvgKoG90vAeealNWguH7PAuKbcYP98%2FH%2F8cKILSR0ahwD6cHtTAb16P8aKFwKrOyUU06FNtRUDgdR8de%2B0q2pCOT1LcnC0JrtoplicjiEv13O4vksh8MVp&X-Amz-Signature=5902cf443b784710e42229fca1117fcfd049f6eb035a44c416e350ca495d3f3c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

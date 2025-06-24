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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FMF2H4S%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIFv34trqoqrUg1dYRlyZ7Yf3K4811hVU6XV8wa%2BYlNleAiEAh9EOQe1B8BJ5rRIt43PC7j5ojeEUvw%2FETgTDILPsb8gq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDuyDOC6DASIqNeQByrcA8rI6fJB8pcGxXfhYcdW1IEt72xUol26WU0xY357Y95hB7VazFWMyVJN%2BUzbQbMqmF1eE47RLfRnQFRNBnEofahTOku4RvajSTloMKfZZP0bNFFGYGf9F6UUiCIRQa6iXustgIzyODwL7%2FfjHVhmUoaQ%2FiL3RpmBgr%2By80uoLHRVz%2FYt0NWwzYAAbtxqNxL0THfYzDPQxWOwUcHSYfwnouMEr%2FP0GCP3o8I1ArVIo3K%2Br%2Bo%2ByTf9FZ5Z6fNtR2ihHlT5yOGHygzPSV0hu6OVfHxk8%2ButB84loCFfuIX7xUzl4HxXdSeg3grG%2BhFyCKC%2Fnv13slAkweRgi3vWmAvELFFVv%2B2zV29KB4xlPc70B%2Fyl4U6mtw%2FI2wGDjKBk7CSv%2BbYHVVxk2LBlsxb%2BcOU%2FNeFFckbTmtOinkMUdMggU1KCmi7CG0e2%2BbWQHcQG3y6MKChgCgQfwEaR8OO8mv105w2uWNA07gZUXXEIwooZWgz7Z1VXL6Wphva68yc6MGjH2iXCMn0TTs11jYRlcEttwUFpppY%2Br0Hhed0KvVLpaWnROtje9z8CtFszv0eOoNfTUF6BUVNufwrs8g5ddC8VyjYQZ26YgqkkFx9KB94N4YTitio6vU02SXAidIsdMOGy6cIGOqUBRm0jo5aNM%2FXFkfZx7t3%2FZDsRv7%2FUEWDfVTBtRJuo6Clv%2B5XNuGa2bNKNay%2F1KKVwQw1zHKpHWYgra7gOcYOFjXD7J9RBfbMLQ36s8ZWhPPI2pEMO2HQ%2BvODpWZzrmOhQ1x7taqHsM7BxKg4D3XeojCMRGfPZrig525BZ%2FoDjGwBB3%2FOCEM8cxwpo63guotFniPxqHsh60q8jpgykR5hn6WU%2BS%2FhS&X-Amz-Signature=bfe0598e634834d044d0a0cb293e304a78b4e524f9efdeebd4f4c55466170179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REO7Z5OY%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuj9UIBzpTY2ISpGKh%2FaJt2XcKTQbdTkUci%2BdhboxAZAIgNmQgwlRYsqYvj4T67ymeNsgw7m0Lx7JgzUXQZgGFAv0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNbkQKFq%2BnfV%2FKHX1yrcA38ebth%2FTdJaZkmdqIaCVDABEZmloKCp4F7IeQ54hHn0K0poOzkFVtLDMYaU0yMviZvOzG7lBNDngUs%2B446UqJpJ64IhyPQfgnuYYNrakt9cl716rcWLCtRpClXGZujwEwozo6F0Qm9QmkGYgAbItEbrbmIKfik5heNgBGedpRb24HhvZG0hCRU4OX4fPQRF2DVdr7N6o8FiaeqiHqXM2wsYoMC2IKPdFO1sHx9CR3g5d3jKebRNpDwXOeiNtupzy4xGwF6Mam9KwP4gwuCoz2ALZRnR%2FRqOHNQP5NCwpeWFvpvimlSp%2B%2BKOkHoE7IDaht429Uf18f9EjEs%2BicX%2FrWUheBhQMJeJ5Hi%2FI2L6eTF7Jcnl8AFF36vYTC7kVP8UYAprRaDDhnv7UqZsXOTyd%2B1xXFgmb5zptNEvGlWrijBn6%2BndZooWYXP0r%2BdXmIY2G6FclVU%2BcxqYAaS9tATC9ExsyXbZkTqlzwgLjNU%2F9ZiZEjzyh0R6SkpjtpkVAYe2ZZOhHna6V9w6iLFzNfcgmrHVD4CurRCNDV6UnmP5sBGvLq%2BYA1ZmsCmBQ2fqPYP49N7z%2B3LxnkrVZpUj29L6qGsu431PeohZVd3zkyPaRf1pGhj9S35Wmh2BkO2NMPWRjcIGOqUBk7EzvfoIx7JonYfdzsnKmrk9AQcGzj6IC6S2%2BqnR%2BFzPY1fO6%2Fb%2BzB4swtA%2BjhYF%2BBOOqRLkNoVvv4vvkWmLAnEh6kE2X9skLIpoBNUh6dmvfCsU%2BmMLfqKx4mos4phcHAL7L0YHOWaZ6DGUF7MAKN9U5dbQABHczlxfJL4%2F9z%2FtRLPBozVBl29xqUnWnoR6%2F8bgwDgElqr49knzgu28MVwbbQvF&X-Amz-Signature=8f6de67f2fd095d0c3502facfd11d8c8a712844dfdc0fd979362ac92eb22720d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

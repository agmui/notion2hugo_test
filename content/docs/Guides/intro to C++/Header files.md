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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQF6U7QC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnnj1ooyteCMX9zEuLgSC51lJu42SSHwSDJJmfRTe8RwIhAInK4UxPGN6o%2B60mvcooK0Udun9mSpwrItAkkUtg1G%2BPKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd3dyG%2FSUtDuoPbNYq3AP1G%2BbNNfue3FWQsrlKxV%2BQ%2FVpKRBGSKwaJUd9lJmm3KaLC0T83iie00FJz0Aizesyryw5syCR0%2BBat%2BnLlmDxFt1wRCZKutIJ59zHDao5PpZ%2BrGn0jOlMcw%2Bm5m0pF7%2BuYpbzSWEySF3JJbsiB98Azw4x2I0rJcdO5MdFtaUCX7OMRP%2BbGCDhoHHeswphgPXeOmv7t96wHbIJjEuSTUd%2BLtQwli4phxnOp%2BfVSZByCI3aa2aN3F4wOd71et2tUQ7KWzaM%2FGmVLGGEhjm9We63lGyVpfFO9%2BcfKt7eWb5mcL3rR9VKfWripC5Jp7DBbuZMGMQIVAvhw7XpDfvrH%2F1eYkTg4jTiW%2F7MmyDBZVZg%2FKep6JOi9qYkUhltLlqK3EK9P0bQ%2FS9lG298rXOohrDTkrW%2FKcoIZDPd9J3LbtxoO8p4yVjr477sDK4cDW%2FhOnkgO9l8ANx0U%2FT1%2B%2BkhFYalPjE0qYjRzqD4hIcVBA%2FHEmVpzkJrXE2bQMJ4MDq%2BED7OzgVPN5LY%2BghJ0f7%2FbfqrU5r7Ab0Uu6LtDMzu4SsojV95B58zuKYczNFr53vU0TnMFNIgw3g0cjkP6GDmQxmM54U7%2FJrrZzpHbSrvYf8KNAU9UOXLHxvwJ6SW9cDDFuuPEBjqkAeozwbJBW9P9SVZ%2BlAS2JfwKRVfynAlNe%2FSA1jk5eHRvbfneYsz2KZxSPWsZEA4luue5AE7ct2BwUin%2BohVCSjcBkYmq0LMr9vh1xua7Hp2%2FsfE%2BG2TO%2FzkvEsu4O%2BlB%2BXnSk7xOQ%2F%2B0ICf0Tc97cKX56mEzyPapu%2BPuImIRJ9PWODXLhpUxxfiBBHs%2BqBI4XqoY9YgqF4odWbBsedWBiuVITo%2FF&X-Amz-Signature=2e1f951b22ed577ffb695f5142005e6e11228b00e29067d95e4c07492dcba969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

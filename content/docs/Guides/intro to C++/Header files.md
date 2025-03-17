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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7THBE5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPbKQK1aGERju6%2FAnQsEL%2FQ4f9dqy9hFEZzQG9jFAdjQIgfh6yvf0f0F%2FKCFSwP1t%2FCUhXLN3zHYAO7Egp6cHtUNoq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNtXYODLx7eV%2FbsJsCrcAwPNoavjWmZmwAc3406jhq9V6yMq4gxuDnVcp101X%2BydjCSkAdjoSbUrFVxFO323Hqrb9Mj%2FzAtMR0ZGVzmKVSs6T3oidG1GwgkuZAXn2zn%2FjKkNVeIgR%2F7f1QmaYPCb%2FSLeJpWvwgmMmcF8H%2BAxSZNh6sz%2BN28zTlP%2BYmi6StDyzjz2HNRDb%2BRRxB5Cpf42reoFY1a58Yw1L6b0MfqUXlfGCkpLih6TAA6Q27cxEjPKCLOHZwRX9XUs2RQTHR7jrgjYOHCK3GhMOpKELuxckbbBYRjxJ6wrvIwCP%2FOEIe7WnirVddTM8TEW1FvPFWMqaWtpekQG7XGTsx1nPYE9PGh7UuBzKqMdLfaol3TkZj9EAcIgoqzrJS%2BPvXg9pq7Tl7sFV%2BDcGoio7oxW8AOJrxEOFPO4q95FMzaIv7cQSEiGpuc1%2BekGYhFBuGOT47eQscElarZlIk8USqYFwEU%2B8CJnmsfGCjl6lzQmKhj1TKGikT%2FH2sGPOIEHZDK5ar37H2cfIQVVwaM4Awt8TWNzDo7sOjiwLcJ%2FHblmBCLaWTBzQJckzf755LvG8BZ3h6BkycnaiE9rP3krK01Px3mZSNSwrYuVz4APEe5Pk8b3JWa9TsXJjlfkDLRlfQo9MKOI4b4GOqUB7nIs4fmK2soil14z18%2FFV6tRc60wRxpY%2FusXYz8cTxrVzxWbrxjAgJsoWQ15TF9jOgxkQyVQEtD1o5iT9jZMN0NERZTTYIyiN%2FyMPc7krupwC%2FMLKAFMc0Q3DZFezVwlnm25PAN4O3ibF6lVaDrISpNyT3PaYI4NedQPYf89G4vez3ZHKa044brzOOe60Rtcp6Ii0I7m803UYZ7wvQSU72lcLL94&X-Amz-Signature=bf892143088a3f7ac7a302bd8045f754147c7408c055b0cd46a55f006ee0ae75&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

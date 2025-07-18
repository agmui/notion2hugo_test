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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642SUG66A%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDkdEh35MYjFlLdZmNIi7CbmA7FSiNwQTXOcdZMPNMvBAiEA9Dy2wdKKm7%2BId3sNa2XmwXrUKm1dU8xceTn3LHWl%2BNcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCd5Oy9ppPbgb7UZpSrcA33Sc8zmMai26mMqgffSGAlXysjV7UrSQvZqzyDt1C64McAyH8%2Bj6UeHO8yiNlLhO%2BcNCCDb49fWaP03SCYI2B21KxKFjqis1WABy8qATBZJphxizvHRFB9eriLdFPVoL2yWb6NkUhItKAPmuzaBEPD1HJa3PgeiYbYQnQwEzQSiK6RHEB56a7Cqbai%2FGnKAOe4Sx17zVZ%2FedcyMRKbLSagjkyzfn4BUhlnipBx8GhAXWP0j%2BAc%2FgFeQL%2BZVqMCzlXJIghKCWWHpQ0DfcMLa0mjiJqhgJ%2FoGG5zyK2A6fqk7M1sP9rzf1wfGGZokkSQhjei3GNY6FPAVblYCV%2FlIQNQrat%2Feicuc9nkzqMXiFM2HbIufWPVxPpMc82DT02Jo7fOJBegShyXR1VaBIsm5SO4TgKpP1D2h9GLj%2BULEnHE%2Fa9NsKcGNnmEhluxel7tGIyb8z7yyk4%2FhZcU0I%2BK5iDP3ZK45RlYbmnDaq6amQZ%2FBCqgSzi0tk7Wr%2B%2Bp2WQQCmTjGG2%2FyPJk2YF3iRa4vPQQ0hTplvF1tKAkZmKKKd5%2BJwHmey%2BBuFAuggO8nGSc4rUJAd1TpdMKv%2BjdAzr8JSilzrKPsRBn6uD6PwTFvbK4GGFRBAhBrdJgjXhbyMLLP6MMGOqUBPYGAQFdPY37AlVNVy1skOGd0wNwtSpxQaT51bXqFZ2uAU18APEkAZ55%2FKY2YzFe93QSDq46lw72fLM5g1vsDvq2lpiiyNprTyj6O0WHxWYh%2BWyPeCVthMInkt%2B7%2FYyAVm5I9r6wxWKHu%2FtbD%2FRiBtA6Dw%2BVA4MgPYDSqfHk8w9JuzzwY%2BVXWieIuo0Uebqy2FKecRNuEU0X3EwfSswJs5kybARrJ&X-Amz-Signature=c362dc03e33644ac86762024ef6eeb531baaec907521ec870b289ce8ed3dcf30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

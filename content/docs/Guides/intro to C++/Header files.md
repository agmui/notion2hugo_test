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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T4A2RZP%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIAt6IPsiz92bxHAqlmO1nLAcE8QUjLZU29AM5JYaulOmAiAk1Gkzul6GWbpU2sHZ9d5e0079K3IimVHU86gjtjMFvyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMjThvwg5X3uqgibuPKtwDPNOpKcuLaGRXA%2BTbzhYn5VCbssLHnqoi932rRePLvMwjfVHc8bLj3EF3XQM99mxtKdFR0k74tQ4%2Ftk%2BVoXaVAlUZAvkrqG%2F%2FjAwVaTiZ4VDvAQO2ZH72FI71WhehP9SGOTMkBEoWhjBnuXoSdnUJgw%2Bs2v27yOe2cburhMzjYrbCkFv4Iuzhr8iJTGW%2Bg94GYO13SeKObuO%2BR6zYfls2%2BZwcbtP33ZBSaShAe9%2FbJbsOlPNwr75xnB8cyN1azclCSDz8jauCgm2ohiTDYkqvJdI7penb5T1sXlwQZURZ0Ub2pkWAITOSTLQydWcmbG95rB8O89sai%2B6phOVjV6Fh%2FD5z%2FOX%2FhtT8EE6%2B8OACg1ELRPV96b51bQ4YzYedLSorRVqCJpUol9Np4RN%2BedxSm6MT%2BnCPgTyjb6%2FqivfxZrwBeLpr2d2NrwAqdgwpVd0FIgLZOPS7MzVtyATgQNgks%2FzHlI7JA0MlpOyyMAWWh2QaIdNgMNA%2BhS4Tq%2Fq248%2Fm3ZFCzKJb8JiRnUBd5KDvFh3rFI81CPkFhVgFBvtgi%2Fu%2B7UI7tR1eI0%2BA3dYSYtE8JwnhZZbbPRv6%2BH1Aaf6c8je4Q8FLni0lkPrqtj282ZjOo350W2QwE7c6LzgwlbqUwQY6pgFH60ToEDiWEPdmCnTWpynOcZuWT%2F9BCyymgQeX3grcDPvlDP3QYxLvCRBnoD%2BSeDA3ZSY9AtHSP%2BU0b9bEGIZ8JqaGInjrGt%2FCUEtbzUjlal5zexJF1JO0439xwAe668FXhH9e87RdWNxRmXcvITnf3BIeAGGsHabOWJfwUhjGTHa3quZsjDcBxY5hLIL4bzfWOW%2BcloRn5%2FJdRp3slH5WS1Y5eO73&X-Amz-Signature=740af0c63036bf3f14d8f03a9be0e38e8f26f51d4b9e0a520af9911a76053e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

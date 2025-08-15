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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGJUPNCH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICswJ7WgTppZnBLqyoJPWuHy%2BcRstkYlL2eEUqUJJd8CAiAep5FiI09DMa0mv6620915%2BXgm5gjW0R59DNEx3Rt74ir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM%2FKOVgSbJb0Z0oA2LKtwDj78jwxqoG3EqYJWi7%2FHZ%2BgmnglB63qR1WQKooLwrOktbrGNwO8vdJqRgiFFGx8AiSGUng2cyxnL0hzfQj1RiKoijTgPhJyMol7F%2BT1F8xe2Sg2x21zTHrNybnTjjXuTxsLtQTu4F2BnBlJRn0ss9sqpPRjMfNQtclyBte5fpUt0yIi3kZYbkua7I9bUbna%2Fu%2Bkng8861EoTzcz7cmOZZBNiakgN7MJ4e%2BFakRF9Yu3waqNRFVy6Yq5PmPBvOQdePe9MuDXjrDXFnqcQNfkGG8EfBlV9KH1ekjXiGV24WPu%2FEDw2DRsGK9JnauotWnvkhORk%2BBt25HCcr37zpUZ2i4x6NvvIe90b4HgCAvuDmR2a5i%2FRC1W1nuPaOhUuev0w2muKSuqTAkEh5AmAJA8Jx6k8WxFXM%2FavmWWfY9HcviP1ytfm4NaZuoOqrF129ePW%2FgUEbbg5WUuuNPi%2BXhayZZRpgpyQLQsQLZ7XnL3r%2BgBPCzoIgOk2vPU4Tsk%2F%2FNBA%2FMwnyCEvuyZddsNTVIRsyNkGBmJ4dQedyIlWBcn866GMEB6gZxC6iVDxy2vDBTpS404oWi9jGBRdIVF1U7CYbbLJXvlqsn8uxTepsY4UnJ3p90DeujiA5OO1G8sEw%2F7b8xAY6pgGb5H3TDxuq3whS5e2GfMHRsko4gWIOG0MNEP4feIigZrIDHJH5bBYn9fqZhcHHKkySSvKM9LDkW45kN1YaRrxq1gA3Jpp4josJA%2Fq9zeh6hU%2FdKWj%2Bs6fjXRLBCp%2FQZaw1XKuc4GfiTNggaqaV70pPAy2k5z2gdlWHV%2B5A4HoGwxed7kAywxwAXSWY3TxtJx8ErbpRlfIml3R2zyrzw2kcFAGjQnh5&X-Amz-Signature=7b247bf8b1051530913681ee57a75012ca246324ab3f7086ccb8ce3c152047ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

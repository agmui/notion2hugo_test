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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXS2ACY%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9Ol6N1Igq%2BdM7px1NP2ddzDhzhpN9zF8HcqmhbMxEdAiBvTC1G2vTCUteQFhFIJ%2FftAMnwxBb%2BADbX3eraWSxvYyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7vGlEt%2BiqdWQm9i5KtwDcRUi%2BPrto92Ur4mWCtrteuLHfNZ3%2B%2BJ1lZx9o3SaktwC0LgIQsK8Ne5JxPSJSy1xZfzl3Vhj2gS0SGRwMg6DU56borz4aAqlybzOFmmdwS9qhq2Ju3I5164VxJ7Jkx%2FA%2FfhoX5%2FSwBaFYb86r3%2BdU%2BOEOz2eqbCyFqqnh9f%2FFUSJmUnbkzWoqnmGEjGz%2BK%2BlMus%2FUpSBqFBcTJ%2FgJzZ6yh2HkGo66harZnBR81L8fB6dYvbML%2Bvhy4KoVNUxj2sAyESIY3ogQKgtfmDq6MOeggsH4jG8ZSqTQ9%2BGW%2FEPwDR5W5USDyHqHaODdxHhoLA8%2B%2B4sn%2BdG1gU7U5ECgE5ul4%2FZ4utNHjbeveMpszRqTIZcfwuLWp%2BHRK1IHri2Fxc86QBM0ZuB2Qfx2LH7IyhJU3xwBiXcd8Yx3vs6%2BPg%2FqqtomkiUqyxDt2qNL8iTQgHYWfDL4Rxr0k2mNOBbEqgyLFC%2Fa%2BfVspw853Ikk9V3VF09JyFSQEh2%2Fn4oGV5yaQ3exn%2FR150Xp6xmJcB4ArEvfhigLqtfVcYoBkbdUKk7cSVAtqCC%2BDI6e%2F2KhTvj4bSpI7SU2uX6K%2FoNjoz9QVEoiW37ex9chUtTGyCmg5QkSxrWc3tlFNOwXp4byQEw1N%2BFvwY6pgFlzEuCMcIsnLMfM0DLna0dVBDOP6Q8cqQTKcB78tOKN5O3WR%2BFiZ6Id1J%2Fz6ouG3ykWk89yLK34nqC7BdvqwtEfm7%2FLHhNQ8q3nXU4RCpyVqZF6qGNqDDTHdE15TaDaCuSURWHy%2B7wu85KCi%2BxQLS9xLGxcv6nSIz%2Fu7ScvKZ2ewG67qx95MC0Jm%2BPMgtZke%2Fva50CJWUA06gxufTa8f2xPZtw%2FUpD&X-Amz-Signature=9000558090a4525f3dab04308d55c0488ec88a46b34a8b97d930c6a03dca1b9d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

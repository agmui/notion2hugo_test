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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB527AII%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKVtWjJC%2FZYvXEvSxDG1%2B%2FdNYrjw82v0B9g7NaYE5ZPAiA9dNLlfiCzsAXTXMCDvhkV17T%2FD7YSD2%2Bz7B6KZNZBkSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMwWnANNsMX8tFsBhUKtwDAP2FRYcHXjQUy54v9tGYRSb%2Bsn2mVyB%2F9x7SX%2FAaptQAlrMbmkVtfMwaIpq%2Fb62DeBX6ZKVnfgqe2sgEIXxSmMzsFsNN4saQYBzDpSbHAfdS5zwGpkT%2Bd%2Fjm9gbkxTyw9%2Fr%2FgMSPWwIkxD4l1TttTqOo6I7Gk6lRCF2L5aHm99B9l04HjXaQFTViOuShCvofCFKJjft%2FF0h5lU1tigaGwi1DuJA%2FKWeSrjwbFblhgdMqya6UX66EoXHTzPggrPkvP8erQOrrhJa1Uc0W3zak3AwBrcgOF6BetZK5%2FiYbiz6wIJL8DBZFrjqANVkZv9m4K3Sndnb3tEuPbUVEpxsFsUz9XwLdzdNugV6pNQoebZCLa9xcdGVm05b%2BF0zcEsRXXhfR0SkYBTtDw65pHP0Pqtfmbpxk7Rf2F0tkDnqQQDZ7xVZ5D%2BVBzIvbsCwLVrIQrbZtWDkDw%2ByiWpEgDaeTBiSDHFPK1jW9lWV%2BeHXXPJ5zaf3lGsToaGqOvVkKI6IyZWNo8CIU3VW5U1Mkf8i5AWOo4v5xCbBpkh%2FSg9bOMrBc%2FAfVhMC0%2BDsHEWVfPTc%2BYF6TL0ARjjdkdtRbZydaYLy%2BsbWueH7TviuKhLr3jnDKJbzPC6BTnJ96x5AwmdL2vwY6pgEvHgf6RnAIRThfVsf39bpUlPvkcHYh5%2BhJrHPGEMQfzpPSq2UFNHkcIkd3vkMrCYex1%2FSa4UzO1SDffWFqeCthiaGSxnWJaTS2VbAkHUzYk7AF3qzaDz1OqpXyRD8cvpHEMzHlUqe8zML1sy95rkOgQkUm%2B%2Fx0Jo86w3d4%2BenGm4aWMv%2BzXM8nchOlG066TwtxuCxRtVjdMTUoCLIVWm6vlilDnLIX&X-Amz-Signature=5f743cbbc5f87fc9c676c5ba76e914793eb9433017c8d7a8f7d6d3a461e4bd64&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

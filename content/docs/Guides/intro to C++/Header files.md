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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI3DF34Q%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIB%2Fqhpx36YwzS5494rLhtcDePA94s97XrrRbR7D07CiMAiEAjcEhwIut1NYu6UtyOLhcNGiRsR%2BySZu%2FF1PaYCbkVlsqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEIYrQIkU9pWidylyrcA%2BlXKUWi2Nn6zan2x8uF0wQIjJf6gLvoDveq%2BcSfGuxKlyq5Zjr4VmMY6DfgKdtXF6juggBnB%2BK13qNJGdz3YSoM4M9olwc3%2BFN8HD17Mu1pdH2I9h8IC0iYTOiEFjKrkpQNNAPEXI8kmDWlpjdDlUv00o4iqjtGvGum4dO1wUdw%2FqtqjcFBnpyVWvCU7Ju%2Fq39o3NixQ6IWFtfPLrn6cdDkXYeSYfR6xd6%2BdF5E2XR76o9NHhBZWoyN96fSx3AKgrtKUZF3A%2Fo3qzt3NC36FXu2q4G39czsHhAModNaA%2FVSeVnHaeJtPnFdFtwQ4aGWqByjAdSaaFCF9hrdQH9oaUPp8CDwb%2FsLU95lZ5Kw8IUJWy7CeTOxKUPYjc7u%2BxFfHCQpxoBKy%2FaMDQAsSDc1TvWo8krOxnWiRoKx7oR%2BiLKjmCkH6YkC3%2F95FvsK2wwrwWBSiJW%2BualfFwOLx%2BBAIUV2XXmdVi3Ks4AyDJjB7dlunzStOLzR4dxUufQaNJCAn4napUFlRboIfMAxjRN39wGbubW9guBHcql0lhbp%2BghKV2sTyNWEUOn52%2FqByrFRV2FLiq0Q8oLSY1SobG%2Faao%2BYgq55dyfdQiTyAsA4ciVMEf587Trf5ZZshRLRMI2a8cEGOqUB0DzMbv4DyhaUGrQi7yFtofX%2BD0lhYop3FsMpIvtNW0Uzr4skC36Hxi7nfhbY7ircfYaNpfVWey2%2BYPZ581A4XLYBMyU26t1KIkO18iekM5%2BQUV1L%2FpeGLCkmObKv2C9l80EdHJ1u2Kk3YGSDWMJuSJpOR1s6LSwfPOxksoh4sfULT1vyL%2FOPmxD0x6gKO2QVU5N10OrrGfYen4Q0xlaa2qsc%2F3e0&X-Amz-Signature=2e44b73bced50a16d37219caa8b838fe80a7c078802c8c3f09d5dfcd30559523&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QI4AHJO%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICA2WwPlZZy1vklAKEYrwuOoegpM02sRHQybTlRVR%2FErAiEA4zTO%2FcVcjjXrufl%2Fp9Req0rqlKNlrR5JVjJFYzk3AwQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvoIQUCuY2qGb1CeCrcAxybcXhCGGXqVpP5BCBvCtyxHk3BG0qmGLXQTaJmFjTqcG2dyeWIMNZdQbE2gOGZyTC7J0Vk1l6CrH2eh6AKP0kQM5IwrknqUgGDw6X6ndkkTw9qOszq5zx%2FCOzosmAQfOBXm7BJGVBzQoBnQhRJKukG%2BgetzM081XL%2F6AhyPWXd%2FMWqdB0xWIvdxMavlEemVR936Qnv%2FaPzoX38fqPdvNpct66xg5NNiCD5pj3SLM1ovPp4%2FndMy8sk7%2BBo4i9ILPkkZHT0ucMCDIvANF8Cn4x00amejv1%2B5aIJUStCHFdwuu31LE6yOLus1GwSceqpechUBxkhWeKZJgFOLmEH2ReEj%2F9vKkQ0v49MfCo3gSzwFOxJkeVzlnP17pET%2BN8zDO1gXI%2F%2FYCVrXKydoYI%2B04WfGmF6WMOtmDZ58cF0Dd5Je%2FVKqw%2FwM%2FoW5NrRirL0sw4aIWd%2F8GkaHRRbqb%2FXjz5IFXvl97DPdhji4R9%2FRORrAzqGCQk87dJ7gx%2BTF0aNc1Eb2dy1L0oeA%2Fc3tudbQuG0Mjfy7iahFRemRco6CP9OQ3awCOPPeuBKHQbZl%2Fb3vQC1t%2BLLkO1h4axP%2F6ZEqZYd2LAe5aFmUVVa8XwFDgId02F085c0MVx7D%2BTFMJWY7rwGOqUBdKnKk9mp767RkS8NcFfRiwoxAkOhMRBobB2l5uN8yEXwvqlhpl4foht%2BAo4LSSx5FsVdou6GThzEwouAZjyCrl5zR99WFDNiMK%2B37jJvVFBdGIuOqcRnQjpcKk9LkAaHqVHzT3UFomQOzv9Hw8Q%2FYPRs4FoewtTA9nCxth9U5NxHj%2FxijUgDq3h5ufvDatSh4ovVLxZvXIF%2BvqtuTqMjm8WIz3%2BV&X-Amz-Signature=2f18558cc72d1093a4df98836f4296598e8fb2f917fa701dbaf19a711e9c5560&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

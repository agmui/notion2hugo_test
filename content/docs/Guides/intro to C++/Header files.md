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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRWOMOY6%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFBLQg5aAk3z%2FupboyipD%2BVH8Gr%2FF3VtupaAoiiMRXcwIgOMntHx3cy4NBABSaozHdpXiPTVZ5gs%2BvzrOCoDuDOV8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnSUieGa56yPqzeJyrcA6D3565c%2FBt0iD%2FezIYy2pS41oCj4cL4GQNbtloyb26kyfFpZgFl26lAFDF5Wy0NcdTzMqv46HzQnolmLqbsi2BenkgWygx489W8gTbFlq2HbpF4cD6tMhfuXNmIAh0CzJHiJ4LWzSCE1Sd5v1%2FZSjKMMCfoxtS1ftjy1o37ywo1Pcz51HK3ayqeGhxr2099%2FNpulLlQqYefJaZkr%2BGxEkdZP2VzrZyYqGG%2FeRuKSq1ca2vVVqgMe5ST7JZA4S7BMjbasnB41mS16D2EeXtR3TW48anlhZa%2Fm4U%2BKtunab6GWzEtKBqb7MIFTht%2F1bOki1dzibOaqSzfEyPRbKkyDZD0uUrJZMF6mHgE59WB8WflcDRJ4JE0cDnGy5DCODqzY5maAL1LXT2%2F7Sf7Js%2B26p%2FRbaGoyEGL4B9zh7pfpGfZLQIMMs1m32%2BBUtpHH4H3zCAdqHsDZvZDsRuRd47ag1vS7Qu3RNUhDj4lyZbx1Z%2F7FS%2FURg57On5qyYtSGgUlEV4U8bEJcOGRhFzT5ENtkmnSQik937e72yCDAstxMbn6ZOuuagnLghqODXH3CvpL7eSF8PJ5PirQpUuPlJW765WRHTSEtBbIzitnZ8ovNPIES4HEzZEXt888HMaYMLet98AGOqUB5YUb3U%2FamN7n1i0mSFDr5SEVsbOPfA5W5lBSlOzEcLPm58uq%2BXG3sY%2FCuIBCFQ5hXdTuMkYkw8TFe7qzMR9HWt8olVGlHTQx6VtWXDXBfS4773CO4iHXkFd1IqBZMOsE%2FrIdxqnobIujJ874mwKQznvWFMcWYkGRLeR0H48qB6Ir8lTv2HbCm7v3saGVQaq7LZmTcSH5HiWTrgsyooFBLVLURlI%2B&X-Amz-Signature=fab6bece89e401312ce20bf3b48dfcca094556589eec02fade17a4be6df0ac84&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

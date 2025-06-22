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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMAYJOFO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqbsPfheTfzP2VQXvdg5KHlVJ%2FuTP25HmjdkL72ZVzHAiAsdLElKTTpQP9J24OHgpYSvE8nTvA8Pynf%2FmW0sWZbRyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOhxdr75s2BxrW2lTKtwDIJwEO6dmGyiSpjXjizmqqQHDQbR1zZJEMykSPrAsDvUCm9k75Eet2uVvqfCbt3LzPlC7O38mAnrVZG8ME5E2nMkcgkLFVtfDgbE1xI0m%2FG4UVfDocyFPr17cJklNyHf1KOj6Blvu7QgKzp8Sd8OrQk2YKpjkuZfIu3E8Cg50VKowh2qU4uZ%2Fhf5RjC9f6gdIdgX2gyiA94cs4azVaKOpuP2X4LB811Us2pPR6FMly6872UyuwiV3ayPqX%2Fu06YN1TdHLw2LlY%2B5TpaAUvMpiT%2FrQupQ8GcPtg81cABsQAI4girq6ZjolWJq81V%2FbQG7%2FiKbHTCCy%2FyKTm3nMxqt5kBXRfmiRaqZnZfgpsFAtjr3AY8XpLyDYIVjaO2unzMFSJFAQ59NGZyyrPV%2BQp44e%2F9kRkRrUV%2BShnqqW%2B1gQedUJYkG5sQamTL%2BTPwqHn%2BmUg%2FUvW5tFfuwhRSfQwlJJcOx7hRkG%2FxjwPboW579MnaktHufS8lAzTolLk8%2BWxUSOKwnFsmOH5iZ0klnsv7mB09YPZbz9Vw%2BH3%2BgfeFHq9W960OrMCTmuEa6JjyhYf2phTrsp11x1klp7wbd727vCZ2Ueub4Pdpo9UCCBMJk9yKGkVlE1e820NIrPEyEwm4jdwgY6pgH3n4Q6eS%2FCysWDYIirCeN0ztgf3D82DZcHxtu27tSmp9zPHuyuXLiKri9w94HrAqlEM%2FmuiIWFUuPhTxzaRMcOtfZSoFpHZC2WjBGOSqeGwzr4J52ahl1A4dAmrFEQa5KsXKIHApKC6JcMK0ZKGbSpVVw%2BIkNV%2BEagtZTZNBC6iISReOcsfuy0EFTNTo3bPYi4T%2F7RtueonW4Lgd4JwdOdM8g2N7fc&X-Amz-Signature=674c013de40c77b646dbe51bb47d05cd36aa4211e8d2e66cb1de07a972afd500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

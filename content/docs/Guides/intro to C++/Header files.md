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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWX6ZACT%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCdKVcgDSFFjWbnEAVpGAtf39sd2hCUHiM4ivrxl%2BfmgAIhAO6MjRawlowtIrdbuvk09fFceqTJ1PTMHQZPtbxzdUfdKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYP80fVimHSEp3BMQq3AO%2Fe%2F%2FokOfarcS%2Fn%2FKyBvc%2ByFMvmUSJ%2FLZBYmb7Zeud4IvTV7hKtgKXWZzc69C75OTWA3MrbIGtB2hQiUSijZESh6Or4xvPuad96cPOtIvT3yIHevNRUpFzRETXdrzMWO9hhR6BOrD3bSYr2hMeGO0gPHdEwfP%2FZrVaJbLybTWAbkDrSkFu97NElrUkvAhlBbYXm1hs%2Bi6Uh1geVgCtUw%2FEvYG8IibckJmmzWy2dscoUJ9im4GKGqgUNfOwMryxj%2BBnHSXHYr1n2USygGVxHoHPFW9pO%2BVRcbNev2w%2BxkORuVu7LuNtg7P%2FOs061lC9b4%2BnVmQiDEEQfTvflWKetgM1c78rTfbzP5kv7xlForYoPjLeGGXZAm9NC0yAdo8pu9FCOYxWyAPhIeyw3oPIeJZkLkSJBdyH%2FPvmrv4lGJqv%2B5NI%2BAjZzrY8lNoAObVPhng5wlmSV3XaRo5HPv9UJgHmq320TrJARcrDTXOhAPx46Zo4qbrIOYV1N4kwlZJJb63q%2FpKVenbZXG0mIJSjJdqYkbxRkMoLiZteVNYKy%2Fw%2B6sAfEfSc1munwRtLPUG2esCAx3G%2Fnt9%2BNg6fdweAXzkkBE9EGgnf0Y9cpL7putitHZ%2Bkhd7vg6XZUIIEBzC9opzABjqkAW4fw84Rv8ympGBEMFUd%2FyIJUxR3awOYWCkPTVghRAsiriCE%2FtQ5cs77C9L5uojmgQNvQVihTnVCQSWWfBhMxRoJrbj0EkpDQpePZBDo4%2FPBuld6%2FcNmy4CFwk2t76LM45kyIobZXhZK5t8SJAg6exF%2FyiH97diqJcflUp6vqpDMJ02GMWiNj1bwYKQDOCFn5zP5%2FVN8SWX%2BO7mQ4CZ8QQis%2Fx21&X-Amz-Signature=c067d26ac6de839c9481bcb11e37b7124764f1fa9c02a7f4098d7df9ae977ce4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

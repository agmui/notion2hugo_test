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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJT4VRTR%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf%2BOqkYECSaPtg9WYgpkRwGh2Oa3LB1x5BYU0XKhbmEQIgLHVV3zias6LG%2BIeLViBmHwb9DV954Gz%2FAVLtifh%2Bsc8qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtpRtPOhCswnpQ5%2FircA9ZWRCWB4Wafv2sSIVSCQno0Gcy13c%2BTzdToh9pvUAxYZEmklXvpt1Nvlf1HkFJOlez1sh9vJJ%2F6drYn8i4RYNRPeNnd4AfSuIkfpwhA2BB9l2QuOS01BeWNfDqNvKKUZK1goTC%2F49%2FNZOXZhVVklLXtzkOSU3w3hH5DXTP%2FAksU9rSC9h9fZo8XDtHjOBOU89Db6LMdsd9bVlE5wE3%2FAncSdRzKinRjeeIgaJa70id3LzinYJy8mIesreeJHtDuqFNrxXtPYlkJyI9CAEPcecgX5OeCWXW78JsEsmyeW8SBsPJt57N1pjoWvvhhjlkFg%2FkBW%2BSXMfIWDGHw%2FmjcAkX50W6fYDKq88qrqQfuu0SAl4rd3CGPFh8IeLCOcfI2%2F229A7zBuojcJ6vFBmzspInqyB4ZxwqZH%2FJRqSGhrKoN3%2FKIgdmc6c7OGI8%2FA%2BO3DYs3PzCwv7pL2lQ9yq%2BcnR0viT%2BmLkNerZvfC2wN8UqRId49sDC3kRG5wgS47MZQFu4GrRxz4jOJSezA55PUDwDvsqbMsmJbzMYeN3CFLDcXXDwCAZWRAZ238dH%2FyBkcWFW%2FrKdgtlVhduVGe5SoIExRNGzvT1aTAhYcYSvLTgrSeiZJjJi0dMYF4B0aMPjU58EGOqUBVDd4Zl%2BRjMrJDVNJT3COlLDFO1rhAfi5dR%2FgWj8tSZzp5U4PSdf8SITPUz2JvGlZT8fxLMkh8NNk67wo%2F%2BdBPQVJuhWJNWZNvthOxJfANoSgopu%2BqQlZPsdEFze%2FhFmFxXqvAmKfJakno8LHom9Crkk6tcC9Jez9u7TF4jMg1ZQQzN2eArc6yHTfR4Es0HHW41HTEqzcQoZKFRDKCQmD%2FVzNn3UP&X-Amz-Signature=fe5513a53d68625f3707167bc7393a25eca30b5d26499f125adeaad6db1b8935&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

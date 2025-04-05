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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AUUJ2ZY%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHalM9Fz819APx%2FfgA%2FwwRE7sncZN%2FPDXVQZ16yDSov7AiEA14ukmTT3TIxsbyXMARDz99fZQa7AiQBQdJeOlDMc5ZAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJlpixQ%2BZ%2Fk%2BnALueSrcA8x2eVrCiXWus5ljvJBpLT0CCacH3TTZp1BsVKeEW12tq7CULn3CaozhYW%2FG5DZ5IoTfg1YtHP73oZotNRCmazuEm1LBmidxPQr%2BwzOv5MP68EKdggaS1QqSq4aIHQWBHGzLrMhk2d5%2FLfD7CgAQi9G6XFb8JXERLRI9xf8WoI%2Fo2w2iW%2FXv1dDbfUJb13OL7wDH55p2UiqAFIJTSMZKnaofRglXZE%2BLmzBvXrOjfoNq%2BwcL%2B25GHr4CnN1VqnO5gACAT5454tZdPFc8y1ZVD%2B5KWB78F3GKvhAllS7T80Q9z4k9qiui5HdC4fMdn29v4ZnX%2BrTmE21tcFKCsS4LnV%2FFCaWcSp5ycYwypmhw2A8bG%2F5rs%2BVdJrmtN%2F1uQvzaVEFmyk%2FEYPRxWjzdkvmACmT2KhQtdN%2BIo12J0Mb%2Fv1ZIWvsZGFzWOvDdiZVl4Mzwj6EHIe00JeMzr87pOA%2BLm1JENWBTQBjsBIqDpRPHAjM7o2LMkNSwrkkVs1oYFtOskxMPbwuMqXQ5AJ9DiWERxhzUEsw9rmVYWBjofyrm7osjmkkldV8auEYnMFH7rAnBB%2BXOvdKv9%2BTfF1GscXIaa9tqLpMr2JhBvvzZtakk5%2FXmAkZmF6baHrGlVzAdMLuxxL8GOqUBRQH8vmy2Dwe1RLlq3iEWHuv1sCAzbUDFrXaYdSbewkGv3BsX4rAIFUTE6G0XjS9vN%2FmIXP0wYow9Pxy0OLgGgAR94vhcHGMLe6%2Fg36wLqmQYi0dC3Z0L1105fCCvNAGKztVXfsR4IbiJbB9urR6E24DD1TiLD5iN%2Fp%2FFf4gk2UxWEUaqF9HFUVtoE4HpyVu58sxnoy3UiVbzfPgkb5aDtSi0iCkc&X-Amz-Signature=6913ad7ec544ac09799c8e11e465269ef5426e69057d0f855c4f7cb0d326c6fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WGGW3C6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBlJS0jiJVzPikLxS1XTISVn2AMIH6vwJd5hji1hK0bwIgXTEWrTxs3bF07P%2F1rsDPUAAZuK49wk%2FjSRPoRLQ1RXsq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDF94kBtbJjoLeOUsCCrcAwCDSQiBT2NnGIVzPaBfpEnPoDEwq0ht8yoo7zinmesaKkqEcdUaTPwJUwHGvfSw81krq54qNn9F1OvW8trQThtArNTNtxyrcTS1RoYtcgzeRRda1pLxM9kW9AcmOloEl0RDRri%2BrZzzWLCpGjKCWeFxrAJ71bTzX6KhUduJkeLr6%2Fn3rF0EsRKFH38B1rXbMa%2FWpZ2KRx0RXuk%2B6MR0P%2Fq%2BhRvo6bcmSCKuK9sbQoIiLomGlVozTdZ99xswE1LjV3S2d1DOhXDzmtFB5fzBNI2L9RDooj39DosvHMdWAioB%2FeUjxCFmYoPzmHc2yAM1a3qmZ4v2OJ1LN2DlI%2FTR%2Fho3gmx%2FhpqprGXe0UQDgV9s6JFch20eezXzlF1zQ%2FGyqfLO2sfL1cRwF9slJaJVLePBaumzX7TmyJS5v8Yc4AlMDRnlrTcvMbi7RG0mvHFpO9EalegcBRPJcbeS2ei%2BdWjwpTRs8QAI8rsbjUQcaiVxP3JX0ywf5AVZ51M1pgolGk8tO8w61iLSuhdzt498wf3khyZX2UvOp8yv91X3mld4%2F%2FwpWbMdi1sds7dZuT8OzJ4RAUSEdZjaQtwAMDoZR3Ec%2BJIUlFGMfVZVHZOkoFRYspoeEBnYGa4prQsXMNzLjb8GOqUBzCoI4nkH7G%2Be%2FzdlFEUHvzww9lla8ByzLOA3lQ65A9LGyFG72jmdQoGp4UUMLCRlosD3%2F3iPevhfD9QUCLeBLLN4C%2FwVHhj6Di%2FtVJTI%2FTMARFid87dKg263c12rhonZfn%2F7yLME3Y0SINPpVxV5GkcfFBdYN8%2BP6NzQc553n08Zmqn8UqTlbJAiHZNqVil8olptQTLqoysWunIaUovkrh3pxD%2Bt&X-Amz-Signature=b7fbb3fd676b80f3819da57dad9d9c28e5cc2a431a76aec57778b72389c2f982&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

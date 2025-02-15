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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CW5ZKNS%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCDZTt1gTlJNppjkOds%2Fr0GBUXjlpjM%2B%2FpxDh6w81o7sQIgSyVlG07uW7dNYDkm2AgBGdU7eIqRE8gy3dlLdVKDhRMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNI%2F3JAqfbIA7SNhvyrcA8TtH%2ByxDVI%2FnEBDd%2FnHiKD9bvVQdH%2BSnaoAW3HBF6r%2Fm2JqOPpV7TTXGWo7AuXRLHVWrFl1ru799Su8l38hBPMzNxMixNN0M7FMsZuSQVdfm24v3PsdydcaVvF7fgH9yho0txgz3RcjPlXsr91GlYYfD88X4nrbWDOKJsMDFOc2kjeSZgP2J%2FfA5Zvx1kMwnlWcS3jNoZ%2Fb3qe27oI2wEJvmb0cHCL%2Fbkuyl1Tc6z8JrKsrrFwaNg3w%2FdLlxOUsW%2Bkc8fh8oyDR2CeaxQ0hnEGSvucYPS7wRw%2FR5Wy1secifTMQu993PtypihSqbpBlAGQVroZyg7jVGjXaGhskjn1wIM4A3HBeZOWAIwrbFHB3X%2FsbJoIg8gdssUPVPwwm%2FSOSAnz4rc4jPPQ36u3GlnWij3DeROHddmTTvZDeEVP%2BcQ8cRYt4yNL%2BFjlrsWOhHqLG%2Bs%2F%2FM%2FXpVn09p1gSmOombvRCsE5DQdeNDh7wD23eLe3D337DS5AY24kd8hMpO7X87Kki49deDlNvQ8l1gLtp9u14OVSmDvL1hiCah1IizF3OBDHBZwBCTi5qB8m2y7LGVLP8LHM9R8lA5eVw6sjLsf0B%2FTVQ1rbRwRhZOxK8OA%2BEgFy%2FRaNe0PC2MIa0v70GOqUBEckJoPT1q0en5za3HFA9TWuKF6SSocuODDby13mZD9aWC47AtZw5yVjMCGmelQSD%2FGoi9XfVYrVdgddq4%2BsGV2J7IcS05kO%2Bu%2B%2F%2Bo66aVxEQB%2Ftsv%2BjrRj4HjZIovZ4lhOT4Ct24PtTHgf0hlL0LoHr68m2NGK0B9qK%2BNoZpX9u0iARho%2B5tGBiM%2FIT3GfGKfUEYEjASU%2FOkuNfvcubRqSHkPmBp&X-Amz-Signature=3697219b21ce97c4deb59dc8064155cb9da649d6cea34d3d30c80fb115dc28cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRGIG3RP%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCL9E%2BT6EyZyFNUr%2FJeX6LBwYFZ80j%2Bz5i0lDam4iqt1QIhAO%2FhcsD4SZAyod%2FkH4qS6ouj9SVo%2FgVZMcRMUbmIspzmKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwL4upl0%2B1lrTwmMqYq3AMg%2Bcok8dhCkM8ZNHyyV3XAGOQJQ7kO5pNs9yMTBka4I%2FEVOiSsNFC5oEx2zDat0Ehe02kSI%2BFeRdxuVVqHaPjBZ5ZhyYc5G1KFxc5kGqXVjDJLUkbOWylONb%2BnFLI0uFBNtedYCqDxUUUzZqCIqLT5RA2nyWmpLrNzDksIPPe5BQXEzHm5DnMpgDVtXaFBLgXq%2Fc5GDI4XlotMkS5p%2FPitLfVzfWHOYlNULWkLFHbfev3UqADZ0Hvw0X5Ed5dU84Tv050NNm6BUZawnI8CaXOrdPhR4faAAVbaT%2FbECNfdZAIABAfbKyo9tb%2Bknu8TWvp1ehOux5TquynPXUWj%2Bb0Jr%2BesjRWi%2BdB2VRDoYySgeshHNpzwpycNEp8TWl1BOxij6MqJnmEFHomJ4%2B4NBP9rELF6xIO%2FzPCHl5btMyDq2lIB6R%2FXrUNWQO35iEtP%2BrVc%2BVmTSneCLu9OoIYEV%2FIkazLflZelg46SOQ00Bk4jE8QLIaPwTkO7m1xduz6sZ7wufAP7keFcnUwXo5%2BKSSvIihjEM0sR1KNTTUvNBgRdrD2lHWiL4wPMmb5TNOIv6LcBRG9tX7kkV6YSG2OSJT8c7pgoohFzNb%2BRmPpVij9OoA3TMppIN4%2BCHFNJKjCR9M7ABjqkAUvR9KPt5SrTWWh8%2BvbEFcrs5y36BL3S4TCQP7xqOhFxDqAaIzJeEf1Bz3E7K7gkCzqRQW%2FgBRrooE9PuQbkkQWkvmCI%2B%2Fch5vW0b6d7Fmw83Kep7b8MU4YmLAu1X2ZuH%2FCAbqif%2FLqbBH%2FEDwBDb5Lg%2FXbtnC4nLhWtYDTlR7J7nT9MI%2B9EAJ7PlkBllWGaq1c4thcmyU75I%2Bd%2FgH5NS9eap9dP&X-Amz-Signature=f0db69adbd7bbcde0a301b1f437eb3a8491510ec651772a24a0fb3fe3ac00e80&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWMMFJX%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIAtFO3yU8A1VLCViichD%2BvXVYzq%2BWmagCRi%2FWK0Uh%2BiVAiEAzFhI02aDKd2l%2BfEpuQfzvWSC1QZziqzx61dTHXh4BYEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYov0OM0thIppXK1yrcA7jPPOPVYHEt2LwPiSipERX97RLSQsQVXn4D5XGw8U3NXbjVvZ1k2ZGP%2FbqhAHyVvKQ1uN5VEFxJNfuxUzb6V1HNG%2BCGOm6MGEqzhXEANRKvQ2cQ1fiw468rceIUq7%2BA5NntjZuehj068f1oWrXC5RpCjyJq%2FGUTDY9gc7A1ZwKxQglHT8AivtH2ekytw6LupvbNVBqQlyLL4fA5C25aVGIOiqs4p2dOOQ59gg%2BtQXA2cl6%2BhR0XR6jPV7ROafqFv3juCNmfUIN4vYavhKqERfefJExe91%2FwXjm6QQj0cmI5cqTXvVQd04KIEyAsBRJ1NYuwPPNjw%2FKNwDjssnHD0K497zQP3q2ktrFz8vQ3EWFHNQfQieDrb2n7T8oeYAbzqManDfAYWW27FuDfLFwgVVSam9A354JfLz%2B5YdEZ%2F2R8AemhWZ8jGtNbBcuc%2BesRwemgrU9KQ3LWUAH01D80Ty3VF2Qlc90Pt1NB5CzfwF6kopdZcT8%2Ffzm2Vsz%2B4E4hBHD%2BRsH781X1BZ9Kj6c38biRH%2Ft23KQGy3e9wDyCWubtUl%2FzZaHq%2FdHNohQP7%2FqFsAr9NQlUsJbhkWk2RY4DQsRNoK4nIwzBVCTkF8XhhevtBDn7vu03ojw%2BbwrRMNCg18AGOqUBuMTeNorgdB4t0WmP8U088SEpvfaNmpeUPxjU1LXfwieKsqd6cB%2BCgau1JIzJWmPtvBhumzEaPRP40iDWIDfQH7qbKNl94eLaPCSJLmJw8LODGoXQZYMP93tqS%2F1L14sxQV7GFMvObZmgcto32TZxHvxFmjNEZALkv7wA1XkTveL4aW6G7li87wy%2Fd6tS%2BmmxO3vMLmn5vLEG8YIdHor%2F3QHKl%2FpZ&X-Amz-Signature=2f102335507fb412941bf2cc2991817326cb6a75ef612788bdf4a22c96e3c137&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

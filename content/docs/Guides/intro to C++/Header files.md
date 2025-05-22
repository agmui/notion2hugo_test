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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQS6ZBVD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCFsL2VNXzpI%2Fe5HvLjOyPjJMl9Gclj1JECuAVmRxf1pwIgC0Kxjn2Iit0QXm3psUyg8vyZWjZFo1ff%2FuvIczrcCdcqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1G9%2BHnwPwWB0zRICrcA0WVgYlHA3eF1drLCK6HVdgyDntVCWrhUdW383EJ5SslVsgW0gXkHCY3nZUKE5Adv1KTohxhOvQ4BpRIXz24ZBwyOhzdC2vRQ6zuRgmqb%2FPZA40sLEgs%2BDkHYuzBU0TGhIOprzpqwqVxz3hg5cDWBKy6d6YDUxJH74EUfLEarMDGtlZp0uW%2BowTQQp0k35Tyev7NUuzL8aNUzHo4IVYYggWXwVGd%2F2xT4yclJVeK5aVC0ZKQabIRXbnRa9wKMFwxJFfyhA%2BLY1wEhMBuAALueIlZsBPuNxwKkiia%2FZyWdm1rAzMzDQvIfUk9qbOPkz95Y5RdlHWfyEpTqP1qRc4AiEF14Uqftar4rZS5Z0Yu%2BopG1bw73uCOyNLZ7MQhED6tQV%2F%2FlGPvpNnSM36NBWHBNPm2dYzgjMuE8rHT%2F7%2FGuWJfvQ1S%2Bfl7OmZtVLXSDNo1YVMPA6KIzJDCDBbqY9RQWrB6%2BdB6%2F9fePqhtxaztDNwXSMa%2BjcbzkfYEsMFvwcRg9Mu1OIklzWD3RcvF0gFSj2m0dwFJx4VKksEliYvfe8aMv79ZCl849cH601KFafs2vzMZ7BFG1srL3gTfiO8CUFpGfyNhEOX97mf%2FcQNb04Q0UsgiLsYZOndkEsUYMLPFvMEGOqUBqghSEYY%2B29zhvguxN4dXaRBUg7oquys1MBTj6nvVThBs76KiJXF5hzcdoMIIVVQCYBiXvApaIzyg0T5JMjgFU4P%2FWSAFG5lHO6xwQTHPI5dwvz1sQ7cxaX0UBAifmvwxhJiqrUZ%2Fu7l5k1e9ahImzVZwhtPEpuUDcITSwhkSwYm5mBArc1EVDvw0TPaf0ADQBrYPYWy2bFBtuq9bcq6LbxDpQ0qn&X-Amz-Signature=dad4c0c056c8322ef9fd958738970b652686eed1fb15de43535f6d61e11fe34d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

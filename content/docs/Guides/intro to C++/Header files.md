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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WNMC3HC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1nJpOR5QNqBx40AkE8%2BZTSTwP0D%2BbIEHQjumRXrGOhQIgEMwuXtC4AHQtL9fbsBARiKz9%2FfCtDaLZQp0dTzbpOKwqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUxzZkL4QBGfxDBayrcA7ELrfhVOe223WdizrShK32mFzAnNZd9pRC41xlwePMvO4oJPvPA25LVWlAzXwf6WTRMJH%2F%2FN8GIU6BXEu3mY2%2BcmUiqMbh%2Fn68w5ivmcvtyXF2i2l10NMusQutVSsvNZhVczDDbz2Oe6J%2FEtl%2FD4gGBy4dY4FhMs4jWuoJzE9HF3AvyzPhETEWleVXVMkKGOiUrhDpQeO2LG40xvbM6SoCqvXV7OothKEfQYxWRYK01GhofH4l7aqXyeQ14f9j0esS6PpD8FeCWIrWZsEVZIzFB3eQ3ODZ0RxDs5ZqyOS5s9fuI1G3QkiDdqu%2FQeE5r8l3NcJxgDKjmGkgqPu6JsVgmpvOKEq8Hc39xWIPru0i8YCpUYGzl0gPI0egUe5AJGeuj0KIZVImITNuQbY7J2lrGGjk%2BdzNp%2B1sdPLtD%2BDdJ1PLnAYz9tfeBge95G%2B%2BJ5T9RBqRs65zWaIiG3mZSEjzC1ByH%2Brq5IS5jCsOmuGQbCzhTBeRSZtNhGBfA%2FCyyfherChlVtS1gEy1aRIQzbXSFEKFgvxegoWy88Bu0BwRsttW%2FUfHMQbELC8niADCx41HXgkIyPlzXSEeG6UxsEpESJJceH6L8Vt7wYFqje%2BuC8RxSk8SXa1FYOT9IMOy8lsMGOqUBatM%2BPsJcDCZXzQLnR0rmy%2BJh3LdKz1bdJ4u4usTL5WjPrqCLXnD0aVsDO0P5XsBQDludf4mLRyRZhMW97mFaEEshdmNxhDk%2F7GUsCOAi06LgzrCQ%2FXfas4RgwSNPzWyFnoCg%2Fy2incddeWUNDoZfChD5oNAvSHHVHbzWorn6CxkjUUIi1N9G3hu%2FBlZv8hARXso8BBvEyvm5KL287HsjdNEjX0CC&X-Amz-Signature=ce023c3ccf7d20d137be35da4860499534844cfba00c61d4728be18da59ebb51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

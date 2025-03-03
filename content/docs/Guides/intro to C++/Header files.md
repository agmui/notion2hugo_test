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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IHOXEOF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkVKvhUuawV8m04gA632pXKfq8feNpH9uNbpCtJAdTtwIhAJYkRHi0mhaXw0aGMKdcyvZclg%2FDcjNKye7VTDyZJATCKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOo0DGiUFxj3uc4REq3APy4ItlVt%2Bug59S2sVgg%2BwvQLgXVLpitJKED1AVrXXQZ2OUYT1urjef39K6DyCPdu%2Fsiw88MiW9tjUz2165%2BiDbBH0qQp0Ovk0bdVFzK%2F8%2FAdLPtfotjcNxSya4WEHNeHpyQWGJPVBc2U2jVVZL1zbuaY5hZAWsgM03rzYpSITA5jj5NGKupg%2Fgm4zoHz3NokroMCC1uIUGk0XUmpwCQ8K%2B2eCQ%2BiGUQlVXJI0i76n32X3VGX8T%2B7%2FoJm%2Fuid9sW%2BsQEgnW2EgFthNfjyvl2cV0VeKPULl0TFG7OMVeDoiRyWVbUdtKbkDWOYxOXpm5GNyeyrLz%2BaoSa1tcWOWzrMNCD7wuMmIBC47qDOyUK7Wt7c%2F1oP8OaYv%2BVJvgb4To32uoi%2F6MrttHyvGRWnP1aaqzaqSlIbHCg%2BF%2Ful3dTyrcxK3q3gyggVPnHsPbRHB7j68WhzuMROl16iiZb5X1pmkyyOBbRzwWskEbTvgCW%2BAnVAh%2FeJM4UnNi2t%2B7I4BCSJKNRBaEo5PLLXcwEwXjeQuast9%2F9u5h1hwevnoX%2B4xHngr%2F6LFygUdfvoikq31dIF9dYOuPdHH0QCHq7z7sjLZtRp6lQ2xwHI0pYmBxDlt4abRqQ7FKgnDDQtJ9MjCEnZe%2BBjqkAc9TO0nMxwpXsCZx7JtL%2FynSOFSFMPiFskOBpFEpFxD0wx4pzVd4f2zzJws%2FFGQEsc8V41nXzVLN%2BtD6BWcN9xd1FY6JxpAH1IxPG0uuX2v2x9sJIeNZuMuA4A9mz5MWjQ1Pb%2BdQIp%2BJlPGT%2BUD6Xl9NUCMx0O%2B37sXtcNGte8oXEy3f2KfOwzFJwxwnAM8AAEcYxA%2BfJdOEvz3Rx7q4PojrN%2BHe&X-Amz-Signature=8c0d001158f7f8ea238cb13c6b79fa4448aed52386c7216ee044e2546d954016&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

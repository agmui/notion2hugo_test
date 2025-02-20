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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFGAER4N%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv2sfcnr2ztjvNBLZfAGGzwtMW6nW5wVgS8IeeBMLRcgIgYObb2a%2B9FNW4N1FH1MwrkI%2FLbGexq%2BLkQZCOI4iqp1gqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FTze7HcvKK3%2FVVwyrcAzX1Yo6Cr1mvqg9GobG2P%2Be0HxWwFH7IVmRggQyONKG7AMp2FIyrr9Sq7AHAJv6Z3s%2BtziUdgnt18Tf53CC5atJLFb3G8spf251n71U4VPwZWWna%2BA2nCGmRsXo9d%2Fv5FENxhs5vi3LdRPswO3zWbjzz%2BnAKaXb99LiC5JGUE8bQYbOHf57FXKWhc8uq30NqU0zGOaH92ASbUMAD2Nvr0sCbHw0WOr4sIdahW79Vr8ulGFuIvB%2F%2FxTT63bmY71GKQQY3YmqZ0U4a6HJCXbxxszpBdGtPXLsY0%2BzVbvChFKB5lLMlu7VzTR4W%2BUbi1YZ8Wba3GzEIzo3Tfn%2FY9fXqxZm8FuJtKtkVUHaUZYTBpIwQlzC4b5X37M5wlOU4QLHmY45v9UmIonQhTeg2Y3LZ3xp7Im2OCihepuBTUk0sL%2FozEOh6uZBdfQ%2BZo0CiAsqSYgk1gGVrlqKPkAE2Zic0UB9z7j50PT6NKcYBTy1RU9m7flb5Wagz2jP5UsXFxX55Xse2G55Des3PKRcqbzYTeYuu1v9I%2FdtjLJfMx0e3CrrHza0SKFDmSedinUAGeOqcOrNhjg3duT6iWqtnk%2FyzBFm9zHhXrjwUNbHjP7U%2B4KA3TwgQ7dsTlEbk9Ic2MNq8270GOqUB7aNtCPx9CQ6RVAOPKPTUmb1dYQcVTqCx5df0NpG%2B3uJc0m2VcKIc6IQyM491z8BXHFA4fsTwjJI7lZLUJilebR4JrmNsvmRTE4ThIV1nhHfQD%2Faxt4SJW6b56CgCD%2B4DvZW4ru1Hm5AjuuOS7HBWwJu9VF6F6%2FfKGrHV4oaiEfNX%2FByHf%2FcDvWbbj6FkA%2BZqkt4K%2FITtFD7G%2FoM2T5cDTD9zvLsO&X-Amz-Signature=361aa8d51f4f9336576b8ae144350e2d41a463c788f2c8624ad0a624dd95f448&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

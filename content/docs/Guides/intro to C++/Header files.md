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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIQGWHKY%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTqk1Z3fjDYfHyJWElYmk9ZnxuZS0uKt9jl6tejOLyfAiAxK099oxvwLFxi8Br7KuPAWL46Ca8ABSMnPmTPDY7oCyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlmsgfHDMB8Qn42itKtwD%2BqqXCwst0C%2Fl7JZNIWpE7r3pYKcT%2BbxRW7FVI0FSqATL763RAHFvvTrkCCNzgme5ZxUDPxPIjcw46hbpnFxeqrZI6A1IHawKaOnQQnC%2BKo6eETLm7C5TBHTkppsy497sOkjvGx0SvgQECd8BN%2F%2FuGIiw4LOFQTNglf6vXyvfKUY%2Fy11vXR0WFHSrpvToObovEnQS%2BgYPzzs5eo7bhppOSUkng4%2BOm5k%2FuCOCsy9BdY560xCphdnaYdS64gTmu1oaHVClS79saDNwpbrel5YZzPusSnpVPb4rJkZmCiCcVyRAz3p%2BbP38bgX8Q3G7mqMShp5nhALtdkanUoHX5%2Bc3gfOxvao8SZucuvcG0USkOr5h3ozhLaLUUjd5GEVRGOoNlspzKpG%2BFVvyUZ5fVBuOTkL9nwuvO5VDjXFFT27Y0vqAI7LmCfjhUnOdDDV5rnCNXdYpcvMMBEgecekGw8lBgxARhN9IUgvqJntqbqLOsNWULGizmk9WxWhtZ9O7kKPFZeZ52FvynKKOYtDCh2s0qahqxGt7%2B2X1gQP%2BApz2u3PxR4gpFXY3IppoZ1jXgRhuazm38nICQ3%2BFnsaawXgnD37jvifEwdD4QG8u0wzc82lZYiQzlOXBAcLltiAwjv3nwQY6pgECaDnD6SM5exEGDui4%2Fk2bQzWrUkgJLzNXKOikgck0fhXj%2FbQjeRPIo55l9klxN62ow7jqp11gahAQo5zNnYBpWl4T33nuaXWHau6UPRx15p7V%2FCEcZlzHexkISJNj3tkofgU1RMv9zZJRkhYhsBwb0gCwPc3ysRIFOj9e6RL3jZft42HQwLmnDr5c%2FaoR8AJ5%2FVlzsgwzxugAf%2BUJwHD6cSxp5BYz&X-Amz-Signature=4314833d8785645df0a27e8420c844dfd2699d23b985e714ce3e33e63f86c7ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

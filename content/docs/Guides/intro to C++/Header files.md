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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMYMKGCM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCG%2BzX5P9u3W84e3DRJc4Ytg8Cy%2BLhQaIRPyVCjiN09CgIgcAZ%2BKwAhwNI9e%2FzADNY5WDVYMbz4IZJfwVkn8IRjuJwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6nxWsjRQJ%2FgHl3IyrcA2h3p7gmxVhAmTTlQnwLtpq7KWId4JYfKT0dOmHKup9F4Jw34bfEzRjZwy9XFCfQRhZU13mWwwtR5iEQPK9BHKmwzijqg121h2Dx5rCXgrstNMyMsBLgLS5qF0iQCXwN%2BfroSJsGjM%2FVJdIvYKogjpJplRQ7jtbYUo8%2BXBd05n2ECpbRngNsH93UW9lvkhB%2FIIH4RiFi5pYhir32uHmpt9czsoFx03CgZhxbiE7zQLVwksf0apq5Z2VUFW2Bxa49WqH1Bvuy5seFunhoRFBTkkUgokTEWaQ2PEOf0%2BtL0eLz4Fuh%2BrLfZ0CDQunqLqjb2dx9W6opC2zKbpyNWiuXpX4AJJXE9hZMzJ5ssbohC1wO3PH0PqqB41I2qzfeZtOYNFWrUy9GAqslMuyaOCkdyNBq9hofIhwh3oaHHtQSt7lJlllFX%2FZFC2oGL8B4UsF5HWp%2BLtDO%2FrtugVqucMq5hbejLBjbEZA9G8ESjyiFxltW9WRIxbxlOQvR69juzNkPL448SellHpweWfT3t76pnk4RNwsaGTGiG9oif%2B4FodA5kbGddCv9NBX33pAD903uG9UAiqpsQwMTqF2QJ2qmjx1Qt2rEa5%2BTe7fcvsYtNbAFe71ZI40UXCSUBehnMMaonsQGOqUBlJ603SimoJ0V%2BvRFn7SJkHPHrwB8S75KqxW6Jk%2BzL3hqbj%2F2DLmb5DkZzhA5jaIBDJvKceYo8ixsNxIewOV1fx5s1Xk6TCtIYlTIWQDws5XBDOZX0X3EILGFllxizusUnnb81LllZ2hxcnIEYVCbqewSexT2A%2Bl%2BcN%2BFeTBhjzUA31AFACBZ%2B2s0ys1hy1YqW2UhxeLBa%2FBYhWS0wMspbzfIGqps&X-Amz-Signature=f51ebdbd42f0be7a60da2a8faf9239bdb79565c9b2dc146c153430f0ab194893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC5VGSTI%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeIecCbtMT6w6Cq9OpwJgJ8GqFQtJwcfaE8xXIP4xy0AiEArPNvq3PkZNXIhRm%2FzMbHVYupxgua1xvy9HQarC1Yj5kq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAJQBV4tkYgwsL2UbircA85f2URrvMqk57XWKDr4hrw9BKxrENCsxpWcGn6eEX2xnHn%2FSz1PCfuEmSYgIo24eIInIJkPwP%2Fq8WnpZphqNIRnVcs3y6EvyKg5WB8J%2B1tU7AUB%2BnTTcJ0t6MjARwf6j2r%2BSKtoszyl6vHhPPlLE%2BzJNg3yTg0%2Bigdc4KE7Df8Tjc02r5oEpGPmO6k0pkdBEyYU6fzMc0cqM6KWoZiEZz8GIozfrU0nmoEcJSN7W2OOM%2FF%2FTeKqiX9WUCurUchRRSQWh8hSuAqdzrrwdeHJAdxNws4elsotFsGIw%2Fl73eHc3uAchYjZQpcd0370dc5ufhYdvDP1MPZ7pxf1dwqcu5wSe%2FQxFxLYCqMl9I8vMSfHsgEZXGmihpyySofqMCXOtWk5kQThvXrsPnSKhhRIWw9dyMd38aksEnyTxDkeoVly%2BKJc7QNgQ8%2BvR7xpFb%2F7RfmxbBn8lLRuUBLBioCE9rwGGeyP9u7WshyKFSIg7sjs8tnZm8d%2Fpg40HIJJf2eB%2BCNGg3Q6pUJWxWRG%2FHY3969aEmg%2BJB9hKkKNG0PYDKMLC4NEWmElK7g4ha7zmSu%2FYb%2Bnz9BNH9iPLST4bFu8E4OgWdp6be7zH6Y%2FScR4asCrDAzWr7l%2FIZLQOpKVMPOI7MAGOqUBRX06mGhdb0Epxpx8id%2F58hmYtT5xBecMuwsZtQarQdoIJxlUGKMg7NntfQuow9yfEa5t8aDTFgPfTZwNscl3hXiiPIV4Q71MJB%2ByraIWntbuhHm2OMaenyAi%2Bs5wd9GXAlpOr44n9NJaU3J6a%2FQYJHsFMsBJGNwj1VOtNwxz%2F3KvS39L6XVpncZBbsEdNb8ibvxPglsMAnZqXhxFvkXX9lR5gjHy&X-Amz-Signature=71a4c3e84318cd7ab71199807da761e8be20255701ce7cf00ca198ef555b132f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

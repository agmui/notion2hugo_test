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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US64LGLQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCeEaHtPeY3rMYmxZ%2FzCBrL9a%2BjV7EfYQjV0GpqB93RAiB8vj48zhEq3qQR3K1KTMNMf8YF9ygpPpXT4GSdPheumCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM1eJ%2F1diFQSBnSqgPKtwDqbfhkZtWr%2B7pjMyo2TkH1Z8pwC7mzYeK6vD3IGCakPdtvpBWKX1qq6N39sjNk1LX7g1QbcwBo4621Nyn1lC7C8Q8aNCadWt5e0MXbYcu%2BrioHCVypH5z839dX%2BpV4MEcy5ZphARku6tOHd2DK1ExHHx6odJSeamM1LShgFXy44Q%2BHYqtWvldhG8uv6Ed%2FBNQwJcezywfVrFOznB%2F88fmu4iNyfpTGu9MHEJblWnULKXiNHtl%2Bh7jJ6hEB9B1QuE7Inzf9KtbKyJoTNUUcb7SxEiUSwleOxoa3uY1CmWXUbtMPSmfBNPRG7rVGhbjmap3xxa%2BuEMLZoafqq44wt22eeAZn%2BCIDmgfTM9lWVmL4LY97Lntq%2B5FRawAuoMkhwVkRTKOnIyQL%2FpjwK4lX40ujoU0h8af3a4QAmNFZzkdO4oNSTAhPcfgxXxtFKkYE7r3MZIm8lQo0O1OQl6n8KPewAjCV97yuynQvQrDAHRaPmIkqMIw%2BiaXfUPaXxFc3No9qt3lYtPtcNX1k2EePkevz48bATzQtmWRbEwlhheKCV1bRl4WI4F3ZIbfQjCmbXKwIZL%2FhEgBjJjq35hppImrpOkaXB7dgFWYLt2jDFFTzGCc74Hu9qw3%2FLihL2ww%2FsX%2FvwY6pgHqFw7hJHgOOL53QY%2BQjZDWrwWK2YiE%2FH3I14ihe3DKTqzWRtkldrICLQINqoLrHpupBlVkyvYW2zSJ0etJqpwM5ydPfBFlMYv9Srx8628aGcpd%2Fo4lbY2dyIWb%2FutdhW4vUrY3%2BRz82aYxkI1wm8AT9dw44gclJ4Lc8HarQIfmdqIxB%2F%2F1nN%2FYxJBFCUpxFv8%2FSbC9HCnmRoqkOfUXw0roRvhsN3xd&X-Amz-Signature=3f9c95a542ae1398a3fd989718f0c4b4a87adba61d4828965e09441a421a344c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

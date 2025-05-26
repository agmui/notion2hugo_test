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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSPB74N%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDb6VUFVB2Hn7sRG%2FZJJQQcLXJyKQE1Zw5kzvehsnouwIgA4kQjV13elD%2FVz8DLaF8aJDGiCEU5IcfAb3hosZEsbUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDAWZ9DYks8JPjJySsircA7jNxd%2Buz2PgzD3s%2Bm%2FXFfJFVkRUX0GIqZT9Jhc1c247tljslKgosOcvoK0BHacJeuiSJw9KzqSSXT5ciB53wbspYuOynZ9M7MfUsDS5U8AtB7MJqIwRvOfwZH0BNcfb8j15s57cHFuT33oIwJL8R7XyD6sqHjmxr0iJf6ZtRzsJ1x9no3aEDlof2Vg3vxG1K%2Bq6GOD2vre0Dy8W0u4K7TItbHJlrohcDYuFEO1iLX232omogeG4z7W1G6aRNeBFJvvF1j2GQvtoNwQ8Mv5%2FAoLkj1sYz6L8LbP%2Fa8hQX87LVVWcjT0aDGV%2FCi4IUijHx404XyDSuETI9vVHoTyMUG6EeDN8HAbR%2FstWm5XOoBHGallnN0c0zTyrzpahtMoXz%2BnbA%2Bl7b2lWcCGyplgps3wL3wwAvys8RddcP8%2F4f3fUEto9OqirJabRWRDJ0RGjmnZ0dhg4q%2FldKCwsMhnqMuEl6i4qUVl55fJMQMbFtApqgZCdl5hWTe0%2Btq9b3OtcfjH5%2BrgQ0oUdo2BsyiH8UxxWwWHUGRyrWoXoSezQY0tQDkvn8Z82HIsPpe%2F%2FVqSWBn8A%2B1WJnqUl9%2BSWdQBZ7MRfAfZup6%2BNGQpQadCk7kJjqWKsWbZxgjybMPJzMPHP0sEGOqUBGv6xDSM1O4ZCEwkzG6c0XN9htkKgbFt%2BGFmGxeyawiIorMdT0i5x0FF%2B2O2odL4K%2B%2FawK4degp%2Bhfx%2BgSKXGJUMsQsqh3UiI8tqoODy%2FSdBj8lfV3SKGxeDhrdPSoB5OmJNE094%2FzanDNIq9qVhzTiu9Yy1BeAxr5vMnOHjF1nPfnDmj4mzr2bTHpnUrW%2B1RutMelKzyjisIDPwVIbnPilzUbhON&X-Amz-Signature=4f42823e48efd3a53a76893f168255209b9237ce0ceee4640fe9f9e248abff54&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

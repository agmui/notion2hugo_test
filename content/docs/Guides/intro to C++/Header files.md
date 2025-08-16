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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP5CJBAP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIGUhW7mgYNN7NwPIYuV4w6AUapiIdRTt0ycUgvX8HdytAiAMAGMrFl0qEbFuiIK52T3zfoiDtUP3Er4CtWDHnb9nWSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMRqR%2BvnPezb1skO7nKtwDPZRFR%2By3TcRKCK9cLp1YeFXT8t8TvlG2wfud%2BsHtQR%2BUcnQHEICbPuqmeNhfYLprjqzfW4cEhbysdiZeu9Nfs2JhFoOkuKJFMOrtp2pMW%2BtF%2FA1RuB3pKCyXg2xgHWRj5Ssixim2KPn%2FEkwKguQYygYvVWjA9MQ2rcvj33NlDibXTJi17G9amTJwCvyHnYPmYVfidpIkO%2BFxSQe8cGkUvsdTZWlnSVHXXaWwdgPTDc5pKjFB4S9sWUZNVPIoDV%2FU3%2Fp8o5v39f%2FVjiBeK46i9Hi%2BFQVp2mUUCXI2S%2FPWEkVx%2Fa4epwPE1IgqxH%2FA0rZvgZPQ%2BHwv3cEiDrBEHw7qMN%2FUKCPXQeGRyb5KSOGe0gGnHed2mvLMdBw1hJP36O488VABgImupVj%2FM59T1AWGBfx%2F9pMEz%2Fhck8KX7rS%2BC2eZVJwWkOsTf%2F%2BV4PRGvzf8lm6x%2BmVUPIogtHf8w165h6xN6t2Fw1WR9gDtEjYk9lSBzMBns0xapdQ46dtgGaA5cGhXGKR9qAEtteF7g6OYdcdXogj5ZRth4%2BAMZDUspsHLDFA0mhUjsDhpeM8fif8FkEuzJ7eeO37H3Rgn4a8jPoPeB56dMnR32xF0KvM%2FLrCNi0KIXpAjxYkdPjww7KD%2FxAY6pgGwx8kw59g46Goc%2FGZ6E178pvyQ8XxNG42ovFk0R4yMwZWUqUXGXufcyNyUgR5U9z6Q%2F47kv24BuGe9o3DrTvyh%2BYkbJ2v1hoHRSVCqmpUdar8KOiJXfUAzgZtukcXZNH7QFPmvccbvLQQ7ti6VLRxR6VNh9%2B%2FQwsx7Juv9OWAXvjvC5cXzd5flbo%2FO7KPXSRBO8BST4NztXj9Zl2%2BtyEaUu4vbhSoC&X-Amz-Signature=d9a98718c5653e8c9326afe9e7b5187c94dee17d6eef7ad8aabdd9bd03606d35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

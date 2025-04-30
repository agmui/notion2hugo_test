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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CJJTQWX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHRfwF9WJOrpQPmylzOGHcjF9CynZqwQyNl6uTdQoQrfAiBipik79gDYJRqXQoF6nuD6aQrz8jvvbQLRweKhgl%2FckiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPJi8Y%2FkXQsjwx%2BQNKtwDhboHTJU9Vz3X1VaWy%2Bet4zNU6mDc5S4MdrzGvS6QmLiiTOFdsRPY4vLbE22jJD5k%2BVHR0mkBKuL2vum9VUFOWiw9zmAKyzZiDtiOYmfwsDl0EwCpnvnLz6K7F3KCmuUaIOxkxXdOLeyErJ6bbaSy4On2CzGA2dYaUi9j2iD6Uo3%2BOC7ILM3l6%2BYOFBbAuP77BVRIK0Im5hGmeWpJuAroQoKVDethrcVszgbUbZGijmhEpmHDcC2UuWaQhyGOJhEeefxFTxvyMmKRSt2npOyRBaYjgxJzhr62VkGxIxwpnwYPLxUBFsrq%2FVg%2BHml5J5ptoTVIFmXEA9vguSDn7pikOaLfKoh9Gmj2Xn9tf3B%2Bya4P4%2B7nPEKx4vLYsx%2FxyebALzWXF%2BoHpPWaFBRxHiRKWD6JNKrjmZ1wpxXtzvu3g3o3j%2Fdf0TwVs7%2FXxeQip51jy6QIHJqijjQtCfb7UD3RVkqZJXJGKWjhswEdGfXvVWEj3GfgsQ9wY6Bb4CAWse2gJhzdcEG4gZiKpWPt9Os0YpfqFjT0saZru01oXlILv7roWrJcxr57dHyYQXPNTzPEno%2B8RXPS71fRWKuQeYZvuD989YqWZjHctOBCbWbDNks9lS2UJe7D6vsRNKcwyJ3JwAY6pgFfpLYmP%2Fqdx7aUv7k2wsoE8BVEnTOxMMWEnn9Q3WPS90SDY87pq4srQbmmdY1IUrp2qLAkGleCRa3sLcJwtVJj6U3ztgX8G92eEAzFaZxlZpNFG0fiYvau%2Fns%2F5FC1%2BTxqsrnO2GgxJJOq%2FS1PkFu8IrseVYBoRX742506AzW7IZzhYlmNKOXK1c8aW2TRPSxFPkNH6OqTLamJ6PmIpyIaf7tpHuZp&X-Amz-Signature=acd7f5c050b86b1bee9007190869a4e91588fab017dc7bd0fb62bcb28e46e3a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

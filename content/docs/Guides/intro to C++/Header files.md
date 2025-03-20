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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCPN22J%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGVvxxmKUnzi%2FeJWBJr8Ny%2FRKXvEFo03YZJbEIORKybKAiBJJgS0d077lZKPkMsqF4T61y9OglattORi8N0rYrODmSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfkloKTXyonAzyHVgKtwD8%2FmuoYwLvCEx%2BSfTEEqWjtORRoC6kEwvWiibUIqkuXHmC8wsdskuwbJIDP9h30LR4dlWaxEygsfmjyjaymN46f3kP%2Fxnti4z9dLWaDnWY2zzKyrNjkwQq6UllOvU%2FNBENCkuEd86XjiNdTPAs7WTgED865VPQ7WLZLtK3F0z9bEf56nYRYWcbGZXbB5qgJ96aZlkRj5gbdqcPBPJCBH0t4OCEGuNunDW9NOJPprbVXkQ3IBTMZoUiTTAqREr%2FgGOwL8hSqRmyMS6L1wXcwoYrghl%2BsmlUf8lNFYW5IPNgC3qDcwD4gXjY3q%2FTtJBEpxa1FL0QaKT0fg5owCOb%2FbEOy8lRp4Sw9JSewQkepwS2MXa2hGG7rA2P4bGnuMQ4tM9Eys5xNJIi0t%2BK50f02x92%2Fnbqoo3xb6X8FKMVAR3dETxColqNtkW3g2ZflUyTusrlB2ehHt6NWgt4BwKDZFtWx7y0PiShlPdgBxDsGykATy7CCdiZRv7lfTp0XMW6Y21MZ4QB4FogVorLBWouUFmVal1fEIgh7kPGeIQmK24A9V9%2B02KwzpCYefAPiE3dSoBDnPxUeO9b00mu%2BiPAIj0VkeGzjqEdAtnbcD%2Fqab%2B6WADwOAMwP8cpSh%2F%2F8MwvOTxvgY6pgFXbaPyn%2BSLPQi6LOOuGJMAt89AbT%2BLADPwIUZXrl3NcWXznxQ26W8KIkHKgtTZ0WRoiNYq47IstrAERoCk42%2FywLyHiiOaCJLULjCk4JqzDyj6%2B%2F%2FULwM15rQJOPyAN4ntnUyqnYT%2Bq3csnWkTeSnyv%2FTzsTf0xv%2FfQ0WC5a7gm1GAKW3VZFlp7rwpAgtH7B6L3MP%2FU8Lg6q31om06WUhaX2VssK%2Bk&X-Amz-Signature=12e5fb81f3d7f068e92b0035bd1ee8d9e6eea06744e5effbbdd4d26927266d05&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

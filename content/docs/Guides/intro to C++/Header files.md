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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTBFEUXQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIDAUwOuz0IPen%2F2LeGFhPGe0BTlIbKoDleCR6xrhtEaXAiAL8ozBj3O%2F9UbZoLnQYEktgx0IGcKxKgnRou%2BvQO8KPCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMsvuRczBLye5MC%2FrBKtwDNRRTp6yczUrV0hKkGCopZmW4I695hv%2BoICkVFhYdpgun0gj72CC8qy8qxD4i5WWU62cl5LJ1KgkY1zCkMEhd2JN2rDNMUSYhOFAQDoqATrAXOZl3Rm4MAkkJ2k8Ugu0IiHLQZ381efhvcfLFW0eyL7cyuXV9GfYxMTrvq4Q%2FikZVxXgAD3GoAhiqDh6gGpLb2kun3uhtYe6yqOzaeNSApY3Ij%2BWAv7TC9jms8BBE%2Bv4kx9zHn8FT11EcVNZjSfZwSHdAJZ8o4P%2B10rAz%2BKUB%2Bd0mFENXagZnR4ho0Os2NYOQQaytaABrWcmvL%2BMEjzXmZp7AuOWCetd5rrkDjsBDf3mum0%2B6%2BmDhmguwCSVgkNLoryUxhiXCyPj%2B0yLySc5E6xtwfYlf%2FmsQ2DKcCpJh%2F6s4wtHM%2Fgs3oNTBb2pkTBnbXKsAugnFPbS6YVVpbZNt236%2FzUKRL6SkTm91KgTyy1dNom4WutO3GEx6IESJSymyhn%2Be4wzNNT1dBgMIwMk1AqHaEe5OL55SkOWfS0JJ6Tm0urJTkLRLK%2BvMT9F7uJ61aNZl3HHa1%2BYjap4Epoo8EiLMJWWR8gbYk0RaN6qhZElSYYxfNXjFbNnIX9ttOD%2FnAO6f%2FuaVt1ZZbGkwrdvMvQY6pgHhLssMiokzq7TslD%2B4zLSmzoFH43%2BDWd8%2FZO3Vn3Op4Gq2CzRaH8fc74zD8d9b3drWHY5rwktfJGkHRXUZJCmcwmVq4KvSPCSRvRF%2FyjIGfHPM2iRBIvj5Nz548LW%2FdIO3OGXwuAv4GR4mUBeIUUh%2FeF22w6gE5mx7m0oXP47qUMO6VXyMQlHG9plBORHlH5HHhMmCl7eMk7m%2BK2p%2F0hxKJPW9PGcl&X-Amz-Signature=101f798b58c6a4e46633bea42434b7c0c2696586b3cc78622fc907e9286396e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

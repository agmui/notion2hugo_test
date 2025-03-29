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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6RLNCZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAsfXAN01kB0vJbs88p06hE6kpSwQQnOu0YAcJeac8qyAiBGA5ZPcyhB3o7sjs0%2BmtbNztxD1DWo9nCsCTVt9tXk2Sr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMV4oMhfo%2Fk3bkaOMwKtwDFs%2BArvH0UXZf86riSL10GB9o7qJSlasSI%2BCZ6Yt0rTUQgthybQgU6jAN2ewmIgCaDkPj9M3XeWrzCSm1wN%2ByMozigpfZjjrkUXLH7ytdLSovREpJK1NZ1Jq9%2FVJwG6Q1w8vdu28S9LjXsmqag7VjhqLDw7plFrZZo2m98jyRl%2Fh34ks6UBQBgRDDVkOrIzKFA7BNMBD6%2FcP9Po5tj1iioZEBVDmiXRtKlF6EB35ZFpudJ769%2FhAWkvKjXJ8ykfBDZcFtUAGY3kvoOyxfFqjQWdHhDE12BlsfJeeAR8Zuyju4T1AZEpRL2mQKsSXnrMKXJcUbFPkidIFwA2mSXxYFWKBks2wVf8RlWo3AqSegJ3g9KoDw6TGDBR7E5vKZzUUTdUIqKq0yYW4jHVr71LXw4Gm99fslGiXg%2FVnZDedGRrYrsJwogCxKzWufYlWjMQ5WUor2J4tDveqbQVLALE0rcLOzKVdme8RJACEOc6KMQWH%2Bkqp98ZqS5TJtpXXfgOmsu1FVsgiUu39xrHTfA0lCY1P9zkLISNIpqI3tLrQyMGgnhX15Wa1J89k5qZciemeUeddVnw7faAnibRAxIjCbUhPOTBq3SbQfPTYbFc07kBr4FJJpWzOr1I8C%2FTkwtIufvwY6pgGmlwfun67xsbKv1dgHakxuYPUjdqkOp%2BY%2B5R0rsZn47nOalTzb93M8%2BbGhYh3DFzZ2nAcIPGiKgNhutxs3GZZndCaztiOXTSE72dujYJXpLFR1IGgtmeh39x4TOAE%2Fcp3EmfivUFrX%2BMBoTESmsb%2BtaqF5aO6Cl5tlJANZCYumOjTbvSW%2BRoR49SqixIqqfvwpeZk8KPBzHJDJxhUj77HpvFmKxzLW&X-Amz-Signature=21e50bd23e6dc373b4029bbf73bbb23f6198f10959ef34d08fd6e2e44611d666&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

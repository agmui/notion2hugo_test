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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WLBIBP6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD6aPwiGjET%2BpbM9plQNJ%2F6fUG%2BHZ8IdnuGUX04eUvkzQIhAKnWBHV%2FdKhnt1%2FuFv0d5ePbAkktuWGCdurg9u07uyQHKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW2%2Bow%2BoyfhhkPOqYq3ANIeyUf4%2FnJKZxKvTdBoQv9xsjXkQhiqUMunUwmn73aFzq6gsvppjB%2FvJ36wqK3QwvMknsOcPD5ZK%2BprHEoVemfdnULZudG%2Bwfsa3%2B6eBgVUkVdFslR6iSJ%2BvdxHw8AebgztaEYGu1BhQI7zNjCCeRBJvOFLWjGDi1zlPEq5VUNagKEs7pD6d6%2Bp5NWTwnkrfNsm7GuyHgz0dz4UvB0I8p1WtBCgUIGOw66%2F7dIUCyWtYHzZUCxwFscqMDQINnu404DaJW5YzLdF6HsxVulIxxUB4mVTiI6xBU1O1K%2FSC%2B8aeaQZR0%2BYEfk4GvCX3B%2BfZZeZlH%2Fsur17BQyROgCnSEfSSA5rv3KsmpP0Bjo0BiQxZTdCrhoeiJZ5GhBGCFKxICZ0kfO9a4Hx8XKmbDlWDqR9PPV%2FNh5gmpky%2F0i3bcarnMglix9nT9swMv0v3rNqXLPBTChIZUeLvWMPsB8hFBUEl%2B6XRxjTwI5Nk6dFql1uCz9pu7ZQ%2B8em%2FsYJ8FWmw5WUUg8Ny7DEVLVUS%2Fo58b1vzmqgL1k1nMQkWnNEsi69UPH%2FXPAytlA655zYuQjexBwM0BiOVURtPVuXxP9iTQJxefoXmN6YJwztLV0be30jJVhMtDfTivaypH%2FeDDF9o6%2BBjqkAZeaf%2FfQvloxPPaMw3GgCpfSz%2BbQt7XTRdmhq95b%2BOryhYbIlq50WLmbjvcbHQArGu4%2Fn65T5LD4vYnv8k6Vf6vkHW0x3LRqU29ceW1hOJ25i2mUlbgXhojVVKIXU3%2FxdD%2FNr0qWct6su8L0Bm3aNrSiDOK%2FZb01i6nip%2FWM2KX768uXVxuKEcyV3JPA8ChUWpwwNAERGUqzg5uOOx9%2F5YZKIsRl&X-Amz-Signature=13e363a0e8ae6c7c127c76e168c7d5d145fdad5e421213d14a380767758130c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

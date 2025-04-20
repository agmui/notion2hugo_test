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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OCNIQZQ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQD7YdjeyHKi4BaYEZk2kwdOZuVjm266GxjX6AVPUA1VsgIhALgzVLW4UylQK28rjNns8LFLCgI115ROt9vt%2BTDot1BgKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybwAyyEDiHpV%2BJZS0q3AOMldvcXs6XCSHERTntt7PfOlC6Cfv%2BTdeWyPAenAFaW4fqRP3Si18aiLZzhfTP3uwequ4jgEAZIZaNvj9KS%2BjTZg9EJHTBCT2sdfwZwLVSgszPNcV5cKIG7JfQwyNJIL1eEIJRQc6DhORvljMk3YwVQWz0EIDc%2BhO2TrdEkUCZGfqxhZguyixmdUDTLrjcRPrvG%2B%2BlZaY5MuoPuJ7b41e%2B5aWo5BSBVuyXUzBGhvpsuQKN0wq%2FS9NNhZh96lx5pyBt%2BWxwkrQjLaDsbsjEO7XVhEQFY%2F238ro2AxVWInB4db34jP%2Fd4bWINdUImnMSgl8vE%2BJshnrfas1fjQk7hduCxpLnJvwZdVFELy9L9AbV1tNSU2HgjDIqoGCI847ZW%2BpjExIrJoRYsIhgeaL5IWmUD2d6CrYDE9f2G9BdGs3vKCCHAaMUd624RuehWKqOA1aeBnMWZbyia5MVrItIYd3vkOSy6IIo6hEf%2B5RZZN0FAfUbq6a260tg2m6naGY%2BZ3cpyU3PW%2FHO8EcPWaDkwho8V9NH1weBkihPqNpYwxc%2B3nFXYPU5LU%2BZ7SckDaiY9gnZ3zYqYDRIkQgBPpm%2BZLFY1DnIbygMICI7na0DpXtadVyo2oKr9TPPwoLPEDCDxZPABjqkAaXKQdm29jUmvQhDKE2BpmxQA%2Bn3e3B8xZ8um83vNzlv13qlRTWuuIah1HdmRruhRpeGn9TeLt46hYcvKOTx5moUUwYRGaa1m9GIGjgmhfbF2yM1Ka7OvYfb25J3%2BoPKvutknGjWlhWgTyR%2BNM%2Bn5MVUFahG7k1BsXE9hP0RCskLVkM97AxgLcG5VrtvgqsnXBbyE9BfOggcFzuhkV3AcexAaIoR&X-Amz-Signature=66f7e349460aabf38bf04a9c549f09524221e25a1dfc554fee8c116383cfc16d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

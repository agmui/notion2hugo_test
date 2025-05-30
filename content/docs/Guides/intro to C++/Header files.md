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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYEMPB2X%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBmvEQNh1AQsGQo1USyQX%2FWUKUz3hWmkWALa9kLQsquQIhAJ917lX5myQmZe8JwW5UMXzolDKdpSeW9QJ9z0stocZ2KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmiMASfTZdS8oshNIq3AMsylOmcktoZNmTcs0M6Idkw%2FG%2F5u7B53Qx4rJMwYUbC1IFnfIPXUMPtLO9Y2PNGGAgRd5Cz3o7feOHK8%2FImzZGl4HsUeSTVNm0KyEhvAhjVkpK5fAKk23pXn00COnwC2vrpul1PWPFh0OLS0TqqL1harMbIaWmoBthLpJ7JTl3paaKJwLJxDBpliBBnptF4P4ubh%2B13qLDzSEdfa%2FIzxqR0yjy%2BKo7BsVvKxs4jsmNFaN4ZtP2Ae%2FlS1yoqpPVQzeyxajFoUnuXjaoMYVTI3WiYTnhuUWjYjSsz7zGp69wpnX%2BC%2B6cVN0FztyOs4HaabToSGwqxCXwXMZus9N5CKndHxdW3W0DyFdr%2BOo6T%2Bs1pJC2P82nHOLqZQFf2VAkvAPmBB7yrm%2BrtAQ%2F2Np%2Bm4UVewhC6r3Hxu%2FpbdjOZDN07xrUfTJ7bbKfioXW4ueCuStXoMjjwm%2BIyR4VLlkk64uRKBHGs60n6E4K24uo5hEw0cql3DyaAHnyzuwk7ovNHaJW1U3pQkDqxDTydmR17D0O%2Bey%2BQY%2FG1ZyrQF1xXxW%2BKtWwKC9Ab4XOTjgU1RB14NMwSPYTLT%2BFUFl7rPCiHyVczjMJu8QQNVfv88t7ABKBI%2ByKpYaTwRluZX5BUTCa3OXBBjqkAaJWP53dZK%2FaLWjfbTV2Oecs6K4uNlCc6uTLWvvC49WJEtyaay7qWWTI%2B%2FrmD6c9%2BuZTUesjhdH3aY49ao%2Bp6lAn%2BJmaryTO%2FRrMfsoYdCPRJXGNZAMXDGvIOenbf5Kn3NZFcwMg4DZc0nwuKSanBjqtYrt3ZCrGPV9a5VyCfqOdcfpvEqnc%2BFA%2BBUaw2gTdv6%2FFyIPVL5ndGzCE069ybSRy31Lp&X-Amz-Signature=df8d4db169e746d0946cfcc624c8d27cc1a52f4d5922383e0783dacd69431aaa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

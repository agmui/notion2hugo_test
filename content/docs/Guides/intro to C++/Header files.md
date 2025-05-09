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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKQFVDS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAoryK2hhDx9Q9%2FRG0r8hhynRWYNFJTRSRhrXAeGsJb7AiEAy5PyDID7Bbzmcx8tnmK%2BNpt6FBhOj1LBJZYxa8w%2BAh0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9UUpcHbvT4T8FuJCrcAxhQimcZPgQj7okJWdBm0j6tpIhIIbA2YawvlAY5A8rBZ2b%2BN0lPhalz6nAhnMytpIiSMyNU1JFqIThUP9Vm0bnbxwGZOm23z1OArZ6WF2lbbht%2BGbz6I3Yf39smuE92w%2Fn5Cp578NEpxws5PtR5jnUTlMKW1nT9zEpdxMw1KpVvDWDDDwR1WAE8bOKKhQ0KzNFdR5UrL1VCwAp27sKzbiZVwv8O7SPhLsypwe2HdDjcEGe9mRjn6MaStatd0ETZNpfuNJkamUlWjLkhtlQVY%2BdYSBzx6g4SCz0XHdLJ0WNNH05fp%2FJ2%2BtCNj2jd5YFd1ILSBQVN9yKDISjMlmB8aQZMhJTgNiz%2F%2BvXprcg%2BfjKYoJQzLKCR4dykyT4uVv%2Fcgx1FHU5WrtDRBSapO6trCtjmO1Uhfa9JzgHQyDL%2FirWPM1ylTaqYQQf5KZ7PpAvGOUdrHo1SbQ6H7%2BAV6XCeiWSFtUazHoD4okh6Ar8qUJDsvfHNNi3egzuVi%2BYarIzXn4iz%2Bt7xhDHtk6KVVmRniPqMqKJFNjDZjMz2iDfYbV1Vrhq%2FdoNjUNUyso%2BKJpWt2e93N0yXUnPa1j%2Fb6PqeeTE05vF43W8Z%2F32dEyM06OTEybd14gACESI8UoRGMKXj9MAGOqUBeHAtH%2FLhJObCLiaovvrvSTVKMYrRaoYDIuIx6%2FZPoj0LpIs%2Fby8iPl0G4NjCGfnWo84wPicpKaYtK%2Fy8DtzL4asu%2Fq5XHva4xzWj2M%2FTu4guRNI64YJksNZCMtZyg96f%2Bfc87KFhEIQKRsgR09xM2lFK8Ph9rRZDPJH7VWEpP1rWdj%2FwMWzdq7Q3DHzycn3byCSx%2BJDKMyQiW5f9g1PLXF7A6Ttr&X-Amz-Signature=f0e807f1237f766d3da947375e7d4fb3c8c1f3de0d1128d305bec8a5754d5898&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

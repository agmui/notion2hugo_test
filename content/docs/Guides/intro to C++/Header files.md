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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVCP32VC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBo8XHRBX4BtwxB8L86SojiwyYSr0xgrrxazFt4Y%2BvmPAiBQkTYx%2F%2BX%2F5W0B1dEWOK9A%2BrUS7aiJ7%2FVYxBXgCEPBHCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8CM1vTijWGLQL4vAKtwDZ2t%2FkJrCVqu%2FpFaC8P72NVrLdjhVJbWJM2JtuWto%2FMFq%2FqcIKLU6Y%2FyyaoQ2%2Fo0ei9Id20IhZZrAfBd%2FyhG9Si41FJik70OUZEeKk8v%2Fb6b9WMLpKsBAtIQjSIfW8tTibm36nKYqfZqMpzRdWougktEKE5EbGZL%2Fl5%2BlEbGuSNerpXrPSzcu2fy7C4ikTKCI%2B5BWg9T%2F6iwpQREd%2FjZXzBroosHhEDud%2BkNeYkoPgAgh7Z7sUb9ImD3PiqIw1I5WIikl2%2Bfc7eohQ%2BAFaRFi1tAKYcydvD4VWabmEODAjTRUQyU7EHbWYOdNwDpCE81xttMuhn9ED%2BQlKAAg1Lr9l478g2RDbzD2V8ZM5LDX2pKYI3mv5x%2FzXVuiRRKHMjXaOR0Wmjfmdoa2tWRcaSZzDkD7BpKSNznZmBwq8rFnY5jhmne%2F1FWV3J8DOm8LDTF2LoONcBCeE2uMlw4jOje6z8ijm3DpTYQc8tR8t7vn3X%2F5TQiAI8wYAyQQg17y6B486bGm%2FMwD5qKvmDA3sDlgOFm7%2Fx9ATQOGk1f6hSaRBi656y4wtGDdP5%2FQMEgxDjzbs0JEXttVrvjz4uE%2FV512DmbXY3iqsQyPXlQYMwgYU3KzFx9u2QD0SWl841Iw%2FYrfxAY6pgFH7hBHfhN%2B1vn4IVOld7M2iEGQX97wr0vj9lL9F%2BuJB1gdzRBe0KU1PIHRVrHxUt5MubZn5bFugvCyy8wLD1Hq4%2FuJVcQoE14j3t5baZExzl4u%2FCUcN2tiix%2FbYMbGuLT4EVile68diSVuWdfJtEbTL37sbrnyQSSyy2g%2FSNSBWViGmcAJElqvlccr6nUfGEhlGUJmM7k0obVY4lBIH5%2BNCpoHvt1K&X-Amz-Signature=c84808b555cb5664ec782243114ee01b9b844aa4fae5be8d63c4a13e4d659b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

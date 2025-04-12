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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCKNPERR%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIDT9kZI7E6t3NWn1qrN9fXvFLXOsC%2FCn64kY11Ie6ZdzAiAeHALzD%2FZonqyqwF%2BQyd6LiIO6pRAbRWsygzBiWplbdyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdMdRHi%2BTjgjxRwGOKtwDNg4AOqNyNXdxSzLTbpkarioX3AMZQHsCiWjqMPTNDM6S2SArlNeAjF0HmozUx2RTfb9r4j7QIwxx8s%2BozV8bsQcYjSoV%2FOGOPCDB96fmMpa9Pv97BSLjg0talOaPtu9Dk9GKgJOowabVdYK9Oodd%2FX9xSazYPKTCycdNKY1lFq13bzzG6bDFnrWkBxXESkmDGCHHnrScInw1asXfHAo3ucVUKhBEpYNlQrKXdPjVqc6sjBY%2FIAKdGxGkm4nOW4MolL2voDXUTMpy8Bn3Xt7nXdQ7z3IKNA1V74hkORvs1RNeVQmO7EabM%2F2PI390xF1HSANASy9Up3JEY0DZL1Ds%2FA7B%2F8gOHYdQ1l609zIfxQyF2m3kidd4xGdnAFkYNuYzD%2B6QNJAafADoS0ispMNZObFpSzfIJXm7AbC%2Fkqa0%2FRndVqqiysECrkooUl0qAZKbL56WZQLVKSoc5eI%2FYaxHoLmsXJ9mPgOuR0wOD4HmVbvluiK%2FhoMe1FudAMqbD%2BMlUvYBQg4%2Bxr9zodNO8DAYmNPN%2FmNic4ubgZOZ8EjQdPhd4WoJkRw3jBxSw7wcs%2B1m3uqQkUmn4kGV8zb4rr9OHM5V9tUnJwWuiiBWnP5w1YY95sTihndPbs4klTEwq%2FvpvwY6pgG4K7TpSu2YqdncbHtEnWFMNric%2BLZDYy423QeoSkdCYqXRZ4a7Uj1ocK5W%2BNzdMpEZuB1M%2B7yDkDm5V6dUOKrf1XlieCKMFSAGH%2Br%2BQGVRSA3Q79xfxyizgIQ8QYMTnuB%2BtJThOXC1w%2FuZzIc7XeI6aFYnrVw7IBN3CylzY%2BWi4Sx07XCAorHwBlBa0vrmDZl1Ue8hyv3dAlhiqgSSTEARKbhJ2r4X&X-Amz-Signature=9bf8ad4360b131d451799fe8bf486dbaa5e939486811d4cf3860c47a4f8cd45e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBWTWFPA%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC5SU6K40KW%2BH4FzMrx%2FBLp9Oq59OLmqzAh2bhqVz0PiQIhAPCfEVJlISnpBKxZ8%2FtFNmyU0y5ctC1aPGbecbg7z9TnKv8DCCsQABoMNjM3NDIzMTgzODA1IgyH88VHqfmZzmBhMboq3AN7tridqSO27kxO9P1i49ZtUzNQ43%2FyynFTzpetK%2BjUf%2FU0LlOOqXyyLS3NcGoMAA8HwRjIjf7UVhSU4SBY%2Fk6UmLnvzSfUcPd6I%2F86RmLnsFugvwQVW5ZxobewcpidjW52ZneR2wADLAnY3bfhYJhiTIzFi5rf5ltu7vQdCXWs2h5qF61LWuT%2F2aynbbCtugXVzEPLRyIRihfMRbYlebMjy8FeVA4XmFEDGFLkDy8E9CPaNLXZq5r91yRRybf2Z7QMEnYzZ3ILHOCVyseK3F%2BxJtEdCRVOEgf9Xp3flVv2G%2B8B1k9Tf9D4z24MItl7P0ugzBKbs0VmCRo%2BvgDtEOKXQU24EdtjzgAKR%2FKs%2F46bU7GQx%2BfnGK%2Fs1p6aCyT9iRBPcg7S4BT5IxsnmnzVIF%2FGeMiaH6G8a1JBv3n%2FafioPo%2BW0JC3l5rej4URhvwAfIWrBJXazZQWJ5zB13ga3G2GHEeBEZz23WhmUKW1vdUzyq6DFZquwcQYXQfaoOA7dpeoRs%2FnY%2BnTSOtZFTHkhhhSSiNDQHCAw0UKx%2Bpjv6E0leR5PUF4nfAEAFDPN8N4Y8oo7P9Z3ciWMsoRIjFg8st0aF0NoihnMf2%2FQW%2F2tdOKsvwOU%2FklX8fM52HlQTCZqpvPBjqkAU2ZGdwacDNMNhSG%2B2nP6QTVDIf0Ia3RRCAkODRjlTZWsjvGZlEDASWG8rwupPDnmWcHDqunPR0%2BLZLc%2BZEXZ5g2fL7DJMVD75qL5beem64s12Oe9UPny9h97M%2Bt4mq9WS0yfCJEpwJ2pNqc2UP382ZUYHy3oI3yDcF1pBIr3cEidZ7P7ZI2RNGimiiMjdaZa%2BFcedB02gAojNUzglj6BuF6yYdH&X-Amz-Signature=60620d5530623e5459af7f8047563437f5c5b2ac20813fe079d96e510bb6aec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

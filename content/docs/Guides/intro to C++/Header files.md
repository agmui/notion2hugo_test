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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BDRVWNN%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXpjap1jC8oXZepwZ8fHdvzzPy9GbMbF7lUIX8jWyfFQIhAPneSN1WyLAxc%2Fg%2FBX5fytvCRitUoXPK9nTp4zYJ6ebaKv8DCDQQABoMNjM3NDIzMTgzODA1Igz%2BGWr3Tv7BHtoBreQq3AOcnEl8kJJoP3MK5Lru1IW%2F1K%2BSpDweFIAnM7kpluQdBajBMfno7sYxRlZTp4Cl8DsEVVLILorak1Wdi28R%2BkyxHNu1g314sLYrGBwJ2HzqiZpofwBCaSviI9GxxLJeBDnCDZW0MvxHyEhkbw4JftuyGYTW1NGMxdFv29cgFD9MoHXz0lmzTXPP79izgleGG6esYWxAjSlscrfI0CBf7GmWeiqOsOOVJO7Q1S7MRLG9%2BsIV0IMNTS9CHwwt8w2%2B%2F13CqE2lt7p3rYIyFd7N4H45JtZF6pcAnhyCdp4hQJrNJFrFgEDdV7cAGM0nHI3u85ivkEgPdfFkCAWFEDEB46KwLc8lNpeEi8Rrjbpaxvf8%2B%2F%2FtrB7BDjYFjhISmvebfttYofGlwtPSsDKzA7C5aumLeBcBkx%2Bp4KopgXJ9orTj7zlFpHzaqOrJkkZs16qGhiedD4vdUy8xYMtA1sC9Mq%2BZ6rHo4iUINfZnq0sFyFpIu65umV82mvM1KefcREeOFC08tnwml6RcazCoFaTErJhSCaALSVj66CrkqM2b4%2FPS9yKUA2gSjOhc9GiyDBnMQpLzvUm4QlVTk5AUBUWN0jZLWvUZD1JJ4Kqx%2FDKHQLmKyirJeWxLobhnvoYSkjDIleTABjqkAdq6J1zDftgeSA1h3Edy4dZHU6gv2424cJClapVw8xCQhyv8kM54tRPsGAdfMACXIjProEa27xYJrwd1%2BSHvgChqdIgfwZS5Re9iRxjGQn2SuXLhLAcEUz1jMUXklop3scBQwxJj1EER6Li7yocUuiluDJW2bU8d%2FrNQnd83fvsjoCve8U%2Fd%2B66FpZxz9zERBpyUFUp5KOjM60DPTt0gtNwGP9Yz&X-Amz-Signature=9ef73ac88a031e76dbab6e8092af020d8fc76b4ddd87af1bd687b7a60e58b6ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

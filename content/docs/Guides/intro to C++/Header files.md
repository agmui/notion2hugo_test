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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RAINGDU%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBFXHP8u%2FXyEveCkOPRDNIe%2BNAss0cxVLnqUBWjvQmf8AiBV3V7YPKK0WlTrDCITLd70x1S9PaWIfetvfPAm8cHtwSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD54R1wlCb4O%2BJXvOKtwDOy0%2BFzS1UY1Rx%2BbHU5MEmIQRWL6y9HoQq7mbqG0GClBgh2Ltll%2BWUjcXZqWunGgQ0up%2B02x5YloxGN9fGz3iH1d%2BROzXF9dfb1kVGAk3NTKPtioKHPI58kGZ059micPNbe8hoJuUt%2FPeqTEwtwOkNpnyiVowDsA3XFLsADTbfuB00b8h%2F3GzDJyU%2F79cc8uvWe1t9tATn8QBhFPHAdvJiSjA0W6la%2BGPdsQsX1HTJdFhk39kjvkPyXD20lq7NgjUNOiLQMeNMmkQ5e%2BYEJ4xTqCZ7hbf066UVwURFDVORns%2BJgGmrfTXeFapETDDrJaCeQiPne0KDFridm34%2B4GQ7D6iCRQWFS5Tfmlhazdl84Rmfg2RD2KvfiipXy65%2Bb85z4Ni%2F5HXZCcWnBKXOE8DxEeEm%2FafYjSk5oSmUMYNhDvb4u1c%2FAz1GpR7374%2FIxLgRE%2Fnw5gU8UapvjHgU3s7AZ9B3pIWXcp6EJAwvLsELH5xOBnzyv7fvLCTaEM6EvaB8CgkVutFrg9UT3e2q19eOjxXKi%2BmHIeK4aUSyHULKFltsr61I02PTfCaTJMsDm5LbLK2wqcvkX%2FgnYGw0%2FALYzvrO5DVjY%2FkRNKQBiEtBL3GhlsLaU1B4DIndTgw7c%2FowwY6pgEpUg5UGF41Az9Zd7mnMv%2FVqj%2F5S9rITIOivPzXlO%2Fmjb5SjPDT%2BWoaQ7LgROmYLQvQUAqAdufj1qmoC%2BafQ9drB0P2UWfegTF%2B6PLnjfoNLhR6unh9xGS7mGRdpAWFjRUxfljmCQMAbaop3b1lPvCj2trwG1DdHYHHUWBqCIK6OccVFrVajFV4Vqv408r%2Bm2inNMcQoZvGC90MLW92P7TZTAcCtejt&X-Amz-Signature=5dfa6202166db216a749d57b2888c238be05a3fca970613e0203c1d705372b76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

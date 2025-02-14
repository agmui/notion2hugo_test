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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU6YL3T2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDbVITYqWhppNoGR1NQ3iwtJnN%2FtTpMvdb%2BoVObRBOAmgIgJh4YG6HI4tyHXwcRxMu4ZqU%2FdgGgeCa7VcsYlV4809kq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMNZhIpZFJz6PYtFICrcAy%2FwWXK8kLmumrn85FNf7L4pNxO2Fu4yBw13w090VY8iBSrcfOjRGvfUakHhW6XXt%2BalKJIauojFXtPp7p8IQordup8IZN55EiZeFBBH47Wyel8qKgW1C%2Fn9oHEnmObnckA7yglK%2By9oDXz5DZqZcmGFjLpCqIEsRZT0GusbTc66%2BTfFeIUWPaKLKw%2FzF1xViE4NAMKz%2FN06Dr1AQYdUvusjTUJhqMBhIV8TG4Y4snB7j%2FXqplfFmdXt1B4kxyqK0BN9S3LpWp1tJM519GQE1NYjxCQky%2FIa2A7mnEdtuX1IaYSyfyPpK9o3cynTdhTWVI%2FYQRaDklp%2Fngw6zvi6hNErZMz9PUJgN%2BwwHtMPzZTmpVDmoR5Jp1Rf5qDj%2Fb1J77UDslxzHF0yL5%2BtHu%2FQ47W%2B8iH8X7wiVXyLbv3366TO1xTm89SLgsqyLDLiphgL3oEIoyUJW6zGRoimnOX%2BFhByzxak1urW0cIL%2BJDrYJUgsi8J%2FeYRkvBVL07AWbEkZ5Th0cUoPFpCAsZmFI6u4%2BEKCIg1EMTrIFIblK4ZcwvkJugB%2FSqJVyCxy9jVZHiKMTi7FSrl1PeZ9IFD3erAx40W6UUfP1ljmCKDXwiB3KKDWgxtHU167LSUTsVzMPvpvL0GOqUBPpHiZ%2BG4yWSLA50aezLJSDM5mBEZHRgxQrWglDJbsdAYJJeFpP0vtobq%2B%2F%2BEXrf%2FLLaJ4gEfR%2B3kfxUMkEswAcLb4iyJcb0KhqfhqRKdQ6uqdpMcca7y31wy2%2FMVEhHhwupsk72Xy1dPPeoY4nllpz3hh8nGFL%2F6XnPqSL2FwNhHkuIZSRJWRxPLgZF%2F6j7GH11zVJpFVDefoWWjC6tl9XsyDw4M&X-Amz-Signature=a4a266aafa41adb6098be6d628959facdf259000f0b2b95f5f050fd5bc1d11b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

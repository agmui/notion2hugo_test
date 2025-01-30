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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRORMGFX%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGkQXhVWMYm5dF9zKVG9jyO7q1qVga4jOUsLw09czKsgIhAP2hHf2YEPjKDrf66bF9MftK1RbKVEaoEQc3AOoEDlpMKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfQqtwmI%2FCnSyhB5Aq3AOSObZE7OOBACj%2FIhTgGI6t%2FgC7TTKSg4Wa%2FDaiaFvQiOiZpCCaD3rNd2q8YHyX0wb1GcFsKNtxU7tipjpCFSBzcP26T%2BTQ9Xu1vuKT8ll%2FTOkErg4e66a9uD7cCVoEIA%2FllKGs5LkXg8gaze8MXVq4xAbmIpBPk2O401Wjkq95q5383ek8bILJ3ce7wCIJEhonXN7WNeQCb%2BGi52IgLGr8q%2F6xgy3GycoQHGk0L0USUMHUijwc6z9486W4tKbQ24pj7rhdl7qMJyO0kykTxcKS1Lr%2FUpntezKbD5xcLr9URV80iYHP0FT%2Bz%2FpcPs%2FQ3sE8Px7LHaksXwXHZqGB3q1aL3azoCU9Rpt2Wv9jTgYwPfghRMJ0S56dFjRucrfNBCz4ttthBhnhIXtoQVbLBkUzCG204LI5L8Bktz2J3p4oVvQeRaZP3OBqjGEm0JlA5CTMJIDakdSTSxdPvvUNOY81i7ZmoxZFhYu0Ace%2BtW%2Bv%2FWaX9f3HkHgHf9iINyGhKXeDijpMxr2RxNJ070%2F0y0DPjkZ1pQ0r3ujC82ld2WOuz3%2F3UimvWsCSrqLIYep9OZCkXMmnkyVRgO1LBoKAR%2FP0erFd%2F0Tc9x%2BlSXbxeTCWjNdeA05je0WzpmwxTTDGs%2Bu8BjqkAd6uCGAnMT6R5kBAtHtKyxnDlQ1nwZ56YY1aHrJi3WwMHtAjxCopczzwhkV2zrsIHPSa0mr6BjS50LzEOo%2BPNkOyxuFP2DqTla86c5LWpZogO9bpihbHKp1STVR%2FCx2tul7Fr%2BkRwwXKau%2F1HX%2BWePAHemH6YEfqCzYlzxNV16Ifgz9GX9usakmiTmdch8GXf4cI3T9AY6UylO6xS5Rae3sPMoRF&X-Amz-Signature=2dd5790681a139f35bbe0d0d59307c3b149ca19d8c9dfd50418000a347c047c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

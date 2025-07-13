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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLTM2DNM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2W0%2FScTL2sbJgmc6wyzyolWwwQsiGnWzi5R1eutJTOAIhAMFQGtdv5PkKd1sl%2F%2BPH4KNubHYzz62L0pZh%2Boyu48qBKv8DCBgQABoMNjM3NDIzMTgzODA1IgxHkXR2ltDDgi7ztH8q3ANgOOMfChL24l6qoG0ucE%2BnbWWo3mzx2k0mfDv0q5UPV7eTg1BnmzTRJLZqrar%2F65Lu6vtN0bvK5yFm43qGihHZs4strpRdFGA%2BTs1IczhHdW7Xft4sIE5UJhJjwhGhJ5JYwIy9TZn6NjxavWsOgljTCvn%2BrVlGRj7RbKDoHcL87mtuhoenXhyeIcaPw1ETzK9pg%2F8FwZB6neA1if0rQneKXUFLN0XwJOlAzxZrucdYY7PpPgbAKwOp3S7PFfjOTdfHNiMk4QxJvfICqMpgR7LOlmjhtkPPWEdpPa%2FHD2%2BjuBcOkqAKN8wyQL2UDJRtCAGTjM5NGgEZ%2Fl5qJQkAdhFyHsWpOPG5cc1TtqXIYDs4Xi14kysyzDx1uRgLZmkTtYMgS%2Bnbv2JDREm3EwmcdxqfK9QeSThvGAIfA8wkb%2BREKX%2FpoJzxy8Iy7z4XHNyxR6c9%2BASBozi5FrLBCWoZ4ISJrl1PRbdde4ruPcHmrJG6DcNMD4mrOeIy9x71APFzWqYXAK8tZuXj4zCAeZftJJ0oswgT1V%2FBVtJg5H9l%2BNCf6lRcTZCfrkFwYH0MzhzK0H3MZKclu%2BypAw4ZQfbeCom1JRtlsfKskdN8qqy%2BrZ5OGcqG9ak8mt5X6ean8DCuls%2FDBjqkAcK9f9oN%2B6TZ3s0dr3TADQBZfu%2BrwB5HD%2FWSZ926R%2Fby2coQdLHALrKSH%2FGL6D9aWqB7e%2BJzaDOzGIKGV6moMafSzVSo9l1%2Bw4ca%2BkL6z5DAiDKJfDLCU4pHf9YbaN7IvO2N0l%2BVGAw%2BkUm1TcA%2B7sNIg6Bnjplo3uBeKcrpNtvn3ukZAsfxx6mp6LNu%2FtW1SElRBGh7j7HW7VYIYDwNHwIwDScG&X-Amz-Signature=9e9a41166a9a0d2ed4771fa25ef7df949a5ff15ed45d236bad3ed682ff118fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

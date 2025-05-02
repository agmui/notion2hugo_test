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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSDW4QI%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIETOm3xAT2Iq%2FTHoKlkLQ%2BqEjm66TYlBypJWBCj0qBCJAiB336RyKEYIB1J4T%2BQluVBc3RMVQaX1lHVs5zLiBaOEdyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRkjzoeDos6xSaqQFKtwDdX00zRYcln1QzoKlmqZi8LtW%2BYDBtNwtOdo1guyzUmI60WD14NDPQ6u27bn6qCosVzul99mkYkyNz%2FJp3LlhMfTGaTvexZiQr2PdSjGsYqnaboKE3HmJF2tXyrHtAWt7lTdyw0BII6h0vpBXrERDWE7CP3tdmMO%2F4l9Lr90tD0Ke3wdNZjQf1U1WPIMZls3S9obJ5jQDGyBFqBhRozOAHLV0cvu69S29lLU9CwSsUcve15xUR2BTMttkoWBUKxHBGHxGzWSdo2Kjei7FoxN9tkV9M5sD7hhuxgW5AnUtSiLcxgQvlt6RLiKhUxwSW4XerC%2BalLHPKcK21xFbzgeG00eb9tXXbI8YMnTKbTHvPIFQIzzCYZ6G2cN27wDG0omAa%2Bz19jEAeFRZ%2BAFlbpke780QwpQdj%2Fifab5jo7%2BJRCLV1Y2R9l3WgZsfGuRF5j7FncSlKt3yjLW5XuponccGbPwGpiExTZyXdBLg3jDHZyHYXU2sGAZa8WL7%2FLQT%2FUJI%2BA3NBpjaDLtGvedAaZSHsDxyQGd59O%2B0aR%2BipL9OqTbTnOhVVPXX%2BNhvB9%2Bn6TnHz0bJzn9WQmLNTSy2xp%2BVCRPsUglH0wQ8xo3o0d2jjT0%2BM%2FYsNL8uE7LKrm8wq%2BTTwAY6pgGMPgIljWDWChMFmU3lRTEdiSDwBbhfeZynpj8r2c7LFMJuBvkh5ow9FsqqKOsGlJaMPM6u7%2FIQteWLi8ZjgqGCRBcZjZzt53Nea3UB9FbHvHREOZOwnEaVCT26Iqa1P8Wf8MCNR%2Ff8dCjeWyvE1hq%2FZsb5TLtekPSPvoLaAnbYopcjpGqA%2Bx9wpqJxp7m4G%2BUYSlReVd9jpeXLng6mVHQotnLPETaS&X-Amz-Signature=6842a09f73d3b2df8b0edad5c05468e6817aa3994440f8444e3536686f9386a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

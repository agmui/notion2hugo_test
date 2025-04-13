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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMI5JPM2%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGVqo14sfIuH%2BR%2FaINY5Ldv5vsuOQy0eijeOPQqBn%2B2KAiB6ARsBZABrxXMlvwcXNP8H%2BYCttkcSy%2FJO2bSMhj%2FfpiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9zU7MOSQ2cSfb44%2BKtwDyrjssxD5NhuOokw1NVp3NtzlMtQnqS8ouwxQfTTBFgeOsIzNezzQubiYSJZ1QxgRrBIcdGEN1E8%2B96XAvDOsXnuFj1E3%2Fel73e5HKkDbbqGYtxneXdWOfTuBVmuZTWARoSbVrftoV0BsHl4KsbDsYY5ukZeK%2F%2BBGByi1z5cKof4FiyoDAlcWVbsFxp074Ag5tP26gkRfghxxkZ%2BbGPfb1%2FZ%2BAojQy0odFyDUx5UbnitHTdv%2FiWANqeBiNJsUFWDP1H8DpEvoSprtdvFn1JJ7fXDoIpHKf3D9H3Bwq9XNErCCJpLAxMNkbRVPC%2F91VPmhpsMHyvMZwjSfN4SlX19kakKZqR9V7rqYwSgepVuiRipxhAeQuHWb4Fs2gskP5T667doxKkz0LMlCHSnE8PxcI4v635bKgykNYYnBFwCvF7wZvkqaQ2BF7ReXY29hwNHkAnVNF7EVAW8Zv43NT80qS1txLuyiIiou3e8XHNdcUFjAH6Vju6H3S%2FJ4qZGV2chefbNL6YF4qF19%2FldHy3ynclmNi3yodMpENFtkmgpCoUAx6ByPmGPkvibE2D8u3r9FjJ8krT3GVzWWrTDVXSuZTnTH2ONHGEgEjvFGv2nXuXiec2PBzrzRlG1c2G8w073uvwY6pgHfRbzkbVTechB97DlaHttG%2BiMHfVYwXIo3tzn9nbGufHawumWChZGu1TOteWTu53k%2FNz32c%2BA3l7irj63Yd4%2Bx11MzQabfPc3LllwZ95grCSEhxZwI%2FUzYlKH87%2BVfY7YKbCK%2Bj0lJA29ekWrF%2BPY8qCQQ9R8RU8uqbFKTqzBtJA%2BkRJGIUdKAHHa3ulfvgDwmTjOO%2BTwF5UJw9qEuDz5OWrkij1%2F1&X-Amz-Signature=41a4463ad6fefb25747151726147b0069e74fd52762bea2d897343ea4125cb32&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

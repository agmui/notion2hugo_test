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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662YT22Z7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtzX5Zv1oE7ht3UQWr7Vl3%2BbzvLEzkZ2GQJQ0N5wxttAiBN8feyyjy8fr3r2Gb5NKcBgldSUG8h1%2FJRXCoM4pCJwCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMIk5u7gib3oE5%2FU17KtwDQgmMhWygJVENVcDC893gkeMxl92mbEJbMzxcnYGBpm3EhE4ReXpkx5Iie%2FR24FecnURyqXSADuIADbHpfgnKhXLYe4V1GpcSv%2B6hywGvWH48U96aVaN2m1%2Fz0rRaicEGHq6GL9m%2FAgW%2FnW1obrEvlxXWHEC2SujUCEZ8Egb%2F2AlIGyaL7bPbGWC41uXn8xG9kEfvnyVr6XnC6vx6%2FBP1a0g1aOLsz%2Fo0A1LbS8m%2B67bkskGdoeLVVu8EB3BJtR0hXRaWpZNyrHUCyBDjf9N6nRQ%2F5NIm7UR6esW5RvosgbPbC3tgwqLE6uSAK0VKvvZYN6OR5igGJdVlt29iHPlgSthL8vSB%2FaK%2FNNyFk0Oy1VELqoWOhP4L7Jm7gbswv4fdyw7HaEQ2EH98ojyU01NR2oHnO9LI%2BMk%2FMyUY%2Fcfyb1MdQi33tRaLRA%2B7RgcOX0y7LL7Va8Gm7TiAk8T5Vs2C0Mdh%2FzVGhrVqbWLDTc%2BgRwLHyy4w5%2BBzMvXyvK42hZsd5fWrp5KRTe0fb4KwDkRSkReYFYUrX8N6%2FALZVDXwV4ewOqdjT0I9P2zoAiLafnKgyHlOpwyEdx55lNeqaIoz2tzSTXyspafJs3OdLiZyE3qK5Tgzi3wvjmXQU7swl%2FzyxAY6pgE72xAxor4m5bUf9u7j21vvw6uQehDMboRhw4TYpKvnMpr%2BpgavTQDLLFTk%2B%2FKKzz4scGXNpevde%2B6mHbFuA1tILauQOy3cXuLXIQiI%2FY%2FVcmw34tiQ9SJ1l183AtIyjV2hCxvJ4Yu2SyVzgOSaIzT%2BKWJ5xvos8jzT7mPMRpkC5zLXMvmuTNACm%2Fycd%2FzT58ajdPyCjbxQRt3UEaSuE7ip1XZFTz27&X-Amz-Signature=0abca7d269d0f39045bc5c941f0f7c634c8b54881d7231fb78d0fac4c52f8390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

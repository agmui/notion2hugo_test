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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MKFPNNQ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBeOOXOjW3qeLTVrPjJZzWzHAHPYD6o5HQYY6UIcGKBAiADAKFhFXyOWuNRKrfjhVNop3%2B6S41bMfERK5q5UX4NdyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjDlkQFIqfvKopZSRKtwDkBvu9N9XqwlY7xQoh11m%2BCEiefpO1GMlrlQIbUkw7%2FP2NOT7qt0vQdKwxZ3a91lySbzYacvHc%2BTAOs9%2BsWKnEZorUxwaZjHASVqPCuYp%2BEGRJc8o89Todmtvi4F9Flk6%2BalJuiIZRwpem6yhsdzsRW3HFzB4QZGwP0M5SD4WkvftQ%2FSaWNJpFWmCoQVMZwU0zyvuReWlrf08pOXK6Upwqz7krH6ZjrbA368v%2B2tBq38Poya1nHHHUnhHtIr6b4mf%2BOw60oOYREn2aTpCKryroC7yl%2FhEpRdQVfFe2xK%2FoRAhi6YjZvpQZ7YQ0ngQlBq2qIItTtbcQcFrnYw0Zrdtu4PSbaUWsOEPDY%2BS50bE3vGlu7EfUAGW%2BZq7phEZjjDeVyXKhmwLvpJ95Zt%2Frn5cnwSRLIkIjOj3ZmkWEHOeOGlHknVPZ%2FV4AlcdLRbhQ6UFQsN8hFtf6ua2v5WduoREV7eUXvERf3fneK%2BHvYPJGNeHJMhys1TU1Nc3OF1fSLz%2F5S6ECZrpA%2BE45ig%2B0sIcDtKe1%2FQhaq0ub1CuRifDlbETD6ajP938CiHLovdnvV%2BYc6apEeyvSSoJNNjNDugAerd3GwzBPGikYm%2B%2BJDy8dLjri3lotuaRJkVjrJ4w%2FcTswwY6pgGp6xejcdYnL%2Bx6eqSROkd900HnICXNd97G6IG25mq1U8vV1oF6NqIorfVX9U6BIySQBv%2BhjjOc0uu0XLlFIm3bf1gHv9cRI9fGD5wBdeVT7%2B9lM9AXpE6XVn6f01ad%2FhflxDfI0v1Kzm5AehnyZCmBJpDB23ugpnrVjOxu%2B8u%2FJXj%2FDRAuEFrb3C%2Bg1Og2fkX0IwCfvPxw%2FHTyMnRRMp4ufXz53lsJ&X-Amz-Signature=cbcbc0937ed86721e10567a75e14db5fcff5406cec745cbb700dd66f3dd3484f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

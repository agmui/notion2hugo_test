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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TJCWONI%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVEAeCXPljGovhRRTRtEKpm%2BQqLiw3wIpdVS22aSyXmAiBbeDqzrldR%2Fn9MX0g1ih6KXt6rUeYksRM3lrKgmrKpYSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMWpmNN6OpwZzMZfGVKtwDvfWFNxXtaMP71hE7lqTZ9L7d7uf9xgM0tuqLeHt0DRFMT%2B4YYG2GT7kgKOCsaCtqIfrLM9htCztUk5X%2BWyjTTkXcy0QL72xg2uy1VGg4QAwqg7HxVrtNL3f5dGMKbz%2Fwyg5hh05BMQb6kT8rM06T0ypc2ZAdWg2PQblqxuU6byvfFhmf0kM1RJpd6pEb7QJ0VSup9fyxXYFP7GYDqWOTTuqB1XMT1TMmU72v%2BtHutSKPKpyALbfse3Fg53A9ZAqO%2F0HB8oxUOuGSoVdSx8jYhz26v7xNirMMKj8DydVkMYSBXfZPwjxK0hE27QIG4nC2crCODqZxQFhVO8FI%2BzxjdmoZJkDD0VAAvnGoIeVQKlyP4esQkxcgoKdTaySGt%2BiIqLqkZtfEalXfFMY09%2BE7MpRVU4z%2FKih9K86cVTo2yo2Qip0bXh%2FQKr%2FTPhLdU0KMtC%2BjaAjK6p1uuMhkmCuQFwp3%2BV1g%2FedUE9ThzXbLp7Ag5KrAnaLvV%2Bl6Y%2B6XHUj0IF7yKRV7lIbZFPoZMO94Z96OM0EuyyPg1lU4sLKCfYbYE9Zmwq%2BTtA%2BzPmvHU46ieDLZ1pokv7Ki5wMLbDCLaNkg4DNxlk8yPLgHPc6coYe1Mg6jcgvomOPhjqcwwengvgY6pgEzlUZyljMcblnKqDyuHZypwb3dy880cFPFLMYraJUKD3pBiPgk6tawjYyzoEh9K0DIRAzds2k6%2FzGC86s4ybjxWBbT64dZDZ7pwVv%2FIGM667I%2F8ZijepAJX53kESYd9A5OHc0LNpJ5c5bnUM65YNtCWCuwwDCEBbbJVNcD1bNS7WuOm8cNg4f1WgC5H7dTpfHX8DNdnTvV3Rxj%2BuLJNvaLKahXfYlr&X-Amz-Signature=c68ed2b1e6291a753332ac1b796473ad3b89962661605bd76f21376b9809085c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

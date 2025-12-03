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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUB2ADZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHuvgZtWSq22O6OrsVFHOKD%2BWu%2FvjacLrEA9uojVImHlAiAZevuZwTZ0d4noz0DF1IFejZghAVQaD3%2FlqnqA3X2b2ir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM8W5BISxmqow3lm5IKtwD1dq932YIqJhtOgAH9bTGl79pO3WvgBjT57dD%2FvIN16nl%2BiALhY5pnUipdF4jHpOWuUXd%2FIesMwVa4Bh5Z5EkI3dYtx%2B6QBEZIWoDEVsWgzvq5QZHWSZkJGd00HyGmodLpURSPQOwdBIDfvmElZU%2BFrQ%2F3FEcZtjYeu9vSNnwqwDR00xmS49FmFkTZml26G06qMhVA8It1gm%2FDe7rxQoPXLWijqnsEA2PazmNvtS0DxY80J3%2BZ6O1IBxTjbBukQqhiKfgwqeaygjlQCkVc0K%2F48gSIaBuch%2BYrQUu5dnxNu7uru8igNa%2FpVOrT%2FEjeg4gEXD7bqyLRGlsMSkyd1O7ABVT8%2FKxI%2FdN5K1yeWa7s685T0qRtRV%2FrEuC24kMykWDfqn%2BN9nojEA0%2FwHcpiSsoqjBuYRwwqVF1KWqWNiyDwanP%2FQhKzV1C7wxrXjY2sU6PSRjvuVLm%2FR4CUNgddpvBKn%2BXy41GfJOaxY8rXsKXKjbF8HFy6Ak7b0la2%2FfMBf626yGdq3eIh8dPBQP%2FIzeuxHPOW6FUj2lrKaT7bFP1sGp5Ob6bU02d8UfRZbuX0axkZ4JdbeuU86Vu2AsG9j1gVwWjtDLIjFhOb%2BuUCjA22tgTIciTpHbs0o84Zwwi5W%2ByQY6pgGq9p%2FGh0gk9AsL4uHQ99rKlrBuVUIjsTGFkDlGkErnRWI5EvK9JvmvDA0qnz43LUx1eKoly0n5ufIVo9n0pzn7oENr1EZBf3Codb4OV7KqS%2FchI9WuqNicWapS9cPTJe98GGZyZfJn30FneK7euUMaP1yYuefQQojeQVV1hnWy6xobioQkjD7Km6dhbH3oB36GAItH6INdXNIfJ3p9QskzCs4Je2uz&X-Amz-Signature=730ece24d59d486db148413d97627246efcd0fa4835b3d8c61aa4df2dc80a4d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

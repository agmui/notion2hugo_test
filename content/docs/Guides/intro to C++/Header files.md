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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJXJC666%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDbgmBRGcieuk5WWAAxu%2FfHZb2og93SisVJaEqiw%2FDBBAiBetb0NuZg8edTPIcIt20DIWKLaUQzGHC2sqAD%2FuyvfsSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjR%2B8u47nKMNYaEGXKtwD%2BtkFczFvRZUKR2g1P7tnlYBQnhdg1f2%2Fz5fBPfGggA519AU5R%2FqhVsC%2FpaseBjXu3ZBzCLz5rG1AlidamdCteJiM0DE%2BL4hgtyM36wcPzUhJ00YyLt3zMPy5g0YhU%2F9XhV2ZHDY92EaV3XTS148swGewGVucjKwnN32ogz833fmCtKXib9FtGaoJPtkpRhTeettTQ3dtk9NkHwkGuN5sac9k41X1fy0%2FSDWW%2BDBHDsIhR96rz9pfvfA7Bozz031V4D1bGZSPxoSHLmu1hIELbirj7zJqaH5rLXcT8%2FkbSzVj%2FOJzYX5bmADnJa4uytpqeSP%2FoZBfDY4zpVgxI8tem2RXBaySXaJFYQyqgZtci9sCEgpNwtd6DZINO1ufL0iBYZ0JVioGjTdIi0tWGm7pjiTKcx5lL4OgAs7jP0ca6%2BPy3zfVFoSciIEJYdFz4RrTLpKDjk5R9ALAwgAw4BkFmXmVX4x3Sj18n7BXJN%2BinaZ7mEKwwOf%2BRXwJchgzanvbGe8enowaL6X%2BCJUHobwHc1Yle2C9LZcbAMw68o1vIJWNEV3Fx1bTZbe9ATNBQHsIPjcXboj1MHI8sbJrBmfpZaYBIg7pfEWJDlHOba7Cbt9n6EXw4nr1TGLoaqgw8raLvgY6pgE6eR9wetlk%2Bm2dDZv5n8UW6hLRiBJVHTJKLlb7BXBOopFeJDw1ALTQ7D9fsq6gO114iSPZUnRO3yjHJsogfkSx1J3kcW%2FoU7qmKdDPnQUusqAsa%2BU0n%2FIsSaBC8PfhjnddaH9DDRf9uk9u%2Bd6qHCXLqhQ%2BH3PwwqtioLR6cL5M7FW%2FOrqeX7NVwm00iU7FUZZQkrCpomfrzii%2Fm3X%2Bcv8GjWZ8DDh5&X-Amz-Signature=feaa1186e550b6b41507d29a9540f9b383256c401e892225ce5027bd87ae4dfa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU353T6C%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCID01E7ANh%2B7uGiI6ls7XyGbnMTQMZf%2B7%2BdWQ93JcXgXaAiEAq5EyECOJxtuQWyWeis2khVXeOAZvjvkogMgP6eaVWxcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDKuAJRndlou8xhPCrcA%2BPH76HBInw5kYI3uRM%2BRlKZKj2bS%2Fyxf2QShirMsc7F%2FabNAIGEHwocE280fTK7mygA0rCqD%2Fl5%2FVyU7be5yxTWKbL6cHm0jJ%2BSPouUAA9WR5YOxSMK4dedz7vuwGSdF94kE3QU6nk93eZlTRbzBPrsiV42xGMOvPmBLK8pQBri5AhIRrTZ7m3uefPqDwNJVqQe96fsgBCaw58bKivBvfjbjLb8yUYmpquCli1OG7OoL8I4islmFN13UBDQjPJmhTNF4ZRGUp4nyHmYjn5OYpmwgYaf1%2BQ7Fz22%2B44an4tzxMXiZcc6OovOAWblOvFsMIzrd581korjcreJqQdIM2a4j%2FHvcI6h5LhJreN2qwUknESeSGaZwcyd39ZHxkT7iXkcV7CM0Tdj7B3rrt7i6FXkYC1dZU%2FDOhqctjaGBUotJnRoD8yeOm7RvY7Yjz1yrSMPvEU9cFVOGP55vLwGlbtE39E2q11yt04CkC09%2FNH8YjsX72hczw%2BNVFZGZUGSQitW5gbaDBz46VcI%2FYwhmwWbt3EmehOLToCIwMiUHO8rwvjll1WHYSwfQfV0PMFBSa4iqkMu2y7tVg16yXVnCmZ5BuE7ASV2wmvfovZP3uAbra7AAJGdHDBvMaOuMNDLo8QGOqUBuEW3n9kYQUQcNys1pM1M7npuJ1U%2Bf0F3LXgo3Y1A1RconvmXy7dVk7BNd2fhCkIQI8p8iq%2F%2BTpERjg%2B418vaFYcCKMFRuJAsTcxJGfu%2B9TDeSCkEg8WEAY4TINkpo5WAllKiMHl%2BSH%2BM6a2A7EAM8Kmu4lWs7zVLSnJvPmpNnzjfwyyC0q%2FwPwA0X7F1o25T9QEFIIUIDdCh4Tdebx7TPlBqlzB4&X-Amz-Signature=9dae4b5d830646b58e0c994c6226db757b0dac46848c2b996006d0448148c2b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

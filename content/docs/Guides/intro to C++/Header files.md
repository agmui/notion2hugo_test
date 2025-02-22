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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDMFVDR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkUSyvRzh%2B1lQ49pxBTJ2Zdd9gLsYl%2FjbyjIZf5PaI8AiBOa72xKOOWhPZ3B7VVfjtYirjjmOY%2BqAWDEpEL8K6QfyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb4wYzW%2Fg%2FcsdV3v8KtwDippNF84SCJ1Pn68Yu6qgnbCfNmFmUeVFQk6iuqKJwU4RBEt9gE%2BideQCEkgheBe391teuZ5EymhYigwa9PvFyzhLAr5Mw4%2Bf%2FkFszi%2FOIrHqA%2B6g1NwXPLFm0jAr8ec3CwrAXuPWb27Azdcd0wAMYktTZghBwhpqJWmqumpNsz7JPZi2bR%2BIZweqBJfUky9rBd2b4bdol2qKJ%2BSALG7XyFlAhg1fbD5OTe192qRHJkCq4TVw2VKSSbIr4yovZlw%2FoYA%2BvwdWsRJhBebY1nN26%2F6FltrIfzjj4k5mEwQUo5CWjh%2B5X0jOoWXVkhFdXic0y4d1MYWRGlQ%2BFpl3mRSavPfRYYq8T%2BtWQXRjpVwF3K5GbIUtz7OmMuOjOaW2wnQPqQgmf6A7HnUMT3pYcng4CdVW%2FjKCWyCPrrwMaoUvl0%2B9aEI8zvPXn%2Bb8NrxBa4xm0HF5JwkwwMStn8TgljFb0EHK3PdDJK9sYCsMg9vYbO9L5BWwoWmycfW%2F9%2B%2FJZd2ku53PTeMXhwPFiBZ65Wby9Ede%2BGdrdBFz5NEcbD6u3tX35yq%2Be2tdOqcn%2F08pdRu%2BDi9NXZdcwzk3TMBwerBcTW8OHozrGpbkFNYa0Eolpi0pz0EVtZnvF77QemYwx6rlvQY6pgF5amH4U5EgF1xWKfgsg6wHCI2t%2FjtDriW%2FbP86yozlovbtJCndRLGDyaQJVX8p07ES1TEJlaZKwcjwwuwx910DMQWlt88TxoVv3FtDni2orewvMGGyTduCLm2UrpYHu8buuN9DpWn5q0pVk2QBghUARJkEveBagI1Tcc8SKLgg4ZCGR3%2F2NF986SI73XOZI4q4zUraVRYDpXLR9KP%2F8LFm0cOeHlyL&X-Amz-Signature=be265a755c7050c5c3c52af55da7a106d13c039d22e51c4ebad38ff5b48e3334&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

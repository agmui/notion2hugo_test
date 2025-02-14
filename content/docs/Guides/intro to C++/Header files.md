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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U67QMNF%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCfW9l2g76ilfF69qSEP03xmvwpaE9etnNNIkxJzXl9PwIgE7BpZj13GFRfvF2Md%2BSr5ygz3yn2UGwMuIUH8LoPlAEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBtxrxLYjM%2F6InP%2BwircA85YLSVJUdrSEWjv7aKzPIkE4%2FquUuLCxTgXohuo3UTM78vsOePPH%2FoSkoBJhlkGPF5O4ud%2F0lWbj5JSf4oVEDZd%2BAGFYCHja59gfymq27qiRC%2FWEaijHF%2Fso9BSTEG8GpdjN9nv8tLCLduAiKQDjniVK026TtnmJV0BdJhkEE%2FXZgFX4W4OjjrMJ6EN%2BbApKvzYD%2Bx7AUMWlq17OjDmpsKzDZ%2BJZLzRY53plYPeEOrMXu%2BqlKUHMcmY1vXHPnnClXnNBFxTHlsh0K1zjZYZU0n3zmldhE%2BT0zi6fuYt%2BnteD9vgY%2F5lVrvGbpYSPfflS6dgKdTaTfEDLIFH6u3mR75gq5HgeWrVxcslUOuBy6I6I49zAcLtr6pe%2BuEJYAr6643pF6QVp%2BEITq78k4e2ty7esukj3gzc0VK1GtRrVOS52%2FeNjXX17XiD0JUQcRvpFFD%2B2wgdwjDVcwJ2XRXAN1DOlc2VkbzDEDy6o948qLGvBiI3Sy9ZHkNfiH9gxmuMNn0PzTWTNBi4pNCaSfti%2BRiprWXYf26ew46O%2FBcHszYpXXlzi4rYd%2Bwu5b3fJ%2BxIEwwovFIKjG9%2F8MGsJjE3ZXJmHr1klKxJQKYbweA2wDVUJH8y7ndFHFRq8S4NMN6SvL0GOqUBcKPgHcY91F4AGBJHLyptRF%2BErLheFPY5JKLGlA%2Fa1bhsypoaNdjsMUxIzyzpzh2dpj9kveiG8jinPv7RSG%2F5o6gV9U9ANMkwGX6JWJU2gAKZvp7D%2Bf%2FYeM7FZuRczfls04AlButPo6Pm21vH6FfM0oDhh4Z8EcR3dHfhTPKPDkOqwR5EJEampaR%2FazzqtjUJbAdNV%2FUeL01E%2FEm9XcbIU0L90rau&X-Amz-Signature=22e1d8b2c749146e67d5da91ffa30bb137aa804b6562a24dacdd9f5e64e83525&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

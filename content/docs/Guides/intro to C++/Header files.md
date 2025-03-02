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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666362ODLC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBKON4HCoq99lFlVOFc2MLQdqOdPXfNi%2B6%2B%2Fb%2BVh7PwAAiEAhZU%2BUklAqZF%2BufdLDJ2NtXsG3WsPEGJrhfhpJTFxUV4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlhJE5V0ZPM%2BJFkJSrcAyhT64egqrLkRlLbv9rbYcGVAlDv2z10UHauNQqqVjz9WZilbDe6Y0OwhKvNTsjVsoGWaawH09THxKkT4h8P19TFY3UN4EmUBxpzH7JnKMS4LUfBqfhCWRx24BUxZZFnYWF5kyoAQdUKpS9qBGjwPd5vlIUtufcQkSJINb9zIWuSp8WqOBKZ3PkdxGYPUpcI8tq9wHWojDfcCVoeuUz94xu4JxrI3TdH%2F5714wNKr1INWsfNWczE%2FZFysmle3j%2FuVHIu4Ic%2FraLFH99TxVQE%2BHkw5rHILbGTOtC8q4e6U4foHrexSrd5gk9xEml7sqinLyTx8coJnYvyHNU%2FMLzXz1Ua8gS%2FvxigCgpAYdWsJZMQInt9SZrIOZDiNEI47LjFYc4i56iIjV%2B0krUBCBC4axVFMjlNd2rQjMS3HgS574fuJozmnEE3tXOx6KhHZ5RvA48BMXak%2F8hbUQD7TvfMOCrVR%2FScjt%2BpMDfB1GYFJBysCQyywjUPpN4dBAT6qeT9MhoyO8ttzatdzzJRQT%2F5%2BIkib6U9nk565Irl1wHG4V%2F5QTrAsY5D33zXcTTUx%2BopL7bjSDtw2zZ%2BjwUMEz9wim%2BBx4DhnnJbeA3I3i2Xkte76FPzJl7p%2F1oM9zD3MJ7Yj74GOqUBNdr1vKcogBgPD7Z21lCYOrO%2BqVFZjEfSco3%2Fh5Ae9%2FCKmqgWmsU%2Fxh%2BMc4PCBHr%2BhII%2Bs8uFC6Sld%2B4nJAbptQvJGPM2a2kXdaC6TJkskkO3kwPzuXgLa0gfW2FccP0tUxbG7xKfwOMZR6qOArPF77KU%2FyqPS49zIn7mQpbshdzgkaLlDGLvfjNIshvdM85nwJDo%2FEdmdhH29188g%2F7ZBu1bZIi0&X-Amz-Signature=2312305ff3a226b3ac4b9aeb528b3b1c74d725cd77673b2fcb5aa9811f7e4bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

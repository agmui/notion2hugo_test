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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZONT3WBE%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCrUbPFNn%2FevMDQxD0thFzbJ5Lx8bx5HfuJomPeye%2BEKgIgK%2FtTXwSkgcRHAFkL%2B%2Ba85L0twL%2B7K3JWJX0IOfLeUxkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGC5a6S6p6EraYDcJyrcA134eKToJt9e4rdnYMv0rO32fTp6M9OMi%2BgS7Ff8ADbUKQhTZyZJacMOPSr5MgMkbF2mLogBtmdH4ztbYkVQzj9XiSM4sY27i3eF%2BvrKukpp27Th1CMWLCq9MgbAaNHbAqN1G8cQc9Dm0ZT4NLfUYKWpMBTpz0TbjRcigBnOusGseYbTCpxWUKlMlTw67sgd7zV1jmzTX660LkgdrwJjSXytoXpWkGOiHj8wn99TWzfVjI7iZ2vWU1rVsdlyxN9AIRTfbxKJutMxxsC3eM0V7hXkGoNlBXtFnijm6Qg6q5IIRpPcHXlcWzb7X6BzaqFu5i8i4UQkH%2F5TSd%2FricDcehv2oS03JMnvXIF6ly%2BVNZR0y0Lfncmm5MUx7ItgLQpZlJ9T0amC6qd2UcTgiOcFqGHUqpigaNpWQg0GR3Q2d7nlI7po5BnZ379G%2BjklxrdUXKIc4TdisuuvdeWTrBLeugsvWuytftyQNKXseGm7EyHNVzODO5zQcYdW8xOZBU1BPwrWlXQCqm3ZX%2Bw9HE%2BNlvRsjkij%2BBAjyLyQvs15d%2Bq726u5IXlZGzhdZmRhLtNQnD44W4G%2FO9so3%2FticHmlSZnYq0ZW2o49bQltG%2FxF%2Fl1cjgwyV2TDsSqsUZByMJ%2BhosAGOqUBEqIy7UjX2BE0fV23Vf5w0CnMtvXN5kf2e4SUoxe8QkHAEOau8VsKT47Y1J03nMtOmOWZZpRO%2F8bdrnivzmd7ZO65OAhhS9NnPkEUCXrdD3fMDQAqeJqkLGCPSjMo1CTGKiBpy%2B2sQWiTtGZqybuMuCwVST5eci8evu279%2BNHk%2FNw7Nmy60A9WaFomKQ76o262mgFgAY9traP%2FW0oXG8YXmOJbNlL&X-Amz-Signature=49bd69423db86403ada0444a2f9ec68ded0c1ea832846e8d53fa094037d3e2bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

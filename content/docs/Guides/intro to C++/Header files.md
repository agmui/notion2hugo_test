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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYQCC7E6%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIF%2FpyR7tf6pdB9tKx2aS6bLtDmMuWUB8kQ9Q%2Fjxt8V59AiA%2FX%2FQ%2F829acd337yWf7MMu5yaQo0tBYUQ7KV14t%2FO8nyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUeSEUIgNA2AMls9JKtwDwGpFzoRXt9x8rmzo5TBR4mM5JtHo1Kc8HT9gnvY9KifG1CFK4MOhYMTOH8b%2FTP8sGZIVq0fyVH9Ig5w7Gz8bZSbJC94RWNwXq%2Fa0sFrJrPBsnvrZlc0KcDiWP41VsjZLnjq%2BopVbs1HpeDFahWchM8fcLg0WlSDAvnW%2FT3ybOqcX6keJwUbEyM3hRcZ0kjzYlP3CIZ7Ed1MIvrpN8l%2Bo4Y%2BkM6O0692ezNJdWFaiDGIKN8SKiahTqcyoCJfdHKuS2ta040GlLW9lit0%2F77Ua3bg%2BL3dh1Z0DYYKpF9U%2B4b4aqBiYK%2FlbVMuspeMH7wmmEumHlt7HoGe2wfCGBD19KH8LOdN65zS5W7TKCTKJ2nW%2FZY5368XGjpvNuf%2FyRJczsuENWJyJCwlD8tkz8pXfF9GalMqg5ifFn4HUzvZIaI4Q1LwXtMVwDiB1ceXZ3Xp6fexutWpfEDVtfZ1LHTgh0BBTzLgxfDYgcHjpo74%2F7BQBylXAOgYNmi0Yt4xsGmPoxC527EV46WzV%2FafJHfjVn4QUAfclzFju%2BnXiqMh4YdU00q55ZaaVJtmgtYelZ9l20z4LLnpyCE5j%2F1eOiIkPeX56OTH9QRBxjbGvJwGs%2Fs4HhJFNjv29YbNFSqMwrNf0wQY6pgFlKR6EArwuHduivq6NTUDvOg28UPLvyjTcTQ2yJb1q7r1Q%2F%2FJzPrl93y4HxmYUxrFocVrWTyEuixxTw3DGizWKx5Q6ddYNBbfMjEKIi9jHnWks3u%2F8nT9A%2B9jlmEoFE3E2Z1u4fuBnqrX7rt1LcyvgrKLL8p5kuzCdFhyadIFG%2BP9Ga%2FnLdw3ZDkq%2BpDq2UgIf3GAYS%2FFc31BwpfW3%2FoHxpbEWAKC1&X-Amz-Signature=80c717b9f2793668800a10fce20c687d028f7c6ab656598a834c66963ee7d301&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FMAKMT2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FAHE9Gk1dOE3O0JKZDu%2FQZb7MmgdO0tz8D%2F1Ez4m50AiAubiMolGzuyEi3sEaqVQpT4kTkJuAjH42Zj%2FtivZSDcyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMG0Kq145dIjn3fpMWKtwDjVkHuRrVZ%2B2Fatjz8hV2jWFZRouwC3Icfj24pvWMaOq3xOSWLxeX%2B2lX%2F%2FW7PfHBHvGsmW0NTPSkW8QWgVn4VXE7w6EEiMIOBdHa%2FjKJJ0xpg7HAQ4ibuihzG0qRMl2qceSXRWFT4n2vG4vOQqk7RCyZxGhjX83bwM0%2Fn9sBSf2KtmFpbyc6vHweY2ozsuLnleQa6TU1Wqw%2FvPf2%2Bihck003H0ANIDtqKlw5pMd8nEDzuMIz2ZOuQi8UzMIQ%2Bgufc2n0KUBVdMhtYQv23%2FmS%2FS2il5mO7NwQ5WI8W%2Bqi9UqkaQ%2BrBGENR6g3MAPz1FrswOyAPZ73La%2FYSnfAi28XiZVlJs2Q0LfuYQdduexYjL7rvM226mpCL9MZViNCsoGv8jNCjclmnGe9d7tq%2F%2B3AsbE2qNr4aPua6%2FdbRwm7aLxExCzazmqG1pcA%2Fnt9Fnp60H2BIUbsd893rk4Gr0VKAvGLhnnkyebVG2LmE8%2BcCa4Jkb9bWGpD6pmhxwyn5kX%2By1h2HC9qHjKVHsob5V1atOoBNPvyMMQHzwLRzyvRvKfwxA7zQP%2BMctNQKM73kowXwQbt0bZl628Nypcs74fH09%2FNp9BnnTlS1djuE%2BBeeyjK%2BRNX%2FgoK5FyQSOYwloXOvwY6pgGHPI6hq15jO9lgThJoYRbKGRoFja6hQsYvNl59XsC22qREDd9HUpG%2BE5k5ZN7IYd6qHOqc%2B1AD6hYueDquDsEJhl%2BiV8c8%2B8S8dLbcnQsbRqZvNQtujzbXjdvRbT6UDFfHwwXvjK8OZ%2BsiTFOGkolJGUKF2KcwDgJ6bt3gK2gSlC9vOtUpV5xzuFTZ5uUlBKYUl0jELcHUou7B8cLwpq9kFH82JPbI&X-Amz-Signature=4677ef0c691c40bee34443669eb048f108463df39908b9619ee6a5e5a00b8773&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

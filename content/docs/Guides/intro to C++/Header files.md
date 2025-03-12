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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6YT4NA4%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCQxZHKy4MKuOWyqdGXjNfALcf0KNSbx9yFL6VpbrcbIQIgGWvxjZAdsn6pbQqU8aABqD%2BKWND6XU8QkNajrwBXgoIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHteycM%2FCodV%2BFyEiyrcA21uqHhWc25ZMtVJNFxyIM8JkL8WtYZjczSJM0LNu%2FI9qgmuLTCBWXYrAOVbU2A6hy6jjjcM8bgyQLACsK0pKWYPx2NNoUy6jDcJ%2BR5KBKAmEoQyV8GKDPokJjgzSv%2FNkfFkHoNkawZ%2B%2FtWtENjQIVSaccq6X78X5uIT7UD0VLW3H4pnEHJSHoBMf%2BsCk2FOPkWYIrTtOoRAD%2BKmw%2F9y68y3uceTlJzG8nHA%2FyG9VcBYFu04K6WK5g%2FuUYRZbo8r0Al8K7KV67ukEwU0MNI6bdkURo%2BG1ZbiFKG%2FpaBpfDdAUoX8gi0f30L%2FQn0TLJ9Zh%2F1%2FIscHBs%2FQy6E1H7OPlWTWd8rmKQ3TprAo0swte%2FHx0TkgaPDW%2Fx9vThWNsBUgC0wY1QwII6CmwMIilC%2B9FMUZn2CR4urNb8BXakLDURIEwJxSqbQpsqCDkxxKraWBRqOXXxw4K3D8WrTIZRb6TG23A5HpdsQcUYZSa13r9A7qHWSxHposvKBUhQK37NZMzlnt%2BF3QvW56JZ1AlmMNT%2B%2BuJw7bh%2FVUm7ncPtoX0%2Bcp2IBfdqqt6vYZ2hpfCbU%2B1wqxOlAbtowehjvkThIVW%2FmI7%2FIhKbikIQwJudeLVG4Smgd%2FL2mkrG7iD4SVMIyBx74GOqUBxMr7s6L65rEXFWTWBbyvD6OLOVRT5w85QPMjmMMjB92ceZv3ozPyS1Z%2BbDsl%2BdzpBjByZdJeLcV49lxu5u8b0AmL0Z%2BeKiLChhRvJM2T2wK4GV70XoM%2F22YWaUd03GX4IPm7qJyJzTPkWxTCjXuM3k%2FvLczfZhpzJDrgMqu7X6xC0tyNYDQehyKbSyvchRHdb7f9p%2Fl3jOqRo8i3VhuC84ojLwWc&X-Amz-Signature=106b27345b8579f0d39541e64a4930c27712c8e21216482edbf93a79bcd29651&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

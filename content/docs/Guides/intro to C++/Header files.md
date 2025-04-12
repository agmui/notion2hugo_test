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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPIT7M7C%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCrkBHIodi6BzY2PLX5oPuV2bfFJ4ysR4fsjmbff0%2BDxAIhAJOYxzpFfONSpeWmF9NliLC3bgaVkZAN%2FktutTZZXKOCKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzplnzKqXdC9B%2FrWrYq3AP8CbkLggXE3vyCayiHUtvhRoANZxDQ0v2jVo3kujlEyC6c0I%2FsoPjk%2FKyKOntVufWof80qBHVnfx%2F8LjImQwV5MQ7J%2BNENzS16pGRsYx5P7HfC9p2%2FaScV1seBDQONqyX4V3ysL4n94K180wTxiS82YFFR6cQYuu6A1Muz77gZYJrrHMjvmYIoJmdo%2BsZ8SrliFphmgv5q6rfFwSSOIsd3saZPpElUFGE74iZAz1aqgHYlUPQl%2FzK3dFuJJr24nEAgwZn%2BhXiz9BvhMc5U3S07cr1G7OSyf%2BlJQAChW8vGDuKB9erJRkOJY8zU1%2BRZv7wgxl0bP6v08aO5TqcxaEsR%2FeFxBfJhjByyj7%2F%2B%2B1f6phSMfnVzVq40ZKX4EHLA7RP7XJYWlNFO%2Fr%2FylY6yMusHGJnofndAme%2BaG4JCfhyaxIAgna%2FX6tzxLXY81XykHUdhv%2FyywWHv85p2%2FE%2Byb5%2FvlZyWewm%2BmHZcsgTGZ9Ck8ki6RIOgt5TIc%2B6UeDV9wwANJTIxOPDnLZylARKptczSc1ICfNYpwU8iZ2nx8OfwPOiX0VeLJCqMLfvJOMH7GfsJLI5eqqE4MyH4BphSbUU4K2qD94Gp9Lmb3Jqb090xBSVTwm%2BzibAKz8CiazCVyem%2FBjqkARvwH8nSD8VDgEgJa6WNz%2BirnXta7NeJRFxNlGZ9qECcuKB3zVSVGjuk3AlFVeufk8ebhxL0yeEtuxnj%2BqkwMR9yYX83lxqqj14%2Bsp6XVpS506gkhIHQQydpgeTmZgEQTbVVP3cnkn7%2FxIzB6iucBlrjFuS2LZYGba6jIN0IyMWajnLqs5rDHB3QazldGXuJed3uyrn5rYnCJgP6HlEfJv%2BKgtZm&X-Amz-Signature=832f1a8832949a58108095b37ebc6f9b12671d09130458928c81c916e2ef2f68&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

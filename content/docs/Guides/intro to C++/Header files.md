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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKZNBL7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCID9KFTS4uqszTMeOZYGHXnQecRBTpRe%2Fy6h77670o5biAiAi3IgR%2BpvXHohy0GBeMOqVJAsh5sUTmyKxhTpXhD0vVyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG7MrwPViB3GxuxkJKtwDRbZVzS%2BVz9Qjs0EZGhA9wUMvuInzjF2Zni2ECUNjTwJjXOHiwqkGsNMsra%2Fw2nV3tTjS1tG%2FL%2BXwTsDsWpG3zxjM7Ewi%2F1zc58QWAKXCVJF6S6oHK%2F9N6dTiStWz33453UG8owAUFbQ94h2qm7NWjfOrEueX%2BPptvUVKn7YfyzV%2FDjzefesggdSpxuCkS8q15L4TgPnPgQHpek%2F3pXU2mLK0JNPnlC5ouEwe%2BD51nZyEU%2B1q0lC0oD6grgWGZ1pe3hMRDGoowiD5bSQ119EcUOi3HJlUuzy2Q7x%2Fb4r6KCUC1ylO0NpkXuLBFb3orw7JL0bSC92N%2B%2Bpd4Ei3knjEw3dV1uHY59zpOx5GCX7ZOyZPJ5O0JJoQUypdH35CoNLwUQs9ik3SnZ%2FGiGsQskQx4QhCss5oT8MvseVv8PJxF76IFDyXVEK2jEcKxWE03RE1fH2%2BAofJ6K9gZQj5kLSw%2FnnllD%2BUfQwOIrcnb%2B0q9yqM0bprOMlByyOI5U74tTcJrDS%2ByeZv1e8fwnLym1be30YF31DynaD0t35WUNe3e1fun11A7%2Ft6DBWHM%2BjicJ3LA%2FPwq8ayo3ry%2FNPZJw0eoVbqZGSNBZwFyPfgRsRFSjHEmBh%2F28iILLDT%2B2Ywz4iqwgY6pgG%2BGw7V6X5WLfH8wTqcBPRCFMRoKTAjIul8MY6Rhh9u5DRTOB4TkhLBzD%2B3FTj3P9zpyu33rReqUZmvFr6aNZdyBhqpIvP%2B5QzCqZtBDhuujs7PdCdr5rJ7cBcUsqzcBTiclAUL4jUKJys655%2Btq%2BpmJFv%2F3fjb57R7WwMgi8gZkYdWUrvEj1fL59pJgwmmeVoSx7YZlnTXABcK0csB0xSOkMOUhQi3&X-Amz-Signature=eaadf91fd329757849cd2cc6a09d107e86c683e4647a9709af21b4affc522fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

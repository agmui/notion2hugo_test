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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDMABZA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIASmanfVnDdlW6jGhxJGO7avLRQuswc2l4n55FjPBMp1AiAq4ZQh5xDN7k1E0PNyjBXx0kaRsEDB%2F0FrtR8qu3%2BbVyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsrz94AevvkWa9ToPKtwDdMKj1XcP5n9wSUIQHWe3pH9j3%2B8W%2B71nvtNN3b0PvBgzvV9zy64gTz5lsMXa14T%2BvEBbX4Iac2oO40aQ0NRL78QyZmMou6ogK1fjzVI6uf9ukp2R8z3BnIuv3Gc5cMTQp8rd2WrqR9hVFyTYezFDG7FW2mKOrxRvJ6kaPK6Pn8T67FxEv92nvApj87RryBImvETgYhDyYvH2QbI%2BEcaUJbrbOqM3TOzvaS5Ux2HfaVVoEEXjAKybwg5WfRn%2F2cxpcw20QsvG85CtLj%2BnpZ38%2BgfKCxEph0Teum65n%2Bis5VtwFpgELvjU6N4cAB1yx6OWR%2FpqqY6sJnUfcuwr44JolPi5HsMMYjDl%2BhG%2BP%2B8ayKkrOhR3OwMbMhvUMgJUKiUqYzQEbqeHOiFSUkaKGWCUY7HhO2tFyEfjJLR3ZwABke8CHl6FFmR77W05FqqRpMI%2FEdfJYdGMInAfP9L%2FBeewE490prAVhReBTwfbXZ8%2FZUDFyo8KILlumR8NVAbbvEabl6xMYo3PWOkY7AIkGDZEq3EMIfNyJWdNgNBuEur%2BE2jjX1EeGjaHt4mcb%2F%2FzJ1zeRLmTkjU17fVO%2F7tzsSkd0gm6dMDMikvqSqaYBWfVO3bxaXdt%2FOf4neB25%2BowlYWawAY6pgHmFKCZg8mKSLaNmQAZ87j2bTrbbEfF1X9YbUzH6LbftsGUK%2Fw3W29YzrZsgKzTAZmvu5Ckg%2BEZoDh7VoZdL84dDeHgQICTnQn3nt4gSAXma0y%2Bb%2FMTmLTesQNeVu6FTP0pP2j3ZDfLvFXjoDjYCjt4LkYBdBzIXWtU%2BrY6itYkAygXJk3Cgbn93o8a1%2BBlEJK25PzjBKhhtrWxEzSCWAGP7BLb4UW2&X-Amz-Signature=cd71aa5fcc5ab96c6417d9e44e1f1062e9952ba5aa81cf2b71d04a7102fea599&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

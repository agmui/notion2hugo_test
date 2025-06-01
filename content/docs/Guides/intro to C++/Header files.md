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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEIBSLJ6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGlgFKMT8ong4mUoNZlQLVk2ndlWTVbVrBW9nFCIgWBIAiEAvqpCwA640HeXO3%2Flqlx1AVJRVvGUjG4tdYYP9QmGId0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGremWMg39EKsP%2BTaCrcA7jwTScax3q%2FDh2E4qxJJkNYifw4yFCa2RwE0hieYkWqR8sdiMfMWGDELgkPZuCxwybdg0pMlvkDXnAZIiTvwSv34inXfvPejjadQC8oWV8ymM1L2RcqWlY19fHvQrM%2BjUJ4cX9US4SmPRHTgSjUAdRdtp2cd3K%2BSQ%2B316bN%2FF%2BHz%2F1v48%2F41ZF1RXFtXjb938nghwXuRaX0vuX%2F8o64az42zHvkvelkb1oZfv0DlopCUkDhSm9XW2Ojje%2BDltGeri9lj33CfENxkixUCH1U15BHvB%2Bz24mk2qMmK5CCAQtNtcJoUG43Qm1S9h0GOjcBFinxfdWmnJFXTWnRouF54g2%2F7ayFtH6McUh23rNgiRdzGs%2FzsDxftl3MmlRf4in7XuzhgnTAfQ6jo7GE0OKOjAAeMj%2F4FaCQTGXiWXcOJt22C8dzd5IMgAvBXl3Vb7fZ5uxZH2asYtAAQPINKxr9qvvOrHh3y2jSdVzkSAQfM6QPtOgEcbol03Hd6VvbrRhp%2Fzn8WW4RJ50B%2BcUaheDhoxibKlrvlhL5NRn%2BCLilgH1J4C1pUSVBbBZFBdPK6e%2FjVtPxbchWEfmi62aiWtRJruCXuqrVg%2Fh5XW1BJ%2F8C%2BngVGlCjU%2FcB6FtoBN%2FPML%2Ff8MEGOqUBPgOUsQXH3T%2FV9XbexmOBTuTvdfr61S%2FrJMh2mhy%2B24f%2BEdupdiBj0HLGXwcEQ3bEAnYh%2BFHk7TjOPQ8rKnQayMiW7JL2onIYy1NXjUtaZHcmnOaLuc4cOU8yY9mew7on9Xjf3%2BCvcWDNkh2Kkl%2BRUKHb3lTaxwQKRBBhSJbNveGHmqUvvf5NbJcE5Htbh7bouPCvjPw13Npn3B9byYSqxpsOdnAy&X-Amz-Signature=496ee2b08ea6164e288fc6789591e769b1ab186c09f93b9c6fdf700b04b68741&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L4UL4WX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIDF2dqg%2B0lg6AotoJFnN88Qk%2FBRUzt1q3qs%2B6FTmBCZBAiBhxFC8tOaBTUBG4kW9vOWgcDn6oIGpEaThNuHqZbS99SqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcodfs%2BobGdZGYDXNKtwDYVTq9igDouqMW6Sl4w6wHtQsZV%2F3CtzdutgCMm%2FHJVWZFwSmACRRe0mxsP6I4ZLUXDJzhjGuMTPOXLdmlgKZvGdQgGzD0F5MW7PawNXFQtRUa8bY%2BO3ksa7nPTBqd7b0ourQ4xqjS5hsRQTpHqPV%2FuNb58AZGxcd2U5Aub0T4dCELXsMjIjT6FIjIhhLRTIqUzblt4dfe%2FgruRQlyTQkyyX%2B1N86cR52JQMZeKiIEgwAhq%2FiXW0gKK2yYeIHwfhcF8uzR8pCvo2qVoaWAPnyAYms0cqo4aixFUNyY1qIrmqYgT%2BF7OmCw1mmrioDXEvzugje3n50k0DUWzrODDoM9hCogWRFN6%2F4%2BGbR2HxmtZ3xC8v8yWMYiieuYdR7HNBwQg93zzCbIp2fpVrfEYqIYI3ZRlllxKlcnBYAv%2Bdq%2BsR%2FXbD4DuV2LQ2OAa76DNCtmkvOaQSSox4fMuOPzJzOV3hD49ycnV%2BUKOJFEN5OCmIVvzN3pf3QQLHfwt9TXRXVHk9vVPmuWxxvJXaKpjxS2A0KGe83BjkwjUxpRkzMgvmaeBR98KU82oB9uJm7tmPbLA6sLyX64fTUD0Ge3gyXvX2V2VKoNS4zCjRslYRhbhewgV1AJTL3r97J0hMw7%2F7CwQY6pgGQGKjKIUCh%2FRrr4cXZ9o1O2PYtzAdUTpQcq%2FLMJT%2B33EqhdMVzaYBoHkFa%2Bsm0UcB1%2FxK15%2Fn8ZtWkz3SlZbIPUplIfV0bXQztSnPgsMVzNzjKMhfMA7oBPKU3haqCtjx%2FCN25LiBHLyzAHqKomSZScQhX9kcwBta0wEfLLTKkBWvcuXLHr0ArXqP1rwXaPvBSd7N%2FwXKLsD22Tz9oS6dyx%2FCv8aXF&X-Amz-Signature=2d62edd29d71d5801a0e7f828602e00cffd446a1742ce1bf4814cbf7bcc5416e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

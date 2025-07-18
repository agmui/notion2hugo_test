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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTSHVHIS%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD%2FyqXrO%2FXtmCha21fVFypXx2rjzxisOpO2nhqkxRpnbwIgI%2FvItiBsA2rAyfV1i%2FG9pfVfsUb1KjIqHiDDx9S7XbYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfLzlgssfID2GyGayrcA2tuML37Og1CIQwEj6tDw2%2B1SKjH7LuJ1%2BV2ux0XDJaHxRdi6Oiht9mojjLak2FwXuJnfOATnP31obkZcwTvhC%2FJRzteI2fBpLEZ15mB7OogVdXQZWAk7rQQ%2F46mgnbi15C%2Fsll5tNwqd0ryh8QydxEiAtU2K6tyMsSdUSzbLjotUMGVUbRUfJ8oNAnspImfGXwpgbxQWFXLX7RTZuO4UYIoa6tcH3HVd7dQfYcyOutuJ5C8L42SSHUkW3qnNdxffZ3QGZCIbefrpehtF4ey8Xr%2FPdUF5JZecID5MaXEl6gFK5NlzQT0w82bGenBhZIZbKRWiQLgRmJC%2BbOQDjiGdGWzZDpTrOdUIOIcobeWfhl2uaRsDW7vRAdq%2BwvoTiFs6wUV2zUxattskS0B5exurMy8FIWfLqAitNZVusAXGtBV85uoTmSqxDUwcwNpvYrhQZblbCjzMKwRG%2FnYwrwVwWizkn3hM%2BTXFE6RQy%2FuiBlMUZ6mG9ztZMZorPaA7P18hg5q6TTaQ4AxgUNNSuEMjH9vPQuu%2BkzPj57VQMT4Z8NxRzi6G5DX8xG29LWO4Aabr7XJhxrzXsRYzfqleldQo%2F05M5k8AIqMlc5qZ26LCVeBe3aGlxz%2BBo6JZNAHMJLQ6MMGOqUBQBOo42LJV%2BpWxUvFUJh9oOexA%2F%2BMHmWpTFe%2BmCxOfBnp1T3jnzjQ6epk8Yw6r8AmNwg59KJn3qMVd25Mj3SnXIQcsAjnexRDoLdo6GPhMnY3wn%2F0yUBldWuRIZcOzdVTino82i4ycmnK3KU2v4KHgjpdK3tXK94bxO8yGR%2FqHpr0WVq96cn%2BSOhpohjYKIVGPieId8AtfPSBPdX8MLTBD3R%2B5pnU&X-Amz-Signature=1815f6f0581e62645452845dfdb46994aa2f1dd0a99533447a0b8b8eefab9395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

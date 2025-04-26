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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH277YSB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW1oHBT0FfiWXikYYcBR0jROq6Dap5bB8p4Gn55T8QlAiEAvEDAjwSJGLucTBfDUMc5NqFksqbngH%2ByTvprGNDzYj0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAty7A0HJVvZD26hoircA9i1mXqRoxN%2Bn8wXSgAk6TfZbAe9v281ELj86b9dV75Di0W1%2BGnqXEveGvIM5JsezzxL85AQ%2Fctiki%2Bo8vP%2B9Fk%2BBGC3c9nwiqpySFqffO4vF%2BNVzOo%2FMiqBcGdoORK9c05a6Rs5EEP8Du%2FAWMw6Ehutr8zkpLAtthTU60Qbn2F9LLKADvH79ervOlAiXhqUd9uUSaXOIwRshuu3taCEK6uw%2BUBjml8NHVBgR7JpkusDhWmWxdqge65vjImzT1MFHGdSq4B1nvzlyUIm0TKL6CHHnHeEma7XJW0lLfJgu9MR7%2BlpYia%2Br1r%2FnXOk%2FxteVdDg5%2BR7ozXLNHXf5xqr5%2BG3kvOe1NZNJB0iRjKrdnvokHtDoONjyWy1wnXc4EPPx7qD86TI7P1OQDGh0Frd5SioAVsfVbe%2FQ4iaWGt7k8erUS3TrmDYlGftN%2B4qc0CxBNSkUkdXzgm3YW8xUzAMGA3%2FqHUYVqfINUU%2B4e8YgOhkYWcSWnvWb3H8TX3TYZd%2FcdnO4oRuoDWrbaPKmGg%2FAWwUjG6BheLcpA4FIhbwJnTV4JUvk6oDmVwPGCUDgUkDvezxZGhXKTUIzJJf4LSJkeKCvm5MkZV3WbaokEMNp8QXD2vOx8DfQraw4grfMKOptMAGOqUB0UoWfx%2BBEXMOp6mZeaBdWMv8PPiP1JIeRQBSqQnB%2FiLqpNYENzrmtX%2BddQECAGgddyIP4yApGfYLSkY6%2B0usVkR9sjM7KI5heI2554bwNVfiBZQ0XTTd1%2BXsatAxbpgU%2BYe4E7uefIPCSZl1lDg1ycUrsrWfxvoEUOKJkFJCGEyxCdnMMNu4keYI1FjrxsHklFF71vdVmk5YGDie%2FnuLAF5yu0D4&X-Amz-Signature=c1015bddcd6267a393dae46f7a1860385827f679cc7599a63dfe1200c5c53bdb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

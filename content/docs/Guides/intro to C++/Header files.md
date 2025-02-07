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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE522RUU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDd5kkxHy%2B8cjHC8dE9V8tlOPM5GCwZsaEgjA6j6TDKKwIgHOLvUFFPzPsDwV0ggbOa%2Fafx6zEX1wljyBfQHvABz4Mq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBbrmQboeVZaSJ%2FxGircA8iyHRsw7FNyc9krGU34OSz1sd1jPFP7s%2FUDQQpXPV8ao%2F65adSJbN1ep2ynQEUOXg7qWuXOgLL5HLvX6XQ4LRYZB%2Bf%2F0%2BDcGo1MOuNkAbtRk29oXYXj8MD5c6hasvIgevX3y02HWX%2BpRYG5W8cPwebyiOeUeKBBP5%2BetFk06FtZteuGU1ZcE2Nwf3NUn9942FncG5O3EAPI5nmyQtLY3OQ%2FKY%2FyNuXo50RreLIK2JG7OJBFAK1L1WODdLfhkiBMBhMeKtoZ0uUSeiodcD2JBdK1T1ASou42NNkzebw7jwOwZ%2Bcyl%2FWtdGuu6YSQx4Pm4Wxe4cL8OyYFc%2BVw6l6QvcysJ%2FDdoZ8ydSuVWEU3gSj8X9IShClshHaPMn6mWtakPoYN%2BVK5U4mGWwGb13LG%2F4RV%2BiiNX2IaLArtilRiiNQspspLudZnOX%2FHcs%2FmGF5lbMMsLJ3%2BfxaEErbdUtRLjmYIr%2F3bJJXBdMbqwd0WSeMsQNE315MM5YZALILfQQQMetz%2FNKFywFmNlpsMg%2BOrpcu%2F%2BmwkDIs6c4r7hCZA1bfuXs2hF8SdUgdB9GBOuaf2FYqFn6NOAYHeO1AeKGu6VLK9D3fi0i0IaGrSc7g8yju0vrVdS8jrt%2BjkcrFiMI37lr0GOqUBDJ3tAEljON4P%2FncvV3O6GlRYp8Jw9%2FfG2oXu3371uHYvUonJbWb9Frud3hargaOi%2FvmtmRoB9w8oauqAXa8tHbuPRZQp4M6HzENQJNmN67QAEujU0ZKAEYYmwa6deuxV9MEG8CRrGoUgslRIGiSTiCgiSqxyoDs0QfWwMfKqxpUHWGSCs81L4ksaz9EjydhkMqjh8AOMZ%2Fm%2By6D8YWQqVQvPGJeH&X-Amz-Signature=7ed01b764af97109cf35bf0a7eb83d4f80fedd9554a379ecf98b9e596484d76c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

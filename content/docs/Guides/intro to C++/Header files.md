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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CWO6X5J%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQC1ZRr8hzDFIPEuOvKGqVPl25X8Lyz5kwqDRbezQvw5qAIgOCSHtj9EYTA%2Bl6%2FSeBcpkTOxmxq6UOqA%2BWuavfWz6QcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkQ0X5vZNnFx4dV5yrcA3zEvsJG432lcD6kv%2BuLqeAFIS10zySjpsahd%2B4JtckvOAQFQMApLEhaHcJn1TCe67gfhmUqMlEXz9bL8xBf%2FKVVssH0nCwtXeDp6MHygyKmTWYGRn8e%2F%2Ft49l6fjpDI%2FAMW1X0y6hLxEeODa5MvAp8X8lpSQ6VYGXpZOrSOGO94a%2BoFId7ddOxBQRg4hsEQnFfJl%2BNgCP9XyOTh5QCHt9lO6Z0mhfz9GQeTj5AQGPZh5QTlfv1cXwF83x9cxkEGVpKTpbqSYN75Eh364UZVAm%2FppVCofptMqtfiNEE3lcZlwwKHQ50mONz4L4OJ23g%2FVHeauKq1T%2BqkVbyu1%2Fk8g2Rv5NPG7yqOJ7b3d%2Ff39J97X2XS2xFiPFD74TbwH818n2tD4Ccd5tvSGe382lSUqo3IlKfGNT7e218vpk%2BCX%2BhbvJXClZGL8xY%2BiWUFtlQNswSkx9QHBz8V6MlQOuNL331%2BHdVqRg75sAxELIMxJzo7XltVMy5UX2Gf05K7ldcBZ8Ty2%2FeiDTNojQ%2B6E9Wab55XHSOfaKlTgleV8ccHY5Xyr8INoCs17%2BqwAgBR%2FnOPnM52jGhGOT2%2Br8Ce0o00m%2FgNk3ns1R5ouV1Bsm1D6pdkNGj2LKQKyOZP%2FGd7MLa8p78GOqUB5N9eQfcoCrkuZB4FGuzUSD7WKzbNFKUFAETVT2bLd5Oy6ZVYbt4BJKaUsqwjYqko5T4ks8eR%2FVPKCQ8qOfq2Eco%2FPwNtDrhC2yNM%2FkB6MC6BlLWmJEZOInC91vKEzWUZGHcnsnPu2y%2BVaXivCgg1A66G6q6rq%2B%2FqafltyfERaETzuPPNjoRm355FIiQBMWytAMngro4Bfm27qe2%2BiuTwv6boHHTd&X-Amz-Signature=23d4f8faf00905cc341606121ebe9f6cc49bab4d8be86b91c5a9109c0b43224a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

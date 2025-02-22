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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OF6DFSQ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx2z1LodjxEt5Jm1XyYIkOUm%2F%2BCSTb8mAX%2BZRCEbKkwwIhAOh3dBIF4y6YQ9JdVQ9K1fdR8kSUHK%2F2An6l%2BcvN44wJKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvLXtWQ6CwMy2lMygq3ANL6wZhqxGYBkY5WdizJz5fZsm3pnbaUDKl%2BD9jK2V7yPTN5A3svJXsrQHKhYvJgn2ZC73MgBYeVL5062ILYnlUcdJRLb32HmHsHI0%2FsVLeyG9NdoJ4Jka2PHligFiql7%2Fz4AfBcc%2F6ruad4pfE5fixtcrfB2qGXAFK%2B2y56YqerO1FcAmBrVcQSl8DL3bdj0eljA5KPVU7KCF5UjVJemTQ5IHrKytkAhq6iPPMhFtLWcM8AAuUb1iPG4Tk%2BnRryMwP%2B%2Fl3QjdJXbbLcOxJGZ%2BfOU2Fy%2BL%2BDWPdVUJ15cVKwFIDb8WcvSgVupDNi017veCcWyNSGV8dtGN%2FhH%2FmSaDw3293gs2BUZHM00sxrfwcvVTxKvcGPJBzyYyCVzWA%2BKkNfTN7FYBJozAEUwwd8t%2BQ1QQXJm0f%2FGh5DGkXcExVa%2BtFen%2F2%2F%2BWnpcJg9A1J6zZTG6wvX6TPSEiJK%2B5arSktEFpJirgD%2FuaS4ep66Pi1ADyaG%2FrdkY9%2FVWwTxGqnYeg1lnCIY32L9ltrAjBGjh8zMYXu5kO9nSRJ%2B0Jf7eDL04uEYBqCyMhx6io%2BT7cZOw74BRZkFM5Gt%2Fi%2FsAIKhwH9hpwjUnX75MMgmnQ0MxWSzEhnTb7kiyoduyF6mTDx7ea9BjqkASigcJ27SONqb4Xxn0DpKKbcI1w94TdRjXS9Y0AG2oQYHBzQlp%2BnhJkRPPXudCc8GJIDO70KY0lWn6wIr8fYblKeYZ%2B5WgOh99rpEmdyW7BdFsdOE48GJ%2BtN3OY2t2i96tJB9YEiNhkqliflMS%2B1DzkdcpBxJvgmOyE1qaUs4G%2FHs8bI%2FLUU5zifst4qNp%2FRHqchub5To2QXHEyeEJ80IsWUByjY&X-Amz-Signature=97b385ea420500c635f3c4a6317f16b8178bf2f66d6faa486b58f4f862dc9b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

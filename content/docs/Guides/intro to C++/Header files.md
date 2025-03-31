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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654BXPU4M%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCICo8hKYeta%2FY1C5u4SpFblzkz8dNvH4T7HBS0XvwcfmUAiEAgJ8LVFiarGpjqRdRWI8GhckEPsgd2URWllSxELxKKPgqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjoXCODe482lvplGyrcA%2Fz%2BdFFBjy2Y6pSTpjeNGWohp9w5Py9Td%2BoD5s7gbyiKHB09NwYZ04YFjCGwafQ3VdAoidVGSlNRqr9ea%2FbanYQP9ZPxcxF%2Bv2Fkk3eDbEbxAKhs%2BLAtoWwV1EBXuZodQjXpk9t0VRgVXxu2A25%2Fc%2F6PvdoYD2czmYN7lu98xrqAjZp3LNc2eI3ga79tx9k4VfGs4r7k0IwNIkmq4wYSnV42d1tUL5WUNm9O%2FNInPXM0zpQ0%2Bh1O7wb%2FCCYAURDByFWSgaDUSgMZQfVrLrboMx2KCdojyVVY5AvS506wPcQKsabEfmwUlDFXceRyoEOngJ29GymQ%2BOJBZ%2BceMFp1wvGy%2BA4pW5DfEY7hQ5e4bu%2BlKplUh%2FG6kBGngswMynUd8vdRAS869Q0we12EsgEqbI%2FMYnYdjx5r5483AzLfKMCXcQ7VyeYpdOsvYUKTcDFeHKAj40OXMohyRUi4%2FpWojwGyZUbl%2BQRZdWlJXynZzrgrwSA6CWRhA799C0szyhFqp2p%2BcJqMgN0CQyqQnYioNSiUqXQdOrjNvlLvzPMaJeJOIbyP7r97oPUHPqDdJ%2F6tmjGkfjlDj5TJ68MWh9ESpPZl8bu697X5AFlQXKVIMwzd4tPkqb0dUV3DeyeUMP7Mqr8GOqUBlRbP4%2Fkg%2BG65%2BRNkxYXAzHcTwsISsJkYSm7crTWW6xThSF1sVva5n2tWE%2BDIkjzifJxp2Td3iSE6jkAJrDGBed3X4BYmyFssviIUEK0TfZAnOyoqbV37B%2Fl%2B4elYb4uxQQS7A6XqAJkYrgiWZ6rRPO9XQjJy6nbFqsAC9JejB6FRHnvN94aQssWVZNvvL4Po46369Fev9zHKSkgqhp3ANImll9kK&X-Amz-Signature=ccfbc934d7412e1b61ae955832b0b09b6899c7b5400e420ad5bdfd08650295a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYBGLWBB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGquVgxCpjMD28UVzKe4OgfwSuaoCgwM%2BZzHkPnZyNJiAiA6hK0godgkbx3T5ynkIxqSXYRcMoam%2B%2FHIlkQQREtA0yqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTJI0OaooHVk9aiqwKtwDmTLll0iaynj8pSmLYwn8Ik7SIvc7xEr3Wj1qB0vEp71wliRQoCa5%2B1nX8JhWSSndutyR89PAQPuRwbnZiByVDGl%2BQzf%2FUDO1AUhkRjGXgRv6TfkBhRhGrQ2bU79%2F6a8BAoAeg8m21ikesqDgoyxa5PbqWrf25Cx8xQ0J%2F4FHdCjgu%2F%2FNTqAkOE%2BjwHHAqnniDfZ5xp264Ixz6SywD0JepD9gFS7GXZWl6Nv5o7XoPEFfGf1jDs6tBfPaH5zl%2FlvgxwZH5S%2BG3IuIUk5%2FL53QUHF%2F9AfN7zsxRhRENC8qWKMg6jbsKsyJ0SJ4U0SnfWVmGUJGT%2F9BBSmOvLtzt56tO6DvB2vr9EewOSpPKt%2FF85J5dG18RFuJfOLik3l%2Bkr1N2z08VD8R6wFw1CUnPPBIJJSH1uKxb4JiMXpECUFjJuMm6ALrY4Myp90nM2gAiE4OA1ntZM1ZXE19NJ9sV23joei2jpZZb6iml2m1wuQrMLLN4w7QgkHS%2FnN%2F64Rv4dFrccM6bCsmJOdHxeLTJ6b7GGNsfTElY7WZv65W%2F8uEM75yvrunGjLTfr9Gvrp5nDGXxKVW6gsF%2FJ86BZsK4E4aesuNs%2B76hF4a4vn%2FadvL29Bc%2Fi6OmwiaSZQ41EIwkOelwgY6pgEdphSYKBr9P7okk7pzfo4f7j6Aoi0O0X7MqlOxmaOIOMJY%2B7vO6%2B3C8i3O3nmW4M7QqGoy837DNYOfO7%2FE%2BwK6WCmMRgQaSf9cpVQiKlmU2Gmn8xz%2F%2FtVWckljCxZLZzkHIACud4XLjkKnvGuZERWno3zkO2QlQKi%2BmstHNr%2FOTlHjh8AzthTFGsoSHxYxnv5uhz7LBioscYQCqdSFyNF8iuFEThF5&X-Amz-Signature=7c80cf956073edc566e0e34bc7b520f9e8276c7e6a5581252abd5fb0afeedef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

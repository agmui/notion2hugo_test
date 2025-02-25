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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CLOM5HC%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCICb%2Fkn5l6nSsBUt3GbW0jPYx2282HpET6WX88KpuZ3K1AiAsZoUeygUF6z%2BBMw0yd5NgShOLNaQdi8SgM%2F1NBfQm4Sr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMiThv6qFkZoDFKpoTKtwDA7vWpWXXRAPNiVoGlETzxNgJ3J2GTyZHJCKMqN8DjRawe%2FYH6Fx4lvKQmOGHwqc0u%2Fe9MyBJvDRwlvQw56ESgowoH5Ix5UwSK34CPPqAqorNqSV4LN0PvPlNcVgJacJLPCfyBxj0XqYaBrvkq%2BFSDd%2BmLMcnrPyPNyR6rpnN%2FuVo2KLKRpMQ3JuxDPJXHfqoCfuKn3O7kmR7FMufZAauCAI7TAFv%2F59EPMujzxPlyNrcJFJzfMTt%2F9uZuaj4f%2BUKauN9DyHv7fB3Qyq%2BVlbhLJetJKO1ia%2FCLI6LEX90mnJ%2BZ2XW3TEYSHr5nRYBgXLVV1ff2l7qgA2Q6SJxKf3My0t3JoCwfbFgPmIofMmeY0q8t5gGY1JSj1EiG9EJ0bNpj%2FOMbG%2B48VPHQL49TOlDXMbJZqnQW5mUuTu7n8qcxxN%2BqAisiwwHXgJIOmFRakqMjs1nntBHFYB6S5qdAQB749yytsZLqUY0E049A6vzRcj3%2FZljF2aSyosNWtHdA7fpRpoOWXNxIuYHAqnzrM83tEx%2BRtj%2BCcxZ%2FNYyXcoBgZ7g77%2BYvaSiZDH9FY1rOtdbGMFtx%2BAKl4YwxrrK1sfLtB2l7XVaE%2BmygK1EU776g6HHuCAlAImmFDIdlNUw0oL0vQY6pgHGAqCA8GAX9vIzMRphEYMy%2FR6EuOrvai4h6hDcRu7DYHdlyjhSvHwQRPMvrrmCgsHxm0oOelWPaxqmu1fwiVOOa0jRg0zU1hNKKvuw3ZsZ3najYBn5Zmx%2FrW7d0lpeCwJhemikyQwApXPRl51rrV7yO%2FEp0zTV36tCnafxtWB3q%2F%2BHJ6cFQkHZgVqDkSq8nWSb8mLHEbx%2BS8Q5xg32sdWNg%2BGcAO%2F%2B&X-Amz-Signature=2be4a950db81548bd7f2ee523fd07b5a88c8811adb3d6edb018da44e0d743259&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZZCT3EO%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRkXGeh%2FrhFAZY9F%2B6VakCYX5XxXrvW5kLTp3AT8sYtAiAUU1TmxILpIRR7bQaebln27goLah5aQlF7XBqu1y9jfCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnPJEj7nXjygRCb6pKtwDEfrYaJiJS%2FpRlOVm%2FuKj1ydmFFkNcaCJ%2F%2FIN%2BhWVGBs7aGA6jcyrYPBScIbeNRHNAgRVJeAT0BMMNxCv3wqxsOhgiIIkhPODD7W0R%2BZese65n4Kflr%2B1F50QAnB3%2FUnDWWJY3qDekC%2FK21T8EHlRsQ0%2Fz3J6dciPUSJiDiUch6YWvKUiO5i4HNv%2FxKFERq%2FU9u051Ijp%2BKbNntg%2BPiGLc9qwEZPdvZG26ztSrmBSLmsoESyKUF4aMiLsy8stPRjp1GDEw6rQN3IhGe%2B43E1C8%2FTLx%2B6PA6whCQ0qEzCozsDJIEWPJc3bXx0KPBl2x4Cr5XP6dQ6tf18bakydbs050CFHsHIpwZGx5Mqz%2F4Xj9PI5VaZJ4qzRHcQTMJgD0ivEO%2BhHXhYnBf0pkwt4z%2FfQkD1rBkd873nqP79ZxgQIOxbYscM8Lho2zcC0lzgFu7Seesmpa7ZqzWjlaCwR8XjD7lc3LM35GdO%2FdZDLwdsBVRb2Ydzv3RrSgzObhW6R2tW1qE3KxfjVBep6%2F6cnZx8bMCqOj2xWnLcAVUCAQazV0RPVLyx5dF6i8DgZxyAzFZKs0G%2BxP6spizs5ABcUGC0cm1wftEboKJ5AL0mSiYErC6lH7hEMztkatxaDrr0w5cabvgY6pgEsDwLW4SQq%2Ba79NaNNCmSXADPuLna3FHTL7dtU5VQCTytdF0nnhD7ZuadDTbPQKYG4nfwOY303KeShKw%2FL6Hraz4As31E3Z66j6RHU5LNRrQwdVfR2nVgRIX%2B26HFkHB12pVUULzuLI0LYyBRTRNIfgXtf0%2Bp%2BWdfDFyCXZhHw8zWmjHqutjP04Jyeae%2FWu2h%2FS5ET3QsWygSbKNBVXTD1M2zZl%2F5m&X-Amz-Signature=c6d0f2a3ba6552713f92ee841bf2d9a58da9863224d7506529f2b79b72d2245d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

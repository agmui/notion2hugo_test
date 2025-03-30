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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH4NJJH3%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDmYAALHj%2Bm6oU5MPK947QD5JNHWf6Jn27htCwthxZsZgIgbfyan9DGJJaz6in8XoWLeEJ5JXj7cAVDAOMWt1NdF58qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBO55%2BsHrd7ihOuQVCrcA2ilbTDIjAEmkRdh4m6qwXzL55VFT8D6kUcmt4eCgCLyQCfHmrHrTQszUXfprcVXTAaZQChopeq7vv39URYdQH0jcsNToF9VYKeMhHMfDz4wisUPYYg5W6SXFHavKVpqPNsfu1aEy4HzHvQp2iDWqDnKo5PJNnDeDESoGIAUnT9%2FpjdW28kx2448DV6j9AZ54I3FgDWW1XrwWVXOlSxjQRNLSYam8P3Ti8IleM%2F0VcFlefC6F8vfxhyEQZpJ6L2ky%2FF7IPIxtimRE8HvWxsAb1lMmyyjsHnGQsRwkuLb9Tg%2B1NFXCBcKq8Ngvd3hGX%2F80mc0cyMjWky5UL8nUKBCxsji8MBtCxJIzjScdtKIWIO3ritw9IHIjvvHlVyJ%2FfJJIiq8u4ImMQnRLVnUXJfLe8dH3o5JAHT4AnKu%2FhvHlgXJwH3VVIZ6DNaCU3x4VIMUWQhzbEFaxIzMILH9j7EEdWa%2FBK7e12o2fz69QhceJGQUsIsW%2BNTZOCR3EcF8jdcLCdDb8fO8JbioWMYO1TKzqkADbH5kM05Roje89kU4kgIHeSUxEvQ6sQ3HzrZlTlfQfO3%2B0HmMeHgDAGkn8QbYSm7%2Fiic8oiZf9CFZyq%2FR2ke3xi%2FlCKpVQzkCn%2BbzMOCapr8GOqUBOoKiRu0KEQ%2FHibtK4RQs%2BsLmDjPfiiY74cSNmmR%2FZMNgYSf4kzGD8WlBcASqTvDta7mKzr3wFJr23FNcW8r4AbjHiDzy8%2BDa4tijfdz%2FGBkXlrnSUgGtQjvo15HQGKhy3TruVUSzoDSnutwX75K4l78I7cVxICnA%2FTWdVv1u95rAwfhf7ZbMyOUHjuC%2FYIywTBD32FChpqla3hhGDIpukfrY89AE&X-Amz-Signature=b0daad4c7852e4306aa529d196396d4c2ee9fe14ef0d1b608f34bf3ddbe5d650&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

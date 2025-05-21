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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS726S3H%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICio6g3s2VLtEwJ4XkY4Lpo5g%2B%2Bfcfppj3yymWB4%2BwO3AiEAkGyZuzsc62Sq%2FrhDkQwdiAWaNsn0%2F%2BTFmA2%2B32%2BMBwYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqJ%2FrbvaKnPNX7aFCrcAwfwl8u0RfoUUvix88ntAKavEmbOTd6z1Jjy3EALzB9jBp59yAB4tQBDigCKEnk8P8OUX9VssGM5kfZRl200Nhqp2NQ7uF%2FDTEfCDp91mpc%2BsakT342lNhVwTfAg4eX2OmR5TvSp3byNI6xUKBCQM5mMkEMqaztUMlNmngGId%2BDdrkdCv5%2Bk1JLT8edjgpxuj13eNOVHOFEAXVZEnROc93bPAmHoi%2FZGEiDpTY%2FRZUGcGVzqMYk%2FuEPQFNrDDJpykEbjsLVFg2JWk30SUqUn8ebpTUOUgmriujFDriweL8vgwXG6Qg6TFQgRwnm879JdZqJ82a3q34eKR1C0xw91AeGVVKwWYXtlLIbut9EIqbUnLgDtyRptSUlutrDYeP0HEr7TEkoGNojcRDvt9d1963L9A1xC8ugqUPm38fETMlP5wClnTwJZGMd6tjR3qqoC%2B61Z1zPCDnlgZlZPr7ybtAiaeO25Yw9dSKXBUP6qRFFYT9Z89M9djoe0S0VQ26kHzNbjhFGawUQXxcsVgYeMYlUvB2U7yiKBW3c9JthrnOihEhhJmvfDRwp1SPeRUmUHWNMcl2rilEPX3gdznRDJLTp67rcReHRSlwq%2BcXsNeEK3LY%2BAV2Yu6d8xNoUTMMautcEGOqUBKHRNjB2zjZk%2FJJNjshJ8lRojzE5mlrR8JYa3drND4UIU29FE%2Fi0tlFpEoAEiiglIE71D3Xwam%2BT158jVyvIoNcKHxdsjvlW1uZF3XAvCl%2B%2BzR0JrD6FOOvGLuEwjX%2B7n0WbC91SPcnPaU6NM54kgPwgLwRPpapa1q6NFzFeiCjgDRq7UQPeRG7uh9qCkFXClN0b8VWc%2B%2FUcqBCDdLwAilb0KZrdV&X-Amz-Signature=87f84155ac9bc4a398354886f0f6f752db7660a282c7053cbefa166126bcf9c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

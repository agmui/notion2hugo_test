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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4CNXDYV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDf9iAnfq6BbMjnkI0NvrUce%2BrLmA55esDFc0FQHibU9AiAUKzBPAR%2FoCalNoR4jwblgWo6Yw6ldxWKYkdkSj98Eyir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM7LjfMSApDx1uR5s%2BKtwDAtO%2BV6MuZgRs%2FO69qk00zhKWzsxxbyWLOpnQSH50chf1%2FzrfmpO1Is5gUT1sn0CQK9uP3BX9CkCRjmNEW8ofADJFrMCzBWxV%2FlEAE61rSSfGwsYPP%2Bzy03UHGqQGHxF8b2662JkGytZsM5UJzT3m5w3TrmdA%2FGcWzdbbFLVX7fJa9exo%2FJyoid7nWCpmuQ%2FO2nFtsxWOmeXthFhkOwEqfG9w8VJYD8QKQzeJBtCd%2FxtuAH1wsmVPhkjlmAhQRMLzLvuE6o5HtLYbXf0JeQHhMPUunyYwgLWeHxbJ60SnPzpX5RckKo2nlA8gejMnMFHTN58MSyq6KrCOoAEZg3XKALMdxWO3huiJBDPhOpkmvCNF0xQpfeIPdJPE3eclgoIKuAo2VTRLlwmdGqBqyX%2FRYJAuHZzPuqV3Qqu07IvgBN4o6om4NVsxxUoxWHnlMY5iZeCoP6ADKvV4f5ExcbhQG1WKw48R%2B5QnWx3GsHhd%2FSS8O%2BSgzilHU8%2B6bzRanm6O77TKwGK6zP8md%2BIvG6GwHpHbU10D8zbQfEmhdT9AE28DTCAgweV1vDMKtN5Dm43KA9DZO4929vM6M8TuXsf%2FkXvcX4BmbRuGhNGXrsUzd05YZFcuAT856yjQx%2BUwj%2BuHxAY6pgEHNDxnF2bumscPSCiexCwjpCd6HqOwax42hhcz3kThT4dbLr83aEGMItQCbMV0GiC%2FHbmuM0J3mIKslcCQnLubFd9%2BAm8%2BhqVqQTgJYFB867aCeTnhLkC5JyG0oXiMNRANAGmRcUM8T22pGh6ZhZI8Xd%2FW0suTJftQqKZUrsBfRDdJ2LVSiJ7FNrTJ3gOkuFa28OGOhSGRsNcg%2F%2Bi%2FWX1hUR3WXeCC&X-Amz-Signature=e009204597b5b7fea4a0e4d9931efdd2c188a08060dcba76f0311fd103518a76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O7OMK44%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB57UP%2FUEIbJEJPZ3UIhTvoFVErgiX20AGUlwaE1eOBHAiAPKDRZpym6a8gOEYFjGgcgoxLdF8wkocqdtSJdGF18WSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMLXKS7KAH0UBuSjL5KtwDaTtw%2Bd2mEjbdLiINUA38sfeFudiKuuUcui42xsfAzR48IALm1hOz5Qdei8VSEYPlCV%2FalQg2MRJB%2BIqh3vaYwsDVZPh1il6wQbZKA1q3exUwHsX9RlfTH4eA6upXMXV9yI6lBl7EMp6Z14HeiMngVztzOmCrsuytW4trpfel7UGQ5wV%2FRYn%2FPSUjTeW2nuEXycQmSo%2BbpAgJZbeR1eNhJCc%2B45w6x%2FxvthhyRlYCs9xDIqECZ1aa%2BDkDH0dH4L65dEqBvwcODBAQSKHRJrrJeHJPjgMzWAKyxx%2B3Ni1Wjmt6sMpx%2FyFcZ9EMBmq8BWbIJo2c2J84l6uMH62nMWgUqDNnzGsic6MZbjYBcmIM8C9BaqQWvUD%2Beh29RW6uNbyJcVSV00%2FVSHF72eJxhhDT%2Fymk9R4Z42k%2Fyw1sVgGfMWlozSCv7txQO0hduSVwx08KShuZvQbPwqqmUToCIEa5wBn8OrrcZSjAxVFLf%2BfLHa7ICUAJYDSLDWwpDN3lwoY2Jzw7S0pCtFtLabM4FuLwC1Dqbs9lEudsN1PkgpcZn4eN%2FPi6f%2Ft3gTpdvCpZvUzYXHdslM8sjKEViyfRrTUhe3Ejz5WHqgqA7nqOBatvyybC8bj6FXnxENUTCS8wprfkvgY6pgEK0vhc2xnxlL3llX9rDIXaMZCjwz2mRAkIcH2IJ6NgY8iK6lhsd%2BK4YTrWeuGvaa3d3t3HbkhBWOr6RmiKDo2DSInRrJaD%2Bgp16IitjSYEdxyjbKrgxfdZMHzM1VHLyGt6xIaCFyJ6%2FZxWi6q3gM4IMaOJ8xGvwN%2FxhiH%2FUAMnxp3zyMpluRWotwLJZfDDQHEAaz4DIctg6taui4qqeFvXiN3RLQg6&X-Amz-Signature=de6ec2db797c0f10b5c87a93383b2c4eeca645cd46eb13ca2ba024bb43454039&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

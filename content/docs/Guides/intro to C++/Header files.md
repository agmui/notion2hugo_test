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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KTLQBHD%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BolXKryC61B7La3feVqmSGYpcmnsEMiXK3b9hPe6ALAiBbrB%2BpdfKinZiGNJwBtI5XgIHrxwaD8MdJxnOUjZ75ECqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7riEWMKQVreItjwsKtwD8LcTCtpbjNf2A4lFVisdOVB71KsspOhQhhgzAFXjoRxy%2FJVbkgTvUh7gNuQtQVTu%2ByE39WsmyVv5m5J9ommp7X%2FnS2lI0vmHCTj5b7%2B0pTc55Ne1A%2FEeUl6tmq4QretVa3NenlZyE57qAf0vQNrAX1V9PWvr8q0wP3dIDYT9MZ2pZd%2Byn9WfhcwKccEq9V6Y9et0VoN6jYHgoDcL6Zy71QXNFLjs6xPdIH%2FIxhzKrrfD27NC318xdvVcD1ZR19wdIP1FSY88NzYfHstOnLkHUd18Z%2BR9WbVUeMkDFbGqh2wIJCywtHTe4L2kRr5C8ipKobKZPCkEen69MQj5QJQRfcWrs83PlELe8NVX5EWBF2bnEttHit5%2BWwJoX6bk5TivpJiqIQVDVMlk65H0jexSzsvR4%2BN1l3IvqSLBzJSHmHzZot%2Bpg0lhORhrav99OwxOX7rt6q8AXzYQAtESrgqXeQ6bY%2BuWt6A75yFD1XoKCwe4z9%2BZsQE2QFrFoHAWJrcFJomlEeJc6VAJ2uzHE9i5HYL7Jm3by3JFyHwjn3vctRt5UF6JIQXpj5PsUAsLx6hteG9mfUNwbhb0s0XLRX3qNqpmxkLrH2TpF4WkUFRNV6qY36DJqkFIayEbGbgwxqCUvgY6pgECJmr33EcHKSMhhQPKxZzaEAAFHFAtmIcIM6b8w2BRFloODy6bnCf34D6NAzA6oTTa8h8iP4fWuhmR5zqKHl0XRQiDR4nuj%2FGyuheCqzpyFdRbKSRn0WeHp1s298BvOJeXdH5ue9tgWrqFhQK7kcpxWjINasjq%2B40Cq7GR4cmOUsllmfnc3zl3yD19Iugbw9AKu5F7XUuGZH17CLGy5CSDBb4gySTY&X-Amz-Signature=f9b484b00591e50469674819ea0105a470e8ed0413ab088dee24669e40467cea&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

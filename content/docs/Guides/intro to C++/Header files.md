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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CYIPNXV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1bxzLOIytPzvHr1CFNcVhxBYvaQig3R7Mu9WOhxDhBAIhAPFKUdVFjCrcdnn%2FB7js%2BoRX402rAtyfnYVr6GGNCQPIKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPxI6%2BdS4HfCco8dkq3AN3qK5OSayz2F6eYZDhrksQALEpdUyB4GCnpPew1cYGO9tdpnagPrjKgDhRNHJvWD3vhOajzO7%2BmdQABNOYAevlQuDTek0z4YH%2BOoLQFEcXR%2Bl3BquJIltyssC7q6QFXlSyM%2FomgzNDhJ731hYJHNOBYR%2FeLra49%2FOJTY2HapCT4i%2Bt73qUxQ8nC0q0At%2F%2BiozK8%2FGtTHVsPC%2FuB3Xjq9qjB08UH%2FHNWc8I%2FMjzXKyElu0Y24sS%2BhocrgQf6iFVGf766%2FFayCkTD%2FjaMSbinEVerESwXeJQXDpxjds4tyL59GjTv53tCrUItJ49LoCZyvmk1Y%2BqCFVSCQdiYqA7a4A0%2Fn5M0igq%2FdnmmGdYdGFHpZWtdE3%2F%2BotfstFzVvFvnb2yR1eQYFkHuIJSKwWZiZE4fKKeZs1GvPlEBR364m4KXFy7fbnvTFn2O2jUPkDQ7PW3IwGmwOkK9NYZAnJIx10A2jeIxBOWTrM5D%2BzhDS465268JigP5wRsp7PQgy0DIJ7hL3kwdBUTr5au7mBjdoNvK8MfrP%2FNACtyIilgK%2FJfHBiPkw37LJKD1TfKzgEiPGPKHbOmhkpvjK4Y2SN6p%2BhsTtcBcM%2FniQQ24XP5zGrGyC4s6RMw5rGbrFi1JzDzw8LABjqkAQbwSXhdWlGclSuXcossq01qGVO4k2ZHukkzCPb5W3DJzqs8u9soeYYLxaMwXJKksdExFLqCMnNKMHaOb61eZTETXNzIHSVFpGbQBkg7OkRAFKKDRO1ipsOw66LdekYyCqCHg5Acw0nxTewq3TEoHEM89nsRSYvN9zCVCLM2ciA6%2FW7lZDLyOHKf4LgUvkW9GF99tLlIcpk%2FNQLRphgcKBMERqf%2B&X-Amz-Signature=10228e1de91d709cedb9b3b3c940e43dabf71f7bc9748683fd36b0baadacc8ab&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

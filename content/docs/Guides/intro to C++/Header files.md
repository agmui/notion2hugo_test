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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPW3455P%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7VWsLyalmJuZ%2F%2Fh1Bq78L0znz6n3arkpYBq13uo8UzgIhAOl8UMzGgyzG5bEJaTJgvs7OoOb9hkwedqShTm%2BHDbkYKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzElzyuHO7Er7bqgrMq3AM%2FVT9jEYs8oT0AR1yKaNEEDpQoQjdzkMcV%2FRlwtgKWjHQCEhcQ0qv4mtx5AmfjSfMd3HyglEqJule1FgOY4We3LalohRxeol1gESfSPLhoqGtfCR1%2FngtlDzXOXy35InuJPdOAfkHNhohXyEVfecxCCwTj9R%2FjDlD0ov78nx4shYIUO1LABGVCUwWfi1%2Fz%2Fk8DmaoCMvhWClH1f0CdKYHOvCa3eMefEDvoIwAB6hJx5QljUCN2xGbbbW896vp2Y%2FbOwCFzNRBCtPkyPDTPNpurU2DDDNCi5OFFd9an6VNCCM5XrHmJBnmHJqdiGMIR%2BfuQ%2FywgkIvXZFRqxvTWKQxeiBdBbRP1HWtsSna4dlS4nGrOu6afeql6Ir8Zwu04%2FPyeaMoeJS1Bys1kuGH6OUELR6aEfGWLk9FSp5CqB1Q7vmsDBzYcV%2BRCIQ%2Fep3ciqKtno1Skvn7SCt5S9NFWvzGmBofWNxFX7lIcDoWtccYAv5NOc4UJobhk%2Fk3WnqIxspk4B665lSjLVLxC%2B0Ag1BzFLpNA95jMQ%2FRV%2FgAznB9Ek7Eny9WBHu%2BehRzqftpNSEQVrKVg2QLopFEpfT9i5d8pUAMHCTdeXi9Ly8D5ph2FuS7cbgsUGbPQn%2BsDlzCq59m9BjqkAVfwv%2Fp6Q8x9%2FCOZdrj1jPRjuK5i0ANfvjpM2Ul0s3Moiq%2B%2B7oK6TxoxlGVUUJvdkG77ALXP4I39qupZtr4QU%2F7TrLoo8KhSwJJ4Q7wuoqljFDKt4wOPaqhlx8OboUvtv2%2FrvQ8x8v7q%2Be%2FdfRKHA7dkkpyWgs1DHIhgkHaq%2B2%2FjA%2Fis2FrAmW3y76efZZV%2Fwr5IxHtzpseTCfglcnbS6huFLRqw&X-Amz-Signature=de445537c991523324ab955bd0bb2694168dcebe1c0060db6d57e4f9443f8b8b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

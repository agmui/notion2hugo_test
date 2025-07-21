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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USG4OGST%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXlsY4Pu7BMiZVdE7jCLiaBthdpLq3iT5ezbZyD48s1AiA9dsfJ3%2BTs1tIbVJQByTADDZKU6%2FXqy%2BL%2BdFdtTHMXtyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi67IhGdXLT7brHGzKtwDAFJSoZqgjErYHg8WqJFF9oWMNT4l18Vc7rxcm9vVv0Qp0VYLhGVyfK9n%2B%2FxRDLhIORd7laFgOOlj%2F1ox5bbP%2BwIoptjJL0RgplcOfz1rXpS0MoQU%2BtTkfJ9fSkJhOxI6fpWYzfmDcDFaSlmC4yYAdx4PJOcfcCP5L1In89XYEKwvh7SEWMzTfUutNc0jcQqV2c%2FBvrjxLhQw05DPbGsro8Z%2BUIBk2dH707vVq4iyxPvkirEpHjtXJ88GCU2vkb1s2PcqhIViiEfbjXp0RTSYCSvEusAaWliB65qD7XJOX3shVGGm6PhX2fbKfb7Pf86jnql6zYIHKBCKWLVGVH8n35yFLTf%2BLxYdsI5F66cL6XrAz4SJuRq2ICQQ%2Fgxrpxe%2BEysqTkRlIYr%2Fs7ob4GHVh%2BdffmhOPb01LsOpOjnBZLLeYgdDrMgvuKxlqL%2F0duaUPC3yg%2FUcFyfon4WUusQDOFpv%2FZd%2B%2FUoTHo8vv624hXya0KP4wqzovwnPsxUMhL5UF%2BE9RoZLpY6qL%2B2R0x9JzfxRvCZWAldZ3TW8G27FO%2F2HAVAQpTU3h%2B0N8lJxA7IE4HnckmX4UVpkH%2FGyAWTmB2nlY0oZrJEruADyTaM39OdDAdLLuGMPm2e%2FaBAwwej5wwY6pgFLjtlsqGj%2BedsRmuINVcOLrrYZyzYG%2BqGQXcT5WFYDmcmD8nlLVqpDj%2Bivkz1XoJkS1EY7X%2Ft9wixiYDVLqZLvV1%2BOh0y7UPA1XwlAYxCztuuVa5AUTt2c8%2ByXkg2stHgzdDRhDcq%2B%2BNYfXhbfLZLlKHRHHGXLBjyMsWw2TdbU0WYGNORWaqtaJaxjid%2FTAsV8BDMvZX7AuvpuI5cjFJFeoGWzLQEj&X-Amz-Signature=dc8104f3e6f1536da8e0f0b53271ae504269f17ab9c25186d2cd58b49c6bd368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

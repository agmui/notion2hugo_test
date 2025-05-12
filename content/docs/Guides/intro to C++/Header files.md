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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHXJESSD%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCRsFIL9V%2BWwGF%2BKoxqg2A5PVps0lTPnXL4x2xM1pbZHAIhAIBGFZq6svR4e0eczjwLyJHxgLwq6BtZyuG52BhbGwXgKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRxBbynZSy3m2j%2B6Yq3AOs5k%2BPk9S%2Bq5heiDRehbucYh50jafGA%2B25TQlQcEXNbNg%2BuTWRKGiTAGdKUTEGd05%2Fc8hLAr4S%2FRbvXOhHfOsAd5u8mEYniVHLJePJgMW5T1RlTuC7osgW7A%2BtEoziVIaEPbFz8MGmoI%2FxWT8Osa24ccO0LJNhP8I9IxfJIxzxbedx1gBUEe3xzXD%2FDxL%2BkAF1MCJaE64R20yRLZFT5dF8FO9rdqOn5zLK5W985ilp6m5tiOe6LZBxQTV%2Fu3PrHqkthjibVEs7IbHcZahQ%2BuCLW10qY%2BexuDJt8HwlwT9bhVdtXuh2nmn54gw6T3Xd4JYbl165vZZm29ToDRTlZurpMjbDIvJLnx5%2BGkAKPBILDI0CMTvpUayAmeY%2B%2FAjm7aqGEgWmqpuHaBbbhEsLcA9D82fQO7v4hQRDkFLVucOCGXbpVHD3%2F8vNVDT%2FgVrNf%2B6DQG4xirH5nsx467SKtJXQSI9AfuAMTPrYHpW3vyZ6T9m5ELGsyucdegWQ4wGsBpTjhrHXGcoUYLhQUU4xASzgirbkixKQVzReqFZ58klIWLy7FStoTvqQqFxi4Feto5YLwRudA5paAckJJSufbze9GG0N0W0EDQ8yuazlgFXSWgUV77%2F5fRBMlElSvTDMt4fBBjqkAYCmNEOuUwNsh0dkmzDYwxjRgy%2F3Wo5EhcTEWUgHp9kiIXN%2BiymuMY239v%2BLbHCvb2bHLvGwsT%2FKbScjXSC2bdYNynBx%2B5vBp%2BMMx05guzIoglai1KrzYrsOGBY7qISJwQJooZC4Owy5WDDe497aEDeX1AtgxK3CP2%2FVex9vEOAWhKD%2Bi0HAUUCfbb0FEmapjKh%2F2If0kf8IIM4vArxTeAABEfGb&X-Amz-Signature=85a0aa082c6f916a77c0c2837dc04c76c17ed6b8bb7043ed6b359c5873c3089f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

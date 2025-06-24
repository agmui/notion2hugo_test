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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXFJJEOF%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIHCsf2ZG7pPipAaeOfPD4%2Bvc7w%2F5PV3X5Sj7ZDj3IyyvAiEA1sxqL5Cee%2BwjGNXQ8rDlI32B5pbF4qT1B9OF3brYDRUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBhwxPaxM7qiGhvwDyrcA1q47dvVB2YRvQKmFOPH5dSLLeq%2FcQAW8fN02LkAI%2Fq6vE82a6BqaxT4oZQVBr7adZB8332l9FvXKe35m54P%2FHiJR09Mq5N0tlf8Yj911GpQKMoiogvRYN7euB8MARFaBAy7%2FHDCZL9uMS8MsyTyhwr7RrFbANKXHfmKqK%2FZAPIdlrx3PU3un5e7kSI%2Bm8ZC%2F0Yc2Ggwi6pmdiHHO%2BEwclYg1ECvvVl6DhmNnyomfGkwlFfHsT33gg1UBWgDyrzXNUV2IcRLIw6pY8IsFGpCBX4UIq55zd9%2FEAQB6cLjWDnBwnbhPfOtN3g5SMyUWTT%2FKSMKmnxRi0xateMYBtrIclWw0br5j2Kvf1Q9tQI0jh%2Br3Q12oBU9AqBDt5Gll3FvMNJr8clpScF5EiynOnYT2pj9EtzUktFm35NnvpebgOBLJW4RcXr8z9VaGzHsv6cIHeJfzDzfS2hG8iescn%2BkvEbWaUO8swSAzJYWkNgAKKtY51JohQOhm3TjmjBM7IjX%2BBTXiN1YgNoLMcNNSwEXr41fX2IUYSmqshd8uX8l3Iyjddl%2BNbk7jPmi1wrBFZnyoZ169y1gp9E%2FD2W2%2Bne8mhEC0FJqVqz7ZeyrNF3BSJTgzfhEW15Mc16V%2Bsc4MP2Q68IGOqUBSPA7x84htieNBS0xVncH4AzR06dYB2%2Fvd39keu%2F1sHS6NB7xt1D9ptVLZXaWOr6sMKMSmfpsaU8ZYogPPzKhP6DgmSHFAnjHGSSFD8PtNkRJjIEx3WiPRxna1S1bRDqhuvvZwePPCyqAlqqLhO87I1%2F6nd%2BF53QDHlR1dvSaR%2BKsqHZmmqhvN3X1yZYxchzDbSnK1AK0mWFuMokaZ02OVlcFk0vE&X-Amz-Signature=e8f585193315135defac12a14f7085ac270a93c6293cdcd65582461753d559d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

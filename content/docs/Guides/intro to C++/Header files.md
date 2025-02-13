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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLA6XYOK%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC38e9At25hEszhHBNZsd5jgtpdcKBwJGWLqI9bRddnmAIhAIbY0mqEAgRy9uuxcR4hU9aBXP5bxNa4SpkxD32nXhASKv8DCB4QABoMNjM3NDIzMTgzODA1IgyD0FLRgWsqmBhwXGkq3AP6hGUCq17B4ma2wYwY26OAy3yYazqKX0irO%2FsIp3cNt7yw%2F7ZK7CSHcEElYf3LKySfru%2BV9S0usX3m77CXr3llPoi47Tk%2Fr6Uab9uqVCnD32SESHTDzisLxQ96CU%2FHUC7WxpX6jhcSRkO9wSD7yfs9fZP0okXJR4GS%2BHX89npUfePhTBJJat9FtvlSR%2BnNXAkmdfzrHykNeug4CVpQ%2BvHzrO4ZuqQaAv2YjfkwnTp1rqZx6rsDIYn63MI%2FRn4w1%2BPABMzgUPw%2B31c4aYsDJZAcCZbqvG6oyywWNoY6jO9bUL7B8mQYkKSWDwLppSrP5Ko0kBdwLHsoZY09Z1wLJCTSlBPzyD9VKY4F4CxnSzKLdUlYXonizgnlWjf7U7%2Bi32g7TUS3NNY9tt0drk7X9Y%2BzHAFpEw1CMxPIksfwxnU63WKUEg8Vk6apzwAp09pnlhUj%2B%2BV4czu5sOmCPzWS9NsDeCsHFRFIeznhQh9FJQQEhndLVaZsLsfHO5tYk1UUHtVM4gz1WmNaDVaVrKG5Boc1tjpYGR6FzxhnNgTwPzjubo%2FQk%2BhneUMgtnEJnD6t9iWAy3q1e%2BOsnn%2BjOfiotvYiWwx%2BfH59JPyzGZ7%2BcIDsutErVmDmJZLrPYryyjD%2Bq7m9BjqkAdUDb6PnNuY7YVmg%2BuZZDW5XD7SgkgmjQEPH%2FmimjDA0I6A9%2B8HEPCVl5W09tYlp5ymdaEQyB4dVUdSumJflYxdSdf0uhQCiC0Ae08bwT1DnoBpxHLrpw0n5EEwkch4RHx%2FW0xOX6nGWaVErVegocY%2Fxaw%2Bjrg0oaHJ2LRNOX3JPol63GiDCSBpWR39qx9Y4x%2FwNmSr38Cb1zk6g2t4qhymCs26i&X-Amz-Signature=2120a59aca7ac291978bac31796006c2aff81323108e56f64039595c4e32abde&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

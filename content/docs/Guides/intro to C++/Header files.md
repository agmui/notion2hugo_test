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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHEBODVN%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQqqKH2qaJpUMC8JFgFWCmUMDUExAuRADO4S9tFSwVEAiBvnkNkfffVlkNFNwC%2B4rrikk8%2FPGVGO7qeM1Ax%2FcwZiir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM7EY0UNyxdp6fodmKKtwDHRbvjR6KuDtcvL0DqE0uc%2BYRJbHWdRWfEA09B3DgHUJ5fTA4SIVxNl1ZoXz1EYzoo%2FqzPaV2orx7scZF1YXrtV2gWG9NCCoKixx%2FiwMN9%2BYL5aF%2BWLbE91LS1IgSSjNB4JPoaWd74YUiwEiW37LFfuytCK%2Bv3Bw71lgLuD%2Fhak5tDJAdxdCRzXt2liniN2BBUyergr8BPvC5Bk1AL%2Bp86R9OfD4lo3wqzzyigHkVS0vOXxurxbrbuFRGnvQnkXeZqWU6iN%2B2%2FhcAmANu06xRW0YGn5e75KRm4Ed0KWREmIM8UsOP4vz0nuowhavCj2%2FfMj%2FxIqGUHamKMi5I2xlybtgN2I%2BInZTaZOxDm734h0RvQ5z2kutqCp7Zk1NFr%2B38AQOzFUZBve8NlkxXyHPQnl%2F4S01Q%2BF7NYcE09rOMkKaT0d686V76xXpH8nd5hvUeUvdOn%2FGXBLBrsN5ssjY7XqijYc%2FC7B4joBKZkjVl0K1QtwbnnD7CPldLRRkAil4dCFGPkvfoJewT7hnJ12CxySIPvHPy5z0iP4BPyDChXa7%2FhOb8wVZ3e1zU7T0L4MSPQJPO2eDIWcuGtxJcXGgrtrl49q3hoLWzXQJ%2F%2FAnKcNuqpDEZ9oZr%2Bn3Zhb4wgZviwAY6pgH3PYC4K7bwDzkAg5dG3cpzvL5eAgC13yo5vWpHO1X%2F%2BW6dtUsarEdHYX0qdz4BUNspHLz5e4gY8vQ194frPqNpgp6QcL50e2hdb9HyVY9H16RIy9QyumUohAQRQHE6sHTU0k%2BaeT3DjFjQ%2B0u8GtD23bn%2FprRDcq1Z2akYtTGUaKrz6qwgQN8mRmaP6DKOR2xT8AhnuApjPJ57ChcnKL9xRt83sDPl&X-Amz-Signature=a25a3f51080c09d9042974b3b8b02402e658062108a4a740fa60a1db80ccd254&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

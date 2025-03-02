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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466657SQSUK%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGpJw0XVqoOV1WyFEf%2FBtBwaVtRb0ZZPRm75%2BRzVwvKnAiAYBnSWqNYDI%2BFvcbyGLHA475aAhRxdumPI%2F3xGJra6pCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9atDHSkigAVUJ8JAKtwD1iKiBR5AqYAE0Dze%2BInILtj%2BLvkiWRhUCsCteV%2BdMb%2FzR37Wyx8D%2FWsQZGYKUT8yv8yQACpyu5iyLursuXAp9T1xdfzQj5K6EyVfbI70RmPjJpckkRdEa9BPrc6TzwoeJ6TC1JppQami3nfgw9Hh0a1n%2FYZW8uXjrF4wO9qunB0AfEFt4qBJJLTT9z5Cxg0pm5psM890xhsuu0momQ0B%2BPfwFW6QDYOlw7nSCuO%2FCgYnPJT%2F7TVM0olquFcHObAYUjhJMNEOWO0qyAs%2F3T%2BrxyWNgD76X2GosjesXNO55Jud7KgLvChsBBndOEo2PMwQ2TIqzIuZYbw0YC3F89TLrjKX61%2BFjp6JMMIn%2FeL%2BHYO0%2Br6DBlMfaDl5kLfGXHqR5GEybqD21VaGH8hwgDXLjP9bv0i6bz7CBbuPl%2BA1SiWIaUm5TzGw01wEWAd32ZDM4%2F3FxbVyDu8TfGDSF21YV5kQgjZs%2FvO4JDX8TiIiHxaU1i%2F14Mb4sA7F3QescaVtHhpYbRVtvdTKbaeNrG3tnkvTKenxbCrm%2F92ALs0nkNWq0lx16qzB7V1LI3xikTbwj%2Bf%2BZvMYvLDtvNWDkiuRp62PTqx4FcfVjotw8r9gvNxlStN9zNxBOsGA3Igw7dePvgY6pgF0ygY6LcEeXhwrPZCzCzNAI%2FKgqwmNw5VCBcsmaszVv6KRiOMbnImfaaaOkR2wRer6LfMscghTWFqB54YiAV2SlDNMBRwLjjYJ0P%2FJ4ZWa5x3IeV6635iGYhbhMQKP96CM5emGvbc5IOvw2gNOP9RTQ27dRuTWnsZSsk0ZFf2QoOQTA0PIfhri66uuFFfjPfWxwRUNMcgicsrCmHecSoPn%2B%2FK1c8Gu&X-Amz-Signature=b7ef19aac4aba8ea11ff740e7a7c8344466c0aba56cd3827f8731c7d7d5f2693&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

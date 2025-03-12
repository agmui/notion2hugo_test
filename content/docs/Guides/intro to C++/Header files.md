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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVLALPYB%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD03Qx0o3vm32veIQpAVwjk7XJTG2vZi8CMxtn02BwzVQIgbTBTCLy8rvUA0AdaYCiEhnLEf61FpG%2F%2BJuHR2tEbWf4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsjnTPvf1qOqxNPUircA2680gS%2FNzNgfedj2vY82uHiRfKccsw0xIRdH%2B76xwNBRo8okcK0%2FE%2Bfo%2FUJ7ozks03fEBvgv4YYTUWbXdPpguNWx1YakoxAkPf70J9HgMizDDeHVrz25ER6EiH0ThdORVTcyhQU%2BA5MkZD2i7dUg6TnYGlzyXeE1SW%2F7DiGrsAamBHy1adcqo5Irfk4eWwLieGL9Fb6pDfwLvGN3tKq1r2BJ9S7qt2WXhRpVNN4nRakHHVat904%2BC%2BWCB7yXUOUAmOBltx3hjuN3RglrtAwb7%2BHUT%2BaUhAVfqq8Yv4Rp6dOYs3Y%2B76o88bOS6VOgweusc%2BY1dThEcsV8dncih8FJp2kb6xUZ2ToOg41EGcv70vIV5%2FVEq2sjbFmAPl9zKjxeKrwqlVQWdsK61T1YX1%2BTB09cahMVpfoFnDTR4J7zReExoMVTJeABkY065NczxtPOaasNlgYWCng3%2BkIQbYUlwl5rlnTCizyTXmlijQ4y7x0wIik16WNtM%2BfdkMvT%2F6A01WxMdI7SHYD9SGn6m9zTXeuUez99y9jIGGWvbNLm4rtfchOoxsy6e%2BVeBfX6iu5FKhAnlmWDxDWceD0tn4n10OmEE4xs1WatWyzogN%2BUSqSApy8XpEvs5qNqScdMPj8xL4GOqUBoPJtqM5uhbX4xpWtIbsF6uTcthSlnoCuSZnbRKoQ2M2%2F%2FiZujiHk1xsmZ3gvcEJJBNJx5oxVlrkvVMSc7QiPQOOYXZF0HI1F1fir5a4T4SiobzSgPaWIoldlj4Y5owLjiApw1kEjxLrMWjPjvUggitK%2BQCxEEO3dEkjH%2FFm9soyR84AyneRDk0D5EwrjuA5%2FJG0NbN5OaXAE9SCiYTbeKhi%2Bin71&X-Amz-Signature=b5037253bbce99e39e4e0efa736aab0fd4a65d239a478d70797afac7084d72a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

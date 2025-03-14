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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XBSODO4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC09GMsuZNwiOQPRymaxbEcNXCT9yErKg%2B3URVsur7nQQIhAIMI9gJ7qm2sgD7E7EnRXp51iiScmJatCmMBF9shUGMHKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM3QSixURKP83vqt4q3ANgE6YiyqUmP39K0lwfSKBC%2B%2B7rzKplzZSI93fuQQpn0uwyAGxivBgtgFNwmpMeJ2nppeksDiYsWkqsQ3hslsAyrUb5HbcivMPpWC3WnsCuW4bTCwxskQxwCk0yE%2BPSznJSGowktvI4JSRvUwIN7Dlt8n6o35QBAKOwQbZBD%2FmlB3UR091k6fEF%2Fhdjk5V4qeHcVPaVIfQx4wFg%2Fw8SVpbiXwolkG9eAo6lnTc8Hqym5wBD9PCWHCP0uHkRritfPNnU114EWVi67k935G40tj1r3kVe70r6QBWXRSPHJlmwUMLcullmm8wBWGjS2wIg0JRljo4u0Zk8BrEeOgcsTaC2Dw8KOwLXguzETDJ8CEqbZo1wqBEJaDFtdNkqK9H2Hv0DQJPZsIOz5IBd3kSiaNCiPWkPn5ZGk6pUS8KuX9zn4dAjGEGPVlzvuW0%2F5WDQdJboMiL9VTC5r5%2BDRuRCXpEXmrg4dS%2BjYYiUi4OuA3IDIDHy990kZu9S3MKdO8rfsOK1UbI41D2ltLHlouyDq5bEPw7QBhMBYoQJh10rYUO8gNS%2BQtEcSs98se6f4SL1TSSL%2FcXVSoy1Cdlit6R8wFwc9nNzSRbfwIZyfkgzwSylNpMy%2FnbyUXtN%2FdUTtjCgwNG%2BBjqkAUDkUJ1ru12%2Bm0rbXkSfTYApxQdPDut5FhEfQS4CGRswpNrUy7D6AoAxpoDgSlOgxOaFLYyVC0Pw%2BvvInxaVHzTTc4MFOlMCEFqUse7BlnaCcOqBctvn1h0g4MOhEhyqzmxGnaLA3MnH9RnU0BTmFQ61UzzkdfkpP9qeifvh9qzc%2BZgYST5D6LOZ%2B5km992z4MoPKjZfUVD8LBMRbC8bP1rxq%2B29&X-Amz-Signature=6cfc7fdfa599db80309867f7137608258386c594941b3032d2f59ab1f3e78fd8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

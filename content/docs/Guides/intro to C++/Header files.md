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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3NYK7BS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWzwOod8md72N2JUWCK33LiL9LkN%2FkDEY7dwPMKf2HjAIgUw3NQGTQRcRTlRnCsdnjjEGTVqSeiad5bO8dRkVq5n4q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDDE41fiHhyiN1IHIPyrcAzbTfXKCSAhOYYrlJ44YpcUTNdvyxH3lhPcYezoGN8f49sHtumaf6AxoaKIMIZFT4A5RZ4lQZYR6mmE%2BZQK8ldUKI32cuYDG%2FYMqB5NEFE9o9%2F9ZyCKrcTkDpplsBPaR5TbTGBKO7BZctd8ltG8WzFvO99eWD3gP%2Fcgst%2BAuDZCCH%2FK6yGechnR3yq9l%2B1vfBqGrZV6KIkhEhNTk8xLeCJ7%2Fqg6Q4QTTwlCqtsXr8ERJMO5aJ0c7hZ0Hvdq9IzGvUx3VElAXs7FVNqXi30gx1Ew3%2FSF4RB1%2BwZyoTooqfmcYCx88wpR7A%2FanonzJxsVP0%2F9m6S2P%2FWOR%2FIyxN%2FZBEsTXu1ImHA%2FNI5VfVwG7Q6iwpG%2FBEBuJbEZ7YxNAa9NSLv57c%2Bn%2FklkvBcBDlVXpN1MqTEt0rXtaf6uXdo0TaLc56mmXYg7VURJ7pl7QprJ5%2ByVO9BwQXIgugTnCHG5GCEiR2JHa7qWCJjIlVzmyfcwcw0%2BjAjzoyQaUEy2XdZedPGxiAz6xJMTvyZVQquA6EXkZcd%2BUeWM8vntrpbM1962x8%2BkG6dsFNpbt14Q5cPseK9nsYTpGNl%2Baucb5iotiy0X8uOnnbBvQf%2FlkJMy%2BbIFpXrIxlaEkQvgR18v2MKv%2B5cAGOqUBIKDUuMJ6UFYlFp6TBiatuBze03WhG4vrzms6lE5kukvVhRnLP3VWOUWqtHO%2F8M8UsHUG14FcvINJ9NqtDY5pwF8aoYrfA6h3y7jEYlgC5YXWKuEs%2BSQSwRPVmzFP8WWEUL%2BQUvhnmUMqUCh68qQzHuvvLbiWRwdL4PtnbMiBtvi0Vb%2B84J7hZvMJz0Cc4Tz3yX365cxbwtwOrZwbIgDY0N4U12dI&X-Amz-Signature=3cd9a5fe01259304159241857cf710f0016ee05857bf2e660d9a618d99358d5a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

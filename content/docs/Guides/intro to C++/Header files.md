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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5VWR75%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICPzVrQRff5QihJA6ygNpjDsWA%2BzAwK0QP3ygUMo6KbuAiB%2BtJZEeqJ7ZjYx%2BvdBCrHzKsTX8IHJMgzwvRMgs9vOGCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMDMQvsfG7jgIWYY0rKtwDRQRBSyFtvJsxNCUVNd8e0KbInMB3k7RlmXzzePLiM0fxAUGC4jI%2BKYdT6hKpd1dv9g3iTnYI1Pdvf7BJEX67lFxFlQW0Vv5t%2BjA8qWsR1ROuLz46XrQI13qRznTDd2Kae3xYfRHus0Glk7UweBMrpnAI15fI4ZH1Qj0dh0PqR%2BrAqffamReayQnAzq0fXDamICgzSV6ygbzEpnXbywsyRmnCOOkD9npnMaJYwmDE56mexUZG21aRf%2FFwpROv6aZ3TOKab9zOyjNnay5UmXjaVIyl24L3cQ9ol0Ix8Aeg9oEM%2BqjE989ffOhePRf8wWUYfLmFIYKafkpU8Fd4Mfw9bXJq0fWrOCAiAhik3YkSvfNbJeCvBggpldod7wWMQ4cCy6UmXqZYkLFIMlfvGXQSM97Hkpj1pldX401ZVVIDq0GglSv9ojTnmlzS8UvXmS%2BiVktThlvFd5bBXMJTKxprJqsTEZJ%2Fj%2FPTL6rUYuulL%2Fj7AYY2pMBKhlJ%2FA3eRAzPYmdugRfhoBRrgbNwLm7uhVLOhhiaNqvR95GuibDeRPsN6xreKL5%2FsJtt6SMR9Yw4nuJI4tjKQDfEK2Vc9gI%2BhzwLnXEOfp4vAmaQVtfyz2Wv9hhgNdMCQLzxDI3owsv2jwwY6pgFPPikdXSP5YMO3%2F6I7wgpd48NQEmpo3kqXhPPfYer5LG4oG0P5kgC0O4%2BaCMQ37lQbL%2F8hE93CoOQFLaMHj%2FNmA861A7wAEiEUj%2BSF%2FJmAqutwJ1UpUrQJHxCWvHRHpvxuP2rkvtgavTidwZcJLDKhvpjrKih4eIOA9SUaMWcgL5HXPfLS2EQQYp2%2Bit5W%2FibXmN5WdfWP6OTYtVPgBrzNeDrTM31l&X-Amz-Signature=7acef2d99ffb97d93003b03642fe9935c2952f0b51a0ca06ede1d5aa1f72a66c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

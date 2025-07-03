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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVRURHSQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQChVW98XpTcEu%2Fqw%2B4R2qpNNWcXGxa7pBIPo6kWwjhT1gIgeMUyGat48MTOOzyITnBzFVVLzzB5v2fqnuHO2F%2FdkPoq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDKKYhKe5xps03AAogCrcA2Y9vo0aOFp348vuhSjRoD0%2F119zAeDFJxnPKiLJ25GZFQjnXdSIzs9Ga2gYCfPlq7pArdrsY6gYLeVozEmwHOaA%2BjK%2FINWUAaPbXkElDjQc0zF32VxzXmCKarnRIOonSrxK6KTEh9xooMw%2F9lVimWM0%2F3FuYGYHLCA95ANKes9Av0vRMu3qCLchX8g4ICBD8FHBLeR2sz%2BT5sSo4DVSkgeP0O%2B06pn4cUhfC90MaOurO%2BjTDA73YA9tmdV3b8u2J3FO0Us%2BwXip5Q%2FTx0cTTsigNuPJYXc3EtFBoNnLfBC3CVf1%2F9p3Nt0irKH3JBrGMUJgjlpOLMhs%2BXVB2i8jg4T5kZrTA05sR2HA8FJIQMJGy%2Fwy60UT%2BPKBqbHzg0MclN4PVn7%2Fjcz7Ai6dS0LwoR7Di6qTLwxFfq%2FUs5OGAogERkxY3NXmUsZgBgH5RFw5VJG0rURHWUGsLYzqpo8tZZKpsauMSZMzZTpTT6N1KJX28ti56wwplss6m8ZQ7noxIv5uK1e600RUAow27LpqklYqi5Itx4L0or2957NvacGSBfvf401Qr9l8aJmeY2st9%2BeNNw7E6cXPuo3PNl6bx1WjeTBmSDpL6%2BEEOU%2FK22t3efrCjTeBz3CesvP2MJO8m8MGOqUBkqH53kK7oTqH6dI%2BrZeFQh%2Fb6Vox%2BU7o5W82XsoFSCF0Oy0ehMPxdnqGHsu2VAJJeAsKTLiQCgoqmVVJo2O2%2F6BQfXz%2BERjcv%2F0GCyVnXKv32H3PLlFEKQrEs1UkDyJcQBBsliqYcT6uvA2jMRIu%2FeEfVZMcF6o%2BVKN9lBUdxWUgT4Xskc4Do1x%2F6wJI%2Bd8wPgWmIDFTj4PFFZimEUxEG61MHdj6&X-Amz-Signature=59e6ec775d0cd5294b7d07d30cb955bd6ee47827d18673703a74a496c4205bcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

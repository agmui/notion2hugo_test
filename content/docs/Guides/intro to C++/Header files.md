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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FENIB5L%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfCUKe9K1OxWKtSS1FtDoPdUcafkaKTw1Dw62IPrwJxAiEA8deTPaRRCdmubEbymgnaszaWdYBGNp4Rd8%2BXMojXVn8q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDKmDC5FAO%2Bw%2BcFnqbircAx7mwfIa5c1JMpemAuLCcT8JtEvuYeXLnwu6lLnxw2WHAMOrOmKOT7MF2CFoplety%2FvlfvFgHs%2FUfXqxwCGvijj1A%2F5Hq6%2BQNFjSl62KYMAXo9lkNerjmMq1SgRWk3VFti8muyrc4L%2FWeN9mjMLRrOVCEpx%2BkmworxL2t6Ndmpz3ZCI%2BItW%2FInB3tsHnKHq6K7tGoDlGlL0hRF955DTtU%2FpGm8whmzYhUUdnql10zTz3GTCMaEjMp%2BvkitM6eFUnawgG%2F3T6yySxsnxG68twemEpb7MI3cxpph7mY3y4BVwzEhFGuYbh3Ie2YV%2BC91oKm2zEby0hd5devfPrxzB8KtR9LInmixLueoPpNECn8gWKKheeQMupnTZNGyi7ugzzT%2BB5q50YtieECBZJFNttmWg8KoNq7UCMBRTc%2Be7MtBjffDuZrWS1bHm9lo6mzVrpmuibdmQx8iLjk%2BsYDw%2F3q1bu5yNZXso5r%2Bg1A%2BLknAUM4OdlSoH%2BcfPoo0ti6R8w3YwHt%2FICEls4PTZu2TTfsjrZgwcO5w5e78SmBMcgxZswd9OPmeB4pzltSs0bFS2VC9EP1xgqZ%2B8nlKLY6IRAMT52yXpFxZCShii2IQ9vHs5loJ%2FwmQIozAsMaKAQMI2L2b4GOqUBSBaGIOr688Bd2xfOghmloJBMptw7ATq%2BpXmmWqn5wV%2BHGcXIgW2Voeo81JR7mYbqVhK4LBrW58d1JO%2BVgBnRqmCGfBb%2F3IDjHL4rL345yWQmMElzhdmRMpEfiN02qMV6gEH8ZzYXMFlF52R7Hm5ao6rgVUtOpfZ5BL1PQGEXT7gpXBs9SgxtlOT1A7z9KMH8O41nlLYNV06lz%2FSVJkbRxQp4h4Ws&X-Amz-Signature=4a25c85e3bc39ce587ba3aadc58177c96b6295bfe24a844c4fe77bf98ec27867&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

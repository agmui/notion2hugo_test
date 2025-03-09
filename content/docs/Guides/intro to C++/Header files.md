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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2EMEO57%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBZbsW1jzcz7h%2BK81%2FJIkyUFVW8Eh6obnEEmJL3MjU%2F3AiEAhI%2FnKmxP9RCLkNFFRai%2Bgzypjl52D63NvjiYXMliaf4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMd33GauyTw8BItT%2BCrcA7bTxX32Iof6aoSybIJ6qgteOlcFM%2FqwPCGkZPCzBQnYBFqqO6uR9hMOkgMajrcRRnLNMsfBsvXpDEvOyX5Cb1J6QIbeQrUUa21tJvrXkyicvZFTWg3xsze98fj0xx9btr1gjjpNr1GZOX%2FvbBNVdjpdb2esfmxyfeIFK0yl66Yamv6B%2F7LzBGzKUIfymURmQKGL9U90QFUlcz13u4cle418of79jpLWuTxEYujLm5byAZrIMTPHsSGYbNyZAAsN5OO%2FmIwtiUCfxOj4fpMT03uuS6dLfzxUEzyASUa9ZTePIrirWp14uXkHVZolIpG5MsnLQGWyUlFIXb55sPKuBtPRhVvWVmGaJmuUlUAMGjBqQb9nxg7pSdOcq0oC4SO1yys0%2BakFoxbYwaLzp9KXbfqPsKvdQYQf6Vnhvh2xaJCl776rJ052okLCDaMLhvgu%2FA0G8iCjRIROlPzgbICWlGT1tGEUM9m57HfSsdHIZv0wWXs3HzNbXE1RyMQ69FmKqFa%2B1ViJb%2B38IdHMK50usWcmp7aG9g%2BPsaLDkn8Q1NaTaj94PK9qXQSRjctCK9uGRco7cOnAkarhZu8DJMiHV9uHJ0Ksd0CZZhI580OR7Un8srJ5VEENePOcws3bMLDht74GOqUBl02hJBAVw1jCPaBRwheKlgwlqbSKCB%2BOc0ICINvG69Zt6WcoBE4mIHr3wBX1yTpjZopyLnWCMOv%2By5B60oAm%2FvLdotQIpOrQsvXZqxzDRpLajbWwNa3mP21WaT5iUyRAUQvkWwUDEZD48IluUWgM6X9%2BQfRQy49R5001%2BczP300OlCYoK5tu6%2FIs7nguJnK46XxRnCV6aXj0qFlnHgF28IGO3t48&X-Amz-Signature=553637542874a7e6324606498412916ec4e0e6eea9057d6f5ec9f3eab2f86f43&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

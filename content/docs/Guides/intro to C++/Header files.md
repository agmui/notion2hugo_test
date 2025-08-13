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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY2QU5FY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpwZoZ9aHxWvjXF9GGPolx7ub4PrDEULZd%2FRsrq0P5DwIgXv5r05ZsLLhGaaj6r0%2B3k%2Fi6LsmParKo7C8hHP6RieMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDB7bPZA2txkOYTP0cCrcA8ryCHKQeUFbGMDYTLVvP%2BuFIsNtrQDD8xi95grfBCXC0N23VIGKJsMhPbnljBjdZZjfYbY1SFeKXUM1fyNMVrobusp2SXqDdKei7HTitI2uNlsgHuXsCQY7rEgiHBXFe7R3BkTewqQ78R67N2GcJV6hosVpUJO9SYdbn36ePfrUSxfSWum3eA1ockrZWDZU7i7OK%2F3t53bsf6aZP6MvVNL4q4kizpywNYMPEJZkgUG1qZxC5uPW3XkzuzNbhFM2q2I1IOP1MajOKAlFUoCKH1CHf1zrUAB2U2HR9wiQ%2BPOy4CkRW0EVpztiC%2BpXgjhttzhB5O7jGTWf3iVl4rK90VVhEbHw97TX5gCfAXnnGfGYMqcjLU30hwoCsfaBL%2BSI7WgkTBn6ru4GBhbZbE%2BOqFVEq9UAzxzcsOFimbO5Qxki%2F7HLAYFv%2Bfb4hh0R8caBhIJhwUNKDXUmkV%2BuxLvyHfDnUFNCtDL64aNUxEUXXcE4HSwgjGiT%2F%2FIkghxGw8%2F5ANaHZpTtRP3OqXdOT1JUZIMq%2BaIwsa5y%2BPHdyOQDGwSHjY42UBdS9GN98ATJnYdyO1GWGwxHBiD7pc%2FMdgbWOqeBCuIaI0AvhYtkuHGhjMp4jpj4Sc8SQIAMsTUTMIyr8MQGOqUBUlN%2Fnu0B%2BxtN8W3g5%2BFgikCBVm83%2Fe3ryZBYuhD9Y95hq7eZudsjaGTltQPA0c9GOLMKSeES9FRsybE8iYux84MYkqa%2F7IYarTIW9NJyCclI3oJgioOJaMUavKz7CczygozexN43B25BxDB%2F43Zua1txoONCZmbLz3N4%2FRy%2Bxysc3XlTs%2Fs5Jdf0hoDXVhRisT9fumcFnrHudj8BrjbeUOpZtyWJ&X-Amz-Signature=bffcf85cb7149d5e7ca01e5cd25c1f9dee07a402107e41e060d91cbb0549b62e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

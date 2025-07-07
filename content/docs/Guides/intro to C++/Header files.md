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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42444D7%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDRR0cgBs2uLwrsURcI5gXUklCFa6BmYroUW%2BuYBZMtdQIgAQFjo9w9FpzDFElxlHOFVE0gVFlNVjvF%2F2sUuudaYyAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLm8coxBw72mMFaFlCrcA0JuCUDGUh%2FcfJIFuX5YdG%2BBk%2B11EvffdZNuqnV%2Fh7WbLb4a%2BtfmtO%2BFTdv8BNWDFn%2B1S7XNGzGE43ZSUbN3ePyiEaLqygnSkEPW%2BCrXUbBOCV0220%2FdrXW5yZhm0sn%2FsdCQDVf%2FZEVgnXvHjeAvzZuNyhkBLw38X8Tud55VKHADn3hlz0hdmPzJ6ttSfioaqkVF2bbJ%2FwhUd26Z%2B%2BkC94nuI%2FR7rWErOeySzPd%2BxMLgoN%2FKR3RFUHIb6k3baQC%2F%2FPLQukzU%2FCnO0bJLavVlrnSiSUQ7XblhHaHGa%2FsIbH1fC7Bt%2FvAbNYgG9U1EOnJwF4r4qzoRK4PSBhbrXChcpGTcDB%2BJOY%2F%2BG%2BhfWHlvG8dX2ZKkkSd29OVMs%2B4xvOTLtD2Lq3kbSztCIMDsQkw5xAaH%2FIRRQ2deTXaZMR9jHYAth%2B9Gh35L2uc0wKynHhaZcWcCKQYo75YYKquy9o7aDE6S7aeXUkQj7QU5n4n1zvl0w7zNtiLIACKsXEqxPwHSh%2Buu8DXAn2B8PP1eH1WSL2%2Fm9yxElZy5cxyqQpRMcujpjw23sBUH78%2F88mM4dDeCJzFYlFOCBjp%2FKI5OEzQdqrZYASV6ABZ8hEZjQD%2BIa2SDWPQU6vm6vqXxxY25MJe4rsMGOqUBsbuv4%2FfS9ThgPWXJwijOSL1avhrNLABWxFgW6IeDxTAoeCdWH8%2F13qrNrhdPB%2Bg5XPXKjqKRcmW9YQOA8E%2BqWyUUu%2FF0H4IU7txp10kUJJ%2BBLHQdQmNS%2B0vQXdMwS8kxIFPxPqmkndtVqbxBVwxy%2BN4lSnKiUFoMycUEwm5m%2FzE5iMsdKiuPvwIivO0oN5TS%2BXMR5EVwve3u014sh8SyqaCOjhu%2B&X-Amz-Signature=71248edc85014f7f4f7c6c171335f7df49b24026acc9627a91fdd507a7fa558f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

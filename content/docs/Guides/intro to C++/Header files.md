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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEGBS7SR%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDEmQsqG8MWpCw1dqscOUGiileK7hW7SLaQo%2FMaA0ae%2FgIgahE8k90lSy15nNXsvgYXzzFTqRU0XqQafOGuGhMvbz4qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHQl1thstpnCVTXXCrcA%2B2F2nE8cF0XttnGtxHWtFglU2sstNKqZ0P2WU3%2Bc66u1aoPHQNdr7BmOouZd3j0ORJvDzdvT7taIeDCfR2S3FyfLwyzP6%2FI%2Bb6MEeGANQCAExy9bu7QBSL9TgTVV8dV2U5Mg3imNnQmt7huBqCHaCeDxG8fWHPC%2FTjXhZJp%2FNt6%2BWGNeMNtdyn3p7%2FrAaXyHFHj3n1gBRnPU8SoI7XtE1gSvkh1j2dUcvZFtxhzmbj6EjVk9fOmp1GsXUJPmuokPt3YntSEJ6JTzruK1CQpfyWyOFHfVd%2BbrB1F0%2FgwUyDNxlZlEY7fL04B9BFXYXNVEzMbZauk1PBAQHUC%2F2P1%2BNBhS2x1v4A4abkI1T8HqRSuIHiqUphBEe13kgTveIdklraJk0en68zSpxFwAQxQ1HEVYjE1HNF%2BNMx89Ydyk%2FsYW6Y%2F6C%2Fb7kDT3VOcaxJlcmhhEX8B1nqAOY5T16Iqn3nu%2FOQoniODGzAOUOYvhwpdFY9G780pLQ2W5waSQcTw8GiIbuVXjrnyIlitS8lGD9%2BAtrNu%2Fw3EC%2F5%2Bf7Yof%2BxXiB5i1%2B06jvGfEcXgaI0xHr4BTuJl58cREkTP2fPogRDXWhGf9NL2VBZJS0uyfy0Dw%2FyaaEJfgXb4tFjlMOy5osAGOqUBkM8A9RHd5Kv8gRsFSY6wKWSYGg4TcGl6OPLXqzU2u0oAIpa6E51w6q%2FdN7aVga7EffmslikJ%2BFxes22h%2Bq45eObmU%2BeqhkB%2F7D02voWp4FVE1OFvaT9YV25XwYeTH4DnOpyvEsvTXYFAb3huoCh6LjjBgwcdAD%2FI0EM6J%2FuH9qb%2FEecarlTbCW1OQUZ7Uxa4KUdVM5zS%2BwDhhJ4hmA3jXqBWBEJR&X-Amz-Signature=9265e23c8cbb7c6fc2ec5e7dfe058bb013ef050ed51dc6e098264854ab52a7ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

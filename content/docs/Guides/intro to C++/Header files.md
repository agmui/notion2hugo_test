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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNBXYF2%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZ%2F7VcCWC1WMj1Cc5WqFldsEFFao%2FNhOxRQnQUmtttMAiA%2BQqXYKNCX%2FYNRuACzgh22dGufNnJSxvCLEEZNdEIneSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfZfLmXUWUEhU9F5PKtwDLzTskpLKntaK2hq4ZVGPVBBUYWTfVHU%2Bdf1b9WD%2FpMhoJF%2FZu2%2Bkbv%2BtP0VnrClkxYV8oZ5m9cxAvwicz4zBaFcblV4OGaDTSPtnYlceu%2BuV9SZbYLX9z1TqVYrY90zQRBDywKvBqzCKCyiBmzJCztO4m%2FqGYRhAgt388MBo3DPY2InvFPIqdRX0nRWYEAT6raPy%2FgPfsPVWLkD5clk2z%2FzhVZ0YCeubpGWPQID%2Fb6f3p%2BGvbEirO8p6h7vu6fmyXLCJoAeu8Id6NU5ss7RWep%2F70aGX9fMb8tRfxfCY%2BdUJXtiHPzVUmK7277icvX4cifz9c%2BNBqcYl12A%2BoOPReiyx1yT4TH7%2FFOofCa70I8cMH7zwWqL4a59%2BQqPJf%2FrS7ckTt1BNJDrLCK9VgXqnEzSLMZqyWvbeMQBVMA0FW5WrimVE5jeeSiS1rjrvAx8sgJTtnWWHck3Z6M%2FvwEqm1iI6%2BIiff6NIPVjpoGBVl8z%2FjMVthTbggejKiRDNlZu3hCeduw7rSm6L41BbjVgQ2LEhSChATW3RYB5HSQXldY%2FMnrRljxDNRHPHiR425MIa2XwpRlGCthXEZDMUPQOUvyU2gyCfQkVDWRs5f5iAgw6xIaexkBkAD5wmLOEwuLCCvwY6pgGkNcUbfazszcg5O9hGWe%2BhkDDsDe1IQcOL3qs4hwzckH88JWs9X9pTb8c4bQ3GPQqZ8%2FPSXXAqGp6j7HtIptHWxKobfuD5n3SEgQ7oSxL7VExoO1oj6MzpL3iK3QzyYUGKl1ZwIjUEuVsg5Uj%2BfKzNUAnOUdib3XF%2FNxdq1egw%2FkQvEUKTRRqmv53uDFeZqafU73n50VVLj6nzRn%2FDYmJ1P48hXD%2Fm&X-Amz-Signature=0c3920a13e3f84fe2a04bc8bd2e63f3e8ce3c299a0b7d72cb55d327fdca0a6d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

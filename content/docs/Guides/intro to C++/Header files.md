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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QVHRRF2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDfXv19BK6salbs5LGgUyrWicpuqwkxbkIa6EgkpgEh8AiEAkTTBCAVYK7F48SnbsMd8EJBkwHSXacyNTrKg19eUBKgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6IiHDcVrs6WmunHSrcA8w7zhOZXdDDo5Nie0mVn1mdGM7QtGA1TkHpuTEYveiuv0yvbvkyZLsLmINrfikDmXXYHdBgUfKySk5iGpB0UccJWABnadnrvz6FKKW7HEWQJZlleR1vL9iKJx%2FPlIDvldmikV2CaFn%2FtKTmwv16ao9hxIcFW24M41m1PfrKVlMW31ahTwgw6ukRgPMgSfypJRwRVQhbmkCz9qniYXA1HZW63%2FAQD9SOptIetiaHjYnAuYymdO8Q%2BTxNshhuRyy9pKmFmwG9EKBv9zTyBxzUlS%2BArTTHQem5D3Dqqynet0saH1WE8ZMrl18GcWD3ZtwrCatlqxqii4BNk15dsHbWcmQQBInCJVwyfVlf2uJ70AnD8CYfA%2BnseH5utome2DzXWQKu0Z7XpgjD5ejn%2FFmyjjTEuOBG17qd%2BRLwATA35CEvH1j%2B7xMNDxi%2FkrpT8hi9PgR%2FMu4vI3OYxHbAF5lJ0LmTDSabTyoGNlBeUz3CY3wsUdqy0ycLT9WmgUqrh%2B2DqFDsLXC8BHhHLdfUJgPB4TuTLDwUPuB8gDeDI8EQhRYTl7QG%2FaN0nSugdH3aBEu%2FWqMG6QdRcLBIHbocB%2Fh1pQS13xnHdweCkRqvFVteL1zRq6zXRcQxqtvLe34EMNzaw74GOqUBC94n68s7wUNyym2zYEL1Yj5JSpw8SwlKBZmas%2BP6yZqO82C%2BOuhhiIhx81FsoTalo45dmaQdB5E1%2Fc%2BbhCx1BrBFFzkahXLLDZR5xzhSsydv%2Brfj8CEula5rjp4ojXNOxtOY8Jo3Ohly8xTVTACQv8g6fl29HVZzAt%2Bk7QBeuzGHpujgD8HLR894XDDZYLCjSwsjimU6Vt8tbdP0SZA4hteV%2Bba4&X-Amz-Signature=cc81ec6e78229be45d0cea446684b8c88426d3e5f2c021b635b422b1c6c6559b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

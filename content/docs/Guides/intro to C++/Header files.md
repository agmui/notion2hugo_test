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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ3YZ2P5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFYx5vX8%2FfRxp9DjiJF8qm7WGaPp5%2F87NfIynORt2CLzAiAME%2BndRla8c61uZRHW9xAsNYCCzNQ5UneD0ekc3lsemyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMteYkBFc35mjduXz5KtwDK7UV3fXqJdIMHr9Lh6ZHiFa7%2FotCWHW3fhc4PoXHgX4rU%2BffRg%2FM6cH9zsJzJlUsxmOPvd2xNKPRkuyFfcgUWcf4e86eg6RoST4GCxwevtJF0Q%2F4TDZYxj%2FcTeYnp3xWgRztBQc8nsYgfqwtECAHptTtMJnyY8yS9dP9SDj9qNHMEzNQGWDKik%2BgLwg8m2EsNQbk7XsyI6X0wlVO0FcH4%2FoERK7M5Xo6h9zr%2B1Ff0xpHy4UYPq%2FD%2FQr0%2FFl%2BZkAct7K8Z4nL0Nahb7N8XW4AQxxZEpPNaBQBAu%2BiiZMQmyQFoV6BSmPR41sGpe3QhfFYJxc3swNeOlTAL8VDw5cIhq1fO1W0Uv4o9UpUrmgCR%2FO0RRTRJ4kMUCW2Vvgnlh81xU7emYk9rbS%2Bq7k%2BHbSDgcGhUjcHx55RmrIZOzgWfILWK7YnIoORsea7REByGKWRM8ZPlfshFb6PjHga5Kmb3EVKG7fDZK2BHTcCZNpyCU9Hdn9QNw5OoKSm46GEoso%2Bj4Hh0F4zwPyWMTMEOxqv5rwme8SibkpHRx3JYykJRMWA0GMb6%2BlZFUdbAdb3uEoDCC4NGoO67owWZ%2FaoPo4CZWBIsXyQB6HEekiS2RWrSNUNLOaK5h5kQ6jnrmEw3MGTxAY6pgEeoEckBvZLUo4qYwc7b2G%2F%2BAbemXMaJ4%2Beii3aDX6m8SkLzkUzMp8eGTfvQnrASpPJ0ZGeGhoiV1mMjx5LnfAZiFxQNiO1YYNuNwJx6GMW%2F6KZyXTppFGDTlI65am9Vzp22Pj5QGraujHbtYToT1qw%2FcSriJzFm8alfJduSnNqIdbGWBTDIMkjzalUyjmmWlN%2FpnY%2Few7mzPLdujFZu1L%2FyHJX4v84&X-Amz-Signature=4abbd978e3a60654f88194ffc9cc5003e2d90438d8003ca703d5a79aaa222884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

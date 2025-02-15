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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WBP7TJD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDcsqqrL9LcMec5hiKOBKH2T9Bp3LHiVtwn1aIUQa8heAIhAIwtn97OHJKdFx3usFe3xey%2BUcAPx8bTUrCkDfzZTCoWKv8DCEcQABoMNjM3NDIzMTgzODA1IgwTaT1lrVlyYBfjbZIq3AN9Q5ZKjdU26ZmW3ctRTZ0EKwFtD3XCS6fnGq1eGUmsXvWeywt3ABzbJLBUKAcRBXqgJK6lt7vcwRfCRNqBJ%2FrttvpoVT5igOallDEa3LNy9toPRZXXvcyf856sJ3Jq0FOqM8qAtkKf3G3k7WgF7l7nfPaAaNkyJLKRxXu0TQno4hlj1IqhnA7WrG7%2B8oyQJYv2%2B7uoymFLrKu8Xc%2B3RMzkDr9eSUmdaYV3rylno6D6Z6YIccCkrJy%2FsU%2Bs%2BcnKXbfDtmzhQa7dV9bmGg3hlnzdo4ulIdCFCH1Nk%2FhJRBm9gGy67k9lhu%2BN3mraFxPy4TzxPe0WzYgHLPiqthtWBvVazE82jUav%2BsXCOtWr1ND5CAhh8SLIFxeciXPebFOkG9umtOwdpzFPDR%2FM0HMDZHaXySfOF9xTQnhUI0YPHmfuw%2FGZMYhlv%2BsrCNFzhQDkEgU8wo5jT9D0taGBgtgWfX8A9RJdGJWAUw2uN15NX4sUKGsgMp1gqCkJ67XZY3132CkBwA%2FwrwtqzVZzObkLa7XAEJny4cUUcfWmHe4B%2FnfzDiV9gqOAWZiIHnZ7WvRjPnxQoDr74BGJSAX5eh%2FMDoNTz8L%2BK651PsjDce9rQ1uxyYBvVNJLakjABRSNfTD3xcK9BjqkAdr4A%2Bvd70dFPHMw0XNFW6wHEKavSBjvP0pZ8aaT1XEkAlM8kgPrGR8Ht%2Bt%2Bcwaq2BAXHaGfBYH%2Bh%2Bz62SDaK3EgLrfY4ynYHuHhM207tCe1VRYhzp8aqeiP9KshU14PoOrUVMIUB%2FdxBamaZxEddlmHK3qHNh9vDyIQQDe2l9LtVbe7KWAfe68dwhJ7CgQcIPjIEF5WJPsfROR8vjQCHZ%2BddoAJ&X-Amz-Signature=95cfaf31476b7438df8d7a18dce8f04377c049a3b89419cd23012c6ebdccc543&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

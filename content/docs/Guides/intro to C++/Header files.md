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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPDCCN32%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZF0kv7j2xBWGbPpxrZLiSVDP8DwRrBwgTsv2GeOYG7AiBBXBSYWMWrKwSLtH3%2BrysZN2gDJ5Iq6Px5wZaaF64liSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMMGyy%2Bxk6EqxEQDfUKtwDU0MnOwxzsAGS0Fw%2FsEa06AvFzLwWkbm%2Ffd%2Bh6mT8AiQNNNYBKlTvAyobjq71HGvpTKJ4yHmAKsXaIVX5IRmMB3xcngZlzRwLkWYvHwlbZEVipA3RZvP1QaqhgpF%2B8P8Fr0zy7XOFzB1lzr%2BYh9YNPQ4apdWBFl9xfuvW9mstF35v6fFnIQcnLyJVOR%2Bs%2FUxgtqB2g%2Fs5yLzsyjnwwibZV15Bzs9wPJtUK88ElTgwO%2B95iNJODGWSqBhtN5mIkgATjwJn5Sp8BFpvGFvZFO38HX38S6Haaa7apG%2BUH9ttXA7qLaAmu%2Fj3d5UxZziQDejL3S8erIk6Ne99%2FX2hPpSQiiRVMajhZVvLUyyOzPNXQ%2FaySVVQ9v%2BwL2Z3MMPv6exF2x8ylu3rhkCnLpDWGB5jqB%2Fldm9wRqHB3cN1OgMtRpjxRDQu5vk0GBMHJYTwHeQl4xdySpreYxuy0YQhUBwSy%2FDox7f82F8c2VsxMB1CMdtPb1fYEqQlNZFcB0IGhVYq0NMVyKrdNerJzuNeGPCv9kRLqkk26hA06psLACxY825zUL5HdwL5vMWsGgY8FcLhzV%2FLjOYUi2c38H0J5n4zK23LHYm70VcVdGp9NtZtduISOQZa%2BMfhI41Rp8kwgpG4xAY6pgEC%2FvTRYEHBFl3FWAhu5AHLzahVgT8X%2FMMBxqopw2Q34mj8pe0pF3EJ00TwRuJiOYNwWqIsYjgPzR040rhqNPpI8WKTsUgBeNHPstYCnBqR%2B%2BapzfRmO0vKwMiOUhLOmCR5n2KLBn1AT%2FCRj4QcfFkcv34IgFRRnlei8UH0fkE5EOoBkKffsvdBL7vOxnYFY7g7Ti11QKLFLthKiy8wTNRsLaZS5Rqm&X-Amz-Signature=cd807a91e368971b0eced385416ff339555e1699f5bb2371a98299f0723646ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

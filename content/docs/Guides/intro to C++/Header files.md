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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPG5WQRI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIDlqXT3tCAzwmQLnFF5KRWaKtpzluaDPbTChmnixa8L6AiAmtGefanna47j7uIEhbCDxTId3rUpuZHaAVordRu4zWCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMV79R%2FF8zUHK7YbO%2FKtwDwurqV%2BwfJ5UJNSVDaxHR30JncBVrjdXBD7GkjkviCozsLPbTWaoc1vIX2E9OJFcFHuH7WqBaZUhcn%2B83%2BUtCNUcSYj1dRL%2BqNqlJL6t912P47iZ76q9%2BkitdqxA9daoNRVT8B4zjIqoV4ikU4vTxcGtG9TZ3BtzgQr16UdWPHkMfpyFlFrSsGukEB4QXWK29HfusHkwnkhTf%2FGQjpH5K38DQ%2FlpuLtGfyVdwPWHfxgYM94thHtqE6p6uu%2B8rML6NhDp7AXXoPk%2FudtwGs0lRz2QSkToZ4g4cwuxjkoODOrR%2BztukJK4nOE5qu3PsJUa%2BXa2Ls1sy1Rnm%2B0OeUd4ujhZzSiqeaf0Qsgs7JDbPzkaGaVY5r%2B%2F%2BzQ6V%2By5xBrs8FCGe4NT%2FhkbLZ7TjRbj4OwiybVAxkOk34F4MAN%2BIDR1e4%2B4wmLIFI8XrrpXUmWroPR6dWc4D%2F0fvgM2K8BvNhRotHkyShD49YBKq4f8qwkO9Si%2BYZSEoOljL1OjRsha%2FPo3uYUP%2BrKIVSugwsOnghnex%2FuzMQkwqXpAaEYNhhz9GFFLjY2bAtuFLPi%2Fcy646nmc5zwRqeeTSfJ6q8vtMqNV%2Fg5MZyabeuKjUSn6zfY9JhtGDCPGIEz5hgvcwvtr9xAY6pgG4e3yISWwQP0Fg8CCpzOkLxFQwXFTSxIfmQmMH9bUkrvi4p7tdwmHluhMe8yKVWhO%2F1oQukoPwUkbmjEodVRX8rNqEv21kBKBcR2U47BF5d%2BLQNEvbKwr0wZ5f34CTxYDkSCCKyOzMLNdrZjJMpty%2Bc4K6MDaCaQLAULkiwuZ1OwAQDDuGnV%2F%2Bxpd1X7VIVPgPGsJfhCobq0YrJk9DgMLcyDpgBtYB&X-Amz-Signature=58ef74c84444db70318644eb81c3f81733ce084585d96f5ff1e6ed11bb8901b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

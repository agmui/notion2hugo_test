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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA55CYD2%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGaiEpcS0vS%2BEbNqmfJK75PN2ULnhjGro%2FuBeDiPs9F6AiBStWpoguiMnPtXmLVaHPt8JZzFJAeiNBF3S37yAzHFoSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOdE1yvssQoR%2BXkhzKtwDv9DiVW4DnlvxwGb4ZlOesJI0H0FsbRb8F3LOIWM5E2kFJHtqkegUvuJxxeCk0EVAv4lTF8QP3F6e0bwGwPmwVtysJbvubhV2jFSAXwUOpERQxMumeXg0ZEH5e8inppMOCiCpz3dHM5g3UxzH3hF7s4gwkqnJrqsmhmnVuvA%2F8kn7U5bET8UfncbDCN8T6qWjY2Bf6r1kr%2FCgjp1UPiEVgzwJ4cV4Ry%2BXORRWsF6LnsaHcNOXVXhW3Vix4SgVzC9vCBozakIGib5OyTk%2BDsOeVycVPIUmeskd45Igk%2BdxzZ7m%2Fm0%2BHhJc2XZTUCYEw5opmrQshlq%2BNDsjSJ7ff3SVkB39nQlZx5R2Gf4fgBXU4RtdP9leQhbPsaBeHjcJT%2FZp3FOAhtupZJ6KbuiIoZ4cgp3O%2BRUnRn8VoqUdouCrLgzqP6cPEIcPF0zlwMrdd2lAvVGQY5tgLwHp64gvX1URjn%2FnUKS0ApfuqA4hKVjWayIRpDHRCLXhZwVhkwUGPOuB%2Fo8fBZ%2B2eYRVhoTQmYR9ww7n%2BKieQZjDrGwM%2F1EWyKZQlsAwqnKay%2B7VodOj8DPZ%2BhUshGyu6EemYQp8acEowGQFnuHxyBjziYwJNV56LH%2F27zUQHi9hRjN05CEw7cGVwwY6pgF2vLxW8X79FZtntdLR%2FO90mnDD9yUnLMKRyOWs60TKJXcLiHwRUlXNvF8r1wwF7pHEbuzYgFzR9v6zmSymkdoDijl2d5g36qpvbUaij3wOzHEAmqN1eaN16u7WKrzgd88707VE0Hbpjm3gHYU2u8scqwf3UGscpDTzYJOgq6cFQFAfkvL1aJHJ%2BXjzUdd2UMmGSD%2BAmiFXG2wk7QvdPoa5NweCAbPs&X-Amz-Signature=9f1b6303dc2ba340d818a33c89b6e21fabb595630f440b875a0d1c401369f971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

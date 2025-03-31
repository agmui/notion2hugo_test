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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IP4PIAM%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIGnL9HpIxWThGCs%2FAca9lU2qX6hQkMz7SYe13jjQ3Zb0AiAFsrDZxWg7UyhoDZakIUhrdwhuiJF6mHeEDkP8kTuKzCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuZ89qyCNzEiyO6oWKtwDiCkhGVluJe0Y%2BxHgSB62aUMNcjdsw6KfwQlev%2FoEikHJPpBnCLyUp2UGRUEbNzEPlVE6lt1kHhDUcGxlmDvwOZYkUQvNDcVXXA6E9BzAXMkdRg0V7glVxzailbv5J8wwR1ZPERxuSyw3DR0vQlhBVjmbEBeqkNrQdwIIXg3th2lPU%2FDtauYKTOBSe2JiffPuGTX6tso%2Fxsldm%2BY23%2FCLj%2F%2FoOGLUEp0YjO9iw4NYgIXl7wavyo6GOaEGFGP7EIsjV55s3K7ptvnDrqKDxLNs6GBvgjpuGFyW9v1NX2d4Y7fvHpA17M9Zn4muClIPmQm7zRJ9Z4WQf6ZiQm3VgIAhJyrzs3W2Jii9xga7MoYWScMSkg7AUpuf0f9rmory%2F%2B9d7iNuKR31YWzmUjJS9Kw8Xl%2F7nDsbkB%2BENAh5pCwFcczZlHUEBrI8LBjgORDotjxrsTBWgRLa6C3XBHpfmiHrfUPtlY%2FFewTYlxe%2Bv7Z%2F4UmWQSNmnMbcTvfeDLRJEAUqAIjA8DGtiFfB6KMVtvRcWqzrvWaQgchBuo5YnyVONPtanLwuK0P0hdncTXJq5zId%2BD3dlS33IiaJeT6QPn2E7%2FNcgk2hRT3gIGgtg2CyS0IIcpLUlZD84aT1YWQwwLirvwY6pgFrFA%2BRmzXcdDWcJN6Dex9XXIYZM%2FzYloCnKXR0wHZ66NMwkMY29%2Fz3KqT9fVPgbbVAj4%2BYqp81ixxe2t8sxv2B5aDNNs271QIrxYa0Z10XaGbjjK5%2B1Bid6OBR41QV%2Bd%2F3kdtnjkUVrYWzFHSVWzCSFqW4Rp67HUMsETVZtvIPjWqhuPbR3HvbinC9FdmSbiG4Yvq%2BcA2VpnMuXhyjRGysuwzDNTH%2F&X-Amz-Signature=fd4b6909e571e0e37d6470e305474b1fc56c35181a992472619611347f1dc899&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

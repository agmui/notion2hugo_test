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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKJ46VW%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkBHKB%2B5qdipT8DnGUQGN1pPyMYa3cr09Ww4XLrgM%2FBAIgJril2qBn6PvjuWVNGZw1dU9xgtmdmlEynms6DsRqvIcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZFQv4hHtpFsmojgCrcA5FC%2FgRVMVFESzvCWobBa9zxCUlZRDVGzgW%2BSGmp30gkO0YRXeLDbErtMgTs4KcD%2BRmdatuLoxS0QweWzp0z4xLhOtP1V%2FygghMFfUrC%2FXm93Unhx8kFXGKZ7187PvkUGhsJYe3csSOr0A5Gdvac%2BjW4v4Xb%2BWtxTdIdJu9kO0rln9RvuefeJcXUdfPA%2BQK9k3YFUwBeriuX2fXVb4JeUyfrdqk3MJuF2Pahr2QZsJLj7vVWIQXvnGnPRlPhIn%2FbyIPqDQYyMIr7m8AcLsNo5BcbdTE3ePL8pzuhGV1A7NdsPqnXHf6wrCa5dxW5R6i5mFfOD8LTrNNy7KR0U3IZ8yHq%2FJb9JcS%2BfT0FOyPoiHiMMU%2FZBfnu7xMn2TpohdHBG05YBmu2rin8U6lUCr01GiTixrWL3GhSFJiCAohC2XYzHMaIwtG9%2F6wzQR7ysFRWBKXCZi1EulZfj0N7kAkiFSHpjc%2FXfa8WGeIWbs3rd%2FYVFtxYdzS1ytpFT3LeYvoldDmC4XDUShz1HIkUM0pe3%2B8dbgfQ2kHmW8vYp0UCPB2zE99V6INQBxdwgi%2B5b9Jx%2B9xzNCtLwmJg2%2BoUZ6MLfWYOKWgSwfx0NmOyN%2FVj2X3qMXmOXKBQfeIEZ9%2F9MO2ck8IGOqUB%2Bq21cnYVbpE2dFSYO5ZoM%2BVqz6%2F8MMwDDT2lxiGaCMFfLln%2FkfgSZOJ2GYRxv8iUJc7O8yhRHId84EpMHxdRm7aJXVgzaRQSDoEHv0v2WS5Sduw8ImON3WoF5%2FHGvh3uU3mYDpmQNZ4xQ1dSyJU0MBXOY2lMGDgZSxpHIxCLp88bk8eDhUnB4zO1ONr3v9gcYSkzNZoHdnxP0X1NTAwx3gPO%2FKPz&X-Amz-Signature=ca5c3072dc4ae7874b9d7da5938197e7024906f20c9448205482e76898f30fab&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

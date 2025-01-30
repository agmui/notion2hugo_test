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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB2NK6WW%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBg93nLGeHS25YvbcLw%2BJc48Y03BFlW1tuD0tyBSWanqAiAf5vvhz9gvKRb%2FOOpxhxp3BNo79AhfrXVZQCiu%2BHmQZSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5DsqowXBz4AHA3F%2FKtwDAp1Rc6OwtTz690FMiSoIsedgJ0SOCS%2BDKCpIJS4o9jqEN3Zp22Hr9VqbNXX88nlfbwg4tWOVB1bsTjR6Rlj0iqiFkz3I9XuBWZSY1aJ8dKpNgQ2j0AtfPK0z9%2B7s5r6ADF3Yr%2BOLIBPx9u8VbPzqbGyID9LOgmZ%2BUZklq89BJmU7fRVB3C5moiZXiKjWGdagb3VVbYUzT7WQW%2F8shD7isXopHyLqaM0wfzZpdk3%2Bv%2Fz5uAHOjLRRFtRXKZwvjdnKyKqMdJRBLIBI3cthvvL7v%2FDECLy96Qoeco9WdfQPXd0OSzNtSvdzH3qfkPBTX45xdxGNAwfZsWXKUrDge90xFNBsCCugn4Sr%2FcuRLgnH2SvZOYHqBBpWLZ9TQvMbxhciQhas0G3%2Fno19q%2B22wjwHVYaPhscnqeO5BMPUt%2Fg6fQ35uRiLG6DOUK7%2BUApv8vRGE%2Bg7rEon4KavuiU3rjr9Q4NQlvJmV5QCwWZuDP1Mx1t6EeBoXPs20YdwEiqOF7jva9sPFPTj3HUdG30Y5LyryHb2yx9xbfo5Oe76o3Gae6HcJoQ%2BRkWvrKhtYiHiAYgKdmTxmnVa6yjisRCfa2l3TsEyPOZbDk5%2BD3lxv0mpJFxnyD20b5tG361CzuowhMXtvAY6pgGr0qfqbAxuZDTxC8XCOyH%2FCxdLzBaTZPax9kIdNf27K8hDXqr%2Fn%2FORYZLowoxkqFH8OP8sYre5yOo3QZgX2HP8EZXAK%2BfB4PaGjVBbKqueevHA09bn4AelDBnnV%2BgvtLM0nQ9moWeL%2FHZ7wA7dpX10BBRBxaNDj0MrKnADIswGmr%2BxB7OE2K%2B93JPcbPjQqYsIlyiInmBbr5dUH7AIbsIYPRwxcSlm&X-Amz-Signature=a20ad75a06de7b566ffb054e1f37cbef670e8a3731008f2ceec7d4a21611d039&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

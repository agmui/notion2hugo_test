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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4PVGYZV%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIFzCJY%2F2MRJnrd2zET36FkcJbH4jkwFP6WD5PCE3EP%2BQAiAF3AMbugfuzBTK7xtEVKrQsNGzdiADuWxjqkhKz92MLyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1kEF72prVtSeziXqKtwDdQFlibEDT6o6MSHftvCwBKxQJwKaDZokpDfNNIpJR8nJENrXDFENNSakgDlAGiM7Ae5fotfavS%2BEHuvtwEHo7XyNX%2F06rDLyWDT3ixgctrbdPE9bzbp%2Fgy1EZSG4h6zZjlTImV9ZtwKWBnJEfA1dF5UPF4Gw1D03aIZHSFAytA0uX54LlJoR%2FXpvmosgy0ho34SMcNOi3RfoGEAgvwMZ9kv8LZNt08j8hvNdQioXM5lZVKb9MMsU3vWLvWx%2Fi%2BSZNzkBXG7BceLshnH8YbApnDTh2bpX7IS%2F%2F3N%2FzptBk7ZHsfBP%2BY820ywN9n%2B%2BwG8DAdQw9Mjhc4ZiHkeU%2BckIHBiFenV9%2Brgde098obcIvGxn5wY%2Fskn5rrZ0IrOujhz%2FhcrT9eGO47Q20%2B5REPIEqJLr8PED1W3xhnxp%2FAkMgtQXErz3L3VTafy1nXcBEFWr26HfAxR9FQruoS4ItrHdrBUilE0l4ppR56XKr1NOuXwQR%2FJiaF8cqPC7QieaoXvBAt1IruWkDPJvJDgN%2Bis9WvkqciuqRFbpr3jwbB7sxyhzcKhHl3ldu6FZoFlFouSsYd9uqz5O%2B2rYnKDzV%2Bj7y5gJOHdjt668dWkbe892Hie3WR2bqXanE5BfNUUwsf3ZvwY6pgEHJ57H6yLs00HbxWWVQY%2FW896liYzBO8Bo6zcJfez3PY7O3FGvP7DfWgddAdZxnSf%2BcdubKLSVqjPm96RWijZz2ZjrDY%2F55s%2BaGJOF%2Fg72s3B%2Bru048Bnda0OuOuRoFrMzznrpgJA3duqT9I%2Ffbkgq3%2F%2FyobLeC6y6lNeVZf17Xilp9F9iKel%2BJfp2xq7injbZDo3UX3Ae%2F2UxEApBXO2C7dMUw%2ByS&X-Amz-Signature=dd8db45acd3730558969b4aea7de1a5b4db8499ace4a44bbecf23616ccf53951&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

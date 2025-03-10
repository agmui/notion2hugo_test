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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646O3GFPM%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDbuqhKotHCDpPpVV83YNx6qqsquknbWCxezpNNs31bqgIhAOjKMpKE7fXFV7lbkjHWwTrI9uwfH%2B4Es%2B2cbcng5uZpKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQ7FEKc6CDFiYit2oq3AMtf5QgDepFuFWHYyojIlb9%2BuuDLQRjvrKHrh2vzOj2BOS3j%2FvmiJy803E0ms%2FXQFCzRMHPzP01FukEMeV7YPM%2F807zvoxsXiaWlJzt6DF3%2BwZfMNGUXghBYvbJU9MXkLHKzW8pxTvNxgKpRT6xBS%2BJRNhhkz61RUULBmpRqPYgv0CZdsLHPCR3SET9hIdGN6ekPYmHQs2Li8jnuo9vGotb2pIaf14jyGf7WJM1MDWSV3e0Tu5jQzQlmuneNsvGtUXHY4u7nxj9ZukvaLGMZPv%2BhlN2YsX3ZVytOh8xRrCt4tAMZPTQ8yOIEx67p3p4ZEvdyDP8r5FdsHOQ4uartWOEpL700otx8tlE1vm1W%2FzP%2BbU3l3hrMAO5QjQ5MCDhWZwRLxxGy23Wp2GRcJuKRnN8Tlx%2BqTqK5%2BqSrywqlc88QusOW%2FObqAgbtlovndugQ0nXY7NUzmw0QOPvqa3wphJK%2B%2BL5rQRlDji3roXfrTLlKQFmNBGSriZk9l%2FY8NFuR%2BO1A6fwLPfx%2Fl57GbnYMMMq1pCHOpawsVbgt0VO1d4V%2BHwBY0c%2FQwRT7z3FxqQaSh3PqPwQvQHGjwp3iAjYdRUVxXhMaStdQuF5VtYARp2EfkRYGN33wjHn2O%2FHaTCYy7u%2BBjqkARYS8e8MIDzOA6QD1MNVPokD2ul%2Ft18haojXmndZwjMYyee0Wbc%2F4IHZCsurC58BNIfOMb%2B%2BUozr0%2FI17VqSMRzL31LM8201449C4HBpqUqLXswTwEDDMcZnDvFE%2FvFd1i0gqvFexTAWSs%2FBuan4GPfdVraw7%2BWvOq7e4pRWWihT%2FWF%2FyEypQAwAmMdIQbdCgQMaz%2Be1gROXx%2F675ROmzA%2BXq2gc&X-Amz-Signature=ccbcc2ca7bf6984e26dc53a3a5a2a7d35618004029800acd59ca82e754de97e0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

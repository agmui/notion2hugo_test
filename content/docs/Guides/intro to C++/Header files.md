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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCDY2VBP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDXXb4LsE1JxzBUBU53Ly37WG4T1BEOLEGo20cuSPMAmwIgZCDlwX6NwWQZTMN%2FUkxQT%2BXLToeBbYlE4IUjZEAnAN4q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDDNbjBAN7eAv6knc5ircA%2BunFgcvknkrOo2u1yRQ7UxFUI%2F3fFF6tzVSzdTUWJl9dc4Pdi0MUsaX84t%2F91EqM0YjzIsJbgu4DH%2FSwmyXj%2FuCdXjm%2B1X8d1CCA%2BIco5pRf8%2Bxrizz%2BTKXpvpvrXsyrS2OQs4KWXHE1TOrsACj1UvnCShDDLeMSBPLB56N2G2vp9OODhsrYa%2FlTYEDB1xNJhrPoMjuZQGR%2BkfTN3ygMLRhSFEmvGWC9l99faEe2TwpgC%2B7mshkLBaTLp3EDpDsJ%2BAH95gwYcYJE66YnDnzCVoD%2BtfZARI66GTwkq%2BOTnUaDNaOyGMyjpmHC0u4R%2BvuL4HYIqN1lIGqr%2FwDjIAi%2Fzl%2B8E5dSIwUrbf9KGQ6o%2F4u8yjadSh2x6v1AvsUJCDLjSONBM0hBz8AexxVApDTIqzPGa26mj5I%2F2bAiOmRMxNIvEnGn9Mj%2FPHoo2AcRO6hspWf%2BnPjoEduyqf7KL8%2FAZeS7WitRGyY0ktsiOSg8yxLJHinKgeRnoXoT8TZ%2F7OYLk%2F%2FKDXBs%2FFs1%2FZeAJuGDouyBV5LwpYRm38ehumCPbvOQUfrbSMO9mzU1RIj2jRCKkAKExORDSYc1Oha5HCoi9bi4qKouSqj2ajNIAiGw68fOGD8rXbnVnYBN1tdMNDYlMQGOqUBSnC6hcqRdh1PNwRJu4X%2ByV5d3dzb2vwdqGWMC5G88yKzH9iOuHU6FVAx4eE6SQBoJl0uaT65NaJgUNNEzG3KbZIbBynPsfeTmR7byXq6ZVrDHUE1ZmZVaU582OhgodnENuOOLIEgQmKIz5i%2FCQkxyPPiKJhSbrFLeqnIoVM7icTgxCVc0SJkgRgeZOMQ895F6jSCMkasxpkI8UnwvWRzSQoa45au&X-Amz-Signature=6edd85b05e8dc3644483db611a530bece74c3dabeb76e9a4f846f69d14989a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

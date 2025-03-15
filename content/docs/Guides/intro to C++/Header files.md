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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675SGRN32%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEy9XUrD2DCQNViosWsV6iZLKK7mwXGMF3rtM35N%2FDbAiAZeyqvxDytlYFQD2AB68K3Vuz4ok9%2BZmPH6YEZRU7wciqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnefA7ahRU2UXzffkKtwDdQSdPfgzesZEp8SEOF%2FOO8wLJMHTfewusURGfPwBZnBn9Tlgeh7lvJpMPEXT0ITf2PCnyYMILS8fQqQDRur4enkAn5aQriMmdQQbLPYCdTm873gCrwQcZCFWF9qeksU%2BSCZxjvLuVZidwlpBzRdbcFEauk5MiONXwVeXfPnMCJh8D0zCDbZWpMbSx29SIxwEeciStI7KAOOn6dqUsiCN0LsK2ZzwdU7PsHO8uO112WejfIU%2F9qTyrpAwP8zxqhpXDRhsv9sFs352M6EMY9azBYB5u1X8kkS4EWiFBLhQmNmttIHInxPz8nSaZeums3OD9weZvoB%2FvESZsW1sILAtiZHC92201cFAfZXefWOxgbRRCkouEtDqEhx0xXDyKdRtjGRZvGxiGPCIczM0j7olMu77PfF1Ksk6197blJa3B3jEsSXReqIi%2BauHmdEqkDqcXMwBrYdhVt5Fg1qu3dcuYY09AZn2%2FNmbrndfVeKx4wpLJm5grZ67IPQbrfDDR92KKyOr9JtGNUS0Uwn7mYgahxRsYhTBpuZ%2BgY4bkFvRXIrPYuPc4Ew2h5c1uVHXLA5mWcw340GWRoetIMUEJVml5MEQaegP0P1gGfsM1VgEDXrePhOyJ7STObQ7DaQw5aXUvgY6pgFhIvCPq4L7Xc7YRAJ9bYtIGaQ705W3czSgDaqR6oLecjeLuGU2Pi%2FmcMa1OwRsE07hrPLRVXH3L2SdzpJHcjqWwKHoquSlOdnqsp7EIIXUp%2BC2yoo6%2FuRSKqQvMAgl4JpGndm9%2F7P%2BXvQlS2Mq0T5mmvi6MwnqrEFZXxdUG6VrsTIg7k%2BGMY0eN6zloBATofhzTrRcpEy%2B95EzIgjpIoMf8n26fw%2Bd&X-Amz-Signature=b42a9b7d8563e5b170e7bb0480d2ce82ea825fe7bafbee42f1bdb2cb9c436cd5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

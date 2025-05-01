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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAJ55K2H%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIHNK0fMdSRFCI45Cb3V80ALgJdpHUAoQ4imAw%2Bqr9A8gAiEA1%2B2%2F7lfi65emcDSfNJ9ezOB8X7ITDCR5XOfzeWJi9gcqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLu%2BMoxyDoglxCYkjSrcA6ly6pafeVN%2FUDvsj7uz5o2cNkqr7eVZWwQSggwM1GUDr78BEqU7C%2Fpz67Uv7u7%2FyiNWSisVQHTzHD1vXsDqtvaKfnj25IKCykUQIlY6w7XvKEGsYbOS7EBT7GjccB1mkNtYZK%2B8ufoB0xBeqHNnPpHzAi8GtiK4jXb0dNYh0ePtjIFIAMYZ9IreXw%2FnAINlevVF%2BErbnMt5alEQYrd67d%2BEWyHmHdwI%2FD6P%2Fs914kzoZg%2BdjhYB8aDhieEC3vd4J%2Fos8qkLrgDbssmOsq5JXb0RVfw9TBDAeP5hZA8UTVz2e2yRqilEKNUMT76Fq33pTXuV3P8MefLJ5sbZmlb499SAQEQWmrSjYE6xlKACkZ2BTQqlSy4rQtYX0U4rXb%2Bjl5IaJEwFtxh0O7e1lllF5viszSfsVwWq7Rh1ZJTP%2FhUgyvBLonPq9QykTYpZlciduVfXObPV74A%2Flu%2BMr6ITd2%2FukSWmKe%2BwuWO2fkXl27zlTzPZkV%2BTUKnunXaMQcLzEWnI9ycwB6SOWS3Fekwdy1Pr1IDWLpIyTiWPRlrD26z2qxnlWZsdeA3rR3qPovBdsTongjkpz1OOkiJow58pHWUzq9wcHU9MZkG9MLexzcuOH5B8CIvvqGTlEkpoMJPay8AGOqUBUCA8mDWwYiCpB2xF65zuLn2hxzqF%2B8K4R0DNmWDR%2FUo3DWpmolKJXBqZXM6L4J3T%2BT5vD%2Bqq0eSQdgi8QuKS9JQpaUiU4FM3%2FcAur%2BxZgwblGMFLtogEj13jKfnJMBphaELFkc%2BDXajKtFetN3Q3Wo%2F5BwY6evJO02Fhpfl6NuwE%2BvHR9t514cFPHdEReNsm4M7JZQIB5iCd3uFTjPf6J9lAt2gU&X-Amz-Signature=e149774b43189291cc05e64c47fffab75831a1fa35f8f252637055231aec22dd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

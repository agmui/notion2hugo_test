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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJXNVUS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQD1JnLZJ8EAPagJDFfLMmhWluej01aiR9cAKI2TdrSbDQIgbbvz9GZ675eDcRfWhMJWKOmaqowM6bO0lxhRyU%2BTUMAqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByg%2BW5bkkm%2ButM%2BgircA%2BafWM2LP4XiOPpOpbCtgNtfmSPcU3jLNFESVi%2BhK6TMPe66U4%2FzKmxlrdjROQbyCYMexk5UAfhpYhGttP9calqoSfAYrQAnEM0cV7vJe%2Fj9YlYLh%2FlZTtBrWG7ipOueabUDSjiQovXzL7A3RSvc6LlnYg7zIUrNEcdxmikOjBalgBDZa43yHdKV3oZbbo5%2FGu4BbL048RU0XYIrfRI6ldDPb2io%2FicyRwfHmKBQHUaendYiwtV11CF9PqWn81q4x5IDN8OZa%2Bp82EvrALVnhncg3G39hn5UpjXd8MBpJMBbEDCN7mY%2BZKRSMxo%2FgWk13aOj8rk5seHeG0YnBESgNuRK0i6Sz9J8CXojg%2FyWbK8%2F6dalvCRtPSQv%2FymRUoeZ%2FZqj25deWbkdQGH2YZu6Us6lesDSy%2Bxyc2ApV8nj536%2BKLCD3%2FhOEyiZofLYKkbjEL8uMfiRXcikSJbRGPtF8QgjGyYgoQ0P%2Br44U7T8r5D2mtK1qauQfLRU3qIJrck9aPZXMgJ85Q2hs2BotKVrQ01CisLRrzfm%2F0Shb9%2F2YgUBGqp4Bjp8XHmmhnkPwjUHrK8TWdHP7BX8iQ1HaTn051%2FI8H93r6HQlBkqalKhIQ89lTZbjL51W5nQ7amzMPmLvb4GOqUB9i6WklYSkSJiP0SryGuZH%2Bz8hzzknhxg1JlD9Ebs0gZc0np%2FOQdK0YjFoBfYASPjCyVub3kudmk%2BiT9SZYNxBVztBEv0ouNopWK3c9jdVz%2B8cHW6JN6mH146QnkjUPI3FqiCSTWDpT2wSCRrhfw0wKO4AInWT776tCiWyzP14pZSvtulYuSb1c2SnZSXJrk%2FfGYnyBkOpPL3TokorK10eH1JfLch&X-Amz-Signature=d17d963a703ee1074df2f526265242d1d1807431f7419fdc6dc61e028d56a284&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

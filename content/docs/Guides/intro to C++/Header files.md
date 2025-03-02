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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDF4YJX%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAp4%2Fzj7MJZdK0jS0uRkAKnymaqgwpCcZrqsmdcQj9avAiBTnHQ2YIX%2FCvvo1USY7oodzIK7bqJk7P%2F4I1tTb1w7qyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0qMH5mrjd87MsQ14KtwDgyirl%2B8zD33NDnukQ1KUgnbCqAlhrsPJ%2BXqjEaG20aNOb7sDWU%2F0YqnJh9o%2BpXysspj9R6fi0U3rqKTDoHEJt21LBt8DfcUAYUBsO%2FInXfZ20czJSUyKvTfJscTDQPeTZHMrxpLKrLYfuli6gZlQoD3gYt5d6X8aPzJBKfQbWym1vvvvCLNQq%2BqjMc3qqLUNXUX6%2FMIzRvgDHZiDjElqBVEnSYstTPSzV5DO4%2Bz84YkWoVZD5SsEnC7vh7LBadvMC1Bckm9bQ1oUmsfKvNIzr4horN4NI9QR3qBlDt2I5sZG6MZRTTxQCBSSiaTiMdlPRqQInBbAXEIIJXv%2FS6tpEfxonJvrgSFOvK5UI%2BA5cfLPVrKcFuVxhnTW0iGqTC3QibHarKsDBge4D3odeX6481ZlP4qg9LWSENFTUQXO4zk5mH6%2BNbi1oV%2FDoAvpuMwENbk27HwAgsCYQRyIj0%2FljR859ywORIpMhfLyRZRTdFrPVT264JSP0kmtFmEIPPrsGYFevK6jgBRxDDdnk26xk5aDKMHOwYxtzzlNzvahSboQ%2BsLDJv8wcL%2Bbatpr7UivTzAZxUXHSJ4%2FQAtqXQHea8utiPFZzlcTniWdIb8DIZgQa2lIK0z1O4w0beEw8feQvgY6pgGtHDnZgtOlF7oN3A2NWfcT1zJQO%2BwGTttzyO6knSUosTxnGDLYXfxE7TKVzVpUV5RjBMCaTcJX2gaOx%2B7NYmfRBRLXXJiLHVbrGFgcR3CTf2aNcRnOnCtvndsLhofgmHR%2B%2F4yQB6KIiEjSpytNYESjA3MA86IshHiOvKUhLnow047DAXO3t2LIZCBQvoxUCnRE6Ye%2FuMoLl7Q6ueB7aLGZCGL61tqk&X-Amz-Signature=482d329a0d54e911d9a2635b81e19ab91b18b49e256dcbd4767d4d7eba7c3740&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

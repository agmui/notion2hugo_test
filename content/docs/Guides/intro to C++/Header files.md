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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7KGSREK%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8K2%2FXITP5aOhOfE1Kr3pcNf2z7PivppRdYura3okptAiBWEND%2BmAKzWhdzisJj9VUgQ60ZgQa9cFaKqF2ccXjYOyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXSUwIFaMRDZwSJgwKtwD9xvrsL7QKCsfvYQcU00n6wU9hLSyq7Urcsm%2FF74Wf%2BbEv6Qo%2FPyCVmT1KhQjPSsTcmAGQawVa5whVENQVb5icVVcGhMhhCBv9m2jo6kEIjuje9KeCts70p3gWSH5R%2FQrkX81%2BBy0Utrg0jTTwFqCmG1VKQeVVuLA0mu%2BKvXDXmDygrsHUq7IIei7CfSrOkGeSBHO20m%2BPT%2BzhCD%2Fs37xqXCirzFeL%2FZnaXse8VBmeyIu93987EWUTqNd4a%2Fe%2BD%2Fjv3i8BIPsCOZcxMSYWjHdQXq%2FhoLKMnEADgWIKb%2FVdiZQpWOuKRx4i6LkUs88oupAYioH1XdXp68U1ncVcjd1ETaTyTXTcGEs7PHEtR4r1o960AbYmLJ8ncc77RUCpHIeeEo9GmS5qh4SSlADzSw%2BOMt94hr%2BNts99y51DNI2r7v3WcEVJQD%2B0X93o4K1QencXMQqwpvfoRAuzVKKiPZBS7OVbNXvFuVoIGpSDUnLFfkoHQKjsLzrgZxoCIs3RXh%2FVAy2aAB8UeTTs73db%2FGgKvWyiCHNj3nUIWI6ZHakRnQ4LhxZkoZa9GEWtqAv%2B2lYRwUNUYQ48bI6DSZB%2FgY5FqQGQVootd6Dncfac8aYRE%2FeMF7jOTcKMbMSTqQw%2BPT7wAY6pgHwyWagye6vazbyP3NSWSF3nZtzJCsFUbL7UcJ4c%2B20AZXZIL6rzOdac5e9ET0ZxrMK7KYain1uHIuXsBwVz4p6E7EgxqweYQVDlTEIhW8CGYuHLSXADNePgLV2e0%2BpFIIkXNDKUXpYxJP854nlmwUoxIpaA4mW8stmw3UPWYEB4yifVrb2ykXvGnfAhD%2BAC%2B2Zh%2FlKqmeu8g45CYyn5txoOes26%2FxA&X-Amz-Signature=49aff1b57ac407bc9b9b0fb22656d2fd2d71feac72c086461f665d85f3310030&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

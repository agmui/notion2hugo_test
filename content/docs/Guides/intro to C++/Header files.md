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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MIRBPA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqe1GkD%2BfDlTf8cvrG4621D10idDKx5WjmnE7CZ8neeAiASclcmF%2FE%2Fnmad5ig4HxN83uvN7zMA5gcC9tQTcaTR7iqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9m5k9ddu1h2e1cspKtwDmZw13flss1f%2BKSYchxctndfasJBnJW%2BjlAjB9dkqmlzRUhjSv7feFkv0HCCwrfnkySquLvKH7%2B2uVB1hcUvAqqTHPLzI36w7qDZbN%2BXeW5dN3qeafmVOWPbyp5zyXfem1yRlpKZuZeeuR0DljwmOy4EW8V5rROIE87uoT%2BzrCI0R9NNOYjDxwVna2lJcvTCHk6iyDIhXYF9Yu8ej3mJFaGXX2lea55lf5OSVI%2F0dFC9hBDBkDR2Y3eXJE4RwhxpMwpdBj5YWFR4ILlvRHeyRcpL%2F62XDr2eyOAO5Pr%2F9O%2FXPIOkHduSGjXMLSLwnNX0XNZDuJjsMzzuynyvt3qMdHJeX7v9e2MGQCew%2B%2FWkSGGqOsehCkC3zfx0h6JYke1MsSiwPh%2FiRcJ7eYAwr5g%2BoREwoRD2ZlCJ8d5Oz1Kc5zTpNszXBqedRbOop493h5nxTt5cl3XC0IATP2poBhfv4JVlDJAv5QY1FWejA7mL8TXTue0SEoxlzsXmJGP4UKtcd9eEbkiVhgAZfVdiOzETu%2FCvq1H9Tu0BLz1ZCfF%2Bcc6cPKIcBbT%2Fps3%2FcSdmSH%2BrTZJ%2F27D9Ls5yCKwzusF1V4Bwx9%2BoN%2BPoCkNRuDxFA9z7U2XqNmorYsqL0lT0wlpXjxAY6pgHwXekMLeNyLRZSFqU111W1rY0nFPsXHawsCz%2BAirNp%2F8tHCZY7LJKpPEHlnfCLk%2B%2FKmbjJXpCnleLKMyr10XhKwaF34LbEvvLPHQ0uk%2BDkDfbpKEaBteTukcLNFUZijdOmp86%2BEJkOYCa9c8ByqzV3aqxVCQXuwZQx1%2FIHt939qkSUNqO4wUB950xTXFCHpxnr%2BtATDsmLhc%2Bwk1DFQVVmQGWowW6e&X-Amz-Signature=36fb7436afdcae79c514099a7eab8ff80b8ee6f50382e9a96944d5e48ae6d82c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBSSAUVL%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmjz3lg4QVbJImfmqgIbhmsN6ZTyIN6v8n49wZi6TA6AiAPc1%2Fjn5NYrKdbABaltgvOJCBukCyO829t1oh6fgw%2BCSr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMlddmkMGZ2JLUJMC7KtwDbbm3fJf8zSMuvYjzRo6Ch8Q9olNpLFBetSHoICaPWj8b54iNHYyyQPUP8ol2%2FvxNSiAazjl%2BS6cpQSP64jH5mpFpjdcVA1TqNTQCXLVAyk2PIbgJhF8anJYW5HkNLhjWEKMrPSQNX3PWIKbq8nF5L88WXXcl%2FdjnX1aERvLU1hFpar8fkNb5jbTlNriQAL9WXjYYA64pl7FByDb8HKzNMBy8jZJ3ijoKJS0OPTJgtmzC739ch0j4MaRqVXS3vT61TbdAtDpcH1mwRplcOhA0T%2BQ2eZ5CD7RfENLqxOPLN7RaJ5GCZ6NOOKbiiIsof2XpWepVNKJawC1s%2FftkkNWnV3ee3P4fTSqsopvV6N2cB5EIdWC2vtDl0OUfZIOCkpaBxqyI%2Fr6HeydNg2vpDpd1JUDSwtykB%2Bno730r80EU6kwdKkPAvwPLsM58ZPhdLS7G0%2BAAbHHmKaFXZPHl%2BOXwFHvYxMSb5z%2FAIXJ51A5vnZZTwa3jRdMA1o2O2s2eO9qFsGiEKzZhhJSIxDXoC7hBJQaG4OIWiZ%2B8H9BS8Wr5CUol%2F%2BOyw0ReQqpvcmnByurpMZB2Nzsi2TtvFX06berBr4pHix5oHSF9e5qjSCoFDyQry%2BL1HyfiLmz%2BL7sw6pHrwAY6pgEp%2FDNstAjUlG4bQdj5n3Gb8LRQyYcvFr52cL%2Fm%2BysBdjKcghzBTPt0denxbLrcMo3g9i86amUI6DJYL7e9ytbI%2F9Bm8XPrhgaYgyjnKxEqJcnrvfg4OE9LgnGghbrZnBr82CMi%2BqqCV8%2FNmxoSl7TpS%2B7ylM0GV7esandY4Tjp1MA1ZMap%2BUnusH2EybfuFzsNsjQQCH9GkupLMwAf6JrsPeVkjoH8&X-Amz-Signature=9e6e1e4983469da4c47c83061f494b9d5c8411c08c19f56c6b915870187e506a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

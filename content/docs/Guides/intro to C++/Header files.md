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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT665NYN%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPVfRulVIpllqRWjn6jDJD4TmFTMZ2Q95CnHd7SNnZwAiA%2BOM3RDSHI8IhgjA2fEi3pnuOCOUTMDOiJVgQNUKoPkSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2O%2FgkF4%2B2nZg8Fh3KtwDM2%2BqgyeVADkCVdZJrlw%2FhzsaDhhbB5ucinf1BuGq6MysRgLAD9xqgF4QDaeNNTs0uqv3RMiAALrvrEktOgzD%2BFihAARROvUvnpYrY8SZ79SjnVpGSO4%2FJf3VGsTGoosxqH1jXyD5DcKeh6Q04hAL6fUmw0zxrtERN6aUvpAcRrCanSv1VYUjHND3niEowbEdr9hUIGAZG0E%2BUTmEbRpjzYaF9tnRH5N0FRd%2F1%2B82Re0zydlfZCeTXiXFiQTnD%2Ff0Smd0AiUOn1ghYpJhrJPE8pcBBGxTZZCfdLkBR6EWXNQIiq9SILiRPst13%2FptK7rmTLxX4SrS19iOkVo5jK47dAT4eqofimenawdE2QfbpRmJWiLh3%2FNDm4Fei8V3WpR7Bnl2FiNROB5OpGI3xLzIQL21hM7xAP86Y8fcM7p5g%2Fync7HZrpPeQmmjh%2B%2FRA6UBXgoAONFYMZ3FVeYOMOf%2Bncl0MZ%2BTM%2FwtEcZKoY%2BJ6czj5CKRxgHohNhZrtES7fQtiz77zgI8TmC7KMABhgKBbDx90QyXSZeNruqM2OlsvOBJUoTF9tTHTMlBlJg%2BtlFy%2FHLTSjjBkFeeMU5voUk4SVHyT%2FBWVT9MD1%2Faml%2BnMknOFsDxnRk8EBWjRZowt5WdwgY6pgFc7WmhBhTLX%2F%2FXoWL92oV%2Fupe2zu6KfPwmg3zBaUZlmv%2Fnf4hpa0SgCz5pw3PJgUs2vyLQ0iP1nl8CLzdz48CWE9eXH%2FOjK6tRl1BOjZXPctaCLJf9qwf4Ca1viOo2TSS659jKmFTKFHNceEgH6ej3XuaJT9Ue7Skko7lD%2FL1PuwNRCuH0tPDKIbcwqnunKYpYHr9dqT8rGDd9I%2FZKJ6JgltfwG7Zv&X-Amz-Signature=2387f28e888302910de72db5fa9f46bac679b9d0ec96ea0af5031b4b6377cb2e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

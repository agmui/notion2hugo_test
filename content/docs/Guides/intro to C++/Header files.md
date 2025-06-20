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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMJSZ6T%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKDwCOSfOTkgba3I1Qpd3Io%2BpMz8IWJrznZZUhSZIfKAIhAKQmFyMEMmZSXtI98RHFwFNkt9KRaMMWuwZGiyOr2R%2BxKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMbyDAGvyOJIiVBRIq3AMg16J5pVSTmXaRxvX2Cvu%2BU%2BjlbUq29FbsA6%2Bwl7FGZvzhfuiUwoNLst4EP1Wu2XAAh0SAd775fc1QjcQlcugjIpho%2FEwWVLVANhV9OG9cBZkF%2Fhtn45B3faCOBE4oaHBA1Q5o6YNYHhMzwbhoMvBGSOxyA9YI3Kd2S8zd%2BAFaYdJqmUMHTKE6jkegTh2rhHpTQ6C5AzCsbMF%2BnluOJNr4ueyUftb9ZfkNEXpBYlHrgYenYkhoNNoFBLZUjMpQp2gFO0ot%2FkjCP8bh61pse9n4VPHv4evUKaf9x2QVHv2xZ4j62sfbiVntM2tj%2B1SBeiwIH9qgHGFUf9dQjLLGCjE1XeZJtJ65aSbC6S7FbRQxwjBXOCutUYTE0e2IWL5Z1%2FxHGYsnfq3phIusjuY76bwa7y5%2BolpxgP9xmWoPAUJna7g1URXyaKnow9e8wvrAzYza01g4SKaWsI%2Bm9qsJiar1OJjSvsELWmCq0i9wZteyhMVG9wg%2F2ipJRW31aUCUu9HTpV2tn1YrVcrBzKxcCCs3xia573%2FwfPVNIYEKbgwEAjcKTYrWcjvvHh2ey8V4uRjsaL%2BXEQG%2Fx9HBedrgTgCk6PMoRemFmFxqWRBxMBX1fjXC5v5ylC10CXMUzDD3jdPCBjqkAWzbz%2BhYipiDqw%2BsUfBGmq4KgWEkbWCR83%2FNmPId8sH5p4Mo5fe2hf3k%2BF4mF9rMJZR1Fq%2BPxM%2F5yXWvie%2BFrM6uyjjBx38mxSTyK%2Bmh2lcRWzu3ap8hcqeqMrscoXGc%2Bx4jkj78VopJ5X5Pg7jhgRHpcIyS2L2gGC6WM8E%2FhSHdOFmH1CrZd5zLvh%2F4LLzP5uvsjMsKG%2BTD1xcUTQr4jpOkxEQS&X-Amz-Signature=1d8a25c967bc7fd99fd8e309c985a5695c15f567229944409cf854540c15b9fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

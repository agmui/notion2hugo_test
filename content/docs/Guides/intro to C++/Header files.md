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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V66CU72U%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIC%2FRldb82mGaaRt%2FgXnFHVuWSX1etl3ZD%2BFPV%2BWNUXLQAiA7AE60I04j1%2BM0Kxo4Jjbh82rVY1bqiFglnwnJkIZrRiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nbm8ukMhpvPtKS1KtwDNHhVk0IA9VJF393kueFMfFkpck2e3jFI%2Fo5nRKUBxN9CyopLygAlW2Jezjfd0eqPnbYAm97A1bAkLIseaIcHi41xFU6303nBK58fvfICybCYcEBedjnPg%2FSHxTGGYfTqTxs2CMghMcRyfB85LteuPx4UGfjBRz1M9iKsGP4%2B7uZh%2FSuBjDPBMFKh9AgrZMAcvqyyciqZgNxB%2FQBzOVdwjHKJYxjKGHHXnFfDq33rCZoWdHJVyQVUdArLlMfMQs7lUJZQ9DVxZF7ISQkUgOdBbgzJt02aXJkHs86oejyP2mkJtF3b5lpK%2FYKlmNdxEj1FF8OePQnPfRYh78%2Fjql8K4BJ7%2FM17%2Fq8OOlztQzqQ73G8MW44xDeRzpxoHxkIqA%2BH0m5CHkAWbkIo7wdKtqi%2BzAjqrTqn62NHWiq2OGCaUKZyiNc2C4eP2m%2FTMGsT%2FF0EAJlyPxWg3MlTYuPxO5bwZdUF3ggrLHpc9ubqbeojaGSlaghwgQj%2FzJwmZ5wrgDbesSlUso0L9NJrMTCnPBa7Glq21tjKfCMqWpW4NLEAafK71mP46CM9HWMr%2BfSOLm%2FkuddfHfgIMFHS5BLIrNjSCjViAAjKTiZOhxvHt61F6DME8wjbSPGvC7MhegQwyLLHwAY6pgFbAsLUlM%2BeWk0RtziyOeAeX2892ftckL4vLB3bu9wCOY9oJq3wt%2BIWtdKWKztqQh3qPL3neGXxBGWENTVzwxnNvVqcUfbcXdwp2IqIbcXtsVfmir4yW54dqKjVxPiuYTXJzNPTAvAZ5Zr1zzKVomiCk3f1MnJZVDez%2BN%2BoVPgQdLG2yuMjcVnJIxP%2Fvuad8eLErZZ37%2BqdAETXeoruf95ruTS9cZDx&X-Amz-Signature=3e62d7613755fe5d886d2b20fa5279766ca95ebc977227ae97e31884c9b90234&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

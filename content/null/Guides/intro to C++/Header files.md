---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "null/Guides/intro to C++/Header files.md"
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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ACFGV4B%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIGdUBHkL%2BrvC3RcndrEN1d5h7rogSTXKWMxpuaVN%2BZJ%2BAiAIUtY9U0rUZm982rxUj8994ZDxbZCTBEawqax%2Bht6YDyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMWMbanaG3xj%2FrFtB7KtwDRKxBIb%2FE3WX%2F6IpErof%2FpVOFa%2BmCV9cmvgUF%2BAx6WRPInm1zJNKIA5Yu0rcmnJEwr2WVezOgXWGi1vx5mzoqtltQI8HiX4Wll2TiY%2BmqDgjsF3YAgZSi3RC%2BHaqcEU4FeLPyY7gysLLrgbatI9mzWgVlRXfr3oNfqWVZA09CwEE2JagfPCXu%2BZPr66jVwMh%2F%2FvWWS79%2FCN%2FFEkhzi6VRnsXmd7LLvr1sN9tqr6WvE8KZLuWcD7e5gDn3werzD%2B1nBzaPxonSiZGf4dseQfWeF4IeVYq%2FHLYfINPQ3PV0xsj4iGSK2sqrtjTazXs17xB4mapDPdDa0%2B2qrlFTQ3yuXRnh12j54aUMlZsT4xxcKsFf2FztxrCQF9d0rwQ6wLxhqYH9nm0ZIlIXLAqZ6C2JocJT4KnpJEwQDbITqA%2BEbUBso7kjPjzqN4ybVronzHPqwZxPWmI9ied1Ko7dOfZ3xDP5aEIOQP%2Fd9YK0R2Mddr%2BrsDP1Fjgt2CWCoiJtndy1p6qJKdDRRbkDSwSXj8FXaJrRsLBOINVVsDbnixWJxAF290c9BbbXV9o52AkKI4XNUB2lBVdTIsndNHfu0JWTcP%2F3KvXuwgcSvZwseg8zt4HurUDFaEKohYXdA8YwgM%2BKvQY6pgE6plKiSvjZAm2br1b2RQIsfzcehY%2FgOtgK5qoenRNOypvE7DyBL3fmSSP%2BQsVkcsEadpTzxZKQEPsT5YqrRoDAHec2N4TKa7wlbCv%2BiWhXpLjNT2FaJffPDCcO%2FxtKpoZrn2KzZt5euOUrQWGhbJLIFmIl10sohieQPI7eEnXHm9yDK%2F0iJxYdYYEyy%2F9i20CU4JxSAsmoUTnqpLgL3Yyoh6aV%2BN4I&X-Amz-Signature=0c741a6fbcd0d1031e99d05bc18d4ac05645c1f10060a216adc769c45d178ee6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

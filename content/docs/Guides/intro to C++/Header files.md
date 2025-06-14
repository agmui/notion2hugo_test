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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX3ZFAOD%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCID%2BhMlZuRWrhvIWGbgJMvUMbfF1ZPLAk2MHAmDgR3hJMAiB%2B5k3mcXniSSa9cEZAhjCHIj%2FF%2F81mWUzpK205qDAjgCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMOfZ61%2FDyG7NrR7BJKtwDISovz0ABIeSAMgX9ZtoMbzm3jwWxP8xDA%2BkPJyZoARuLcgDC1aasWPd%2B%2BCJze1zt%2BMx6o75pWBjqbkCAHv2L%2FXC%2FNpbfaVAKkoQoE2ErwKD7CKSMxbk6EjG1bh%2F0x%2FXRMgQIgLjAMDMT2zhFowOl7U22VB01Nqs9jtDkiz3C1G%2BGSQ5EV5X%2BhkxRY96crjM0kzHktRB%2FR7hdB123QfPk9zSt0wYTQKcMzUKyktS0Vy8%2F7DUIV2LC1MdjiFYauVifhVt54ZEgpZfMYBogbiFLmHWFX2VWzKT%2FI3DGkSLvLDsJ7yTIJwWqV7iciSB4AiMMVNMfF5f2Zp6r3nZwnwT0x%2Fytxbs%2Fy0YHZD7yDCrdWklTs7VXv4pO5pBHrjaHCk6M67CLIOAIJeE2ch8f8OFkgIndtGljaWGVcodFO6kttDxwbvPPB8jgViRtOjTzXgYWlxwu1PfLE2mLrhGyQTm5Wp%2BvP2VKSBfLLig3bXHsGZCBNPkNQYttfnhYnNlGddKDwtrXmHCV5v8tzzQz%2BPjMKlIVMqgufK0c35jTFGLPugDjIH8sPHgIQZRjSlwynjyCJXiW%2BM1%2Ba0HgroTtUe4i1rQ7B7kedaggo24YklD8oXGZbipUes5vgvbXE%2F0w66S3wgY6pgE1nppEBv2I6nZ25gSno7Jr22TQcjfWJMqCMzdEWJeUUmuYaezWD%2F7oP32dgVkuMe1R3Z%2Fu5jEXEXYev8Pb03ttDa%2FezZC1%2FHGctPcHiygaS4e%2BISaNC7JilWR4UTEdTSvjduaGrRapNRm%2BUgsds%2BlvrAG6AmzY6U%2FBz62K7U%2BBC2hiG8txlBu6Kz2dzfjhCF3JfRlT%2BrYgMBMJg7l1t9fgTmtBEe88&X-Amz-Signature=14dbaf9a6dd58327144886aad8bac17f58d2935b9b0a0474fbd4a28eb8ee41dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

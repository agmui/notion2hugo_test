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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474WU4N7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaZ8y5Aa0jXaKysSnSdUuUUN5NqAFc9CRPemCRjLhhIgIhALvpiSAMYT7oZBPR%2FN3mCBfFP8emtgOBJHnvnH%2BKSMEEKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxHU%2FUwF2JsWLqZCMq3ANoXcoWS98d4cXxJxGSeS4G9mDosJmpQruDUWwU6CP%2FsE0c2aK5%2B58jeqEwo8laE5MW2KB8ZDLwBlk8trfCBxHYHY5ekfYvJhBgp9AlsNfhzYaajCULYK7MEpe%2F0BUCRF9fB17zqQMyqXrxzOHHPnCVng2vSA%2BMpi9OGfqI0E4daoDuxe4ZRewiB6xZ1Lm%2BTvObtPNdW%2BDMqWu%2FotnlrG5G30VbHFvUJnZlwY4HM1pBz%2F9yZlC2cSOySzckyoOY%2BAosKuhzTqa5cFLZfytuF4u%2FHx8WVTSe732t5KUIcRBX2vG%2Bq7D4I%2BT20P%2FIMMArltDHM1rxtGJWoNcH4vcFG3vwZ%2B1d9Yt78rgKQKh9bwJWIR%2Brx7fbr7kwYa7I%2FQlM610uHNGEio4BQOrYZu563rXTn1gAWwrDjug8Z3eBInqejhipTSYpnb17ZoWYuyNHK%2BMLyfd4HhvpTiMlipVa%2Fh7afmeHjrz0aejwgPDYeheV7WHdDuK5t6Z03HgHgwpEfbE8u9JeFVswjpqQ%2B4CKWxgLQzF8bkUAj01oqqJ7ezG0wD1lSfgEIRtYYd1U5%2BnFabBgdWm2vUo0oFyURWMlLlKrIbwlArlkCbXDQSkPkhDFYMJdmjLQ0SOfEM7JeTD73tDCBjqkAX5wfSFSA0pq1v4jrQDCosn00ot%2FZq7mfKokHQ1CTGgIt%2FGCeKiYiEMgMGHMxGn8rl9zR4e64o6D64xoiznneWZxy75b3zTBw%2FI2z0YIJTE%2BFBlsQq8eqM5ZPk8XDtt7HIHKpqaB9Yqn1UM4UxZmBY0HcE964HNntB4fWlX1fhWsE65U6dP7RbEkZqMOIWY5S9raT9nbNRLFqmPJC%2Bq6QZWmtIzD&X-Amz-Signature=2f46ecae82ebe847951646772de9ce90ae9e03b41a4431d3883cc84feb4151fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

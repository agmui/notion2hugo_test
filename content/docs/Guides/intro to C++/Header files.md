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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YOXZYOB%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD54i8K4ggPRtV%2Bog8xYRHmFKj8OkjaE0nIPfJZXe%2FLUgIgWx2nIPzol9kqfJgsHMvFIn1hAme%2F5qYk2XNAXaat70UqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUpn6R9yJ5Q3BwVCyrcAwTvLtcLc0vp7fxo0NhVJUMnkA6lhlb7%2Fj6xDzulOcOQ43KLq%2FNklN8%2BAnxfr%2FJ0EPc%2BiNk2lUDvpsNsyjKmSFuRFghheXgtRdkJHt8qIDhEZZbYdJnoTX48pj05Z7wG84BfE8%2Bb%2B%2FRqtSg8kmHFdSwS%2FgRq3ZxsMKSNf0%2BdnCnlHmIX1THCdJio2BnHIiUjN4hTZ0%2Fs7xKAqQwNpgKGsRq8E0XiNfVTE5wJTT%2FtwQMtEVg3utw28FyjuDEHxtxsrd6LSDuoK609Qni9HciFM4idoqvePF9k6FCc4VzOmMGXMCrgmZOkNQzCFiKIPfuthC5wbXcRineu1w8igSx%2BMy6%2BGwOx5PY5mYn9%2B1xJNe8yFxu8HbvVbgM%2FrgxR86tTuthEVHBEivYwGEYSdTA9l8GaKyEkgF2s8X%2FpgopsO4BrcqGHPtQww9g8JV0kIzrbVB%2FOSMlGFmMHzRi6A3yTSASJEx8FqnJNnH3VJAa98zV4P5QXGVF4ASuDI8SEerX9vLNg5n3dH25mLmNJayZvmu5fP%2FYXFtyeyt89VmqH712%2FMlz1UCO2TnT9F2p3iDA8gZF4JA0S%2BdL6aWNA7h6zGA8P95rw%2FiHo0epJ%2FNikL%2B4WhpFXtzInY1WL4u05MKLM9cAGOqUBhT0EvBgVF%2B2M1pr6ZeYfbTeCp2kphyjW6JdmvTkjYgqWz7codOaLM%2F6xgBqS63jkgT6w%2BNvKRfImZ6GEOLK8SqRQFaQCfPy7ArXhEKBof9eQs9MrqlzVMAHLFJL1TJMa4m%2B%2FuhX%2F8PDZy25ITe28oqpwoYZDMlDrNyJCGqgYyQTpTpV8GvDSNbRCUpvRrc9%2B1dYTf04k7Df90Qdkn0%2FdK3MI9rS3&X-Amz-Signature=7952a422a589de07e502c8a9858ec58f53b0f13a5b67b6dbc8b27df01ad9f3b0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

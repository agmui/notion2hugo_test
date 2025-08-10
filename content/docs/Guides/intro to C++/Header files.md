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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOASMAZ7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwp4sbWXXBJULUs1bIRU7YJoFH9y0JleQodNSr1UeVZAiEAkq5aNMKkF8%2Ft7R1cDJTP68e7%2BqBYPp0TaUJgH2wqZOgqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxjK5%2FRXbJbUWFvFyrcAwAH6%2FhBaWYNtyBj3GoJWuSdvi8Pro%2F14rr3bKSEIoKDEt3KAWtEAcB29XOkFjwaB%2F6GLuLyOj%2FkAXqF4IjJO7AloYN36MPJW2hIEru%2F0xSJDSxPat5gXLlq1unNDO0uvPjAM9p7L2zF6a8KsqpEpRZqkMeCZfxi727Z2%2Bg2RXbVRcLcJjGVcR5oRfXDePDFRdLDI0rgBMy4yjibyKmF8jwYo4xNDNFdJBsyAFa7iv7tHIU5Cf9hyKvC6naOwbkyA5G00csb9eZs6DI6ZrICqlCPbagLEA6duP439MkWAp%2FEegHWO5KGm1AGm55Z934%2FNvcOEFhwcl3%2FjN77UBs2OkNoZxCr9%2BzoVScHhqLYdyf7So5f5Ll7SmNwyKs7lgfgeIWGSPQTOE2lAbyQGo%2F5WqPwec4ecHdlCFTcSyuxcf8Sr%2BGNYxCt99qiW%2FI4u2mX6zYrAD8V1fNxcYQ%2B%2Bx5PNYtulC7Wwjma20giOiq2nZm59Bl6iQJtf3MfAzK%2Ftj8sszTPXkMlm76RjJaFxIyPpqY0RuAuJ2rnhURbLvIpPX2rAu%2BWPB2nHQ3C9GTLz%2BdYtzcB6bwenVGL12RWl7SJLSiZXf0nknXKdfMu8XYWFZ6pr1ivM6YMz2kUHy1pMJGY4sQGOqUBbgitlkLFHdxtobKfY44bAaJs9BLhslUxEcOQGnR7BCw%2F7lO%2Fxqu3EG%2B8ZinLmYnkDhwVcy0gyLQVXyHmZGl7rt05dkLmmnB1K0VQvdmLRozfWx7Q0IpDr%2FxcdJpV2kQZwxjbAv2kO41kcpuryAfgK7WOBF%2BHX8VbjzHZ2XuW%2FIjV%2F4T1JOt%2F6ykXTQoiorlEuvmQTUd0jsk5%2Bn8IUlUUVpiSPqZV&X-Amz-Signature=37b4463f1e17badabeef62c3ba2032a933a3f679cc3985e08252d6b6174ef3a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

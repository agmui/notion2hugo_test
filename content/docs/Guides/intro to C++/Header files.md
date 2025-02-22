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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFQJJBAA%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtC%2F4yFPCIqq9VQ6%2Bcz9AyLuDvNA5SHyPqrysPapYpzAiBSdbo4QuDvDDJnwq6s7mrLutiXS83X5JhOom8n06Td1yqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmL7Z6X5CUJE4fvBsKtwD23vrc4tw9a20zo8TRl%2Fz2G0JyX5%2B7e4j82JatfbncmaZQml8uimqY4pSxMvRABXhEYwM7%2FrbFz%2FcQH6nZjRazPbjgYmTI4wWcosfEEitcH8rp3euCosEkF2sdePJOVqOiGtcNqk7nrniXDECHr3Jje%2F%2FHtZke6f9ma8kLtH6UYG6wlISQz0zYVLFlFkwSebSj4nDK99Rf87wFa2Z9NElZLZNslTcWnt8fgbBxDNx7uGOSRi%2B14qlno6bqI5ijgw57agrMcjBN1DGtYsvFTmF1xknrUsNSEA57aX%2BxhwqZ9DRH6QS%2FqEm9ifjlXTbAYzzYwbL4TND93SFZntoIxdu3Ln%2BC3%2FnUO1efPgyl%2BZh8S3JP40SBQnQPE2%2BRHJgelh%2BrSQio%2Bp1vP63JwI%2BsrzCE6RJ5ZPzma%2BUxpA9OwCcn3JnZTXl%2BCk0GMOm%2FhGjTQZTMyKtTUPVxUtMfSMVidgsZIAeYtnDJ6k0nEgBfTvsDF0IuNmscu6M38SQaScVt0tpJ50yFuaRXzqXUIJ3EKT%2F0y9P2dLaGw4qLNtFp3mw6YwKcNfJlmE5r5PdrD%2FeZMNqYthN7moHH%2FXqfcBMQ5HHRd%2BZmZIG2%2FqYBtqdEsEsKudXV%2B1h0A003%2BBWopswrenmvQY6pgHZALz2oCeN7hDyRd%2BQZo%2BVn%2FazUvZLjarvkrjd2ynpYSDJ9bIKCwOh13ysB5i3b85LxO%2Fyy0yTwJp8a%2Bvch1CRfGES9%2FvpsuHIzCFR67a%2FgQ3M%2F5EDL4hLE1CnnbkY5pnVyYxUgNVf1ZAs11XvuSo4TlA%2FVpvx7NbsImrD6jUvHeU03VZDh1P0A4vvjlR1aP3yX0ba3hlMksh3Nq6zFUJ2Ne%2BVXqVN&X-Amz-Signature=805e2016369cfabc8e2091f825ac428cf314113c8f38e81adf3263e977f24398&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4UEHAEO%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIHDsikhQwASLhQ0wWcDDdFljgq%2FIOkiwfy2j0fhSp9eiAiEAwKlX7F%2BkuiOqiItS2EHx4KlGbkKXAnjwLPylmKVmlCMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDCanK94WG7gU4DIcGyrcA4gWfrnzaRra%2BNsvabG4QKZzxoL8xHyspPxo03nq7UXJ19Hnx5Xcvn1cUGHmrNYqvqJbXpxY7cLWYlNhTRr6wNRIjFUcCFgbYZD49K%2BpERzGjUsjUZPwB8LvmtqKSjWVjkObBleIYbK2AEVqSHjM4I%2BCe1QUwZLWyBFawb6zTQN220EstOA2Nu2%2F1DxVO5grPvVn1G3k5%2FtihTUk7fBYvrr7owUf7%2FZT1FDmFK%2FQZa1paXaUec29xLg3ztwizu%2F8DNyJGbG802NuTObRdUFiQx9war8b4iNICJz6zJIRCQtTiNld9qcNDRMqjVnnVhQ8pFSzEwyXiUiSCIAlWYr%2B6Y3swMqy4GmoLRIvC9m5ce5H%2B3VQIoeZ0ce4YaJaXWgUy54zreooKXEhCEuvzkma6Rb2yMWG2J7XONkUe9UDoHcMgLQ66EsWlcsAcMUKebT89K1Wx50vUNRunObNoBhf%2FPdV%2FktdN3WNmKm%2BdoNCsqbao0162W45%2F0TyuMUXHsHHJdaWXWSqVGUg6W6N%2BUpzOi8NdowsYsTf547DtZT5EwDZQ1wZpD73sk0SAOKdkChGGbDcDRTW7zVz0%2BrmJnJ5SiCebPzaWEx5QgqaD18iu8q3bZrhloIfgfPchpH8MM%2FK9sIGOqUBggGgr80I9%2BH7sr8EJkeruqpF6c%2FF5NnNCiGGkymafLd0%2FKtopuRZT3svqEpuUOdrO7azw0S1z38lzXFns1kyxQhFgA5yf%2FQujw%2FFuNhu%2BTcGmAzrUkavzNNw%2Fox0OPNXEQK0t%2FQrxCrLelYRj6Yp4yA9z3sKjd0YLTyZgfr4tcYCxTdWHnum2IODldJvbwxVRcMxiLgioknyttspAVe3%2BWwYEz59&X-Amz-Signature=f40d96a158620aae1b9cf37c1aa118e45bae8f574f2083f4cd07d8b28f178f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

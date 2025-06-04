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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2M5ESGJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIH0R8IGY2wfWZcK5j3lcOOkZsTu2r14CIYoKtyjSYHJUAiEAllEdMWdjP8UH30Dey56G2BVdxsILre%2BSMFYoUebvmhgq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHshKlcafzAAUCQFoCrcAx5Uuobe1MKZ6E5h1I2h1fqgECaaWVqkxE9mjHjeZ1eKoLqkFsPeWtuToL9SROVVl%2BJoKpjcKNqxQez8Ej0xl2YASXCqTym8%2FPYv%2BfS44NJuF2ugfK7s9QlePB8MTDKt%2BQtcdDgoUd%2FbDHEFwSpdPzVRWlD8cF%2Bjdtb%2FikB8rYgmieVouy5BjOQQWff3S2YexAvDD3whLkU98TvS7EfG3jferAv6hg55v6xfsbTgu9brTM%2FiKT1%2BXt%2BV26g%2BXqVE%2F7lJfCzbHNh5eM%2F7qx6B%2BF1p4%2BPBNHfCKtMusKnpTFK%2FvqBKz%2BtgXbCuh0Er7MsxPeuNkrofJstCDmuG4urC%2FD0ZU7%2BvUp803QLdPeG%2BGzdW9TQiq1iCftwYjr0xKmigCBxgeg%2FviHclJy8KG5GkZfFz3%2F8VD1M0qAvE0UMEXsdi%2Fa6yrBEqhUqpVfSuennvmEe7TahAEKb6MKbca8GZ9o5oOwJTEWQTNlQcLrCAU0v%2BtoiZvw7YwEmxISjH3BIn87L19sA%2FXbo5omRkMAyhJ38%2BLPHwHS71wNRSiHSydi9SGdsSQszoVI7JU8rjNWLLSg0W%2FA8rXvqqA3l%2F8SffBBLStOJWGUWuvB37QThFP7EB1n53pCHqcG5aIYhyMNvPgMIGOqUBcQRNmWtSh7mfv5LYWNKrAZT0GogZdKm2s39%2BOSJ5tVfIcpuVNpvjSR0gap0Z%2BNkdaosNTAr3UipBAmYY9WHLPhcrZjVYoSHFqOHsAJju1ThbMNWrF39gOsDf8vWSZxqkTM3Z8ligIZcpLNk49CTivsNOQTNKR0GofAXNBkAumGnXFcQXb2erebNamvh8inFTnPWPlO5Y6bjT9BktZ0aeDkoW%2F69Y&X-Amz-Signature=bf44bf5306fab312f264f0b12ef22873b2d1a794dabd4c3aa444fd0e8f73a135&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

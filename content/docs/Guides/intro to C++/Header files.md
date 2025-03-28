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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642EB7CLI%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGqlYOki0LnTvyb9Tna7hxjrOFofXQF%2FaeJHNre%2ByhAAiEA2dlGnqH7E%2BnlCgbT1RYwmiVlTL7lCz6WXssdb2ZaLQ8q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDNaOWaSqZtWrh73xyircA2MSWXWlU4un11F511iLYsrb0ya4NwoTPdRUpzvk%2BlQS9OL75kcPQUDtBIdBiVdur7qsZDlHh8RkErxl1QI%2B%2BOjkwwrreBy1AUMI4hymCpEhZdaKGO%2BIBYdm4IvtYnY5svfta9S6gPN8h7mUC5S3ZXr9kg%2BklrXnQ%2Fo7TuPQb6S0Hyv3wSBEjmEFha2lECXD86AYEVK4reBglXDb0LK8lW5duzv5osIhxUqcmf1gnkBe00rkSMeWQTHUjEsjs%2BfsnL4AFiQFF%2B%2Bh4Of5E564z3X49bHzzicr8oKo4NQFvqt7nlEEQbnHo%2BmIaI%2F%2FpA6bDxhYpXRUfERv%2FrXCR%2BStLcBuA3U4O355IIPMMsxungDkJ7x4P0YFtW1YmxlZRPWHLH3FdfrR7EMS3W0Y5YOw1VHSDZuIfEaE1hlKB66NE9B%2BJImRaX%2FCoizcexVX0952XyPS4v8puceWtvNHJp2Fo4SJrxLTSzSEpX29%2B9HQjcm80Fw99hIr8d03ZDwqgGzQGyyzoDHbpLWwEsrbmUuFc%2FZHeqFqzj8X6GSSVlmoFKOlrZI0CWU82SQgp1XL05y1EF9wbmw3Xq7F0u%2BOluZmEUrQtqTqkLn3mjuLEdBntagTryf7Zmihc5JcqAB8MNb4mb8GOqUBtdW5LZ%2FpDXWvpV%2BKxLiZ96uo%2Bu4Gb77UDhy%2Bu3VNINlAYh5ZXuwINyBOIWmDx9AuuLhc11ELRt%2BlBBS3DK9f92GgD%2BDxmw%2FMFXWcsBHik35WgKnxWn3%2BjH5Hoiti0MJ6F1jvJku0R9alc7KvmU7TkuggYH1hTmMJwekORd6x1axG9QM0bbM9lvVL9%2BGH%2Fe0LMIUYOW2nqCdro2hK9q8LkxNgnknm&X-Amz-Signature=07c4c46f87e69f8277eb3edcd2d64a2f3f165d4674bac87cd1298b7e4bddfe02&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWRW6I2U%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCauKwEccXGv1OIV8Rq2giDDj%2BCMhdZe8wWuf7Si9kpzgIgPXOcwVF55TnI26mKRZDHf2rBaNnZPztk5VTOgrW27D8qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUizKktqU30TbZ%2BByrcA5PpRePwG2sfyOc%2F9tKdkevERCSHArS%2BAFkqGfRuR5FpbqFII%2BfGeLZaaj8PahQsSHRRyh5uwyS%2BWbSB%2Fzt4E0o8tBJW0%2BV4XZ8k%2Buiksw%2Fd4qAWeJQBcZXfQpHBrb6pCXmMP5LHgnomic6wpHPQaz86VBVT8ru%2Fu8x4bxMwExWPHH7sILjewoNouJLv2wThVhy34idk4HIBSRypURoz4qtbKBAtAoqRadjFQDsD5pnFBar1gCqHUHGqlkyBMVyMEeZKlBmTWqO1GbCOXnIOo7un89j1pEqcxLkAawOiJEe2iM1QcFyIk1eR3tDSWBYndi5c%2BvEtSxNhaOBlf60SPE%2F%2FCcL70Fdvj%2FZFUDmOalOIPkmJKNgOUXgPnVx01KanFFu3UhQzqqhum0NP%2BHC25P9dLgvimc5qXrmYTazmrhDKazp5l1HCaj9KC6jrQdUb%2F21UnrSvdY%2B%2Bo2E%2BG91IYI%2B95VPrTS7IZk8p9Yq3cII9b8Q8%2BCWwP7sjyB8TsGidv%2FWjXis9HxiyL%2FVLhkpQgSr4LtW%2F9e7f42SAZbJDYvA1Te8G8tAVqNpv0mbeQHrf8COGtMuIJoERm5q6o1tpiqtlWu7PINsIr7MdNMvX9m4xnJwpd2yB%2BweYHJgQMJve0MIGOqUBs1XAKbpTFo7hiftDDq2bVgCNTh5tH%2FN%2F%2BNqHgLvILtdHRqsFkf%2BOEPkjWo2T1TRzaJS2yWYK2XeMoNsV%2FNbrK41rM1p6Tb477S8Yo2g2jibMDZFqGMRyi0LPICmfWsY4y9cODmAWxftk%2BpSBZXbU6T3B28PHyWsKq4NVO0fMB%2BmTlMs2xlaL8V45mItGErx6C5tC57N4iF1KR%2Buzqpa1w512jXdQ&X-Amz-Signature=9deee3348518803bc0760274eaba4235d9daddc57a9962c93ec17e42bd808ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

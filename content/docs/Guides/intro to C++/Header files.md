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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGYQDOQF%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHamB8%2BfkA1Wv4NU%2FUi%2FXgX50IrOuKjg32iwUmLPUSzhAiEAxuvA%2FmsRx7%2Bj8kkdu%2B4I7QPaVHx7xfFURqgdPInw7Ksq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDDu%2FNJ94fX8y1iuqBSrcA90uPlmlyzEubD5MYihmi9r%2FlHZgEqk3yn94cdEf7Fs%2B5g8TVucNUTjPf%2FXIJqVJ08ywZdwk5yFXhWRviiaw0kJWsvEODasKBFcrrSI4LzwDvuTF1b2rDu6OoXCSVWwGDG4E1lXATg2fO3bMukURYBL%2F%2FLca1dmiRkY%2B%2B8ZS1F5LbSeWvG23avO3nwFQP6hw33hqmqQYN4%2ByEcJqxyUR%2BFyqOiYmdpw700iPzUJtw4ghi5GFfqG%2FvYvwc9mwcaVss3gCPh2OUVPjjAd%2FdB2dG6hiFvWTmVeftj15%2F12OjDsG5ZAsGw8E1XXbmGg%2BKw2m%2FM5FFFrHUsY4WiQQce1EF5zKrtVywpcirWB3ZvPl7DGPVVuUk2hI0Iywsef7mSfjfC5mmtRUhs3LqQs5xtcSfOO0D1Mg%2F1aysk1%2BAHxTFHot3x1iWrXdO7h69pj8bFt65m6NpRtPfqjQH%2BaGwEAXtlnz8yfGdwXQhA9QFR4s59ntMSFuSlhe0KAuQHjMLtVfqEdj1pgGUlju3sanEpnKULPQZRsML6oT2brEflsrJKMF8ESUcp1eWJ%2FkKS%2F4J7cTo7CHnXYqzHwtQDuBmwjzYBEnwNEvWWX4rxOAT91sxeNWb32tcSi5ahwSrN95MN%2FAqsAGOqUBXqSyxSacsEaem2tzsQN8b1EiLDCbn24my2hzANWkUi4ireDQ%2BVnp2FTNdIcrPZycTr7ZEzESM6z1NOC3HfNa1qqHt28%2BsfQ2RxshjZqgyQZujTiXHFf%2Bjvwqjhee3X5IZbiie95lKaN02KdKEzrt2ivCl%2FY1lINR8x1MCqsJo40QykBqb5ayUc%2FKcb4W5f%2BXQt01mgLMdWDTXth9ipfomJVqtVDu&X-Amz-Signature=be77b2441798cb688f941dbad56448ca9c37d13463102db2b8748f4c9dff5eec&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

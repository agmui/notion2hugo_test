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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLNEDALI%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCsZIvFJav2WBJns%2FbU9TljyDgROtD7Lw1Ws5LQgTE7YQIhAJCBU9crtRPDlLhWj%2BRUIbPfgdnZi3yTraDLwnJ5ncu4Kv8DCHEQABoMNjM3NDIzMTgzODA1Igx0AkQ%2BFGeZ2ptEqHgq3ANhfhlndbi%2Fb3T52DV1RGBGwRkms9VP0El%2BjdpAPNicggwVadt8Qqx0%2F%2FqFCl20uh6GWUnzXJjh99BVG9QJamZvwLVpwES3srTJfuFriLofLoz16uErGHG8U09jxChTnej5yBgsfwz4y81vtcRiDmcrZ25CrysaFliu0DjBdeiLVhMTORtf1XckiTfxo980lXT%2BMEuvZUBg2t0dDnoCmVsSRThrcZo9kfDkEYFUIMHwHsfAccjRIk5Shr61ZA%2BBbqrY6TWAoff70p9jOAFeZcXCdS4ve%2Feygy7jpsjxRSinc%2FN48%2FgJYB%2B0S8wSAuqi1qrYCoNgkams7fzwN%2F6eOMl3PylsN0exv3fnIG4gX1Sj0hDtTMc0yXpKlpxtgveSKyH8SCvwikE4FCPHn1EIcdKRu%2BuhgfETjPG276Bdjmu5DMdk1wDvGHhTW5q0sAYHjLSoUFlRd6zvZ%2FXub%2Bfg2v%2FGzKw%2B5g6yTOwxS3GejCS%2BJpptj4x%2BUF%2BGmscleXap6dxv6NWBjxl6vm82PA8bSYMdKwGtolMFdjcOcIhsXN7jNI6y27NE1esFNS0o%2Btuox1mPDhNQwxHGN5cEbe6NMGaCpAY3VVTFkNbBlaUxUNKOpl4R%2Fi%2BUSJlDISUu7jCq%2BIDFBjqkAa8Ly7b%2Bt6BJyVlxA9QD%2Brjge2sl4psyaSODAPYz%2BUtyFTECmdss0zOlkwV1lFKjPPEQjrxMqOH%2BdOlI%2FjWAjTfu9FSPXRBh7ly7Nj8CcT9x3bqTBqlWgdtrmlscK%2F%2Fve7jzqA37AQHL1RX%2BQu23d9%2Bfr7y7WYroVg5pyHbZ0ua8IyoWPV3RUTzEHojy4cHnujFwHPoqhl3gztks%2FUlRUqM%2BH0FV&X-Amz-Signature=a07f06b475ca1379e42b8f6c4996ba8560c16983645bb089260d5a36d3ed543d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

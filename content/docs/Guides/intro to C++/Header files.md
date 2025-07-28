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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666QS7IYY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC7JB0K6g1QKAEtsQDQ6wbz9KnCcJtKYKfIH%2F22CaWlDQIgdvc2EMLEADa4jxvgywQ02BjR1mbj7alHAQATSlUZaioqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJw%2BnysObLaaKmRESrcA1Kn4Ch%2FvwZXOMF%2BfSfSAsLXygSJtExFURFG9hxo59EzXFdSQaXUjd6mFM1C7RZuhiQrrqj7Am0im3HI9G6fJ8BQxZYOHUYdJYIsIllwBfGWrEUJ2n7l8eaz%2Bv4wEFItXvFeUYTQh3Sq%2F6%2BMmnF4ccXbA4g6EgoMzD08G%2Bkn36%2FlA0j8GBgUMwUF7NZTnN07xpYBREIjyF72riJlOq1hsatgJJIyXEfcvHbQdKdN3PUK9Lfqf7M1aJEqlz87IHRZ2dEeDVGRPpAkSljK6AoNhvqDh3VQQo2ifBouTS%2BijUlxQcLu5h3cGs%2FmklUJ5uhEHrubLaZN2fvQeW9UNdwwCANzbnHPA2bySViHVmTcBAtpEnZ%2B7dqXz%2BIf8SJuv6cKBGF15d8SkP1OPMGcQBLJn2C92Yi1Aa1SFB0qjF4u%2FHItpQKDwUngYuboKnypeK57wRLe9T3tQsUAmwVPBVkvaR5D7VuSI29AMLDpiA486RpfyL2maIGm4pFOfWh38d%2BhvU%2B%2FNyxDIcBn4jufmm5zrd0KxB3etHQeyRjrpeBh3OhvRrQZxb7wG%2FGSPsUQ85mciCnnmJvYFA8LTB5NdW9z551Kl7lU%2BAUl0oPzSDwuvfe5U97S3jZalae7ZjzOMJXXncQGOqUBAJeiKfD%2Fki9%2BtpMiFv7vvxnvskDoeVYT4ORcpRZ9cLfPRZnsJBBOcFF%2BNP%2Fb0qP7D3RNvRwykdxTaWG1R7uGOBT8QGHMwJX7OpIFJPkZGh3w4zhGxjMHYHo4VpA3WvGT7zu8AadDrt9d6qa05UsfgkwfZlLW6eD0B28LLWaa%2BwK46%2ByUn%2FZkAG6DL5ZOCopHzDR7PthcdCM%2BekuogXxP5sKH%2Bemb&X-Amz-Signature=277da9d1ca4c114f899fb6ec31efd44d93a3c8a57216fc139af6648cbcb13dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

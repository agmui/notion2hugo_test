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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSV37XA3%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD83lABiODWzuM6ZeTocnUjEgp5xT1qa5UF1xau%2FBQ9PgIhAPNek6%2FJTj60czuIkwFIjF20CSkfWmEAPMlG1tL7%2BH3KKv8DCHgQABoMNjM3NDIzMTgzODA1IgyeY4%2FsSq63FbBzU4gq3APSnJFEfvZP4%2BtBiVN9iruSZyYwqnMuDh6%2F9kJ1dHN3LzUQm9HjmmqN45av479y2MCMNJkCF4s4iUxpIcKVzhMB9Jl5EwL%2FDp2759K60Sfa6qaiNm9CyH%2BMd5fzD3vP2%2BvNhGMIna7lop%2FOCwthKbXnodnj0mjH6b9pswDQImkQGbi3dmmWM65PWpnEJNvgFlsLvKAXEmfZHo70LzvWJcaCYt18Vnmuk4ab0WEigyAzocO4pvL7Xbjk3sMWIcUZVj1Cgw7F7m1W3Cv0gn8bazwcdfCWkMHELZmNn31pdTsMBIUaLWGCoptx9%2FGg1cXjNhFbl0oAkxfO7gbhGqRcCcozwsCFGUp%2BtJIn837lurKfReGwAsUw%2BAQPuoLHyGCqcb4Fl5VZe58veZgb0CUwrjS%2FEsShP%2B0jSPG8Kj5td%2FoK%2FBrNau1WNtEzalrn10ipE%2FNRzpPyXd6xRZxZhoK8WrvWGojbU4UmDO4E%2FXVkwDXAKyQeVkmT5kvo8%2B7OA6WIkNKnpKUdz7Xzw68tONtIltp3Kb54lynkSbZtF%2BJGzt4D7dj%2BIgyqJcJ9XS6c8pv7qs5dG3IgUMlVqZu%2BRYYIx4vp8QzcOX7A8T7wzgc9Pomnyk%2Bw1dnFrfdxSiQDJzDCuK%2FDBjqkAWfqAMJhdYy3wKOch7zRrsZ3OZL0sNSaqjcqr1Vba93CnWRtU9LZNEDbAeHNaTgMtWmzB51Zq8ROPNi9Q2X9CgeDKOTf%2BhQKP8dK5bZ8TdK53lAdPzZccDASCuMwzQ7BGVPBZ5Oxekrlbu5iySNL0n0v9qty3GVWw5pvIwiXnFzxM%2Bo6YOTUlc2T8OP3UMOypWPSe3dUiaMJfH33YE3tBmzJHAzG&X-Amz-Signature=8417ff9686502281ba431accc84147c5c9c998e70b9aa5b24a4dfd24ddec8203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

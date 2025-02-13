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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHC4XQL7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDv0kbkhf%2FYJiag%2BGWwVpIjAVNIU92uNoNfw2ImO3yMOAiBgsfj%2Bz7d8L0BpmXNPeFjcWv6fTr6Pcu7saI63%2B5E11Cr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMPnC%2BLG5Z3TZV5AUdKtwDwQlp1Vz30U13btlVPZ7M2EEu0qYpwK88FqijQwS5WbCm4I0D9GSq%2FK5cr6hh05TKEWsAYY7NHkxiK0xjY7blqKK0o%2FrwF7ptXL7QMFE%2BLp0FrF6KfoaTN4CagRBgLArmDWcnf13TjaaLkC5nibugL9v4eK7TcvPlhyXkCO9SOgiOMCHQpebJ7TEoMsYhxYkjgYrmR7vGH4Yiz8HC9Kenur%2FsMlGFwhWPXdkYht%2BPaHGQEiubvo6%2BPcZTdnhiC2KUnmYDbRbInvMwU8fgVI30cm%2FeN9orvOrgjoNe05K9Oli%2FUIn3SXyPA592hUvgNku%2BmUQHKQ0G8%2FCs%2BdZG8udB7yUQht3O95CQVaUKNY53v0eYELS9ifsh6rDkF2g5sXYPeQtAuwkLSFgLQKGkkU4VdUa%2Bz2okw6XxSKOvz%2FCB0o6aSPXVfbjL2G76F9rY9T6U%2F6VLmQ750goINuXCTRDXbazaWuM0LVdIZsrUCtQNdkKW4ifzKqtUOMj3II2xgp4H7x6NYLEnzjXhVwUZrIdeDUr95fd%2BjOaLnCTb%2BSjRUYPIZZ%2Bsmp80AgO2NqSeUMsJkB0g66rVlwEP4V%2BSv79XinzS%2B3wvWznlWRuvGpgYpZmLdbFNIfJuIpdvwpIw9Z64vQY6pgHlGdN5cuct4wMObbjzpl4kmFCZIxXdBlSgcGOmplQQ4qCaxSsa6msVNUubD3PSi5y7NdMqUcO57D%2Bn3YJ6%2BwsG8nIsRdcB2uKXc2Rc%2F08nzaZ7D46FNTuPzbDdMOBOjt6hwnJtciuflw82CzPqUSarRdIsQpGSR7nrwkIsbDShlrbHxtFKYKdAF6awf1kC7zqAjwz71fS6UpirVwgII%2BnQZWcUz1O2&X-Amz-Signature=0bb3723b1bb450cc313449033d25e53260a434d9493d75d511b06917261ea13d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

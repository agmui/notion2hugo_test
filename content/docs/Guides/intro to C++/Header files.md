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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWYJQSMQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIGjqy%2FQcan4IuAJoxfe2uJuKpzVNYOILU1fhVfc%2BW%2B75AiEA%2FTKRUebzeiFDQTb5UQ4yKPn3gV%2FU7qi9vNupFNxRu80qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF38BLieRbGH%2BrWR6yrcA%2Fwggfl%2BaMpxVoxGsDM8pd175wQgE9r6c0dPWLwmibsowMSTqc7p4LReox2tNjDM4%2FuRkDcQkmVtejHQ4AEl7i1UcokQob6ooPaHwIYQxkgLrY5225qwuclfBx5%2BQpLTk9byJ%2BJKV2Ggb9%2BwZRycFVWMvmgGUAUrzX0lvhu9MoJnFkBVDHTyKMLkCF9iJ16%2Bi83YcgtmKHlBMKyY5EQbMJQ5em4MBYcSNYOHaXEVnibRAFwIJ49LjeViwSXrrrzAZIloWxKikQRBPm%2BP1FlnE77wql%2F2saTE%2BPhfQ85SDDn2h1z3lEKmc8tY80Z2KuvxpPY6KXsvosV5NWziN%2BLgVGaDtNJWiyDk%2BFplX2bJXjPBucYjsaXQf4eTad0GwrcUZyqTGRwXy%2FpNz%2FmLGzv1dV8vkqdEZRGGtanQ6gFy8z%2FiGQh6ATbkh%2FTQQLjKlNfa0qmYY6jnOOMqgYEXVa95DdqfQ4ZfXxyShvhJOLL7Etk4TMfyEb%2BnuBR2mzlRdOArdKYoBuvZaVAk%2FRc4kHpIMLv%2BvRfUOxhQ%2BOdLrISBMBX%2B6xBifxCz8S9O18ZCyxotqi1UwcgJRxcW2ZCmjuGpaHAb6UmU9j6%2BShmn5mp69viZh24fH2p44oRV1KoFMLmUzMAGOqUBUsv3%2BW6ZZKqLpFC%2F2xf5ZIFTB7sinLbt5jNOlamJGZUsTAJDLTcSN%2F2IboXC9vgdJecK7ReN2%2Bvx6Wv2yaaQwy1CGy1Yzg4OMeg5EJ%2B1cdAiN8V1YPTPBIerLDzmPS8nGnmozVUCBMuF%2B471hQM3ZN%2FXawg8Hjqs8kKY5GCtp5AnWNTgIOQP2Bk%2FgS0ETTw2wv5WXi%2FbY%2BSzdp6yVUmOrJ2Lzfhb&X-Amz-Signature=ad4ff138af8325eb0eba67c1cc3963c5aaafb506c59e8efdb04b3796a22adf40&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

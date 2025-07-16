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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXDBGZN%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIEfTtjmbSLiMLnwm8j55zX2nJkeVVjt0XGZU88V%2FIWtTAiAFdyF9aGbaxVm3plP3iAqxQN9O%2F1d9ADrVn5biyWUI2yr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMZoK2FUTiZYjBwHMkKtwDyfCnTWQ8rrivSytSwN8Do%2FY%2BPUEB8OuZfA6rPmqBgptHUuCkmErDGJXlaj1MWbUhjvtxo1i67HcWOX%2FEq7nLGnCRiLXTFLwC7GJH9zefnXj0TPMuWXkmFlQ1L52%2Fx%2B%2BbeI1se8XKy5AmMHebl3ZY2A9113WknNcyTAJHLjJdFonuxlNNoKcCaYNSkzxRuDXoWl2UvwwaBFNgpTDJyX0RXXTFeadPwMtrsQ64vWpn%2BFbervXwM9YNe9jt3MR%2BbsNRARMQa3hAhrRNz29K8JyevyysoyHKYhMcLKdk5RAc7%2BoSaV6qIa3eOX5lI%2BQsvqK%2BHicBX%2Fy1N36VEGiFqOZ8YztCOQcV2B%2FxTPyiRWnvHn41l7banpMASwfImqCQwgSKGlyeOHl9NUD8frpGvOW56dNwW2iOp5K3g3Puhiv%2Fx2jJEhfD9cF25rcQekiKjHYD9TZPdNS8Mtl2kzQxxMloB4B3v6KVXFhhgDtpZ1jy91rfOYUyVGJ8d%2BSgL1Oedxmo9Dxcwg6e4UQjAJVOrBBAw%2FPJypXinE2UNjkg2eQiali4lBZbWpYFhBf464VbwDUB05sitHTDRUAep0Q2sfm4BGzXsZKslYYhYN7WRgZppxPiW%2Fep2kp7CPgW%2FzIw3%2F7bwwY6pgHOMkvjZjYSyF2PUQltQmawDq%2FO50N9OCJXYgvC3UKo04yXP57%2Fg2QQemMlwDWyFpEBPKeIEjt%2B%2BLopftb85rzbSboRU%2F5n7D4ofs%2BfUmTUYTEFCKB0SJb0mzhc6x9DMdm3l5YqjzVeAlgxLxl6ilE3eZnxw5vXEMNFHPk0NAQwll43x3mdhDIUsXZIA2r%2Fa1falUPHqBW7F4oNIvT7vsfmlhOuCaBm&X-Amz-Signature=03994cd9a25ac63a7b3cedc39af079affeca9fc019fafbdb9c1f66223b7b341a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

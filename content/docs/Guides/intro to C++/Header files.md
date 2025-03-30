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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TN7GE25%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIDltGeau61oriUWj9Gi3OQAfvzikST1niZ6vz%2F1tDEeAAiABMihMuMQ7fXE6E6grKr99yT%2BTCzM2Kqt%2Fw99LYrdeciqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIym4xE35GZd89dzJKtwDd6Qt%2BLib1JKjvJTiaDaZEzh87OS3LIiyUP7%2Fajb84yd6ppPPzSfzBcJ1htY2yXBiFwTZELP5USZRTKQumSKLccawTKIrZTdMhXhf99k48IAV7GFa5f9XqMluHy0ccwOzQC704XEKF3pPZK68NgOKbDlsJS%2FYgTgCKRYo5Bs98y0HsWfqdH1TKooWsn4jw5t3w8m%2F0viQn%2BMKS6AVibb8wn6XwIfdEn14r9UzzMjWzMB7xKDqXxHsYTYO2h%2F0urthk2TDfkJICU19roftc%2FDhk36uq%2FALZ%2BOctL%2BTsG3fvOIAgdircLZzIq9wzsrOFoJaDjL4948VPASwXmAHfgeg%2BdEOGIwmcYn%2F9s8%2BCW1G9yW5VPAHXkqS3Y0D1T%2BB5WZC71gtn6KM3ipxquZEI%2Bl6fFN7y6eu7kdCUYsnw%2BFB7uW0YObPuHYHt0bWa6MoYs381UClfQRP2DMZSO4Et7Ck07SfM8H8E%2F00Li4akiurlaBgq%2BAXrDdYbJxixPe9%2BzHsgfypV3NMtqZ1XhU8RnzCw0tiKljpD582wyV%2BKGO3H0x64SAIHXOidr6yY7rCIR2AR86RFZkXHnNK6KK4WjqWcVjyixL7zXPu827dFYQ7hmLUH3c%2Fvt%2FbT1DkcNQwxvCjvwY6pgH0Xv9fYyPD%2Fywpsdvg2juROZRqQLvCxxVHupVBW1jfn%2B5vZ8zT%2FXvkh7LGVJSWyDdGQGG06zTxBY71pDr9nZUpCHPxVTV6f5OjBGiPORD4dGcmxxPWOkRVHmGxnaGjPduvhTeUShldkMHmOGY3Dq1uxyucAFb7XmH2mw5xrQbiG%2FB58SdXdgn2XoAtIhU8h9iMZOBZwlu9M1ZF2Ql6OYgXAw5Q4h%2Bw&X-Amz-Signature=61e8506ec411fab7e7123c6d7af7bbdedc910531af5896168be4618d2105beec&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

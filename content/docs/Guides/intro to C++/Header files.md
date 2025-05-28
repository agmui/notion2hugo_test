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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMURURNY%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID01SUEcKcS8%2BVMgAVUXZdPSzRbDET4IK16WZaqUuWgeAiBxFlt3ipxKl%2BlnDNZUVwDf%2F6bicuXI6FN5I2J4wcppEir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMR9DPdIt7k2zyzJxUKtwD627UCDCi4%2B1v6qrjl2W3G9%2F5Oe3pTaz%2Ff8jingCLdGquCMYW6BkwlPlL1JzknGLsESDx4QfYIuX2n4mVw4nOJj%2BxFTeZQrTOHqeRRg%2F3K%2F76xagjzMDvwUgagKltlIAk3bv%2BqxSr1gPupsS8%2Fc5Tor2BesCYWzultzedfxoCxGsYp7eU0rk3SHgez1240cQtHMOQoD8tbMm3DS8%2FduDytl7mCow4jUo8bzlHq3rD03QddHOljBLFTc8pYumjRQa7CHlskofkL%2FRApCKuo%2BfXtrXD5PA89j5SzVuwCk%2BwnpRSKrBFeKNStyBhAvDGch8g8hm%2FqOvlusybEscMAfPgnci1n7uksgFBdvrQ0VsTNxypdOpmkKkP%2B8eIFoKWd8t4dtyOHMU5wFHrcjrWYYQZw0f5MdkEv0pn4Nq98KoBOldVv7t5zeoHTkDiWlE9up2wZ5olGnQ2OZUGMYEI9LmJTXDs52pU6Fw5cRXTqeZFJFr4tRX55V9nI5%2FIcHWWmH9XQDplau%2BKZeWUeRbLsNdc8DrqsP%2BFNN3FbVV5O0uWb0sWzGFiU9PuT3%2FACgO3zjCFVLaqwNOEUzAubkemNJdwSR9DijpcmvcRNirLSkKUGuSg%2F6Cr59x3Jch%2BawEwh8bcwQY6pgG%2FdF4HE4QCv%2FyGOtTPs9jAbPg1eLT4jljTu0dbBVWKcjB95lsum3RTjuhLk6vgnAg%2Ficy0tf3oWDAC5S8KMKrBylQvkvhi1Mt4%2BJ%2FeO2uOyzjIUO9aS99EZg0NoBirobblQoQsT8hbRi5zHrzmhBVktVw4Ih2R%2B%2FI%2FTZmf3sNeOMiAKKJv8U8PSN6asatd4%2F0IYWqE%2FxjoaMoXHQ7c2mNDsZQqeouK&X-Amz-Signature=cd7589d5ee702e4fd5e5b7b1e4fca4567c3b5e081e22ba6e48fba5114dec1a1d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

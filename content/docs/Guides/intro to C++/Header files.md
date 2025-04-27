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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RRPAVO5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrR9lFzEawvNaJ5kvlQk%2F73owJXcAlSdaLXALHGTQQRwIgeWknuYpBHsHhmcjMdaKAPB%2BHnZXdKhe9eVO4nMSjGksq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDEzuakOcK%2FIKQ6tI5SrcA1AVfZ%2FEpDlsFV%2Bbk1aI%2FnkC70Jrvu%2F0Qqm1wQrT2%2FsGoIzur6k3Std19PPnsWmgNCyZnas5aQsdDueIjT89eAU4xigPc%2BcOcffajAc6bKwAWquBNVwtTkMRtuiQF%2BChxD%2BJFYtrabuBt7r3VDQxcHBf9jMMrcsJVUrkWKEnMXAAKV7pEkqMQDmQrP01eZuwUO5R5R1ok99JRxyi%2FFroYhPrmDsxqrhSOhy8vGVB2TCHnpOcqqKG7SLjon%2FtXEqBOkeblHhwhWmf5CLg7SNOPOjAWL7npn%2FZYpM%2BVYMzhr2WWe63ohqB4wKm3KYvoQdOa22HZT9eQyS7osWd7u51%2FOr8t2xksLI%2BkT%2F62XCznOzlEcO79koMunvYXCjCoazinPG7Q%2FN5jn9%2F8l7vjlQTqlZ7O0zqGzbuKEcCec%2Bne1n%2FkAKRSyx6LBIgirX2BxJByjmNVe1sdopzsp%2FJKO4UgXudmHEwESiGIlBAKs352STfpKwjuKB1ofT%2BhK50QZYWT3ECt5TT01EJ7zaJ2wizxodVWyCbXPCSVK4Dwlq724cSE4yUCboUyxdJmpyyP2SMPT%2FwmAQa7KereDJFKf0ueSR8LWRYLfbAtg7MJ42EsMiE2wtoxLuPJ0GPEORKMPK%2FtcAGOqUBJYEVgE7ziJaeWRih1%2FanmrwnS1hYudFRwizk6AXORw0T0bwjWT5Rdi6XfL5jMSxyqOOHHYiHSTfVd6JHEL2O1i0m7TR08eDvNizGNdWWSafyjgyuNbnbmncUr1Ig3ap4r21f55%2FGLjtNF%2Blo5c9ZD3QxCjauPTbSYIGwzvbK5GrxUdVEdBgSKVtQOzNsPQg5hbUP%2FzEEwmLR9vf4j8%2Bt%2F2PWKUvh&X-Amz-Signature=dab17f1d828c675dded3060069601c181ecbe84ee1c18c9cc2684b55bd1a605d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

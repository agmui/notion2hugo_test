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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FNRSHEE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBbVBZLd4yMQkqz%2BDgeBa7c1%2B8KXpw9Ek4W6w2s9VECbAiEAxyxnu83KZbP6ycws83fxBKzljA12jCliQWxh1MsrBsUq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDEpmoT2fAMSSq%2FLmLircAy1jGdLSz%2FHZV%2Bg%2FW9m0TxZDBdv4oTcBrgw9ApQZ7SUBlGbpMjeqIV%2BsBB2YVG5dgCLdXuF%2FZeUgJ6B21FA5mITKxJCUzj4Dr80ZvP0yH23us%2BAs9gIctycBxzGob2UM453IrYF3Pz14ZDjyyMW6B4LjUkYvov4BnhVmEmDJg2v7XlQGflpJZbuUlIYItQ1PrEOcOh9dr4UV457yrApaiaK8XE6nbtwK%2B8Q5pwDihVT4bIU6a%2B4icjyBfkUTMwFWmVTSlwSW01kXbbQRXIfg5C21iEagkK3E%2FbbtGsXNrjplvOY8htcMSyTbC2TJchex73zWKjvQ9a9VfEu1SCP7yyDwOCkvolDvGfXKc384CV%2Byw%2BnMxIxOn%2Bxji9qX9hevcLow2evkmmzLlHkvgWF5cItDX18vIHhNu7VUOZQU7TaZl2SQRHnRPaJo%2Fj%2F6mh8x7VUFTZndhutrXc9w9FPR3MkNflXtLwAIXu9pKKuDCycwzfeG2BBx83IVomI%2FxM2al1Se0Vvuu0aPFX5peeTvRvcbLONFdJLQDFLU3Z4D7Y%2FbaL%2BRhKosHWoeWz29ljgeI96LuOtXfS%2FaszpATZfJ%2FQrZcUlx2FXFBBRf%2BfviBTIRb0BgGkNzGg8LupWfML3ooMMGOqUBuVFFULtZYSOeZdpW7qMFgce8kideOhmXpJOgfc%2Fmr8aaHTdk%2FwEirfRgpTM3Owuzrdavl1U93HTvaI15cdOaS2ZBC%2FLRp3RQyabIBi6JTNxIDxNfgfBRLr3WTzfcemrs9YRuuQZ7%2B4QVtPmAjBZMB%2FTpzbEZ3vRyOoDDL%2BPQTWS3rAfRrAk8TdDRUjrlh3uVa%2BgPN9dkbCUBb6KjeoABt%2Fp5IJaW&X-Amz-Signature=fbe1da5d601d7b897e19513fcef39400c251d40bd1fb5b2d24bbda10527a62bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

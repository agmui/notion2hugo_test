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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US46ALYK%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCxcuNAAIldYaJ%2FHV84IpqoCt2yQvG%2FwpLeHxnbweKXeAIgBG6C%2FX%2FAKa2hbTQ7doZR8aJ3slN%2BYEipxe0Qufk1M2YqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMt4qgcL1bR7fBA17ircA9JXBEsHrN6Ndv7rMfd4ryZMTmEcoBKYvPjTXaK36j9NDLMHzTE4WlmDKi2so4yCbgT7RxMfINsDXOFMEvaYVMt17fYRuTL7WlptFpyJXJglQpFDX0SPnjH1JVtMTY4OQFXg4H3qPS0q5QcbA%2FVyM%2FKEPtUw1ZF2pdHlpmzAadgd%2F8BgpK5P9UEQQOS6N%2B6z%2FRFx5FHHBf7nW%2F7EoH1TXRArTpGysSSXshthFchvJOEdsepm0f%2FaA4%2F8tHua3DmhYO4Osr3PYLfePERPYe24xYevqlvPYuIj0TXn7ijFf8q5xv8I%2FtXfljhaBa7jkFsD1QG2Fi0p5k3HCHBejJiAbYIasnYPhoK4nD1vmwi1ZsmVsUBLRZllm1ijrVzHjyvXgMpLaW9N%2BYmmsVt4nPRrlz4KliRhFneJNwO%2B5LYVhVOJsJQd8stG0HDTRj1U9PIVnXnn%2BIypwPxHzH6iWWjfIDRxEgW%2BVanwedYoJm8WY6vjXyrmeWN4TZrL5CMfh9OYCOg%2B7m%2BffsMTyIcs5xbnL2taSDV89qbm1QR16lzje5K2Riu1k1dCSlzskC1ai2%2BOSJNDvZABfHg%2Bcliunh0JfOdf87BtMuofg9Swix4QLgtN0P%2FhZZp%2BgBp19zijMMnegMEGOqUBrOv2JzkTCBVtHOGufOcyAd6Huns9BwH4oI%2FZ2RS6K5Y2dUyIUAYpPIU%2BN%2BfZpKJm%2B8GGriy140qJK%2BCD7gUNy0ty1ft%2BNtwtunBZVu%2FeXlf9OSbBIMEleBjGZekCiDXpw2vaXLOkbmObpSWFQd3a5%2FNSHficVWYulZ5%2B24brJ7YLWxk5c5HIm070teWW5u8iFKAZ3SiDo6JbeWGeSOiJSxqkiNur&X-Amz-Signature=e16405aefbe6f40e8b7882c8f765e6c17de2ff496480add25c4c9103bb7cef4c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

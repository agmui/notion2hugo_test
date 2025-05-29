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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMA5ZHCL%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT6xpmxf%2FHdT8cVboMZoL2U8xJoyOUWuOotjnPhHvEaAiB48Zk3Z0xO8%2BjWw3KdOR77mlP6qgSKatn7LfsQFrjayyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBpAAB9VehxNp15ZmKtwDHkE5djQeQqLLo8hTpMruofdZcrrtCIEV4Co0Y%2FIlEg40cvisYv4vAlfg%2BW96GdVpER2Hgc8P21%2FPiVoVEHUC2EkT9arrScQD88eAIVH%2FKPFIlhRdxs4wes7Qp8LqwELsXbL630tF2gEJpyWDiGm7hhLQsMBPAf2%2B4AusKREpyRfMCWFMBbdKuchPEeSoK1RoxQ%2F2plJqihWVE%2Bx9gx6sxmEJ0Z00DKMiGSd1wul8vTtkVTpT1FQL2M5Xx7SerBIXda%2FBEmw%2FC2uzFyXXYnlJVYzAwPzU9jj5VzP3rQStQPrnUTv%2FC0IKsTh6T9L06CE1kAodSopknkGQa33qMqGj2Yp00bcbS9j8vuZlEqsXn5CH8z35sqSxjZELTCa54RlsIAlCdWxoNLHdj5ZBHEK%2F34z4qtpsiz1f6JxW5SJjc19Haj8RscIxYFyqPWv2iIsYDNOM%2FKe8tY6EPAEDcvyQE46mrAAFoveMuglVhFq3KFehJjZXTvRo9VttE96LDEgCzQRakjyvztM9Bzo%2FLSQEmoiijGHmgNySFT0rG5KRploNvD2QfQkZKZBvja2s%2FH12THu0VcSdRcngMrIZcuRzSO6kX2ihn1ttxnM%2BiCHUS8gidJyoyr%2BaM4wuPDwwqsLhwQY6pgEDnoW6Ualt87fzfT0mpnbYbHVQTFN6nfE5mERcBgdxFFxkLKi6JSFhTkSp1fmbV%2FJDZx60WVUxlaQ8yWqPvQ6Hy02UH3x5EX7wCCBXagY1xeJ%2B%2F8k0Tk%2BfBbikUwiK6doSvmhdkLLnJ6iOG5lNyhx86wMCnbQGdw1l01HAktX7dWZ%2BN4bWuSCxDhGrQvWlLwT5F5sKWkhbLEpNO9NUnfXMPqQsWUjA&X-Amz-Signature=e29c081e9754c0ed747c1d034b9e2c913bb9cf2354d32044c7d5d82b00dbec4c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

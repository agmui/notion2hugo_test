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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NE3YZXY%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDqBPf5927Z3pA7cTQoM013qzYlkh4jlM8uwkoejqME1QIgErlEcYUyjAUbsRgDURB7WEWYNvme77a5CCgyG4z%2FepUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJvZPbKx2R4K4Zg0TCrcA8sfDRk%2BaDcWXZ0VPIMw2%2F4pTPu1l4gtSCdDvaLLQt0fFbLbV%2FficGO%2Bsk9Le7vYfKnGTykNBMGgpz%2BsylSj7bKpP30hE%2FpxSM4%2F7IcPvsqTNUYyCYPENRUUSgcEjug1KZVpFBS2zH0jZQeaEhH%2BFXD1BvYF42GueeNF4J3FYWnS%2BWzPBBbbTzgkmIaVjM3YWYS6MAKfMZ9efFp8CvL0ol6TFHkDMW8z6Gt8MIZKmCBx%2BrXDjl%2BJM%2FThmAmsYGDQNDwdId97vcb7jYpYhRshc0%2F%2BIybvd10O7zdvs4SXrrUEGuzZtJit1JTAy9J3MOACW9458TH5vpiEkChBN9gNhcc9Wmao6pthZikE2qqF14lzVtIBHbbbAHNb1h4jBx6XgIUiFZCdjmeP2F46IvrXZrWiSTUQoctK4BWwiSrDT4FxDpDjmKJmRi%2FjjwR0sFlhVAn7PmVNiMCFhrDieTe7ZGTfuwBdfA61HhtJmEA%2Bh1KXznzJmuVpQf6p%2BsjU7%2F8X0pEIP9C9qSuyswovc8cE2sYk5HkEjFm3ehKqosBGacnoEVSSSiUTrL4KqCIa5ITd%2FqyravMMbVDBgiAmWiV7JkrHeLKVXdwXS3Dug5EolAi%2BQI9i7xIkPvdxbF91MO6mvMIGOqUBC9z7K2JKqUjiqo8%2BfTOTxMd%2BydiYFJOpwONkkOCMHa4eSSHvX9vXhbp0eBrmAxYQe%2BBhHKsAqPtdNgKttSayEMMH4mIMqTkS8TOija2%2BAg%2BwqG6JiAHYz37mbRwEXp7Xi884WAKJqJ82up7pC8N1c%2F%2BRTP2eUjDbiZbtX844fQlIMt%2F%2Bud%2F7j1x5RZLb00osST3JitZWGBu1vjVaaTMwcUeXIorf&X-Amz-Signature=db746d4d1484f7e0003fffe50dfb964b7f3bc4a783e67369f7e1a6d5ecd0a47b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

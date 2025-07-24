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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTPBOD36%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIFVLod3fPXhJbE6bDAeikRHnKygP8jqtpwGrsepsq%2BSfAiEAsmWr4wZpPtXgGDOuyVfU3nTJ7IWB97UWE2AfEKYeO0Uq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDETxyJk7hIXOmGIMsircAx5GfiyKOzvpknTs2suroMtu2Z4TTeVmf4AuNsOfUg4yDRJ0RtkrJ0uVYC4qGX3Qw9nNwCecQfvU81m1Lv5fyKsBakq5tJ9HSJF6BICxQV%2BA9qRn4jFRLN4cYXIgKiiKLVzmc6V9exqViFGv1R78fWAgI7N9kIscIuJzKNMBURThxR6WSszMSEz9127W6FiUGFQSgyVy7pDN%2B0AD1kAxeXCXtPzHgtXb6NDQh%2BCIlOAdYqnCBVmM1g%2BYKcHtK1MuKBj4ejW2OFTyWLBNuMoJIS%2B%2FBKNC10nOxV0z2tsePzV3Aom4Qt2RnCGCvFpkqgcLOBS66xFELHNCMKvOtztI9JtAZgCiuz8JdZguU%2F7iPDr8hSAHbqreu4LdNz2ZTDtuUvjpKE%2FFKr7ZoTEokH7A%2B2IUlQ%2BmxHUZMkzpEUksoKf3HWiPmarqhK7d0ogZYOZ%2BOlkexbiF%2FnDwcL8JjCdxrH6cmBq3RCk5E3l1qtTLmrbJ6QXnnOUM1IsCbWF%2BnXs1%2Bk%2FtJTBGgXkbDfRWudeuPbIWdVYqe5oDHmkrmS6AW%2F8w7j%2FFeBUArGkRoCoTpbHQTlfV1XsbKSPp%2B7vqwNxGeRBaZa6deI4mLFGvxo1NRZVifbTnaIu6kzDefqhkMK%2FYisQGOqUB5oQn7gHVnDSueS0cAreHStqS%2FUy9cwngklEAnglLITEvqvJSNi9wYGyM%2BU5Bececem2OM1PAg0V1xByWfP00bxzpSkwAu56OESUjsVMnuhKBWGDVmaTxJF59uIPy8uOZoq19YnRdzzRymfrIn6C8f6iiims7lADW%2F%2FnNS8JxWXZCTa3bNHPt5RuwQOzHRCeT3lQMcgzz4tZqClxErTnQBy0YWpNK&X-Amz-Signature=c9b26ee589fa097cc80981c6dd1ac29614a8191b096f6436a1d0c95aacaa909b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

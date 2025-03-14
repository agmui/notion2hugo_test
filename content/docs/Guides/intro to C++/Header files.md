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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQVBLZNI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRlQxuuKT5VcJZgkuF16JCFjyFPBuDBw15pvmul3dCsAiBmaOjLagb4IqhpJxLfRy4mPSdHbgNFNIntAboGlwYH9CqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOvcfMX6aCQ%2Bnf5prKtwDvZbDrtzBciPRH3lS%2FxzpqBPIDPscZgANPENjpjXd5XGSIDVgHI0f%2FgEncRB4hAOjqSpJEUPycAK3Htdn5qnnkBsPPFviZg1wHpAwuT22U1pEH%2F4a%2F2ZSScguJ7xDhP%2F8JPmV9lOAfMrF3FW9PGir6ufFoGMhcQJl0TXZJOdhtE6hG1wUz96FkGkHIZ64qPVRn3O0KVlTvSZGMtyRMPy2ST4FlCCwz3d3WmYoJKCTmbJT3WYs0NiAAPHUdvXBK1cSSaRqW8%2FOA55xAcArtr7HLSAmo9DxUrITqgGHZILB9Yi3p7IP5Ry2i6yJHjjFUAMb%2F0Ts39H3u4WOQtZYh50pxCSgAUNZQ5uAjWhorYSb5pMY%2FGHVDkD8GXMzmTyzPSUR3DXS3jY5%2FSqhPgnpRDJp7c3wee4dJqmI9W0B1BqZNznrgcuxjVod142es5BeHfh42dDIoCA2Y533IoL4Ukl4DwxzPeKwOGdJ%2BEU0YQ5DdiBfDQH2XAQ%2F2gbGiCNWbdCMLDoj7BPpuTai7kXWM%2BZi4bh9eMhUXrf0Dudh2wFKTPC745tA0h0N%2FyUaRKuHZ9rckzhl3VA9hPD2xmU%2FkcVsBkGTWU2ghcA0Xdw6EUO8mf7rmMWYsPPMwvH%2FeMEwgcfPvgY6pgEjgXUHQoxI9Yw1QwyRVyV%2BWPsqlDqmscCDzexB3n7y1EDn0tw8EHyTNBglQ9nHWUN55V0Y8nhnHwY0pvplw4MpqYDvwaS9wcb9bD0P1l8BKEltnfcNaW9Ic3dOMGTQ1NIq9o8c2AVrF2KLxt2DWRSYWPJ87Zpvfp0Umbv7eCnePkDsd9WcDBByX66T1oyEUZBdM6uZC7BbYW4ZXko7NFYC3aCSEhuw&X-Amz-Signature=f6623d4c78fd0e7a41bd01a18ddef9637d6df6274411d92fb9fce0de4db368e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

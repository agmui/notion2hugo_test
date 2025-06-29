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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AXC5JBL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhS0ctVNQJ0%2FHVe5xAwgjXF88CcgPhnNk4DqNkix%2BeUAiBqzrYYjBSiw6m44FYkauLZZsvGohzdmDyFxlZUC37UDiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZvrg6VDSIrFsN%2FMaKtwDOf9mM%2B0GehMkdlLzlNU89TNo%2FaCHSyE9Vx%2B0jNX8JIYtiMU1D3ByDO%2BmhA0u%2BV1LpSnYyEXTX89Qu%2Bd3WqK6SODGLW6uKSZ%2B21SFGIn98hwhAjanmxWhFU%2BZibpch%2Bw%2FIJa%2FJTo%2FxOcfiOSLFd6OO%2FxREoig%2BX3RDoxUz87i0aLpF5QdNk2s%2F4QcmJ%2F%2BxHkAfxeEYVJ6sKw3zegpBpJYUhTozlFkLJLIJJcd4m%2Brf94Jv43kiG5Fjl8Fk7JgNYisyN0PxS2B5l71sUDazQrH9T3e70VS%2FwjRYBCpYtLDiW3YV%2BTtW3j6pldrKmUxY4t%2FLf1kwm4F1m%2Bb%2BlZ%2BdDahhuoeqp2WuX4vlywsRj13vUx5HjESn5TJCvmX1SDo7f7Ap1R7nxjl8HsnBbrY%2F%2Fzc6kgo82iJbVGT2XJUYiu7E1USZZAZNX%2F9d2j0VBNfH%2FuVPB71Rkta%2FlK2k3UEYGDV8RaJp7NHeQnfsMF3QgDmN4cbgATAMCKb%2FwtIF9GCeMW8xyuhR9eMM%2BF8gGYK71cuao6UWi%2BTvyWdG95vrvkq8nHcIr8OHkwtMR0pV2L0%2FvhPFmMfhMsE%2FD4m2C0Ss6NW6bx4LTSmd%2FvpkT3qEhoyi6ueU%2BhRqnEUpfDtstkw%2FJiCwwY6pgF3DTqv1NSs160WQflJsIgpnKfUDQyaf2BxvftnC%2F%2FQxBdOU11N%2Fa2qR5711jIsYRRzuZwh1BL0OdEIV%2F%2BAqk2Zu%2BwV3BA9RDLxX9OAPEeXt94yqJMGOacizTJdExhWlheOajhNOVTFQUBj8Cvrn11oFKOku2iA82MRajeKo1u7JtTESCvlieYfi7URHnEGANFHPjtMqrgchZsX4bCkuWeuks6MB94G&X-Amz-Signature=00f5a7541204c7ce769a9b430789a0f4865af3e4f73f30f60dd4c74a344e702c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

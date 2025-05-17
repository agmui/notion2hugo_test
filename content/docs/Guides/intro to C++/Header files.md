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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W4J546U%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqskFu0NuGr59u%2F99GdK8t7hmaWOxqedCek94GklFrBgIhAKnQbF%2F4aPvjmxZkrUtjaMHBZFg24h%2FFaL6pUm4VoJUiKv8DCFQQABoMNjM3NDIzMTgzODA1IgzRWKwwp6w8Lo0vSXYq3ANnYVykttR7xjrxTz2QiVGTShSjDFHJQKS3e3GT5rT8xPdFoEDgKhomipCa3frk%2BxljF728jCMxd7aDCohIituCCxXuyTdv8jN0V8N4ig8x3wSExntDN4%2BgaVXvnjoW7Heba2%2FsOx2NCH5%2BKLdoi%2F%2Bit9qNo%2B4OrI%2Fa05LRzHxdgNicLRioUhLCGnEi2zU%2BM0Keg33WTCKG1vXKgjCCtrJzV6tTrn9SvhtGto%2F9hFKQRr9kLpUXJsKZwjlTBeiwMbpYLncP3%2BoYDyAzG%2B1IRRz8OzjAmb3INi44zWXkUM%2Fi%2B35lN2bDTw5YG%2Brdkh632JWwiofHM4QwdY0rO80MrR1GLnF9gNa9S%2Bh6xP51jA5q3c1glaQfjfgWz9fGyg8WMDVstIKMvrbNunV6RitrEgPSOeNvvinFD11GK1FBIyHMWWHIfFDHcXOZVLAOds6K6uAqZPbCVWMJINgcH%2BG77SidXjeUrav%2F35HwVjp3YMhhkHSlGEcTOL0GTrd6wgwp6BUaCGoCWylQWApOPqd0IEQhlOhjFzWD%2F7YKsbOzmLxwyx86OttshjqWWO%2F6IJ8TSP3LsVHm55gXjqSvmJ8pVuhrXVM0Yi5iqhGR2SvvCI7dmOEzk051EqJl5o4UjjDS95%2FBBjqkAXs4XSwGT8YvG4sK1ARpZK7ncdmPhNLHEdUujrdw7y0ExFdrTFoDNs9Ch86%2B26X13Ec0EGE0fFSaXAcDi69Vn0TzEIX5rU1Zm%2FeoyXoxmQrx%2BsKDMuJ0%2BawNWbWtXh88fj%2B3hF01yhd11WMkw36G0XVQ0aEke8wmDkmteMT7hLXZAc5Mp%2BrL8vXdJMNzHtq8Q80u1hYWU2K7RLjx6%2FsovNbQC1N%2B&X-Amz-Signature=5da226773d33af0ba786741e50521262c80599f8909d5c36289fc9713d4ac947&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

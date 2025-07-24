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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O76X2L3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCa%2Fx8csoERljFF%2BjzSxuYsMOCZoOZSMosM2%2BsD6hb16wIhAMCDhSXe9fG%2FTX%2BTO3Qjf%2F4XVSJbQMLYabjnV2xpLFGQKv8DCCsQABoMNjM3NDIzMTgzODA1Igz5V5c%2BSN97Lia2wtMq3AN9Q%2Bj8VnQ5SGB7w%2BBVCcczfJDuewvVIpBffmJeeynVT3FWJPAouMtPlATd0tXlb5GSuUTaJ%2FoZRGw2JBAK7LEsDVy%2Blyrwyj%2FvKyJ1nyevrQOqxCNlJqNpCIDqeS%2FHoJnxWVRm3SYfnjovYnhVpuOGJGuhnwZ9u7Olzp8nH7x3mtgDULngJ0YMgKmEddwZDs72gMPQ%2BDNWXBtHQaDe82qsCIpf9HEeaAxtri2hYLAUyczTpegIJvfWftSW2zsyMN4I6h82cE2ab83bVgAx9Ibw%2FF%2BzWRFis55%2Fnf0PSzWod393AzpM0Ibs4Gv%2BL5TJXkw4r7mQlEGz4A2GjbLkVlHKrDZJqwRLuRLlsN8YK4jMAhxBda2FlE72T%2BYgNZMCgdnZAhSahzYsc1Grr9r6CiDEvPZc76ph7xltIsakHTUU6enPTA7ycYgQPY1%2B7CP7iQAvMFIj%2Ff4n9%2FK%2Bd31V5CgfUs%2FRiui1sSvm96N7CMkeWLU3N22vNveDerGbhTUHbGDBgtXRXZj3bVonA3o2Uapgw9SsVSdnE8gO3a%2Btu93thev9HE%2F%2FB1jOgxzuRZHYl%2BQuuVxEEeTZUDa9a6akJGZ%2FRJfZwN2nnqFrGcPGTxlb0Bkp2fa5g3aTMYnBjTDWj4jEBjqkAUF8Vj7IQSOdM6qmeOumDyUXLixRD6LpARLH%2FlFq5KX5kcRqg0UB%2BpgfOT6Mt%2FX6VtY%2BCAQkI5WIx9GBvU4KNzf8t%2BZvV3E0iDIlgAhFvsO0DK4%2Bd6YUBxyq6wPiJ2QDDghu1uNm2251DS%2FseUsE3RDwST%2Bm73B6YlLiFW8q%2BbuaJm%2ByXv8YzPjrcMGhFXKz1DxbysN5Vzh%2ByUMogVMFjhqtqDG4&X-Amz-Signature=a2b2bef88e7dfdc363e8b43e6d82795792e7f2f8bd621467e82e17cdd5742b17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS7RL3Q2%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPUVOQydJHAMTQerl5M%2F6me6YhWLPCwbI0UJAa3zBI4AiA8A0GzIuXFKkn16owvLUJVa1IKiM7IwuLLCk6YthzQ%2Bir%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMXmx3DcHQ60o2mmxOKtwDRZKCKt7xgFeBtIF0vPPfHhqrtFo1DYLE4wruTx%2Btn%2FS%2Bl4mByVlhBUz3QkYmDg7CmXIlQ9SK%2BSh0QEjzUv2lHaPXM%2FAXlgasXefpP%2FYfoyFDEFnEPhj3G0N6WLVT9DxHzTiia%2BY4%2F%2BmGwFu6aqo%2Fe60RToxxL40DTUdq5A8oMh8MmuZ9FW8ynB4FDM5vk%2Fpk%2BlZb5nKIw5Ihh4Nyrw9%2BbS0TSqvbZXEA2BpWYTLbwLFbDxJTpBIc%2F%2F5K%2BkxjJPDwbSx5WhKC8iI%2FVGha2%2B5JzIr9eHBDPizV5siVEGW282QJQIn%2BSjktf16mHPw%2Bhn6aFnoZgFDt%2BjhmwIf7alcUehYGsglKorAYBXDoPvpnDjE4Rkg4KoUzcWPQo0t0Y9%2FmadEpRbqg1PGngt%2Brs8HWCfAP%2F8FK5o5OzA%2BAcMxi0EAM4UBAzG1z4J0H1gXKAaYeASV%2BkwngiRIVgCnj5%2FQr%2FZjYl2E2hKQOPZ9VxrmYvp4hiGvQZyHfvcnDT%2Fzi6msLt8ZpeRsvBwkgEqolb9Z282wAVWkjjv0llOM%2B9b%2B3DRaWO%2BYRz%2BEHqqBqhjmtbL8f5j04XbuRpJ%2FK3Ey7xb8pxaEt3tLTUiWPuKPVtUMOS7ULn%2BbVLxQYtrEnA9ow2ZbPwwY6pgEDF5spTmDQnFSKMTg%2Fol7dn4dSasiy9vtjD1w0NDPjRiUr1D7yDOhJKz5z7yZHbCNhL8oqPYHU%2BLvL7iYhbCkRSQt%2B8akAz6JgqiD0gXDJHxuHYo25IjKZPmk7BPWg1F%2Fg9AzFyHFxMygsc8YTA7XrmMDxhvvQYtjqWPZpGka%2FweiT%2BfyH3hl8u4Nqyqt28bGzNyXERs6vW327X7%2B7DE%2FpsJ36P7kp&X-Amz-Signature=f43e67136ae2b7edf78d8d0fa4df4530d568ec641d5f2f030cca8bf691f552bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

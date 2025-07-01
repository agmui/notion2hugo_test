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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S34DGIDZ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs1nsCB8H8frc3e%2BBt1E5sp8imxRlJmPUHsZhpRDJTtwIgE1Zomhq70UYiJtze%2FbhrOffLBBTezp2%2B6fNqV1IYpjAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNG1212PsCOUiFvjwCrcAwFgZjfthR9P4ZkvcLgPaf7qS4lJQ0sFygfmm6MRXWROWdpjue7mkZUYUxhkP4RtcWribnSP2fomyDbNRnBtXkCBQ8u7h3HPzYHY%2FkM8MgI0xPilSNZ8fiu4OKg9PXWtZsQQ8R3VMgVmBgBg%2Fy531Et2Q0XEB0MpQGU6KIHssGx2HxiBzFMFWUmtViDgb%2FCBSaOgdxW1VEfAB7SnY3PU6jdPrf4rV3PS2XVs65wWuetDSXCjG%2BVnvnztkiRgPkzGR0aA0uibwS%2Fu%2BkfxqFkrvmFG4pUqT%2FCfav57K47ao5QZeE9iKiW9xzKhDFIKJt7bCWgJ1Y9zhoJsnyEgT3Yj0nhjYi%2FHxybUSEmyUQvflv%2FDw2TbO%2FW1Cwgizm61uWXlk0pSgepNxVJcfMABKPNNRZOiTKAltsRSFhDzA4RUYp6BMay37GizGDzBVSUXrP43Er4ft8vVvvlVyQK9bL1BUuTIHBFt31lutr8ANhsbV7aROqHaj9j5yXorRTxDLePEG4qgtPJeFgWWBzUNmc15ZjwwOrB44dPGIapqWyVeltSWvGS842wcj%2FrFz3UU4%2BEb0HRZCshUcG4jyf09Z0VuxRM7GY5I%2F7IwWPv074qASunNhx2Qp495amXV4J36MIKlj8MGOqUB3UxTXC7N7ymJ1bXVHUMXffnEbrPUAel%2FefLhr5GR6mCaCX%2BAQbe0KwpBXB5BVfmdgwpes47a0p1K8gBLJxEVRDE5imi%2BJHa2IKiL2%2BI3AiF3XCPAt9ySUJ2pO1GBiSR1ij29gIfTIqdNheh2uzJVUzZ1dapn42wN58tRTtjmcRaLyrnxKB3g4OXr39Cs5fSsuXHAeuOnVb92niBOed2FckrmNmew&X-Amz-Signature=6e0267cc2673580d919c2541d50339cc7aa25578baa34a070e890b7a3483f716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

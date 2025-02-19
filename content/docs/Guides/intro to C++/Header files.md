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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLF4QQXU%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDGBLnnZiu7tQ1uoZF5nnllbhJLt7k7hAt%2BtaUKQYNeVAIgQiV77X4KOZAuWeqT535033vLN%2FM4KGJeyn6bBkLDOMoqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGG3Y1HGaUqUF%2BCbuyrcAwEh0kmZ9QSq9Us%2FL50iaoDJfDXbZv6KqIoZC3%2FbelX%2FX1C2RH82k%2BaCWopSdqkSdCgeLJvjLcGPbhaBk3erbm4jPj%2BI0OJSD1e3febh59w1speOMsj%2BwpugIBfKyEfFFY3YkF3Lb61Tn2WiWIsu0d59gbhcsYrGt5rXVFoRVermAr%2B3xRqvIitX%2FiXlu%2FsWXhMcrZN6BLrMemsJKUpUT0YVAU6npkfcDUBbx0WMXOg5AgBpgUDcWE46vhw2QT561DOnA3T7J0lAuIeSNBl7zqHvVge9QC4FBAPnzIYNs0BNj1NeRmAdOQxPCqv8AkC3PKZzLhMQaEM13gI5H8RYVvZ9tYfENLv1KTWaD%2BEpRAJGeialpyPDAu8kbY3uuB8yAMyLgGpoKBJ3PJqBg7iT%2FAagO1XQbE%2B5Zn6L%2FqPUrCksom%2BcwJEv9YqFK2r5e5EIS661UwCK3ha52vKtrvxIgG3RVRam2RcpKg2hC6uKuVjT73IxBiXR3pwMj0oDy1Ca9tkhMvif6IVCY%2BU0QtzvInw03KARcoKffVbnPbySS87bde6sb1Ngnh2D6sH2pn60%2FZXlmlJ3pVh6qoTJZVOtLoinp2fsNZUoSPC4AXTnnPWY3ckK8Np0Pug2wl61MObM1L0GOqUBC6afNV8oTP%2B9aTc4LP8fE%2BFxnMDfSDVRV8PyiSRCNt7BIahvOr7fYh8u%2F28LM97fpvhBGC6KYjr12A%2B6%2BTAAs2QhCuh0Mwjy7191SxL1jArap%2FuXvzx2H7XC2vgXf%2FyKS28etJKNvM7VwHWPff9VdfKTlB7CSUzfKsGW5XL4%2FzT1v5Wnix9tWBxjq6l9qkzR7bvpreYiURTerBzR46WSDHasqZCD&X-Amz-Signature=088075268d962c73b3e3b7b9f9424c816438e74bb99605cc81f272cf5f3386b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

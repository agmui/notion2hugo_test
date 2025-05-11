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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646CA44NY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIAQlj15HtJyAVQ0zMp4Qgqlb%2BL8lOvCPW9ft1bJdORJ0AiEAo6zLCUPOBgSnPJYWS%2BUmeBbq4DhGmoW6kpaHlh5YUQYqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzIw8uwk0a9%2BcTmqCrcA8Y7zy%2FjVKTPReJBv0qJTu04G%2FPsmd2KBYc4F3ZjbStl7Yef29PEO9092xjzuyzRVEphjWhOnIF6fhoXBAsCphXhWkoUb%2BebvHDvuxMgxgCnavUSh975IlkGPQoLg5ni8erWwtDy6h%2FCXyiRSFQgUgtq3QhIWIoBX%2FMxiv3qA9oPcP5qplXZh0tFiSj2dCtBIFhfFjkDsk3nIoEttDTE7WXs5Z4vMAkyRy7rxEP89FPKFBiGlG8xyUaWewCT9FU6p64e15J%2BmMFtZPGvdiJfORpqEX7pPGpe5VaiiIO0G3wgpYIKPxtARE1T5wuijDCU3Bcm%2BfGOoFEkY9650diR5JMSYAhlxV6ZLeru6x%2FfQ7gVgJVL0RXCP2Lj1DLOELZaaLcWPyyXA%2BozrchYaj%2BeioqT9aCCmdZoAitpMGObogSP2hd5%2Bd8f4CRvY0q3bT712S94DsXpcEE4qwzF2v5MYUwKi5PeXjBbQeXzReuQg%2Fc40x7Aluf6sdqepxRo8nOdnHeTI6M%2FVqAaqHMi8NmOoU6Jp2PVv3PwirmDFEumXptcis6QZuF5DGfnebT6pN4TsR0p%2FqpxIAjns6dNWo8EJn5m2Wwnkzpw0qsJ9ZAvKZoGS468K0kPS8wM299OMOq4gcEGOqUB78ETi%2FM35fQ%2BoxkHi5mRF5UuSLYEYYGUa%2Bj9N3UCromuVj49afWUHkP3Sq9Svh%2BjyWaofcxyNHjlceniH7khQgSVrTncpul3xcVl3kPlRRmNV%2FhwjmZg8MSjOFJIgG7yKTxnRDL89t89wIbp2QVDePBvWJL1Wzrx4yZEyJvolF8WU%2FBf%2F%2Fk7QB9P%2FExUExx%2FRStG1mtGMfGdXZWUbVOv4Cw%2F89%2Bn&X-Amz-Signature=a18919cd99b9a85664b22aadc0b76a0fe8961dac6b8c45b88070fc85a81b5028&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

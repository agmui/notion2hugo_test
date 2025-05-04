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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REYTUIHK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQClGhJByKYhFs1o%2F8nLSq2blzmZGwPlcXlieRERvb6UmAIhAMDQxjkIXzUODh22dVXd8egJLcq16QHMGTzBJdjJRUIhKv8DCBgQABoMNjM3NDIzMTgzODA1IgwVWLhvdKeCR%2B1UORYq3ANeAFTY6uSHSdIJ0mvMjO9F29p%2BEIIwzN8CIV9GTBlgX87FnSZhIPkm2vLhopwiBxtkkQhg6zovLJtlZ%2FjTeeBTe%2BC78jZKSFYIYhBki94rZHz%2FgzA7ZlHxSZI%2Fopg8TFpmoGd227tR%2FYB8b3LcG8i15un0IdGMcreKfQzJD6WBozeMkJkMln3qpqG5nBbPDXkiDuMpiLIe8P4QfMD60VqJfi2NK3%2F%2FILq8veFOKlKKreKJaczyPm9rX7%2B1x47zFgMmKato8imJo46P4%2FYfKccxy0BrGt4sDRv5aFXzRXStA7bS3HU%2BELN3oVh%2B0btTQsdsmPNzRCPbqnNivZFwPZEmXEYclPMMk%2FCk0eBTuWNkNXvaZyvuxLZmBit6t19rhs1bBLSB%2BVJ7%2BzjOm3TjacuRj71kYlKW%2FNjECI1f1ydxK6XqlEjzGaSDPX4vCgVxUPRb7qJ1xayM1vbJFpvnuTbOhwul%2BeTA05B2U%2B0lm1HCMHHOfn1yllNqZ0d8VWLACtzMHjsgWYIY%2BEPLAQrWzzVdW%2FNtj6oNNH599ptaM6YhOGEqS1%2Bx3IHB5goTWsP6q66oRc94pavkwIlWwc8gRLF2JengKtLOhmIfpDo9%2FPuHkj%2FDLH5O5MuYaFYQuDCJiN7ABjqkAcuw0GGy5HwYeCbamkVin8GdUrxfG54zUwedgJw5ee8p4oLut7BHT6xZD%2FsBQfdlQngiu%2BBcbLb5Esmw437zLJV%2FHD8g1fBIb9IagS7xdY33im1BwDPhoGolDJOUrbZq3iGZPEdnKQ2W111BWOsIQorZlJGo4Nev1lfwpjVWs5YY3X56KaCswr3TKu0UezYVJgJGMdqtZzxcocbIhFVyCZBkd%2FEl&X-Amz-Signature=3f73dd60033dcc153e6f7792b87fe7722f98c8f4ca725d76a2e62fe694469a06&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

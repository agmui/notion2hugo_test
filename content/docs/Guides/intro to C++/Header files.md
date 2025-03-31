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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U35H2WPN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCLhThoHyLVUmXxp5XcFtRtIt0Ge%2BIzUeuBsdba7WTHowIhANXE6caNC4hpISyr4TyYZ0QJqzUMAEq1duLOKgXfeY6IKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwnx5Tol07TmtaC898q3AOENJr68OeEc0HaXkw9ND2DtPpqAk7xpR4DWoUOx6Cypxoa6xnjTI3mHIDgAz09%2FWohdOj1gQ01Zz8WCEA3sKJaaGiaAUYbc7y66QAXcSFRVgXsqCVgnztiic2BBDZaej8U54fonjcr1hfs0z4AQqtq6Ct6xOzZIDmcHcq%2FRO3ysqYqpW%2F4WpGIjtG%2B7EDhJvenGjf05kt7PrJwvnyncxQHZTUCjE0bXtIn2Ay%2BX%2BzwwnKs2En966AGo78dD3mVa8yTFpWIPEpKYTCupLN2JjWycihnGVQHJiEgL%2FPbVEPC%2FRxamk02JYJc893tFipwMOZuy8iNIvtn8jGE%2BxO0rdY6GxdpRSxWCuIDC7zbLqBbpZHruG1qVROu7R1MukOXv8EA%2BrckJR9GNW0oK3AQPgJw3knd4QI2Vkbdna45owJ27gLnEW1DcJ%2Bi%2BqvAgheWWpkQSu3UcdDs19EBTbTVbiFiApzWFE%2FaS5bZgg%2FKpFmHyi3a8cHEap0Zuks%2FYNIKnBsBFGKYAZ1jJ0ftVhKWoTohTLRMkbDh2uvl7CSFNy1SP9%2B13yE7xXQ5QNsDF2gEqqaIX3wWCxi9Utyjasi3BCUH%2FenoPubM67hPHsQXjDtUQgCkCWPuRuEl7s1dhjCEoqq%2FBjqkAXr07McCgpQBHlt%2FaitWxRrLd4tkTDxh7qT028ESXiKEx9eOyZbzWRk%2FWR%2BxQ3itO9hyta3NrFZPSS7XJlwuIh4yIibhKhD2woLFR01R7sDYIzgxSveh%2FMir2CHXIgQQ4ah4%2BX1xZajoHkEgZ5cPT9R5pFt4YcYn7zMzlSWovuwRj4b5x9mbJB8QMA8Y6mv6O36W%2BoIjZCZ%2F3uhNuHPqRhAhNAfn&X-Amz-Signature=3c387583d3cace3444489b4e350a84b4d29cac7feb8820e60b796ec1f2ae3e48&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

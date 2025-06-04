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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKUZLXN4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDPYvXQkDBvLjqxHcf%2F7sGi6e7XoNNDVGsVNXHLzaI84QIhAO16n%2BbG7hI0amZtHgxErb5hqM%2BHIOTqaCykrf%2FwNzesKv8DCC4QABoMNjM3NDIzMTgzODA1IgwWVL968yFpFifhP0Uq3APnm1o8Bzbw5D5iEQFVFU79%2FfvJoJykya9Ef%2FmlQxPzjZId9MWAkRYqcWMuj8zLLIwefODbkCSW1SoYwqiTMUcYz%2FMA3Woe4TdEiiMeAUsTaJaqdQaNJwooBYqE7nE1W%2BcHCSnbRF%2FS7EvibyU9KlCyjFH%2FwsH5Aaf1RVeIgcvvIPmerk140ae13zRbbUygcYoN2D%2Bkq3KIzb79qRys2eWD908rIPeWgNwH952voyTjBOxqXXAYJjB8WlnT1lJRWS9Dw4GY33%2FRbSmhstSYAqZWAg6UOi%2FHX99vw%2BmaEfgEpnSgksn6Y6fdIB74w7oIktRJ63u9UQSDpk6kAjmwNCS1P8MctytkESkRT2Vyk3yQesXyGwAlX1WN2CJomSv8Kf3dK0QTFIFt5x%2FKs7nNf7%2Fw6YjpEQF5tP4i7SgulniDb7jexI7m5NxQp5MflVOsQWJeL55GfaalOy4rpuYkLGOBf5dcXUO0amStpCDQ%2FeiA4rzriKZyRQVjbuOD3mImM5wDYsO7l4nBmKX%2Fgy3CxxB5VciGIW9aJMInqYhgbwmBd0DPWUYp%2FPWEapijOq3FQjqo%2FZowCrQk%2FjOPuvns%2BmCuonlG98rxgW9BdPTJ6hoBpiTGErsY0LPrXMLkHTC4gIHCBjqkARUhJ3OiPgykOvL3vhooe2B8x3DeeAGFMbR6Y0sU00wMSxZPgC6pkg7LQhZ%2BX%2F6h4W5A8bIhzVN41LpNm5fNHRD7uHErrKdeeAtN54LvJO923CtTKQabF7JD1Qdquvhas5wt0HMSwawlSwon1qLXCVkkAsa0St5dMdLoFp63QT7lC4QdDO%2FvHlhbYsZJIbg0kqcCjGPIthCiYVI77tOBLSEgSiuN&X-Amz-Signature=5e7342338e71c1aa884e149095040b39c705c7161a621ea37f6962d5c0523713&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4K7MP3P%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDiSrzAMUNeL5uB0kn2v8dqQYI%2Bt7E%2B4k1fI%2FPVZQd2IAIhAIfjeqJ33dURHBxULtaTuIwO4FMcMjHWr2y3l1VBYSUvKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5UMMQioqyM4iIgHEq3ANG5CoWffNetXWOv4xfYr9yxFQFw4U4%2F%2BwSRHeWcD5mp1kss6Q2uxY9SDcntw0n9cL1DNUlfyCQn87GuspRGCO4q%2B0B5gvcSJ3xBjfXMsKoCEC7S2ItGKBDl%2Bj2GwmA1H4x9EuVSNa7FaoVnhwS%2FicE5WZlj6hn3Bxc%2B33pFxXb7kFCus2jztovKGZswP3Cz1lx41QVO9rMFPaoE4f4UDzmire%2BQbzQXIUHk1nwKtkjJslFSHE2KxIhH0siTsNpL15M%2BdfjUWAwyLrZKF3r%2BZOTIg9%2BWIOUXe7ICTXHMZ3AlavXPK4u6nnLXjdm1rfgd%2BH1%2BTf6q2EKlCMpXeUYQQGTHRndzpQttqT9icW%2FNTwkTJOVo6A5JqyqoVBoM%2BC6z5QTGAnajt1mq226SHHjpxEaBD3wvkipDL%2BosxxPzULfOAc9Zl2GXRch5G%2FXx%2BIRzk2We6xzTZ2rVbdcU7QUx6bHWGGuFH4ijop6s7xPqPVBf18gWvBw4Ru%2ByZ7EMvmexlwQO%2B2Qq7ZUYRmgB%2BRZSK1PlYb2pOlYl%2FcL2uCQyNwptf2Pd1WFtZ6BxPV5tt0Z3LMEJb%2FFDf034Oyw8dcG%2BkKCLR9QRyirF3mq%2FIvOoMn4353WepNZ90GFfhF75DD%2Fp6HHBjqkAeLA6EGSS1QcC%2Bna%2FoSZ5%2BaJVkHXa8N2yNfQ8yC%2FMup%2FjYyNzWbwZH0wu5VvfYmL5vmukOSp1cCd9F5Vad5tYtY7axOjzP1SpuYhyTSNJAjH9LeA1AczzNrzixXDgjT81UaMdRmqj%2F0bFZ0afpXCpEdVVQip3%2BA70Esw2klSSLFihrnuKlV9MNsLwYrwj8gsHXZWbfHOB%2Bpsikt9ZVuyglOgW3eu&X-Amz-Signature=fe69a4143f4a9b4fb9cab422a2c96d3f4b4461c3d657756346c4c4c2c659cea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

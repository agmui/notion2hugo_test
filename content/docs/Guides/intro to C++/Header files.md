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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFU4GMD5%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCEQBtcA%2FYARkiAc%2Bnf60wIWn5heoPmYP5YhypQ8ZkTRgIhAIxuqX%2Bd2WbkPEjSQdHK%2FPUCHGuhu58pXKpvvKmLmbcDKv8DCDIQABoMNjM3NDIzMTgzODA1IgwcRqoH3QXTpP%2BIQvoq3APr6SMwgf6qcAIpPOQK1IanpIOnbYfmVO1BgDMF8DHKgvALaYan6bfBaND%2BH6hPq1iDxLrUDKc0n0kZ4VdB5rS8jID5YOfP%2FZ2NZO2pDWmGyRhNFNWTtaUJ58vi1sNi0dE%2Bw3PNrYXjFRkC0khenhdC6x52IyIQqFcgFcLvBQS2xpx240L8P6pCTWwQk5nBqAvBoVMSsbO3y1%2BnWstylpxkHJs5lF%2FXW9b81e7epFDYKYephMVrM1qisCEldwG7qwBHiy93lOznTcFc8za2zqZf1ijXI01%2F7IhcY4N5%2BSZDVb6o2LsG%2FD20ZIZocSbLsUe%2BXEIoxXfeF2IHwSDQB%2FY9kLmkL%2BKH7uSWH5oX%2BhiGZwYVk3k4%2FPlkuezEJOXh2kOv9s3LDaZFFOR5C2IxToKc26U2%2FeqykruuKBk4C%2F1Rx4fyBMwZYh0aGqBKoMR5MoCM%2BTgIwwi%2BzKT0L0KC9A63czuq2BG6OUdA6J7P%2B8W947QzqFFbvyXk4GCc2eKfN%2FcaCds4hEOba18PyUuWCPgWO%2BLdN08OEyveltNLnjiVqrmkHbtl%2BlnciGYiRbwjEcySLadxgVThqMlFbp%2BnA3ETAE5x4vWzFaCLVSvBzfwYZvkFn1RMQ6jPZIY%2B%2FjDVsInJBjqkAdNv814xhSX7u7hVNKbiy%2BdCrijP7qXuZlOk6Mi%2BOADLz8izK%2BPvkg1gRkxN217mTtTlKvPawQOiBFkzyyZ1aBk2zL6F5jYCtnMM7RnWjgzC2BQFi6leQ6yBJCsnmjcf9bNbUwMDPb1CE5dOUOKn2efPEULBZXLFbhdMsLQMMla2pQGLlkDZ7ub5XAjde2qOXMOEJtKd49QCq1sfaFWCz1YdsY2e&X-Amz-Signature=f2d3e2bbdf874c1463e9b5b90c88edcfc8697b22c493034eecb9d5bc5836f57b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

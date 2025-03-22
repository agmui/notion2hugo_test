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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGU5Z3NA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC9pWNm0X7Dp7IlKKzFVsDDzx6lTLxP73xdMJRBVFovEgIgCTa2W8OrCX6YZGTIYgZ99wrV7C%2BZKZ4i1cdyyWt5Qt0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHe6bKNMxHm8beVjuCrcA9%2BnPPzOo%2BVhJc35DEmTlR1Wx%2FvBxXQywA1XD3tcEoCxBFIR%2F4V2fwZn4wTrtrQkaulpjTvdHPYTqvGGcP8%2FFym8Aw9KUbtuL3HOQUAldBo36oZ3gpgU6PLYZxYOVWvMniyEKJZUZJlO9d79gfEj943Fgg7oV%2F0oh54rS8i13bMwuPymJAhBLIxcSZ8vpThOuiMfzXVCrLjmLNoZ9TGVULaUogGucSrs4khim3tl7reBbiVmAbXS8JvKga%2F4mm400l7Yjc5VJkLWC1%2BCE%2Bron2NZjsYJDpjGDGqx%2FX7Nn1c4Juct%2B1yXhtvURTr5Azc208SPGHjnhOPdM27p1bdXYyVbmD8VFSJDnAPxyxIWZaYUWgNoh0eRymZ8A5SsFW3AtcVJ4rq7kiaOCuNxY6Yqr2o92Kp7XfdQU6qmWL0BIS2S0mWGfvVAEnYQtnu9ipYNkHtb%2FXssbO9zZHEKdntdMrSzRvP2GA0KIKVV4R75L9RKPBGytMsa8%2BB8Y4ejCBUKCo86b7zLXVCqgrVGD9yKUTobt0HXN4ck17n%2FHmQbIUgF7bQ6zbrJfKwUP9998VI51mQCGCbUNFAroteqwALeCC28zviE%2F3lfKyyfP1GRPJl4oiZjqrJvVXKqDg0cMP6t%2Br4GOqUBnCuNOEJU68DvnxMer9Vrp1hKO60AtsxZGm3iw8Apa3RFsYetrmcFdH6jew29vEE3Qsu2qfdYjyB53uAK19x1dDxKhY%2BKARsV%2FveDGKh%2BXTIdLLRgxKGeo1reNk2UimeOod3rnQkU8XRrFUb1EUwGyuQaAEI10cvFLM2Plm5XDlsQcVhH84p3aBpWuH210A4ePvsIpQU6bw%2FlXYMUnHHSb4heDnzI&X-Amz-Signature=beb2fa718b2fb046ebe4c2f57b5631836aacffa79581e68d81113bd786461901&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

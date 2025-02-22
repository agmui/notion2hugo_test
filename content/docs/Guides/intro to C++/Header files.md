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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QINFLRUC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpXSQac54cVfgLm5IqYcmE844QRjt0olb78%2BIjbM6SmQIgUDuD0gbLo%2FiG2tztcQYfin3R9cmE82FAZ2soJJexHOUqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcy6EUPwrKn7HMAPyrcA6PmncneGgnRgxLwYmcw8i%2BfgQDN1xYpPwJEE%2FWlrpjRv5sahy09mSphgLo2SbZnlTajGmii7Qj9F9dYdW5JcMEH30e3ENmhRaGnBrqwb7f%2B0sC5C4ORr%2FPSCnBRQYICXManNUZaQ34jTSU0ti2RWYP1mp%2FpPWNn1eUwbU9JTv2Z6G%2Bq1cRs6Aa0A9p%2B8ZkQxU%2BfYQ4ViWk4OHzmGZcQV63ApaxKCCSkcaLGl4cxko8OPH01J5oMPk7WqG5U1dRcAUHeRwaBq7x5MHhVk9qtkiGp4znuyrBwo9PyapQ2NFvD%2FEUpeGVhl2SJPRnUKRoXw%2FSb512ZmocLzgBsu7iRJbLehoZv211UCBlNa6rnndwcR335Ilr5MiiVBzswxYzN3jQpkXBUBFvgdCRPq%2BqwCC4AqoV9L5Arnh6buVaDQPyUkQ%2Bvish2efbmIPDcC%2BftqBolOG09CmSigQQnGGxWHOZhU2kIBag%2FdTG69YZqU39MT3YgWaTOoTLXg68%2Bhh8WsgusafxuiN%2BArESCWhL6RxRv3SSJEU6yY2Zb7%2FFMpPFPksCqPCLPbvJxV%2F8TvqkXz4dnSrvWzoDC6qGxR3i2hRF3MyUEu7HUx67qSsbIwyOKedKR7P%2FJt0lkt22zMMX4570GOqUB8%2BzoIBoOvwBxKMxJToi9j4QD0fXxUpDneMNAFEhwGTbJKsKeDS094Q7HrDMOC822RsCMd75pENWQtcz%2FCY%2BD8JBx%2F9wiAeRBB9%2FqsriOJ9TMq8uS3EePiOK%2BXYDHF29mLMghfEQn6uD%2BUVtop3nxZeZgww9CpJ%2F63GgKDvquHfjX71SPDZU%2Bjrl%2F5A9J2kgf%2BLab7dVHddu9rF18%2B7Xof%2FcUJHxD&X-Amz-Signature=92d5cec77ddf4da4237c588f06c313acb57d5b07df988f3fc3c446c9576db9c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

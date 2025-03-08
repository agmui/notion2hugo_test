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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4R3R5QM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBgkOBf%2FY%2BSEpAfNwGuznIqb9vqaIbWua2MpTeVF7%2FS3AiBZDJK7wzwASgYwMTQO8FOKTJGSdyzaBO2AGSxUafkZvCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMNOVcSmuJdpQipRDcKtwD%2Fwxudp%2BQs2WZ3Ye1hzpuifRsvIgDjYWWry961qC9LdIDMHJKFQQ44gCqEL3XBG%2FU0TOh8QSKahsdfmJniZrLv0tLvyY5qSP6cJrtxBCBr1TLJySnCZSQy%2BqGWLm%2BPcQC3VS7NYBLgBOFo8LIOEL81zu1CIM6ONf16rgPY0KGSQCizU03q%2BEIsGvy9uMhw74HhuKEVl5xhFiJhEjnqFs6Whs4vDnlk050ER7PqX0kovSoY8uyungF%2By5CHyGVajoiSSBAhHQgjkhFEAn1dmnnKr5Lp4gA1THdRLetGzYCHbCh3a3CxdaijBvrKX4MI6eTcZcDbU%2BQ9Zrxefm%2BmfcX61PIxGGFmqv1mr28IFozuOasILnFZt9jGQpmE3p57WzgiZOJK75USYuhH0mtLflb2tsMmKy3IZrYiSTQvQ9aoQpEBa3RLfr7jD%2FYSuTjJg1oXnUEtyqdzIBpJtVnYvfbm7WNIp4L6uJuOARy8dw%2BUVswID1KXjYxtWBJMHiEjnE1xrk0aivM8ra0n%2FvcsOT%2BX5l3ZTk0nT7ZX2J%2FTdp6nUZbBqzQK%2B8qX4SLmLePOFquGuguqyUXzU3g%2BKmbK2%2F1enmg%2BJwhbVXNgoF40eL%2BWKcUrGaR9fNCiSxdM1Mwqd2uvgY6pgEVTsHSpCIlZ0Z1EwQRtuy2DcQXqjFIYzoGgdY5MTrDJULFG2OwUYp6jJmC6Osb0Ce38cvWRIG2RK28nzlGljwQEbPnwYIulH4h9rj40%2BDFqCx9j%2Byqu9dvmnGvNUDADce3wub1zx25Tc%2Br3ilsK1D5BcGpFpS94Ic4yX6MYcNmNo5qFntEPbwDtrekrS82GG6PwZWPmp8SxO5apUIFQ5liAbvC0%2FNF&X-Amz-Signature=11e128e7e16b84c0b502440cf32984a27caf9dba99332032c39577d80cf517db&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

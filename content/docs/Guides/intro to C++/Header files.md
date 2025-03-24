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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC7R5WKU%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7HYuycyEGYhvg%2BK%2B2BpE%2BxLdfKsJkk7Iz%2BheRBVNBOwIhAKycVa5RtqH0JytPw5l2UZpEVFIGUfUaOl5PN4w3Aj%2BoKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaqkXZvSo7CuQ3Vswq3ANRGCLZt%2FEL%2FhKwaStCsRG4IisR7hIribrrVuUSBHgHLldbyAEsua6Mx6LCUJHzWHtIH83pks52FKUMzkjWeKzu2qPf5rcZtHl%2FlB5O2det2aQ%2BegGiUkW97GTB6CMv%2Betr4%2FuIFmsGWT1F3nPAazYyo%2BpO6Jzc1NLrtqECOYKcJwWtGN%2FQdfLC%2BL8RbSKrM7hFgcBHSClIfdajBIRHKpBwdN%2B%2ByqLqd0MR5wRNSRngT8kVI38AsKoQIgxBfMNVxvvi4MBZSXYovQrlF%2FhdVnTkaLbj7%2FBUqHrQ0Et5voTjA7aoeAL2I14WLkOEZgvGM07mIa2rJwZ0IEmq67qlVu5Df17zlyQtPofX8fdIb64dEO4vhjSEZMo5Kbaqt%2BTFiLKa1lp7pJiRf77a1s5voa5udgDnxByAW7kHaCdUtg1umhPKQQsZsvHYLwfRwHRpE540gSkdsqpPLDfBG0MNgo0TMyXZvLD8jDTvLTM581qWS0n3yH1uH1VKTIHFtNLpYT1EaC0TcJ4EjoUTtUOxa20CRlRi%2FaL6pzpSFEFI6meNEprwqhgl6vfFJPDIr6zGjNSJshKn5f4LVGO28S389mdX0Ox0ItE%2BS8vH99QruyAMbNXs9DnRpIrMhmP64zCI%2FoW%2FBjqkAblOoSpyS7rl%2BKDOIvdbIQegLGY8r3Jck8VSUq1vknWo2Im%2FBmZkbrSdYZTK7D1ub7xJCNF1Ng1BEMZdxRVyjo6X6gQHoKhBhNSnbGJAEeBUT9uy%2Bepjx7hod2A57ELvMBStbatbm0NNYlPsqdwa96TzzBxJrbSDy%2FhXJV3CdcnE36hPkaL2clcF3nn24pFk9Msnwe8otXaqfCRxOjWJT3eOhNAn&X-Amz-Signature=ea3b3c5e9b09838c4db6f6427ff41a10245a8c5104735e20528bb8482bf1ec7d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJCLJJKB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDrWYzXJ%2BoY3DrL%2BqHjS4FskOCsJRytD%2BU7OiDw5Sr3mwIhANzfqkB2c76BpxF19TMoVJJUT6JVG1ikt%2BHGSyBT%2FV%2FLKv8DCHAQABoMNjM3NDIzMTgzODA1Igw6tv0JKIt5%2Bh6G%2BkAq3AO0%2FhZZAltPHmN4rslkEMHlmcy8zOQIkrrLsGgc9duATwYHILPGgFYyI1AQWKp99vpyKLnJ4Yqo554viG7U1iSqNiHxS4xZWnfbY%2BNTuan7pbJzTp5dHmt6xjyuJK%2Fr4Eo%2F6TRBuOfo4M4mptR%2F5ln4h3pp3rPos%2B2%2Bxk5pC4iA5TQdZFA6IHnNXUcuAv789yiFhl37S5wEGzqyvn%2FqzMTn%2BaVT%2FSB%2FbjgJmnYs6YAw3AwDDNfEDRRkdj6r7AMjirHFuC6jLOENUsToYlWJm0VzxZLfuxU3DbfJCYdJ6iUjDHfRMTe2F9%2BAylI%2FYEGHArwL8BDdlbpVwyHXiDqBL4RRJBXg0Q866DbM6QLF%2FXZhNWobPSHWAe%2BTHAPLTYceAl3p4bNZJa6xx39wFDDcyuJ46q5YruUtg4%2BWn76g1cpbpuGum1STN0zrZqBiYT0jf506RmfVfjn5mnqZH%2FD%2Bt6TyLV%2B5voZyKGNtzxit93yKFaUgE29%2B9A%2B4eJ8SyZKU%2Bz03zne5hkFHKyrmqih1asm0293VKAwoFucss88cPetVR9A2DTDYZgIc1QnRTUe5ghCrHa20oEvXPRdpkXWa%2Ftw25a3AjrSoFh6qzyR%2BvyQbjQphQ9xlRMhrMucnrDDAwOLDBjqkAan%2F%2FUxnKlhoVvmNKqRiL5PVlU2QgkBNolaDFIpErVeAb1VWjCpW6bc%2F6gFjlNL07MY7%2FsS5hE2N4NkM%2BWDwrdkzB86Z%2BTiA5kf4sYlKYoeMISDWOW1Yyx7YrFpDAKBZsiGFB5y2YM5%2BFS0rEipkE2euZbfJL829K9Q0AKealgO3iBEOVG8pY7DwoyRKfO2QQp0j7TC3tHOrxCJD74d3p73XYdMM&X-Amz-Signature=31c37f5be8e34dcaf7c8951d0858d31ba05347318ca33168e04b01dc2b70e4b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

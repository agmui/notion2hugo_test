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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO6LN4S7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIEBuAPvBPRsCOytz7UeoskHZ2tkZ4KKWE3k2hwpdH5OEAiEA3FpCYI8e%2BWTX8SzjBkiTlAL0Q6PyRNBaigX5KgLk0g0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDO%2FVoYwRXsq6FEqLaCrcA%2Faxe1Ol22eaZj8OpwgtAPhkj3UyEcPi588oPIlFIUS0eDmcHbEOGC2BYO4kLImFv%2BPFx63QTWMgNewRY3X60IRLmAq6mG5RJxk3RuYyb72yuWT5XSzUQTm%2BvS1mlhOwdsxg7lmWBdXwILaXdq%2FH9mMur7DGUnS57w8PEL6jFASDyVEz6knAWm9OeskfOYuhWTstCbtrlv%2FLdm57%2BytrA%2Bb0CkSJuc9RVJNDZoHSszeVMLCGdObnNQTT6yKqyAW9Rfr1fgb3Uu7dQ5Cw4UR8fX%2FswyenMzUoqQl4LavRZeUaIYSBNOvfHUJoDdQeQ1dUf5cB0Yai%2BtQg3dqQ8cF7m5bVMiV7y0vj6luONxRtTbHT%2FuxyL8mtENO25F9vtIhaaMGRdE9i49s3JK3DRFPoMrFMvXnttYSj6H1nuw2KwuDNjOXnODYBY5QYo5rjhwtanusdHLWh7nxMY79pOChq7ojOgbMBqie3tM9WKc02li5w0tFWvVVclGXn%2FfPfpZ0QtNyGBnrT%2F7K1uQrljnrannywIFLWjtyvUW5HNREVmKRAfPvi40H9XJUSIwPNbB4hvRN1EszZnt2Ungftw431mwzQo2b9LRDAzdNqZUTpUSLJntN3YA8l%2F1H8pR%2BsMKv05MIGOqUBANy8ouCFUmmFzf7hMqrvPKh%2FKurQG6OA5Ic0S6mRS%2F%2F5R68tpf8SaCJfrIsuAlfjRMfJtDiJrU9HeeqDv2fz3rO%2F21Q2GU9HS2r5TYRGJr1Grq%2F3qKm%2FOW0sC2vdpHk6Hbof22BhqEY8lFFPFBhenSSM1gwnvu%2FiLcLaao1iXhUwX3qfqD%2BVojxF6tS2ZLAXgncQRuIPYZ6QT0tgi8lxdZxiDjEU&X-Amz-Signature=a85cec646cd1535fedfbddfa38e789dd522afe4ef60e2a73bd55770924fe2f84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

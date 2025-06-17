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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSHCHQNE%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYe8RFvCAQ9jXhsupUFZJBSLNiEm7HFNW2rz8GdRE8FAiBEBNZM9j63HEmaO2F945ck2e%2FGw9kIIIr6nwKhcC5Wuir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMYhrpbVD%2ByMe5MJHmKtwDf7AzWdT6riUf9xbNLX6vXKUH4LkYNDvIi8dpImArKKcr1Y7Xkm9rFHocU2sQM2EGbcJdYHAXOJ5h2PU0%2BK%2FwiZHewOVJJ1%2BOYgQZSWAPi1Hjxdk9l42cCMsxWzZ8BQD1o3Glbcc%2B1bjCtzEHswX7CT93fkJ5d633U9NzjKHbeuwBmCSHwhMSW1p5KA3f1j%2FYcCKIau9vl%2BO8eNM0nqSg7v2phvyLZ3nD6ICZCkRtvIg3BZCOrwbJqeCh6a%2FEW7iqB0eaAz%2FUuTbSe6VRRVB%2BDSwnRQl3D%2F6ZTgGj0QYj4j%2FgPbyzzxiicLMtTdelD0jzRJfs5poMv%2FMVizG%2BSp3vgkeCCaH4UTvm5SuX2VaQjNelLoAUugGaqUjjw5dp2YJnSaVmCas9AgDQ7Qb5rBjnuXvot4aycJgoXzJC9LET361mjFCL0Sb5E3QMW2uEcPlIN97mNxbiLRr748lV4Q6kcm4wLszge6UM%2FNLUOmZRojzHPHmGs2r11mAHheZbhBDFbSJ7dHWSXF4zaM%2BxJt6Vd3k4hzMZZBbxKlZvQZi%2FTKyauh6vlud7sEFam8lfA6Ws1Zn5IvfBLqy8OOTR%2B3nU5htBLKK99icLNU%2BO8Vv81D3BU9h6YjMtQtqb9KcwtMHDwgY6pgEeLAxCPHWULYCvW5iUfpLSwpO0BEVE9cub0w42uwKJb5S7CBzUWi594oL2SQo0wLbUyjipMckr6AEKtBwsP14hZKftiIszMPx%2BwGPg78M1mj3nUC50SaSeq05Odo%2FtljNx4gT51A7kDTjC24PJU3%2B6OPnwXb%2BE%2Fp%2F786RvrtClJDR1CenKCj5Q3r5Lf%2FB6IbEJNDDT8Gf5ILEWEH8mGBJgSiHjcsu%2B&X-Amz-Signature=e95913d62fd97a88d774465c0f9f95583ca2a8773c672d6d95f24b9a3d17535d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

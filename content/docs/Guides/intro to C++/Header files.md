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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCGUC6OF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8JIRPeQ1mgqkO80r945LxZ4EmccY9BkB8ODcAFhDlrwIhAJHE5obglDoAQ7RBcs7kzcrnk%2B0FujLgaS088FVsiQ99Kv8DCBAQABoMNjM3NDIzMTgzODA1IgymJh%2FTMgixqVeXqRMq3AP%2FM7hFkA5lZv3FqZlID9l7sL7krioTTCxoARB6Ub7%2BNkBcUQoaJYnGXYoBj5L8wsSr7kbYgrG551PpYQF%2Bo1EioulC3xDNFTcjvTj%2FD%2Biel3HwThRlPQnVSkoxrewY5goM16hsQPv63vq9jSOZANrCH0X2JBSQNh%2B1uWOjM0k7gRg0V7p641vEVAZZ%2BHYaBeWRby0JVP9lbB%2FqSPTzoyGNEHo7H8Ws3shttOYnr8Vp2FbNKfiV04hsBSmWvArpGEW2Q%2FPB7eU81HN%2BnU7%2B%2BQmYoYwg%2BLfGpKWhGpNI1oL5%2Fa%2B7sQIRuWZFrxkEmnQyFs7vZFFG1Q0A9gq5ZkQqnaeKMK3SpEQyHkl7RCGNWMuy2qsc5G49pSJ4D6Y3V%2BCMiLmM8ebutu9ORj8dJSE7tP5mrGjyZnZb4z3emz2%2BICMuJRxU9Hk4UC6Jwv%2FiM%2FVfnuqRaOMx1ZBKXAo1zFE%2FT76yns8EXrt9CzwQt1JA8GOfwt%2FWDywqkee3AK1%2FeX01DUgQuUOwyNUcecAg06UZySOgOtkcTrATyb26lWAzTxqECeV6Nie%2BUaZ17iliVEy3VwI0WRM5upWtxY%2B5AoH9Su4W8f4OwpK9V9J8S7%2FpOHfj4tvvmfmAcjV7Y8oEbTDN%2Bb2%2FBjqkAWJziv%2BVjOLCCfjy5Z3dxRRl9CI8Sey6fcwzwy4lseZXz3IfAjcDBIrSU6SHmPQXelDs41G0seCKjOkvjSrCHjGVtuvcmIfgVL%2F70B6wsHPTRX76a47QzZQHo%2Fy%2Bz50AU7q5rJWUVwNNW3bDdQVyS9d0NC2%2By4%2FCDqMtm7Chm6gHQrOhoJYRkXUeJoWamxlQ1Proi8WyuoXc85v5pIWbPtzp2H1y&X-Amz-Signature=a1d4445ce3262c4051c2974b4cee3723f21ba89ff22163a6fef90584b93f062b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

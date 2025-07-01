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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKFNQGE%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmUmJ%2FnBEub1xUsxK1dDTZv4MATRj5GRbtW7S3OGIFsAiBsq2t0fGbKlswei6Wc%2B5Cphep7hoFGyJ0y6p8%2FQhcMwiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkYH3zCPL7cWxOLFKtwDenIu7JujsCWOOcfuZamKQEGFpdjwHPRKS%2FIZZSxVY3JuNuMMLWaCzIvVCa8dZYb1qvKepGAjTJS3vzPAG3hHGlzPl7QDsNnp5Gk8DUe15xmoM03AW3b%2ByUdMHW4zYG0xnA%2B07FltHkDgYU6qNfbNafACLioZxZaSGH2pSTeqVcLjKlRP40Htg6301QnEah9B1m0xNJc33xDOK9G1WIJJXz6ndllX4AYy4kNYDmnl0%2FBumUCzM2ueiyVjC79QHwqqO6eo4OnRbKpBxA01wGxezT9juhv02um8A4TYnDtGgaloXF%2FADxQzqCL1sJwtSDMqRJ90NDXYzmDqHWsXgiMKNUpoSotPDNx5XNO67xUiOGRm3lOMbXfFWKy4NSnx8ffIk2g6MZgohFuWIUzxqc2PIGGV4Ii4wCaKWw%2BZBAzsFm0rfA3%2FH0fm0jcPRHg4r9ynJRSTR80ClQQkKPCfBUwmXUh0nSBDzCOj0qPqOYu3ef2FXAfypgSYN6w9SAnj2TBMODBfr4qnRm6HDgTuq0YK%2FoTeQaN98HaG5T0QJMHXjexPANKbBEc0L5Ae1wCOXt4B4qrPgKfYg%2BnfyYVz5BvGc3UpGYyktAPjiJ9elpKdHLp2QGGwGV3SE7KRe7wwqMSQwwY6pgF6s5pG95ZoFGCxb5jXuO634apQrENTQjfTxiy4EVgvoIDVtfq56IXuLYdgE6nExeqXctawKF5MMUseskWG25M08HRsWI5%2BGVEuMIffvzCsn4U%2B%2FO2TA6bx4Gw%2BGvpe963zk94NSa6onA6b3Jt6D1EFgv%2BKpdbjxiE79OQAYOsUtzWRuy4TdgdCRlf704JypjIxIgLK9VDfb844RrhJhOlPJd2UyzV0&X-Amz-Signature=dff04908e25466b4efa98f4d0996aa1304d4c3089a8cd063c8fb00be992144d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

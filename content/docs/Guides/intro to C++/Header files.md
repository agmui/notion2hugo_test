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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSRCLLMN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCNmSEjb7PlFzAwzBgrhU6AJMWemRowZ%2Be3mnsSh83%2BdwIhAMS%2FaznKrnqa%2FzgTOg2jcPyGe3nD8ll30pVsISn9ClStKv8DCCkQABoMNjM3NDIzMTgzODA1IgyTlJ84vL7xdYIynD4q3ANK%2FrFto%2BZDFza3YNN5B9xANPGCeRrEds82j9Xzd%2BaNJKhOZneC2jLdSlNSA6kKZLFaDSAWr%2Fu7Bqvq9LgdH9nu%2Bs%2BZFfpDv7LoJ2BlrdABRRtLFHLueQr053MMTPQB71x7N1q6%2F1nOnZEhvP6HWYJxwNbTEDpsaca4KS7DUvixeM0Kqg%2Bh0EenMorKGiYtXwFouyzKX30UBxE%2BHkh10H8uxOM%2B6sViqmHQ1GPknTRGtlZO%2BdWSWxPyTsv7RVgLqIBq5qlP98NL3G5sXlmExpBK2IDFALMq%2Fwlk21vsanvl%2F0nGkgVfnuP2gT0bGeGZ%2BvYenzCS0Ppsh8Ck6EMV7kGxJ7aermQaoSv%2BIBBgy9d%2BEVlU6Gr2eJ%2FWvT81TfnOtOXHvBt9KGQ%2BZNab5Uwa7CR%2BvTvYKPaljaDOSEXY4Ni%2BVlC7Ibr6nZ6BuiCxPxCzXq5DImbt2sjgxwYLr6816jhr8tZYtd3R3BsRqJTPIlP9xhCWWhu25BEkiplCH%2FX6ioot%2Bn%2FwDddEl7VpRiC8mTrZ5GFIejOiUWuSCr6QBvb2UCJEC0QBV7eUPkc95a74qFdHcqIk%2F0vFiM7FtwjaFpKtOQ0J8u0JnuOQdQQbIATxC9mEO6%2Fz8gmBFOByFjCc3LTCBjqkAZDwhCgzMwhRy1AI5Th%2BRlGv47FvssKeh%2FS0h5A6UuZLjjn4p%2BxUDbRmgVaqLlbDM6BsFhwMmsjKHIMMOvS4QCw5HOrZ8ZFW25RRLQE6LGPn2h16GZ2cwbMuNT7UPSJUFz71smNAU%2FzJbcbrB9KMryrz3M3SwIArr1ES8pwgG%2F4ZmZyhmhBXPdZzFpHkeUqKRoVQwGCZhDMe0Ea%2B1CYom967VJp0&X-Amz-Signature=7ab0b6d82de546c8e1350e43dd979052d883b526f2150c014da5468754097ce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

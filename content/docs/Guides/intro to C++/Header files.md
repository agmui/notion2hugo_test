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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAALUPGG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQC9LOtH7mqE4IxLCRc%2F3iQ0aTU2PIMbPfZE60O6pypJ1QIhAJ3858DlXOpaoqyMkt2fBOCtd8QsNF45BJKbq%2Fcsw4VdKv8DCFcQABoMNjM3NDIzMTgzODA1IgwPmHKF0wct6cNO%2Fs8q3APlR1rVInxGIwp6aeOLMLGrhmCY2nkogULUdfLu7okfX4iRsSYKMi8%2BsXOoLbHsSKSsqVKhdsVxvAw7tFTCr9YhTaIt5gHdRCIbcyyocf1M3vo9P634rcgqS4RUVvQefY2%2BFObSjQbFBX2sm%2FQyXE8Ju8D1%2Fiunzryi7iOVJYv8Iw88tEb%2FDXgy8bqhj2tp8c%2F5qUL0a%2BZ6KwaaZ5nC5FY%2BmSLArsSjgN4B6WLQFjZpQxOoXu2JCRwIRGPkplAjP8ZOM4bOwq5qsYkWvgnQ6FwJDiorU0ne3uyzdNHTlB3qJZX%2FHEsMv4e4wGw5uImqtl8k7wrMzeRVXjDucrCEcNVsMLBM2loYTGNaUiHgWFEFHM5SljkoQPX2ek80W%2FTt9h%2B0Cr6Z%2BzA3ubd4gxrS8a1b7kmv4VfnB2r%2BaXuRGZE29%2BAoP5CCjETfRZY3g6Ns%2B7YEsJnGaJ%2FzRMIUY2lhRR9cwgNE9NqC4oGAVPVmNnaEtPLSVqFn5pZxC8y%2BlfiKBymiOs2STCSR7B5%2FDCJcfO4AeKBSJabNwCE62AIZVRmZB6jZ5CCIVBH%2Fqltv6wsfCadK0BM8MDAz%2FQ1%2BLdLwn1k1VOjleDkmuDbJhSIr81tQW1F6G4cbeVxHyfyx2TDqqKjDBjqkAV5reNKZTMmXHZ%2B60SlKWqsxY61RJ29QKLZ85HiNMfreq%2BcdViUWSLn9a8RA1x2nMUa40pCaehBnfPGHoNq9OKdUpa7eMks7at6Me%2BpnL1aZ%2FP%2FQ3%2Fbq0LkmRDkFMGtsvbYzm6RPAoGpAj4jSDgylrnuA9lNccuJjLT%2FlPD8q2G2wMlnoDdzK0c%2FgMr3GSigTVvizoYpVCngqRC4OEcS8FAf7hQo&X-Amz-Signature=60a5c67acab31c5c08bfe26b59b23f044707b486787b31afa2de478a0ea98d75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

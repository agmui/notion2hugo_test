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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNF5OUCV%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFDERKfhDvG54GQNAKSf0LWE3NaaTDIYUx3rRzvZUhVAAiEA%2BaO%2FimaAC2HXRyzagK2uK%2FZ3KS6T5FbCBNY%2BiF7SnfAq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKPQertEY%2Fx1zlEbWircAxWKo8i5mR2%2BLqGx1PMO%2BcwgYH4Y8mvKArbjN2C0WgYShvFIq8rTCqGv4cf7RVKdtpEQk0B46nmXBQKMKG32C0CxkcGr96ylUH%2BFS9B%2BV47rgBAvfpWdyUfAJX3Ni9G8T2ZA3eXx9SbKxKmSMEL6X1NokNgB9HT19%2FF%2FGw%2BQkJpGBsHMQnbOTGOTJNESEMY1pOpQokhVOYIAiqzZKKUYW2ykGofKDpdn7AK16avKUXdhREk8Xe0o%2BmAG%2BOpekw%2BOwr%2FbaNg3m3uoxV5yBR7vpl7%2FzbYT7sIOOO24x4%2B5e5hnfQ52PMND50N8oXWCLtTkINGlQFlbw%2BHLJNikpz3aLYz%2BtI2YvxcGGmRHur9V6QH%2Bfn9gCq%2Fti5baqFjuZW349nzl2nvwR%2BNGdpnxEehLbm7qJDRvTRLTSQqTUYrVzEf2lvtpxRD7JBIVbj4Lcy1eOuNeg7TwNTHIui2CvYojbAVWpfLtuYYvWbIgsmE%2FZUE1hOG4eV6AbkANSIgOkQJCJTTWI%2FDynBshpfPO%2FBE87bFnozcfnFptpGP9TAZFXvDsBjRJ7A0CftkpEWZ23bQHuBn3hXhdksh0RlK9jBthNUzVydo3RYdH0ucgj4wPO%2FSfNLJSeNzGXafsIVPHMI673sAGOqUByo%2BBwc4mzdc%2Fb8elEzX%2F7QfsgvY4Dq0oQ2jbmgztHPp1WH5t8B%2BRfWaPD9RzjP0MuXtxWiq6JyLYgP7gDttUU0FauAeom3GwQUxhNOklHWHFoZsSBkmSpDM%2BNvROpWsldUFKOffWm3zgOMS%2Fi4R%2Fy7miVq1ZhAU8rtAW0s6SrcxqCRCEd3eD2y%2FUaqaWZbKgD1pCB2vOfwfUIDf3e7b%2Fr%2FInRb6%2F&X-Amz-Signature=fd076e4bf2b9d6a3495a5beea81a8142da9aa525a39e486143e5dc1b1de86e04&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

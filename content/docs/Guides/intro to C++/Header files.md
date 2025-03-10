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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBDGYRNU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC8kLAF3uKmpbhk1s%2F5G55wsVefWm4eYI4lfwVX2zR%2FAQIhANvks55bVYaOKPJKDJpHz%2B1cRf3E7MnOqit5KCqJg0d4KogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCBvXbT1Lr0C89vRAq3AMqwzLSmmDb10R%2FlC1M48EOEtc3E%2FzJnLh3A1CAWasTKJ4%2BkzpxclavwMC2rBQkEeiXVjqdVTcyHs8dH%2FUUVdFlwmdLuxwP1iSUSo5O2c7Z%2B4Dg%2Bfz1AlJDnxg97VGstG1zushRgdn56F3tJ3qPHibcsKfE5z%2BhK6rGXkB%2FFZXcHJ70qJjyzBQF90iBdDStcRyYxLkQrsOdnrZ3e%2BJSG6ADAMmfKoSxAngPg8HdBBhgHQDZsY9bBQtHgV2nHMJv51ErmmLyyGWU20s8D210rKi6SpfHeu0BBXX5lLzvavQV%2BZH6i5N6x75OFfZ%2FH%2Fm6trdFpcfNrjTJ5ltODsgFI3kLgO99SztgZTguD1Tvo1CUTA3ofI8S%2BnDxso6LSAObzKR1BofQJ7hWlxTO11rU%2Bv%2B7%2FrGZ0Ty8i2WPXyNM%2FEEWOQY5P9uBQ5nfzbsrrRi4gv6TWm%2FSKcz8GSnjZXCDdwyUvKEwgypKsPaJVBUKqTKq9q%2F1zTXEGHPMnLRcySG7lO2yOhKDVL9GgjzMYOVThiOXbomVhntrtcPZIGszre8YG8joziwvTlwF4SBI1AgYSiDJPVdq0OACiHcm1FORCcgKiRHxZHMBaVrnB9NNAwOui%2BE5M862%2B4z3JS%2BkfzDYqry%2BBjqkAc5jTE6MzU9l6JTNhTCCW2fXLqXmYHIZvSFLxJv9XRLTj5PfGcwrqkj9oh3WExQxmKgy03Y6vAzOVEITFNC8MxjL1pUpmWcxi1lNuY8V2794h%2F7wP33Kl1bnxiaOltK3o7covtkVPjUQzZ8r3vq3j%2Bk9YF33UnNCKDjNa7D%2BlqirlX77MEQ%2BtUl7iOY4%2FmDzOyo2Jfrjw%2BxffqrSDO8VT4SpstCb&X-Amz-Signature=fa7a8427e4b7692da7f4299819c7f3b8e0b54c4ae1a269a56970d7f53e967e2b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

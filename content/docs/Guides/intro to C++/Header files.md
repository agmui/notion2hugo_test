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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IIQMM5S%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCWE%2BAXca08CO06YRhSMyzPvieRCGpeKVkhGttvZPkzwIgcLtkP33uqkEDrtq%2BuaZogy3eAvrSdVrjpojWyA5TCPwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOPfbwnct3zDhtQsCrcA%2F%2By5qtzQfoLnYR3lW50dqlQgLrGbAEUKuqE%2FNlot0SCxFH9yrebuoqgZAA6lWH5DHRbVGaZAuFRKabMPSNbw6YaibtT56vkKRPQaiL%2BacPp53CbdF2okRG15fDvtlkYYEP5pmdCCE6yMXWT2ZFkhVNUzFedj8NAeVW7LnpYQoONouoMqCDAn%2FHOzZnvGvDQdkZROCa%2Fxlpa5NCQ8kupk4n9ATKC3CEh7Ncef9zR8dgEFYg%2BDHOFHGP%2BWKLvrjepZrhiYKhstrctJ8qxt%2FPXUMvfFPuVtct3zZjdJmlDjlIhU5Fe0VIhsC4D4auwuwd44wOY8b6tX%2BuV0JTfm3iFfw%2BMYmCmX93iLEyb5JMU33hbOIY9EC0rCmcTEhdnN7rYxts8nrv8YkKESHlAPg7MCnGgX1NHm5ePCQq9twGihQZzfnzT87MhMIiIMLoVNqTtHyRtIswAWCz7DGVxDIiid1DlhhURj%2F07P%2F33iFM1oI7kKjKe%2FNQ74p6oQ3bAi8CQ82NewiLCIrkR0XvL3SZXuJCQQbQLXiYh9JXbJgmDC%2FEX6nDN5ba2gI8C%2BEitwfVxyaNVW1mNBwf4RWRc8gJX6f6bOkbRAf2ybrpCAQdQDVDUUuCFfUVnErIKr6jBML2bscQGOqUBQPnF%2Bxec5ttFY4E4FU8R4mVLNNwvYta1k8DdHczP8YQ%2FlO0r8yM5KPMI6L7Mey%2BlflbXtK16uyGJqbHlDeCR5w6eL8zMV3LalyEAnH3MshhMS2s9%2Byg%2F3JzRkzwEm3boRtCGvBoPpY3IpD3LhO4JNyHh30gU%2Fm8OhnOOga7OFZhHinKw%2F1QBTwFiaPJeUrsOW23cADJbk9g406y9T35TqB9f9B1X&X-Amz-Signature=723eba7641ac6f084643edd6ca35d66aa1776aefdf79c1335af6b855c5e3aa7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

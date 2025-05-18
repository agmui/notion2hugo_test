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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K6POBIU%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5Nnohj4Qw3egzunqCbbEYaXw7qG%2FlEd3V9ZQqQll9zAiBfr8o%2BfCsVJg2DCJNRS771zE4R2%2Frvl8jMDe0AvqmAOCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMeIFst2H%2BTrS6kk7oKtwDM00DcoIANSQhyGzyUnZ76uQ9nBhfwF16XIbnx2xZQf%2BqU9WFuqvo6TAA7%2Bp6%2BbFe7kZDgRwj6ccIJ51GU1fGZIuaXucW%2Bit%2BsDv97TK%2FsqEIuL26l54GbZ7JgaqNbAY2uD%2Br0tnu8Dai4lb5yo0jkcPpW1CFd58FcisRWBcH7XbgBm7NktI5enlGN46iuzdq88Nb79VaTEusuhhxWEWXauh9hZ8pTSYVSOJOMvJacThZus3NILTCVbsKXeCWCc%2BwKSs%2BAh4KPGW4JJKAzPAAQ24%2FgMsmvBEtQGoXZPETbb2m%2FTF9mngAmhHAF5iFk70%2FeDS7HGgFlE5jrb4CWS%2FAiC2ulFk1wOd0IfvI2AxyFD4i%2BMneIZtkr6SkqlOXAwx9yUlvGBuOiN%2F3IJpqcfEHtfA7EgA%2FTWZ6Y7V5Jjv6bdks89nG%2Fv3WzBWNPnxFYa7B8TbnvsXSnfbRco8O2hPuEy5bAqrhtQXTcD74eljA5%2BRtGGxLBpukBk%2F8K9Jid9uq4YhOGMcvUw0t%2B%2FEWVDM11dWARqYcKkAJ%2FPz%2FQEIbsT80kfiyQYAZYTaP1cOk2Y%2BIaZssGhHWDZz2rgUOiFOht0tuas3TJ17sXZh8UYPLIQCFKeotBWPUSiXX1WAwgPelwQY6pgF734T1VIyzlejRoH6EOcmDsPzvYlumxw01Wc3SPLF9rtrmIe9aLVnrxr%2BlyM0wEcMi7TTMY0kdMcW7vaGkXlq4K9eNGcMLllcUiYn0oZZAF0q7Itz8yQa8dCWkWyqdqHwxxZudEDvRDSIi73xwodCmd8cR1MEqPNaicFA2ny%2FvB4CQ947YPOHydCW84KF357L%2FCTZYlDf2PK%2FyeEK6awIx1eUW3e%2BQ&X-Amz-Signature=2cd9c0c87c1881788de5770234c37373e757a79a9b8d7f30d0368fe1e9edeaae&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

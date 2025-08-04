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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBOCHEI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIADNqYYSUHVbbtrlmXIU0nd%2BZzrrePk9psUqw%2B1dMI2hAiEAsR3I%2FDcUtHec9SJrllzGq%2Bpl5Il9a7OU%2B5la0jHg9Ogq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHe44xJegy9gnrsliCrcA3nXwfjfXZEZ%2FTYYOnp%2BIbjeE6OiPqKp5onGN68LuYaJAX5HUoM2Al3th%2Bc2FQbXr8y5A2hpT2mOoFOgyYjhS9aFUwmkLftzhmtPSC2P%2Bq5wRugy19uVlrW3ySM%2F%2FO9edZbrq8V0OFOOfEO%2BDigzrHdGlbvw%2FUIEA4qqyfKcjfKN0mkZ1wYdmLvjjqMOwtEfcb%2F1HmVwIojCHh8uf8p1k2HwwQgWNsqnBxgbwCNt1VaIZZBRhUJb04TgveIKcfVkK37jcfaH1d7diCJebrID1Ol%2BR7EvHVGvxISGWd7JL6tW5%2FQq4lCSCDjRjN9zgGv1LGw4xRkHW3lC8M7Ye0jClinQiqJy3ZEqexq%2BHthbOeh0tIYv0IRUwC29HbV9LdghrCHZie8D5q%2BC1IZFtPoIsQNm%2FrulFo3lfwBibvYkJKiKNX%2BrDfHiDl5BLvFJVclA5FGMtLnOFex8axysFwSIDwoTaawgCk81SJa374xuf6b9H0ZXFoaWnziwfFBHUbWDsbMft2nXSNIjz3gJvSiCwhyp6BszH9X1hNUfSjsgH6nm0OVxS2VZ%2BaMD16hJNwladR%2BMi77hva%2FnyAwo3lK38umgQRcbmPUu%2BCL5C7uzttQQIg7ulgnCQ4h5lVo7MIfpwMQGOqUButnnC7yudZNJm5O3K2ip4MazN7hTDGnMsWEXyRqaqWGkpTcK5HqYg9XU4FalCMON5X7YM5Ojo%2FhYPbWQ3zpqqQqCZgGJlbWUfqYFAGRWSLuWpMkRAPeVHd96RmnWrGO0kXfy64QEWWVjxnSFkzl60Vp5ugwy7gf%2Ff0CQgINeWyVLcOOZotF7BGgu6WQwkhQEUsrcCUFXdfx1zkqz8EeRJ07zokqt&X-Amz-Signature=cf200f5d3006884d2ef3540b582311fc09de2446cbcd5f3934e900e70ab2f90d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

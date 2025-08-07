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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAQ5MITN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCVMfBVjlLPyBQYH3L4ft3laYP139gR%2FRqJQTiAMWk%2BeQIgHzL0axuYyrW4eznDO3BEcV%2Bgy0M7eYZXBPqGEJnvS00qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3HRMfcUtYuCHS2lyrcA6kjngYBwtYVKDQLZ%2FYkmTav%2BheXxUWruwXZSIKfMuGNkN8JjUr%2B3xlNSvqZS6Wua7r22jYsolEZ2QiJ8kRb8TeGWTRNwbbTFJFmru1H9Qb3GKLDgJI68KtOTQj9ia71N42fhXof5ASgpbcPC7OwcIm6butFVMxA011tD7bIYR%2BG8S3MR8SncQ07oqNtjTAGdoD%2FxyT7FJTzwapNlzhuLX8ozI3CiNaWHmzm2yqLZn4dwHo28bZ3LdpDY5p6N6i7qNjnH3V2Y2Wju7jsNObDiPJ8m62R7kLNZAW4%2FnxkQp7IshAVqEbWV80s8VtyFpcOsp04fsfEU0bep81kNEebuwdMCO2MzWwzTt1jRXMBpd6tMJxhTyEPPxRLmCYPXDkWlkmn3vKhVp6FQHVmmyGL6pVSDb1gczW3Ei99%2FpsgB7m5UeabtFg9m5hnXjLKGPShJPhUHjouW%2FrQgkPOLkcmM5caWU9xPkkXQ5MvaF9eRJAj5arJ2AByx6uu4hFTtVSOHVwtQQnIpALsCBtR7BU2yGTcQDHaVt6Af%2FGxKTxyudKCrwx4BNwocsFGO3iq0Ry1ImxnLNSPk%2FweVBzOR%2BvsHvBKZCMdM%2BKHiNG64hAOMNsFZzgJ7aJ4mYnHfwzZMJXt0MQGOqUBbhCAsoRor%2F5z0dMeZg%2Ffxzvgk70rUdrX%2Bu3Lf7OypvNQEV7hN1GQcie6m13PIvt6%2FPJyt8CygyKb5N6n9TrUOmj70bQvgfjXNTXloHBRnndWpSAhCxGUX88RcMwDeDz0owQ6lOp1Mx3n6tGBz3QaAxBFyu%2Bx54t2V65x0PKOVMmqzlNKQ52U%2BgwnTtCmCUIw2Vpa1JyDHb8YAMwwHXgy4sSVWuCt&X-Amz-Signature=ccc4e60d4e4d547eb80e62fd4a91c4511516cf32edc7225d281aada47cad1c02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

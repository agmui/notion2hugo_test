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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YBMZXIR%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDBL656uZcD604OeYQjVfzio04Vt5%2F5c7Ibdnm5cWALEQIgC2CGqYLe4RmcCoBOPJEqb2767aP75E0oANTASmA7WL8qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKIMkkDysynKQVVDSrcA1tSLtOUu5Wll2AqObIwZc3DWYGaiGRGiJf3gXGey0Qno1mwh8g%2Fm2aYxQmkliMaxACLeytIDZ1HlTWM1SPNsrc%2BpCJ5a%2FcWNjd3cDeAIgP7h%2F7Eb8BHmwdIRXwPs8vsIdfMN2kmtrBVwG5%2BXF3BSxqSgehxAVSfA5zhOHBWXRVdgFHUTrsH%2BZzcdvLEhPlOxPPwvgx8KchDvJdwu8NV0cGQBYHoUjpHAr3oa2CvTElPB8vfw1AekNWAb2ngV2ZhR7fFs56GBcTpIENTQcu0rP%2BjNfAp7y0iepfvEDfZINzOWi9UAI%2FRmAgZMgEBMLoX%2Bq4%2BsIZNVgGBfJdw3JiIX24ij3T329XtHOZkYGbCVh1u6c3ELxJ5UStQAnOW7WddzelwCmzmD%2B8ePIjxB0pTS4%2F0U9FCvlF6KR8jsHfxvm6MRzQjK%2BlJQM5zCrzzFS%2Fz6vlRlfX4NX2Fc3o8Ef2ZHvkRHJX665DcVHkSmNEMGq3d4AxutjF4RP%2BJ3iow3bPkPIWLeap7g2PLUullpDozn3GgF8cTIXN4VZE0pTQ0Pu7BqE6CwOPt9y6TEdqsr39y8dYYvb7czXfqKu%2FSpGW736GKWFEaWP7gDFBtxJ7Rpg16A0CSGODDsEzw7daoMIvolMAGOqUBLPmKCYyBuk%2B8IQam103gGtIsst%2FAuvwj8fMnhV0KwKHb4pgbEcvBByC1lr9msfiagfT7%2BL8BOBIDHBsK0floMBkupumCGBZZP1%2BFGQlo6ZNnRAiz%2BMCM9WuGc17ShPrabpBTKK%2B2BePbD%2Fp2yFSQtk%2F0MjQEDkLAv%2FTEjS%2Brp7j4JHLeIWUqLQ09HNJegpQPAMcm%2F%2FJh8O1UgQjHCkmcL6GaK0%2BI&X-Amz-Signature=71a5b7f0b279f8d56f703df12835fde1b9218d6cf20bfb2a8ef95f85c762dcca&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

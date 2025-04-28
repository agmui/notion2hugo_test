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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJVGS5ZB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqNB%2BdaVRZ09Kdi%2BnE0UwKy9wMjEyH5447qNKwxUx7wQIgf6T%2ByhbwnWC14AzYi68vUIW3Vb6%2BLne%2Ff2JiERUT%2Fj0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDLaSfC6tCEzBIPYcqircA26zyDc14ywktTJ9wxq032fThrAe2XldVbZfL72wc%2Bw0gfKXRdsV1%2FCAEj54bJWf%2FC5486x4uwI53XTSdBn8lGtfKdQQIVPvyaUiDY%2FvYvL1aXYMkP0N%2FjSq8vmtDkEEi6INnt6qRIoMJLQsQdm6KCWJz0571zRCfnZYM%2FAwPdTzECxkBaxuPa1ZZYQwglNtPjZ3AQdjeMzoz8TD0%2FJL8YmRfQqtQHrpeSRsUgd%2F3Brtw0LY9F1oyQCoNsUFQxBJK%2BiHnv8d1L7MPqqXRxCj3pRv6f1Gro6227yiLoQb%2F8GU4AzMOTxkyu1CDxRtu2k6hoYBYI7J4FTAQygkydp7R7f3VF7Lvc3Pnhdz5mZCWtsfbnG%2Fh1aQoGrYpInKP28w3w2b6TURpMkWlvGhSWmoI8xDabH06XemRPnDKI4ICKVDlZJ63cXeYRLZrrFSC36fMaf%2Bz8b5GabuwZjcVrVfr45VQzUS%2FWCvuNBnu0Lzq3o8R8DaoMxUHUMq8d78GgvD%2BJ2lKY3rNUKYZ0v6LoSGUsCjRn8I5nXDoAbUmEstMKm26losMJFqoL5eFuSbCfNIxDW7ZHLFyDv6a5pEk6lAVvv52jc7tQYlCxWcjYtpmXOAFpP7HEDf4zTh3cPlMOuKusAGOqUBTrOGE80pAr5XeyHuqHc28TQQEt3CTQaabchdOFbMdUYUmhU7HygW9BbV1FSJLW%2BVrN%2BhHlKHAG9AN3NMivbQ1g3aiHsU1xx%2BxewvyQ6d3z9Vq0DU6PJOqVn2ocw6eYHa7Ofxzbox5aitVr3if1XEOO%2B0%2Fqr7woGQHJL7%2F2NUmmIdQaPZ9IQaLMGo5o9PDycwELt1IwPq7QBF91tGkl8R4hNfO99M&X-Amz-Signature=40c285049178a371a1a8cef71fd4745162ef805bf99aaf00b1fb87556e0c0e70&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GBFFDZ5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIA81voN8i2Wj1DvFgxmVTLSr1LzsJWzm9y3mLqP4qgxWAiEA1enAuA51MxZYPlnEQdjGo6FnqR8V51pSSlA3wwtJyX8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDKjdUWM35Gw7Mv1ViyrcA5vCeela%2FPrbXq6IXdUzeOBFN3t0f8UWEh6xTFV%2BBKL49wHgSteKCLnQBk%2BDujpDgq1iRKKH3GJq4OngJ1ggD1gTUHr6P3Vn7tf0z88yLYtpqOKn0RI2IEZ4t7dnyR6poddY3uQeWZzaCdQxassOxa80QvjjPEKyc021ZlRpNzZL5TfGdtaeHIBwWxuA6m0AQOmyBtXLm2rQDkSQVxCffPUSeqb5Bc%2BB9xepHSEbGbxOiY%2FxvggENJ%2FruruXyXZjUr2v9rrjuWBRwjYiu812jdF4Jsbd0k4Q0YQGWL%2FAtr372VzjwB3m76pEMvDjt%2FNvtcQ9NWYnD7V7yYkpcIgrCTppyMVzkRjr5CDbPmNJvOfZJm5HD5vO3b9nl1XDz1nWuQNfJhF7Nr7j3hmZOf3kUhTcdyQe9ZTPdngSgPHBOYaeuwI4L%2F%2FDqb0dRSkZlgAQ8mMhdhm0O3SF%2FVZRcGyhqEI5eHCuQqHQWFc6vYSbvLVKl9yL03XayYrTx%2FbhczI1vR32%2B6NSc7ySMMbu%2BoCGrRYmY6TL7rFWLmRNt%2FzKdo0qb9m4tlDXaObTgNd4%2BIx18eEZ92EGI09%2FjkwHQvS%2BRuqJptgIj2KB48W7LSR7FpsFvuBxr7tZPa9dB1piMLup8sIGOqUBolc456HEZQ4V2IO%2FAVXi6pGXoQg51TSNFN5rA0aUqD9CV4GGsYp2H0Kr4lwPrscZOfXj6I4Qq8IBo3YjRsvixLiZYNw5rUnRYT%2BnMNwGhQDEkWIuYGqxe9fmGnBOcbBBtMIU16mxsVe%2FNZRBk1vSuY%2FHb97IfVFMDzvHbyBxhlOyB9f1Pk3ZggLeMne%2BqupJ7t%2B5gt5Yc%2Fno%2BkXkL%2B8gLmKBaSEV&X-Amz-Signature=86fd35e79a0cde8fba5029a93f4c0cf3a681c1f2643300bed67d72cf810249fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

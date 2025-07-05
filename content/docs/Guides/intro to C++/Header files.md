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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMZ77IR4%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDvIXZnCZ2prMbYJyoq2e%2BAdOSBC4LUtef4lQVvWRJJ%2FwIhAN2eC3ENl3g2Tl1N2Q8x6dRvMBsJNJlLk0W7dfFxSqADKv8DCEwQABoMNjM3NDIzMTgzODA1IgxzhYpeypMIDNdRdyQq3AOtLZU5%2FpRN3NBK1h48%2FI9BHrCDH%2FdTDwEJTalBzSTpFm54wVK5bi%2BJeRtQw9UUn5E4iXaT%2BSnEO0eBNzjzTCxfDDcXhSbPOaNKWvliKRam%2BxSP7wV8UW0tdI%2FvN51OzgxidU%2Bi6TUMWYX8k7cfsNabuBvZjz8Pu7FSCn8Z6A2vqPDWUeqidaAi%2F93WcodqnEjFY7fDNHI6DmfBjvuA2n2p0dEOkdzaFtjzQ%2B%2B0gDsZ%2FPnhoMW6g32wjMogBZOarLrL0Rs2Y8oBBNWpgBDKHwbcebHId%2FOTgzXn7jcjAFZgQW2c%2BF1ws%2B%2F5CqfPsWno82rvTfZXb%2BtLCTpUfPcOwzGf5oG5SDk4wX1Dze0uTFlB266VGgkl%2BmB2ESlkylP%2FNRYcimWFgEf2izU7qKqsdJu4L4T1X2V%2FjwKmnqgALz6MI9sSZKEWea8Rzn39FyOwP6KYW75c9IOS1eZak92LUwwdC4bX3douQEVgTnTJ97pf2RWnve4t1Rmw%2BY9K4D%2FcnWGeR1Nf1IYrhr1VMQ2AQ8XlxtsVYniqhfnhxWE9m6NKZUzuwtTbw0uU61dY1pGzeH6cGIWNZ%2FAZpxTG%2BIChrIVhuYGuUyrt94LPrvudQ3I7B7MYv2nvP3zoEM9zbjCB8aXDBjqkAa4DlXB2CPDHzj9VYW%2BGZ%2BOLEeYRyOgzoLZMK7YeqT7YHMx9qSqzzvhOC%2BOmljSI5biHqejqftbZTiZIA4PI%2F4MZiY%2Fef2KZ7irafA5Bhc4NpVTVU87ntO8rfXfy6G4NKWHO8bzZ6krfiENldJyd5Jm8x1cF2N18zQlp5yPzojOvVqCnjRMhtUivQsKxPntGbFoKHxTqTxRfD6vAyxM7iPv%2BAgu5&X-Amz-Signature=47a5988c913e13739ee44a487164de7b29d06e5098037c0e8474f90036898cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

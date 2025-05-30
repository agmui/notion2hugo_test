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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BE5JE5T%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGzGwRc6N3mrbSJlpbZLidjSN5l2nINHKFw130hdJQSwIgVJIPaHkt5a9dEvrhzCv%2BjwIjdT2XE5PD%2FBrGT6VkM%2BoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzqgnVsfFl8xfuamircAwEamUeR9YO3%2F6Cmp%2Bah3YMPhmT5KiG%2Bt%2FLQyJbtLHHu%2FrIWWrDE6%2BpO8wIBN%2Fg4SBo939Frbq1pLKBmra12415nPY8us0t07MeoM32E2wIFaOG1Ia6S1wrIV96CfcoJEOGa0I5aqWq%2FDRmmpDTfdfW1S%2FC0dhthJVumnaneWp%2FHb%2B%2BieFR3o1dpmeUBybnn7tQ0TIrntKXUs91FTRR7bkD6sOygxdolroI3Zhn8xCclZqunkGPP9kdAQDCtDRDr2%2F9JqAxcJeLNvewUf%2BH%2F5yubKHUSYUp7olGYDCuW3YkEkp%2BqC%2FtOOPXEPE8qzGBDAUO%2BXia0g4Fvk3j2Uqp2Ym0Yo%2BMbD4vXSQh1pWYy9Cnv6rc4YiM%2BNakHdLlNKSlqc4JMOEQe4XbZItUW9z6ZgGgswKItuAYBGHf8aVI7nCLMdXHq2CKtucTjVNSM%2BtjWStKZBi59%2FCWcNRWv%2BfQffpKCaAqjFhFyJjfsQEbzcryrw%2FG5zKus6BmTSWgshkwx%2FiOhe2y3isGeZNvgPBb1X%2FTjQoU3bMLfOiOSncHs4xd%2FoU6ezraA91LpLgsQVfz3m82UCXfCZ4XgDf3y425iQLcuqdE4EJ0QkcuG0%2Brr7KAbi8GO4ifTB%2Ff0Ja6gMPf%2B5MEGOqUBN2Z5tcbk4divh%2B6A4UspXjpG8T1MF5NnBAOZWV0DNuzYdB0L5OKX8QuWBwUlhYLzRWNztDjsf8gA1amxr%2BjCQORC2L2yZ4UH3k6e4x2N8svQzGu1lWirSwj3Jy3hbmx1CVUtu2D9fS3cWQmE%2FRHT1FO0F%2B8gRcYP%2BBRYQDXwm9ZpkqGpVQvCBNQlRPBCeidOQOYtKvDGwxffwee3C4ycQ6nmxUzv&X-Amz-Signature=189ad7d7d5aa27bf98606c09b2f3e5a4aead8dcbe44f07d5b59576d9f6c60a2f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

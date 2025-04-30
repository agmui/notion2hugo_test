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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642XS7YMA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIDJeDBrIwvAu8RFJXaMe6zOTSW2rPQBO7FUT7%2Fvow5BKAiEAixCbmJgLnS2%2Bc5D6slElrwR7C1oeGLeEoB2hsyQwpp8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObtYf3klVcb84nElCrcA7zAt%2F84r7ADxWG9AE3PBU20F6Ig2q9NQno%2B6oddvoMLpMQ0zL0xjWOZLlk17k6M3IdgYCUzI72wogC0KwvG3tvwi5Go1ukITeIb75h1ZlWVbWgQUXUxshf%2BW2kJENjpl3SA%2BzkR%2FCUzLSV37QSlc5zIVONGZ4o4I4nfeKM0Dvlj%2Fvis3f2XmFuUUzSCw2xpzPRNjHGVqcvMTl5FT2Cf%2FBetv%2FQqKxCJYRnQWt5YOgB26h77us%2BAPolkHFRfuHhDJT17KLOt3Td6E8rLQyyg1tkwr1g3Q0x1VdI5cFOBKdQjVbi77TbF%2BfjDVrXOeWgRWzl14BErrTCyQJvKUcXmKLp2L5t8GkkZzsr6LdsZMlIDUaqKypR7QHpTUdDfLcu%2BljnIeMBZgSAdtOTTkZbq%2FYnjs8uQ%2FIMQdF4dvRlD2sQP%2BDZki9Mqm1GrkuLBUafQy3aCQAjM3hzXWHQR7qelaX9recgYti5V7zYDX0OosQNEFBnyWiZYsL5KyLeCO6kPaTYOmRYYLBPuVQ0OhePH6jij4LaXdSh50juoyPdNb7PX0ML77pI9Mfbzjj%2FtCeiVbA51dzhbPE0EPequsu7%2BUDGMiamoENPzJztwWX7CCg2Mf%2FhRfxo53fDXN6hSMPyjxsAGOqUBAwp8r%2F0Z%2B33XZowG3u%2BhTQqd5X4FAqdWdpaAVRCIw87QSQaKTM%2F3vgYPBCm1yi6yN1e0WLsn31%2FvK349pbK96irxR5PyfHlDA9Gncuro2rSWou8DObs8m9xbrqOaCAt0QO9BG00fVf5AJI8O8uu6DeDzpwQRtwpuPFNWrXw7sxLIVCvsDOw8mJR4aRJaEbvGsFa76sBDm2rHmGP%2BRVjrR5810ZEc&X-Amz-Signature=dd3bcdc5dae0c7d6419a50f541adc5dd2aab1b972cfc22c615e2dc763ed2792d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

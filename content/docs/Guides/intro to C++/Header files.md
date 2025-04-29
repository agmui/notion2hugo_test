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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQIXFTQD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd1YI9j5pFDdsHOPovlffjQxI6xb1V8x9vYR%2BRP5lrJQIgZnUqcl1KK0YKXOC69G5DQ6g1MfIuJ3DgLAKSDN4b5wwqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfpAHhSL7zrG7rl9SrcA%2FO5zfuJRPu%2B5igRWnImOgOZsyuCmNvYJdaYo1LSLBdK77hWN7W5JKDJCNV05DqVyobANyXZmwTKp61gLWu5OftAOVEmeLEy99MoGFYNxcr9eyBhWfEEM6L0JbPqk2WmqESat0fHhH4AdLLPZut4C8wuWuhFonmv3Bn6nxcBYHODvhwQ6oBLovoC2qAw26k0GsZ3bHC1XLNC2%2BKC0cdX%2F4MxGUNQWa8jKUKKpe9qyVtOBw2169N4Zs2ssCru0L7QeTdWTFJvKEmVrmDpNZUzKdaRsocE7sVz2Zysbtc00CvOOYlyNLxwm6HFdiA9rHkcfo3lUNaFveu1CvYg81lOKLW17RGRm9r6saS3nR0LWSEGRNMfNWbzs%2BbUsZlft7YUnFpnSxtQ7hu1WM7x03Icw5O47MTlHdrbhRmhigQvIAm7Mq4TDxK5oWVemb1cv2rBY%2FrTaKUGlppasUVPlaZqug%2BQR%2F7qsIOF0gtMcPLU%2F979GBQd9EjR63QLDa5L85YRsVXfYi8rbQE3C0fD9MTqladWEcgXedkWeM7U436vSQwemBXqeRAcFjyhh1yhdVYjYwbzs2lPN%2FWs4T0ul1rrHPRNscPnG4sOTkrdMJFrId%2FEzhwb%2FnozpiahsYE0MICkw8AGOqUBq7%2Bxh3tkoqXMBs2kjpr61VjdGaCuA50TdOFgfkbRiZnVr3fg7AC0SAi2i5EVFVJT2i1Ki9vlLNMeyizoMi9UO1h9tbSSaEAoWs8fgHomqdBJ6ExO%2BOozLI5igLkJBb1IDTbKOjpaBVz%2BWSL46fgaRHXDE7HjazLk8j2gkv6%2BAqgODukdTMfKmMSvaWtrM3DaZ3YnJpZQ5ErbowE1BVBCIzLplFV9&X-Amz-Signature=f220f35e3cddd30e285a3cae4753408ce2a4c80e4c6c11c586f8f26a0c3adcb4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

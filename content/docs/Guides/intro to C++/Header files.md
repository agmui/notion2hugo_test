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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VG4RGCS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvxV7yA7fSV3gZkSheJhcvHMqiO35syixXeFkzp498vAiEA8jJ4AU%2FlddWn6SL0nYe4FDRVDi%2BYLVHHqUY1HrZzjXwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDFKmqFsHv2alCZ8HKCrcAyPzjBjnUTi8zJpkkLMpgri4STxt9wvL87C5Hm%2Br%2FCYBFnKL5CkTk%2F2lPgt%2Bplm5%2FIZm%2FZYO8SN4baw4ZEK14PcxhIdxH7rTLPCKf3WcIPBUQNJ1SUAmf12ClQ6E7vY4I04ePXXoY%2FfozI3W18fQTncHJf4dhjZux1tsLt%2BYsDjW9N%2F4Zz%2B621FWKhK2XEAFbM97lnnRtcEp%2FsBCYLvdmQQyAxerr5z5fq04xCyzG9TIlqjLb%2BEP4PkgdLStBwGr9REDuNYyctxytBHGKrBArYNw5z2d5TGLLQcQy71Y9uGdIV46%2Fn5h9iFpZv105dCQPSoOymEwYWjyjZZhsvgWWSPtwRMO9rlsjyDrw03CpfzOyW3LMPhOxNUZzg2%2Be0lPv7tbzSn4SDmydgA8opu%2FRdemmxZLaYqXYy75QAsPXZy%2B25dKkX4cfOxEKluWm5bUhBrQ7uk65FiJwmgVJRFUFERTVNamEBGR%2FKmTgUGNt8eJ5s9dSzuXK9fzbuIeDgfoyNMVpCn0WPsc4vP1eLg%2FSCU4W%2B92uWSOEgdwp%2Bi3XAoLeTBIEU4GhVK0r%2FMtrxKN4inLJAuYSwzDTqL0QnS28QRYbCz98GJdEZfZOF3%2FrAjtCIaFkH95DQ%2FqZZZ1MOT4nsEGOqUB4IJ8t3d53LMPla2KFCHjzwa91o130YgL4QUMcfeDnwuAMDgoytkDCOhdgZkpwvHPt%2FcIMnlxCwG7QyNlL2wCxskwocdRpRFhtc5FpYCKOvBFWKu7yJ0Wb0ajZTHyEx9v5M386nEivqHlUtMjfTYn4avuAdS3Y51dzmk88lUPfuPE8RKO3Gxt4oPvWkh%2BuE07d863T22vTqOFp%2FKjkmE9WHo%2BBOOv&X-Amz-Signature=0b3afc7094d19e2ed2d7d401d1e193dee01fdf2c92cb28190c499be8d682ed03&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

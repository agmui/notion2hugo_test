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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2KV33VR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDzcIlcCNDUy9lQia1OtAU%2B1%2BLgTj79wkujc2CtNY8pQAIgYvRXU%2Fg6lSnYdX8yb1DgNxzrO%2F6EVPCijlTwNCN%2BqPwq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLano2WGh0N5NyVAySrcA9bLVH%2BuE%2FB8OW3luOMgJv02OJUgIWhxyTtkzixMk5sdxjs3CAdY1BjUwfyuHqlaJtHzSrUuooNvdf9wnIwgAlBzBL%2Fg2lEPSMsq5J95rg1bIeeGwB0yA2ZkA6NOMJKQjbCpaUGQA%2Bq3RRTntBCb9wPm5sU3GTaZPWhhz7iTaML3UP8UN0DTaVeK%2BNjQBOk02UBnidLLNb%2FSzc47SAVd7RcNjcHX%2FKjHxdbY9njJYxOH1JkbnGg%2B794wAaaLY%2F0QxPgeTEpf%2FNUaJlghsSK5E1SiN9YD5z%2BYxTz5urHv%2FUKz8Cg79qA5RfJvVO0cserL21Zg54%2F6LcfyMxDLW2G%2BEy8jpcTvlMjKdIkpoUbX9Dr894QwRU1GLTkp%2FRmMqE7rSHg93RqTdGGlUPa4lWPsH%2B9j2uOARNLZwWE%2FA3dEXPIc8j4bhtMGS16Q9kgvB3akDZwmLnMFHS%2B9ZZhsli1THG5DmV3S9Wvm7NkW7yYBJSFOnb3ZamovlzhH%2FCNNkGrvpQhmcE59Vj8yWFE4IpG1LF4yxVSqxZNpvTs0%2FmJl83TbQj%2BOBRybgWmbYZhmhpUGYOH0iPRzCkgDmOejDGHOD33kuddsrbcyagFnlWUVoFydD1sLjEsAYWrgY2QLMPi0isQGOqUB56QKa%2F4IjSJAL4glCc1pFONUTYQ7qQgKZ%2BsV2U8gRZaMdHj551G6QTKYuoBxePajHR%2FBs4ygtKDEPBbwIADFNtFfxUTkfLRHdi9TfVzxiqCt10hw9j27UwhCTBehbx4ivL7djfwHE4bF1wMusvIPHa4Qoh0x3Hgq9XYYw4qK00OWv82lpTYS%2Bt%2B4AVgvPZ1zuL8xPi07HlMTwZlLKl0YmdF59SLA&X-Amz-Signature=fb321399f6cf3eaf76bdad5cd170c572a20dd61247de67dab8b8e9a3c67c166f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

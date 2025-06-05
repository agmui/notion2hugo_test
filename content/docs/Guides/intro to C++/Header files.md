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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VECQGSY4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAv2AddbvGEBE9wSZkT0YuHlqsyDgMDl19d6rg%2BJBQG4AiAFXNyoorL1J4Pxg%2Bp3r9OfT%2ByzaP4uFSx5g%2F4kYNJSwCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM7P9xbP2k0BpxIn57KtwDQGfBK%2BcMS6Wjf6xyGmU08oAVGUbjhxVnA5C%2FDvSrJBKpg%2FXtpBAK%2BPlIIhsUoAzy15pV%2FpQITcGvYo5mjAXTu0pPkOVjQDGqKD7l0FQ2hpu%2B3UstUjqDZmzPwPwYf8DhPYWbSG87zErShSzSU98%2BcpF0ii0M5bVTL4nYEwC15vwB%2FT1udR3ca5Ibi1YXJNW6ihfmHUaFfx7%2Bkg5BrYTMERVD7LF382%2FGxnbohNXww%2F5kA9q2aiMLM3MuVJwmbBCjZcsuXDBcFdPIU%2FrNd1K2B1f9Kf4G3e9Q%2B5h3frtwU3BDqnVmRvozruV8oAdes3%2FwcNw0yU0G4hUambwJuEXD2Vp8MlnFJ2PCJRT17c%2Ft2Ja3zexm4JvFwCwoT2QmBzzX3M7Un7C7QXznJAuDqQ7m3b%2FlzJch7joGyCGFp7NEeCyU6vWXfn5puYmxB5EiGnqwOdJPY4YGh%2FW%2BcblTa9s4jRWMNYs1t%2FFLTL%2FOyQsw%2F6e3AiZpeR35ikHo1bCgEMbh7yvsODaTaDx%2BR9U3QFUY4VS7N4HHz27ge%2BGuHd1baMEo8AmPHj4%2B084d2tQ1X718bcSS8MWbioLLJU2ozhQ1bJ2KnZ4Ook4nmDSegg5MUQbCS%2BR%2F%2BNtdfdbC0bww5qiHwgY6pgH3%2FCiJSQb4EUiBDBMNWvzNzYCXPl2ykS9u1rdKnUKPWXLdQqy%2B6fnlAMMH0K7XJj%2BRcJn852gzfKR3p7Vv6hloQHTSeRVSMjYOWRsSRuyWleapd0oxvzRI%2BLkb4ckW%2BjbCepa%2FXO95eti%2BtdWZLW4317fcJ%2F0%2F1r1VToROCnpdaK8%2FO%2BXB55zgSz1CgJSW5pVoSB6Z%2BSUlu6hTBMQ%2Fcx%2Fjzu2wCwek&X-Amz-Signature=2509568af645a7e1ad65ab48ff75c9fa99692fb32c0515c93367f37c8d201704&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

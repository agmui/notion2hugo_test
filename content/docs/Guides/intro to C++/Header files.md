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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7NMNZL%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIH3zYC457Hbj9%2BU0Q%2FkiDCp1Nnr6%2F35EMQ6Et%2FPQPr2ZAiEAoOgda2MHzkcdy%2FSdlbr76VnYqLQwQlna%2FNrLLDh7NxEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLmrMQ5DK2blCV8FlircA%2BJ3e%2BI9SZTAYGdm15NaC6ij%2FjzLwpvfMzKUPjmsq7E%2Fp763IGD9alorgYoijyydsyGKIFyyCi3ksmj%2F15HTxnZX7Z1%2BCYrLbKJH3zoMPqlTWjw2xo73r5y7NIIAQIACYIQhPtv423kV9ZdF2nAnbRFQshvs2ayEBKX4W5zbjDsdyUziPJ98bjuiLhXGn2OU4YZ5Va4lzzX2CAnBlWmXns%2BNwy7c8rLkpVzI1zIOBigdPUAQE8LoJzFxBOPJ%2FMdcFbhmAogKIDTfDLRdaJ8VrOLjX498qGcfatkBM7MSDc6CGB6PZ6nuUTiT6hiSd8KtnZDj07L1FZxn3nZiKxTa0AzvEbuzVmSqpCAyY4HQHI4ZnwfiR3Bg4suKeVMI7n9GDzDu9FBeD1ZwN3hP3m1J%2FCjI7xPD9aKb164n19kDbeOItkAAuPgsgGKT%2BJV5kSthxpTXgn%2F23vq5da%2Bfrkh%2BGtfst2YVdpIYcNIAz1r%2B2pxJoPmchRXQeH%2B5v2yWGI5WbHsHPmmzQLPtBUNySmDHoSBk0luETL%2FjZLdeiLeG%2BU%2FtO0CVqY2IyOgDpuf8M4RTgL9w5KzKE84pcTJ94Qf1%2Bynbc3rE0fM902U0OiMae6NaM702aXtk81x6vTNyMJWNs8IGOqUBnZrC1XLMdiQ51%2FRzACcggENw76X755hfTbFPqOfuyeBMVr3tOPQfkj1Y8awN9YXtZMGgSgkxuquhcSzbWhJTfE972PBici4lGqauSX8VIuiXGHDZd5QJKL38qRlcqqW93bUTkygZV%2F4FQJrmmEpwmLggyv7btsHhwZc7jyaibE%2BFOXuU5FeF%2F7a3ab343fzXMRovG5uuSFpAm4aS8u20scPWd6y5&X-Amz-Signature=f61d60697d7d7b19b7221bd9fcb34e7ff18a6d0c4df58fdf99b2bb17121b82dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

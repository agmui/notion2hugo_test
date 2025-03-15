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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOTYVZ5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPwmnW5b590czb4C1iRxea70td%2FSLTWLBCyga4fxvZlAiEAg7H23h5rWa2mplrPpBVcAiz3D3jOc4E3zzWnNRWVzkwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbvPXuLbmLJRt%2Bc8ircAwQ39ctPs%2FztD51S8s%2F%2BDv8bxrLdOlAmR5XLLfaaFOgzhBjteuSVD72pNCvoZpZsKmAJqVv4EC6sp4atT8YwcRn1eFQfTtl1ji2iLwGStXUaDQkNwe81i%2BrDek%2F23vvClvTJnAJdgh2X2FjSayeErhPa1jeUl9jPhJbN68kBzB3cKrn0ZM5Ei4FcfBT3nY0o4mJU6U1bVLOTX88H5VQ2%2BcBfJMO7qIjU2attawM0YImhQr3W8TIU3Uj9jVk4ItWJ7zKHfqr4dXggh%2BeuoDDEa6OieAkmxWaQUQBi17zbO6qIWAvS2h3oaA5jCKy1r2ZhCm1ZnWKdHc3yn07EztcyGHOdE%2BflO%2Fd0kYH493dXgl2iATDSd%2BZq58WK5814wsg%2Fd1C7l0lqsQ2%2B6PUpWlPFXVakZ1%2F6U0kyBdZy6x8TbrlTkVkUYaxL6akUgd41olnlkycWNZewUabdyuUqHHxyLu0w508ZnAXhXjX8%2Bfr9TQESS2QOf5Or57RYQSeB7Od4m4BsOB6%2FG3fc7tKTOXhvDBIyAELTWg%2BTxNPFoSCR4bYCMfm95%2FXHdSzRd7mSY1Icl3v8QJGtf8hEuoSGh7WgDZM%2FTGHT%2BRCWUVC9GfgFaxjjylc7ybqlgaJJgq%2F5MMKH1L4GOqUB64QrK1EJK7dB%2B4e6%2BVafGhAzKDhm56%2FU7XL04d0haGPk%2BckiCkwNno0Dt4nhSdNjcPl9gPH9dZUVdcQcwdbebTKmOPFm490a6mZFFJrHB8uKGrdlMlS%2BPnFfY36UVUKzSTuHiX8Xt77G%2Bz9%2Fqf%2BJf%2FjBvKGMNO1OwO%2BflQgwLDOR1xSe26MZOBAmBPYl2sXqwJ1IjUKn8dPnEVv%2BxvprcpdY%2BYVL&X-Amz-Signature=b4ddb1a38c371eaaaf2bde369c6e531cbcb9001d7c9fa098b0c963976c92dbb2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

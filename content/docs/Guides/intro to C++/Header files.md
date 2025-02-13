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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVOPSOF6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiTUUraHhzqQu0m0J74Unwm1SJBc%2FZVv9P8PMLNb5L%2FAiBA9U4sQKQFn2KIPw4GMd7yT76lmO0SIwqMMpWD6Kr0ECr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMJduHOyTC6J1nfaiMKtwDz1MCoCu059VrP%2FjYEj226NEqg8LOPNADLJoJYCuz%2FoGrjL5nNtgS9lEdLIUsztSheumGQVkoFjNHFaOrF7pyi2wuIdAoVLElFAOaB8ABLM2zPsGIVR%2Fr3FzXuxJFkD90s%2B7sOwMUAyThxnszTJnk4T1bODBGjNaDxqasBRy4G5oDB8yg%2BRgWhaYC0lcqCA9dNrN7ZDgxSqMvxlHuze2aiEefKiv7TXYxuEnJUyym1iHPya2mKjuW5S66V%2B7ccF9QjJ%2Fy1BbUEKL3vsHpKCGKClWGw6e5ko9hMtFyyHD2hsiiSdHAVYnMgqJEZ0rics4khUocKqsC8ABFLGadSa%2B20eHgwrPZnyRTR66VmmqZOaw81%2FyoONiRCYsnTccxyOSQ5cshPsa93ahYTDoKWjv8kQj8EDIW8aDKUhr2%2FKZPU1cU%2FPiVRjzkD2a2iJZNiepUIIwSkNJc2zfDx2joshcD4U7Ro4HPge7RCwvSKjoNAo6cNXu8SokYLJyDLH%2Fta2Qi8u7zIiLHifmM63HY8OkiJZpGo%2B9a8vZzFIAtedt%2BXvayR4ADO5UN7bFIpPV%2FRcPeY6%2BgrJe9MIHBeJDp7fypTehAM53jn0lPn7OKtPwfZQilXKUGsXBK3nBQuG8wxd%2B4vQY6pgE2ueBK7BhUvG21N768rSmIzhP0gJG%2BPM6v62jAZpVIdEFAh0moqHLN8%2FSiIv0deAKcWjPwOYZjI0Dx3d8ugjzLb8BzHWqGrj7S29gvcXgkvnx4zTXLcLchuOteaPEKMxUS%2BEmzYZO2mKtotE5iOhOtYiQMoLqk2dL98C%2BLPvhHTT6zUKi1rl2oi822jl1ECKN22hTxfGDR6dRGLAxcscAgdwfCwoik&X-Amz-Signature=b618f8454e61fc00991aee1302f0d61928b7eacf9310306db6ef1bb55c76aa7c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

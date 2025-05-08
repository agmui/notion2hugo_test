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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C5DFV7M%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjEeTEXY5UDkXUM0gNCNtLnvLrBXWiUALsbTe7fpqfbwIgICOuKWBce6h%2ByhHyOM6ZCFmBLC94MY93n78RhSllfaIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBFtBgASz8luUjDu%2BCrcAyYRODpjRHkRAgd%2BWkqPmYRj3UWcYgKj1zodEwr%2Fk6Qs9Hp4mniGFvCQ%2FJE8%2Bw83Eb4ArROA5akjRsfLvDXYxeck%2BTsVnUaXvw2lJfHgwP63T4ewl3PdRs5emrIUfwuG3jIY7NOahY5JsxzsnI7CVEQ58Tu8sp0ERmFxFfQATPKN0a0%2FQwSUEv%2BsrWSOaKmOK0QxpM5zkyk1W1a5P9tRTqUlV2YRkL2c5WS%2FFD%2Brx9bEqZT8xBnX2SeH6TbsyXRa%2FOV8DrSU9ZkdKsCd5H15zdurKOCkjJPDsTOGOOHwWVipiDfotdwkbiimW6PrWQT0KKNA79qXFgCxcjLo1r%2BMdoek%2FH7wV6tBbxGFu4MPaU4w9lznZoNrm7ANCBcaqjynSq6SnLifo06izYRUudeBhe2ugBOLyK9f62Cqk5UfEeoew8HnRtdfokN7CeWalNadVuNIo2m8pPMgCP%2BnMmXKnLwIYzHy4uCZ%2BLUY9IdTnOLvQBQEiGqI7Hr1uWTF0Ilqow4jXmZAwYB6%2BAlbDcFqynNBl%2FjJ801B%2BAP5HGtCsuekllYO7NX%2Fpwuxingp2g%2BRW8RxBz6UPM5cKqFXEPUGG5yaI4OmB4h%2FCxf1PvgBkPX%2BJ2eyTerN5g9SGX%2B5MLrE8cAGOqUB%2FxpcgOmCieVrks650xawplD98kniA1VhDPaL1bsbJhq4MEpOaAdxWSCFH4hqmZJEoBin3%2FG6W%2B2hsr9iICUHeRQ0iHHD%2Fdp%2Fo3XVURwSHzq96LiyDmCvWR9QVOl1CHyNgGD3ppGsazKjqX8qh08ihuW6tkH05zeU4ZACCLJJfrubocdwfrwXi6liSjX%2FNgJXmb02ZfNc29877MZaO5KNI2e%2BwRex&X-Amz-Signature=66f59bb52f9e833fb75b798b1c3711b78a16c5ee5637036aeb6af26cdb314f78&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

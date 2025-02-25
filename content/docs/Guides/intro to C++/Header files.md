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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI52J4QU%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDZF3EjWvouISArudG1%2FxWwTuGaFnJbGEh%2FzYYE5OxZGwIgLhvM%2BIUJVWrJ19xfbQvwNEfKdYE8tNQUqXyd2Ui2%2Fuoq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDC9vljpklgc5ZQ0b5CrcA9egGYoKB07jKkTM5HyKY%2BMM9ClDRC31pPY2zzST%2FEjHfLRsWkCobxY0ohmh8LyI%2FtgaiEdZB5ud%2FJ28rmTrS0G2Cqa81IbnFVcQTmVyybFuqlZNHlECCOvYvuXz%2Bm1tzdu6gQCsid8Li3m0Nd38slf%2BJTEP3HaNC1XP7M1zgXwv6Xw8xq%2Bc1KjosyheGcAbCafqNXkYCfsWvpQjmw6ut996GWjeFwnwY8ywJ%2BpvcLdexDrUEcs1iH5ovIxna%2BtNlrWKf9TXg9IQc0hoUXESAvxiQ9KGNNPOihVeNpjo1c39EKSdeFvIaRUF%2FiOCCT58kC%2FHwpZvb6rdLha%2FHbz%2FVZJyBC3x39rL42nPgYcwlmaTv8o%2BCORC7J4eiwlAH97N8Ib8PPnA7AhHUTxMXZIf1EJhCfsMW3pm6Bt%2Fw9edrz9BP1L1DWx2HK4O3cM6Voo0%2BKFeO28QtV%2BzGhHkqb%2F6KzmCKv8aoq1uqpdwTr4Ao7zHC2vea508JxxJn3gc6YVhGkl5l8Muy5wFaxWus5bakrizXFNpVPierQ1OrX%2Bekp66YbG6xvnHf91hY33YYnFe4F%2FiK5pazRKXN0kwBkAbMyl6YU7J4jNS%2BnU%2F3pgdjmELAjt5yErf3xojSSpOMOih9r0GOqUBadERyJLh9N9FFmeK9gfRc%2Bo83Mibcwah%2FsAeMmFb39O3fx4RRgouU5E1N%2BWJCyYh0roHcMPTG1J9j9VwRoTrw19bffBDrCpa2%2FJ%2FQ%2B4%2F75je6CUHzl9Hff38bd%2BJrEWzjkC7oIyz3XhMO%2B3FEq1M9%2FQ5JQ0lbmdUrqPTgDLtiKOlA3WMUmfuNJfk1jfyeBbHAg4Qvh8ltR72LoFEVKCGyXlf11s%2F&X-Amz-Signature=3a21ba7c9d5f285feb54b583be6eb968f3d39cc9d7b08a6c447143a76ddcf60a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

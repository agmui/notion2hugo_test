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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEVCVFRO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEO84umTPwDI06KPoGr4Rauu4ojtvCiDnjmfyRLqsefyAiANUWRQM5ibqhy645W5N0fb2d4B1%2Bh7BvD0a4VDrepwiCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMBNlUJXdMxWxqocEoKtwDlNatYPJg6c3CeQkRF0G3frF9CaoTsla%2BvewoE1njMLVt%2BXhpQk6nkNszVRZZCxgjck7%2BLXfnC1epys8DdLAPaAVIMEVA2RGtPygFgoj%2FVuD9lIi2CDDqXhM5sbR8jWa%2F%2FiFJ5ttDY%2FpaNNbKAooZNkpOIpxW1CWn4WMwsSx90MmiqnzMFsK3a1WkYJ6fU0Jrx2t%2BYMbo9Fa6H2W0gKql62QY1mAoOXO4OPSPcqZTfJEUT4eduloHUv0YDOzttwaaXMqRViJbdfhycnggXE%2FqO2qjeuFlTK2UkdPHmRpSZp32nzaFZSPi7JRHzWvPu1GFgCyyGERbKub8xSOMvNUVriDQctXs4G9HeSqsAiSA5L%2F89FQqnUPmMOjufI8t3e%2Bltf%2F4VdvMvErT59YracO7LjN6kgePJx7Nq3eevz0uFq3FfPIewMJovWLwtynn%2Bu%2B%2BWaIe7s0prhyLjG9CefvY%2BsElJu4X0witr%2F%2BWE20VCAjQnZuULU2fAffFcAfVL5twJusqlKQ%2F%2BaXS7bco2zMOpka%2BU9Lr5onvlDCJBoBLKAtNXmfLmIyy1JJkE2SKxWv219IzkOtbKWDScK5AgrLfKNO8W%2BwPRX8Apsuyck%2FI%2Ffn7zMr6UDeUFatpz2Awr5%2FhwwY6pgHKCoeINqY9oXQzBDVqJ5nR3J%2FZDW74ZmQSeaZRVw7RfWs%2BuGW6UHDmkY2Sx%2FyWEBCZ9ZsCyQIWnUGN0Y15zQ%2FC0Yd%2BGT7e0QHAFLgK8W0ZaVNmw57qdeN9aVW%2FEPt3DrWcCavKJSNOSYjPIDBuQxndJvJWp1jquxqeNmpOUXIPF9acmHCtBDjaWL3mOgIa4Q%2FhEYbnH1oG51PT84N5uN0whUMlCNf9&X-Amz-Signature=8f015dda430a8aa3d2888c7910690475a9fe9e56c55c18b5ddd31c144add9eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

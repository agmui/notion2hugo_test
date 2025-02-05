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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4GQBB5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDiysRJXzAwsnKm4cSyez%2FZcULZYzsEyYaRntOZouXOYQIhAJTrzJG47BJFdjUIAoraYeOgw2HZ0LavuFmBJSIzEOvcKv8DCEQQABoMNjM3NDIzMTgzODA1IgybWAtVxO8F6XzfUhkq3AM%2BmxBeS5MdzzHa1juHGxG%2F4lEEh2t%2BGLRVwXcK9PhM0izOQ1uVPLANPs7lzzrBXekiuhYOOLknINCke9Z3dmehByAa9C9S15607YKOppAFnmR2aqHZxgH2hRs%2BdX4SpIMdJcr6RZAk7ibuQPoq7aVUO9MBJuDcEaNiHFtYhV02Btz24MFjAF4T2cJW1tXgsio2kIJBN9UdH61t0iij%2FiXzYsit3Iz8ZVRTMo6tfuqJUp4bEVGZQC%2B9c6sYL5If611TgC%2BqmZaGE%2FUU0oTblFvMEYE63o9u3CmFf7yemDy%2FX1bPi5jGpBurIJlZD%2BK5%2BXO%2F7%2FWGQpHF2%2BuajueawKlrE7c5riQm1LM%2BYqUG3RkD74gZiFuhcd%2FHMTnZitbyw3gt%2BZH%2FkST4B0NUplQe8JIWsE1%2B9%2BFi3Uvzx8G9Hjq5L5WfANXiM7IAfCxGXI8GyYF1B4K8e1lw%2BPnSrk3Qg9kEGO%2BS%2BerU%2F9%2BkS8iZS3sDHcsOfj%2F%2FqD3HWUuB4Na8%2BxGKEN%2BHZZUCeQ82CT4EQ%2FnXKp0aiPVefZ1IjSqi1ecNJmlt6hZaAmnubNLy7H%2FXkCAfcpPg9FgLxYLNhYfBgisTHPYxnJT1BGYFdwVkazM%2FhDxwYp4ImZF5R45TPTCIjY29BjqkASEJaoqRXn6lO1nhhQ37Bj6TFrg19y5me1M4IFmGwHBT8slsAXTfbLGKjLhySsMPcuxWfhjQRYQ8xAFy5nGupFQBZ%2BSURksj0MAnNAWsipM1kBfbxBLlbs4HR5LsXso99Osayh87VXSbg5zZRaFnjGohosPmzkj8%2FB%2F4zdTSAXkUek%2Ft4sFOS%2BQP9%2FaNmSvrMMqEDk69Z68Hn%2F4dOLVNk5UZyO%2Fl&X-Amz-Signature=25f774212bef536b28ecd5ae56ca966dc08d4304b571864937260bf4184b134e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

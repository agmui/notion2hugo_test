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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJLKOLOU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCoZZMwgYeInwvzvLu0qgfDvpvElX1sZf6PjaGfJ1H32AIhANnLYFN5FlToIu32y1zNgVAy8hyIXFl%2FHjcpMz3sxDazKv8DCFkQABoMNjM3NDIzMTgzODA1IgxjAsirfbexz2gJ9gIq3AM9UP9ZTKYi0CHxi2nWrLI2ziwFjbFFukhYU0vHb%2BFazlVPokMJNpgCmTS%2FE1NtRZsa9rKsx6VACCgnLCxCkQcqLElmdawme01ovBGrDpVcQjkbZKKFTxkqrB2rxtmjZ97nsSoLFjzNaYJHfhxpOgsMzZE7uON3AeHwep1ybNpSNi%2FaiYKxBFxldEWQ5TOOeM5rbCb%2Fl%2BqLL6jvZYqg%2FOPDQI3ZEviPatOekdJ66kktpgSVOrzIG9pvbxMxCAgdFHsoQaMvc9HG8tEwWo7hxXkvDlO19p%2Bck6%2FktEUZ1sGyrHxHBdXcbaohb14iq%2FSWxCgYUKrwm%2BHZm3%2FlQMNOyGQNaAMxt8HyxaNcTlhu%2FFu2tafyoWSQBRLvASYuigQK1hm3VFEs4KSX39FeXkVPryiAqIuAhRZU%2BSFpo2DL8ETZcZQzQb0HlgNiYT%2Bwtrj%2FCkm6dR5zHfrOrwT%2BxFki2y1a%2FcMhwKMHGtHp2lCw%2BKAb3fVfGywIWeP2xqxrrAIk7w8m5KhojU1AP%2BasqNDRafR2y%2BF3qKyHCriH0CyqV8ilUNBfKpFobvdlQ5S8RoS%2FAwDGtQSOOLOsLtlpU%2FNyeNgRwMcKO3hk1V2Pe8bpCgLQL7QN38ByLWGMgL3GizCr6vPCBjqkATOvlSit98cSdS3W6wD20bEPGqeolFNqqScgzPMwPa4E9lt0ny%2BD5nTixuIm59qlX5S4VyzcpBfdcWkgWCDt6Qjy3%2FFVjtwzrE78KXcqEofX6wN8B4ttt9x%2BaDjjZFPw70ZpdItgq6LCfY34woCFv73XT8ZpDbaGSt23Dl6Xne%2Bv9C6Q%2Fe5RQnfzZdE6QrzeEqO8%2F%2BxXWJ6xxutZgbTKoeI%2B9k77&X-Amz-Signature=d17c88c5594b0dd5e99d7c7f9efd28787c7797d07f8bd3c72fda93516f8d4ab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZSPSSNH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIdxRXpjftrBcFdi7aF83pOPXn2eX6PW3E7tYereeAzAiEAxmOeJ6GDPi0kTVkNadguYaTxhc%2F8Ky0VMDmVIUvsEtoqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAh6qGYCBaYVUW36sSrcA2bKlgs63O6pElV6ebjU9fFor7xyWasHXEtRkDTDbvGVXuOeOacVqKy43qBvv41n8eBA2DQsY7ciqMFdzEFHd8hVym9vPtZHS68gWImJI73HtQoEuUd7S3JQN02JE3YQrd3HGmEwgZaxy9mdy05%2BFL6ggWyH5nqk0L%2Fq0bWyuPic755VBTZwKgjUo2LnHyl0MKD8qU8A7WhrGNx%2FKOdpz%2B5uTd0Pyddhiq7Br%2FUBKK2mvJZsrm4Yn6C0c7k5O89%2FAjO%2BX5mkd%2FrJkQt%2BIVWkQhvllV3gJtdDll9XNCMHxfUu0sigwUudmSxV0j7TulA%2FLO8K4%2Fl4e3vn66G0EsNRKn2XwZRsZR8ybCxx077iz4IUkVftcw%2BV00sh0%2B5GjWiI1HTgJtNuWWChxgbLy361aoeQX42FTIZw0dYP3RdjDllgazcwv9RKKly68nTkF4Ow3Z66yEqCfKm%2FmFyZ43jTxt5mRy3D7iVj6BJ9Unp26Pe4qxUtKfQ4u5070mcBVtsLMRMreshm%2Bwp64XyZ9A7oqOuaeFI5%2Bnzu79WHdnFMlh2O5Mo7SbquBwoF3pVho6ZZx2wKyGe1q75EtV%2Bycm4DNeSOKGrZ3JwwWG3%2FeXQIvh1%2BBDVO2ViroIpr506WMJ6Lk8MGOqUB9G3iHHCRl3PxPRsBrea%2BGaj%2FrMPZYMpqlvPBGBvO63yRSg3HPsIwpO8zDC%2BRb1nZTqkzAngt0SpGJWWARXwShBF9insIt3fKPuprM8ou3m000KKWC85bY9MMnh5bJmrFLyzGL28EaYGHpI375Zlvly498NPBk%2BA0%2FnsqafWlnDRwmyFZMwfRVC4z7s9%2FK7G8Ekw73cP3lkynA8Ecqgu9EWJnx8lZ&X-Amz-Signature=be055bdff4758aba04523e753451a9a99d4ef840d983785842e62d7955be2240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

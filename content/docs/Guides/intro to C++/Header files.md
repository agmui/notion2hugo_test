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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X7HJR5C%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BH9t7hJ6n86n4qDZ57SjhBRc3GBuUCuHot4z3LkOZ0gIgMo7redH7MT%2F7gEt%2Bp3u3HdYd5PmoVPA%2Bz5D%2Bjelffmsq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDBpNlFD50%2FE5uMC%2BcCrcA4ne1%2FTwze1GoCSEAYt9RfFWjgUr04BUYbsopYJ7TjmNo58d%2BQ6Nsu%2Br1i%2FJRA%2BqpYvqfgyJHFQ%2BN8w3zYM1b1NMrF7kYAqiCmORNjN4V7j4EebSI7BX0nq9jx%2BX647igizCbBfTnAZRVpyCtlHUrxpKPxUVZ4LqHaVuO9ntsBIlkjlv3OQ8ZOtrVET%2BBpuQr2aKmxs7tEy5E8V8RGNhMGJ7Q50Hqh%2F6MlXdx6Du0L1mxlfMflQ%2Fmfhjz1bKV3WYCqWigTBH9lF4Q2ytVazlZHsVqR6Ze71hrbgURoHJ5FJyCrZLegTsTfUDia5TKTXtTT0Up8jlHZqIMyJZU8obtqBKB7KqgZnzyPTYbavfIafTxg%2FcylZPbIoTuR%2F7fmkEdxSqPMFixMjpfNiqJg1hff8rvV61I2ANBEUtJrKxvKGyYGVKkL6pIr7y6wE3pPtYiYt%2FIqqsTG2%2BnVmQw6zGio0JFq1Bc6RRQ5e67xTdJyubSGw2K4A80jFpOrcmKDC825SyK0zTPLFUrJ2r7QrCpU3ydiqzi3gcy%2Baw1jh5WyoZ3tViFYMgPrVuAqPMo7p1gBle0sJR7AerRDI043gpT49HL3O1jQuMPvVwc3Cj98ZvLNqv4KXOsUlG5fkAMLf6q8AGOqUBUEZDGFPHplFDdEWOvvhT%2F51mQLzec3PpSg9PHf5i%2BVhFJo%2Bs4VAWOdp5OJOrOfEMdF5PAtQD%2BmIoJHtmAmca8n5vGtKrNQ9NQkHb%2FV%2F8N8HHfFu3C6Wkob5voJZsouuIevaPJXRxVy%2FpOajX4%2BT7PqP9wGXn9gShT6JH0ruyOXOEI03lG93J13y5GQ0mG6XIeL5z0v5MZGEkAkye4Q0IsWWv0XF6&X-Amz-Signature=b588635433fbcabd2c28de1ba1e3d506d9728b9f9ed3ff227c15eee47042cff8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

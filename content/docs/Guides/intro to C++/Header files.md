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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DG6LVU7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiGHGkF41RwL20Snf5s7u%2FPkOM70NgjCqmIEquB4PSmAiEArek6pPFVyn5jGqSfuKVDoCNv%2F1JPCAFlaOSda8pYjkEqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FLbM6zypz6ZFFNlSrcA4t4dM2kDGbHxwPndvEGx0CDkQhpKIV4T9E1Cs6nHdgGpDe5q1ybuIA8OyGXKFuF82wIt9c2NiqqW8dgQVg8bybegkN9hgMXya2C5lpyJgOn5YYV1ZYxn7FQmrje5psjLZuCUVukZ25fQPQEyhrJW9Ey23M4dWyr%2FWhzWjdKfAsf2zXCBdlzTZmvkmgE0zDpYedouv9o%2BB0SH%2FkjwAdEMToRQiKzDY%2BmM74m%2BWgFG6hztVURTX6mcen%2F6VZysbf6Lm3CQhvu3VyaSv7d9V2vtuliFyQRA%2Fj013maYP0GS9rU9o64wZ3tPFhJg985FrtlDtHBqEI9nGyQ3LFqDtACkXpIDXATWr7O9a3MYBEVm5QXkG28PJeDhNQZ21X4Q27PbckNFFEA9kPC3FTrkqb2I2cZlLOCzU6Ar3P%2B9xw02Eoj6e9NLo1M5ACMLbYgsf05j%2BnMyNH0I5cnMJB6StAuyEyIvzVlSvoOAcQzODqdnQIP6Ze8LbmuWYF8Alslvr1XQN4R0L7PMLblq8FS7ieXSQzxinV52UxN%2BRWMt35gxH%2FgWXiJy9NHB0MZmCj6Yd2E6LbWOpPw9R2MkFwjDoDuQG6UeIlI1lUWRklbLLUrUR%2BMTx1L9TUvcnpXgwRTMKTdmcIGOqUBNRsmComJd8wRlFZgNK1CAbzIL0cdU%2Ftf7vH%2B9yXAb32wNuO3VL3gcup6Hk4FVEqg8quAAt%2BCTK5Quw%2B%2Fn6ZOzlFdOJNzpWR9WBlogmtj%2FxbTf9AwSTk0qadCckYBc0TgffCPlh6pBb4qvaowOHsnKxPzYtKylUlSAd6U4pz6sPtZFdiy7iPWzHsL4gimEV7T%2BzMp3epeHDue7WHh%2FnjrIvcGR5y2&X-Amz-Signature=7408dcd3bb7cd100acb50b4ce3d40156e773eb222e01cc87b4e7cf08c56ca770&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

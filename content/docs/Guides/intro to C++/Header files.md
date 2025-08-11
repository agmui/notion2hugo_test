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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ53ZD5O%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbY%2Bx%2FiJAK%2FelOGR%2FWBgNXqzFWrd0dvytiM4LW2%2BUnDgIgacC7uWYYdJVgU1opgiT1xGWuRwKRgRT2kMdVEEM5SEoqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdy26xUhD9AzGu4ASrcA4pcwt46vfLh8qyLm%2FutEGyf4WCM9TA1YewTnZvEkH%2FwO8g4Hc%2F%2F%2Fd0%2BBv4ZNa1gfqi%2BSJClbT9sg6cOsTSbmYm%2BW59ShIyd4C6xsin%2Bcf2P6YaEyNBL0DphSQJRHLJ%2FEjpM6elKmbJy9MDJqlp9VD%2BCamzAhl79Yo6guIMM%2Bkf6wZ7qOkqkG21Joi3Y02H6rKjhYYy5CgKgkx7HNBGcKKi5IU%2FnHIvuxLrxGolGFqm1xHYBZGxF5ephqSPo4GMu8Dkw2mUjA9PBVAZIkUL6w7odq4vWO2C4qZOv314s7Papk19Y5qgOjW1z4upM9IEOzyZCUT9pnCkyxjdFzwHva6cBiaEDziR64OnRH4crdBdiAB62w2SkdjVFDE0A782THaoTnm4kYGk9Ab5EyekiqzFYFoIGaAZytT79Yq3%2FjXj%2BcT0BVWyWu8ONr092DM%2BPEJu1LJOkIFjki5uz7NkrsBAk1nEKKKDHeM9bYYwr6Bhk7xWefch22gMI3Q6jbnCkvyiIngKCjRelAMyOt%2FyW8GVqLvqPEtun%2BWHWIJKdtJDIS19YM2tVOoDDp1YtAZEt5PRl0K88aGrqm67mI%2FYAMb%2BhwhxMt0652uBuGaYT4PBKqoilQ0LtdtBoDOMzMLui58QGOqUB9Vg9ESj9eLKRgoHXduBL47UXXWQqEbVn%2Fv4aHusxe4fH5Jplzk%2BVzwH121XDVCi4%2FSXurfzNsVD%2Bkrr3DDVAnzYpXbwh61O%2BYKfNEh8egIjGucZnhUUKxX9Zwm8qyJZYDfKnUbB0DZyRRc9mcP17jB5xrouBhplVaKd6IIRtNsRtEcnYHkjWNuaHEeVuQ%2FzrPQryQrtoq4X%2FKv%2BmrAThPly8DU0N&X-Amz-Signature=cabbafd94626a6f19ca1bff10fe56364a3c2cc8e502bfa62121fc41ef879ccdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

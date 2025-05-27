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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNTAH6VT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfnYHuAmEo5wpL4MRPtfXE%2BFjnkf38a6YkrG3WXLhPlQIgXB143KQSBddPNoknIhMj4mPhWFuN0tKPXlFyJPKx8poq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGU6isosxIgK4%2BVd%2FyrcA1gqrg%2BLHkF5PDzqadyWJhYliRKEcFrEKsFTG9c5MzHqcoaGEBkbZQ4QjCj6lcVGcwSIOCFpaO7PSamTxquM2cdeTILYzRF41Wj1z6gzLTVl347%2BIbP%2FXtlSNhu%2BMrWqBVorTZxrmxBszm7IDPzBqSY68Rd4Swk70DU7dr7%2BxQEkaCpUFiHsRUSdjSkbWYPYtdD3kvP9VJpHmzU9wLfE6d93cQNM7wDSxdZAAxt1siGIjMLpOGy3SevF1YVZ57T6%2FxUIwkegEjBg60DREn0YfMb2Lc9VjcPbYbCHmcgJhlMPshpinDIFkyq1zluoia%2FxZoeEBywH3xQj4keNyLHMAP6Cmo2ZZvTBqWuyv6NmZ8TGrKZyp2JKULKNGBFTdFo6n4VYTLjz%2FpaRNFTUBu336QIbGzBikOAoRrstfueJTpmomVOGK31isttcFaNAqbEbnaNl%2BTG7LBpnB8bvlqEP%2BQ0WorDUusNbeZazkNyFrbGxBvqYosv9iYMowGbTBbiBMfMH1d8bWMAoQqVJWy99LvyNegod3%2BfRmG8%2FOBJEbKMij%2Bi2ei51x65XzvcatDHJNPKa3tUTRffUYmXmx4mb28p0tzu9UlmcF2PDzMw3s5KqumX1mFZZqU4Qhf51MMHJ2MEGOqUBjCkJqYvJ3DdJWWZR7cQlLRdHdeUS%2Fzcu8chJsjLAfyJhm0fOVZJPWGAALfSTXXRcyOItTuvv82xovVULEEHZaASbsJHBl22jPHveLDh2FIYYBORTh%2B5151bAcW%2FKSb0nFEEtYrqfKTw%2Buf6gWGajqvJCl7HRDZMIcMZqGC8BGdAnxtr1KEv878LqntEUxibjBrFxE%2FTjCITcxvmq15newwJsfUEI&X-Amz-Signature=fcef72c972069984b97eca418660a3c84b24f7b3cb0ddaca17d03572b4d65bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

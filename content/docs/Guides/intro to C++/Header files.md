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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LMJ2X5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDimJhpMLeky6LrEsnOJHLkYPgSOYcJb9kwN4l9j9zGXgIhAK6izZJaXna8gSNIBRlF0HFfUA8wlt%2FISutPgNCOIHJiKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxovKx8yDvDDDyr554q3AMKRqjpEepDXBLdIIf8mpuswo3qMDE7GOxhlvsJN%2FDswrQKekntS%2FnvSYxlxIpt2qN6fRS3NXWCK%2Bzz%2BmU1K5y%2BNzGq65rIQfp%2BaB7%2F9j6dfKvczbGai6JeMNJc9hiTH3GYNRQx7ngdPFtmu98IGUMEx2jiT%2FTs%2BA7OkPUbt58nZ6q4WrfnE80jiC%2B%2FxKNaiUCwiYsDs34drPox5ltJmP2MJLn3mAk23j0lKmd6TSsTRQQG4KMiif8HmTpEV3kVVUW7HXCWacjATLE%2FnOZUnwJpv9uFvioJungltZlhAdUhL2wXlRHQCzR%2FGIHvgrpAZGss%2FXdTb9vnfYNI%2BbaSI7ijoixQJGs3cNDI6QtMsA5sOQFBA%2BlExW2a0Cek%2Fu3DZ1uBilimNEj1OkWMbTFmDRQq%2FKSX9P7cI31fDAtapUWPi5V6hnNQew1WOQh%2FAvAVHeQbHY1EAjVgM6Db4us2ADNaI%2FMZpLWUQ6btvgcY4MT6NzSTD7X5mCN1dolEfzHtg4QiQJRO6RZkxVZJAJwz7IL2UitXWTfH3sjqbgMuoWsdjvqSnkqWj%2BD8epb6hD2OwX1WyuHvsQPcM4nuYbCyrflKn3CbihJ3dAFioRzMVJAWwc95fTvcw%2B68%2BpfSxTCklLHBBjqkAU7hv9g%2FocgQBsgR%2BH41q5r7EbcDXDFSIhiUrtHBmQNB6f0VXutKEAdD6mfxEGUzX4Rsnui6tiiCg2lpSQEAWskRdGnwXXy8ZQOPkDA%2BmDHMrN2o3qRVN5svlWjtY2DS9yIUHMjT9%2B3XIm8GGptLIh916cakVcFly8ak1iq%2F02SuXzY7WrybamYdf3Yl1GceYj%2FRqFKVXXgxIHz5KI62xMl%2BbPiu&X-Amz-Signature=bc7006627328d31a288aa6688f403f71ddbcccfbfeee4320f5f889fcd466f378&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

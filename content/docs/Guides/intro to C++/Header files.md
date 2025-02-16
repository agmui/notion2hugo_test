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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672JM7C5I%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCTvIjuTXAtG22ku7uTIndPwcU%2FQSAby%2Fa2xgVa7QaFNAIhAMKsT2SddfBxdsbmMoYD%2BcVYbTdU49rQGDpy3dqNEIYsKv8DCFYQABoMNjM3NDIzMTgzODA1Igwx1rygYQAMcwMQatkq3ANNlGZLPfBiqIXHGeU14xAVry11L02TbgVv44bpUjgy8flUWVKFm5PYnO30WELOVDpg0k3mKFMu9T1DgODDI8wgAVwkX%2BJM0y4XL2DBG9XejxG%2BdZJ%2FzZV%2B0NnZkQI9A0wuKyuoVImbnuNf9THjmRes%2F6%2FA3Te1%2FUY%2B2Dpo1c5UmjVg7Epb7IyK9KwttMztxG4ODmIdHyZ0ASZ0Y0ial9tT5TqnAOIXeIDdBtU43sJVZLmFb%2F50w5gnQXNgsTDahe0iWyBYg6Kgp3RTJbSbRKBeHXbcGQujztxIJLtQGubzcIxYbkeZIZb8ybBrEcukylVUP5TBanUn5IhB6YFiKHX1OJHtSsfN11jRUjqigSIs22jzo%2Bcfc3g7nYXdmcDxRfnlLVJp5z%2FddF5zj6DwT93Antt9B8nsQAgF8l%2B0vuBIRfXEWFqS8okw6rw9jJgyi2xHdhaKq4EXiBTrv5xNWPI52UxXP96XHU4rKux7ZSeizfkXG%2FkcuQtMoFTzauO75xDks%2FyHL0SxP6VkhekdOErLV1Kq1BKS1IarMgwaBBNZ6IONR5kDzUmMyW9vJjciPhrdFxnMKmnZrMclW2aUbHkobYNtRg4RqdbP%2BA%2F3JbcDhcURPnlQPd%2B9XR6v5jDY3sW9BjqkARRfVDsgtllUzUtUQ0u17PXqy56QFQ9EfmAJWooCkLVQjMFZ4EwyVKlZ9Pkk0m1DpVU9E7I3xcBYMFqBOGJFv1u7outEaixJFOjlJvibvYS3xUvr9IhdP0%2BLlrPY6e9aJ2dqRpyh32Vw5LELUe4RtQFD3ZHKlivRWyqtuiXtHvrGcjIXlFVePzu0GAUWQ3p8cUMMtfB0aE0ltmF6Sx3k1YvsitnK&X-Amz-Signature=a5641c3b4bf1a3a390ea7e5b6baf0858f9b0f3a6940da7a4ca97ff25dc56059c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

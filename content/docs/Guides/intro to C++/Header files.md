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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OIJHYLI%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCghwlH0bZu0pDeGnvMZCsZGgxO1qmoc9RNm3qHU0F0sgIhAILIK5891tbDsZo0Rttn2hRxnmUSd7NYttWOw7wzsZqTKv8DCDEQABoMNjM3NDIzMTgzODA1Igxu0CsIlskVz%2FoQjEAq3ANzeCasMUC4yC38anccnW1rTHSbpOZZ4tyPu35sqIlcSdczo8Kn%2B%2FNgVKfFI9uUnFMhXW4wkv%2BxGNwFB0%2FR2CCeY6jz2Nsiyw%2BSHKKzx2QBxNMtMX1AtkpObzSkfVNKeeKMXbli4gkZ%2B0Q5htauTOXZqC%2BVbLU8Tf5O3mWld%2FWQquBfK32kWo1BeEyOWhVB7dx6IULD1k2ymvdbrTTGHlrssH1H02qnsZNHe9T2dP787HfsfE9fDJVosQ1XWy3HLZjrRiSCXdi7FJi%2BNvFH9MQ2nCrljKuHIAzeVDCxYxwU%2FaDH5khgTKuKeQI%2Fc5CcG8XZIh8%2B6tLzns%2FOlJrpMgTKWrLZGW5DbmkplJqzumJhuuG%2BnWkIPIWv4xEzrZ1N4WTm213JSZhyGasPnYKQGFepyDZhpX%2FIrYGBFMpC6IUWHVvrZJiQlWar9u6TNdryzV4R6XDwN0nELH4l8NANxeWZ6D8iLiWUhY3zszQWXhbXR8tqF6YvZQde4L0m1NGtOlLhhZwfFFrReTl2SeDfA7VHpHUKGbeAB1lnWvDK5tJwye0l%2Bbbe%2FCyivVGCDvG6YD7qBxunL95mVLSQeGJejkFT1fpuCksCx10YaKKeeP5fADxesZYWBO%2B1PDixTjCKkpjBBjqkAR9JovP6mnWbX10Dw%2BiSpQP1ANhdf8Wmkv10aGx6STgWtz0841iZifdnXf4hn2RONT65nrv1Cm20w901oY8qZZc7O6E0W7OAq7skqtOjsrC4jodUT58WSzhZqO%2BB4XeloUzC5o6qQBAzOc1aX8%2FgKU2GdQDoThJDcslNe1IBVfSjfqDwoun8N%2BJb82B3qFLk1FQbD8XR%2FYhr%2FXKKrC1Jj%2F0eH0Ua&X-Amz-Signature=51d775f61dd434f8fddb828a25196851214cf9032042b7b41c4f471010b20932&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

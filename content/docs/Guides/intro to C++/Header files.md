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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664436IH4H%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnO6crJDy%2BD1vUO5u32Aio04ZdjFBBkKmDv%2FS04J7DPQIhAMwEkQmJe%2FOj1MJyKNaPiKtIch6QRByRtVeFVuxv3X5pKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNfHOVHjsyjxUn%2Bvkq3ANaDMolOZBxAN342ileRPgDqDiKu%2BxGpvzS6lyh5dYjUfzWQco3XkO9VjBfaZZ2AbJOb%2BHAm%2Fvb3n26wGpt4dtkdJH%2FjaMf6vOgNj7vWrGWOTBKynJxcuiiz00oqMy8jxJgM6LHn1W9uYvpwCvdF8wbk2Bm2lHSmsb%2FAPZwS2Lui5Utk2YwkIGEMaUjiFAkK%2FtKIHlOA%2Fv%2F81%2FP0v6%2FucFtVKq6z0ZAlWS5kS5HAKDJSJRz5NrakNkumDJ6%2BmqLUJtSpz5dH1bmY29TTIpl98Pg2G3jzBTdTqlyODBCNNDulnJWidRvG7HhUno442oQl4F77AacHHRKVV2gZcFnG6gyePA5J6dWqnObN79wyBv0mrW%2B8JHNZzFoqfKIvm4m8e1kYSAdTRGdpgWwq%2BMwunCtdARqqsVc%2Bp3w7IIKP2%2FOdnu19Ux5zjltgNBc72eAX8Uy17HLbTJER5Kd9fxicIl9c7dlEoYmgar23ihJGZ%2Fv8hBWkPTGCVFIStI%2BBdohOzXa6SwCrsWjGRhHfWI4LfWvlZh73ptwW4tfYCjADy8GxmSW2E76wjRHPa0zB3nvtyhW2nFx%2Fq5uoK%2BCy86YLjkgYInEmAQbsofEr46V%2BvbAWQIZ87fzzYeC2fclpjCt1%2FrDBjqkARHyDdqwRj8eGeK2og3%2BFkbflI54BW9u1IH6vf4%2BdM6a%2Fnykgn7nC6%2FbsIOM7EmJQ%2BGXI1Ax6BzD3kZhfdv2GfJ5W%2FHIyAK8DZBHj0Xi%2Brn4mXpm9UQAk4rBYr3HxKNwkLgsXxK4UslKHFb5SQqjciXQ9avRAlOeMlSEjorkmL2eYaW7Ilga%2FNqPo8tvYzKrXNWbgS039qws%2BZRkq5H73jrbgum0&X-Amz-Signature=039445cb9eabc1dbd1817ec5a112668dd77551cc946fe69b3ea0297c38c7e1d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMIGZVZ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCL2lzZQXhvtXg3jRzUZrGpuVy3diepWXZ5vOp72IjNkAIgaH3%2FF1vdYPX7PAVeM0%2FvLA%2BZZMnuIxeIBOyOBt%2FGh%2F4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKNS7PY48iQJ9rYOMCrcA9btx8o7cTzWm%2B7mbP3JkVkm2x95s7pEdaDlTtATpGKYMXtUROqqeWM3S%2FU%2Bl78r%2BhSBkHhkai3cQ8M6i5lrqX%2B0H39REqvZWWbbQ4uINXNUYYNAy8k5vCw0dBAicPbTxp2rivywtZ1U%2B6OYuWSp867um5J2wJ%2BbZlGR9EzVCwRVVlQUThBjUIh7NE5m7t9yEX9I4nwDQr9luNT%2FW%2BjHYamDC1H66RheiIaRaBdYRAATomNNSd9cUGmH4Oj99WE3rfkeUa6CPHgPwLlTZOqHxb2KBwnYNTdNd5soDICrb0wdD5WMDw2bk%2F2NgbEF6XDvple7VWY3wbdo2wstSJGIZy21PFn7n546cBTl9SpS1Mk77fbmL%2BTrzX71oFt7Ng1%2FhQPmUCocAqi4xPMaZZSZpzvIJBGEUk5w8TGunW40b4LsJ7kFN%2FH6mYLy7f14SkK4Y6MZa7r489ixp3cgGhrJgnzfNn0Ivf8Uz6GaHb552rWEHUfZK4GB%2FcGQrkKYMDSBbO3Ccc8Bdtjxz7G2ppEDwOUSbaFA8DwQfr%2BF%2FATVCgcwBytPt7Hw6X4PhuI8t3v37S6URvSMWr6KuUsaKmPOdLR7dabRnBsbrPp20Jj1nWC%2FQ60UuZUKgrPGMqwwMJbeib0GOqUB2vsjO6xRHuFyp2mt2xzs3lYCYLlxTDTkcSf61NFh5dXH%2FPe5sqo41%2Bzz4Z70SYKjb5cmW19FkenFGff8SQeYbjhA3NdUOlQtXX93ufE5gNblPG%2FjFbg5vr6qAnTZ2w2fM3Dob5YhFxwC5QG4n3pfyXhaGNqq0i6G9lk93%2Ba7o%2B3nIfe4GrWXspQUmfJe2krYShDylW0iwg6Iwv%2BVXkxiQKLmzRTX&X-Amz-Signature=979249c9296847e76249d1393d7a25fd102e08a0c96bf8e59e15357fd04cd6db&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

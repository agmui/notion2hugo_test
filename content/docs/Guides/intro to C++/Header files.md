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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OGKAG72%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTfFVC1JXF%2BshhQBYrKFjsquSImR6t3zpVDfyXusmN9wIgY9Xat5T3aYjv2WmG7Txolys%2FjQffl6a9qQGbXjOgM30q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBsUdZ6bcE7oBkooeircA9N5NXs6bUQOfg8phJjLgeqlrHigoc%2FUFqO3vuTljbvyQMsI6QpSJfVPB9shrIcHFgta1HHCURnLzgGBFr9XVdXOThDaEILgLz0u8lDkjdJ87f%2F8crwawB8NefCkzldCljSLJdrqRgKq4Po0gFP7icKlPTFZ%2Bai7851SpMp1IJJY9HV7et9GP7jkJJerSx1i8yWSBbmxJaELpSHivMPoly%2FyKT0o6K0PkTvy7hs7YbcIYU5oW5zQLnSd14m1GYlBsIJxcWar%2BQhmr7qzC5rJxzardJqZd0Y3sNFrPwvrBgO2J%2FIO9l7uUdGD9fgXL4IK6GwVLP5l0YaRPgVLvuBzFeICW%2BiL6XSLDomf8JUNUkRGEzehaLOkVijNyyCxkGwfmCo2OLJg9HJrUwuI1QnScoxvF92KWgvSnaFZxOScBYpf7qX9ZC62UPDq9XOWoPBOs%2F25RKM%2FlNEJXcNO73kk7on60XU8tso%2Br7yGJmaU2U%2FepSIzNYg87p2y0iWKTefsbZ3r6YCQ1zGI12zfqyxqS1E2VLkgQqbA8WQj%2Bxv4eXBra3%2FgKEG5rM2TZUGp%2B4CpFpIL%2BegnMWrVQY32i79JHK7OJXkIZtjjYzJRuJnDSAe9YuXGgdLYPMPlJd65MM7ji78GOqUBdXe4aiPcww8DLJx2rrMsSA6cWGt7H23wDaVCHWXbmudmsCO5i%2FU3YHK9FrFYm8i2k%2FfoaKB1%2F3WLZ0bIOmDROSwlmhVIH2x1HQFYQ%2FvEvN1BiYTQ1baS%2BI6gG0I8ozdUyM9rrf%2BecFduHiaxiDhQJhobggM7pyH9F0wy%2FlvveUduONmTwA6fz2o3gykJCkZZPBNi8%2B06LCOlsm43WPy8AIHqR5W8&X-Amz-Signature=483edca64ebe0fea69a553ca7d2289fd734b322d9bfded89ce7748eb9ef0baf2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

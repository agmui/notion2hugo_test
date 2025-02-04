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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RNXVO3D%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQC1xR0xfO4s273sMYk%2B%2FUy2L%2F6aREBy0qV8Au6bfLd9owIhAISleyHPhJM5YqUWInivOmwXW33DOn0fiXgcV3lANHCLKv8DCDEQABoMNjM3NDIzMTgzODA1IgwjA0J8pTPsCf%2Bn3ZIq3AMhVwNkWnpNAzRE5yo%2FF8J6ybf2t1%2BqBSNXNmUcZSW96f7hJueP2CjzxxgSmu9j9ZdJKPOdgbNefez%2FQ4Gg9rZq%2FiMV4wGXdsCXYVwx0oCqAdTk%2FYLhbWdqKN4ElnP1x2T5Ik6i62RhQnizwu1cZWgBIDjGjMm9kgd4JkMeLseImnL0sUi9yiO47xkA7zBFLJLA64lDR9C4yD7I2xsmfKNfC%2FsuzB3Y6Y8SF%2FVCAx7Z3Zro7IHv3koA5d3H4V%2BGiUgUaabtRULlpUY03TbB3cbXHGFGS4j4KYwrcm2rk5cbnrTzOrFyReL2i36xxpvGRdmbJakV2%2FtFEx0OmZADgxAh8IN6qD1t0wP0xUK4p%2FCVDjSvo%2F2jVSwZMZ5rilYbpevWaViLGJtJZgWKyXYrOxZ0QGBKaladSOsBIfcn%2Bp1lZF643qgtZk8hM0JhaTGB9dfnjL2bQGyQMH4HrS%2FJ0%2B48DBDRT6F7UOSZ286Hbd7XRAwlpuSQ6IMyOcmSDFfETugKIzQTZWWbz6nsCpKw49sOC%2Fa8vAMGgQOGVW2CjKtebYTuOL%2BvmG0Y5Ux0NBUVoiWbGo9csCUNqvs5EXeDEteh1dEXoKNsLWSkHqwrPNH4a%2FHdH2VRw%2FieadpMTzDj6Ii9BjqkAXzHdVoZqXpLDwN%2FRfUEIr2c95lmhBipHS91SRY%2FM8OtXQfXw9CxoNpAbGpoDvxryVVwCKzzb%2F0BaMk4Pkn1lKNRNHSFj%2BjJzUWsPWsvI2UyLUqQXYuXIzwY7lxQjity%2B7Qa7Wfu%2F4aucmak9EFxzD4WK%2F656032ObBvIlaYvkPs7i03byydHh0cKoGqIhLM8Ei4sZkTYpHCCG7gp0m2cyYJO%2Bzj&X-Amz-Signature=c90b13592d605f987e6a994504083066ae25f296eaa1eb12914d7e3d1b7a2301&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

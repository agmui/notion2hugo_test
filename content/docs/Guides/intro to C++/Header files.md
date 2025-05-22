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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCGLWWVI%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIAL22CfXs6qetZ5FHwT%2F3Q%2BfiUoVOEJ8d7MM9mZ4YdJIAiEA%2FvGOmoQEehJ7auOEGRrBqejzBBIeAYjpzMj9w93bFwUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAol7VG9iy%2FMr2RMvyrcAx3n2ZNjFmR6TUF6ESl%2FbQM8UN8%2FNzRYNv0E7AVXB3xWm0z8n9aW6hXTg2AaSoArM98eSY1kQxgz5hoWjdBG8PO6ElhCwZHl%2B21II2Uw7nPYG8Oa37DX3NNQdMII%2FXy6iEtLu2HcJ6h0V9pF6usx0%2BNKMg1kpuw4zngxCJw3e8CPnkuiV3A1KB4BZv78auQPGYCBqyED4%2BTsCFK7uwf1190CIDp3QD08aw2aOeLnIwBms93Hyty7WgIWy4Fu9OsCnjUsR5N3MVJ8fGoJpiZVYwqeK4BoHz8Nk8LH6kfegAjzpMKplo%2FUIyZpHYhy%2FxMFZI3fkLikJeMZCr1kN2jBzvZt%2FNLGZEufVklsB088ooQaZ4AHgwEtJ914FMt%2FOWXZims1ptcS908y4Dkvv145Zx3%2BuVGhUo8qi3lCQ%2B%2FUVkCUY%2Fz2ZOjurEBCMPBqFlF0u3pFh%2B%2BhjLHW3%2B41WpENINpiwHSR0tCLYTEPAcTaKn8aW4BIP6uMEj8ikfkoygdhhadC2YemYbzJtX7cVxfAgB3%2B2Eipp%2Fdl6OTQtt3G4LAqsfBXf4t2NL5s%2FKBLnZ5%2B8dPoZtjShkzg4snhKp9eItSCwhEHujjMA8clSvspcbP8uaWGlrz5fAvLMgDYMPWTusEGOqUBI%2B9ToEMQbpft4OSP622yGwooWDhM3fUvjF1qRz5k8uerWOyUsPiP2G18wYAR4Gh1PSBR25hqW89ZFezDAr0DR9QgMonLunXLAqKfKyJDJ9oX8AgiB52d4Helh53RxwkcXGYF7gan0QpApih%2FLQJJWJFSDrMtdYmMAnVzLKp2IgKjj0MxHfaosvJhMl5ajN4GR6qCHT3WxZ0ONSBZk%2BcqxYS6f2Wx&X-Amz-Signature=db4582c60d2b01ebc5e6f93f33a7c321965aef19bcbaae9acf5b459c2ff72594&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS26D43Z%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9CD9BpTyrx%2FohEAWnSSDnG7bN9JKIgCcAN6wE0OqhDAiEAlhEqsFMPL4NQ4Ql7FwfvdsM%2BEjUDQ9m6m%2FcyNhQnQzEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGx%2B4nDBbNMsfSl3YCrcA7tF1zqAgQXet%2ByD3rgY2lB03P9lpBtL47CKiiBCLjPp%2Fz%2F8u8K2yBKRxCqp3irWuUYiigabnLNue4D76etFP6wXH1%2BvfaGP%2BYND3x%2BvnUfVnshFp9hi1DiExo7zPisOqAoXJgDe4o8o0YSKScKZjs9K7TdP4O779E%2BvQqtVVAf4xQyqoHNn79LOwCQvd7dQ5R54kf7ABajjHXu70MTjlWbWQfb8TpKOlxbr8E17ORkA%2FAEFY5zGPugnzn%2BvtcTQ3xoeRKAswyfFGmfxsb4e0jbOBsRhSGTdjXRIPhDo0C4HcDGkvSfZ5DcRm6%2FakluIdFB90cWf0k3EJXcESY3rop%2BshCaVv7tB67LRCMllLemVUeD91vO23fKKsUCFMyIOhoTuEx2l2ZlH%2F%2Ffu0X9aOxqxKteli%2Fc%2Bq6HwkRWerlz6qb8Ld6YvNTqoMDsb2XvXatZpvvQOFmSH3Bo6JAjnAq84ZbbE2GUxH76bqlx%2BXAJQPMAK%2FEToZh60G4G%2BCVPcl7CdDxAgt6nb%2BLhQCmdBk8KyiAtvQIxeJaZMNKfJXXA99D%2BIBNzjbYtbcsXnkAbPNTPy6yZ59flblw18M1jy6uf05kFXxzm%2B9HcB%2FwPNNN3nKK9%2BBvyU9JfnMYfuMK2v38EGOqUBMrVOglfLYuwNBACg9Qcxp6cvATpAncqSAhh7E9OHJRF%2FaguWwqRaKKJLxPsBdUTBuhaMqP%2FWA%2FjCP%2FQbBB8qQdxHajV787u7%2Bo8vNtXvp44hcEobuH3agyZbeLX9GAwhI2ISGzoLUuE8WQp62lcJ6hgJd9mPKQqDsEqoJMZwvW3%2FgF5H5ZcAE%2F0yDWb5m%2Bj1Bv9LqTeI39Wy3YSjP6ljRHugcSXQ&X-Amz-Signature=46f2a9361217d0c3e491587244e79d92a33f1a05edfb702ce22f71a3c0de1e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

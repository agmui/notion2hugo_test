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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4UT75FH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIGrsQFEPWkOoq5yK6JFMBcScRMxfKWQId%2FMW9q%2BCY1qYAiEA4L8yKeA6e6dnLHOz4BuLj%2F%2FhKpEBCC8xKJj67SuvYqEqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0Z%2Fm4zRqhnd3dHpircAzTfxExzHGdvwr0U5ZDG6q2C0BjI%2B8WiFbn5Py2Y18veTlf72vZPGDe4Cn%2F%2F0cLzRs0gWfc1WX0J%2BZWIoARoElqR%2F6VBJRkgjLJlMBDt26OMNOCcGqony3C5TKWyWkiZDjEP2tYvkI0YDQlFs8w%2BKP25LnKjhXioJQ4TMJpBqm7M6PGK13hZOG3CseYwqaxhC6ssn5NKfNfrBJKVRpJN3iX2WzkXf%2BVlUnecxpE2kGyRxoM6dnHYA%2FWQrMlAuLH5qUkv9mlBbhhMkIfqnn%2FyBcD%2BGDnR0Bo1ks%2FZPB1KHLIpAAcDAgL2WyrbsWKdcPfqunYmW4b7Mc%2FU3doOzrx5ee%2BCL%2B2JBI8mCBs1IWsTHDeOBd%2Fg34AP3XmY1FhdtD7HGRanh8rqFfX9JYoxvs8GR8he6L9t37blSCDvUhGbomMJdbsSNxhtyQktBWG6naJbVBou9vfYi6onkMzvmeaGao9273YQGzm9D4B3MOPJZZ9eCPs5uNcEQJWaQIavyRW3Gy1meT6OOekkjdVxqZ77I8cb4thxw5KpKSnLaT6AY7g1Jao%2BluKV%2FX0dejGFJKMVOaYZ2jJq39zp3haLNCE3OAldRPXxzivAOILOtFPN2fqxMMfLYJaaLzkS%2BiczMP7npsIGOqUBWXaVhu0G24E%2B0Pd2H1ls6xZlyyrVcxY%2BHVEaZGahvQjDQmarsf1EaSx8BsZxb7TevkZOMN6XiqsYKM8pHhqA5C2dSAjXwZ5RQT2nrpBe5DyorVPbRpk7CAlHBEyp8G7vgAAQ6uF1FQd6XTyRFeVOAaW35witdaEVrlhzDbL4dOx2bjy5nSoS3BBhRRYeuLgUURuQ6N%2FkQPAJoYxs6e1eJYmNBaBA&X-Amz-Signature=b361c09f2e90edce96d608373da5f81ee95d064ec76c13f21656d5586bd364ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

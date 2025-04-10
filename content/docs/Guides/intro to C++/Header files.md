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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRKLDQB6%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQC9MvAYDr39drc9TX1w0C9s4Yc4rwTEP9KWhbujmYX5OQIgIQOJmIiwD%2BD1a%2B4IfQS49XwkgVOf7dHJbAAQ8wYiPtIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BV3SE4Qb%2FT%2BqiG6CrcAzhC6q%2FwHNYEcuP7hS3XjccVDQrYgDPoOVdqyRL50HiilnSkod%2BjOnut3DNCQSOybRVoPwDjKIbkvu9DyYtIelWCar5O9IRklUHy1eM4sjv2lbXvN5zaaE8rbboKkAOKpbFQuNWR93SPNfr9q8mm795cMXv8JCwZbfFBra%2F3L0eLMFOX%2Bu0XYlkyWsI9Y3IN0mGyaEQ4W%2BIHEKkz5Uv9zVitf6XsDCjlMCRJheiKqVGZm99GkmrbtC6eDqpPbx5wvVHKP7mAUEg3STOmCbPDPio51c3GJMYEW%2FcceKAUYcIMt%2FwTy3n4JihMvTzFPOtAuMm5cfabAEQJwJgdajysiGwu%2BIA4uLmAy%2FvRQaLsJlZqvcOWBPIMGqyyFWjPcFvc%2FXPoyfYtPjZoXUfjHwkYshR1gjOsNGk1AJLAB%2BSovpqpKytJ%2FdhERsCJ%2F4mIaHpnAugTNWJvri%2BlKDyIxgfE4qxsID5uWdIYPWF1srSCaqe6s%2FUqZ3dfMuJUWtRHexaiaTEMyyTfUzz9bFFSYX7ew21QAv0t3e6pLqLaWdXKiwXdEFaHJCxQXlYx0QlaURnQyrFH%2FjIIU5jlqSiDe7wKR5NErhBlDi2LvJg9UdkmAen1JFWb7CHQ%2FBCRLzGAMJv43L8GOqUBFrlmykpjtiu8ejmwSFlsjvWKpH6nuPEMDbwHHsUcwD%2FVNwL2xEquER%2Fi8Grea4oJ%2BBylpcesH6kUxZgL4eepPU%2BhU8pdkPITu8MqrnNc0Bd2KvGIixi8BQPDO3KDPGH76HGEkQLjboOxnMGBiqDS81HXskySflLvS3Hyy2IppUlJoJnVanwZ5SszN2foJQH3K3GfyB7iIkPzjachZtuPhxT9uly9&X-Amz-Signature=5c44ec7a4205934164bf954c869bbadd5ba4f0e4105881d98aa95daf18f4c680&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

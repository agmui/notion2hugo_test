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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNEOGE77%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDSuWdgH9ijwT9CSLNKZ%2Bbsy3oTTHJjiuDkMhDgyza8vwIhAMQ3AUw%2B83ieqBRNL0z3i37YLH1YzGZId%2F5tzAj%2FNushKv8DCFEQABoMNjM3NDIzMTgzODA1IgwlkSOazbrkWRlB6Moq3APQyUOt8qyIl4AXrSUtDRzLIYWv7VG4NbRdjvIQN1Yl6WEVCcEP8UVQr4O%2FOM85fX26Vw%2BtC9r29IZ9ZZd8CQKUiiLcO%2Byg8Redx%2BeWO8B69RrTLk8lOanLDsGQ3vQ9NsqSGZzL6J9bZqyJKV0Fg3smPaj5yt2P1R5cSF7boNRXzXxtZztP2hjIjwizd8mRxwZhDEPcUuR9LWPofPucLPK9ZJfeO28IQP%2B4%2Bv0UX8JKuiZuhXhQu%2BEF%2F5iTr7S9fvTWUGHj6fm0zK8EqsUHLfNcijF3QOqrdskDWoZvXwhqxQT7wLGdiOtymlc2ypR%2BD%2F0NiPqXiU87ydFsx9%2BBzos5nT4NY7KYh8Rfz2tdcRT%2BD5PhWCt7EynkDfJo9of4VdCjJ%2F%2Fk6wuPK3NniRJGzS8KeBdpZXyVoRux7frOVoAw0iqg%2BLm1sZWQs0cpi5VVkWI0tyBo6SbNwSHGVZ3ZpckCKzsknH5%2BPU%2BNqRuYod1fc3bJlBN1dkBsHQPuq65DbWiDgq7D1LHvbgr2e7Ji%2F6Lsi5V7RO3IcXF3Lpf0CVoFe7MEkXIqLEaAPDOTmsY3EfgUdEzXygsYm3lc09guUs96VBNeDQxYqse89XDbmpIWkowDRFQV3lM3e3a4FTDM0NvDBjqkAU94PRTjLGDc8JW315dj9iWhzMIpXxU%2BE3MTnZz9nPnvnarB5ziifwebxN9hS3AAm0X75rXxPS6QZGWv9mOluUgkUEmURsm%2BHETkYeQ1q2bIJowTmbqxUzoeWXYqRH%2FeeGdRD9LbXOHd5DSITaCSTTVh6TIthP5uqbAxQ6AJBesGkhdwK4eMOxjJ%2FhD%2BuB8xeh4p9lRBCX995IMEkfSzWjC7k%2B8g&X-Amz-Signature=609b86308b0352f5ef0dea2a36fd80cfa1841bc3dade66c32363228eda2159f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

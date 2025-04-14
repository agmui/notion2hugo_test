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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSI5XVA2%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICM%2FlUUwqT3A1sO8TrGhMWeTbU6QiRxMT9Iqi1dqT7OAAiEAo%2F4JH75fJMjjPmRPegfgW4qH4UQnVF7HpwKsY5uwBCkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCT0nsUtUZ7KCsOOayrcA0KHa6%2B4dd0SkPF87moBGTgbZFGQwHj0%2F%2FpnFv3VjOm8oJd1sYD1hxHADU3q2TZBvycTIChvS0EYfeeKBu0fgu1b3Z3RK8Erkp1QJHRC3aFlcjlyGaSPupsBCWTFgE6nJ6pawNHJ3vIDEtBjY8LC2tJZrmo%2BOPylWSVcIcbJB0pAzH39OZ1lIq50vdFebARc2KVz1%2B9oG8%2B1S3N6abvd%2BysvcF2te7tqPYJr3yoplVUamQXWLT0fjdmhxVI%2BRWMVckae%2BtX0omqM9Gj%2BtjDd53LIwG%2Form4lf6o7lJh20C%2FFhTFctQGBQY4wBToH3q58YcRO0BHFTT9CeNv725vKtPNn08OdXDQ0xQPqmt%2Fnu9Isu%2BY%2BQ6EJgBJI4KPz3x1%2FcAhzHns6lpudiyuDRBIR6nVpW1ZL3%2FL9ZxLEKgH0Mjb111OKribIvpLwXRwjxWyTWu%2BJ6Xsaf5zj3ghfKoWOm3dgx43eq%2FrT7mh4jK2t%2FbVGpOgWvhH5SEa8myymtWuiJ2H9stfvoQRIhBnBvK9%2F369gwjb0kXdk3pcsbn4OSOzgMevJG56RECU%2BvapKwTOdiW%2FAcdTcsmYS6uTgVU%2BImiU3SdjbeNnTGOy3ZlKE2u5EWMqdJcEA2uAfKEhDMMiN9L8GOqUBw9ItB7S8CdeX75IojIuXg1q8CdNXvivV6JW9IE0mughnImCwvcQ%2FeY2s%2B4XX4rO8AiQKUrFSBU2qi88WiiTOtzrvvXo0gudRfvLdv5QE5qIfyzWXIzqSxhyeWXFpywkNLrbk9P8xKh1cRUEIDL0fB2ydbvXjPoqfTVZJN3YCCV6IMHrskuv%2BVC%2BTR98sd%2BeiVLv3NIXPnq8GMneyklBt07LxsShQ&X-Amz-Signature=65faad520f856661c5818875fc725431543e237e62863ca91c9bc931cac1ee21&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CIH32F7%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTrPIl98wiHQ2u0d4uKHuYODIccAYS%2FRx5eO1Sx27ORwIhAJH5Z%2B6INluxc0VgbK2j2jRGF92y%2BlMq1%2BwdHPmMIMBKKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2FpA%2FgHHcg%2FDdRRIq3ANBa8pzMAsWJU82r2NnX5ZYmO4dPpYsEpskawfO4pRC%2BshjZs0X%2BXXwQNXAoWWmgTxF8HIBl0El0a%2BhZmA%2BpPSUdnuuDbnp2JazjObp4GIbOYCMgIRktNb8e8wB7AYRpNYuWOXRwmYS2i5%2BUL460TNSYfJlxPavqPlsaTwQ5ygtXsHxlFJjQ0SKeeyMXsGhZDuWoK6An3UaDPHCwmU4I8WiBgAD2GteVy2Vz1TNsOoStwTSHdh%2FIx5cOQHwMTjeCIFU9P7yv8mW9tFt9Jk%2BW1BPj6bjaClm0%2Bhezkv%2F7BzE82N%2BihB1g%2BnhoNzFJSZV6yYQ9Biq6hQiAGWPdFEt8uhjGYtMxlTeVUYAHXI%2BFpc0g%2BnVqD9e2Ss%2B5OcyXOZijwDBsxU9JyrqZQeWrLqlBIZO55NANrC58kkeoNTZdb2QttXhPwwuiCV7lp4%2Btypr9RLRts8Q1WpDZESA51kY5t87eZgy2K7UaO2XRpEqmEvflIjvHAOEb0zAK3jp6tdT68h7H8SoQAJN25lKADuJ%2BCr6yiR%2BpvBkPM6YrntCLHKCTVXV0PATxBvcVCejsUV0iGji2omO00DvzoDVQZgFzuk1vVmBgE10FsTVdEJDM0ytGyDHwnk5Q9PvbmRyQTDIquq8BjqkAWvnlFTmLMolVCtcGzJz0%2FyjYawqIkihP3bjkfz0s89Dja%2BUDtK6eEy8YJp%2FXvRrf4%2FuLCXEEs0STrUZ1SLaB35EaWpTkhAoJKq79EqaI9ZQL4%2Fm85aQY%2BiD%2BwRM6QTPn2T9Vca2sbo%2BaiuZy1sZlcZ%2BRLZa6BoAypvAK0e15CbpYXNZ015LPXfkfHIGrScM7%2F8tIhZUFkHcSYj98kgKvTWBChhC&X-Amz-Signature=89c6d907af4c9230b9a5edfe4f56c70cde8575080190d6a742196743573eb59a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

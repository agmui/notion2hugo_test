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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNOLYVTZ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7QJ8agSXejxdKa%2F3kEitGPqDhhoueaDT7vnQv3F4XMwIhAKQqKUv4quZdXOg%2FkQUgjgShVN1CU%2BrpD5ctcJwCyRg9Kv8DCEwQABoMNjM3NDIzMTgzODA1Igz9vlVsTrhhhNkEJisq3AP2JsaWsOJ7NpqZJ7tOFMCKrSwlixIIMABsOhyB3WQbrEp2%2Fe5RRryPNbwXn830RoT6OiY3CRxbhubJ0ymzC85c%2B%2FiiUDXERqEYCjUCm6gCKk7hOIHRmA60shBoaTzJ6Onyq6tzcoqE5eyoru1UsID5JpcCn5CkOm26rmn1kGFDuetyG%2BB%2FtuKEiuP9aoD0%2BfenN7DEJsTkfy9qPJ6i3wXoj2RcwNBh%2B3nUqO%2FbamTzfFz1y4oWyzFDPhKKMhmb5NqcWC7ZmDNd3f%2FpcBnE3R4Py%2F7BVehZU1bhh2cCTpVbFU6htjYL1sJwz3QYncnoW9o%2Brad2Z9T3EJaewwmfQKp4P3dk7ZMD2dEdbSoz5yYH5hNpBUI29YaDInPWspoMicFQscupz%2FUYetS5BQsFXBMTykXDhdirthH6no3EP5%2FbcdWe6nTSL%2BT8u74%2BOODBD6tVIAjWjbXKMoEz5mkoa0YncevV8gHUd2ji%2Fb68xvhvUOjJg3JSew%2FfDBB3MMl5ALt%2BrMS0zJ7wDrRK9xjGKAIMCREZMpgRGGoxgeUWKESFSMZb2FSqtNM2rSWH%2FgSq5UgvPAy9iX%2BjVHjXmlU7NPK1Mq7GvqIsVQcOQpDSLzSbsvx7%2BCkWUNa7bZY28jDd3bTABjqkAcycjCSCLxGmpRFP0RqZOnKT943kcUzZHsHbWIJA7FLSmQD51lDnJdoOl%2FiG2zQULynUwRj0X6oErQxUS0ZoDiMkdh9nnHu%2BEso7zdB4C5Z73JXPsIdpP9T7sN9dxDE7v6BjvMtzGuVWrGzEG2KaAdwwGH0etahD6LZIR%2BNgib5dVuB1cvV6MoIBt1AHCyTUA45WQ5FoZpwaFL2Q3SPRCU2STi%2BS&X-Amz-Signature=2ce68481114754317b60964da98d0ce7749b768de8abb544484fff11964af132&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

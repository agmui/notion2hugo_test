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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XCU6SN3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDJkVFTsoOVmQnEhOe4%2BBqtoaXKr8HAVoRFNnbiVaZ8LQIgQjxuw6hJJNzTxuCc4gBfZaNET4U8mH6X7u%2Flmrr4FUcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDhIt7YD5dMyyipnyrcA0cqeXcLUIcMZ1%2F3APn%2BYjnw6SWSv%2F%2FqlPDUX3ivuix%2B2XOCB%2B2mbN0Qd0qhMjbXWna4CV7Tz%2FMI5wr6YkSS45Xt3neui8BIsyforwizo%2FjxCzxB6rqMlonhf1UW90d7aFAqEeDvPsvD6dUgeYn%2FTUn2b%2F%2FEjUIeJSAI2xGEP2wehJRTCd%2Ff0Kb2YUGenDrZvRkXDWWCblkHq6Rs41D%2FidJ%2F3Oz1QO56qrI7CVYKyu83wSDmlA23jBtO3KPjT35wNdA%2FCdk5kRaDTSdTheYkEIVjlqXiSxHbZbANoh8yD%2FNQZi4kwg%2FztjOBs9FFs%2B7eJcbg8YLy%2B1hrs9pitOkEGRYxMZY%2BB8uYfXvufu71l0Whif%2FUhsHTN0OVTVQbQWxf1nuBOb1cOy3Wa7yrGeYUkAK8wAQ2psUFqN9tsHAFCsPkBxNez%2BicbFdujXnTZw3UQmT8sEJva0ORmnScrcyPxG2x9GFglErmv2%2Bc3QCo1c5Dd8tOxHqQ43a9%2FpBwf5%2FiTopGYI9QUT%2F8VXQtHv8TAwZGm0XdhAKEXmXdU0mxW0CRklYsH1TpryDjln4o%2FlUENOr%2Fu3m9jO7nl7Gpsu7ONx6sB8cM8McH1vSFkMVv3mYWhdqCfBCrnx%2FQYhpJMO%2Ft08QGOqUBaWyUINkWJjKjXScUyWETRyvwk1U6pMvbrrBQw5iA%2FVeSKbsC1wafDYepVoc96l8Nuu1uvwO3Hvo1K5x2St8tf0Ln7uJRar2zNclF%2Flxpwo6xBXE8GN%2FrG%2FIWUTTNpeWJpAHlJ0%2B4Xdq2f5%2BAZaXGQPojZXf%2BBce1Yvn%2FG8VgwBIZY9Ngc5XHq2jCV2QtxCtEeJYzGyNdNuDPhE6MCIwuMOVA4Ibs&X-Amz-Signature=1f2681d84518fa7e15f126a325771e8b2d8171ddde5453afae9e8b0d1379ec4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

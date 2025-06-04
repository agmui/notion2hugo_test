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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHYH5KV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICJ6nHYA2QLiUl%2BQn%2BRfTr0yAnRQAgi7zsFuqW21poG%2FAiEAw2Bf%2Fm0Ka1%2B7Ty3f7MyOUO3qie3gYJ8ynLQYc5r8J0oq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCZm0URRbJ0uHQVnHCrcA5FcBmSGPUhT2EKmXsEmF37oBiVZ6jELdUOW%2FND2h7rvvtPdb6QxKfWFSK5EDRW7LHgHkzfgxL3zgxAzNiOE4OYWUQsxNQ8dewMTWgNkPkYDazPEj5EcODYwCN30rnR3TQo9fRgZXW5qDOk%2B96ePYkV7M1HOAtde1k5aS03OSgTTEGCev%2B4gxpML0cgA%2FHZKbky%2FH78sI%2F%2BpH%2Bh%2BOLQaJtkzI3QHT72K54ZUjIB7e7%2FSW2YcFi3tm5Cw5NtSEW5dBlsqU5nIQYj36WduyDz86WTWpm1R10Defn0OyhXrAb2bqVVO6ues6VKcuYtb%2Bil6BvS9AqqaMgSjir7YCQ7PXlBt%2F2LUkR5AFoosRZI5oFe6eKOU2jgt%2BQ%2FADIGufzLFvKMQSJotS3%2FyvkUtjmuwYZCm6xeJYcLFDy3XeafSVCBXQjljmDt2EyHE0VZG0lhO%2FhfrNVmEQu5UZ66sNSgCJ%2BHq3ErGRj%2FPZkyS0EOJVKmF%2B3MiPYlNLslv1rpfRr%2FtjlqyWKU7ylMZHOMxVBruUpIhCf6a7vO1cmr6JQNXBbGTm7CpHz69CdLVIbWGDP6EslCj63p8IT7wxTzbIRell733nZgzHfURfu%2FmtSA0zvY%2FgH4bJQB97pNLjH0%2BMOuegMIGOqUBCcGPOW6b%2FQRG5FmHhryfHBJtdWOyl5nhx1SXe0AmAxzXoh%2FALsKEq5SYP9hTDGoB%2BbRSGXZDz35%2FflIgbry4Lfc7dzPUxmV%2B4pcxpyBfXWMNlsqW3u0BdUrNGPIK%2BWWct3pRmocxxg6qbEUkbUQqfh%2FXL06IB5qaJaGjCoZL7IepE04xqV3yWgy5yhkLe1tkQ8tTYEV4U2iwMly9%2B0utzgIov4i2&X-Amz-Signature=cd13241e43f7675d9983fcf80df2633b51dcec9c658a2fa15f6c2ad289adab36&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

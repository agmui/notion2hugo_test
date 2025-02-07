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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR62TOJ2%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQChxBBGnXKuMDpGOeTJ6rjBpwkU7kVEtxXTCP7v%2FxIdGgIhAOrkxiFlsEZaqqeFrmPxPjJWOXn9mxus4L2VOBNZQ6qCKv8DCHEQABoMNjM3NDIzMTgzODA1Igz0fBdIrJM8z7K2gh0q3AO1mpXCLPNajfh2G0i%2Fo8R2lGbIMrqiYtdK53v6YNlrLBkeLFwxEGmUlXwe7p2Tio26VrpXWNCYDtYmQWuUM%2F0ASrMT9TjfnxcdyOBu7WuvkNkRPyvGXKvJ5012xJESzAONDz1mFprDqZYjL8in6bavrZxqsk3RlfkHWPsIOPIXHkNuuFsDBXid8nc79gcBrQFke9BokKV%2FHF8E2rXBzilrhXqV8ZRT0cqM8EL1jA86%2Fjl9njHQ52Rc6OZFnd6byh1P7utNIheUzJWsgjenvO3Y7wKcndEAmXZ6YBVkl85JPeZGuzDcmepFwTxCMX9oGlVHR6qtrKUra3sz7TM6di0sOyZ2SezSY2053F%2FSnutNEs7i8KNrc8I8Q4zwMfnAufhqTacuZwjgUrWYv7ItSRngQOdnGhjHAen0%2ByppGej6udq9NTPz%2F%2Fo2349V%2BUhvDU2qn8ZNYiV7jBntJ5JDXvo%2B3u3e8DueRH4rc7HVu1xNXFj22TSCI%2FJsFzeglufSyDjtzvQ5Peep6pkrxkDARqbuaF2KHTmksnEQq47VzIdhAbfWZAE9E1KsxQWrv8P0cH0GdL3VlgjgyYvlDd%2BenPZpDhxSJpV%2BKw38ehe82HeCnSaq%2BZvVaH36HWapUzD5%2B5a9BjqkAQV0HqC8OpX%2BVnu32Vfcdna9I2n9CCrv5y3QG78mUvS9Sgc4qisLKgOJNihS7tHkgknPd7SKYia2oW6nOGM6RFHpsPjKcMCm4fLJ2oRuZOB%2Bs8Mj6hBlAsNnWDdIG3yMpTz4ybgNk%2FwCfalY2VL91tXq%2FUUuxayFO3URGrL6Kbk%2Fl6dR9eX1Omdodn3I0pxyvS7Edqb6s59uWdADPrOENeDHFELZ&X-Amz-Signature=9e630523939ca06245232d4c8aa463b1bd39463015c06a329795f1643a8b4bf5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

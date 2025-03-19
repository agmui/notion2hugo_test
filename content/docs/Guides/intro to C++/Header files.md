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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL7XM46F%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIFJQSZEWNwwL40igcAAxbH25IesRxnPo%2BF%2FJjPZjgKtOAiBhr5b3ljJ4SmIj1%2BGlcBqz%2Bo85pwcbLivGPJu7hKOAOyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMRiqpO1gGCLdWfRWhKtwDPa8zOU%2BSNpMtIhDTjfmSDdonSplaBhkiF8B%2FpTGFDWUWy3nod4vz%2FWZjw1wBnJq4wuIbUiIENJfyYF1u0QxbeXaMiAAg5MieLSl697fHj%2BzYOq86UpQUL22YA%2FfSWvh0Tuw1kSHUcJ0GUdgcFeDemri86sNQPyFUAoaPg4mS3ej4OVmTikmsZM9ARe%2B0WH6iYYaIKv7isSZqB0IiIhyYRDsOjm7x7zKwXboFRj02A6tT1r%2B59HZ2foZHAXofNAlhzqxUUe0BkQPB5CATO50dhHEqjS0BGjv%2Fw%2B0lGgoqMB1ftj%2BeKxEl4SdsRCQmsukQi3UMY9tUtk759r%2BjaoCBL0a5VWc5RZWqFAKSY4zghulkhI07cgUkt%2Fcx6eKRz5RjZ4EcqyaHbeZRMYjwaObzNUfMRi0SXBfp3AqdLzXbD7bVtgyhlcftV7bgFQKNi3D8JIhyZGJKzDKMpT0uUExMeAtNuHo29Vphakn1IXjouzzg5yV0dlMEl6KTuhUSeTW%2Be0uphCVY%2F7yCyz2QmpIrHAFiVc05JFah90FCERhvS7rC0%2F95w4l8%2BaYsMMlvUIEnl6u5T5C%2FSjVtWTiqGb0iqbfWlb1EGJkYpP4OvxAliBBwP%2BAemE%2Bo7Km%2BLFww8qPqvgY6pgHZPd2r8rH5ClCGWLqhkfthdydGS2R5NAuo7L21XTbB9fZxZtTRWV5dm4Py%2BVOmw0V40nnFd0OdYhKxJ1DCklMXLreA02OVh2qnHSY5WOYXmCI8bzW0KrCWxCM8v23QX8NbT2Hd6c424jj7K%2B2SDqOc0ragQR5idFcoPtdaE7C8t9gryS1TBNJ2KDJ0cwCF4WTqvuKymyO9O82Ml4uRcZcmTX3oPSxo&X-Amz-Signature=39f80ca4494bb0779e9d20a825e2f947397f04060c9d24e508d43d4cb1c889fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZZOOURY%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs9r5YiIOEWXJ1wVeCBDM1d4f27%2F4v1xdzZyZalVCKLAIhAKT08rEBsm6Wc1SCd4Ze%2BE0EQzfscOYn0vO2yf1nelrfKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLF0l9BUQrbbFROYEq3AO9%2BJI7ym9m3nlTZLK%2FLFQ3Qgis3GKa6I75oKS%2B9xeti8r%2B%2FNFKvv%2B4di2lX3LsYpUXF%2BexRnpIcNHAe5s4auiS1yuYiW5FyXPGnz2%2BMh80Xi7KlnkX5uZUR4UNKcDroqdLMLRLjKwE9eSz1P5o%2FKbQg%2FGCGnwahfb7fHDLi%2F3pJAr2SYL25fN7iZ%2FaY%2BJvXXHg6mwLqPLxzZziuwnqKgu56Rlt1fT2wTEzu338x9xVgC3uxrbmPc1xtss6XS%2F6Ewqym1I9PtrOrzqW5om84Hi7YJ9trjBHOEEjL10GS%2FuOQoEJKzICuGW4oqmlEYOK9VzlYZPCUtAhaTPdrexR6P3Z0Ivi5vitUpgiRNPwCZPKyUlLFaV3dgAWv%2B%2BL0gJFI0psnlq8YKai7Rj3UVaMCyR5FWimJfWrrpFf0lDWh29Je4VYQc6tZuBwXtbGukfsGktWC%2BbykMb9s%2Bo6m9FYJRBhEyTCvd%2FzBC3IONP1Tpf52Sq3OJuq68fQyeV1StRT2WMHRPfyYb2TQ2ozSVy8GluKVOlAWlavSPzSiWwdEtHLnfNPTDIzLloq9XOCvLCBTW1mCbLY4GEcts%2FNrfTY0VNOnzxdxLJufg4YeY8QVUOaGtcYlFdN3yJioH%2BemTDRwva8BjqkARIf1V0rPCsNXodK6CPlwndeRHBY%2BOSqYGumqDSVHoL5Cg9ikptsdyLT%2BoayemHGymMY2nccZNiaVcKAAGbPfjM4tHaGCXWEWP0Hrmpsb7sLW7KqpA4pD04qd2mPm%2B4nGrwt4mwNK890ZdjLNf7gRw4SJmfR4nSGb%2B3Idv7eNtYwTew%2FLEG2McZGYj9qesGZuYx1P1i10F8vC7PTYC8XWVBH4b07&X-Amz-Signature=73d7bb7ef43bda19781dbb501d5a84ac2277c3fbda5e3c1ddf478c9376290c77&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IM37MEQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFPjok%2BiaExC2Fqy0ylLrLLrUSxCIgM8uRJIjtena7tIAiEA1n6yfRkHsQKeLeMd84Xs1ZGVPCs6eQlkK1o8IzuEUi0q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDMPIfrUmEzLyFZXljCrcA3QekCHG%2Bk6Gf1yd5SJVw3m0OAbtTve3Vj77%2Fv9CaI1PoUyyNIHAA6oDtY%2FET1%2BlonD%2F92tZpxwg6iv%2BF9LIhdZIz22nVZnEA5HcGYveV%2BVc4F5DZnBZN3ax9oE3PVCnzdEtgjV%2F1CVM3ujU9HPyFWaWmD7FZRfFIc7YxMn27AfmKJHCbJbJEABaFY6KYZf2UDYZ%2BcZPRAafh2S5qLozc7mqk0w54L5DnbzLNe3TacresplPoXZ%2F77Bi8yXDNE4SsZ7V1d22U0p58wGzFhSDmAJG9Jev0rP3vi0ZveBgrck8FltkPGSIntXhMd5PV7I8F7B0kdnEEky5CcMwUKYhp36wx8%2F1YCFKb1C0SfzrdK%2B0tFtWGEIpTv7u8b7rFm2UoYyW3Yyh0MtHOfe9SA7xE95jBQt8JVesOS1tqDxMBAg8c%2FoXxfirnIUxmnRK7w3zxiQYQ2%2BJLK98E3w2kGHI7fkLQzaNghA2UM9eoTnewD6B9eoEwq86eH9AWLwnLnqX8Qmf%2FdQf0EAeDPM%2B3ibVYN%2ByR06jxuGocTjfyemjX8UwNaekZsSq4WL%2F0VvaaHyWFeAuxky6YiAHtWRgeyZcCWBOb4KknEH3yjh%2FQjNmnKm6I2HfrjktBoNh8LIRMNfK%2B8QGOqUByxDNI1%2FsxJY%2BpchihSnL7u1vzJGsEJ2%2BHozAQIx0OEI8D9ckJ1vH%2BCbInG5bsPYuquwKnP3MMVqzJcVZ7ULQ6yljV0g70XRQNBL9qRk0mW4fkhk8a7RU4XKm%2BTh6pUD7Gh8I88c33RPMYwMU0R9ABxDQrZSKfyx6%2BoC1D5M%2B3Cg3Vu%2F4%2FxtmWH8BKMLo9OdDp58Ts8SMgv0VTw1UQPzg4m06vYuF&X-Amz-Signature=e9433ce87ca8b9cb359e52bdc5bcc180df68ee20c050559127f3c97e3abbc59e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

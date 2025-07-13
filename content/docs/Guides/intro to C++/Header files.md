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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2E2TYG%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHQS7xt0hECELjvBaOlzsto5dlzpCh3L%2FJeXH6gpWyyAiAL2U%2BMMd5xz7APEPxxSC5XZrc56Utd2WTGqUFgt4K7OiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhFVUVk5A7mrGuLgWKtwDxQz5Ib0GL8j%2B2xvQGVtG1CbhwYd0JVwU3%2FAGL8L%2F3vkXE3x6F2KjhZi7ZNI65c7Fj4yIubfRYeEC4ra7jQgju1slLuxyBIJ1EfIhZM6eLLQrQ%2BexBpsgFEUVG9ALCiEdm6d4A84%2FJa4dY633BWHUrpG7qwGf%2F9hnn4Grstz%2BezV2UY064nbweNvziChqa7RL%2FYkODQZ%2FGunyWemSxQpMU%2FtVtOGRitSmZVUD3OVmqPmbCRdoQvHfVQZxFvvp9QK64oSbmmurkr%2F9gbqnWG%2BriUrXUM4L4o3OVwi1XhY6iW5ZqyhVmuRTL%2FrMrn69JUOGmMkn6ibQEL4fTc2GY19LswSSdvF4fLk0D87jkrRSlGH2GjlcHYP7OTXpT88kNGuMEsZeV5YX14IQMI6u8G6H8ElUyOVxt53mSMZXZKtJaMUldd3iY0u1SozFvLkCJMpAKhLLbN%2FWerSUTbMiXnSbEGmTtkhHJXfWH%2Fj1AwOerfNl0VqB4U6nJvMk43mDUtKjN2dOVT77zGpQRatfJCp2cQvkALiAgXbQn3%2BnI4JN8jloCjdmi9JzJ0h0ds67dw5DGDXVXfhyRbJAkX6RN0Jfwz%2Fh4P%2B8fg5eyGiJ%2Bq6u1Sa8mBbfEkDD1R9Sp2gwvdnMwwY6pgGRANLIrcrrIybOPYsM3pVjFVNmdfGBbB2yVk7A9kd1AxwvqJ72Dr765jxF23z0ql0ugsB%2BNQOgucQaLksvU1QmwH5RGIS5WXcaABdVYl7UaCuLoISMoJVXUBo%2BvGSuCP11WvYNPvevk%2FZDf6566CuudRU3b%2BRL%2Fq%2FosjZX%2BP2Qk5tzKPhAl0OPhlcpt1WcaOdOvLyUGpJ3W74oW%2B0j4vz%2FUHRpqmo8&X-Amz-Signature=9d6c55af99453b57a0fc6c6c8c099fe4f3c07931b5314f12c82f0cdadfb663dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

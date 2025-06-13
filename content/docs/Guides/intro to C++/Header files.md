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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6XA7ZPC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGMWxZ34YgwlSDneQVlF8mjIggOW1JIhXAiIJOOOxFGdAiB4yCQBpXw6wKJyJYZW8X7KRbt3IdM%2FFvWwHCqTWuaDViqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD9nnHncnSSrAd6H7KtwDR3%2Fg4LxH87o5Tt320wGHTG8ddK7GdiY%2FZUwRnyMq2u3HDqrKNiEk7H23IBmgxJU2m%2FCXYyRHd%2FrM8Kxvdn0dfmO4FAw7T83%2BfEPmS7vkzv4zaif%2BOz9tuOQeXa%2F6%2B6sXW%2F4OlLFZ4xuvbsSwDoVJsQ7LLcD894LIHa4uZKA27Nk2K%2BZQ0LdRgQf3y4rtjBEaKk7PjammiwGxoqumAFDSuKg1Rhnd0hU4ZLJeThKleaXg5i%2FoQiJMxTh4GEiFJ64PabjJZTPUeo%2F3lBeITxd4moF%2FMkr9oxXKZ2zIIAHnK0ZGQamzLoQRKLZRI79B2O%2Fy9GG%2FqIc8hU8FNtVV1Y6%2BGmQYSNlzHXelAv7vF5Q1WkEPctkJ7adkgyBe4oUKWVpzKz%2B6TnHm1wmRmmlvu0V0kV7JOU0zgW0Ni%2F%2FqMi6HJ45TYUfr8Y%2FLPMquF3PFXU4MUPdF%2BVSmIhlbeKCR1hkNW1e6JwDJwTUF1cUNewjTRdPRsO97L2O9XDPwkQQZmAJ%2FjH7yqGaC14P0iTRfA8%2BmFM1G5%2FIrzUGvRcECRMy2H6IgVln7YSaMqqBEf%2FA6iF1WmuSdMB2s9wLyJDGJ50oHhC3B79P3eTBsI6IDMziHWO7yK2vKQErhoJZ3jrkw79%2BuwgY6pgHQkjz1z3Wrs7WuxJ69ZJgMPwQmDsG7mClOvkvxCnYd3Dm3oeloBQf0uFBVQ5JceUNgykEwKjn18tXgYzlQEmZSGOTjw4JRy3PM7cNamCPFw5y%2FHpJG9cgiZHDMUsjfJ%2F7kr66OyKB%2FXCihaByqASha6E%2BfLGQLq2Pwio7KPBG8J%2Fvx98o0P5kDPlXul%2B9TyC83g3frTnRXEyyCaglWwGqAhQV66xWv&X-Amz-Signature=23354951ba70a5da6f219b0b1a961f897a5e8a61609a3b477105892d46efbc93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

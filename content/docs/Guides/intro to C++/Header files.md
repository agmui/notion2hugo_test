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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZDOCKRT%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEKDxj6GCk3ZqvrFYGZGBRHthM1ILFglUMOhfXtzJKdAiBZt569SjqUg0ZzLgYF7ZCP0fOTZpXcviXfo4dt9EF5XSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM88XHZe%2BKETvkCpCxKtwDakPFn6fS3YTLdVO5Q91yCOdRd2tbB4HgcBMNB5TZxEvdEaIAN7SF4n3x5e4GiErwGi4eEIG2SaVhH8RLGPsLJT7hMu9Bjrw3DodXj2HWMx5E1boNdi%2FNdNlKyX4Nqc3CuTG5%2FC%2BOf1f6UT%2FB7iFDt%2FmVznuLf0oIl7q5NPJ5V5KBbqcilPJMQyyTGuAg6ELGScNGC6HK5ljFqv3ksrYpGmMndEeGZRQh359%2FQIFDszFPtZmwPo32sulekM6VPSDxXEzRPTRYq5%2FWlX4x8dFwd2rcCL9iNaH5iQxNLHa%2Fnt%2FFT06lZmW4wT%2B4Fx%2FFAn4QMkMi46i4fDyvVagilYes2E8gzS%2B%2Br1BnLhyx%2BFkeFWr34vyS%2B9t4iUjnOwHLi73Ld%2FKgIQE1Qxddn1kxTVCuoOtq9AZG2z5tbQ08c39YItMq30ovWxdSSmak5yyXqBieW1bbl1tMjFoKhnAyEYjXkVkgRS%2BzhYoGKx%2FRtU7OimL2Kry9UHip8C18TOJ2oqFBcD4gvjeKHYXeDN5m%2F3j%2FtYIJkI5AbI45rZGWWpzwRsEze2FKg0U%2B72Mz4P8SImxpqpD1MA68qjnu4pITtyugJ4CGgGdFHXPIkeYXAsYOxPWs9fdCoQdpfmhKGwEwyd%2BrvgY6pgHPw7gjF7Ci1M8M12zOs2y66FUXrLX9u2WPCjxkiqMrPUTWOQg6ZAH7Zb5y%2Buksb2PTCGohozbO01cYyoPUlxXO3jhC9pO02YXtZrFKVsEAwGLYYaqLJMN7SJMz3CKELLsUAwYcuD965aTysp7214W03El%2FKrEOBfcUyN15TeaEE6LHpGtb2EduhLWSK01ndqdA0GiNj5%2F0RJS9h03apIIDymEfDoFk&X-Amz-Signature=63f33eb46e0141c435c2f3e640c5ed54fcd969fba2080a750bd2f917a7ef93e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG7LQM7G%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ%2F3HTvSdFNVnHOCHsEnDHPiaXiCgdIBqg%2F%2B03aP3V1AIgYdDNrxVpA9CEq5DYAbd8WMN98eei5wwP2QMwvAGbSGUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDGP6fgbfOF1iYOPc%2FCrcAwZW4y%2BDOASiq75Bpi%2B16fCMiZwiYLIptXFee4HiS3sVuxgCTAvn7dfxHDM8wanLxb2Wh7jI6WK%2F7I%2FIbUsuSj2EfS0%2BkkcuSOKBNsBHK0adT9gyCyxPQHqGAgVG7F02b6S6xOoldvbvUjEkITGustV12oYrJXjdDejWvwzB1OMyqTg0P2j5jJZrtUk01B5AIu9gO38A9jwlH7wVHmAjMC79CsMzyKbY8TUKQ%2Fd979Pj4X0Su75cZUGWSBXcuJbDt4cP0eH5YD993nIuHcIhk0qNkozEcn34woLQk3DD9whZoXTwq3m4YQfeKaWNF6wqvzxPJDtHzaSqaSZ89bSQYbHtpGXIJcjlHbGd2sN%2B%2FUTGb4DwghOEeq6%2BWct3pL4G0dQjIqMX8Q91ilWC%2Fl6jISHQN5Fov8OzQuk%2FURG0NHkEofvQ3YF8Df1TvSXRKZp4KLDiUSDZCv6%2FA9MQwIH0mcXZyRLeYtZ0cUSTjbExgEUsbVh3jaMpWscBr0L6EQK0f5yGApTpGWiUr7JjI1YO9K22whO0A60YE5sz4gzBRo6zw8Vr72RpdJGwNADaiD%2BYFAomLffB39TENXbKSjnbmwd%2FRXJN1dO5lOoG2A%2BQbsfUa0NFNsDpTSrQiTjGMI7K8sAGOqUBobxWtZXmnoi4jZOEjOzMIWe1iYOjPH0Hi7k0b0adExohZVszEy1AerB8ImiwwBGnGMaLTjTErXSrEOrZIXI39TrdtttGkCXMs5U%2BGm8zWqmBy2zfZ%2F7U9fKw9TnfO7oTmll59vvwjs1jzDadR%2F3ZAsqGdsDxHQKjjvPPOmQ91n63wtHZXYdaVMAirnxHPp17F8MtrRBqqFcPvlEIcrFR6BjDJhow&X-Amz-Signature=3d1a97ec27f56116876493d6c0f02290daf27414b9119174218a9fbe01b57056&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

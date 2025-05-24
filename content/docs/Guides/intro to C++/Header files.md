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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RW2CCBV%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIFeQYVzuBWUU3VFgP5%2BapJniBSxVsgp6p%2F6NLz1X24IxAiEA3Xl0NpP%2FuNVvJVlV3kXax2RDI8TQNwER7gvC9RpSTSIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNe74tnifyhL3L9WGircA%2BHqTKtMYp2dI9dML5qr587O%2FDuh%2B61yWWUvnj1Yn1AHRumP3VRYWYbMuCX8wo6QU%2BaUvGtbO2ZkIlgpk9S19AX7moN5EoWQmrAJvRhhMqI9rwM3ERgEsE6Pam7NfqSA5z8Wkjfyvvye3URv4H%2F%2Ftw3u3yOtlHbvZlriZlqSJylJqKHQ1X1nPNwyXDAgTZDc08%2B9gAOAzsj8Xe98RW%2Fk3rZ67cYCdjtd4AiLCjUfd76Wd9SaZ9rZqwm53tlB3mgLc9%2B%2FN29UUVZIZr2mdPs7r3WHXY2JwNrq5EHhsnqpXcYZ%2FCU59LIgCNaEjhUQfH%2BgbiB%2F%2B8R3nqmezw6TjPkNiQUg232BOYvVtOLJO6i7FujFMLQ5FofsSWEoFoES3V9AiaxQXTXePqzzFmzvz1Qkd844qzxNn3gSrkD%2Bdqfq0Bi8DPkj16WzGkXma2smg5gJb%2Bhe2zeUHe4rzOfUg7ru2kHEVGVTdZqjWKkmtlNOZxYy%2BhbQc0vnYiVze4ujDt8RWm5HjCIomHTyd%2BAlH5CiL%2FW6GSlSEZvHhTpXs8L%2BomPoEHqrUQNtlZ3FfrSHKViW9V%2BV1H0O7GAbyjHytn8rXwWVbNzGNWbgAr9zdmxOtcAs7q1VcHwGFYyR3wrTMKarxcEGOqUBf%2BmJpYGjl%2FfxegawLyZV4Q%2FtZGMA8ArXuQA3Sdk6iQdZE3dahYl7MkrFE2bFgIVj47eoFWZFO8VuZ1wiAFqgFG7jorf95Tz%2F3s8OZfArSfvVkhOW4MYOsxUL6GRUbGiBfhtITLNxE01h%2FhPvHDioiOZKC%2F6DK3QU50N3GWiVYy9XI6ZOkmBAoNLHuvy4ljo61198bkIKZjp5HKmxNlzD%2BVtznEEd&X-Amz-Signature=5657b46d98f81884a01f828eb6ae6d16c33be08391726c9838453b078ca12f48&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

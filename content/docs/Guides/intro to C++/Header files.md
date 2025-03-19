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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UWFJCUA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF6RrdzoiUgv31tm%2FzIefPu2mwbS%2Ff9AVO2Gv%2Fm5UJpHAiEA63L6jYdwRm2e4pcaLQpDCKBjViEMzOvlUe9IxJrBbl8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDA%2BHOI7pS%2BqIioma%2FircAy80hKzr%2FdpAihZcoQnFUKFgXeAL6Bm74m8zQGZHJlRzJRYakDWE7YYIi7gsUykoPaLu%2B%2BoCczeudDMvFcagGBryQIJYK4CEqrhFsWvjB7gqCXBaYVPFr4jxZsMcfN1jeqcNZz1foQNhccE%2BQE0PrKHyIDTPI7ybMomDJRXoM%2FmT9m6PTcVGzJlAEF4SrCmaPtsrdPEgXl%2BN3GFz2wIttPjabJm4j2srqnhRt4xv%2FI5aqiyxJMAWexpmdrNL6bMOjcnr4eYY0dvIiL3p4gwgcW%2FusocNRsSsIk8NMzp52xFbIitJ0BTiFvdk6VG6IXuxXj81UVSFX9SD%2Be8RiDWgQB4Jw%2FM%2B4LLoJE6kvxnNHBVlco4mACigzF2QhiofyWnLD7iSkh%2BZjvAIyv4HkF5GOS89MqgaBN1ESVR7dTsceFPqYl25vHM3J7L3szdGX%2BWeHgcMRJMgrZSjnZWje0%2BSjFc6yLAgEFp8ZE8ItTsaP5JzvhjybwBS7WUmN60ZYkn1WxYuk8%2F0YY%2FexZ75tbXFR%2F9Dfbw0m7OecslFKWJCBni23xzofmh5ptTIumWcpBjYb4U5RGNpCNA9G8gQ6lVm0j1Z69zDg%2BTpy221cPRErNpeP7I%2FDqYG7cVvKZOxMJTZ7L4GOqUBIH%2Fk%2Bn9DxSQ9gFtojvjbJxt%2BemENHY4BIEN3oCnQzGXMMcjMkIGN6N9y34R22H7TU7UBvpeHojkGfbjEQe6VffZxdKB%2FuBfEEKsDnsI92qQFlwSaUtUp%2BvOdUWXScpe2db6D6dRWWlGrDuEPuKATWJW%2BZF1RBkjBkyfk0nGtdpMXica3wlinpwOgxeTNMv3XiXheH2kdA9pSI6bcjuP1%2FLSlHVQb&X-Amz-Signature=79cd7c955070e37610b97d79086b95b8a1d4ea2f81a841d243ec8b5f850eebaf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

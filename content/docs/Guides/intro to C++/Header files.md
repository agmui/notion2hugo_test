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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4LCK5L3%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCcsdBXoomwXzG5%2B2l9YIPCbGdD3ufzoZyKSRBaW6F0EQIgR8dWlAPX5mbNev5wqZBe%2Bv8FRTiwTJ%2F%2FtMdoWNn2T%2BIqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnOhXLGnZjwRSMQlSrcA2minvc83H7zbCX6yKMiEbfp%2BomKjWe9q8ax0%2FMLoFd4u87seEG7OuB4GsCDfDM0Zg8sUPwpNc8sVO6Xz1V87BdKcnPOUzQ8EcW3qb%2FF%2Bqv1L93r%2F0LnT81f9F7WaLj%2Ff9B9E7JhnaTd8DU7KiTL%2FiYFy34SV3OheyJLA%2FS6fwcwmhMn9X%2FQb1Cv7lAMxk6MpGiFM1YU65nDAnt3nJ%2FEfyRgWh1MDS2EVunQbG8a6KW0Sms%2B5g7x0C4OfuS8Ga4yFawzpc74BI7i2yAjyvvvRbp%2BSrH9%2FmUbaAA%2B%2BtMx1KEwVxlwxQyWaf52qiznEW560zcTKu6V%2FKeo0EzdNJFlJLIIuuxT4NtMZE%2BMK%2BGJVOYjpfRG6F70rZKt2v1GXPhymC6MaaOKpGcu2xJmcFKNGEgHL%2BPctlBZOnn3Z9a3Cdbw7yNmgd3rOYfs5vHyuBg4eKNS1%2B1QEDhcOoSJJKccQ%2BaDn%2B%2BBdqbg8kHBJ6K2WvOl7eZ97m7ZfEZ8uIbwF4b5MDnXDZ1FhRcWT8DGgziaZ141nLFBrE3rp60fp0cTY47UohHpgyR3Lktp%2BdOCDBy4BoOP%2BXSrEBL%2Bq8FqInctTvIpgxdw8pg500OBnScjRl68vUAgYNKQrxRUJ9zXMKivt78GOqUBz16Gs1%2Fe7gErjtEYP9G3NwCFlOKIFq%2F041FohklaFto5g4T%2BOMJh85Z5qVaSsM7eJqkW%2FbeJzaO9u%2BwJpnrt75Q%2B9hAEJWa0ZhAZL0u43ZrgOuMQkHfHSBw7abyDY5nOnMWuWGj7r4UhCddXnyJc3fm20nXl1O%2BN9vIZCj2m5mTAMOzszksjXiSkJ9qSi5UZppjfqMlhPs0sXyG9dv0he%2FkIxtjJ&X-Amz-Signature=d90011f97c52ba9e31ad68ef7f874df4fb3132f294db33aadda00c8785a44226&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGISULHD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCp5xTQBik6G%2Fbw3ciNJZbl2nrBBuMtVgTcBoxLMmqWLQIgRQOXW6PPfR%2BLkDN9qwWSZXvuWoYEYm0YT%2BUrjb8Pwpcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCWC0Dbt6qEMJS3PmSrcA8AnjRC3AwroQA6QxrGvvNqZRauhWoiQ8GkO5GGv0be6yI43hm32HPf6R5fDQX35G6DjjNMktfdTCTS9jxOl0Sz%2Flko9HSMPDzrz4qCcm1a%2FgTSgLlZwk3nRNhhf12nKhWCOQA5yGu%2BOwj9bMAVP5FJeKOLX4ouR1Skpr7uf6sO2F9Clw0W8BAyE3%2F2suFfhzbLvk2YY09kZrrZ47%2FdS0Q79QbXYdW%2FTvEzyElGGxxwiiTrErRUAtWJA3WmtoAdBNRNPIA6h2ADcZPCLpkZZOt1kgW%2Fqp9E%2B5YWXbJ%2FnGBdHThcUUrr5O95fUu1NxdcF27ZkO8cl7TyBvfGAL2FjjzNXc4gK%2Fj82PvkwJyAvIVnvSHCistHlfzndvfP8DSJrg%2FTmlbc9YHmX5fS7J99He9AKxHGAtXFnfNdyaOPKbY7ryUz4NGs4qN4DEpXShd%2BH1gMuKhd0GqsNZUZDBop4pXcnhxaSr6zrUPUaES8HtekamMYtYrBVdbbUIA1O2HjJ%2F7AQULENz5NVxi08%2BNjoe05D5BvfrL3KWR7Dl4q44Dy2TvN50AALhkuiLyzag6T4IbUqqr5O8SMl0PuPWAST0jWggpnrxqw06vl503F4E5aBdOYCelJr4RZJWrtsMOnClcQGOqUBX9vqql%2Fouh7KIJzK3HO1XQe3uvx687D6lVv9Oc%2BGRGzkLXwkboTcUUJuXRM32uTfir9E6MQ42SqzEjTlnR8Vh2Ullt2aP0yHBNOweO5E%2BRohxEwxcDEvGV0Y92QfoZoRQl8hSnctdNdbO8GVw%2B1btzGwETyfje%2F3Xwv0%2BY3I0nLYQzBF%2BQ9TeeSUYjpa020r730Q9hJPvLc7mpvAgQoBfrF1aLF%2F&X-Amz-Signature=e401595d2c0fc33989ece763a8ae219bf893662ec0db7dbf2744dec4b43e2e7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

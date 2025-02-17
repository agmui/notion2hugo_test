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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LOXYB6L%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIF0ttnZ98z6PBAMpq%2Bptk0krgyTTBjs2n7YNh%2FxJallaAiEA31XYZKecH%2BXzEVSKShLWq17Bp0wQhZzZSN%2FpXcOd8egq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDGZLfl0aQwmJTmiN6yrcA4AvVxlSFytgOPbGZUIW37T5ordZkWYrMaz3OrIwINpm3SwbVeqib5Q2YR74jt5v4m0CGIZXWREb68AItHs5Mc7dmGbql0AIo8or66GoSQVr71iSesRSTWkmEZP0lNwq1rL6PR%2BRVoDOvnEEXfaPlcL5NjCRmwNlIYRC4VKh14M2nBsmql5y8JASEK%2BWXPtfQEL2XSpeiLiFjs5RsqOl01qf%2Fs9d8Wn5%2FilYWkPkpINEKDu0ekOWQEk2fiGPHrSv6fF%2FiVlu9G00GU6MIBl6Qoer60rX7MuFUCrVtqJG%2BbtKRgvbomBKtmIrCR3WaNSmP4AV066uE4KvSMYU8bon6d5XpHpN5Nh8fE59f6BXxDHqSf6AZNU%2B%2BfIEjCEzYiUF2hD3yYuOfESdKDsZZ%2B7w%2BZ53GpBXQF0S54M38fFkIjMBZc6%2FkxM%2BDazl3etEJagqGUwMO0nGbMlHCDIWB5G4SFF7H1souCh7TRXMnVhGlX%2B5faDWgoOl5uP7szKyREdZ077r9F8cPcNn%2BdpOXrj6OZJ7%2BU%2F9pbcdjHHxEsSr%2F3XuX7Y5DWaRndYFBvHuTjmSLBBMHGSgwgRLMcp6dTzSF7EldBycffKtgg2VGr7vesQpNfoZS3Goqgo03Nt%2BMOH1zb0GOqUBiILOhJSoX5cnGXqVxHB6gfksd7w4TP8O%2FmbVV8QM26KhDmZtfoIRNgbDZMz34t8faSic7qejzRy%2FBk8jQajRvOV1IjKYT%2Fmtt7CHli3JYJSizpcKxkiGf%2FRwbqF5Kb1gmqigkGL94RTUUHMw3u7Cg29xQzdIJ2J0vLEdHcgXJrDe2s7vJLX19ish5%2FwNGUe6fwQ26ZV4n3tlHTwf8YMiVwtKXybW&X-Amz-Signature=fa0af6b55f3a682a58aeeaaefcc77fac2008fa9ebe96f026ac14d0bdfcb69bf0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

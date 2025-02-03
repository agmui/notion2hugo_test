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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWABVX3%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFwdPxw0YDgv72Y4QKJhFl%2BfMfDitNC6WiaOPb56uSgAiBqeNhTUyCx27vEo1%2F06ML2IAeXQFTeYRfnbjC%2Bb1Hubir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM14axaz0cn8mE09BoKtwD%2Fy0FZf%2B4YKLonuFP%2B5aGD90%2FzzCAAm6ec90HEpZj0QjDDs0CtrLGyvJ3lpnvHprihlC9YfxMVMCsKuezTCoJz81J7owUvZwEojWPQx1WV%2FJqos1bx9dRRJ752jI1Zi4zonm3rRZ8xnJZ4Qjoc%2BQtuUX1R6LXbNFIHiYpKaOVu9%2FeRpWb%2BNiBVoIcrPp8cpRdNCA7cXhWh8Yq92QK6zzk%2BU1PaqEQKYhio%2FwUmiyemN%2FJpY%2FLIPcFnPJT%2FEniNmPjBvw2ugtTdd9JP5wt5wj3XshiJ5seqF393U8wI9zw6%2BkETHNZWkk9PCLv2PcOF6HLjmc6r5NIZb4bMt7wrJuHdt1xLmLgM7yJvPLc%2Bl6gldTu2kVgrxwuLsqlf30J0tRzVN12S5CI%2FGpoeg%2FShvHYZUA8M%2FsMQOPi3g%2FAJMyqkWQfzpy0NdZV3xQyY5JZ6NrsVtVQSIWOudZQ%2FKD5hKZecrG2Nd%2FQxy92e%2F7j6Bcqohyg1mVfvNN5Sg8dQpTPoyIaHr7wLEVzOy8bWUxJMTJhLkCcL3U3XF3HCQOipcpxFWnI8V2RA88%2FeMzqPVqED6Ufi25HuddO81MGMP0K%2FnkLQN%2FI3YwtGoVo5xrvYx9oHI3JfyfCgRjDqv06q8MwuPSBvQY6pgEZHzTdE%2BpY0n8SfWLYa7uc09bAtNmoSpcgkjtiUBvyYhcICXQvYDbHrdwJXNv65wHC%2BwDHEQ0XbefJABpcEQkn%2FxyBpwKQC5bUSaUFdWS5c6qoVGNioaoMS7b5u7Mn0chMMjMM6A0SQmvGq2w8TfHx776ZWUI3bgIdcpqeCQtQkAe6y6MjVCUwCUaOdFKwT1E4v1Cc559pkTP%2BU%2BaPkT15qBDU0MA2&X-Amz-Signature=45efa677e9d6d864d443db064b359b9b46e06ff3fcb9ce3955a9a9df34c746b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

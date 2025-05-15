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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653ZCQKWE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDaseLbCQS%2BUF4EBnYe%2B3iBLsd%2FBFCFJ5HtSvKwn3YHjQIhAJX2tRs2H9IndWfcedPHgJpZJflZLW29tmtn0Afgm8dDKv8DCCQQABoMNjM3NDIzMTgzODA1IgzFlAruO5P886TsDjYq3AMIsEaqqxazcVZszjnqnbf%2B%2FQFxq6VuFy7XpdF6bvviToNSKQObY9MmoHzrSbm5cM08iKvVzNW1w4arAuFHuT%2BsSgb7yJIV92QHtrsU%2Bd66sYfAmu7aIZ4%2BbhMC2eELZ5BPveTdeGXEc7dAzR%2B8rqW4okVK%2ByHtEh2mGNRIZe7hAIiAYcxQrjwx5SdNZYvn10B9%2Bt1AdB4Ol8KaflH7J6Hz702zjyAkgLxMMbVsTXxx6APAU8BZim2Ykq%2FfEtgoWOYXlTQI0kSpEKE3RRSUxrzB04Eg55LR%2FDywI70jRCq%2F8%2FnIJV3fkGMDCmA7WI9LIW%2FlACe5i7pMAEx70Ul0%2FFTjO6GBCD8V0pfb1fIdEuEIRiK4X%2Ft9O2INhe989Bfmu0a8FlcusJpyu1N7iZjaKSv6EX%2FMeJG4h5SeW089%2B8O703IlXBfylX7%2FW4jn4kTlnM6TH70Qesbr%2BkBM7QxRsnRgvOv4fOdBVhrn1MeYKAoOKkrIVeW1ko1gx9hGybCCWUDEnexwTeywW7IdrNQSNh6oXc6YLBum6ym%2BoPBLFzLrr9kpLxcvkA32cwA%2FABATiLN2nBYMTDkCi8OknhUfJAiZiVHzr%2F1%2BnBm4h9P%2Bqqv1gS%2BFoTmoOH4NbBr4CjD7tZXBBjqkAfkohvjo5cRGheruSKRnKSySjq%2Bp9gQFhE3kXc8%2FmElm558L1LY8p7Gy3bhONdfwRay2eB%2BRAMfnLwSSY6L6fGsG6J0h2aX5%2BTK9sSHW0QKxa7257%2BKR%2FeavKVXJ9BXNTYQou4J%2B9e33pI2S7e%2F0B9QVFxCXc7FDD1s5dXTC2JVLLeXb9OeeEEzHHZihR6dzNg%2BN7xRG205hDzGEgGoXULrrha9Q&X-Amz-Signature=f807816de2cd2caf80c98ce9301cb2f859928942e9bcf7486b9956dd3276c72a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

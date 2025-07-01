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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN7TE2BY%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2EHgjnZAnwc5Fc2sKX8kbV9xF3Y370GptrmsqZau4wAiEAxSuGTzSnfyEJCl7VHXsVEkm%2FkEuIikaKDD72dBPAMRYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8udZWikGSGuV54JCrcA1w9%2BOCZHSmQw2B%2FXVc1sYPy1iQ4ROX7UgRYknsurn7wuJc%2BUewYvrPntjC4i%2BQKZhJkDZkCGR5yNED1DXMmz9reFeTfmU%2B3keXQ8LTq88fKM3%2FbANZTLzUDwsZqETR7RW4suAKVQP82x%2F2S6kCfFnMQQ0MplhltwUXzRVdpeT7oNbZLuDqm31NfLLTdaQDrRYhjLcApRQHpX%2Fz%2FfWCC5BWdTol7mmShjnsUFRUa7V88k9QRrTsmXeFpwWMvt9KLbLaETz6eyJEYl%2BGYWoYcXYJM3KXWCteCGLR3btA1TNHD%2BPdEaUCFcL3vLYoH8fRQz%2BV%2Brhhx2utrW5ezXHcQbd%2F4lh9WWfScdn%2BJ3Bp4jkhDSjE7Ua9N%2B6HbhuU44OOe8QlzXSc3GEoooZKi%2F0RulQkYXgLvrr32NtmqX7Sx0KovywhMpFm39f6l3szOd959H7bQ2%2FYwtMleEHGZmrwZcrHcMYYuuJzBst3%2FTtIb%2BEytkltCZjVPiy3Pmgguj8cMOnqD6KJi7vKIxzgfYzlh4x%2FiR5XnnqkbtrjD%2B%2FmVaEZ6c0U74%2FXo0dVYwQYu8f8cxWbuDfe2lr%2FlsJucaQxdTFh4lub%2FAQhpL1FjuuE4qkD5VsLojrWXkp7xUGGyMPXDkMMGOqUB3TGS9%2FCEEug13NN9eU7j35HXJcUt4BAFxCfHxqcVS6UPoz7e%2FTKZmID09DxwmDCQK%2BQjVx9g%2BoNyOxSnWkyAzjaDx12shmKaK3tyiSkQlalL4jKqY81%2FVW5TxEVI2oEF4t8PnYO4r%2BsfHyHaA9IvT4n5nn%2F1o4s7WtaciJ55w66OOS%2FC44vMlTZQZg0LqDsGg5qmUvF37T%2BrrmiaQl1CjD1tVSho&X-Amz-Signature=4fc64896759beb07ed6e17fc19526e718db666f8eb40d635fc3e6fd31ff70839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

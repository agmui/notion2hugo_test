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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAM6XOR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIBj2DR1C9Ui16rkWLG%2BDFE3DrE9g47hzv5ZePvMRWHhiAiEA%2F7DuKr7JalD%2FKYQJ2%2FOBCSFqE5PIJ3ROtoreMYUMURMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCWRwtmkrG7m71ZuSrcA7EV7E7jfMrKrUqZsJE2M1pRD7Ta6G1lBxMz2LWaCOU5WDUa7y0tagIcNNeGmTapzrW1vabINLoVPTjW57SEsYqrjqzRbK%2FofFq0ojrrm9rbOtYBwSVDK2%2Fdkht9%2FIZsfyqw315YRznKYhCJqZ%2F0dYjFKd4RqWP8TqJIunK%2BN%2BHmDNwin0cfpdRI3FxnMjluZBXF90YSW6hO1Cv5EhX4mb%2FGfRVVfa5xrzLFvhnj9znlCmmk%2FvC5vfuYifp6BFc61KsBftlp%2B5xuvF2iDLdBRt5ehxedaecue%2F23ZdxlhrrtIPTE0zcQGhDkiE%2FFpnnA0cWct%2BoPAABr1QreLencdAxO5p0%2B1DWAHDWJdWGVAnYtEFW8nPiFQ%2BjjtiUarPIBZ7vcY4UW3dM9uMj5V0LnhedzFv73RxQTtbWWPTm44abJ%2BlrnsuqJVlGFoiwPJlMatyojvzSD6SiaWEO3zfmtrolEaP8rMt0xj8iXefw2r240B0jlGFAlAaRiehu7RPcRfWL5HmA6VN58ehvm5DbCImMXv8usy%2FY%2FWUtzjyqboG6DHO%2FhGlS0Tlyi6cxBam98W1JFlUq56EMfcsIPPUOTnta1Pc4QxKeaCr%2FzrbkYW%2BQWtU9803pEOAV0inXGMMKOv74GOqUBRtWjcqS3ammy9fvNdALG4ux5ihrLf%2FAMsAHc0U%2BjXKeUwDQ2Pi%2BuhOA1KhMd67Wi6TfBKWGKRemeF4ZbySYnXNumB%2FyfZpOCbUBImIbkk2%2FXrduRtGQY7rfnRmKN0nGi32%2BRlcaLhFAuWcrfBuVZM%2Fv%2FP0xyAi7JMUI1Fp0RO3vlrB2WuaxtUVFIOWxeRk0MawW%2FkqkAozO%2B%2FZofRwYJS0jOqQUC&X-Amz-Signature=3c4d8de69497321e80f8ce52a42d6ec7283c97736a1eaa5072ae7a055cdfc9ae&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

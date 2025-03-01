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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FY5TZ6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDeaHB3vQ9NZAYOMXcSYWfrosoaJctcKprWeGoOYrBUFgIgOQ867UwPgAK8laZahTC85dQ2V0hM58BpcbzpKCwLLdUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU9lpOB6N4%2Fd8zIBSrcA2PmWz4TitqMsP5%2FDptfOQDBcgZnz6Yu9N39yGGxFCblLfh71C%2FawUx54WLnAzU%2FMfSCiDNwad4eKvwfzYqi5EzcFcT84DiysC7kGJmDq5EKXePVpp4nXEvY58mtKYEVWhkdpZhb0CVbHhpP7d269Ibh%2F5pTStLGCHDpkGygoHZBK3nED84gPXp8JRQPwlvD1o1oYBL226TQzsC8FapL9x3huVh8CTRnJftL49hSuJrJpBQ1tqdJ%2B%2BpZ6oLvQHHQnTyz8BjjZaXbAd6OAWwzPV7sbNV3xM33Py4a%2BsDf9Etc60WdbTPKFZALkAkzsrTjkUtkqaliMJ2Z9cFYpPmdFoGvH6mSPFgpw1BsH9mDkaM6e5HUNg62Hmj82L8wH84d1eWxGUkqsQ7PSF%2BEznAo5b06iuOmLFUh5gJ%2Bp0JmV8QFJ%2Bu44v5zXjQ8ZX2ittHgee4OGKr0GNyuf5WFRoeapLbieDG%2BG%2BIdzgINW2Jk9p6BtrvR7Hkx8v4junrEfegSV8bHrWES9Wti3K2kTMZkEg%2Fk3ERnQl4KF6LjS3CrqC1WC3x89I5EyDmdpv7FgXYyQLQgXtxOwAqsUWcBofSi%2B3g63uLrqoZd4LpAWTH2OEmEKJjauIZv9A84IFsrML%2BVjL4GOqUBklbc7X0av2PbAy0Z%2BGeRb5eS%2FmaL%2FDWY%2BpESHO6IMYj8OctX2X%2FcG%2BPnDYvZjeCdetZ8cOiuffBx17WnsxFeP5Nbc5hEp0ah2%2BkKgbZLVWrJLS3i8uIdfGsu7Jc0uyjh1BNcp%2Bp0by%2Baj85HQ8FMbV9WpMkNznWlNPj1xTlpx%2FGrKSwdYxyWetfsAQhw%2FIWjTAw6TuXbwUMvhpQjZR8Ve2um0gUi&X-Amz-Signature=feb10e94e63178c337036755e13bd9026ef6fe2e0c808b85336724d78dd5c28e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

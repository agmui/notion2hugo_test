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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRMCDS5%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCXsLxTSHGgzbZRyiQRVYyI3uh1c7uka6cY3SmO5CJidQIhAJxaZiepFaTKGZwmKw1UHHY%2BqANrwzPkaFT20H%2BAhZp%2BKv8DCFYQABoMNjM3NDIzMTgzODA1Igy66iNLQdvDgd1ubIUq3AO2giXIVxYJ8%2FryiKrLytu89RIDLvD%2BLAUPT90nbKflUpkdZegjJ0B8k2AO2eNKRTGAXcT39LJdbabdJZxe%2FMu9XSe9bKgcojWJv%2BYARbqyuBR9RcajgAVXm6BLE3lU4Ma2zVUbhr%2FQymjD5v%2Fxo6%2BQAfGsCWNHEhGsrEIVRJmjkXXQI%2BWTz5ZfNQOwAN0YmslHhZ%2F1LLIgwwrPJmLDXixaRkv5cm2Kc0A7Ssg0QHjSu1WBb2XpL4Ax6ol8gbj1ujrHCxhbgf1hMGBX8m0XqODhrvSYE4O7nR7uQOCFMI%2Fdaspj%2BTLsCafuCxzS4NdqfErIJKasZGF3WKg61DNn8T5J2XeS%2Fwhibt1Iv11jWVcM9BrbKez%2B%2BgC1jRqwC%2BtWOHzcBFPwj6RR3gON69yT%2FS%2Bio9dssFGeZwM6u8Rxps7KgSk35C4etGITcOIu9m1zwwJ8zVxWloKSbYbY6DE0iQ%2FMujsybIwYiHdINtxpLcL89xD0Eb2dypt%2BVMeVJWfpQKVclrrwLggdfwTAAArbYEBna2xdB78XF7pdQu7A0GvhvNTXGlLfS%2F1XT%2B0XjWt%2F1HXN%2B1plVV%2BXEvgAapH0gEHNqdA%2BEMevr0LUQaabD5IsAjlvI47HgBWbh3azHTCO3dzDBjqkASN7qgbtOA%2B2jjNFgAf8eFf%2BdcILlFy9V4gTTxX6l6EcT3BjUcKnCtmn%2BjbUdvOpwuYLlC%2F42jto%2F%2FiEBlZRjxwI82qna4hi40xT0HrNsbKowmpmhFC%2B0xMjg4Iy8mp8gwRm%2BRXNZXxXEB3ZbMEtZ1X8WPOJAkWhnGPD%2B1qKf4bT8f3rul87%2Fo8369MpUFGrLzV5PEBM3eOGSWo6yatlBi9Yjkkw&X-Amz-Signature=ded2247b7b4336ca57762af3eacbd7efce10043f2b6554df47f23c3d5b490cd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

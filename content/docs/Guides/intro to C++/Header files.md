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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MAAAD4N%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCsn7XnpMSu0Qz0pZNxNaoC1XI9w2moX%2BWUBGGGuCVLSgIhAKuTwhvYA5H9PTADIogEjCqptlWGds8tKAWQv9pyTjykKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBHYVqjPXQ1aPEgdYq3AM5Qt5sp6ApxH8j2pk%2FvT0RR6oz7NVd6wDS20tF1BsPwxciZaWZdXVlPnJt4REnBtN9F6WJrRzQHcwqhZqbXWdDySTqiZ6d8UfgQNBFceimY3lFr2fgqc%2B3Kd%2FnK2hLaXYYxWLJADyG8%2B1DR3w4Ul4pcOZoYzumyaqOvnhOLVHoZ3ec1ogb9oOFoRluEGKam5f3NlLhI%2B6bOb7o52l%2F30DTAvzuLVrSUvfzCLeoKco2M676SMHNwP%2BipzpdibwsEivcp4erUADac1QgBoGZp%2FyCnTn0JoDjeJEVYb0RIHWWAt7qp0Z77%2FN1lOHKlgMKNtEKrANVfA%2FxelYN%2Fh%2Fg02IkKHAVPPOGOM8d7ghaYUJSntOwRl7Pw%2BJDK0r6293kDtSV7ksHTvdYgLbv2ccMl46rPYcEjC0SrHxsZJM0Y8tezpFw9GKvsGTD7PctgSfiGXQmIQx%2ByrTYONruxsaxRRiOreYF69SXiOq1qCgLSh1ilj4kjPJITU2jIGzBDfFAOEV46SXdifbEso9zExfuVjsgFS6tAggo0UFFApAD%2FyGM7j8GujyW2Djb8hxSyllNRptPvFmTs5YDDl8GYWqWyzw3RuWhZ%2F93kstbURaT%2FHuPhpst5OMNvodXfsqeozD74Ma%2BBjqkAeSj5E0Unonaj4%2BIEu28WtWnWYxtgHAlQB8Gz6DoQsXr19xNZVBRm0Qz3rMv%2BYg1hPYF3hm2UDLLwb3ICDZFmqCEYjVrxgtT2LviNbbjDBuYhgu6%2F2l4HWTwR%2FF5grp%2FkT%2B2Rq9j54V4iKKfrx%2B%2F8O5X0ikTmB1xad39QEolh0J817q0GL9PDx1vCNpxpMKydf%2Bo7NnzoHQ3%2FULcceH68llzM0AU&X-Amz-Signature=0671920590024cf619debacb247fa615daa3e756ff6d76cc86e9af177336f038&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPPCXQ6%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCszherGp4SPJCbxZwBCCtl6t1q5fcVdbkmif9cPuR1SQIhAN0XoWlkeLQarzBirQwjKLWuY6DGsvKo1EibBAxLyPzLKv8DCBkQABoMNjM3NDIzMTgzODA1IgzYsc8NT0EtTOA%2FBX4q3AO59yXLIcBlWvteh5fLAEbhOlXHOkGv14uA2koD%2F70l6xICa%2F6%2F%2BISuonhwjO9H7ugD9QDOD6pfkGqXuJTCqX12eZ7fuT00WnXiSQ7OfjWb557CWT6Zv39Xz%2FUBa6%2BBqjhyxLlmUzr%2By%2BC4G%2B2ENZSAXuv%2BGRVnEloJV%2B5wtJlT4Y5r1tcQzTb%2BLYkYA9Dkf6fRWjHMPzBLmyvMe870xb86d1nqi6QMJFcDvJOj1BVr8%2FH%2FmnrstF8iLHP28We6HsJY1J8q2JJgDOkn9x5A%2FEAzwYQ%2FVdu%2B6kQ5P5Jx8rPGXTAlG7sG8PEEhSlCMdqux8SrHBA8It6ISqQxNiGalqCsXTXsRboxc44E%2FX4s3r51UtBf4Mw7icWwtL4OF8vgCqOTL4%2BccHyN4Xae5Q1eHltEiBy6FXpilsFme1C4SoJB0eIvCivpxcdLEOFdQpDv8hn6L%2FYCLgq6TWjD7m2GHRZhEV%2F2n%2BhJogiAHFWreMcg%2B%2B8MpAY4aukflLWJKbXW5o81DN0Yl3T6FzSWlZorfgAjAFrUQR4uFbtS331jKSb5EOFAaOghyPJSpx4nqVaSeYEXZxQLK22e0s%2F6zy3Lf9lNfblB%2FKV7tdvmBM3ks32AtxVSz4F19haP2TjtozCbzcfBBjqkAcB%2BqYBY%2BcVgMbsb6xeXkBDxpTex5ijqPHNXMFALuJrlOYjGcAtipbfbQJDX5g8dguicT6UsoMLtwEnzi0cHVHAfscJwggZVCocauNATnuDc7iAAUa5nnchwSwXKK9Mye8O8bMI%2F31m4oethH%2BmQT5CKgyghnJ4f%2BahsiS73CCcUpLLtkMlg5pMiptJ3adgAYaYzcmG1SFN8GQTqrCsHW%2BjWtJXd&X-Amz-Signature=73327b91084782f8a5b5d43a12056dc6643003a6844c69fbe7a6417dddddc13e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

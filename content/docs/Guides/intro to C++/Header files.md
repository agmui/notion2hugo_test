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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624NAPIVL%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQD9xr83Cmm6%2BeYEZXqUc7F1fEuV7VruLx8ixe9usa7DQAIhAPcAwnm83LAZUuLz4bV%2BJg9tnXxL8MvC4724W%2BuT5lphKv8DCEgQABoMNjM3NDIzMTgzODA1IgzFzbELf8aWHOevpioq3ANx74FCPgb0Ru4GIbJY6edFSVzgweqcEFWeRKUTSjDCfVzvzOac0qkXluFtYULE6yCxZ%2BZrN%2B%2B%2Bi%2FLOqLrwlMe4DTyKybtF4PWAkOP0UKvXw39MHHVWwRHDX7fm47e7HwpD6dPMuvQ8fSbLck65h5BdZUZcq%2BNaweztePElvJ5nHBoyo2y7yJRRrjUsqAPkAt6hMOF9urTBdesJSYqt7ztlpVWjsHiQBQuFuujv%2B%2FFJLF%2FVWJhux96FBVzhDsn%2F15Gi1UK8ltVvmB%2BEIdDOUeGqblpExb0zBIHbm1YoaoAyohFk6yrdb3Ib%2FneuQ4oNyOK5uPSrDfJEsTP0eIsrW%2FWfau8jpSMRzPh4ybMc6fbIrocarDtB4MKg2NKq9khO31KkwcTDkIbz4sEh9oQmRiw8shMt0Xcg%2BE%2BcZu08cmCsEOJ4nHGVIwRR7txbre65zi5sfh3z6exWEJTvzkKCsqyEfjQsTVEXt3yIV1rWRAOm2kubSmZ54fT1cRtJFmuPULFtX%2Fay%2BNUJEQ%2Fjgbl72qs9hKNvvqw2FtP3z53edDXNObnwnh8UEdJJddZCbpA%2FoukkIpc44JqRtDfC7eNDxPQ2A3hHSX3snGDt1shE0QM28EI3wLXyt%2FXWO5vejjDU2tnDBjqkASzFy9v3yet%2BPZlgwjIU3W2AIefBeNdOd1lfkjXjvrclyHO0COvjymVDsLuMd2Q6wypaaGkT3fud%2BOvhDWXYq9pqFjtT%2BN4FMkfBgoQbVhMoJmvFgkc%2BUtWf9I%2BPz28S%2BoKK7bc%2BB%2FTjI8tqTzRRgurEWRQLRzr4Uj1CkH4jG%2Bkj33LDMZ%2FlJ%2BTrCxGZHQtGh4QuBhBaY5n5ee6oqmqCkq7fAn2N&X-Amz-Signature=71a953ab779bdf083e3abe3df8d38aa50ea6e01e7bb354ea3d48f51dd484e85d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

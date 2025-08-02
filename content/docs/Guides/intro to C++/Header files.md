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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNDRALRF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID404IXMrmBLPjrwVF6n4nMEG1Lfz4Anw2GhcnGQ0z98AiEA0KKv3hYhqvGFnZOr9zqfXfM1maCfvxtr6MSaAEIQjnIq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKwi6NCsv7RdXwk5nyrcA88%2F0O0jHiwW4%2BaoRsYnHsziD%2F7nellVQJEmdyIQ0GXsD%2BS30l6MySW788%2F4ScKWEOvvW%2FDSF4GF0zOHeuxm6Pd1BmBKe9YQmUSwhvUBiMrzC7fdUBuL4YPhawwEeLW37mKtK9tUt9ueEaEjlHz8x%2FTPLnyMjbXMnndtm64hokooIcb8AfuYuo7vwNv8okUJrwwtgKk%2B5weqV5XmyvUXvG%2F8sDwmwqwtn3Xn5rrguMh3uw7nMZh4AJzV2x2aDEo%2FvI7dRBh%2BLaq21q3Ds8lKVizdMw9eP00RqijRHM0srxp2wusn5fagR0u57eOe0%2FRJDOvrSj3rqT%2FGvoh5wMOOoi%2B6VFr0jQ99DRqu5o%2F1zz3X9KUlHIS1ZhvTEFJN3mUwKIKZnQMHr0TfrvJBJE6x0VtkrlnQCMFbxR%2B%2F4r0hTfDG9Tb9xtMgn%2B8VMURCCObMfO75okl7SHVcu5zNSbiXHd33V%2FPnQr%2BGdjPiWf6aKzIArCUryQ18iKApwDEL93CDAP2ZSjKSHeTJWrW498AyChqJjoe19tId548cKAtB72LONl%2Bh1yMqriqcNKPBBWpbOJmSANGmeYMrQr4eZfI16Lchbb1mNccyh%2B8%2FPEwLTV%2FGlyCwLpi3Lx%2BAmijkMJPEucQGOqUBqd3YNIt4i6VVwrda4CEou8qRt6etZCa2GDP4csHjD74qFxHEkhL6qJp4tjP0QMRo7i2a9rbo%2BODYsjZSeFf2K53hWvfVzQ6zBO9osQFNLVzjvQNv33EQp4%2Bd4TgoVKqekr8MpuZ%2BDnshOof5oOgAG62qZshjK8qL2%2FF7Z4Wj5WAz%2FHhxvshVh8skBm6VSbTZexZbyJW%2BRS4hOFtWdWBjSoWVBj%2FL&X-Amz-Signature=6d41a60bf848782d1fb4d600c9e2c961c274462bd007631ad8e2b7e744549bcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

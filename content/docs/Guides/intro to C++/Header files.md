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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ADAZOHI%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIDZb44tdJbV3LbfgGeC748Z8qcdEZPZbrCVonidLqm7xAiAmrT2jdmuKE9NYhyiw9XCrM7hKIKLvqmgVqUWQmMK3Dyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMqcncOOGd3VsHZyy5KtwDQT89zuC%2FXJbWdqVNKrPyDm5b5tKWYi4T1fCwYOW313JvzpHHGGv20C8hlJ7JIcO177FA2UxNUAoIUQVldt0UpLKLxHyUY31FllQa399ZWzqITlv1HZmc63CUaaNx5FeZSdpgi33AjnnU9TLoYHWyAULOV5yUCDBqDgG9LZYY3lfJJAb6%2BDug61icGFXm5LxgOcwfti4YnUOFapoqQ5YVJd6V7S6OCdFO9EPOiQrOV3XsC%2BJpQAtrTuDlzIsOO9ct0YhkaA8l%2BnyblLrkt4asvBtq50a20xEi%2BcWweEbZAtxgV7Xsb3N%2BJLrLEcxZ8nwtUFHWxY8RxLuR7nyR7SA9xQuOkZlniCKJSOHS93gOL4F03CaFIAGDzeJo%2BtMUTn%2BSvbMbslUUK1ED3q2d6XUGJtbAZ1%2BvQAKL%2FK7VztcLyKSHnKIBSDme9GsvPac7OuUHKIB07fgwPmJ4edYCSs3UCJGMeqB1L%2FzdowxAe%2BIQ0nMYdqiYCEWU%2FzmvXVWy3SadwARbEQMvIVdWd4lkWRr7XpwrPjYV15avHhbH8XK4k4ZWnJiUjQ3bY29YBL%2BZYJuYgEilzjmnZrHft80NuiGNW4yqDBGifjhn8l7%2FttGrEt8La1%2BJUBTwLgERLDIwq%2BigwwY6pgEU8a2zmkSqV3wf%2F9Bvsu4yAKFtAy8BVp8kqt1AKUPyUTOMOmIdBGW0KrStLKuykiB1xgtA%2B8dafPMfYhbNfLAn8irYYyYk8%2B6sQv89RvRcvvGCf4R%2FguHxhybT6vbb82Y4kg6V2PXEVYkfmzc644pBvaQ0RiNpAtEm5v%2FYNqxV0lORNnelNiucupPyPTZycPSLThaw%2Figbpe03lJVkbWCcskEP7pBB&X-Amz-Signature=f27d5027feb4a7b8a3cee94867ddf9acef319163d5936bc27488fc6b01e47deb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

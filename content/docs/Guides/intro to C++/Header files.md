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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UECXTUVM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMm0TjBqfskXYxWQsTIKuEygcw%2BCZh%2BA1CiMCr5v1wygIhAOKtd7%2BKzZKN2OLO62B8vyUQPE2C0Fh55XLTx%2FPSIAsKKv8DCCcQABoMNjM3NDIzMTgzODA1IgyNZ4WkAi2n7Lq7RBAq3AMcEOGZSRyHcmr9hqVVanvBi0d0bFVmQxn3ZRqK11h8V5ul6e9gEe4EbazGOzwuICK4BsorKg1F9bPZ6Q8maHlxGG1ebPzeNNX5iH9aujkUdMmSZqcgSxll%2FuqKOgQ06ecjmOs0oFQYdExRs85nV1uCYauXvLr%2BgFbf%2BaoomE6MWfqP2I4%2BHd%2F2xehVnkBbCRErdnYA25o%2BYTO9SZO7aL7Bxne5N9DEj7G%2F%2FQ8FgQReFTt%2BKpCqIMOCr7JY55e7WC5nQA7MbYwEKjEs2828hm4i8H%2BSrqyhA73xcfikjhojhhJz%2BzoFSCLYwJ9f%2BnK4ei1XJyD66JVI2B7Zw6cSy10tYoFc2scmfMrW52WoqDSdXKvIDDMKyfni3V4lGqIgTZbXOAIBAHhzTA5MH%2F3Ml8fkLoXUPYp3%2F%2FmK9kV54IDsAC5gBLNJzP%2Ffa6vhpkvyDVK%2FZASPVWWaCvlAdG6bKCJ3aeN7K%2Bx70itqqgGBVWZkb7ZBDImxOu8dc1s3q9rRLVUmk7xOjOV3IT9Fx5ep3a3be7W5%2Fgfrn0iQPF06ogrCVjMoXjEGDb1%2Fg4YHSnkUB2W2bkcFYS9dhz4cV4vILSO4sQDp3yCvXQ%2BDhyXwGUtWxRf3RFdh1ApmFgl4gDD30PDEBjqkAd8fBDhNDi2Kk47ugUkraqW8MMlLRjg1TE4%2FATdYFL0%2FdOIIXteEJw1VPRUhCMLIyLXFex0S6D3MN0PpJQPtOaB%2BTZGyA4o9T9hjYfARgjTfz82dVpnjjCs2mzZ2Y%2BmffjZTqYQ7wGSp%2F%2B5eUgmhne0BAvYErV7lIZUH6riosXEF4vtdl40gjQ9e4S4onLvU%2FhHmY8H0xCeDWOCohDjGLZrT16Vg&X-Amz-Signature=ee2c7e59020760a29f7d331335dac84f5b9f357aab7eb3d9493b03db309647d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

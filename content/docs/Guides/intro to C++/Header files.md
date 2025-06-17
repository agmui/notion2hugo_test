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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636L32Y5W%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICt9JgvCQhOW2JVGcqkdDUCDDV4iBsmxqqjmB%2FE2PfxyAiA8ojm5RUZRDNkCkzRkZsErLUQMYkHHg8uTWB6mVsbIryr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMJR12pWZfZvOwS73AKtwDiSONvqaAqv%2B4GaswYZB6%2Bcx%2Bn7VPJOjjM3YtQ8Ym7KXBF8hT0H84fcCvqoRpo%2F%2BFyxQh3FBXz3XB3t8h2kO%2BGO1qnxjryUO58TDPVXPri40%2B4750KFY4xtXWLUCX8L2q3aj9POURBm%2FG3X%2But01jOKUBQJQwttNXQSxaDbA8IRAAvkT9zEUgvboV9F8avSn7IgLZmNqQXlrVrKW8EEB1fdt5AR6Y%2FT%2B1do%2Fm1wpSX9JMc4pmww64yyDb86ECiIMA4pT3c%2B26m9ksh2r76UK30EMn0A81U%2Fm1jBk4AgTIrhD75LsahdejRrupSzRd9C90EGpxqKGwyjTKMVR4vhPwtNcxPwJLP5k5NyadW%2B%2BQ0Wz%2BBNv8lTVJGtJk2yoHvzlHoPjc29bV%2F8v%2FUQq7QK%2BcNCQ4M6Y6311jUvSAW64U7ch8YEbW5X0o1QVla0N%2FsHVRJ%2FcjaBU%2FKNQtY08EiS4a%2FJwymHalLWnuJTwHnRuhr%2B9sfMZIbj7gn1mFf1VyGG61%2FLdQuV%2BiGVhJCeWRy4jWUPcCSin0vQnaPkA3Df3RZWPLNviu%2FfKnbbaMtnViHvrDNdiLBWfmr0VMLfjG58CE50U5bev0aWPll9mKuyuFebPbWRkgBvL3nMwj1IUw%2F9%2FGwgY6pgEmqJxZoRvpnrLhBFGM2Ni%2B9NObUw2CE46SECdrGqqTQTzYrUKMrFk8L9Xtb4woyRlZ83JXhNmpDpzm%2B%2BZr9Gsw2jJbMFsQ02shn1Rr%2Bx4Sr0bgHPBfi2r5mfzUqffgPoRpyUtRzmW5bpd25V2JR3MB7KEA6wLgEsU0LSEMRPAtRFqDYstJW7FLczgVX6PSpwocZk3x8ZCmv9KXVVxGof2y9KDRbpNQ&X-Amz-Signature=e20b133e3a44739dcec3870334af33187efd5a908f0590d8bf0ecb5d42e12f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

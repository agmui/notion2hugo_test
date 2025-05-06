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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466237EOCLM%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv5J5b5jnCeAg1Qkyni8G87PjJwCjQdEpXWA2urM7LXgIhALsS1bC6hk5vfr8UrYb1JgWjHKo4SwfvhmGkOCJoL81qKv8DCFAQABoMNjM3NDIzMTgzODA1IgyvPdQM1MELruTAdh8q3AMTHFjf68jGvU3Up5jGFh8wE7JR5umlwFJE7YvoFKVN8ubvJt18gkgRPq5Dstf%2FTrdF4niEvA5rz6ydo7XX6FOUItpMt%2FyjVnSXTCcpLL8D2e93vVxs1nOr56OQ540nENIOfses3F9AO%2FOmpu%2BY7rVhEtidI7kbht9ZIXvD%2F9egBqZYhEhjbDbFYXWWI1x%2FYWyhmPfU3bnLFkCWqp3cDhjn3xMSzlqAt3TqyvwyASqe1EcVp79AapsEm1BO9vkSbrqrcfO3clvFI8HLQ2smRE5d%2FPCw70XSP5h2slu5GzCgYmMW5s%2B020zpDBOs4qsUaOcBU7jk0oQAVIlz7qVg%2B0xruCnCz99bJ59NaW73MBJyzQp9NrGVsfIwrF%2BX1FoV2X4X%2BsDyE%2B93f5usSCOSSKnM%2BEuzaw9cRhrh962AQzjAGmjpIfpEO4g2pTgzTv2kqrwF5QgpmdBDsvdUKhG4NoF%2B%2FNDS0Hz%2FuwxrPY0oZVg31p9Mm2wkZCxzk4VAvqMhA2aNpIJYhsDEnFSKwTvtCBGwVEqBij4pROyIrn56MSotFHUsUQY1nuKkFm09gFA6gaTaDduwwozfgAQJE9Rpyqha8AbUA79AT%2BjKjk8gA3meRh5sLCz%2B%2BBjsC9f5TTDbo%2BrABjqkAfVZzDEekl%2BI8%2FMQQm%2FcipLOWGxbTE0QW9PheBHsXFE0It8p6ojeVywxR%2FlMStA0KdsoRXbj6ncZiOF3sBD6w%2B3HFMHqPLZnalS3R7XVFub7eSh5MO6q%2FRKQv6KjrhzONNXqkV1ixRpzNxiC6yfMuViNggvnmZxZ56pKSlJQtsjZkf3Twuxk9pnmQxqVIJ7rHH6gclCh6oTQCnrFZxsaCpWIlCaJ&X-Amz-Signature=0d427d335597d4c8b94da21855e6aa37cbbb015ccc9cd8560d2d33d0e51a5c27&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

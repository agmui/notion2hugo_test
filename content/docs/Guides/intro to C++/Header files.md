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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2PIKSCB%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCerocRr0vd3sp87%2BenL3xnbwGK6wYvzQ8nFK9RG%2FgnHQIgTioN7ElSEh%2FvZpTZRlkxzSyvFU79m8%2FzGJv1TXsy0q4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBqYZdVQXXRtBjy%2FbircA9HITxmnDXKG85fX6VxcdSDnT2fByVbacKwaPxD2r5dQl6ZiMQPZ6ZA3tPrl45mqMdVdklXq5pah6gSix5cTMeFq%2BYil5rLliCM8zvTK4zSgMRizh1Z%2BPnFK3GIb%2BD5Y0sbWlEG2DZLDvr0HebElKKkw%2FCvD53l2VaTpt3VFQIOkTvF9ypW%2F%2FOrlK088bKEl1EOzwv4Av7CMVYlTtNxE8%2FzI7Uu00jimpg0LK0ZKx%2Bt23ujU3jxRN20Ws0LC8uame6l3o3tOHZC0wt%2FAqshIlInT%2BDskiTieOKkIrMzMUwD1pHUrq0xukhTnHBdObZpxKmjTUdz31YFv9FufmjHsP%2BVuQDnVAiiOtge9ko24VO9n5VXslgtuLY%2FJ3mECOkZYkv19OfdeUYJ%2FrZFvxrMudWJPbVjoI0mnMFOjJsQHvXPqJrZSZmdumWVbHqmwKQx79zqMDxJ24%2FofPHvXfrAYGHyzfU0arC5MJ2dH8LzbdAfuF%2BZAk1AEf0VYfIt4ST6f1VSKInmTmoIPMwPC6w4eje3HgK3Z86TK%2F%2BRrQOlKmE7cwd2WDEZc06w4kGOJfdpUqR79UYx8t2qv53YjOBGXtIpTi8bBHrycaNR%2FYmvZYPLwYUU6lL9m6lht8ct2MO7fl8QGOqUBKdK3sMJK%2BuGGqbjm2T%2FBm%2FiY9n4K7BaPobnNe6NCX17S4NlKZUuiB20NxjvEPPDSUKZLVH%2FfCSXxBIhxJtOxR%2B%2BAlslrJ1Z%2FezPVmL12YKt%2FND0mu8c6OLk0rLKdfA6FlY8x8iYFn1g1UxdszjkJS29Yt%2FcSjlFO63EoaB3RfDP5n0vLmUz3493ghYN37wtngfsE3gTnqNrdMnA3BW0dMA3DiIgh&X-Amz-Signature=30891aa22c54185cec6355e50c20110bd41b51ba3cceea44d7d12bfb232f4639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVECGESB%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDJqHEk3mZi7AivdhxH1fMMBan61VdofDbNaYbhfMbNRAiEAwLwVcZnRQ1ZyqQdQAfuARjJ9glFpB8%2FuccjywKpfNDMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMA5Tr%2BMjS84jdvQiircA%2FJCleyN6xC%2BCAoDR0nXR33hhcWU1ys%2BfPXzx1RtFK671pC%2BqTruoqYQMMx8z32fEbL%2FbA4VDXCEYH4yQpb3vLKHvwbROWts0OQPUbNXQbP5Dq6fkprzDrvP5fxnIV78N8HG4HiMSQNICg8p62%2BLf80MMefN0xnoAZL54JJsvJC6CVRSgoZqdoG4rmnvRz9%2F4FGJxWkSI7VZFMhwrn4RxShBU52lA%2FfJvL6144gnRlZmCvRE3ItuKJzLLJRNUHv9uVdoi%2Fj8zFKdsmvn9KDZyexNFVawAc0DJRYhyzyOhg%2BkkDqNnsDQATNutDBOsZ0yQFP65atoWnSxIaBP5B36vWhY1FG4U8xDyYBR5ztFoasUhS1wJ7bxKTX02xsBtxtydVX6DkVFbJtUUVDuDPt%2BedNj9uRCAut4rRIiF2iPHUcS3%2Fk3SHQRfGeQZW1CcoZw5rOfVkby9YGIATEtxVzbLl9YvlEJu%2Bdf7eK8oXvzyLoEuAIRdNBmYq3Wlm%2B%2BtHDy4GdKo0i1hz%2BIQbQ1%2Bqvrx7mb90vsjaaoyp9B4pdAFMbzLXrV%2BvfKuXdJF3QQ4yWKHstGv6%2BHVuxRkXmCBOwOnuLv9%2BboMXN6XJFK%2BlH6MsiQqyuC97e%2Bb247BwtEMMeDssMGOqUBQFW2vXVXfZ2Rg%2FhO4irdbSViy33ilGH61xsiOFmaIE0X%2BAriAlTv6CS0b7G0vN8i%2FlnjC4Sf62HXdlEyy%2FMWxFnqUpVDJCvnwWRSrldgLpAsp%2FFCL%2BMINZiZRETk06tq%2BShzZ9%2FrBVh1TA6KS1VHN3Ck58EHNykZ%2BFMEfkuPhBzSC4%2Bx5hxSaPVu5ToaSQk%2BeWvdBvRDpow4TZMJI4KTKZK7xicV&X-Amz-Signature=7ac908ffde2377c49ecaff2745e113cc8aa9808700726a3f30c8164e47d6fefe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUOMJOY3%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHorlRmpbgTwz0Ld83WYjrwD7njAWvz3gE2VFAcdl4GkAiBv9H%2FDiFf8GOy5ExSTLWwvNCtNPoGgGHK1%2FIb1UP1fCyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMqd3IjuuPTKARvoW8KtwDHQFepA6%2FEdoA5iqJn2sSzV7IdHEuvbPNvHB2ANcVSner3HN9FKTyTytPnkRXBEHSFyHqfWO9aS2i7v1vRydpzGb90V1GRu9PkgiPDMfXWFaZv2sqJ7OVqw0I78BROMvB7bH68gaXwp841i7ag4qovL8YSM8QntrZbIzmU9e8Gs4e%2BRsV%2FE21NAGM2Wj17EUJ7qeCywEhPN8j0Ed69xrhqyzcushpBpK6czXXHy4jKYUi2t57GzNbK%2FtgbRebb%2Fp4Ie%2FV87sLnrPt1xFClZ70BXS8voHzz5hl%2BzjsLO%2BfF9vWelrJWb30ursB0UyesdcuxG1fnf5frvmUtl08K3lw9PV%2BAZF9vUhYJj1vrXDJNlWM%2BOVz7dgehHwgNuhT9%2F%2F%2FvZY2NMiP5Rqf%2FwqhFztcLQvNA081Ht0dRl0P47JPFYJZ99X3GQxqUYg1AKJOntBcfcyGfgqFlOf9UvREFLt4ZN1IknhFNUNeg2sGWgS%2BHfPszm%2Bi5KSEuet08uRI162%2BOMF5MVOrI8%2BQNKRKgIaQpQEYFHTqP1KgAcS8soaw8pLXSTdbh8OJcqh%2BWROpNYnWyBllPM2FZdueFqqzGXN3Ul1BLgRsX%2FOhD9znhgvrlHtKMyTTBCorZAr0CBEw6qTVwwY6pgFwv6t4i3Mk3y2%2FeyKi7dSpxd0Rm%2ByF2n9j0sQVcL0EUU%2BbXfotsKzFMUAs9vJ4FEclh2M8xy%2BPMx13yE%2BjErSL3iGRgDp%2Fyq2NT%2BEo0%2BhyR%2FIKxnnTPEBjjj1NzpuGDMVj32jZobSyUE9KwrMN3zvbBt7PHv7kD%2Ftogv0Jlya8H8%2FR1WTvtZMmpImEb5CFTAs1YE6TiJgOfVH6tMrRYcBXAjLd2sl5&X-Amz-Signature=9d6d12a3fad4b77f0dfb953d9faedd32634de5a589f8dfadab828c15e56ce464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

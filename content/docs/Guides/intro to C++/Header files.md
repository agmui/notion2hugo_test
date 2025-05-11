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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574FBRAV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFezBIbXgpvn8MWOQZb09fYhVhNr67fppi4f5uSvQnmFAiEA%2B%2B7IY00rtM%2B61YXKVQbyYne9IRrSUlIl34X8VLHlu0wqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJa8IVwntsWQtwv81CrcA65pniuyA7qWcByr2mXpwM3SEsj47cHXFLh2dHYjfPZfR0BVM91j8TekY3hyxG6FZ3ee4jagcxP%2BpJh5B15z%2BKCuV%2FixRTTFwjJkL6PRpW77IffICTpMlSe4tB%2BSBj2jpiVny6PsNaae0EZjNFvnrwhhER7m6RukjEd7mMmM9vRzGpB7N8c6a1u4o%2B68GHRQuod2FlW42sdn%2BtRgT0q86HUV7sSQg8rvD5tE9gJPtL%2BbS%2FjpqJyk99QPKOpGizbjrfhmghheY7vvt7waQhAh2rHo0yh4XTlPzs0h362siQalFY5jawB7vyU0tDPp1ff1x%2F%2FuG%2Fu%2B5iIYjMOa1Xc9cXlRUnOjzoVXJBI503euk35hVEyjTFLz0Do8Zb8x7crVwjcTDqOqkYKjB9NrR4M0dJFgPsa0Obv8wyeUYkmFZsNb5MBvWPKWRDviZc4jcoRG5yV6nscU7AkHFwBPA7QQeaJ81f3U2Wo97vfUWvCPScceE%2BFNqs4cYdt2HeRhwhMd7lZlb1cPtrmMvMdlScbhGBlzvYSaEj%2BBz1HGomr59nnEIeDeaII7VMU1lheGPeC1MlReJLt0Gw5AzWmJvRa0is8u65KSYGcmLTDJL7ZmY6ddzhS4fmP1wB8VQ0xYMMPVgcEGOqUBPeLW0tFt95qjDSenUW%2F%2FkSL9DwLOdlcUTYwU6%2B7Oi2GOVu8ZuW8YsGe%2B%2BEy4VTLmoY%2FgUTuGjQD9ymz2fTEvbfkjtnKzcYL1rPYCe2KodpVKVAGVwfX0B0bRcHWsTENbPpUsY6Sru1Xe3H8pY%2FwIatB8M%2FZfag095YpKkWGpsdiH0NhgVR6UzMUrbnLzbrqL8Eehd4he9Coi9h3ucHSeLhBh2K4h&X-Amz-Signature=799f6e9d26136a79f19749d7f486c90d95ed6db8cdebb474e07f0a2c173bae8c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

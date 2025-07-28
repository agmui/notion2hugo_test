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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWW3AWRX%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQClZ%2BZrQ6wwWOK%2Ff%2F0gvtKFgik7EF0box4bpENmCTRUnQIgBZswguzQtW4mCgCgHEZ912Qw4O2koF1iqud91Hm8aiIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSCzQqNZggJ7XXPFSrcAyG2uGxnPgMeSjUH2Asi3a8ZXBRafaNKaLN%2BTo0eMUdUva%2B5QaS2iPl3cafXpQnP9khBP49IoFWbcJsK5WnDfngiuTfAxFwJ0SlHY8nc9%2BzPUhVsI6S7y7IU7Jjx5Izx%2FiCbQcKDaINzdMKtfrRCPClg6L5VONCMC%2FrDa1cF4x4YeTzR5WcVHsU4PbMh3HDkzV0Da0yY3VsGsqeTUAEcX3oZ%2BITYsdvurwsmTXmm9MWp%2BEk5TEb7A9PQHfLj17zruNum96EMEZnS5sMq239fNqrUtFqee8BzLADk%2FLt5trDgzIvG82TH0R%2BZqmnuXPoNSmNHGau9YzWn22MKGU8PBbCl01kaps8yL%2Fw1QiqjsM6rluW7mde4mFj24VQJrEJn3w6mF72sgt9bkb%2FTEOBQZ5FAgoj4mZVctzh3TLzTbEarZQK12a0cs0fVUA2QvqSGpS0v61LMjzTZfN8J23B%2F39EsxJEUPlcS8enHWYHOQgMkbAe9UR1MzJSRBAVW8afcw7bTLhCl85xpicMOU1MAnqbk8HG%2BwbpqfSh9NM0qR6YXPcEtvMhRjSgaTFQnAxKNY%2BF3mMYPTTDykZX2jbqnPV5oPJpI2bgeb0gL%2B2Z%2FaIKANqfovz3eyWzuYagYMLe5n8QGOqUB5qgD7TtzDXEaTaf%2BCEUSmGtJbNKEyrEyJGx%2BDBLSv5GVT7rFaXBG5%2B6iMZ461z9zdQGUbZ7Gl6t86hmYWSaZIIcnJ%2FPWiwIJCIGZzVb0mjXUP%2FcNy%2FWrxWKtmhWyA6UoV2rQzH6onz9%2FGhUl2MGIZXmeqxL%2B2zpKUfz3prxVuNmaoZQ3nBUltUgKeZ9%2BXid%2BN5%2Fu9eosGoweV6BGyIwUy4%2BoCjY3&X-Amz-Signature=b8eeb071f4d43e9aad98831d62d36a6976b647580a4bd6c9b198870141f5d4da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

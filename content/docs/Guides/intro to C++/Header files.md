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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAL5QH72%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELUyLVDfm1iScgT3LVuKeBGbTcbfL%2FGLCe0tiUpVto9AiAsL5bg3wGBHQIFE01M%2FZCk4%2BrCwj8EEfwqdrCl0nOVdiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDLgfcMPArdtXVQdwKtwD23GInDp0vSi5ST6e97SMvGoJ5Q6VcM8ULcUMLA3UMNBHBguyc0n3AIYsQOUbsUssffHWgGKB2aeCp4F68EN6CEHhvs1OEjpB2VoKPlp%2F6phWlPWqR%2BjT6lqbS4UMiH92hkVMZNfbEgFSrZqYqmIkkX1EbhG2f9Fkx6h1K2iGjzOBTTjzN5xsbK0%2BqWpXdS0akowOsTvfroDc%2Bi%2FSTq7AK6s0gLw4K3H17F32wb%2FphMVb5wjtz6gOWhNE9Bw9UKuFeZPwA78t7MhHwUtze26o6ivv6IbiYqZSyCZm7nLbgEra4ZbpuESjRjsVDjAKYSVrIj4QXjkMAUeKmbS1WFUE0nF9muxCp44HeT71SsNXgsbUK7jPyZ5BA%2BnCo2%2F2PtzqB0KVA07gZjb%2B99waAsgr1C5a%2BpbRkKSjh9os6x5Ur2X%2BcFAOrWlBYeqRg5rbNGtb1zs9oHe5tK7e81OH2ugOigRThcJioH679ronBLKgxFYq4kCM0Eb4Vnm71w2JI7oW9De2H5W%2F0tOeYUQ8lbM77MzG23WC76Fdz65sY7FG5pvWERO7Uqf1nQkTuVM7%2BXfj0v62mCuuFvn3mMSjzDbElTBW0ajoL6ktwJkzMGKVllmaUrySXUyHIC%2FRtOow5%2BOyxAY6pgGaGFdjiZ9ayTERj0skmtbA0%2Fjnj1%2BIKTh0eBLLGmkrLF2CcVifc4ZlWdp11EJUz1F8Smu42TClu%2BamGWTlSiQ77OucxW%2Fzgv3O%2F1U09%2BjaU1WVid4iVdpmmZzk%2FKWEjuzE6Ps%2F1MNTNMU0fvrLTmuR%2BR4i8vEoTJB%2FiHu6oua%2BURFGSP%2Bj5Kysp%2FFq8xVjU3mMCK%2FpFBEdCPe9wyiN906QLwz5H1Ef&X-Amz-Signature=7c44f3316f4c5877a2be27683c2f7f7212177dc916a61f386ccbdf2e1b68c649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

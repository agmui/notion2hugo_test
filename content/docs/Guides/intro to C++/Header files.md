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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GIPIYKO%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwgOnegEUD45ge4u5uopHjchscmIyIhGi9wSLoyBfs1wIhAOzJQfIHYMR4kwFRZTc0bZKfVtVmmaPzA4%2Be3%2Bc123SAKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBCC8DTEExIUYwrOsq3APSlj6e6xnzh23SS%2F2i7WkI8mJmtsKAlEUY51uNc5k5j3SwPEwujAMRNazH4sLO0ZiKrafcaBSpS0knEm%2FQk84mqJDJjRwhpaMvaEk1bt4kE8L9zYiGKZVhK6KCfpykhWPrjV7807SqjUTAOJKFkQWm%2BPLLRtuQdGMBbp%2BQU0qj%2FbTEcUG2rbNaLfxcjfABE8BaNCkeAnVIpKPJo8tymiIX3gb1sQwbzQBQjqAwngvI7CTyDMzzNtIhjMOhutXtB8u1zw2e5XEasvYeJXULJ07osPxm6Z1ykzERM4iA05pcrZ2qYGGfMB5rSZz94aRU8gXwsrko1PfA7Bfgz29oUm2KTEEpZU0kVqYxkJlnmlLhL8u0d7a90SWZdywQgCae59wPz1vRdq0yOm07HVf7LN6OboOffWpI6nEurjqYxMuAAc6%2BB7z2fkZFFIBVv1IVH8he7N2k6gI9nmtJC%2FdgRWekvT2kcU7Ns%2B7g5Rv%2BonJ3y9nZBaxpKtqq4ZHIiToG9yqeDg8mevrUZMy1RCrpMTUoqVH20AevTjUzKjb9VjwnF%2FenVwrTyY5towA7ytAr0vqhxTf1ZG8T9OYsdlNNuQe8sNsMczDWK%2BQ60SX9HCXeEGsLFUtDBEuoWQCbezCSyPbDBjqkAWZiLC6xnUaD%2FDhXu7eX2dctLvqbrfZxLx5kscccH9S1bnytDJULhqNxW%2BPlrfe1Jr1nlIxg11VONOW1Lt%2FK1Bi3sO2eSbvvOKiI1uEPGkprptFUNn3T19DUiKvXKV2NOMxxqyTzIq6BLDgPfKDrD%2FKfe6u8EQHnGwTOvMm5xyA8nJ6U5jCKuyCWpOca7w3WiXFGD6LsI62rtqqz1V6cVc4eGNTc&X-Amz-Signature=942a10bf2a31f5d91969ea207f235e2ec616e6039e021b31f22cac9fbe842569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

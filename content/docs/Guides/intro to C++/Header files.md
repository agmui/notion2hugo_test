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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQUZ65LI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3JJrzTrFnee9YHszPPaQJ7TB9KGJrPxpEk2OVHivsBAIgf%2B5Dyv%2BGBNeLiPaGp1juA8%2F%2FKM5ePLH%2BBLEzd057jhEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLlbZ7KGdf%2BymxvElCrcA%2FA7jmSUL4nOM7FoJubkEw2%2BCumTlae65L5C2qCmUkHWxJZOb49uJkfuvglccvCL1D6neCN6O4wQkS773cRa7GhTKWew3Li%2FZg6FB%2BHFsur4F1cco%2Bux4NeF3zOBSoDzO5WNB9h59aAf0%2BduUwkLZcHSOl7Fc7wF%2BuYC9GiYpqE2N1yfSHaoL5QSM4F2BH9rxvfNIq9QsqzJkMRQa1SJl4ZRVAMr9tVZAjWy3X3EzO9JIA8LPCKIOczfhSctHe2V0KJ5RLzmHx3HE8hd%2FcmfGCwh3%2F3u%2FoqMj6fH3Co2n8m0GyCkDL3ptkGrOacdA6xVOaLNHjJQcu4GeErXoyJjXz2cJ8ZwBzKYjAHHtn%2FlXxFbsYtpDNHooyw4j1Zm%2FAda3LlSnsWiTaJpRyL5UjOGpWv%2BkKn5IwPtIxo70FgIKmTiXb6TLfIl%2FM53TpS1uScvPbhnALHB%2Fj4pvLK46AFmVLj7hAfqXxxxMMfpjC%2FN9fR7DaPp6bUPuWOqkWRNdXNYur1gpODt%2Fl5yw0XJ9cmuuBDT5C5EOFKb0Xdqy87CcjLWX1lb9X1XH40xiHLGU%2Basn5BZkfu7i9YR9O2yXLYMEV9uWdKDShr%2Bf9gD9CZTaP4J2ExiZBz8Wso4gqD1MIKAyL8GOqUBnrjviTBFYw6gB8ktJYCalGLO6Ton%2BE1Z7MXaol4bTtrnQITFn7y01re6aAhkcfmyCi1nCXWks18qvujt%2FpitkBvQ8rxerqqNvNBRzcCu665oUiwyCZHcd%2FBSWzyaDyN%2FxIYXSB4wqvMBwAcRmeEbttacimdXbG%2Brnooler9S8UveJ2UiwJ4bnIaVhjeS0copl0O5w%2FIDOFxII7MMqvQ0JaTibYmn&X-Amz-Signature=d88889cb179dd8a5426ebf84f7c09a2d993de07c4301c4889273b8d359b1e00b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

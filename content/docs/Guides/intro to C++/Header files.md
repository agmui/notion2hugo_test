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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JZLRXY2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjiSf%2Fnu4uUuXlqpxHO66Y0blWUXPK6D6BC2kOEelALQIhAOY1LKJ69m4Rq8ky64AXL7RKtqH%2B8Ln4zHWharWWYswnKv8DCBkQABoMNjM3NDIzMTgzODA1IgzahSZZy7Jh%2BsYytRIq3ANA23uGRp1vz5cfD5ScqpKlUcHlil0IdWy5WN%2F%2B8%2F1psi6MFJtBTuXMDyhN%2BO%2BBssSZbZPQjIXYwib60E0NsBSHGWYQQ91IVGnHamo%2BTKKpb%2Bj4wXWtE838EYjjjB9IZft8Ab7SI2uKdjvOm81TcrYJudYnyMfoxmLZUcl752C%2FCBkGjxWTm6z%2BuqAMdYFHs2U3Db6Ubhn05ECes0nM9qQDe5QH9AZwA6K5FjNu03k0JffQzmGSWRqfpVUJRPCrgjuRD7uQ0iIoqDerXEn3LyMHvp92aw1j4X43OvWj9Fblkf9ATZJQ7vgiE8V3Xhgaiffc2q1A9HTvnVHkTRYTJmaCdUouOFJ7I%2BWlb9l2y0DNISA0lkx5OgOQfBEzhPzzFXdgnbpnWLBP2OaIuCDG1gYAsPVVF1l7p0c5k6knCgr6%2FGD1sjEKoA5NOSxsITFFF6TPK%2Bp%2FBpOhchhzH9Kgq0PNsXj1vDCh2kqv5RLYcB28%2F%2FHnIcA1PSAYr4ovcCLX0GrSJWX94FclW%2FCKjHS1ZtNNdC29afCthZ2duUUvkQr4Sqw6yTrFKHVLtnknOsiczQCA5GQtqY8WG6%2F3nK2ldOiR3n1bHRNNXC%2BIHFp7Uyo7EC4Fb99P62I3CM69aDCVpIu%2FBjqkAUYWXOa8VT5gdc8EjrB89g9LyHfe1qxH6FC8dCJKPtdNcvplO%2BU88K5yVRmzlJD9iPvkaVF%2FY9HvOkbd%2FZ8SlKii89NP9I1o0Sa3QRNrKJ7pd2Bw2KbTb4v9IMqE5aHD%2FeGglNuFJ%2FA7WPXAH70iBo%2FURNqCoN5cN7QTAR7miG7x%2Ftf4qwmjCOuFx0HwIdeXXScIvZb1nvb1lxAs4e1Oqt4mbcbN&X-Amz-Signature=d545b0a666d60907e97a45e1ffc2d824288145364c5db836c7f2c54095699f02&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFIHUKDO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuQ13cQbNiRRjKmehouDWdZ3TRxyX8v50n3kwJ3z2iyQIhAJIeehLZ68dSTRnKI5SvzyZaJqdMpWdX5TRgmLkGo5KoKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx7FEjLkCBgQCYh%2F4q3APyPA0s0JxsXsfYoqZ8KbqmhsEs9quIUeqS7otbFhGwfvaiYWRzH9gSaLDiJj%2BNZ3AUqMFCYH%2BCSjqa%2B4vtYrBK9%2FyVAKQu9mVtlYdaZgurAc4WhY%2BO4Iz2aLYQgL2E%2Fy9pWm3239GBeb%2FS3P5PvgWcWKAhpE4%2FILFTaJ%2BmbEpiKQpBQzb5PH1zVPC9KOazMuZNDcQcAcNkjFDBMLkuFBY%2B8J4d3zMbpHUEhffnLVb4EvodYklQqPyyeemYcesd0OhKTeUSBjVtTvus4pVWnK6faOne2CgIdByY0TWOMCQG3O4PcWWHtPNp94wbdtRAXYKDsRV4gMTO6FnmEYYFRbwrYNTTQM5cF2kGYyCIhVLDGas3DxIg5%2FsxzcdxMnoTkpkX5RvHICkKmGn8u43tqTbtvO6fl3KwpRXfANqBZH4TItj1nBruhyG%2BJDy0wYKEeOaQPCkzpAv88vS9roDE%2BRKjmnncG5R8X%2Fc04CMfieSXBKMV8EPQWW1qxC07o874rrC6FR0N5%2BDTXWZi7oEvPuxT%2FAo5XUU1bc49kDaUKFII8Oi2t7r3DGP8qYZzmfe9uRcL%2BzpuquiJ%2Baxf1k%2B5aUaxguU%2BraXzlMnXVMa55WKrlAVFdxMjFvASh%2BbIczCOrLK9BjqkAWGtT7Zi24mRXosjvPyhg1qQ0eYIzBDuGiiFHQudukbQWWFhTbTE8ynUgJO2IEPC735CPa4RWdCbEgljbB6Cp%2Bzwu%2Bya%2FbDI%2F9nA5nYB%2BvvyQEY1EQ5oPOL7q9OqzoymWctmOFyUzRtFO9HIyRL3ItAhIpc%2B%2B%2BD%2Bux0LNP5h0CtMkvQOikLuG8wU9CJ%2BA%2B81FYvJQjHRDSEenUY9JusqewnA9hOS&X-Amz-Signature=76f152713f9f2441a51cfeaee427b9e95d9fc046e7ec47af0efaddc2f10e2d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466776344AY%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGRjvALOK4VD1nyuf0HccIzogAYhrXZsU5QF6%2F0dvOLAIhAM1JxnT0GugxmFgxPbDSqyyeCrWQcYC0NKmzbMMIl9YzKv8DCCkQABoMNjM3NDIzMTgzODA1IgyhEQO68s3n3RuZa1cq3APDGNffHhSuv6Iha5eDCgO4kEz0oKl9NJQNLA3tU5EJkT%2BlvhzgmlR%2BB0KZx1GFOk66gEDHJQ7badernYnTmBZPRqmIQkQHV4lJBcrvZLAdscA3PFn1emVO%2FaVYPIyRDctRSY9Q2BDkFGLnVPACkZMz1sDC8a3wvklVhMeKocJFx8Z7dPC%2Bj4nEM9X5ZooU7k4pS2pABkz7UlPjq6s4GF%2BseEEQLBTiafR%2FsuajmSCAYSCmku2HHeuLg9r1HNM73Up%2F40YHSrL5Ah1a7hqhRgb%2BLJDX68knRx7C0yW1WL6w00rNaokxxx4jBGdp41d6nIWcmjwWcCFpzaMd3qLxSSthUJTC9x2GKbAY1khoDT%2FP7Gb19w0%2Fy3oe22eJh5eyoijKPXMDEKEpvM5Yy6DWZSsEQpHCyRghGoH8inn6MapMDdbOi4dNmREv7LGvajSN2C8y0aiyefTy4BNWjwZm4gxa3yFWKIcH%2FZeISHQKH11PpSxRv0YWjGyTu9VFVTd6CRwTxqTDVoI1oeRp6z62Wny4cnqcmJjqSh91MtDdR1StkzA0zKY1gG1uKirvXcogSt0003wLbxIz4PzSsJFVS6ejxiwA3JcKQ1OBz6ZALbpwtQZQi%2FSuEr2QYx%2Bi%2BTDvm%2Fi%2FBjqkAWaIOdbMgkM3essxjBbneuqvj8wWx1y6UqyZgnzqm447x5F9TypVRbhDg7je21fCjYYIRrlYWVozyPIsA%2FjwUabE6w8dj%2FjdUNT%2BQrh3UQGa8T4Ta0SLisHoMMSCPJ%2ByFRZmfOljc%2FpamnwJREaaUfuBRIiEdCScE8jTmc8iuCCKVTA55bl6rlkL%2FWa2PDqH7Pt7YPixoHKlCsIkNdmu9GRlo7DF&X-Amz-Signature=ceef3cb19fe45efcb5a5eb37faf6e035efa0c967ad2505cb861fe12ae5696e96&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

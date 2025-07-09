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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCT2DMEG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDt4MdLIHHg0sSUXhxwJ7jFMHp82AygndFkaFvUQ9WQlAiEA2kutdNL8NXYQOo1K7UERsXckGq9b%2B5VqY6yi76A5Ib0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5uuuMkWpXMfpxApSrcA%2Fk%2B06dNC98StU94OtdFqrahjrb7C38LPRMaq3fYSTGc8FHxhyMD0T%2FqJ8s4UOPSQwKaeRZjUmhcpZyLw%2BQVED4oIwYWOEy%2FsFrqQ0v8PO97pUZ8T73c9iM4lybUJvOSS8UoLcBq2KljzcefSbb7wEON9uoWIAEYLRBBy3LFkMtMtY05YNeo7EdNuBPtHU95Sk7M%2FBQIvHBPnUfJ%2BZHDZxRVe8D1khzOYXqUEq93UBTepvv9RUBfK2hyyd0q7H3eeMxWxoozYRHGd%2B3Iv%2BcyqciuG5bAZy0%2B3kwHtF%2BagddRIrJhUG1dTgra7u1meirbEANpL5Phpzm7X9FM0Z%2BvASdsmB09i0KPEif5wJwCeVq8RoPDLuzvK2dCStTimQ7bL9%2FnkJ74APkxPM574hJs4n%2BQR1YNkBXWGcTKOfZdYEhv3uNmZatKPs9b%2Fu1mlSj9NTngJvT2seasUTUusc8t2pLsTWmJS55wAH5cKx6NFRcuZbhAwHpzxUYfheHnIy7WTWb%2FpTyK6xvDV776ixiD2dvzlYS2qpt9onFh9tkeZS7sJghsZ279o83oDaoJd2Qczi97Fqq2RqUXIR57FW6BgAQ2IO9tVe5q7YKFPV3iPacYQIUSSWnSjCzS6fvnMKO0tsMGOqUBqZBgMihtPE4PDqro8DFh2nAU5xFDzc%2BxuGlztLutWL8H55em1s8psAsUtJ0Dq%2FTWRfyGpsErpeteVyXYw63gV6UZ7tFksRqIgmttaIF5GDC%2BNC9nPGEgh93t0PZMI8EHHLnTRti%2FK3jjMV0KaGUr%2FQA91AY6b%2Fycm%2FBvaRtb07hodN%2FXQepy2p7LG83xgDqG%2FqoO3zO80Ox5Wl9D40OKpkTLSeek&X-Amz-Signature=f05e8beed59bf1bf9f32986eb801c81508dceba865d934efddd3c57225c93016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

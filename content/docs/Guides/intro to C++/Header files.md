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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ZCHMIT%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICM6USvPEGdMHX9KNUwYAdSgm45I1q8bzqAKa6kEFLwUAiAM7uuFsF3%2FB9d%2FPXuI%2FRhzaoaATaGzs2TrPTfXj4daeSqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqIBRSoQFC3IqIq8nKtwDJQ2SdzzssARV3JkOWI240GMQ9wzjZD2v%2F7K6OLLXJrOA0kQJsZsgHgxl5P64jwPyDHkW4%2FbD%2F90STQNzJPLZW8WEW%2F%2BVDvcIUL7aaVZAZgzIYdwXc3GIXZkHAh4VVbTjJHUw1QlNuT9T3%2FBVhUXSsM9FNUr9GCSiuAo3oixw9wgomcWAcx%2FwcDG%2BXy5m2X6bksh%2BMRRBeMV%2F0Nanv6Hw8MIzV5Cvi%2F%2BLzoO%2FcuEYarZA0IYAR4e55lMlepH1JXh7Rs%2BokFQ5mrsM38Tf9O%2B97pZ07rU89HN%2Fw%2FhpZPISmAKqfBqLqC4h42EZ7%2FVkhAFE19wQFOREwDrd2Ar5ChrQrcHhmtSEZk87PFWwU1l%2BTeZjD1fXylRNNnX%2BjxhXFhP34fAbqUrqvf098K1TFeuZZkl2HWJ2fwP%2FDTYNj7hcYfR5Cc%2BTh8imLdtNPrvDOn74jQMxWAkZUZrLhduVIzxymh8ILw9YNBkuKEWTrptLetxn5x2A4ZUkWO1xETFCz4QVnkndoJROE6Zm5Z8AM3MlMSfNSf48m9DwPmoHDjuIT7OPqrhMYmwP7ZAbdCFxeHxSn0L4ej2ICVYQ67%2Bqu%2FUTOZvOhZc2jeO5bw%2BDB18eaNjyvxrbI5akX8EOh34w6MiuvQY6pgF4TTuhPNXjEK7bNFWPZ1ccy7PmajJUJH4pAHQT9VpuTqUf%2F7Wy6GIelK10GK7oUCqIVvPPiHqTEqppT8Xqa4cETF15pX55436CV9ecpX4FnKQy%2Fd4yzxRubB0z1ttTZeaFNrgQsGwenZdQF6GrD2r7klxrTWERy59hb5E2PJOxFeaEXO5m6dGNLMku14AB2yPx8xDaCVpQSAZhTsZPeNk7f24ufXYt&X-Amz-Signature=c6f3689c3e2062ab62399ce547fd788206bab42d20fd923f9327bbe3c1b64a3f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

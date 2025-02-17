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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655NSDNJJ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQC4O9LNz36gLXWjbh3CJUclQ%2FJpCmY%2BV1Ltimc7oHo3hQIgQkQd24R2YHmgTnq7CgeLWxvQJpwudyXpowIeen3ZeBAq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDESiqFF8IkSB2uwH0ircAxnuw8T0n4adptQ8bykKoGjWyr8WrpjSyRO5tWOkaiM3K2ELCoOB6CjdfhR2d1WWMONh1gvoQIRfj%2BaOcvcJsfw4ljvj7YmXjby1l%2FNHa5d9jc6CvBiJhoZSdR9L5PiejUF8VNCCSvnV6tt%2FvDr2ZnU%2FuEuslKlZW8krOzFaTTwt87NwCxzUGaOVNnRkyE8TXhZPRW6I6OSELqb7Hl7zEubnSKtiT0ZLZEtEVzD1dco5MPQSVmandkWkiClLbBtsOFFYBvxVa2si3oVjkgz%2Bl9tIontbhBBoW0QPweNzm6X9fwPPbNyjAhJVcgnYN4hygd1gTnIct1FAlknBrbs4gJG3tUoMeyHT5HTsBBFQXMYeGCLUVzXK9Nu61PoeZuLEQ%2BscVdFZlJVxofY%2BiwAyzlqvBgRrETft52BkZDhIQSYy3KMsXLGoqeUCCeIxEdaTHKtXmw%2FJ9DnZcrV1UZ4XYdpKh4LAyxikhF1kAgqAePOMvpDETyeGojvcINxH%2BGqargvljtBVYSujHRzoGQD31Uq4c915lFGkVeAJonC6hSY4s8dHRuQ46mduYZ6dH6eYEqc1vglr%2BAk9H8BStkBGuM7rsrSqPNgxs3LImEFoxoaynMu6yN93Kh06Ngs2MIjKyr0GOqUBWjm3mgYMZXbL4i6QlJ8j3uWKy41u%2Bzor2QdopBE%2BcRdbgYs32KictjnsqpjPHR27gWJeShfZNpck%2BKZwmGl89li8ibP8OiQYP0fdC8Qou0YNTwqPhfdAUcwA2lHp9JxwWNXxJYt43KSwYOnE7nvUi5AwSLctraocQqNwx5XnNnJAMnKja2xm3zZuV5TYLW4Y4sh%2FcK93IhCHCnJ%2BwcQeC70o2Cxe&X-Amz-Signature=4935c95fbff9670e5ba99e9bc79c0c8c72b15abadcf1eed6a2321f97c524455d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ2JULEV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4O45eRi0GNibIkFPXJUorjiAU6RT51QSHH7MUCqYmoQIgMa2gixxhKIlEYHzBimJrQmdK99C27PqKA6idYQ6KIXgq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDES%2BdefppYkPIX0GXircA9msAoxBdE4D2yEcicuOm87mHhAMYa6CfnCMs6mAGeXdtXBsKQ37MMT90TYsd1ficBrqCCPfI%2F8ru5DVuEqznRCgvqnXgTnNicvprFDpa61Q5tLoly61uQVUb1s22piYNP87jHUiD6ve58Rznvt6CDgbM8qzHR5lJjVqCw%2FOsICkSAHYGFE7%2BGH4GYPuagSETN96Bkl0RFt54F%2F0pDQ5ftCjGKAhGNroX7VwOrCRkVxNra%2BGVAIfKIlQDI8dQHHP6FhgaJ%2B%2Bv34z5UsyB15%2FZdlBz3U%2FVcDe7psdCHbbD0%2BTmNBYqsOHr%2FdiHr9eONz%2FTU1YR0GOHDlrFciYtMKDEpZualHrwy3VZQ5D3xHq%2BsE8ZktNkhQG6mhEjplDU6Azn3q0QAxQ36%2BDJe9CJ8R3x%2FreEu6%2BM68oP397rdbT%2BXiOPj3vh3pEiPqI1w2iOlHJjlBx2V1HrU2Or0mbaIR9kvKf7m7jtTV7o4GZE7Ldwj64x5bRdNQTZwc2rTz8fycwhwege%2BkIY8uG3pM6MlK%2Fr2Ch%2FRrHlUitRwvegHX%2BEJOcoVDTpKgzWjN7NnbWzxBzpepKTyKo5WyeH3kphLQRvow04aq3DdxFsbKHtYWkRLXglla3iZiq754BynRsMJvykb8GOqUBADXJjcu13rTJM4QRi7VdVPN84CAeWOkpts1wAiUAGPU1IXzlJtyltkqtvoIeNI800w30MbJkYYX7QcX2rN9AM7mu1ZhB5FqHJURSmG%2FaZOyS8hbWkq05goUljJzsw6WDxsSBGCJ4vnNd89Iacv%2B7O6X7QXLaj5o0P9Ah7kkwDh%2BOZBfY7D8qGLihGBrdu8NWGn4lbCF3RCk9tQ7y555yXLaXAo1x&X-Amz-Signature=90bb70d22bf550e1c3b629c1876fd04e5cb4b9ba39cff4815f9c59c6b6ed1a51&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVP6ONS7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDI7qLzosWGsAgrazHcl8OW%2FgTCF5S%2BCzv7dkYHAu1TeAiA7rVSTPs9STjqDbd4Ux93vpKrr4wB6sWzd8ycsvt%2FGmCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdeM5%2FUrDXKUYxvDPKtwDbJUq%2FyqjghSXbsyX4hD0O0EOx6x2b6CIFWF22qovLpp0JWEi5lSOAkUHEtFivB7Urj%2BcvSjK1bEJk%2BTcuhe%2BCBmZVuyvIDJYGm%2FcryUNtXhXSzI7sllvt9cPs5SR%2FDwjt%2B8wzqJvjSpCCyd%2FlEALn0%2BRf12Hyq1aiH4wxsNvz1TO8saVQ%2BjxegWDK0EQ7Hbo0BAugGk37TcWxPzxsNpI7Iw2tFg3JqJ39c3B3sCTmyJ5ppb%2FuUQwQ%2FLGI7QpCoC3VYEszPhFPF08SF8NE5TEzZ1DegFfFGsZ0HfVs2QKfdksVak8s6hzbm18DWfdaxCnRE63BO%2FAWkwLnJbL1kJL%2FcSAM0sLYoILX5HQiEMe8zmMq0BlVzq6Ut3Qfb3AedSkp0JVVULnlxTqXSIBW4KJF7w7hOTpJfkjZRlpaOB52CLxKqAne6%2BwCNB%2BOPpNjw4VJuvErv9ntb7Wo3%2BMcPgEeOuKqCEb1lN5lIfIRZqeQexK7Pruzod6n3U0aadI8ByQcfTYw8kVM%2BdwuSnnXVNlOUKjAaoacROZsYMYFuIQjetijOWc%2BESMbwocoJJPVPnUuR619l3O%2BThHZyhKCsi9%2Fu3WJM1lmR8DjUnKbDabwPIzPzPr7wqg1Dz59cAw38HywwY6pgFdHTEYNqGabVsU7LWUwKDVkYMr3v9VfVnhs2%2FKVQfVbr3Mvn2L6aUBvEBLK%2Fzot6ht0aiO3FdXal%2FF%2Br3Ujmv5D3JBcmjOXPLXovkP6DDjAvGxQj6OQarXmiTHvf9vTxr11wlwHwK4kVxuRyOsZX7EV22xF0LUWKUg8k%2Fl3nom5pIeBPB64%2B64tsC%2FVorMX1YeS85tmDHMkPUJ7mHkg0KDT84QZsLx&X-Amz-Signature=625135a234b18c43f62671ba9cf76d633878368316cd1d0ded860d873db13381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

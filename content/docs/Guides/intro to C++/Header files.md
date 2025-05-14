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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOVUJMHH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFNj2Aj%2F8JVOagLAjtQjXG0lk1FesyKIQZUfYxsnRvtwAiEAz8dUlH1vDgkQ%2Bjtrn3qgwrakD9uougYGIm3saOeYa%2FwqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHP2E3d7HN%2F8M%2Fs4yrcA10%2Fh%2ByStlSmuVZ2XkNElw9YubxQ8l5pVO05wCGWAaH%2BeF%2BLWCuH%2B4%2FrtRf44eG8c1sVbLKqCI6uCjX50DykH72kBh9l1gfOCNqFicLdOrjJtS6d27E2%2BZGN84SJkJAEH495jYkLtcaFYL%2FgVNswAbXu9q1AxVernDetuFF2W1oGnqmextZWIuVx1Pj60JE5IorzX1E2ecyoCywFnJ716RJhLq2BochccuOxWK5loDqxXrHEWBAYqXSMR7CwagzPCJCalh2pPSN35XvvIF%2BA7GbknR3vlDJevCgu8VaBpokwJP%2FG0T6txbLji6Gf5mRvW4QJOOELHcsItTD3Df%2Be3W%2FT7qEXnXka%2FjzERckohGwkfLe2OEeWyxWjR4rMilys%2FtaxUXN9VxTvaCwZKKnuPZLb4EJC8J08ojZ53oeONfgN%2BZvFbHO1VSqt%2BxFwMrGzbJPiwjlIwirzyYkm6kSCOCObtPLlkOj%2BKcLOEpwoOGxveIpC0kjynHWNuAdbNenT7tiv6rHudof3%2F293qxGSRAqmzvRe11527uJ3iMBVxtNQdFSjhmnOfkMBi%2FlfWKc%2Fu2Ooto3kq6phKjd4JtMPTcD09orXzBwcjiRakk6HZLaekcBP7Fs0aQf%2F3dNOMMHvj8EGOqUBaqcEfn8KtBcD0RxqgVNV9BQDKmlKr0Zgpd3VgVE0P4Nq9FSVsTX98qNSE4Lsh0zwibfvUralXdxDgwa%2FC%2BRpvOS%2FWNT8OO9bDxebanVhS0BoINxppbPQxyvPZR7fHWvhZnVGCViEEmxWeO47V9ohb4WtYAzNw5nRmv8%2BQLVPDzaHPTo%2FbenIJxhiIuPDzYG24dfbPkdSMfnfrdl4wulwnEdXrGOD&X-Amz-Signature=7e7b05ad9d8bc990437da7844dbb851081833174d4d6b51d36764c4b1266b62e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

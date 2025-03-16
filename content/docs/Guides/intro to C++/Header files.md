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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNJTJRNP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9Y0OVHoK7KXISnJNI%2BOAwoQ1aIfTX5J7z5aJeoTsicAiEAw%2FHVvUPZpUhZw6bgjTMfdJAsrBjGyawKpJH8wBx6boIq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDGq1Wg4pQ8A1AE52qSrcA%2F6MMEJzZGraXl1dr5LZ2wtZuUlvHLB7GPTAvGzcrmGgifVjMx5cS0EBQQ8LNkQwFtxkQMpvtOfVL%2B9eJnVIUFpEulTmKaPjl2fQkzVpFH358noybL8Y%2FUreyvRXHSDnkZEh1xdRH8tI12B%2BK4AJzKcOyreeu3wQYHiyxTByVu2eeTLCO0C8%2BEpSkr%2F1G0r7kckL9oni7tuI9hWj4QZMrRG3tcfJGEfzx71OazG3v9GJNybUF1jvnqvakn785tjJHNa5kzL69PgXMD%2BqB8gkxN5kKe91vGk%2BVs%2F%2Fqhzf1zFbFMN5ZEvjy1TCdWDloja8ZFYDCs4LplFK%2B9vgzv6gI8SLx5T6jezTLmNddKbEl6RnF8NrlHUXEt0Vnv6VtDW7zEr50KRAiThQunWevEZVELX3dfgRrfm83OSFM32UcLR4eGsgaXbc8l13p5xAH2SesZF17auU4pUXvjb19hqFpCrCDntAQDjZNQ32BIgvKyu1vVyHGELucpMSXwok9g0fHKApOySq3K9M0PTXcm5gT%2FLN3Fmpvp5sixWdqw%2FLD9jypmvDV8%2B1l8yw8flbZSYXYsD7Fq4axfqv%2FtwsAo7WHdp%2FF8r90m58JD0obGneu6VgqDp3Wtv%2Bd246f3U5MJOi2b4GOqUBPv2izYpL%2BuwHBybioyobPgPM4lGcx7eeExVpgpjsqQmniIM%2BKlxs7nKIdN%2B533a4oO%2B76Y%2Fy430MZmeAxD2i%2FoVfthOQD16lbNzFHqi%2FMC2tEgYFPhy98g5CL3SpwDL%2BhXoBKuiN9JM474jl7nGRVEaglYP%2BvMELhzyIqVscWVD6AMwRY4mZ6%2FqWlpZZCWcqLZG6lXNIGrQRakLukc9yrqtITUDE&X-Amz-Signature=2ccf23ff5fcee309a8200e252a4f677b8e70dc57c5d8ad53901e52a2eef723d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

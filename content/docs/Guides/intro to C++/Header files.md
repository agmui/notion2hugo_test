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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5ILJKL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDbeFRqLeu%2F2A4JMlNLSmboAstKah2nPCtz6g28DgjnGgIhALCdItpWonAL9UDq4n1Ycz53n1AhkDy%2FC7ekSYHusjCsKv8DCEEQABoMNjM3NDIzMTgzODA1IgwDY13oyYj1VRbcZRUq3AMJRKZmNVAoLltOOjW9EKxYuLWj4nLRtCyfdOz5Utn5IeBfkZGRFt0h3wKMPn2OPi%2BC8K2U4HrFbHWm0bmupwSxbvS98UlByLlpsNikMAJetsRKd2SVNOZ2%2BbgW2tCFw7xjUTIGlnO5KPZi9eJ%2FXmpJQl2nzt0k3mhB%2FHWpgblfs4lwZ5CDKNKs4tFaDTGXcFKPNhh5SwB6jXaFh4Z7lijUH42TAJRLT51aEjhGmIR3fGFMAjKvGdhQh0UdNjiJRgE4%2BDFvKxNM7bCjp%2BeuvpnEr03xe08xmA3yHBhhGcTR2kwNzhuVTugeGjxSfNPKLutxox%2BLetmXOu2axqkgx2Q4C9CQapCSrC5X6IHezZR3Q%2FpuDAV1GewPg4LUjTy57Ajs87V5l87oAlAESmVli%2FUYL6W6EMbS8QFeFnT4lN%2Bs5P6FQP0dGS1mBC0P2tWS34ksRRAUe6QXdH%2F%2F5BHQvIcHc2sf%2F9o4rPpA1TwNYmO%2FCYrBARM2NAIwIPa5vgLvw0xmHDsx61wLgEHrw6FfhP%2FjJHHk8nnLdQFITwrK9RRgxIsZywXlY2H0cEASMBlPvymopy990LdaEIya9lifVtvwmGqAFURjOnvM90s%2FBQlHO0FztWM%2FzV8XY0Wp6TD%2B5%2FW9BjqkASrMNOF0%2FPlJXmM1peLNZ1TVWB%2Bxt2uqBdzi2E3NAo0Mp0LFNIf2c7hWtMQmIUEWAVEZslMlWexTV%2BGR2MMQD%2B%2FOe7nRRAgdvO1js6g1jv54NKOu8W8YdooF7evmP1qdnEBZJ%2BtRhrVBN7SOifCDIQdSKAYElFA0s0mT4XWTqXc2h31lLHoCvXLWbcGR4hSfQXBvtHC59v8wLlPWgkNw7S%2Brnwft&X-Amz-Signature=21dfad73ace4a04f8a2bcda03393e499afbda4494b170c2782fc431c6519a658&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

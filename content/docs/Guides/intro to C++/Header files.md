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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWYEVPT%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTjPfjaYJtdMwZwtVKKXAh4Mj%2Bt2FmKIy8WJH8nlzRZAIhAKf25EIJMxtawqazfEOSHNrZ0RRhfDeewMhTzSXtiugdKv8DCFAQABoMNjM3NDIzMTgzODA1IgzBCyPJN67fOFDGOX8q3AP8qzX0iyi8nZUQncALHKa7SBEHUCgWoTpjhyN9zW6fTvF48pAGSQnYSQArwOkTaL7QoeuY%2Bgcpp6QomxwZ%2F4BD0ZG2qLZwEslP%2F%2Bskwgvf3SFV3WbpZ8oWzdm42IUXbpZuE6B3ElTxrzQCNIB5l3f%2FJ8koKEgm4HTiq3NwADzPGH0KjNkv0d4eFZYHeD1KBH2jV4uFQmhl%2BknvY1xXxPjCV9nPk2I8Xe%2BICWR3ZuiaHF6kt2bRPwec6t1tnaytw4TRiPhGnZ3hTe1t6zV8FIrBW8dhWKERFy6mHXTm2iuEB6UwA7XERRubyh8XnKYVjjfNPQ7XLohjYbZYkB%2FyupUiqpgDcFfVBpL8%2FsOvAvIVbVekPoOD7w22QJt50Or5O2ppnoRTZIMH%2Be3Ae1pKLuwvPyg6ODO1SDU%2BKeuBmgDKi798fRjsyDRRREKogrw944zewTBYgpDLWHrdLax%2FuhTgbhXYqfGpYOSbadOOUKna23GrRSDaP8iYfSBWE4O5gbTC9fBFTtJgc3SER1dO3KUQFZTiOIEOQoI1mctnr2BF5uyqUEsagjFwsCVPab1uzFq5KE7CQis0Fei%2FQB%2BpRU6YTaDCPfHv6sFUYYqVPNtam1qm8MdYwRUZbCk9HzDUv7XABjqkAa3IyKj9owuSHI2sY69qupxtt4m9r4vjvxJUs%2BNmLOQH%2B%2BguVNnxXAcWKUj2oAJVBJpyqpEbp33%2BbyKD3VIXPaNJC%2ByYbZeiDdIq9qvw77dx7x06qcaZ8Z%2B8IuWoEfpO0R%2FAX%2BsjI0rjWti%2BtipjKNg5VM2ssis1xvI7sD7nGUm9xKuvv188lWu1alEq62ZBKAO5Yhpx6klHjlN5JbRR7I%2FpTAOW&X-Amz-Signature=eaa8ce891e9748580259090268ad10dffd1845f3a80ea0e1664f37aed31f5026&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

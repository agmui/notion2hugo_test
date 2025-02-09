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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TDXBN5P%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmOKyKJnq2Dyx5ZoHLj8vpAVdWooJXqQ2h5KhiS9iCoAiAsFFqPgjHP2nJ4GSuVLjzaoJVm%2FXWiFJd0u66Ci7dKUyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgSWrl1dBIhVzaT3OKtwDUzrPwRf5w5oPYUJgU2XOOSA%2FKkrnQHuAR2nQon8mDa%2F%2FqmJFe7NobGXPHHnXl6b8whUJHNK0vl%2FMJPDw6%2FtaWawpN43LePFKG6GOlcPtFg5ncjNWr%2BdhEJfKVfYfkQDto6hfS3BNGSpPHLd6ETAcNYamgvN7AaL%2BCePcQ2vA1qL9v%2Bb5fX3GXyM25HxzRE0kTr11Vl%2BYUY2pQ4wIfELqoQTRBqX%2Bm5RDa1fr%2FFFZMnlM%2Fh8IgCgZ5wISpioyo9z3UkMoGC7xtasCLKuixaiwhtkqrFL%2BtAShmkRNz%2FQa427RwKmBmabmWrXc3EOMEgAidV7%2BmwJHQwiI2EaUoeytGlpc1%2FofPmuAqkU9W2l1Qk1ea4Qz82sJbAYkhPeyZ664vZOB1LmpHXH9%2F%2FBBWjsxDJdWbEfF0JqpxKMTc6I8sFVoHQjshfUeira%2FVH%2FMmiQC8SCoiHmlkKXh%2FV7pR1iXkPRkiB3iTsHRAVGWJNCPm9FckdEK7KUbQDaGlG9s2gpMgNBkHj6a%2Fc1UHAmZ1wpbdl3rl3N0CU2Hu2ZcaIJ8RgzUIMl1d4c2X3I5yIvHjW5rxM1p%2BKjoMFsGCBPJnDO46h9k386ZGPmC%2BOFHbeMiozfsL1g8ZzTlmXUyFeowg4%2BkvQY6pgGMfdEe%2FJNOxWnnd0Lcxjsca2pQ%2BiEMfpEIZr42vvwUyATtVoNM%2Bnl7QXwCB54CHqLNrnLKPpryHkSdib0dSc3zicZReL%2Brth%2FwqgxPordgDYanzLOJdfH%2B36cNt7BuFo8ctEhUCAsOEly56K6vlQv6Zb%2BnesPhrjBEcGHHho9hQNoM6AqyJm%2FplXwRO8m67kaIzjFkyRezjdK%2B6G9LOmnrhG2xRs7Q&X-Amz-Signature=dbbeb1619e0ef2d5bfc2911d20fce513a7b4b4853ea615e337ce7e247174431d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

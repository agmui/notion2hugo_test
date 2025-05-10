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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTAUHXNA%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIB7aJFivH6AwMIBj%2F8VfblHTb%2Fq%2FFpgOZw8EAWjWjPvpAiEAxkN8M28PJh5QzMrVCp%2FGK28gErXGMC%2BvlT4Xrzh%2BymYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhicyMDh%2FG%2F9FYSqCrcA16QEy2v2nik9%2FNqE8qz0lHzcuJkdNqAX5bnT1bi1aWRaBx%2BMgcxBoYa2dL8BXe2BVtSdw0fQRD6cfkYOOQc0V%2BVTIRhISiVMvPnGAmKbLcoGrmx%2B8TAhYPJghlBkeMse9j3OqeyzG4si7RBZGnkj9lSC7J4%2BIUGlhvi6v7PCjmtP4ZizbbL4%2FTyxvc7Za9yX%2By751asZxCHJAj6OXfF7BQe6J8ye6JI7wBqPknQuNM7BSrLmMzwtef1hq5fmsb2olpm0o0n1YgTXZEKXgSDa5LtH2Nz%2FkMKJm7mCT4d8CM9lztmXjIIv5JYNq%2FhfGV9QTS7AFKBlB%2BecIzKiFZqABaFllc7Oif8r06cmwHxG7Facnk50CEFuiqJHWavzvUb4GN3Q5rdq%2F7kzFhyOvkpu79jipRH9DRdZkTJfpGamKyWUQXc6SCepZrGob2XR7zw0oe7U3pWhmXurkO9MPerTs%2FYhKbcJ1yJZVz%2FgA4UwbtZU%2F4A7ToadSG84jhfChQF4o%2BefqRm7NgJfPM7SewXI9dGDvJ9%2BwhiTZ20SG68WDr%2By7HYe6RhUhUGGY6wi25nkhh3SFpsvU%2Fpqw9TUuGegwIssOeklnvrkm4lfDTwrP3VEYWpwRAKP4Vo4I0nMPLS%2FsAGOqUBrjH7%2FKbCxrt6%2B8OXnRGlcnRrte253%2Fv0OHauwXTNVZSsLuoNT6%2BEzdxTSrOtS9aTBb%2BXNE3viNsm73t1XtrtEY5lIYPqsvMLXMRZrkbfHhrdKO%2FYTScmBlN7n%2BvOcCii%2F8A8Vq29M5gJ1rgehrg8F2xvnHMOJ4qFwqG8w0YIvCJqSftpLQz%2BlRN3UQEPidilSIlJRrAp2IxnATOViwAFHG56%2FLSt&X-Amz-Signature=a01339c05ed280a4aa04d7ac7c43f807b573d0df93b774d3e08a33527940bf2a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

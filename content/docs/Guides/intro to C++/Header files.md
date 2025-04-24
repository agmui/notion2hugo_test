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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PYYWQAU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIHIW4YO%2FitsNwcm2MRWFSLgkMHItQ8eBOSQkke0pb2cQAiEAyD8uTA0tJbP91MzoDQPwPX16ujonDIj%2FbbYdg3opNUgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDOhMDf3%2FTyF6mY82SircA%2Fy3haJrji6MEuWINwIIsR8aLiJNA7ESSZFFY1IXLJEMWevwMk%2FjnVOOBR%2B%2BWomd7as%2BeL7Ry%2BbGZPM%2Fu1%2FdBSYQwun03qJu97TyhRuFZXy3SNEmbVHA31123yNWAHKp%2BzLnUsyWkb5EaEkULGWHaFvqpgYi%2BMrgTReLpDbScG6ia%2FqkloQUtbZlyNzLAd36h%2F8NkQnB7ftIQWSJA78K00NaZ2e286eCn0TMeuwMEFYvdRA3fqncLrewKU6qVxHJ3td%2FG7FJOKqX%2BxztSm1jqFq3tr%2BAb%2Fhl5kP6pEUw1ZP65DNItnwIFMsQMoJHI09g3tPaZZg9IXDzOeJH1iqPbc%2B%2BxGAWdRSAV9LgpkPs32n7DcQgVJbzslqh1eaZuk2KOuV4hSA7UnIctCN8tihWdX%2B4R66R7hXr53lMeXfPKNbUBpyuKDSKDx1iyqJ4utv6tJrh7Km3y%2BKUFlTGFgPxf%2FGgB7eMKJPy1qjo8yohXdV3ml8ZLBNxW4%2Fl91lHDBqoIh55lOW3P7GVwtgXA44mRhXCJUtGFdrJTj9fZnE7beJxOVj7Je%2FgELKaDCtmXWPJh7tcZ6xB9jHUotFXgkXTBvTLV2YCe8rb9zsLKCT6vPIhfziqcBVsgaywnXKxMO7oqMAGOqUBTNGT9z2CdeIYIgpUW2axQT4LYkO5qAVaFnf05fhA9TwNjZolXrgcKTjYTmd%2BhNzQpaSIDnS7zlKuaNUZTCdLFLfNVpef0Kcu90PcQxDz7vLM2IhruCwrYh3zq87QOHtnEqAuQghdnDz8l%2Bu%2FoQnn43FcAxgft5b0vWekdaS9M%2FKLOacXOovh9vgAFJrVos%2BfyvmNedqOIifZCkeHhrcWUA6R4AA4&X-Amz-Signature=11883ed460185a7a49d153f579563fe4a2496940e75397a3d936e76b2d4a5a76&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

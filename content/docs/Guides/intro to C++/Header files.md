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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JA6V3W5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC9%2BvzIQXuYEZ5Pmm%2BfBJvk7cSypvZmUmAldQLYafBUYQIhAIqU%2FmYNMh42XiArsynGBqZtq%2FEdvhDdaXGOpOnTBNMHKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqYGwZKLKdSluzNVAq3AMThYkm3snYXaHriSGHuZI7zkVP6r6%2FsB4J6sa%2BaypE0otUzU58C2QwHGaozWXF40Evz%2F3ixbiniVnJuU6RuUmFs92RmWL7gFbHI%2B8obuWt3ze4cfiQ%2B12%2BXdQDHZZXBp%2F%2B8Ov8jMAloSWfB6fLl5r2jOe%2FottvuAZaNMpBckicn9D6n27RPDcOvjcYMJNns3Fku3kBSUTNP9M3WVSzcS7JnjmlFqrKPITy16Y82v%2BQ9lJxa0GqMDkH6LI4rQ8UvOQD6FmYv6MoTj7523iDQjTV0JUX6ze5ac%2BalkWlvxqRkh5WpnaHCw%2F%2BorDxl6L11mM8U132X%2B%2BBNu4SL9Oml0D3TjHGPvt0qxJ%2B1YWoKA5IQvsuo7OQeSu%2BhxTuxmYmLpyqXsK36iZatrBJyU%2FToNtp2A5eHcbBiwBZjkcX69Hh1ZANsi1aGZPMdSv9TDrjtZKqdGU6iMCROxsnw4vVrjuxXPBoXhv72KiyqPGpe5AuSVvtQsBjAruSEF5%2BnFsvpPnuzdstc1BPPgxMan3RDvTU%2B1qPLOzZ5eoF6gTeyV28thCxhEh4vVjS8Ksqm%2BXcAKLzH5BKk8RqFbaX%2Bs497sgGZ1wmHLN4PXH9VPgZ0PyRQ0bkNFV%2B0yF6xL7fTDDioOa8BjqkASzxxMGLnAJlXaJpBkSyFnDnOnORJTTuvw1QFtzjQCiodtLAjfcGK0QKedWQbOgld2kRC3os2iQLfGUx169Upbk%2B%2FFymQjzBrmaMT3oKsTQJU96MG%2Byil6gh7f9MxnC6XO56x5WNaxgCd7CcoarXp0RIgwBy01tEecOyfzLn7KjeFikdYx00aC6RiFXGLyOBJpfT1BGA48oGtdiveLr9W1C1pnXg&X-Amz-Signature=1d6cf33ced4a88bb61b22646f877b6a287b335253b42ce659e8f97d5997d3a9b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFPLNX2%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIJn%2FB%2Bx5isJ%2BL2bRGW1GWs35jiTu6Y0wPDI5bTbyhQAiEAl7p7V6LKOT7OJnnDpX5doVdFmiSfDX9lhDWB%2Fn8NiS8q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDECAldcJD7CNR5xjVircA1K04AFtewqGWUbnhYMTeR4dwWJUuzDzSYpqJ2gudjVk1AoKbPPheUQBSpXv5XRtD8JEzCmivDQo4NY5nilKYocsPI6NbDHMlrDVNie3B%2F1rrQ0Hlf%2B1QC9gSvAvGVJQIbjfOXSpmWcT9ogPsK0WVut4FyarXs7NAOpMDBZS9JOarIqsqa9QZkRRJ2KesAgNTziiQWQsV6SjNNIFC3SUsgPOxZKuf%2F5tIAEPPhVLlmsh9Hpc8VZLCyHcx3n3l42g761BrjwY64hvVb3BJrCEh2phgkCmtbG8LjfQy0ZrvOmkVW1ZdNHpM03v7v5LPuGYC1HbhL3TzUBmQzY4wL3nY1%2BqQDTQde3sAqwaSGdZRQVtUDmqzSoH776PqdlT%2Bxv4ZJ%2FJVOSz3zJboFl0nTntBYa5Ryf0rkCOrIOx1xezH8Ned6d7GAV1ntSf2vT89S%2BwkmN3WQwXp6Si9NtU%2BgNftCw57LCSX2%2FGwTIupwIGKZ24wKoovwgv7azNOo%2BRnt1BFgUDlL%2BgyQzFVuJWbqSX6LPfglcmjZgEtkLa8fvfTFdaWQFgLwVUV9M38qKHUF3%2FJiY3jjgHmguVCxdQk1fdkGvV3LDlt4s6erxGASuNCwkaqDq9%2FLAPK5FmCbgdMIy6pL4GOqUBnpC57HDTfEpwlirUpa%2B%2BaVK3XOTgZALIYD9sw2Qi37K3PlD3qUt%2FvyW%2F8bh3YTZ73BDuZ6NW8%2B2EcIB1HAITcZ%2B%2BlNxlbO9PtmCpnlY0MDlmZe18c9%2FELkKSMAd%2B0KQdPRi0fXHtqxYq2N1Q0vaXpYdWgIeKhJOhN2%2BG%2BgbLRvBSSO8zZOdfQCOJS%2BrjVQfS2TwAIdBgTzPbeqMYM4KKLXxjcctT&X-Amz-Signature=c8860d735bd9ac136acdf89ce8e0c7720f3b4a0381041b20c26ff17a9d341e67&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

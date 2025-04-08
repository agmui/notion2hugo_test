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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KPVX2VF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFn2d60Ag%2BYdUFPs6QgxmP3IxxONVsiqU6G0mCrySp5JAiBVV1%2Fc8w0S%2B%2Fhv0HB1K9tgdEDltGb7wdbADCMZj0YNHyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMVSoSB2Wt53uA62pHKtwD9%2FY4W9DcsvmBOOWO4o2ujeAFWvEwKanrOg1oQm9FaLCTaQfBtWSykgecEClPU2JyJ%2FJKfhMHwpAPyYt1gg0KxBdKDlgCH4j%2B0TerI53nBEjehqkxwqy4KErwI2WUOzlRU6wC7FF98u2vq89BSJ6hvLv95T59Udk31hDgyrEqgTL5hy%2FtKL4aKBVf9uZmjRi9NSvBYsZiwRXjTIfx8PXtx3IYkiIKLxASBx3r0%2B8%2F%2FQ%2BDsCbfX7K5phApDriDa1x4t%2FjdxX86Iq2usUDoBplh0db0yClhzClM%2B1DvWRHVxxnF%2FyJt4hEbJ3q05jErWh9IUvQg4h4GbpgEhDSBoZsssE0jRD9yqJw1X37FEG2TJum3rNn2661Mu6LEJBTd%2FoScrXF1T7BWXYXyHY%2F4D90cFFBn5IgMeYD0jIbRUu626adlr1e44MDtXuk1mixRgBs6YtM93Xj0OgU64K9P1RkObS0JyBLpNlYVatCALj63GMCRMRT%2FMEjzEp8Sj0C9lEuKJksfkiEe233HX3gAl5%2FgD3kfXF3iO%2Fz3YHLKequUnSe1q9As6QwgcsMsVd8DLImFxkyYfaT%2F59somd3MCYUUwwbzKD6LW%2BC6%2FSzKLqVvUkNdSAUMUhxDL0SqzPYwzobVvwY6pgFjlq%2BRQLtsnaSWQomxP71O4%2F44LNKorsIS65zQj23F9W7IN262MGawdPPbxHP1tXJEbQgWPDdg3CbMwTAN7jf7kdJ%2BIjhlQzQDNrqfpPL9oHZHED86sO0JB4vF53F5f54b8X0VLkeM15DV7Dz9ynXvsTKdfyzDSyJ8ViauoRsZI0k%2BSJzqCHB6PlXV5hYrXegUhU7pr4sNbwvSb7P3q91U%2B89djfKd&X-Amz-Signature=6e4396161449947f04e66adb15e7329a77c8363c198850f794fed68ccdf1eb49&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27SUFVA%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIEE%2F7ooQcTD%2FNc7CeIAr31Jj5UIAFXXchN0IHds3lU1iAiEA8pW2JD5Pxq%2FaJScl5MxYf%2Fnvd3N0NXK5SujHO3QlNhEqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJktTf1Wt%2BXGcqfY%2FSrcA0X%2BCBtI5a2UhdDb6x4r%2FvLwghMtUHHw7ivl42grEJHDpQnbEmuB8djDPd4xYRYKANFWb7NoVzxf6mdEPmwZeFbnkxSNgg5S9m5jOr%2BnhCwvXx7zWENy4DRp%2BwlqYXx6ltCdtMC9Kd%2BTuIzFyegr%2Frj%2FZSlrpX05dNwIy6hIgSbFkGDQVsKYyTU7E6Rujd8AMGsst80n%2Bih%2Bp90zcsKfY%2BOrJqZgDxGJcUeBwtBqtds4DN7P9b7bV6jNfDcyQOUcfUUrsz2u0bAZddue1Vju0uWB6l70cHwb0yU6SiOj19DPmGATonfAEru7o8uvuizMh5gwjGJIk0i4joxpkqnmyTTHwQzFiqinzkwsojjQgOpMkrEYdnf9DNrQTP6GHCj3IF9SItcvjoeGWFlqkTLfJ5ZpZVjWj%2BSGaKBQMB6Em7RJ4%2BblA4ymaRGrrIM9%2BhLyr2Zj3spnS1KoCSp8oG7ifVLIm2j0lLqMJjEmJ%2F6SfLJemTbgycy0MEqfVQqZvb2VSCwXqGVXvuzcj9SmmjzwEAgFBhttY2X8l%2F83ypSiqLz4XAnQZVAuLmm2uzx68%2FEEmUXj3zMEYTOXOOlYlpLDOVvQfBmyNbZAcxCu3ow3xXrVHTLge3vRkbtuDmk%2BMOuw678GOqUB2q%2FDU38a9JtrYjaRcOg9A6cfAMAuUFPP5SOIWR%2BfpaIlJTQ7NywMVHGOB29797NXKMz5MdJR%2FXQxpKhDqdRsH2Bq002vk%2BD%2Fgba87UynulykSQ2uyrfzw9wbGdfqTlojmT%2FpgzODPz9wZ3CyWn4evO6fODQecyVk7cRgadnV%2FbOzmhAkY31tWd1sdibyJqTMkxz56RN0nhqhJ0%2B0IYz5pKufZqgr&X-Amz-Signature=af49c2f5f895ca5e4968811b11880f52326a4a1496d9079ee82a577180763c9d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

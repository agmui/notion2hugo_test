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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMXW5O7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIHbv45WK4ZM%2Fq0xWdkekJ2xY8%2Bw5Bea%2FNns6jCaltaBbAiEA%2Bi7uo9VnNZZ18BD4GJoV0FIy5nkXSSq6NuhSbREQeLcq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKgc0dl0UG3aqWBPpyrcA5JklJm3vnXOn%2BozoEMhhX5uAYNp1L2d8XnsQGoG2n0eSnx8LGJs15KtWWsddcLN17dq1KWTyaOKHPixKEbddP8GCjmAAeo%2BioTSKWP0gIEk5Bg3JM9eEp%2FZW8VE%2BDN4SFS6lcK7V30LcwN%2BwoymxTBe7YiVyFrkPS9QTXipHZbqzjY8JX%2BsDd259ZuC%2FMD0E3Px%2BNqhEEFySM8j6leanx%2BOZPLnh%2F3r92mlv4e%2FffLr9MMHRP3q1vqM4awpifIaZJjxNJtUApdltGVbnuvd7ThG5Sqzk2C1%2FlGMmBGFXoebmm9292t6KJfgNxHkkZwPhBio94xZ2TwmHEmBAUS4HXKAcvOWUv9IVF4LG%2BGt8TIqLVssWj6AcIrlsKxMK31cXY8r75G7xJeBbCcEH97S3Tw6gIcRQ6So1m42HGJASwy1Hr5h9DfbmRuudWypcPwK99bBk1DedJPTYHxJ%2FdPkwt9BBfn%2FUoyDMNf66Ur7%2B8RfFz0gSOay3bqZPSoSqOKxeNBF0tmtOJJIKdizZp8nNUe7uCY1dggWFsjfPBsUvUFP%2FWRBRGGKZzgKLoLkIWUUKe73uL4iEqQdV2wSBqrXU6rm2jLIU3ZEYpCbj9j%2B%2FXFb8o9nuYAQLHtxYG4xMK%2Bvy70GOqUBpg%2BDLH1QDcl4p5c54PB3wd%2F3xLzRnASUPt7%2BC1bG%2B10uiCTLtwBuA75bol%2B%2BKL3gI1LjtRN%2BkdoLv7TivjqcqFHE2JX0O4cuOFqe23UEI6UCkclqhGtZNjd7IKIlSN1cWDA95tnHW0jF4qt%2BModTPfpiI6XWtMhN4xyR1Mm3hUZNIgxYcPrDNxZuTMi9TEVYcwhGoUoheKt3NWYvRbpUjNlsJ3sf&X-Amz-Signature=bdf7cab1f541aa5edeb9fa203789ae3385326ef950746fdd0121aad45f750ebf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

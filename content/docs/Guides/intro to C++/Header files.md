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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL7GYYIT%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDlWRu1iAeUzawaQId93K9JNlxQh28Yi77Q7CD9hBfUYAIhAOo5fTBZnKAbMEz1Oe4gUnA05aD6WFRhVymRlY0%2BtnNSKv8DCB0QABoMNjM3NDIzMTgzODA1Igz%2F24bIaG5Md304Lncq3AOjWyhZjGolwip0VjnBF2TdEc9tgMNF2mMr3M%2FC%2BAPDuAwv44hq6otzAgbcOephfd3QK24MD6CTIaseL29pKdLaV%2B4IZTSEAXfRFptYGy%2FvpM4xZLhqtVjgNT0IhJHHMJ%2BBZjsTtUVuX0YkxF%2BM7nteDOAk5UGeYwpbmWx2cYJ2oZt1MUDQYBiuzKlQVZ5l3CcfJoX7EvdrN%2BnRENA8AVPXPJek9RBPEJvei%2FJNDLm5WQ8mcFW3GtRupwC5odeTkqS9f0aJZGsq7tnpRtdPmj4A0BWp%2FyoMvSd7WwdEfW6zzV0BNp6Kb%2BNfDh3THKHm9jb9HInk9LLFnT3yDlxPdQzsaI%2B6%2FAEQ3vPm6Xmo0%2BXndAuYG0OcIiB808VuzqFMb8neNp7t059Ac6w%2FNUjE%2BSoCXf81n%2B0ngs0xRuf7LVrn%2B3j3xrv%2FglkzpOZVX94opS6al%2FJAF3njd0ziwTeI%2FRhGKxPrNU9utTD0aPGfbuORnrxpFeciY52w8cGH%2B6bsLZiHSvHkQk8TETsAEkqXSiXh0y2Y0BxImrz23FYMjzMj%2FY%2FdCBrIXFJQ2vhu18hw5V6eXgckEyx5rp4H%2Fg%2FqNrei2g9dYzrBjbRgCD%2BBH7DjdkCFCD9iYKXqqqVQBjCqu5vDBjqkAfwJfSaBgXKwjQv8K9SPtJBZeVaR7HlamAYHyFgOYM2MXaBrtoCnDwYXkDy6lxtJzH722B5c64CsbGkR1mrVS%2F6ulpnOfjzE%2BglmeIW%2FBRiWuUU98ExElccn35JhbrcVElOHCuT7QbI%2BYIeRb%2BGxezSf0tJ35z0imc3zNg%2FgG%2BsCtd7jtETvtMgn1h4y4mrtoMxzUFvlJQQCjaKj2aVki0Zu6%2Bus&X-Amz-Signature=bf2d84c0779acf01787dc677ca7928959c45faddb460896bfb5b617f360140f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

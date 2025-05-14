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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEXLI3IA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIHKJBGRM5ZW3%2Fqd3htIWBM%2FbGba5n7jRLN8yRJwf6ZH3AiEA216OEJ3nHlL7aMBY8SO3CnrMcjQJa2sGwfOi%2F3v8YiQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDmslzKw%2FkLE7Z7VSrcA3RHAgVU0i2QlpilzV%2Bi5ptttBkrtcRQAyyDdtKdVqXqKjt2%2F899ehI2Bh%2FiR6yEkEhERcLLQg3hFujJieVh7xnXElic0g9LCKExxnyDKqlwp3cWZ1%2FsUXIU7rL0pVL%2FTKQAUZl6YvIFn4gCTLuS%2FOJ2tTf3HW7SpavLvNvERyT7nbKNYjsxFwAORDv1mfuzqNsWkUSORsZR2txS8K9%2FTRqMrDqvcsYcZjJvxrHnFXBPkRnBq38s8JbODU5SK0y7QQje8sYy%2FbrYKncNYHKOD70VyowoY0k3Z5y0bS4J74pJHlLimD0TvO1s73DuNqt4IzvwbvrtmLWeRskwus5%2FazTZaJYLwgAmUYOn3HmfE4sa58Z%2Fog1EqQrooXEJ%2FZPirFVfu1utfP%2BL8C27TRWBiYEJYuHQ2xc12BYcSl3FP9SmCqemBa%2BMGAF2818g41bsxRbsimd%2FmogZ7eU%2Bqmg1BuRX2kaf9wCSXGsGXx9IJG%2Bxp%2Bg50%2F3r3WU0M543X42Y6k9sbry0oe2CZJivc21zgA2t3caJ%2FQ5iHRHTeQjoJ3CWKgM062gopUvsSGR4vyEMlBeC9apQxHKr3zFKZunvqU91Lt32VM1eKe%2BOFJ8sfQvv0tSyd9HAspoYIaQEMMW4kMEGOqUBxDlFIv46C6Cx%2Fxfseuac5Gv%2FQnPNLG%2FePG0ZqIMM3%2BvUXnEhK4FcVJWAWaNJ7bJRCJ%2Fcggv847%2FltIxFEUrIuCWlwKT%2FGAavYRhHClOp9IwgnodRYGDTd7jkgYBB1EPqxntpcr28DsBfHaztE9nniWNWnmJWS5NVvBa3w7IpAE%2B38mTn7poC4yCYu5GyRgeQ2jFnY1B0mTPGLPVE8FTKz%2F9wpeA%2B&X-Amz-Signature=a668eb8ea347257944105b27a8522b9af38f8e86abbf3199383b15ae7d215899&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

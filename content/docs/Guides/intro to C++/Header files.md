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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ANNOOQP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCugTAfFB5lBCloRhSc0TVrasCUCBILFxGTVGpNCdr4VAIgT0F51e3b9eZqICIz6gHSsuft5R%2BhLxlXgdUBdszjAcYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDEMBCIIqYWYWz9ZxhCrcAx8QxlmcPYf5isbMJMKUlBl42tUm94WC4U8BdNd1j5%2FG0wT0g1rxKECki8RJeogGVqVYZ9u1S0SD1Vkj2jfbSxTp2huNFfzEW5WfPbUg8bJP25pvpvRn9P1IhPjEU83koyCeYXo8HTGoltENTlwdtth7egRy%2BZy4an6%2FmFEO%2FMZabB3gKHINZ7jsUZOty3Sio3Nz2PVMQC4p1jI4bWgnMlQO9jI7QnYHcGv8swrFefQox%2FyIwQqu2C4AIiq0GiPBodPwD9WT3UH1esOv7YvvHPKSNqaPoGFaHjqKEF3uV9AN6mnoge8N58MTO20UpA9R43wziwxAxixaeSXPUbQ%2F386bpF5DsgaaZ74PGsF%2FTenOwlEmMo1Z%2B4lA%2FTXgqsXz4AafOYTDugW%2Fyi9RuF67gc1EkZQHlu07OTRfstabcRvDKgD13cHUOjhK9fNaoTmgsrK8UMVk7Pg9brSdW6aek2yPhCCGm7KsTheoWNLtx61iP1ZEs7fL6%2F8UQCnV8SSzT1UqZjJqWJbvPrp0vBjcJ4yK5C9hYvW23a8bMM7NXsflpOAup9iNQjPxIMv2SsQOHepypcsDlu2OfCS9ymeS89RqiA%2BhnuVkdHJfJ%2FbbD5mlVvClYRmhi%2FzxPZC%2BMMakzcMGOqUBDmZjMBKVfjLnp%2FVoFTWGMsGhKRr%2Ft2h1j0NOrll7Tg07ZUQwHEDmOx8N6Is0Edo%2BhTRJcPCn%2FVZ%2BiVHmOdAduwdlSlMAcowQ9o8o3rn7gLO3Hi5pKof%2BP6mYxayxxQirGoLaWb%2BgnkPkULAlptQSfLADiWHdVlOClLYTnSLAl1QoXsGOUe5QJA11eEIPyALA40ejsSM0hKprNkVhb02YwUwLyhGe&X-Amz-Signature=3ca4328314d5b3142683fbb971eae6d447725024931c9f98aab542eeb43028ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

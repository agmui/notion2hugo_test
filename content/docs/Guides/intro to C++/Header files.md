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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672JGEQUF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGyDem04tLlLkLV46osmq4gWOAMop1w06yJVbeh%2BQ%2BRJAiEAwPxMSy7tYcyr2JUlKkhYtynipE6V0gVd%2F%2FLc4EzEEcAqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdV1XqoZ6rXsF5tYCrcAytpfrKqnpDp7%2FzRkY5cj35aVx2k00Ro5IRzK0X3FDij918aT2Ek8ZFdaFnkS%2BsVFSUGy5qFivz2h8u2cgZU5Xh8j5ykyJWRKxWX7jGx6ngIQbosjIEg%2F7hgg91O5bygW%2B0a6DUfWKPMdewPjdDY7rSFXWHqQlG2QdSqHNAgI4okIbxbd84s9IGiNm1MG238mR6FoVi1telTLuf41ytpnSN3i0ZAV2O1Xju7Ezb67KezUfnatoqepImkSfEuZaLgLFPRc6Q6xKhnMkM2AU0m6CcYgUFyb61WfjUFK5ge%2Fvp0FpuwTHbVIDYUpcTyQjfqwn1jg8Z4GtWV0nsyLB3mG17U2PNvndjrpWUgwdUlCEStURNWEX2VPhyK4fMVH9kBJXGrn6qHPL%2FQUmbhzMPLGEC99mpKju4SLqz2P00gncCWyyVW3Wof%2FyB3kqxCrmbfwwidKKprN3tQmZkyiptM47Tyatz8EhyoFakRY%2FdCPhpNGlI3ibVT8e19spe6dpP56nV%2BNkC8k8RUdAnxqDDo2RvA0QAxcVTR%2FPlGfbbnNxJTVzJP%2FZ7jAdo4gtevSHkT3coIv%2B7McJWSfSWiOqzmw8r0dRJyBzyT48lb3MB5fnX3zhCA68Wwb3QpwInOMJrhnr0GOqUBTYFcV42LYFlOnb502y6iSoBnYoQcmzEOfaEkQpCGWPFlpQO3iImM3Ccp4bqbGWye4Tuv5kOT7%2FE6YnIo3Q9E869%2BGovgeKlsGRcVApOdod0Ywvi7Yui5YizWrUWUawWBdgrXsQqUuup%2BGLKp%2F2gPc9zkYniC5elp%2BYy23toWFm9oQzRJtHcHl47RSNFFOc47SWfLzXjYP%2F2V5nQCH50Rtdmb48TM&X-Amz-Signature=4076da1cc85a60482bbb35ce01c63f30f9447116fe605f0c4c505efc0cf54ad4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

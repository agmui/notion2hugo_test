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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWA7D6U%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFs7LpP2F8VmppXI9HDNItvQoRoi06E7WXj8ZIsci0elAiBWiCEEfOhZvtWlv6WNPpwtFwfeoG%2BfJSPE044TXeAnMyqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1uu0Xdv9McYfX1eyKtwDmNOrdPNMSjWC%2FhJjghg63pWsxvHj2V3xHZ0l%2BeX8HXoFXd4RAInEHdS%2Fqo6K55KHh%2FsbBh%2B4Yb4Mmf4lrk2L63etzju%2F3zamNj9DvhpbW97hP4uPALNBG4bJ67d2yzZR5D56eaVZcvB4a9FQoC9ZisWycti3PDbMuFUivHNhJCdslP7mUQspmZgQizoTYvwnOuItbgqEqekQAO%2FDSrtJbi46%2B06lUPqMEu0ucYAgYeG21C4VRCm5130rbZe95YXEULkLI0YM%2BQDxo7mjTMFIuzCby4roQGLA31GZExpZcGiOr6Zm1dvugpPjQmB62BVKaqm9lAZ3SLo4BCi2csgoCbonH14xFVSS5uBJ35ykOubUik4Hn35cENafv2Zx%2FCsLdF%2BB4XJiFHrzI3B%2BwZZPkFbfuyvorp4wcA3yXXyI84infbsNBJHIjNH6DVmMvyA4dqCN94qtSSCu3QKTni8gBpGgfp3CwXRYwGpDBUYHyScktGu3gRRLXJbkAcf59i34dljqA0AYergbD2v8CmZhgCzroRzCcMR%2BPG4763%2BxxiJasGxg11NsilzG8I4e8sltwFipoXGc00bChPpu%2BeJ730E5UP7JYFG8j78nTIGfoecOlR8zIec4BBXbd64wsvu3vwY6pgE%2BzCXZu4FaVwxY04cbMmx1%2FLiiSLkJM17M5E2hqzXNxeHOfAtWtUVNqpc4Cj6EJfdND4xJ0pOhJ2s3Eue2nEpekgdrZhU2PdecTK0zkO1BO9D%2Bix4gpX0fb9lVsYPFc4oWRxRv1nivV%2B5mXJJL62B6CaRGZ2yweKk60aSj3eoml9PBwkxB6GDgCHkBrhaaSgkPMU%2FHylzQhTIhskO%2BV9pz9uJxQ3vV&X-Amz-Signature=e3053deefcac7f047a663344d51f4f81f37f82b25af25c82dc9b149f1ad30d6b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

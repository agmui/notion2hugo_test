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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQY74ZQM%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD0PFRRB%2FfNlrhQFo10n5enAOg1CsJkxU2qamPPjbnngIgWIeascL6OI%2BQaKSCAP%2BBJGSDtG7gNu%2Br%2FidsSvZ%2FTaEq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDMTUxhjkEVaCarixPCrcAwDv4g%2FitzIwaSpmVMueNkVLNeJ9F4gswCt17UrHIltC%2BJFwjEMqkdp6xuNYOzWyrj29V4TNIeVMhLDgJn7AvKlVjrgmewQeR3jTLn3qWibgRs5sP22tfNwdUH7KoEaIo3ohxU45mvbuFBjbOWeYtO%2F7bTdckXxb1V5%2BcV%2FlSSvvfDD9vFsOiz8QNonryXfgublqRlNEW2Po6V%2BZXVKpoNEu0%2F1LCDIrQdZlkxFa5Kf0MnzmEMy9%2Bm%2B5j%2FsTjsEVRrtzaflCs38D4uZVgRBQ4mzD3t%2Ft7hX7jJbRrwo8Jk064vtDioW7EmKlYvYwqIP7H121euB9%2FlmCq2eQpEsVSm3sHys%2BkzGviALaULfv1538E66ONg4ebHfzA6eup3GeH7c4KlporeRHXjqAORdade3CfxiA2FvvlLUMXtQEq4v2LDnKQyuTdWYj4gpwKVec9jn6BTcRJuS8Mv7oVrJ%2FmCgKaKCJNHjIj3fkQiL91U92xz2TWOQoSXliiHN3A8DiC9ZEqzuQx8AkgO9TlfVLeOpnOSTdfS74Bvp%2FNwfpOwzoQrVu36MtY0FST%2BwcsXjOSgVPBgfRKyO1o%2FqPBdZGQr2wEBhS6D%2BhObiCPw9uVPZE4kamulhvMEaPDmHaMPSm5tIGOqUBBWU2bnYqXRUd3HsaTHZNih4YyAuFUS3Byz%2BHx5SfinsfHw9rfhca9ijQO8g4sXU4rElObatsXSJkhu6QV9k%2BI81MB5nVHBLqo1gMM6mGC8ZClLZrB9jlsMlDQysKzSSs8Rg6DFS3hOH7m55jyp40XdFUuuesY82VujBLzIZTE%2BSXYbh5FGBcfGHW1c6%2FPJRZ6u2KNwKqY6JRGGsqn3d4FGLMHLZ%2B&X-Amz-Signature=b888994033fcedd75f2e620fde3ac5d0deed16bf489aff0ae59159dc42800a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

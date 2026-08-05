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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652Y3S52M%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCz3s%2FdVp88%2Ff4gPYPd6xNYaNOiay3y9Zd8tIVzlcfuygIgN%2BtTRM934XYfxFgN54eEXSfTNNZI7OpgjK%2BireQae1Iq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDBQAsV71xGxHYdmfAircA%2FGIMAN5E6tSrhNLq%2FKqrM7bN8eNg6TjCqWixH%2Frez3XhAxTN0tqbQVGzLuKYlNGOXbiL6ew7d2ZRyfkUmNzIlQ%2FQbt8bN3Wh1DwC9GU0xqdZu1Ajz8nAtb2M6l8sNlDN3vTzLtGo5a8AAgcUo8F6%2FudO7Ec1lyPsobkl1Lm3xUUNrkF7WbT7ViyxeNSWJkcNtmC3XQQXuvx6bIdX12vl3uUVZ4R8XmnlwNWebozcoAPLQxityUxUr5DXlOEi9P2WkxSEUNHfywC8bEjejc8jpnFNOrSIucPXwIRTjvPIqYs8qh5Jv2BeGLsETbcCFIppm9PgMVWmm0J3aJ0yn0aEEICyt6Vf5f6z0ztMBJtVMhR9I80AQyygSXEqQG1nWrjlqBkCmaLz6Ppn1PdnRPAZNzK4uvEX0AgGSyG42xxWXZzYPch7lRx1rwtq78rV0VnIKnt8L6OcxoHyS64OpWEmGtHgJK3WseRa5EhzMWy1TjTPsRk7zWjruoVsZMATMzsXkIM6lElYAzD4UsogcRqRvTLyUATiRngwKQD3iN4gMt8TMiHYhAla1ZnPGuDUDaJtAls4rd1yv3o5Nk4qTZc1frnsJHbot1LR42Na70X1pGGR7mXOvDtlvGO7zPlMKaXytMGOqUBL41qZ9VhFh0XwUGtbLm5JsjCJLiDnyI1Y8u1gsHOtWZU3aRCgSp8MG8aH4RPQXdQ8xPRRB5kHm79tywcnPh8mUBKLVfwwnIlGuYHt3%2Bu00ww2tiCpHKFdsrsGqJ%2BBP8xuD0J9U0dtMenNfwYd31VMrBf5bWbD1vdZgQr2siG9pp8DW8VYnEpbzuWopyt94hd3sDnaQYC6FqlXJ1YxJF%2FXbrTs9FO&X-Amz-Signature=afce6fb5c582464541c3200d4fc2649ad949516d76830d076d0c9683422e5da5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

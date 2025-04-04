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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466636WAUDT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqkeXAKWVSJLOP2TrgmC989Wqvz7LAPVv%2FGg552PObHwIgJx72OLkiAbLvAa%2Fdej3PIY%2FKaiZqccmDBGNQbofHXjYq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDOK1meg30YMo%2B%2FSATircAzdjiBeYy718Quy%2FFRgKpKEQ98kpfOUu1E03XooN6XO%2BQugQh0NekWjPI%2BT3yHXO0ttimESxuJgNfVxWvnB93g0lLpQfWu3pPHoaxwrVp2CHM6C2HCrU9c7pIdNxlHxcivRBErDpojmJBr17uX6qy%2FcHscinyIkgytpJ6ID2r6sKZI%2B9mN0NF34fSfOTHhUZTfGKRHJYnUaALmPDDC0KvEmZ6gvjAKA1aOQhThFlWhwaDGVieQDhxRsixlovxSkfn7icHGXM4dPXO84pR4qgOeH5NJwIoZB1orbnglfRVDGBwfvQjMk%2FhlIO20n8OgYwBFE%2Fzpi2VDVWO7fA0loLjHg5SDvvbffQCu1XwJk8Gb61pksDvJ27DwG43Ypri3HSK37jaLDBEMLjFq6vPL7r%2BM4NDYIi8azWCdSfQYVG1tc%2B79YN2RL%2BuTRRm7E237A%2FxAPyduIJGQqkCtbpcPp4v5bha35bZ1heOQZ3ZBmWm6ZJe%2FMO6FGEqYNIeSatRVvFJ3w1VmSDEIML21LNQvJd2KHarZC7wapAyx285KqdJBNp2WYHzEWBUQM8TiTItna2%2BHJEMfkmH2CsF6CFSzWSzQC25cxpthaiH%2BEgcWJmmKuDPwXS860b9xBtUlx5MOaIwb8GOqUBqne1Ofm9N%2FMULb5tSJl0daeqj2w%2FJEf60LX9sKSiROoNtsFXqBCwTOrPINlII80h2d%2BVmGVosrJXd0XDxlWV4ZjNHC%2B%2F3zIz79LLSyxIUbkvQBgcHlNdl4b%2F7NpfTT8zzTvPSx5T1nxLrkHmohqWM8Wx6tdnNlCAQseNO%2FQ8gmTdGI7QwzbEjofMj4ENkoZkY9q6hRbj%2FGPv3Qpmj%2BKXHzqUKVMb&X-Amz-Signature=cc38338bf2ea1822b135ebdf4713edaed048c57494a1eb565babc977c762eaaa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

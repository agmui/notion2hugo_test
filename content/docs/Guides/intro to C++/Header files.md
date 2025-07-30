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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPPUUMT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz%2BVrGS%2FnAKIaC%2B1xmkZGZerxY%2Buue9qdSMdKQnTyfagIgLYxlI%2BUICHd3VDkptWqhqHBTK47rTxrDH95Z3W%2BpFS8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOva4m8WMEgXTmyJICrcAzS5cfuzUFoQhpDOdDBmxdEaXPROe0joieeXigI31mdwVbsxb6oO0nRzQQhedyfrDDhJHhufvT55k%2B%2Fs9n3WWOrO9Ll9eRJRZsqQOCDsOlye2jx1eE%2FGc61mNQoxUTfHSUpJQZbUlbJgmJXaChjXj5nxCw%2BwEo8vYR2tUGPqYCTKbe3hrzTL8NulVlDXydC5CtRCtiHKZFiHBeFnAdeeBwAo%2FNmyXp49A1xfxphiouZs0zvevGvmdkircfyWiBFWfDvcBnFGRWfJvmzk3yIBF092JUyWAG4AW4vJ6ro8k5%2FRuaiWAIDGzA5431shNhnzSWv0LtrCLOaVAbpWnqJY1aZbyGNamzwvrxMoCwBmjnoIsXc6yP%2BozPnQyDKKIixlMl49%2BpVycrc0fB4MWVwlbicSflD0fhGoeu3b5KOAidQXXpdQ0rsi3Ve9l%2B28HCsFJxtqT2VjNTkWjIW5SviW%2FJyzT74AHGppn7jB4wukLuKS2batEadFBRqAQ7nU1Ws3FXHVakAgAjgakEDpgoWhcsa51FTWFQspLwldzBPKfzFcUD5e5FWUfn3j90NBBXlVm6m69rfawk6KknkjuJjuXSBif99E4NStpAYgPYNDlXU5d%2B%2B4pwKXdp6yosCLMKWJqcQGOqUBEtG5o4RyZm0TRyMeggipGRKnuZTuKYUDAxLKee4lCcIrefusCq0DCENIL9cpaVEYX0uzHgVQB9pxKTOC5u8Zjpzbq2CgFLCt3dC6yivAafy38sPBt5m0ZyawbvWsxRq3HT4%2BF6Jn10%2B8JM772MuJiCVZcbkCYF7wD0pPqkIeipuV7%2Bmu0hJKtlH7leQp%2B%2BiTsIcBjTh0zkrRd6L02sVLochZeTnh&X-Amz-Signature=752e07b7669a739bc97719a9388da29fbdff2769bc35898d0c8418477a515112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

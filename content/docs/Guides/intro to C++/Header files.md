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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYS2V7ZY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAny766E9LMegxzbTYPfD2uppsSryVmH763eIDP2BtqwIhAOWDGwRASh1KWdpm2TJyrRLbWBjIkRKznvPY37Qw0yMTKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzmbIVIPDUN1SkcXQq3AP9qS1zdv8uIL3ML5cbjSLoS%2FT5ObOdf9d5g1ULlTVMkbdEj%2BWWp6C%2BBR8OBpK8VouI5vnIpmOFSeUdyIwBUf9JHnS8LUzNyc5cmQYNrRBsQ%2BnuXqttikn80tBWpVfbFvX3nHcsDS28%2Bz0J%2Fi0lDGQ8YWhePw0Vh6ZQBHGnhz2omQkUKmvisA1GsZDEcj1x2k3l%2B0ZuTFxwpPeQcspxK0hA%2BVL9%2FvCWgZ1LC3pTwGcsSLJpEyN2jKDBq2EO2brNLdibRhSwf8sNuawtp%2FUYIYfPH5wgYjisw7FwWn2anC%2BL2HuY9JEkCWFFrgm20Ew2pofMNV8UpchSdkCz7yF2K8mZpP0EKVR1vda3hDEbFNTg86bEEIQgY5Gu293UlkrfSFQpWzBtds2g%2FhfZqZ%2FAdnaP3Ws%2FqircmFgvwOK06mGO9r0f%2BLgOv0XUgjlEg8Us1dPaDfEPCD8nF6%2BHWA5jXYQLkndxq0d0k%2B5vPgFBVNwO8F6Dy5UNNhPOny9KUI4isdjnhttO3BKvqeY%2FGMhUD6Dw1GA2RviZIgKSIb4ni1BOdjEYsUl0LYWeBAxrCFIhjB%2Bnq41oF2pVkTJbq4ad7JGGM5kO4oS77M2uNwsMxK3G2jbbu4cVb8b0YxBryzDrorTBBjqkAV4QhYrtzCAXfUTTqaq3qEd%2FxY8thyufgHXRvcfWZZysovVuMZz6ephLvEr8nOG3icOUnM0uF3Ej%2F%2F9ZatrDaagHGRhTL%2B1k6H4JN0tF5IST7h%2Fh9CEbmpLk1GLaMzSoLJvnidsDxK1cHxsS8JaPalEBW2R%2FUftFtJz%2FYf98X9Mc2Qbb5GElc3BFWQLiL2MWj3nSctrwoHIK5DL%2FAEplxHJR8qJr&X-Amz-Signature=b177de2a2131a647e72090b7a0c757d2561b6605a97be284c9ce5ea6c4ebd172&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

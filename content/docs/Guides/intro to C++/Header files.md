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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQPB664E%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNYNWWqXw5O%2FQEUIu2faOly3gQIvgQpPMh6VRBPgs5jwIhANYvI%2B9owlrJ5PzJ3SYZecVxVePWPYvQG3WPyKVPP2sYKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeVJV966rTQwJTaIQq3ANGgcgPy%2BPDXkTJU%2BthLjU00zQbjdTLnP7tshyBq19OIabkx3sDHcs5DVbnxHmTr7HX1K%2Fjmh2%2B1nnhIJAhC87R9mcQpFyfhTV23r0Jm1fzz8f2h05PvzwUKoUXj4FyINhA4v5cn8KuanLwQcJ6KDjrQ%2FRHQu6zjxRiYH2dPWKoHi35FFRMsj3tQAhnLJ1YKvDJvlEAgJrrLbbz0dodKJIJxHNh9s8rBHyx4FE%2FO%2F6QLWCVaE97%2BI0O3kDx4P06ee7NJixL4dEWHWnK0FZvqNEfpxOemzdHaHxelq8Sb8l2g%2Bgo%2FWU6b9ESruuV90bYV1s9Q49brCok5nJbM%2FELJ7gnARsrzp4d0yScVr%2FkI1C4dk8w8aSYVuNCBn1ZYrxeqL%2FTZJDthIkpJ98pNz7A32qutmzjw6kYTVwwZG%2FIjdpOP77%2FThalv2zUX%2FxmevlLDFl%2FcKJijCXpHRpqG9Rj9JmNl9dN5Kko58hy3%2Bf4zqVnt6L%2B3izpRu%2FKEiUumPQDJeanEJ%2B1pJqjOPknjuMYXbgfxqb6ejKgo7K2ilQbmfNWwgXmwBmjOMoOP0SHdKhj2VjKOj3mLj05XpMrtenKL%2FM3%2F9QADhdS78MjcOJlDeM3b4p5X7e1Fqwl%2FOxUtDDC%2FrzDBjqkASNZ%2Fy5j5Ba03jwCi8US2Ams4jH0eSh3dEazCcPPuBkWgImiBqpkr619tpZOuzZijm%2FQC9FX87%2BadzqvhfaUjqGRTvm2%2B2vG6DQAX4bHzlfgDdLkWxnF3KU%2Bi8aTjx7pQFI9sfPqS8vXtwTz5wtLDxb%2F%2BHGm3OHwrMXs1aoP38vdkW8W5pqIQjtpPmj%2BiW8RMWcidnicM5E4Y5Ptgjkwqrt4JbYR&X-Amz-Signature=3fc3c1d83e3a185c511d52a73505bce8a45bdc663d485f6be84e7f1450f06c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

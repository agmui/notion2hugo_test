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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHXMWADI%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQC%2BcJOTg%2BXxStZMRUYfheAi6r7f6fDK32KMzItphVTcSgIhAIxck0NnSp1uEJpXlX8hp0RFHTAM4uH7B%2BQkGBtjjPl9KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRk%2FosBT3c%2FIxQwZwq3AOze0AqZFSRNUZNly4ctmhi5w%2F%2Fd%2Byf2ZKmzJTJUWI40DKsw5VrvLLs12R5wpWFqn7sMwzcFn9EHEgcSdvg9kMgrAWHoCb2y%2F%2BkjJgyup0Ur6uEU35pcCTq2FUMJahxyfRmNN1s7RsrH7GCOtq2NdMnb61g6d7bjYDOJZBSUnEMuccf062QNDnnKfrgh2tgwao%2Bhmz4VWb74Yta7a%2BbmQyPwh5JJhPAT8AIWuiKaCqMVX%2F1px0o5HuYsvIvqVkc%2Bu8H9e%2BEe6zPSCzWAHZaZJv6rCwQlfdXKAcq2sZKn40aAD6kitEwbdL%2FTO5SIvLZ7%2FiEv6YJcwgbTJaPIEEbinJN%2F6L9mbcU5DJ%2B05lx%2BFyU2VXXIEfAIteldtFZFhX03dxfkbWgBnJxpUxprS%2FFrHkxXoiaCiP1cNVxc6hbhoLdTNrs%2FWFKwUa9Vmxt9zHBXgj4Xf7exHirxTqwCZSQ2aG40FFsSBxnlw6iNt%2F3rlutTJF19rpsNdgFEPAABwmDOYzDW6tmRcMHo25LQ0pdssvxLbAQSxzlQoU2h2I34WI7sPSNmAwWA%2FZUziSZUlW%2FM8jiVl6%2By14QBgyms45IBLuf77rPLGMglBWQnceqtKPAWqL8pbrFmPDEF%2Fh98TDLjvDBBjqkAWlXlNMhAYLX%2F%2BLSiWAFkwYKfkmMvD9FAt1AeTm%2FFklpWgqabpcOqxjhAXcHOcuIt0AIzXSnJEH6OoiiAAE3YaAp5caenFi99ptrTESacjMp04BgXqkmv8JmUrd4t5C29PgsZJyTDPVSpwtd%2FzKwG9ZCRm5NkcfWhAvUlxq0YatTyIry1KFS6rKet2IMqf78BVIXlPCaLsLZZIfBiviSfJPtD9au&X-Amz-Signature=aa5c36a46da365068a55547a0ba15c5e10f603de6449d4c39096fc9918ce801a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

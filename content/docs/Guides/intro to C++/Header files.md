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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OWHRSED%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDZ53muKWLn7erSWuur5KFPMvs3ccZum4mlk7nFw%2FRTzwIgUJNrU5fQ91oGsTyoWFN2YWaj5i2qpDrwJqpJKOpkis8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9XUPhFwx823FOUwCrcA8KJ9YBdK0voJTwfNiRmjNc0Fm%2Fdq26e2GObY%2Bg8Y%2FrmmijmnnAHyziW8V8lBP0oGDRvMle11QNat9bCdeVhcSs1ftL2maErB1GXoYGug0Q%2BmP62PR8ujnVU52IVwRyCNyppagwNmHVd0ihhwMyKYNRJkPXJZZ76rO%2BVGMwdWOVg71z1drLw3KPVii0Q0nKvI4OiyQXRV6yh6eWGGd6aAEKNdPU%2BWIYaJzP4sL23I04ZjvHSoYS%2B3QSQwBlRwIBAZ5vKZHlbaZ8EziOBUA7Cfwgjm51VuHuBBHdwWQoieKPpF3pRth0Z55Q5iBItxjhfwpoeyOCGn%2Bvic2LMNoNMMskjRbJygxDaErrcIEUJrDzxeOK8BBkrB52Wr%2FgfjpPZgqzFINIypiIjRI1KGbwFHjWmDfVYn1jDb0J3DHoavkxKCKiS5mSQPAFs%2FpT%2Fv4ReekjF7omlkWnPYmJZMAq25YO7o8NNmbrDwLZY5u3zfEihy4IOS%2B%2FIyFWKVrFOZnf80E1%2FLloYoBNlKep8IeMGEl0cWCNj9%2B3VIHS%2BgzliKBy5NinyIGvlqAfsms2FRlRDKl05%2B5QM5ktQeQ3Ofvm5%2FxrPnNTOF%2Bb1PaH02VudE2vEC46BzZHWLBFvkpufMKWn6L8GOqUBfFNwWXmoo%2FqVm1xxhJsyxRAtUkrxsyW3iaewwZ24i7ib2o%2FQA8K6xrdQWKxFgzasXPYKhTnc4LMd1duc4%2BwX46HZ9Gq9lZ31VjJR36vT390Ozy%2FvnliKwh3QW%2Bs2x1VhNMQ5KviIlLRgfnr69cGFZ9gWBrpnFtrqarLXhXDuyR1dIVKxF7pDMwQwYgQusboEnKRxCrBb1QSo6%2BeSHji9huj%2Bq7ft&X-Amz-Signature=f517975dca45580594123facae72fa3b40ba98046ee3becf120b444961e957a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

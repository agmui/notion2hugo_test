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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TFLJLWX%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMpGey00kQQ10884ME0LdYyEiG1TnX%2BTDXjmknCbfUawIhAOF7h6ywnVtC%2Fvjc41Lf8R7ULlz9%2FVEtFZhEngmAMQWyKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyx7%2BW43MatVt4PsrUq3AMWbdPui%2BU0T%2BrFAjzwA75IQ8rAI85Pykn2n4Pfs8%2FmxSstcwed%2FsBlD9LWaZSC78X3MeGyZgG7ki%2FsDfhv7joefjhfBoIyCITaw72Pop1aAQyOmXYOFA8YkggWJBTRtkvI4O2Kz7NDh7VNcY8N1CR0Mdx%2BlFg6%2BwWjuTDUMF6eWlpG7rlyWzLJp4wi%2BctCiWeHWEnp0qccnJ6YfcZYsQfq0ybq5NV8C4XCPK8O0MDytJ2VdtCN%2FXZ%2Bn87fcRwPYqekhZEgYpC9pKgT69XACvuGS0K2A8eXhAfAU109M4Ll6t5m%2B0GDjx8Uu4d4nKhbUua63T38X75rLsSkUwZTMA34PdibR%2FiSCFStJNamOW53rINFpbUgEzdEQkXWMubuen0EvIkKh0cMEj10yGdtBEfWoBuSp4u6TpZRLlIvhuTIbCgtGqHrG%2BozboBbeyAd8t3JwiRGY3LcIuz8neJ3sn7Q7C3cVYbPADr9s%2FR1ebvtuyR%2BBqPcnUj%2F1lPf4KfEwG0TZy2sFKnfiGg%2FjpA8o%2FtyruaofsraP726OvPGVu6kfWQTx9REzeR0ToD5L91A6ysk9J9GDp6eQ72Z%2Btpl%2Bn719lT4xofmhZahC22onB%2FWs6cCYPVWZSI%2FQ0vdODCk4pPDBjqkAXEUqJ98pMRjBokjIPwwD4w42I96LLDkHZu7OnH0QdFQ2PFMUiwOA3OPewG4n0Vf1xnyQU23Gm33azZjBITWW5uYAws%2FVJ9q0NI3Tl7xych%2Fpgc5onYjKjYtG%2FTtbXyx8VqzAD0m8yFC%2BscEZtmduDr9qIiVRiKwcQtt6eWar7kpnAUph27TdyyUUJeT92lSg8phhOaYsOTHq47lkdmJwJ9vXbrg&X-Amz-Signature=86f7cc351f20d80fda5674aebe8a040b6d2499c117edc6e2d07a6517df967343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

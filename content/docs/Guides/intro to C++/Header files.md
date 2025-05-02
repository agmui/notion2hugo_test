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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YEPIIOI%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIDHpEJAMc4LPkqxWu7B7XKFwhxxFx1OTUJqhveeVOIE4AiBb5Yx4Jzf8bB6aZGC2VaoOW2Yo7BwQiz%2FUWqyyv%2BDGZyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjFvwMulvQ7E4mH9yKtwDkF%2BQv6q2KBG%2BjQUKICACS3MWWh2CH8neLt0%2BJutE%2FK9eSgQg6KhiHFYo73yaekJUTqsCAU4oXxjELPVK9HucXfxGPyL6VhFABHECKKlrRiF23%2BFdmQl5CNIAI%2Bm5450jORDPyAjo%2Fe6J19ZHRMNIsnHnGdreeXJarw%2BE1ckj%2FbWXlsP9srpijvR8qflGHHZ6Dnu%2BXRFpSO5%2B5JmsM%2BISupZJzX9LHJ3yZETqmxLeeSAGsxSITD44tOKzTMnv6087Avwsyyia8j6KhS9r43jWv3M7Qo54BXyYSuQtiV1GHiXzDxkWpi3LHhRK%2Bh1vwnYUF5cE4eox%2Bt%2B80OE1qPp%2Fk4tWUrFEEXDgfik6tGdGBooB1o5yI7RdMbaIfZMI1XRsgAFJXGEvguu33V%2ByJlDHcrp8mMsVQfBe%2BiQICUTSGqho74XSpIyJSM1njh4YXDHRQ9KQGY%2B8ZsEb8VTx5zz3%2FxY40pGurxWEfmfd9ldl8DbZDV8SwzZ5BCh26R%2BNZVPD5yAPDLTozCOzjShtpzDjZX7E2w8RJrlW17Ym2abFLKFrE3RKwF5fTFS59L0z2o2uiQK%2B%2Bp9ynTA%2FfeLRQccNHYaB90%2Fd38vw5Keis%2BCdSr%2Bpln%2BztjtLyzK50Xoww5nQwAY6pgH%2FIMYKCACBBaSceGnRu4fkWuEIAvrkcjfE0%2F2chIhnWwOTYidrJyX89EWkB8xQ50RyAjfXC9ZnopvU6ZXCJcO6KRWNU9PMdZtsctOhJu%2BS0TY34QNYXQlqXWe9VzadnvjR%2Bh7SNh%2BQ9cGtsBSlUqvlaDJFn0zPLl%2FumyTIOQtOGYkIcstbm%2Bg%2FvmmjdncqXMn0HzuTVWowqSA8JDtMnxC9R1HIn7Q8&X-Amz-Signature=9cca71040c0223b3f621c5cfff88a7d318fa06d817081bff579e9ac47e15d100&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

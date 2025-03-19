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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6CCDZLU%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEIBFcqOuaF%2F8hr6Ol8%2BEqywRywiaV7SKy68vAtHo9FIAiEAqbySu7kvEOEdwy6z0zThKomnnkXWKdFHUzqgyUKks6kq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDGX3MORYObqpwtYb1SrcAzruuPY5sd041LG7C8EbLf9qU6W0PjPmhtXLxkv64Al1qedL4XFObpExghAYMkoZrbqmL3Ymz9RXZrO4qDJ3EpRrmt%2FbxQfouP056WV9l%2F0O%2FnTeb0TPbGZkLMecIoOZpl0DHzVb0%2FGtUkXz%2FhOPYwfrXjdiNkA2sKxbjBYCtBiHpNXJZvCSnvlLXIAM3hPwBgcWibkk%2FExkjLzrLYzWeEoH54di1xa0E%2Fmbl15UlAljAqnSSeQwSqJJXuZCqyuBSklwNc7SiHUkIiaSKvyovk7eTAnR%2BYB277lKLrdFAKeTy9jAp1TS4S1giL5id9uey%2BsKJRsufHbxzAPxD82TCRYBZ4CSTRn9isumnBTz%2BTsOkhWiVyDjcl20BpI0ZG95mI%2FLaStHLH5WEYSqwyfvqR6iWlsy9Narm8MeRphgzTUE2ppGRgCbzk1B5cTqYxxHFmIx3rcHmrKSmKJLHOqp7EGh4GR2waYFB2Ikb4BSz558haxMxHW%2BfDv4n2vi2JQY28B9JQSUKiuCM%2BuwgfYZpsTN%2FHUu%2FIkJBpWf%2BDjMUp2EG%2Baf8vNg6VmwzdibT30klWJu11uwA%2BkfBN4MFW1BunSTGFYp07KCD%2B6Z87o49wRFProlFU5d2z1iTNS3MInF6b4GOqUBHzuVlFTNjMPpQe4YeZRiH7mAL8EAoHo8%2Bhq%2FCo6gZHcAIAdCEpB2U8NXu1Pw00RSzeo4edbYMoj3tLOHCKDJF0uVLNEeDnSc2q%2B%2BEofRAwNQpmYkpFvyGNqSfCcEvAlULTTOEeun1d3djypNxVCbhmur7JJpoUPc9h2qmovXMAap9z6Q4pe2Odf%2Fko7Djdx4MMyq%2FqlMwOnoGgLH4agpbZ4qEOXn&X-Amz-Signature=e5a1a48f9aa3695686dbb9552ca58dda58f4c26a6535e63107df99511b331451&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

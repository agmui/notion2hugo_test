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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624PJVEXT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6yWcXEkGYKETpJCgrZNEeyGsWxC6B1fn67SWZQ%2FW%2BtAIgDyOTPbhHGs1b3D6rQxgxcpmYIZSr1d8YyVx%2F4OqEJjEqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEN0A1MFqxs%2Bq2KALCrcA%2FZrM9iRYF2Smo1vdlZOQ5951POCYqwH636Roazh70l1EygXYNfhyBgrkEgjsvp61nGJ4MIb1Z7OO024iFY9PJluDeK0PfojSGv4Av4ZIlK%2BWF2CAKkJJnBdnxFhEiddMyzoof0urVh6JjRVK2xFFs1%2BY7mpWHbytxxGqv4yiDPfil1tcoQm0otJ18RtPtoa5Y9Cm3xV6vANdKNSjhkJ31xpJ6w5ef9itI9WaiLdfkiOVBKXCZKaCAEvqnDjUKwyk1cFeTu6YLMtS6YtSCDxZJ3pta6cEs8Xja4TpB2wG3Ov%2FhQ5lkviLCPsT%2BZ2lAcwoV%2FgmgprpvcWoVVDFaeHjMKYSHBOSqSeo8DuYzOz7IoVqvETDTrjMeN3AEqmZiy3uGlfgQv0fZNrMmeqFcALD0t7gYxGhHqTxABd6Gv8Q%2Feerq6AC4rOhxqueJKZCRQ6ZhRVSA0ZD1g3mIMgsky520Iu0QrW6oCd38Mue%2BJJDPVSmag9zkF4tB%2BcBygfgTcB9HDSWftvq68MNyN9yZnDr4F7Mm1fJWKigjGOnJx2Mt0R984OQem3sBtAzofyioLBDDGvhy%2BEWgPOd2cDwSbIAGBr6Dr1%2BlZ2mhxSxxBYGb8dff7dQCHRsAztIOYiMIrGsMEGOqUBAIDp4PK5fjOJolD9K46oL0M3%2Bbcl83ZPxiysM%2F2uRniekft1N0PzwsejXxLtDoOqvI11uxexaBFmnN0bIUlXLC%2FzOLTX%2F9PQgqoSE78jfKBJvXRgbxNjRV3m3kzpSRt495w7B3alJ41acKDEblFljY8TvqMykaL8o1erUecSPjkBfigFmQkw8epL%2F5v76mONJJL1iTdvWXym5%2BKVhmBkiLBSv8vY&X-Amz-Signature=1832a12c7e37d32e104732f9c11e2c7e6fa450580066eb66218eb69489d13051&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

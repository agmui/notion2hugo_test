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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A3CML5C%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHCkPYvsNIqtzswATEW3n4dsY0fhSwrX9tJ%2FqB6gPMPlAiAdHR3Rezrn4xHDYEO5z8Rcu2d5jDorkaILnpSY3OxRGSr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMVdyex7ytvX4b0f2sKtwDIc%2FZnfoghm6D%2BD7B%2BKd%2FI9lE6ijMufeWGuFixqyy949wQDf30hbogDPbFSKjUEK27k3b7LFzAjgaLWvSQjxnSL7hZtq3l9UcMb5VYF8Uq8A%2BhyCvwGrm8e1QASki6q5dMAJEcc8fHy1ASF3JNJYtBj%2FK1k7ablmcHX2fWqrIzzpneth7yeJCrZfT8aX2JwoMLJlLtj9UXN%2FT1pPfQ%2BNz5fox3piqqNj0gmvGNjKDzKMgR224FbAeUI5jq9tf3XNgrbFsP9%2BMqOah4e741Ihtee4aWus5v9jKW7p2zzV5udJGOHmMk32qqksm2wRLDZSPJVlwl6BPtqITogn3dXVKvEaEH2PN2%2Bj0HXHEcjKN7fbSyKm7OvUT16KIhg9WrplL4Nfs8RH1ccNCmdL4%2B%2BDq%2BeFD5iB%2Bq3oiMxgbyIOeysywN2THUfrS%2BOhrzNOsF%2FUwlIDPVy8YxF6gDpWS9j%2BWGCq2KGAqtvfRnrP5xy9DcHepbY5AhB6tzQFBjGHPyqEobQ1hYodmzBQvEglvYwp0mPEzxM80WtmXpFk8UAHfZPvwjBDA67XmrSv7n27PRqPbuzU5oK5Sv2iWuGTs71WI9PiotR24nf200wOOhffVMz0etDHt0lVQ7bIJIx4wqNaSwQY6pgEctb1CDJbktjzpEd6sgexpQeK8YAoRZShx7gb27TMBprOQ2G37BYTN1%2BFwjTIUEMfVoLmXZcv%2FwiZRIPIgLRq6z6%2BAQ%2FUrZE0iVp1mEipIXP%2BDII2mmnHCj1pmLQDEHhKCOHgRZUiQd62CE4dH1gn6EQDn339RoEsbrXMHlU0gcbXE%2F8jhnhcp0eC9VB6vOSznPalGMl0sR3pwhJg%2BU4%2BppMAnj1W9&X-Amz-Signature=ec8815f73af20361d83caeeea0b79bd70977d2062537bc300e0acde082f4f799&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

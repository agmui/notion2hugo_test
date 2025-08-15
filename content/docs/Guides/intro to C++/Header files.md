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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IHN7AUW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAJZIAjE0bzsQO9PPsN9vAQJH4Me7BZXasCEHRyNF90FAiBsEN7ReSiBZ4%2FfwHe%2BVvyIUa7%2BHjX2bPeeoF03J7jn3yr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMtJsx3FXZiu7tf7LHKtwD6e11vrqH6C19BnFT5jeX6h7SfqQj0zhcctxp3ULhKpb3v%2BWHPl4tH78g8cj%2B7VRosk6PkW%2Bni65omcPZ3iPqLv%2F8sU7SXlqVGK5KxIXLRoa7m2OScTsCaFFf4mcGOK9ocdkkzjymnlpmtszaGKlQoTrKJ5zzgmzVymsQRMRp0Xni4j3Z0Q%2BUhF8bacqJ2cZlVBFIDIwPTS6bD%2BfcLnd89ORgx6eRHXvAzcuCtrcWgc%2Be6i3qt1Tc4Df5vdQAvz69Nd%2B%2Fela8wrZTibCJXIWNeXNt%2B3WWJDSB3jkmoLA73garWNsqqkNTApGZoo1IJoZDKpJKhESCmykKySlqKSTFAwxfEjWaVyd2pWTBkKn1bBp3ZIU52bWLzGGDi7ZQMowIVWQIjUCljiqJaGZiAy4K%2B7DMuex2nkwWa5J7MVxHIeezeaIPzlnJD%2FLFMJsQbUFHQgvRi6yOBqUCHA9mdyPuYZzWRaKm4GmcZnX8pm4syKce4eFPUeCYTeaZo4SUnYaa5K1GHsLZUMdoYhWeHMjW13opwPOAVNp8vNSIJsJpVSbImf0miAPvs4Qh3ZCFb8Gl1FjpOt95OYjgWPXajWj2%2FerIMfL39yfxn0C9TNjKA1S2CXET2YXZ%2B7RkCAQwn6P6xAY6pgEv%2F%2BYRfKYsD%2BbgCyYK38Pms58PP6j58hCesQFtZBoYgKg%2Bmj2oTz86OsbW0VZke9LoKfN1CC5oxC8%2FZrhJ0yR0kzPfEwe56nAWI4r3zvLEQQSOibJ25ggACcREipCn4RrBi%2BgFBj2e68bS0GbZ%2BewyzLDSaFE2BN9TRbbHruMRd%2BGnNZnofXOJMKifnLiapVitfN8Sbmk9w19J%2ByyBKw819lAXkhhw&X-Amz-Signature=838779e5241eaeeae17e9ddfb3ee2835a7ae80c3a99e452a771d98b9f68be3c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

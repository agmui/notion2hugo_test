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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WUC6L77%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpcZIAOlPRwsqB8imRl8j3T7BsUwqkCuqz4EFKOV%2FEuAiEAsP6cK7tFTGWWXXYB%2Fp1%2FWgpwrotuYVqaEbdXYYn6kEEqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmv%2F1R2kwUmbDwNZCrcA3VinmQPfL7nnxLUQj0CTFQsY6gDC%2FD%2FlhYqjQ6erkgUJQxEZGNJ2G4TJrvyl1QH2TLwynp%2FTSdHdIvaHWFwoO9189OPyDvSrOsgxuo1H8t7Vg9ejCzqGk9wocSLpgYY9iCK3RPejaaREM76W3N0RuVXBhLFC49sRAdq0uIgxJyKPYdITvTu7h9Jb4bR1jLpwEHA1JxvEVQ%2BN4%2BqyFKS6MDS5kxy%2Flj1CEz6JbGDwjBiwcP%2BBuYuXkuQDHRBGhux4aEoRw%2BdggQuI57un%2F6Ad17Jw0IsqsClHu0asGT7OfIRr1%2BxZYHEbRZ3arvo3dTjdERVDIfs4K0%2B84VauTnIrkg7E94HgRjB%2FxpraOctL8JrsVw%2BF7Q8lneZSPu1u%2FH2ELp77JkQpxUJ8LeoYrkzpBGbsT6vRj2mkOqod5OsBrMyQeSgErkZbJ3FymTFGloLocuIeiulbXjXSsiZZpzLvJOtfHnh%2B5KdrWPNOCcsfilNfIGXEb3IvMnwju6VD1kPN8stSQiWiMZDaG6OuzBFXXa2k7Ed7aTSm1tE%2Fpg4XTuQolEE055v5qmcH%2BZObF4fEZvKbGwb9nF3ZIzmyXQiu8Z3F4LnFXmpU2Gjnq%2FecRgSvoESmsCm7B0OvwWJML%2FstcEGOqUBQ4Xi38XS284UkqEMm6wQmaDAtdy75UIlD5AvsaGQbByO6yaBGbD37pYnWvRGjqCFzzcfoNVzlYardJ166DpZuCllc9xYAN2%2Bmu3Uo2Dx4Kbrqf3zscgqLIlPyak70ju5hv7qxaOoTnufsYP6K04g4K6eJ4hM58UDNog6ZZZBsfwli7sLL1OSXr6kRbDIHqMHljurtvelJr8RiFiaLwE4nmx1UeCR&X-Amz-Signature=020a05c33714d338ef9f1305b406b911faaecb8b662eec4affc4d945ffa89dfd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4LZZWYF%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCxqff55Y6ag%2FRkQdg%2FfREVAiiQsrmgP%2BPP7EETAzRBIwIga1HOhJ9sfsXJmIFdEibb9CbEJU7orob6gu7uJQCkeRoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNef%2Bp09G36KtsDjTCrcA%2B0z9MzN4qULh1nEAzQeWA2jeRQLSk70yfpw%2B22FeGZ27Rj14vBwh5l1%2FtvMFWn2xs93W8YMPwJFY3nQdRIUs3%2BYIPyUJmIpNKjqTDcr9mNhBbOULnhGfompEpjTt0r1J9EWZPuF5ZBT7uHVIcOj2PkLEfp2KPoFEkzd48g1JQFP9AcFJXiSsDycyJXmixl%2FBFrGbXwtGM3wen%2Fvv1qrPALkGtI8ZHbt40gHjaYQF8w%2F310n%2ByCx1nliTK26rtNKFj23XIPu5MeFfAspVKRtnsDlFxaRNcPzBUsuSvrdREVAViv8%2FoOyMWYSez6TcG5G6LgS%2BpylL%2Fp4isAQvSz4vZ6pyzSukKvWJ92yH%2FUY80lLXCsVsEhbXA8G%2FruxaLJeGoJglpl6ONQpHTGzAF2B5QKkPJH0h58oaTSYNC6wv1yBqU72DJaByNdtggb6tjD5wggg%2BcY%2FkK61t8N47fuS9k6LRI0qqk%2Fp6kUlDzszlvLKpUJAWa%2FLntk4%2F3%2FFq5BExV%2BLDKuh5DLqBzuJetOtkiu1FlEHdElgnIaUkDK9IBOjmKTzoIMUBAOzLCv1OVoCiR3fUEa3IQAIcpChJ2VoJq7wvjzAkpCbHS6MJlwZwNUW5sJWWwvel8OustnKMPejmsQGOqUBmXofXRrKZZwM63ZDCbdT642O%2B2U%2BdNnGNM5xcClag5Gipuu5jrWRZ6KP97OwKptr5uyeXs6bmToHGsB0%2BZgN6VqwDvdBZ22l42DesMjAJbsWMXIa6nDFmIUZr4oBXXPNEdxGHinlLqiIjPmUasLE1O4j5dSc6m4EMgXHsy4EpOTClJakOePv2QQ6mSwnFGgjXyWlOPhDwfZa9lVgbyscYsrqL0ZY&X-Amz-Signature=cbc5b55ae36ece88967b13ecdc12710c164ee1ece4d527276036a22698c5069a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

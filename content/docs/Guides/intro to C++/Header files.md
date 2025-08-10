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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEIYVW5N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRwFwidVxYBEtoRMynhDAELMl%2BAl5KA1YpXtaJOYkvLAiAcofF5sN6tWMG6FWjI3AuJI9WnLwkVJTBISddW%2BYI%2F%2FCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN8lY%2FQ0YMCTclnAzKtwDkHXfU4KmlVoPRRj2KYlZ7wuwiHq2ZNJujOERCMjN6JIy%2F7IrOIMPdE7VBRti4G4tyKRvnuxT0HiRNT5WmQY3dmPvt%2Bb0%2BJSdWHHcCT%2B09QplOvL4jLDOSFMIAMTVM5AG%2F%2FSAGor82jhKcOKGqrYZtH%2FwT3fnUEdEtwzZRC%2BckNM%2F1QWL%2BX%2Bb59rCQ6XzREwcRdT1Lc9k88JSnTZ7FJFEQ5X8F7DiFrNbGcI6TuPGNvr0Dk3gpxXBpVC66O0DovMDBQXire%2FjOAFomfaUwHSMc%2BxeM%2FkbK8XIbMgaz2vb4a%2Fq5tLYoI5TVwEzASUyIGy0ZqZod3pVlTfvDKN7l87AuKXn7WPeXII%2BiETjx4l%2BL%2Bk50v91OB1%2FhCmP0nac3eYv8kuYSR1b1O5fjZ8X1b6gRr7KGwI%2BCOjj4pdGhZIW0IbGForoxUDo90Bi9%2BAmtD8EHa6Nn8KrDyirpxgZw8KEmo1EJ2V1NbbEgQvQ0WDs7rbCvMszVIu9c7M4NKHzl3jPFr5A%2FJLO0jIBTrUto8I1dr%2Fk7tkvgirCmUJ9Rm0e%2BkMZbDwrr2lmQ2G8V45K%2FfAUxfNnRBqXAEq9uq0wOpAg%2FtqeQMYuBxN4bKVvHLOkaHTQr72UFWegU4919Dgw0NHgxAY6pgFNi8CXVqPlOlhj%2F2Ta4agTzzTUms%2B3er0oETq%2B6sBGqw73%2B6Fhu11R8FHig815hnJXRPDqArcDIk%2Blf0A%2BWG0iqqju189ABO1%2Bb7wEhZceVfTN0HFwNyJ2Z1vnpbB17GLkplk%2FI50XO84cYebLqqLrRFb0RQ8PtWec8ohQIsvp1dlwfpbIBwRfJAUMS33K7HTr46abbYFHK72eAgnRKDOQTQtqzmOC&X-Amz-Signature=40e15a9a22c9d5e4a1aa4896956a5524164123c15dd58251ce64e476488813e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

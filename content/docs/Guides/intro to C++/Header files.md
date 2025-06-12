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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655ZKHPIS%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDDuqsyQbXt1nuqfKL%2Fmzry2SBVzEmgUjw%2BIyv50McbOAIhAMuO5lV4bawnPlWhXfWvrnOzJcsu9iXaOlORr5uf%2Fav6KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZOEv9ULD4v3t%2B77kq3APYD2%2FkDnPsdUaRQAkvs%2BmJehx%2FpLthlG62itu2Q4IAAHxZsYibL2WouHAY5vuZKi5gs9rO9GUH6pv75bxcBBTe0SF108DuRfQccb8yqotB4XarryZAJ5sL%2BL6kmafdP2iyYJNDivsAHcXNleiWR7hlVBR3zBq6L68PaC06HKw9TgTrYCnnefIgztycf2aPnmxWMbnI1jYl5hUi8cn5mhoNqMYB4x74MsaTnirVNmR%2B0iprMKLysi7yTZ2NfVdfqcW1Jp4lkLa9FGKWgrYoCFjrU%2Fu0aiAM6Mf3y8pkjTFyFBdval8f4FboomLFqACnwCLTr2p9r5DbFO5HDhkLnUoCDHASGzq%2FdSzGJdxezOZQ9tXLJzAjykhNxuU2VZJGirahB0CNVixS0h8DRDCZKO4v21K4IlKXUwIL3kUQg64sWil5dSlt1ug3szyei2%2BHb7DE9BPaOjB8sHxW0u4pY75B5272tQ9hht5OZX3dOaA1qPP%2BVXmy70hAbSwG5qdWo2PaScWQ%2F%2FRT8BUqAm1Q%2FzDvuvMdHIASwfM7ETVSBmBAH11wlL71CqAn0ahYTAfVu4LcwqdxfiTe7Dk1AQzNwDRAQCpn%2FNAt6s7jB6Olc7dudOjJcX9xNRnPuGBt6TDUtqrCBjqkAagDsfYBNPgGywiNkg20colXIugIpdxrk323ArVtXZfCUjwnuPJgx7TegI9P6ey4YR3gAhCgInLHSV2EgTTRDO4w5ONd%2FvqsPry%2BNrGWccwZFx9bidgmRPVh6eoWCZvkzPO1dMl5eFHDfH%2BcqhikCv84PXS8XPsWirxJzP3M2vDxEUUKcPJAGf4KQivGgS9BVk%2FGZ1UkWh%2F94gRWL1gj%2FrrXkURk&X-Amz-Signature=60b4306fefdaecdc9650af251cd0f3dbc5a3e455d7202de80b7135086af727b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

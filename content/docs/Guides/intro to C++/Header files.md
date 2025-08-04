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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAZ7RQGQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCQ9DvHZyfn6Gid0rmDbBn45F3fHOUsAdS4HyjI3vvihAIhAJdawa%2B3JQX6ZQGgd5Emu0bl5cIzF%2Fa3NjI%2BFjXyB8njKv8DCEMQABoMNjM3NDIzMTgzODA1IgzmdxyVVDNHhfxd9U4q3AMkDyR1VcaqxwwdiK37x7ApYoqD6BAmWrqLWyC69sbvFd8EM8m5OBIIuX2PPulKtMeH2Da0kpFaCmQdBcIEvwVqhrQCQL3fK%2BiMzr4M%2FAEurJkKU3BVTr1FwWxZwE1CYvJjZ%2FSOW%2FBVtMhtvpHCpGmaHD3i%2FDb0kBlCi2IrwzFBBIorLS5ahGfGnFezfcsUyU%2BZIRmDI6wdg5cJW%2B5RU48T7SzrOSfxVPwgASplhwRoucXi4OoTEYvjgj1bkBOMtbcdnAL0aeDt00fNpxgKDZIL253MYtwcIATKCjGUdR0v6YL4U8pv8RtKl1lK9kHgXi3sNWvYG7Ra%2FHBamYQDNxifFLOvrpRu5zrHCi0uGttyXzT0TFLvhmNxxXVWmPDV%2Fc8%2FaaNDCHEG5sbByqUFhwfjIUTstGG2Shw7%2Fv15BbfzDZ2he5YLln3fRqQDlmwbspg6gCi%2FA%2B9xyhn5BoKdFRpNbYqgV8Vy7wQMqzGx6NBfhIKBLPRIvbRlIsO3GX1YhCX%2BKILBpo60DPiHCPkQwXHcizycltQ2LLcIOgwtKcdACBiq3TC6tvL7lLpsTKUwQ7HLThFsiw4SFWtbXCssQNOEh5u86ixbPDMuu9zuR0Iw1rTcOr5ePMUkBNLAmjDLgcLEBjqkAegbrGEK%2B3HKwqW5RQQzfQK0Y2Jumkt971OTRa%2F33L0DDv4cv17CoEwDKdZqVWZfEgvy1J4r9ei80VzlzCJ76tyt2oAS9jS3tH5q8SxJqPwa4JrnIQRkSC8J1Vo34hZk0nOT3DQMOchL40DLO62POA%2BTszsSAuWugF2JwwUTqRK0OxaipuYhrexiYI%2BM2JbDXq06ckItFB8rj95fSqLOEnOz02pE&X-Amz-Signature=a6a44adcf409ea7842c6c067ceec73ea673891d98955c05697db67e1e8263807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

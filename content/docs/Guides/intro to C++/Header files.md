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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662LFMTD4%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmGH1hndY%2ByMHggcNQTZiK8MUo14k8neXHsaR7qclW%2FgIgLWjcrk3N7N3XP0VXIJRYoU5M28RjMtySfXTgv7yP0Jkq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDKzOSbwwXX71TO%2FsCCrcAzXYzacwBP%2FOlazXPsoez%2BgJ075QmVBpmtozJqgyZJI9m%2Fb0LGlLUVcnS3sOmibkAKCV1Lou30KlS8xP0hWFMBvf3z%2BKzyuZTkRkIuYI36A1zlW2%2BWDvIL0cZUXyYQYxtClPBPzQOE7eoAuHPXBR3xRYyQ%2FFRUFk%2B2UdFs20QKbO%2BKFy3iQNDScaiiK5MthlN6w2S7AcGSPIbE%2FjaMAaokzfpmpdlHPjD%2Bmn3gb%2BMTubmemgAw1YfRKkzNPpTg4a5Nn3cO2src3mRUZo1RBghUwdLMIDSm98601JAwbKt1vvj01M0ZZOSdd5rkBweXGpiMxdQ8Jp4IFk%2FbuwwBa4rKPbmeXPVPaOre1Zh%2FaFJQII7eEPMTZ7AQJToHmd7zIl%2BubSkaL07aOOelM%2BEWC6fSKtUf4W73jgZizQGHMbXh0hUtnlM3FPkYPyiffAr84oqsqEeZwVXdHe6LhAUhM3PDvDD6kcaBj13mAofsL83NhNBTL0t9CCYLokwClhKAEkJpmdjRr5gD1H0q3fpzoR28qweG0lSJ52SfYh81ULBUkBG2es6FbmwVss25cvqNkG5NeLDa3M3GN02JHcMprnLVQdF%2B8yQimn9MyBeYhT5LQjTgT63m9iifBAlVjuMIqW48AGOqUB1wyl%2BK25bIR26MawFfuJh%2BrA5XtwPPh2ge0mXSsw%2FeXareyKC6J4%2B6maYQT3YoXcsW69clrNfCFjwwCPMiN1fnMWqXo1qfERKrsRY%2B4bKZL5NbmAsMKOkGBe103sZJwybP2drDA5AWPcvcatqa1%2BPn1BrkvDHlz84H5l3kY1tiRSGiTmVN8ea2MiQolkO0GlWhn0LBXMg%2FeZPig%2BwyZ0u9hWSm%2Fn&X-Amz-Signature=f835c38d8dce19fe59d28775d0384b02825405346ab27979cb70834fc296ce7c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

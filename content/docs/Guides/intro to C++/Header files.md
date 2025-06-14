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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URIHC2GE%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD2k%2F2iRP%2FYJsEQ50xt6kaeAc6iRAHrmwImku2dCril0gIhAKjd5zBu7eKRqYayiq3jX8WOBAj4b4tsDkPBVbOQTjinKv8DCDMQABoMNjM3NDIzMTgzODA1IgyqGPsP%2FA2KChu9bz8q3ANk7rQyjdmtclmJ5fwAiao2IJINTdwXWkJ9TZu9XqmlqzVF9IbVpdY1hv9IJWAEBhvnq%2FTYgnVXNS44%2FwNRgeXCzYIVoD0F7RkTRsutKXM%2F9xP5zkD0sIdVvj%2B44BGpLpavDt4nvzuPRv66K2m2pW2HxEoOqX%2B6X6oHArqDnBuSxKrhtntKySXJEEmXnmZPTy0bDYqsOf4XUIjqW3btNG4MaUCDKRV9CPjeSK04CmtTcpk4j1Ra8nHRgmjLiuyOO3WRqxhWCWb1GsLpFHPgh4l8GzajodaUt%2Bf19LV5JygAQCbsN%2FWqx5QqARfOl%2BfcQijEbZp%2B4Wf2mHpbg16VjF4I6AP7CzoEu1crsHhS9nsHzG7QNlQ1Ca%2B6J7%2F92sXtHegf2%2BU4uk5N7HZoagbnajPfPj5HlSscbim6WtCp7UQRsMtwbnI6yWN4Gnpl%2BggCQZ%2BKB7jgHGRVHbsF5UhyoB7Ss0jNHQ2dkE%2B9NeZGEzH1%2B9cY6umVwBAou6S7yqkW%2FDtlD5Ybk3cmQCYJup20dw%2FVGQRR5v58YFv2oBLb2Q45PmoT%2FX8k5rHNNZaue45gXMdepYA89wNAudoC0cJjkA2BeMAkZpnZYZC%2ByVhzws5En4qc75t9Vegp7xjIizDq%2BrbCBjqkAUxRbH3LxfGTLbZVg2wFuspTjd4moaj%2BOdVMRUATbVM970WA4094S0t6oBT1egachBDmVNQBGGUnwNjC%2Fo19FPl8Hds74Pn6v7bkmmm41XCmiauDf7MFe6DZwmadg%2B7nokXNyvlQp1eBG0Sl%2Fh92lNXDZfTQ4KUFqRZBmhemV6FF0jQiZ9dqoEdvxODCH5jy8W3igldCs6gd5RR4VjQ%2B%2B3%2BnG4A0&X-Amz-Signature=f72dc8b3ceec28c56496021b1aee763d1f69f144442bba7dafb4b30f8c4c5ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

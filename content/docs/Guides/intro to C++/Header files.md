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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLZVRLND%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICFSyRjAtoZlSS6vN1ZKGU1ApTBEXEGXo6%2F8SMLdBs86AiBjHAQL3J3NPQLrb4SNOfjiiasqpUWkImy%2FOFSdcYJTTiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM27VD5EUeOHRzj9eNKtwDrLEqTjMgI6jiRaRrF2jf2KNHprOQPeeHRgqhxPyJeQpoWiyVk5vrSG5DzKd4KDFZWOqSZdxKyiigy6z%2Bg4icLzC89cTjyBddcuBH07R%2FKkZ2usFGFkY8OtzKo7wwMCoomtirtuxsf%2FWQ53rT3wvDfoNG2INgIT0QoJKjDfBU3J0gNHyzvhdKevjdY9FLRRg2t%2BtWkQyXFuwPoRRLACcj28BbgrNSGXNO0lLg4VfKdmFgOdbC%2FKXLwvFqcRt8GOoqDVptSTIBbkzSPZL%2Bv%2BugKhd9U7eDodDg5bacrb5KyNaUnlPeXGNfjXZvVKT5%2BcGtDllag%2FvRsrK%2BNrk1hHOehtSht8BPaAG2G5UyKo9%2BNIIzp1Y2zF6B4%2FLhUds%2BkMqCyeKn2aODUfe59QvE3vlWN6Oo1c197%2FIqgTlDzRm0AA%2Fzt76nPaxe6ozDjyJH9ET4scI6y8wxroNVEsCXsOina2HWOh6adCS56cdnK%2BOn2HjG%2B856GA7QANnopFETTEwL1HCPcHa0pwh8T2%2FcjPfOSVgCVVCMllran1ej4AhmiciJ4SbjW%2BvNfYSwHhDcDhgKk4yUKFocQSdQllqkOTHYoKrkNY9kLS3930jgGn%2BroHghV2%2F6nKaF9qGJuBYw6s3svwY6pgFzjxVIrNN6DqRHXYIpQWnWjDvb0DNzqx2x3cTOGJ3HkeIS9huRi1D7TbPuxWaQZ4uBBBMK%2FmiZSkonwSMc9syD%2FtM%2BrJvDfjVutlz0m9p3bvn4h1lMI4Kdll4OeIBtEne5BeEprvzJjXf3%2FrgI85quI7CbhbcQQLN%2Fdm1v2sD%2Ft1Osd7jA1dgzdOG5nPXFuSuyd%2BYw9tZ0IPjP%2FYQF1Mp9%2BPk8sMpo&X-Amz-Signature=d76556223b0ea9731ecbba4e6209798ec1f4fb022a3d6a81fdd5cdfbe741fc2b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

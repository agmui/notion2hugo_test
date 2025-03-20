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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673XDGQRP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGILhV6vT8ICxxif2%2B2Wi1vuEofJy4G41F%2FkpWVpvXBMAiBQaCukfui8ZaAnVX9pOnKWNiabuAomngcZzc7FrCYvtSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0cNfxVzG3sVFsjMTKtwDovYPD8FVv4evV7ggoOhijoHM4mGGWo%2FQZr3ca%2BhBZidPx3881MA7wyFXPNBmn5TZjZsNNnlXKdb528Bz3dPGY3EqM8iEPSQ7A4XqJItu3LkyyLLCyQSaIdldsjG0BBPhVJSdRyJqQhCULEaA7WHnWil0TrZiSk3AmLe5f1AXaj78V2Hmff3PC5jKNxxTpiP8KKEVggQuPmnPAGMGovvHrVxx5Q01LuLDmi3wAWtdQkrN24nZjzUAui8eE6xbSxNpWFJ%2BUY5svm1MrCJQhHrzMAZs1131C7MXR2L7ozdJskNIzRfkWi3plSvWpduwHFXD%2FZxhal2gIXQBu%2FCQ%2F%2FLJlKilFFLbwXsV8VVd%2FGHHMZCrVpSFFj8ELhvgXimYOmSVGvJNwt2uvLk6OGYeCq1UHkGFhXawAFcQmb%2BkapLXcUpwHuMwJh0oImtKo%2Fw0%2BovqnqvO6q%2FGg%2BKibY26pkkEPhDXCe8qi0Wdcpg1NWAej3nU62A74lrds4X5t9HnQRpBA92NZ79m%2Bjz7gfcl3WVb3SZgigGXwgxfOjTG2DgJfRJ3H7peUXPevVq3fcNJunX5DWWOrP%2Fu5ptb17jvHH1oXRoi30FDoHwnSgftv2LQEaGndSKWVBuqtezSXBswjKjyvgY6pgGvG2aXRJraPEQtR%2Fe30ja8ECnzbTixpDpSFDV83YhHE8lrVxMBFA3FyQVDcVRoefWCKFZ9nSkTTzAE93obR8ZS4Thd23%2FWjvvLBThWyafVsT9oO68hoqsqgzuso2SrWpdsoqwfvDPlj4oo8GQn0t%2F%2BtAA5nwtLlsLP6lpeCS1OV2YQEyL2CAms4C5GTlyV%2FEIBnbI8qENihzj3gUuv3XTUuYQS3fPP&X-Amz-Signature=efa1ee71a597c6001b42106e490f73de4512df3c08fe3f571a81ffdc74a9752d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

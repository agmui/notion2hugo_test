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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655ZZE2HQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDWVD5OhUb2mmALw%2FgS8kcoR3u8R8TcTkrgg1XDLio8RwIhAMzyAGUuZMMUto%2B0uE9twH4B5wUCA3YVemPN0vITJYSXKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyojTgNLMcaoHGDhVgq3AOOv%2FalmDs77KpIGBZzFn4n%2FmIX0ag51WAX%2F0GkqBmPObDW%2Ffpg2hKcWL%2Fhu%2FbH1j15KTvGbKmJ5KluzzZA2IS3M8qlnrdoysO%2BvNMMBRRkOMnisteiUzeA65vaYUNTE7UDRcQyY4XUoBYrXGgVyUmf2yf%2FJCUw1%2B1usl0eo2CIosB9xy8GncZGvF%2F6eRDcPZpxpQe5wl9fjOnVt8%2FbzyBCMgpgcjMMwdgX6lHALWU5I7spzUxX8twfK%2Bkif8glqq9How2fyYZppMPqwO9MYt6uQ2XrYjyfPs7KJ37cUkTI8wVoIlgdoAMnliWl6sJcAdcBPMOzDEFNKTiiDTk4Y3ERen2rZ4qoYdrM9mlFTIlW1Y69cV2R4Yr4MQ3eHGqt71Xi5g1Gtpwzj6%2BtJRExOC6vFXoO2DXk3Qc3RX0tOqzwBGBqaBALwJTshSWATpJZ4eltDX0yoew2lZ%2ByTjDIiEjLlHcHov3b29rNbKUd3HjofSF%2FourZcRRNYl%2BkwlT%2FSb18v6amUybWZnt1nt3SBY%2FgkfV%2FVaILosDYlkswC0efwHWg6TtrXgVtklCwBfEd2bycAgTK1lQC42SaR8OAAZoB6TSEbE0bQ0HeYb5%2BRmlhJsuGGKbwSSSuZIegYzCl%2B7S%2FBjqkAZt1I%2B36GF5Xl4w%2FRKLWZ9BmGOkHVO9EtTNeTfr7XVGD2LYPkwpojOQFLg5CM3ZCXdFVhM1D09PAnr%2F2rnzqAqOfjb2aGPn7GsCSxMdoLsP%2BLQPeSW9gB37Njl%2FEOqhyOXp7f6E2I2nDNDlxtd0qwHwCyBETgfMdNXHuP%2F6pae0D2P%2BiYcsvt43mxMr7A5Z3GEsYh%2FhT%2FYgzZCLO%2FL9sLVhFY1iV&X-Amz-Signature=fcbe9ff5126e92d0c8add53eab3e35b06669349aaea1835d5803d97c5f150ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

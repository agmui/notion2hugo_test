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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP26NVI3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID86CUQmkPEBTLsYV7lRfx5FIOPm%2FJClKtaSzUlb3KJ5AiBJy4nhitXIfcaYdP2Ucf8tW%2BIDmXYbV70PCK4YBMTKuir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMA9nSSmn2JLCd7KJXKtwD4DLXkSqM6LhRt0xgmRxPshmUiNHPt4J2Fb6hJoGRIjW%2BKUQzI4raD0vDN8g0D8oQl81t%2BPjD7riJeMltkBxIqgXhN1KSVVtJdquH6NDS62mjCirD8UVPZ4MSPeiCJkN8JFjJB7APDtots%2Fc%2F8nANpTWpA6CRxTFvaTf6ZFCJjO3vm8Kb5LwY6Eav5Z3RPHps8A16upjwVkiVTGalh40rTbHqp71zb%2B%2Bt8P%2B%2FhOOk3fblTsXLivLNN%2FoJoufr%2BWEBnXkfMKTOHxUEtmzVcmmOcX%2BPEhU%2BOMJ4LBUIaeRJKXfm8DPj2qnKD143ke6sBQ3LUr0IAb09aJ5QhvTx2P0w9S9bTjZPTbZ08I%2FxnA1IBdExjFjcOPH9Q6yimJHrXU74un%2B9kmzYRBUE6xyV8wAiFAulCn6XE6CxPxvwB9DTzNukp0Yz1SKaBb9xGw2kk%2B45ChAHohkW7g649P09jsqY2yyi8kkClYC45xrUS9XQJ%2BMHvho5AejRKNfboT7t98XontD6YMSZW7YQpywje2tRUvrpUAeiae%2B%2BMLtcAXbli6Lsacd59YlJ2iu4HI8szLQ11AgamIz9tIKznTxtNfKlJiyPDPuLTZMYULR1OnXbrhIbXcTTPHn7H%2Fj3PRUwpaLDvwY6pgGVeihJ3xmb0PKi2xlUmWhnfnGpM6z6e%2FHfvb7e6qDe9350kJz0rMAGjVi1Nc3uTEU%2BkzdtLeXk5n9SzT3%2FDK0WJnEOnnFrTHYhoDQzPpntPqIFNWDQmD8ZVZJHDsUS3ZpwyuBZu%2BOteNg%2Bm%2F653aeAiBT8jHIDRA3esllVdXFaHmhu2pBXQPoADHO%2BRF8Mu800q8aT86FZ2BgTr7UTwEnW0ENSrIT1&X-Amz-Signature=6748b9238e9e9e8b2208f6656667980330f021bbbbaaaee8c9c476a786379a63&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

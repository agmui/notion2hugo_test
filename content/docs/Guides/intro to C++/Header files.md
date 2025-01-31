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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JODGVQ3%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmMJC2tXOf9AGFyQzLUUY9brUqOwP2uPiZVGZSFbjc3AiEAtBvteET0w%2FBvsTvfrz9ThhUD5TSFI25lhnv0Ca3i5qEqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI76dZK9X1pHgkIIhyrcA7KLoPFTjwyD8TrYL37AviKpQfP6O%2BhNsXte1epyVE12AJmz8tuc%2FAaKTG4eK6h3cRlYBSGE0p5vvUCOYmJplYeHzpNybDok%2FijaAE4i1aahk4rayBjdqPIWFTrI23kR5fysuIsZQ1OLRIdBzIiAbKOXl%2BV2EiNosu9PbK66f59o4DLaMMLYC4zO%2FktHg4YfeROwtvYY9eA%2Fgi4ndEysnYCQ01g%2FcCTy1H0NV3Rjvq9yPFOnkMuO4UA2lKpb%2BzKntWVzelfNfsMgase2d0OldDSNa0d9Clmt%2FJsRvHXQ6IU5N%2BEbtKZCr%2FJZTynUnWwCg2Wq7xPxOxGmd8sQ9acOphqFdxBA9vsUTuMWsfTHghneLQmgXV8Rgw0flqUYD9zDhRvX5kvbUGSVnqcZaSz6LZA8wzapiTYFh5WhJxbUjAcTYENNFSBOMwKaYAUXuy5A8tSYCMr9xkz5oDDuJxojAPJbz0hS7xKQr4PhzZOKqr9N1hTC6NbbAdxAidODOJI0jOykDpEwKeTKuMFw8bhtLfIWMMUa2u%2BTCjleVieyN4NwyQLQcqq1061HQ6Sna%2FLC5kB7BYb1sIQwUKCt%2Ft0q7tscRo8cKE1Q3YnfVfivHnZ1g%2FQXiwdRCWa%2Bsg2YMOz%2F8bwGOqUBJsQWxPLB3Xd%2FCdplrdzrfKPWW%2BG6Xzv6lnaBJL%2BAI1%2FU%2BaHbKzlXq0Fnxx4TegJBOha%2BIIDLX%2BUgot69lljm6UJYJD3Npr7iYiadXEF%2BRzE7r7SsGzubTezwUooGAzr5qBVtZ9%2BjntxQgTfxAghUskqTgoy2MjCLwYVKXZUYux1ETp4NJljBpuzwZqh4gySHNHIa6QYTp5DpEasJ6SzuxZ5WJdeQ&X-Amz-Signature=cfd08f792f6b8cebdd90045759cd439a3088bccc3bb2c87a54a72e2051138d52&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

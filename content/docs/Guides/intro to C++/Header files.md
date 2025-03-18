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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5OH724S%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCjOJFprRrfPZ%2FkF4CiSCocZxWBqifABS%2F3Aj3hUj%2FocgIgRPUBs2bSaqKRp%2BTe8YP2RkL7iRFV6YNRTvj6i6UwS60q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHDGKspktTSFl6sXWyrcA9KtQRj5Du1iUTZRNQDUQhJbVuAtcQ07Bo%2F6Ur0bqArXREMVXlbgWidVVWjlC0cf5r7l4WdV4AU%2FrLfs6tnX8M2NLitG84GPOrvW8S4facN49UcAUcu7g4p2d8i%2FWpqd6BnG0NcVgZexeIMHWGySuFcj%2FVGsurqBKMZYf%2B2DcWXN5doaGQDQU4Moeh7E8YBFsi%2BGc%2FrLv4cmmGhuJiiRfJEZawyLbAFp4QVt9QijeoXqVSopz%2FWZm7Qm55Icdka09XZ9V8uV6Qlk%2Bc%2BkiMSjdrBmKcz%2FD3HOdCXCxVf%2BkU02zeZYqd4lXKXUIQZGk7tfFNDmlR9dyz5vD48KBF3RQdNC9zDMWXGXTaWY9Q%2F47jPIzV5qFQ%2FkaunzNNwSEn0Qv63GJRppW88p2MJZo%2FBmoWD3VK%2FxrXT7GJB7rwgUlErEzA5AG5rcPHrZIhkbAegg5LUKNDQlxOgPtqz0BSwfhUTGAycTNql2HwjDhhsDD%2FnrJd8dR4AJdWuGXFRq7ceHZu4CtKATdzkpmDDIXlTVtCncoktKOcPChlb1u4aF%2BY2VEaA2SSsuHf3whlxSCIfYD3CteXj6ZjD%2FaNE3Ulj019weIYRRA0vw6uKcNUydIhTyv%2BepQmmI1X%2BOgRSTMPy15b4GOqUBT0%2Fm%2BEycmX%2BiT%2F%2FCCWcAG21rPOzh9emIAEfjGDtlUusAnldQyvaXlwpBbSk4qm2S8Ro85mtaf5TxeNleA%2F%2FwC3YO1Pebakfc4bftRv1xFJOQTb5F%2BgmAXzzX1nDa6FLREtOFLQuBz5F9%2F7qfgyiHswKAkw%2Be9hGn5pYva9g2bLywZp3P%2Bo6fuvwif4T1g3cVaEGZfGwE4BdgpKUf6XtWhY165ygs&X-Amz-Signature=b6fd36305bc3d6f7eb52c8885d23ad3d2517cf7ec1af98cf6a9402b1577f6e83&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

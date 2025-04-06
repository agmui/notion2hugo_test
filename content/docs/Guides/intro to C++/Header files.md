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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T34GXHT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPjceXBEbcoGv%2FnP72VmFwGKNc%2BxpyErLQmEbXFrhStAiBmm13nCI46hOqm%2BpoHWA1Qic3GkIkLccV0dTJDPUqeMSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMUhQywJ%2FdV7D7fBInKtwDRXEi6KwAntO%2BJ8mhVrmbLK%2FehvUG0STTxK5FzxgguADIeyP%2FAD7EcheEq64wIGbklU5moYyJ9tb8XhpcSYsAykP5ReodT%2FiYDl4%2FME%2FNjDWfXf76U2QHPwa%2BDnNd4KKoxfpOf9JoLyXrjSuASLVwZlpq8VzwsJrg4niFt4K9EkQNZ0J2wTsv7eEKwCU6omNFfWQlyd7VLMLa9TZPzvoS1KCzZuXjiTTM29SKAmcD8qi%2Frp35hFdMIWiQPrnOQtbrjA%2FZ8BSAh1V7VlfNBoP0JJGAPY7iAIHgsq%2Bh2PQGCO10sVArIXi5Js0QEEPIRZi3Y%2BiDtdkyk1hTBDNo%2FS3LViLzP1pQAT6H6pCdqNF%2FIsYjcSEWP9drBdWrEc9QhHkqig2TxJkxKP2rWyJqmFICMvO%2B8zlA%2Fq5a7r16J3pyftXmyipZlW6%2BDiZi1U%2F90xz1VIGEiMOAAXwvmRYwZdZ9MM6WBVyBqeFlafoF5jwBEbmg40pjlCD6mVwqqubGLIZPoijRggYZbhDTg1bMh1jVTHutxzXKgbPnNKYyT%2BC2jF9Cs8FU%2B8KyibrJtcEODSEQD67qki14fWtKyUlimig5cO6yUwdYnB9SvTbmfI%2BC2YH2KQkf0bHsoS9T3Xkw%2FqHKvwY6pgE0RU394ZHUAVlIqJtRQw1PlzHWTx%2BR6aQFWdqKIeMBTOq2u4PLYYKs5QbQeFxKyOJfbiqskIWewMhgIiDE2TVSGSn930fmQpKLpK%2BgO%2BH6lvwd%2Fm3VF6M6SMk5gG7K1JPuUAI5vze5HtbNezTbARx4pirWjqBVf3qRrLgpN7ZhoTAKsWaduO389BWzcEVjuGitBATkut%2FVaR3KCOCxvx8Ecgh%2BBGG6&X-Amz-Signature=4e4a19e3292aee7ed44532ea0bf34238fd80942b54f9c5a9d7fcd685f4bf0ab2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

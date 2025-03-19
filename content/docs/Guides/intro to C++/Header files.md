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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZHWWTHB%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBHz%2BVU7oh6Lbz8vNXBdm6GRoDdhGoujrgW2zYaiZoL2AiBOIEVpFOx7y2rew9wclW6KBxRZIRyIsZfVl8P7nvEQJir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMKQ5MxnUfMCXjBKEvKtwDG19yyUKYVWqMrCilkmWdkC07b13loUT%2FN3l4Ez4bLudaWFerJaMq%2Bl6x9imGi92prD8nWZ0kXJzdEfdqTFoa9OhS7NOFW%2BD9c8cTtf1B4F5n3SnGHIYl0kGrbrrhglLWhl4Si8QvB8ErSRD%2F6gHHEIWZe900zt6miaODYUU07tCf8SKzvbBAq5FD1GlFhjEwBmgOH7tSvs3GEGzeCMqmxO%2FziM6M%2FBfEZFhQW%2FGTN8N%2F2PV%2BsTmbUUEmK17jZAJoyeidBbXqQheP4exC2e5N13841%2FZB41xUcSoQLotYLBURRQ2pwWE1ahWz%2FjQ749XNwiv07N2IJxznnHKE32uxLmTEbPLwhKHGAg56FBG%2FLCKuOzczV8HxvxXX3M08ty2sw7t0%2BAYvKtl%2F7DtXdRGisYN6JkvKsYXgXmAvskwK440sxcBm0VNmLuWd7QAu3VETbeABQtUcGVidQW0EIP7tK6rag%2BAJNXl3DadIoBywKE3ZSspGbzAB3R54KnA%2FsJmGtcwxxmYzAC7Y%2FHcT1RqTgaQkmcBjSKBUxv2wNtNCKPVFX4dIzHtI8tgM3zMtKgb%2FLhY9L4pZkdEiYuz0G2nGQArtUClz0ZSj2PBcPZ5baKmKIW5wNggvtq0e1Q8w94LqvgY6pgFeFsxorKtPyt7I3gBg28AmlfzHdAXvfrfJX57jcZX3ffX8mvZKGoPp%2FzI%2FgX6oHad1STxCqATP2hIuA1xRWoYEXNlB54wXksEv256akJUvULZRk9gLLONA%2FSP31xGbjrwwbEd8Ct%2B%2Bbd3IRlM4zmGg33y%2BoG%2B%2FN0DN%2BzBihkNeVARt%2FMG7DQ8irS49Sx9JZ9qrveCaXEK4fJ%2BiXnYM2uB0Io58SSYb&X-Amz-Signature=391a8449ca1ef98905d7d96691dcc44007c8778d2503c7717303c831a7d2c60e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

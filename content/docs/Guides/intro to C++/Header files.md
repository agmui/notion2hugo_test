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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDDDDVY2%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvGx6YuSAaeuUDzBzdFXX0iJC8mxh431DLemKJCa1tkQIgWO8b6oRsjn7DZJ%2BMgt5mK8sIghElLRkvEZO%2Be%2Ff9Ab4q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDEHpScQIMnYnFFfy1ircA0uN6p5SlREDNnAYjVD66NzDDV2danAFC%2BJQimkJ8FNRt01kJQ5XwP78durRGKBxOXBxSvJRbtg%2FHJZF2%2F%2FgMTpbADYFHcw3L%2FlZpL529cb6%2BfbbJOcLHhkuquqEbRijkPiMftISZNbpL7L%2FuF1lheJRFJ0DUS9Nz9TmNoRteZAh2g%2B5Xv4BROPCc9cySh4xVTq4PNvXRp6QuxNFJSi%2B9lYW5uYZPjsvvHKKz4nE6PYrRZvw6j1Wf8s3bU5vfWPhZrx1GEVROuqYqev4%2FOszj25HDcbXR3922s%2FBZhG4lsTRZPs31K7yRPFG7Rc%2B1mHubiX7R9CtzORm8xUp47BKOpQkyXsGVZ3rx1f1gSWq6vax7iIQeXDamfOpW9Nk2m%2FcYpolB22rTxDFDpIPy47cjKQ4C%2BuvhujXkuVGhdVnVDp2Y0Qxjar3QHyh%2B%2BQy22TGsUIzrut80w51DdLxXCJkHZm18SYWWobPZwYX%2BK%2BtAQqn1kdDT3cXCrCsYQA3oRLZ0CkrSBR02YSy9pyTphjIyfjKDzVvqSA3wtQkyIL5oJXK1JVB7CSUBbgiGqNRok9jcNfxaabYtPCmDgj9UZtFzKuw%2BK5WPRdEIpaqDCAMe8ArTh93ZpQQwYFN9cZsMJPUmsEGOqUBoaqM%2BLSOoe8yc2DehFZEEDZDwxRQOA9pztUrful9mzmm5yoa2ctYwT8Pw9lol%2B1c07SMk3%2FyfHmAgUj3aZHh5x5cSKknvSLSIR8I7DUTUQDZ2SLMDeq7dBsLDyWqDux1%2Bu%2B4pGe0tMstgV3VU3NMgN%2BwVzjVpJSTT4Wh1AJU%2Fxv8FAJ4SPAi%2FwjDX5TAWQfLiP%2FDpLy%2ByUxx0QndzX7KuT%2FdaRyo&X-Amz-Signature=8b41b177beecd2fe30f0e3caaa61d5be445147fbf15ac9a18047924fc901f0ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OCXM4MC%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAq5sHEewQXOoNJVR9YHbe92lRGQBGfEkpYOMASnLjRqAiBtxptOvk4D7UEBQaqXzuMEs6OuahyrLAY1TS2F%2Fla3nCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM0LAlN25t%2B1FD85r%2FKtwDbnAsz6R1ztmBpWd4sJsfvlEg0tBtoOU39xxNEr2LSK9cy9%2Fdq0maNAS%2BnSDzSjSt%2F9hHE%2F6tpgYdf3T96OC2A5FGfdPczNXvfWqvpC9uwJSFOXIZUwo86N8dJVeUdHEtxEdMn3TYBPcypzqn12rtGLxDmk20j7hrpvFnYjonkugD0%2BbRBrqcTAhKb9%2FrwrT80%2BZ4h0o%2BJRSRjUuXT7q1XxNG3ypeBGAqM2qwQWCE9rbA%2BXOxMqVi28jugAklYL1fBell6X4R%2BOeXeE2htB0Hf7wVJ824qVBGSmgFHDbmFVJux%2Bl3WLlzJBp59S5h1fme6NldPx2vXlY9MSIF7bFrMo%2FbyfydZkL36i9xl4Q1OLWjm45BBex06EhbESvZ2fYb2f2giajGHU%2BoN0avvQQlDrKmyHHtTZgZ%2BTNxivJiMmNUQyIi0wWL6nF4b0kuOgUWfKDsVBEIy85WpK1G0%2FzeLYMG9JvpwchbK%2BC915hSicuSknU281CXENSODuEbHIRvSqzdzLSWBLGyQamp1BmfI9WAqqIBuhLqNzcTmmmsoJvxZPEWFtyj0aQgxpLbXTm%2BdiiSoc1TDZ5wiQqNkACQa9sZFFDnhStWpylXJ3oYomcJnknBWrbHNc0oVVMw7s7fvgY6pgElicIxZml915lUOdTECJxmfsSmU0pLBPxDW6gvoDMAh3jKiJ3I385UpdUxlejnh6uoDXJCgcXE%2F%2Bz6bINFzD1M8lROuZiZpxLhjjz4Djyq%2B%2FuVn2%2BHgu5ukmR1idX720ALYWB%2BAHZQDMMUDuL0irhE5IQ0OpVGFGvcdV2HO4P5T20LWBDe6NWLpwzXC3SEfj%2FxcDdccF07VFVSetIQw0ay%2FRzuEe%2FK&X-Amz-Signature=d4c2262918e88d053e17246ff188d372be2d6e5cd86c533f4e55a1abbd43eddf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

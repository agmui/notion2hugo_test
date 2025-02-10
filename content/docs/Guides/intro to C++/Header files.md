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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EYTJWRZ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRtOLDYU1a0hWPji1MjrDJ20H9OT6EHnCTIvsxbo2bQgIhANaSvcGHL0NV8dkgW%2FQipdRlLB543tlSPPsGhg2oDcvPKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxvr8gaxV%2B0msh2t50q3AMa4lo1Xs2WYv9MqE91uchGJInbFv9%2BUubccwldFLpHLXM6KI07XEpxZqum%2BqvQX8IRXN8lvGkm5BD1jHleAqCm%2B76%2BpYnXhykgStInvPsmZ43lAT2iayeV9tWhq6SPkB%2BQ3t2ak4x352kbTY%2BqKIgXXvyLXp5VzXv0MwVEidJLrGooRG1pVTBaklmwaS4D%2BsGXIxEy0GdcUqr6qy6Q3zcWSaeDhVoKxoKg1PthqUhDGKa7XzOH0umdJyBLt5GwMimbrcXq3LNZ2%2BPj%2FpFmJI50qXLmZC6nL4cLuX9ELNq9lr35IZnjmaoGKLYbno4OAdudKXL8DCZ9O%2FltJamkgD3Ly5W0sSIkUf6jRw%2BROhM8SfMHZganHcdHButKI38AZYzL%2B54AI%2BP6kX7ax0H%2FxsB9oPk%2FJuDR31UPeHYMxf27BkC%2FZr99BIhMO7g7fbWFS3NVLrCKk3akFfjvHx338U4etH6eyv4WWJhKESAnHbjWcXYcwB4iUmDwVpIxwvoaK2vmWf45pq0rhsfIXy1btN%2Fl3kJkGhEW6OUlx3OBQysSmyPkBOnd0JHg%2FSWZD%2BLh6rQD5NMDp0sTe1OSVJjq1uNP3uGHuGFY8w9XlgOfj32BksvJizjWPC3iNx8yLTDnnKW9BjqkAZWFZDpYN1dEsbyIx42Q3lDO5hDF41ZimJeajFqkxa7rMqRhrd4Oe%2F%2FQfn8ayAZdrBgsbe5%2BNUvpB%2BkNkLUhGylpQtn0Xy11isVBf99%2FevkNZGc%2Fx%2Fl67qGQqdIt4Erg116En8eufDyZlxrbI1TAWTlB8mkQoPx6WBtHdClRTyiL9irk7YdjU4XNaRmOXKg8fmFY5Xa%2FrlHoBVSJeHWxj%2FS%2BIiFK&X-Amz-Signature=671d0bfe2c9c4152ed23ef2fa37a4812af058eb031adf964dd433f161bd6561e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

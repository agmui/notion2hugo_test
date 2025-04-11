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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2U4QWRQ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCICuRP3C8A48w3%2F1nHy0M76glaBasMLQIkZpbZjAMsllfAiBkK9QXNZ2wHfDHfdBdRB9QHcmhpzQnoE8Vj%2F2mRXRloiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb7AIREBoiyrlxx9KKtwD%2BYUVAPP4FViplrrPt8GWhCh1WwQNswd%2FMYFXU6lO2sSxKBAcyCeuILLAB%2FtbmlwlKEch3uy%2BR7SoEX%2BdI%2Fd7ga2hAUdobWcTxw3U4hxB4WiFX%2B%2BfoTwIExgBeJZLdQtby%2BrQhfqBstZpl0mPZH7G1hfgTt5QMsaAvTG8EzdOmrXNtZc8DShGzbfXAf5EL3TMSSNjImBl%2Fx3gGkKWpOmCRKnjZNKNtWwdSveNBwd89gfR2075QfNU6HjUffoDGpNTKXy0ADdS4%2Fdzhs7ULyu99zAcIGrVO9coWmxtJzm7G8yjHEnhDpHt73TTCbzo%2BaGL1vafmwdMZGxzlt6vLFcBn%2FxMPPdK6YRoU18pjLhEL6QciLpN2uI9XmVJc8wwtwD2nxkVI1slezBZ8EKAuRw%2FfsbMYfqp%2Bad94zYRNNicAC0FxEtfk1oL35%2FJvODimv1YmNAx1BT%2FhQwhQOc3Om92Wd61dXA9ZeD0df%2B2%2F3Pm8acNKmDAWWFUFvKPkVnBEcaUFA259w2exbTQvHGMip%2FyZUvMHdTvGDUC%2FBYkN04WL2C4vcozAb%2BmRKP9cCr2BL3RDsYiUIr6P84f6KI4x9USKAZG9j1f9FCps6PEzAoJNVY82mAaGTqgUrwfV2swvYHkvwY6pgHAPHq3fkMG%2BM634hm0g3TQVwbwsKLe1qljvTpu3Hhy2VXv%2BlBs4VpaaLgXtZODjpwiJ9YqyyXfEZw60NS6%2FpZjbN83mENHzoBgOKVqTKtekBne1zw8XiSVdORgZkrisnsd3VW90kZniGrJRsqIDZ20vSyzmrDyxyFj733ldGnJy7p7xQBqznmD5jrI2qnwSRkCv37wm1VxSTleNRh4olPHRQfz2j%2Br&X-Amz-Signature=5558414ed5d9121e883f06d69acbb28d70098d2361b1529464667e409924680b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA7H5RP7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqEqZ%2B3H6SOGdppkxlIuAGSaOogKNPZy5qbfbm3uq%2BBAiEA82iwFJ4%2Bq3nB%2Ff%2BQe401ylYSrLvR5pvkA6TwK1CkaxwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSKaJRHSa82f6wQlyrcAxxPPMaAS%2BVxdfbV0UrLff2g0UMdtl8GN6R298ansblvelJuH9As17lJ4Q8vyF9pohmfVnUOeW93GANfyzAXFvHZCYexR1xOb26r2hBmcgE2rnFvKV9QV6FCEBuwbGcgn2EczK6yCFvSNCITYYLhRi6s9dv%2F2H8ckq44QOjScskPaJsmgCxpmtbn8LCGZVJaADWzen02toq87WXiI1P9FxK%2BBrYDFVSy7Xy%2B%2F7ywQY8IqP4vLZ4KTpZgSgijkW7OugJ5ep6M2jS2kwjCQccNLOLnPT%2B%2FUE0SVFXY0aoO89bU%2BiwhQ9MaOtAvymds7i%2FSv0hTD3PfSUrDHK0%2Bwgff4A%2FgO4xsZkCMnPngiTWJi2N2Z%2FxuYT1fH%2FKKpm%2FxOJo4Wyr8HwFwm6Scf9GOhFM%2FacYXQPJe1MmgrEBooFSJY2NAwQGAHlTM2HNLXN4S9KN6%2FZEbWW1%2F%2FHxrw1IuVxCYAAUJ3nQ9GyYwhQphOEV2Tzr%2B71%2FCW%2BkRts1CluZ5EOG3tboxFjn1fxHfU%2BXTx49hCXFgsOSqy%2FaVYlq6Ilsox6KpQKkPMLCtnZnx1dkFqxxNqca4HgsuSHg1FqLqNkmErogjjvz6J9yvWCvR3r%2BASPyMWBIFlGvovYmwBx%2B5MNKjuMMGOqUBatV%2BlogNzz4F6o%2F8pPXkzU94JdBdKDPbFr%2Bb6mvrrThkKsasl9hFQpOEVdqT5MGGHuyxFt0XAzSFNGWqaQ7F0c4WZ4P8I53dNBfGRdRbRywkWSsgGx5NG3CCpb9G%2FnevOmjyzxrP0VNUdm40ctwWhFG3jjTY8FQhGdkmm8Vd%2BgDGEn04FUUHUvbv0sObwW8odWFwOjj2LN9WZWhWozLpZ7AnjYqU&X-Amz-Signature=fec370461a57a487b9d221685e4588bdccd5f818b69664d953a7eb7e8b40d10b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

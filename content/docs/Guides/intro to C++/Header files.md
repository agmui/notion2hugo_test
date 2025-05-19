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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZCCA7E5%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRk%2FKeUgYcE%2FL9GZbdlDc%2FHAoQ5WGDlyzayjlFcm%2F3TwIhAPZVJnv4cVGCCFpL5YLihhfExDoJTLSgh7PTYBcQHhhSKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw%2FBxUifXwP8iuoMgq3AM%2FrrvU1L2HIbip5PFK0eHVd7KhNTJX%2BB6MS568Z%2Bh30LYNKF4UBoJtRpz8INpI%2BNPm5uMkkMAOpSycooZs%2F3imNKyUKplHRZneohGSzUSAHXhM0yPLUjbi%2FBA4ZuS1jqpOj%2BPvNNP0YSmQmbGawMcFMdZewHBwfH5HkWddswl3Tb72xd2Vx%2Fzo%2Bp1huzlwipeovOUdTDFv1blUIDPFzeh5efSBwav4GxiChZ%2BiZLDyY4cWgn7E7yQps9i2vzHXn%2BTtCJOualCtMxv6MK6ksx%2BdeE8EEqODCB5O2%2BiUw%2Bpa5hU8scFvVwtIb%2FSVcoSUD5e6v2ABLg2dt2NptgW2hprYKIzr8EUjVDHzWE58T2MdaK2yIRit4tMJS0blQarAp1g5CRkFM0GmKyJ0kx3U8auSmrdseDX6WlkZotppSiJKsK1e32h0cNkWSRnGu%2Bs4%2FUAIBFtbQhc96IRa4lx7BTFPpZl3RFOzI346UOd3UHq4w1BGaziCDNNTo9TMIs7yRxcvd2SiYXMfu%2BWjRK7ZvP9MYf%2F3DxAG6aPAYTzQyrugxn6yuubgu%2BrCvAK3P2znC6XLh%2BlS2Og1jjHoLCikQiZTBG%2BWZYG8r27KRgdaeXb3NziaAr%2F4gqLbrqeMvDDa3arBBjqkAU%2Bk55N3Bqv1n9qCboSZx1X%2B3ihr4UKocpUyMPWqEUg%2FXsfMPIoMOEBkRGtj1tgyVmPDhTzPej9m%2FwwefVB6psCmXSpUP44RIcgxZ7T8bzoV6ZnL0l9MAFfAb%2BUvb%2BZ76yFqENGre7BXY%2F95EoJBxp8OSyH2I5qSQWgkyge7dBt%2Fh0%2BP5EiScVkcd6%2FOIDt7ZSC1xVIk0kK24TzsawRKyg09BoFy&X-Amz-Signature=e37f7399d35390f46d9b02825b5a8babba737208ee25272368517026d8e4346b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

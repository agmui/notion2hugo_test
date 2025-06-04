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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJQGBAIJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBAEsfkv3VI8neqEbme02SujlIrc81P2nopvNtl93pR%2BAiEA21ERkqJWzp1BG8K28h7nCCoE%2BjOfwQcG8sQlZrwvrXkq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPNN%2F6TqB7sN9bGxXircA8x38x0i5hvJ%2FusJfrVrLz8WBYJMFvfOZUuwnbFPjeO0w8G1U9l4humOSTW%2BGBpEb7%2BCK%2FopgrBn%2BUebj02HNTw2HPvylhUQW8Ey73WrH85b6Qa0rndd%2Fj56H8g3Agtq1QXChTG9WxADDxDaxY0y0PvvIxyy65OyxTj%2Ba7XUk9LO%2BqLh6bxxcvffgvZiYf%2FmCg1rDLhDrYerOG3VRzQtnZyEvOOIH1MvLbkRwbnDzGmPraczDXR0KIH4%2Bw9A3%2F%2B%2BZQAaPqRt8Ql9PJWDZLMHvZ%2FHzcOH4crpnanJtgvE16c%2FibaxOTpocZOTBrzhr6JizXBb7jUJ9So0YkoiBICeUErk6aSdGohEIViXGNhRuW6W%2FVQrHd4SvmN4B1LAXyDk6A4JGPEbI8WsVjxTFXPID4rrm1f3%2FoI8urbujxeeio1saXYYszgL0L32NHHmSyVu2GVmEOxZDcPPmc0LFAw%2F34RpgqBXDEMmYQJH2TMbiKgxrsJQ7lXKw4yh5gDgczaa%2BKpuQ0LMNYG9AohgDlRCPya5iD4HsWOFPrBYGWIuUQD7CB%2B9uckqAuqc0AcN6Nrejvq5MpzPIYt7gukUme3kuZitS%2Fjr6a%2BQtFaVv9l5yuR%2FhRxQfOyuAt%2BSsxwjMILn%2F8EGOqUB7WOkGZ6ThwWGlMaXReaYfe2d%2FGSpkuUqMOTC0CbJaqwiqYCm5%2Bh6rz9EbLgKmeoyhczmGEfUJ4Lmm%2BoUTgwn8ZB1or1Ea3XqoWBiFnQDvaNdFB2KySxTxuHa8oMWCEFuixAXcmklygzFEW0GjE%2BaU5qHzUmOGy%2F%2BOuLSfkkUYxnnnOlfVYgZyVBoWNXR1OhLj5CYsbFEf0y09QXNtuhhMoWIZhDs&X-Amz-Signature=6a014092e50d0d1b0241a428b01b364593ded6c3ba79f16fa51a0e55d5adc9f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCSXHHV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLkhY4yWdzG8Irevny%2F%2FiwzmHYBo7MW7mHgkB%2BnhGgTAiAxtmKuFMsMI0U89YRAREuW6oh6FZMoy4%2FCnIKRtxJwrCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMgVczYzOHFPesMBskKtwDWB9x1IlkMmzKn1s5NIV5jlMHD0wuC387qrMzhCZVTj9CRWOoqTuoDfPQWSvL9N%2FVCBXxc7uevJb3crvhKRMPLIS1A%2Fl6jK6b4mNOPsGZVaNt4i4DLwwrV9ofC074c5WkVZtF2rH%2BvcjZo4aMAwV8Brf8wgn7Kxlp4n%2B1L1agz41N17w02Y92DURbi0x3pejsUwtMLU4AFtC8%2FRBWh5FO1L5V%2BmGPg7Nw2jsB%2BMmUePMNZMuS4nT4GYyBrPnX62%2FOlu0PvpADpxKMOqK6dQ8bOPXMg6vGvJMQCjue1gJfTQlmtlJc%2F22tAp538Bu8nzrjY1fYiZOynNF22oKJWy4emT9MbxfVf8%2Fy6YTUdJH8RNj6%2FaqrWFw%2FdwVeB%2BwpvJhZA2hifMeALyjssbVxEIy7k6SMxoWiVI0Ba%2BNu0xEcvkwaZ5rKm3l5bbBfnXJi4cfATr92kRNyQ5n3MCeBeqeRaUWB%2BpU%2FQc11fAaFn7GTrFONm7ObAMFPrthFQVLJUwZOYCKUGjH1%2BUUZ%2Bawam2LYqreMJ6tLa0lMgOxf9GGLP40dt9X81CylQzDcf9gfnl99zvQFzE6vUti%2Bcc6fTLWdBwyRHiVRTUku0YX2Ry3MLeQfRLMlfqkgg4sdgYIwmaDzxAY6pgFRGywLY33Yp5Ektuvjdiq%2BtEJwGIpCOjA4HqU1FSSUhCHQkWzqWLkCr%2FbzUtHEWB9Uj3YYtk%2Bn1dYbKkR%2BMEJxkMX3OfjNyF6v0U61FPy%2FxowKitqtNmqLcEIdqf3rDyuWLHtcyZrxuEyTfBgkPBDPz8H8GnwLOKFBiIPb%2BMYBE4duvD0PrS7Nf13w4Aie03T%2B%2FzAKaFNbtVSwLgBwfPrKkBxzw1pL&X-Amz-Signature=6edcff2b0026036c7f4817db9ecef5a7b034e30501937ed065039de49df25b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

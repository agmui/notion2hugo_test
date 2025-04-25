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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FYILHZX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZBrwqf33i6pHaaO1Kqjk3z3ol7BwV%2Bv0%2B6NdVpJhbHwIhAPTdEX%2Bo3pomIJrHL0Dh6e%2FR9hZ%2FtwKAPJWAcveV%2FeOWKv8DCCQQABoMNjM3NDIzMTgzODA1IgwVg3SWtdZw%2BkFALO4q3AMXiPbFI%2BmRHYTvsAmfkJ4yrZXxE99aetZAQIcZ78tX4Ar5N1vIcT%2F8EHmg0jQpQ5FyqMdJCnZSz4vFolcgcezvRkAhzMavIMtumKJttp0EE2Ngf%2BREzYTwo3brdFOqJ9OL6r2icRIfoJ8IHeeU8eouczCZi74To933tipkdR7wzNWumRJw5DH03dQ3OZ3ZNDl8wNWMEK0p6QJTSIh8%2BrASbXvAd3CsopES6s36Ov%2FTxlTiuwCwXjWitw7LrzgZkNTI3zBAkFb2l0RVD7ABeV1PPU8PZadjeG0MAN9WstOcLKkcrL7q4NR3HtRP3R3HT9svwymtMQY6%2FItRsntmD%2FBYg%2FyAcy0%2B195r9QlEKlpMTwKS0QqZ0etGCQsw25gBcHz7O0ZeQDl%2BgvYDTr9lDDlYg9g%2FvbhtLOoxRD%2BrZEdB%2BE4KyoW%2BkPXRZu%2FbQS4ki0XA8ebzJVoZJcMtCPp96kXucGyq2rtRAk%2Bav0wfHJ5gMPG8IJ4i5lWXQncZO208e9IRvtFqdqQ2at54u9e%2FmcU5e%2FB9nrh0Tt9fSA5wlUycIok0noTXl4JsazXxxTGU2Ki%2FHTmbD3%2BhJ%2Fzmxoh%2B5hGiKnFiHZIgEkMoj1qE8UHlyosYXlFxi1m%2BgbLvkjCB%2BqvABjqkATFEdFJv9knfGv6RsH8VD8TXJM1aLIc2PClPTiso3t4CEVIFQwOBMb5Vr%2Brs0dswZDQTFudTIJo%2F3tGXCBP7Azya%2F1BHMce9Z4zTD5zUdqEoSH770VCGrAtEtQ2ovW%2B8OEJTEPaT0mqDsnMNMcyIOWaxfBRgkoKXlxI%2FutZUMHPCH8b9hKM7ce4Ma3LiK1DtMsEeSzCxtaIPHoIrG0RzkpB%2FKlpE&X-Amz-Signature=2bd4a1cfd0783f66b780f5b6dbfd892351b4bf81062756a7648ea5e4a0481393&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

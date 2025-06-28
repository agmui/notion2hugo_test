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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFDNBOGQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCitYllrHmo%2B2RPBuAvSRGyTRf%2FaDrdYDTshHV3EfBM3gIgC1cLAgl8vOQRApEdbrmPsiCtIpIKz%2FznYFvcLhzUnG4qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB28P5r7GKQUUs5R%2FCrcA%2Fen7Psayi5wZS7CVLkzsR1tg8zm1tiD9l97%2FOfS5HYwhvDyv%2FFGVMCYhcD0rP7WY3Dl0rr2FyIYbf3JAVpP%2Fyzt3c8Jv5rTAo1yBIs%2FYUfHLtcEtunEC6AVxJX0Nycj4i2rARL6kj2nMdc10LF6YXklLhMD6wfz0Jf1M9%2BQOdMIgICOmutwvSFIHPnXrjSlarb1x0GyoVAox%2BxLg8APudw4ze6UWmo0RYgdJekMF7XWNmGRM5wlv9e%2BVDSUhnvr1xVeubg%2F8iOOEiEczJg8tBHsxFj%2B1L6aSFUrm%2BZz%2B4MzLyiV2MkSfSL9aXnxmadc127yIdtzTaaMD8zWkkBixJj43qndiBau5glhz8DwcXKkXZBvywoRvtAlb4ib3lCUAi8UnTaYas3TgukeQwAHf7%2BCV6HZpdiVwq7eFSJImA8m7E29VJ4lc9vkPJeVt45vZZ5b6hkeRTzQ%2Bs4exkN%2FRpdxDrMqTZx7Wm33KdbSVRqHgLb%2BXACs6Vuh0Jq59%2BHMpxUHJO3u4BzB6sNa0YXJVmw5chWpKG4VckOtxIc6Wgp48iSRCV9Mh2c1EhAvoMb7%2FxCFzBtp9asj5gZ0gneK5dYM3XJ644tZlkTx5AxTwPj6V3ofBV2Jv7R7PcdsMMX%2F%2FMIGOqUBgX%2FkJjA7kRYZxVKxi0KmqtWLJs0oHa8%2FKDHk%2FOhxBXYIo5jdVlPleiG3cpAPkb3pu%2FvPTCoKTB5HViuMBdKVRjN45YHiH0eYoZMu%2FrB9nGzHcGEbBlkrnxTwdqEIhyABOsceyivAXwxOXVVpMMi5eWFa7cvnXZoI6t%2F5NEUFYjd5UkggNm2soahBUdA1tMLSkE0LfhnJx8IDZ0%2FtbnGQHq4c8lmQ&X-Amz-Signature=a7eb5b5d30c790203a04e7d7e0e8bcbc52ea34be0e1216d2f089bd8c7766b747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

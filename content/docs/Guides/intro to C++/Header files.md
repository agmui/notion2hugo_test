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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642GUN6FZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICp8A67UA88jHCNzr1BiIftXIDHvtsQfp2PsvlWHrK%2BAAiEApkAU%2BmNblwe5bO2YkS%2BUpzxrkWG4cRhBhjWR7sRXC38qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BteymibIU9mfQAjyrcA9iHIktNG7vt5jdKfuNIx4WyIT2x3lnQwYq6zpeopooj2%2B3BG3DBFhFvm34YNi9cIoqJKkXNCqJ2aWSuFc%2B3SJaEAxyI5OytEwk%2FKltL9V%2FZeku7%2F1ePD5qku7x46k%2FtEX6iwdDUDtX57%2BMDU8cm7nNObLjewYZbH4OekpKwxNyb6QwCrkmrem43CvFt0F0JjIyhApADxF3yXZZZPiA2GrhePXY%2FxccDWIfj1IjUBaFSx8sfMPoWDADSD6zBv5fw%2F%2Fo%2FnCpCSne0DSpkbg%2ByCreCPJvAykss21pcEB%2BdPg%2FmPLuPdbqT04JIQ6bFTXPNWJSy3JfR9hE6bj%2BKjoBR2I%2BVloZ0wwaffrmv%2BpLrfb1Xk2%2BZwTUDTZE9vb98BuycGmkiv%2F2t%2F%2FgPv9z1nBRUPUrGyLcwWWiBIkCzQfFq5WX9PTFG1ne%2BtvrK03sYxGRtXCgvy5p%2BYM9ZD3c4SIK4Nxn%2BRBPZWTdqGwaNj%2FLfQSPqlS5PEfohDJIsp8HC%2FrYWAkenYUrTZ8lrMnIo%2FEO8l%2BBafs9coB5zrQrjT2%2FMbqRTuZ4%2FWbjQfHfV1%2B%2F7CWSaOZgjtgKYHSrjceXLQh%2BYmWhjeAhl9nyUTURYVctAcDMz8IQ17rBbtrCIpv3%2FMLHlpcIGOqUBDGZWYjeEJd14RprIC0RZh%2FJZ5MAQR58zRvQYa6Sl0U4XHOI2s%2FQqoBSleT7xdCcrtSN1HZ%2FkobxjePSjilUnLGDt3bqWF1RN7xSba6z44mhl2weUdD7INyP2ySijhIdv2AtebtwcFIQAS2q%2FTmEygyWJFU3ylKLVgVUXZf94Tx3Qr50%2FuDf0%2BItpp88oDy7Tqg15LLz2Ugg4JuA7IIuQxTSPogPb&X-Amz-Signature=8a2835d78366e9df93b65d1e5cb3c10cd83bd33c2f75a08632f608cc26486cb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

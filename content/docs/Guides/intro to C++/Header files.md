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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMHOTD%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC%2Bk%2BwbBMxel4cMrhtp3quinujb6iRCDbpIHQRLSjCZwgIgYwKMkjA0yoGgB3PpJSGXeg0kBTzxYcXAPWVV1QbFO2kqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNUIr%2BJPKoet1dM8CrcAwf5qxG2u5931gyNEbT6IzOuNVoLdaB9prbP1cbqec0e4z2NDnCD8MzfN227BOALw2W4wFZp%2F%2FFXnO6cH43aoVMso0eQ3B2QoQfLfv%2BtCvwZY%2F4rVlPUUiyVywL8AggCerAGL8VCFZr50JEHFM0jQDj3v%2Fi9YWmKI6K92J9f2zaXIZwvts36uXagvJcz%2FajgpmAYuDP8N0kxDU%2FtsbF0f1GVSS6SfRLvInPsDAZGFUQJaQuTrC68uRR8RE4gknNmPESdlZeDkzRksiuyvvjzwefT4MbaGP3bp%2BqhSN17CJud0vtsKI10KYX1Jtr3OPB5o54%2BkrO%2B9xqBisQu8C%2FCO64DFIikLuZRMd%2FK%2F3G1w0EH44VfNs36DLe5a1t4EMLY70MpUSMYM88XC8SgamDaBAU27Vxo5ekJ5k6G15lb2sxFb6QsuqLHh1qrNgoJ4T5KiVfnU%2Fat%2BKOll27t7YJ1%2BHMPgi1nVjdxwf7NHHYOjhDU2nujUhWCLLEDg%2Flp%2F2MGZPbyI%2BoLWtJOS7JcnB0NGXtR%2F8vs49tck3liBEvR4Q6uwovLgvVAXGPBEj3H%2BU3m10jijadM1BktutibDCAfsf233HBsaS%2BhoXTxqJdQTtVsG4ly3luy5G%2Fc%2FlCWML3Q6MMGOqUBybr5wttyAQLzGTXTouwuv7LAgckh6R8uX9q2GM%2BLQN%2BXDqDlri0VwacCLEnVZCCwPsJCgkuCmmItQQHyX26zhCYveJTQlf8jY8q%2Fj%2BQmDFRwrDOwPX%2FUDNjy%2BNynbn7D%2FBETXlGLThWAwq880Pj4vIYOuNbsK5W1%2FeoPfgdfCkn6f4gjQRZu8Yzk2eRkCO19dzyRsRrwA5hbxoaW4EbhDtQjMfGN&X-Amz-Signature=2e7a2c3122ead5c84515de7d90b93cf41e7af8491a76b576b048135b2efabb90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

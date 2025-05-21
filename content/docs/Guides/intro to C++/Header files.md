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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2DBMBCE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX2tDArjUn%2FISNDbPO1rmY46C6MdkP6QMQA43r8P%2BmOwIgbTSF%2BNdh5qRU7vkmQrg25j6MPqB0XNf6%2Fh98O7l%2BU5MqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1xyzrH2yIf0Xz7OCrcAziRGeS2TsK6b777yoHwwIpJFTGnohjMC4NIS11Q90xP8%2BCohmlHxmHVUgvWCKDb7Puy7%2B3CaFUrAth1gMQUMvEywca%2Fow17IYLjub35W9i9ssoKNgcS8UN20RB7LiDNI%2BhfciGdtutsfgPnfCNL3XaJOnnSPXh4Pp0vfhi%2BEQdsmmB59D11yIgKo5FkfozTuf0IBEccJnIefEyNIeDxEQyBRmwjCiL8xehn6dZ8o1d0pxNshgTBEWKyY7GpGrSMiPWIsDctOJEOUVjnVXjBdLwnOCi50RjVOZbz1VUDKlOAr2u4hfViptpr5hNCsSUAlL9JuM4zOAKKzY9XE8fT0ppaqSwaXA7EnZzlLZj8vhtvxkrr8alco1B3d%2BLb%2Fg%2FPbuk9i9sATjSfHESxoGOxOrg1%2Bin2hxgKa7C2o4OTpFFPbFqPW9hw0JNbTa8RnIgqcILON7OZhHwWHQ3ZGPM4bX%2B7EMfXxv03MuH2teRFYDZxxc8WLT74HfJuTSAksyn%2Fpjkehxtpr9ZByuVKgDDAmUzmL11BrSWuYNrMLlyBq3DylH5nrLtZyWjQnJCQf6rAzzEocWICzQFeX649KI0VvthdvCZf18CGL8fWej6VG%2BJfcnUxM%2B5SL9Q%2BG1EWMOHttcEGOqUBHF%2BM0ANDzNdBPVSfJBlwPASxh2ihcIcyM0yuCeITacIWMyty4qrcWkipH7l356v9CanRFcIUAVL58wNSFo7tkG99%2BfNz5y9DiqTFQcImfReaJjaP6BjdJfS1OTYW%2F%2Bryp1kM53JC5EjIdxgpO1unWQRDp1IIyBKZXm69P6MQ0tcBg199hgCfFxgV8OOvsldT%2B7tG7%2FkEY%2BPgyh5feZ3u4x1kUwE2&X-Amz-Signature=6ad7d8296a81540cffb4285397cec7067f22662b7a5db4a789a2bb1fbb9c3d99&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

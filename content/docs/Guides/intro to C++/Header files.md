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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NKJ2WGL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgnsFt2WABXxHwk0whARrbyqGlWmceboLCgJ6TVydw7AIgTGOAtEo%2FDpfdJi5fhBPzMatmzIq4kz1XWhy2%2BNwLySMqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnlzlitqnicl2dYqyrcA%2F1GVJgo%2FhdcI%2BWyx59Q0dbeFPwFSRURenYEswWPqCZnLCoDJzDTnEJ4wR6mtWL3O1CDFMxTPfHZpDCef1j6XhddoLz%2FiqunOfOVYK6tLH00xpQqQ%2FS1qn2yaVrz9T2v3MErlUo7nT7ymTpFpgiYryPUcAFYYzofZTFpXIWzmCYimj00SY9XK9k673bOTUS4wlJH99TROxAoPYDizqms9SYbVjFU18m7axIWALMHf1%2Fojyov8OOcWdsPqE9%2BPlmyehUlE80jxrqqtp2pdxUtL%2FZITPSxX9anoFIc%2FH24Airld0z3G8%2FG5Dib3KIruaZaocHkinbXhyMgxH%2FwV2%2BprcOSWuq3PxM0LfWCc0TgGcvvAJIpbK0AnFIvqiQ9XLKprwZmk2FBpgKXeOpSAOPDuFDFJibVW3NZH3%2F6eNEzG0oDh1juJFFPc%2FPgx1LtBgUTa%2B0Oiik%2By0OanrM3CAtxP99JoeR54RHTKzKaSHO3%2BYvZ25bbggT0YgRjirpze9zvbhVf9jIPnnZ4QKBEWksS0hrr3F1qdiPxsamlaZD%2Ft%2FWtanilAKkPqjLKO0D4uYRp6aIeXXdic5cT1H8wUopIkUyp8iw6JFK9gLphIVaKB%2FO3Qg%2BWssz%2Fc%2BCrB2TfMKaiyMMGOqUBbxpNOuElITic0ZlB2kqFL6tBUafMNOx%2FUJTaqpmsZkn%2FBsYrUosxJVrDgrEta36bsbece8Zi2wb9767stgUEn6DeL6XUgCh48MiLyKxU%2BFRF%2FrlMxJVg4FsmorgQ2FZ%2B%2FgonfEgQhpvzpfAD5aKMBarhjgna%2Bim0J6xFCuhCTFpoFDQweFQPoeIluKROVWfcxfByPukaa69wOT9C8jZzGOA7PPTg&X-Amz-Signature=970a8e175e2a51ea342ce55d62e9ce7cbd3a9dc063452a51ae44a1bfd4a3e623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FRVFLGO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAedVY9qPo57KWDBV1TIkb7794Xsbf48F2PjtEEx%2FVABAiEAmuS9e3lpwF6d7hBuJmQyv9w6vjgaR%2BJAuN7bSb0601Eq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDFzwKEoI5uBz1b1jPCrcA1KU%2B1%2FRpUelqlvv0YWZA%2BM0%2BnLP3Box5VW9oInQ8kYEUM6xeEv5Umn7I0sgP8uXRnLN3IXvRV6g6Yc3EWtE5n%2BW2ldzdnxYuISr9UpbL%2BFZ2qRvemDdf3XhS2JGndTYQGMkvwGsncWD2Zyge0KYcLIGoCweAwp7UlyS1FJ%2Ff0GF3X8ywfAP%2FgGAMVB7PHmyTitAM%2FuhWe4LWsOFHFuxx5%2FtcnDXLe4kD5ABhf%2Bh1Rz%2FqdTmshMZWx%2BbVqojxhkA%2F88rO6YKwsljjYfl6LAI5kJdMi7hose3Hn922HFZijPNjnItLnk1qd0FE2QXHKC2K9Fk016k1D2FuUOHvT3pocChFUKb80DpZVclJrqAz3UjI%2BBdGvwUmZUIT3ai8J4naJro3eI8VJnoJUhQQ5f3so590mTYGzQfl9i6Sy7Ow3uB1jf96i7o0miPV726kNSE5YLjIEACTvMo%2FJc%2FmVidCsDxaBiBdgOrz%2BKoutD00zfNukqrUkSKompoUg%2Bag4MqPeV9L4Ra0fP4veB%2FmuxzZCLE6%2FKLaYgdowQP0yEe%2BPBuekLH9tVSKoZUMkiMa5opy0aZOP%2FBQ48sOXY7aqOrxIx5Gr1fKKiNvBglWCvQQ%2F6dNyddx93SXfch2Q4vMPGMmL0GOqUBQs65BMuFkZvhmqQI5m%2FKI4ukkn3PCBG40XJb7ql4iYJZkQNuKm%2FpcrSkuvO78rHHLUpQE44HZOactGXJcH1XA9BZ7%2F06oCJlVluoVZ1T8K7KbUS6OkA4q0yHg9Ek5IxYx7J5aH7fAJdKhGRjV0BvLUbl%2BMMQMlKCpnCpJBiRHF0K4be2lg6bbc5Bki%2Fm3bI1dR6ACWVUNMgQoTEkynYW2YEIR7wG&X-Amz-Signature=1f277c5d7c7245f4e8976c652d36154635c2db2229460686e2457732076d0293&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VGEMNXH%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2Bt4YGsQzw03Kdzd0YJ4ng%2FymRlc9pvME96NzvB978SAiAsdFSbhkhaULSo92jSUDSu%2F8TSqSOaAovZzhpc42hLyiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHPiC4UDEJxosG%2FrmKtwD8S78IxNTGZSWFYRtc2hQvIQeXTr6zOzuDc97V2nrC0ElXeNgTRXEEu%2F5uY6yqSGVolLI7vVAYip5vV%2FG9XB1XBDoGd1u4fOJhgTJRKBtOJTs6fu%2BAnTffx7WeqP2r%2BfUvkwGoLQWnww%2Fqp621hccjD6Vts1yxLVUXlpegENoGIXMKMPtO1ISYOh4d5Mppa9O%2BoAcxAoU1M8OWWDaOiSYS00vGWJCCJuNBUH1Uaqn2L5JEfweT3jG5WDaP0jwAaX7SM%2BtHLrC2AUHt2DzykXoBqoKOt%2BEKetIiCm8znezUvm8ryKzauqBSz4IQ97CGc14d8fp1Tjbh2Fsemx0YKhli0PpctlXKCA1q%2F%2FBMEaKeY7MraGHcL7GFMUSueII8HT4d1SS3NIFu6OJ3sIleHEXS456n4txWvSYrl%2BxPPE8btkuUzgn79vXo82k4cZ6RWcVsC0wgBMK1b7zfh0U%2Bs4B5xRTTN3dRqtgBFYmVJF9bbuv0KDXetIsh7wG2QJToap7%2Bw5MHRoZu7caQno6XkORDKPkCobqKzkxnrMy1e%2Bt%2Fe%2BEMlgH8qbnVQOgefJf3YgNZzOhZZs568QmHHQlo0Itn0cjjDvPknoynbnJ84Z6QQfkV1VrvD5r36WyUmowle6YwgY6pgHnbWBALzi25Ccf9pvoe%2BfjJfZULyS6Qoz7UGf2P3KkH2J0wt9ocr0wsq9BiTeabDbelfi9hofsbBNRCGvubWwxv5UBjfTOsjJGJ7sAJEBBVfRGBo%2BsQqYA3l07cwug9ycB2NUmsunTSnivuLikwFQ78GNV8%2Fkiu90JsnE6%2BC7J7wV9MBXO4PYxT3KeI41O4kIMalby2jcaZJZEh%2BLZOy6lh%2FxbiVQN&X-Amz-Signature=6d35223f08f3f4ba1217f2040948398d5f942a5130eb310bc88ac3a8d3c259c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

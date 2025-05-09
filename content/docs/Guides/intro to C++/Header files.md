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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G4O2S3F%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6P2eRNp7VCWl%2FqssYE1G7eC959eXU%2BtxY2RtcpaF7bQIgHvtC1yOm%2FJ7el8jPFZp6umJNEutSb9pS8WrH6SwvQVsqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6EmYZvWeXe54z%2B0yrcA%2BqDNPiJMvw6zyBtKsOdbxarpdEij%2FwGErfrqhpiXwwgwA6f78ImGjGbifRp8L065DBFgWMtNV6kWbAtZMOcAD30Scc%2FQV%2BLpsHbLdcUIg20iyhODh81zn32G1%2BO96wLJTNt%2FKlKsTnwPiyFDxuVNz2FZqKvZUh1b60ouXV%2FiolXXFk%2FmajHJBxCT7RrMdr3BAZa5me4eLlXv59XCg%2BqDJCm8x4RX5eG9I8h0Cf9ZITXUnAUabkhTYGKtsWQU5oiG8Qs6gXfLz02kqcn%2F2WmlfoSrS3yuo3cN%2BO%2F3FYuymUzOOx4TW%2ByMt3T2RECtgOD34OjiaXwGCyOT3pR6%2Fz7F%2BrQeNf3X66m2g3VKPStqOjYFSEKpLTxLXOPcDRaNrF1A11Fmvh7Oce4S9EXYfD%2FFKpmmbbOCPD5KKk6V%2FGuZwAPDgD3f06OkxLn9Js6ZcLaqZDBb1Jur0oNROJ4GQjqwelZ7M8Pkx3YODwrOW6JoWXKzf47k%2F972%2B%2BbaT5lm6E3TyZ65Udrr7hMnqdsVhVKnA%2FdigBnRSCPK%2FwwkKjxvoerje8jvglCHbTWptBndhUEU1i0avUe4%2FCrgMdm1DORiRgjxa2zBpKSOACJC%2BrdXlbUmn8Ka3FKYPUdTsmmMMmB%2BsAGOqUBlvuojij%2Bts6ke7LGR9JMSd%2FWMNdrHOFXYTFGsqQbEgwU5Xd3GBR4o04ZSNVFijsRPJKfQQ%2FZdyezUlguI6Z%2FGG%2F6My0YvQwJPIsuz5Um4OtjCtbwcYy2GQvuQ7bJvJMDkA%2BIQS86XWZlJAdRRo5Tri6Zrhx7He6OIp%2BC2XJjMQC%2FgIMCMIcQsgcli2%2BsPYfFr2FT1BPC6ylbjB5GsQyGe5bTAZpl&X-Amz-Signature=96b08aaa8b308db7bfeda718e92858c6e39e02778b4e692d4814f746d93e5f7e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

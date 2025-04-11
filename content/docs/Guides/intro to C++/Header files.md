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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U6LRJE2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T160954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHIS%2FUZkdTO1Ewe6XyXvbEDdSLQsRREQWK%2BC2iCbWSE6AiBcdiNMm7PsRscEozWkYsQ5pgeFCha%2FFky6V2Pt8yqzcSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsjJI2eKtbMVXH7RcKtwD1y5fRG9UAFwtBDR%2Bercqt%2FaVVYRoLECpmfykJ1QYgpLBzPAeVd0a%2FiuNexVJHmDefNTDqzaxk5RnwJlSfMMGcQ0zliCOkDJUnbRQFNIpMAfaq%2ByxcfPuOM7YF1ERR7zO1kZBnQkS7Qt1tllm84SVRzLrEV4Kmg1YXGarGBAly7Bv5iaPE2Zxvns12vIMGdb5jI3PCLBv1QlbHYuabTAHCOWXIHwIhjLBQjW5v54v%2BH6Z2qBQbpYzZbUQov5zsKlfgPlcmko3V%2FGxc8LD64usbWrNFc2XuBsiowuCMgDYwAGBdBwzgdhr%2BUBsVgfn0mJm42pKdXdLQjhqpM4r%2FqwZYxU4jXvq0%2FcYaU9M0FoUTFvIKISr9QRe444xp1VimUCtRX%2BgWHsdLSoAmkRqUSYcsxUP92elP8cX0t6zAseP7K6%2FqX8TQYtEt1N1ix8GqmK37J6GrA0vO2lIjxGJVamHCi9GnQEoRsgRCYTzvT0BOHs%2BLrEc4oQM6JIn4wCFqWmiSWJn5X2Rw5Pkztuh3WEHIA4aahdbzcLWCOrpeVdCwTNX7DAE2zIGHEZ%2BkvNQCC96qR4DUFsdEAEwjnnC2tAyIi35czpurKDooCN9XHuhZy9EzxXFzN0gJlwlroYwzvHkvwY6pgHEJLymYf%2BlRab85T3TZ5kAGo1GJpP3m6s8%2F0ZyQCkK9114HFrrWSfRxJVtV7fXb4XzmC8%2BhQLhx1TdtdO%2Fl9kcuFvzOrHiy%2BoodZkMdTtCLXhFcz1yXeQZLQZzls7yMcMBPmTjRvChP7jqjAEQQZvPhDFU052eLVVDDWexvOAjKBYDF8c1FkOkbSZXfcbtryeR%2FdCH6UoK6KJ4ryR2UnydRJdLi2zz&X-Amz-Signature=9ebc6c007c84654177d611fa26fd22ff2b81fa2f3e6299a04be1ae4e8da17aeb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

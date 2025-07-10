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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HHNCFHJ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnp7KaJa%2FoYQ8NjLCMEI2u8sH8lkGgDRZmTTlmphu48AIgH8H7Y1EltllCFii49kWXLgEuk1K5nPfGkLipWw23Z10qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJOIdUZ9BKwbL11jSrcA%2FEuuXtIFng8xWquAOFgqpiXUTEVsS6V4OLBWUJ%2BfTuAg3t995MEeqaDoDffd0QlTeG6gCzKbPxDqrfiXxqVbYsATU2cjMqEiMOLAq7WU8AosmMA0jJnd6vqHaCf%2BU3apPWOU00y31eHAIJBvMQKzT1bVHd2EyyhRtnMtMjJZ3Rj%2FYPa6sMlSK%2BGOcgRPewZbmo%2FUPJI9w1YmxF2OUpW1G0WB506L0qbqRDjcxi5iaN5OIrAxuy%2B2L0Hi1ZKMl1tMT1eljFPEkPJX1qf5Vh0IcJ54i359k6mpun%2Fg02vFi8uZ0cLtNZ54%2FMkaqvMXiXvAOEW7iNSGiiJMJ9ShCOnR3n1%2B%2BrM4I1UsdbSomRXpHvIX4aQZt%2Fj5flMJRu%2BxQsGCic2JWsxDhxU%2BoL%2FDPm1G3bPUlLV0U0%2FbuoG6WQ2wqtyOblE4DOO%2Fgbw75A2EcGco%2F5ov402BAaH3BXsJwYD0agA2yhVPlly8lsS9B2p3H4lxsP%2BdO1e4Wno3MwfSQj8PPXVUJ%2Boqb8QhNSDsZR8zF7rUrKb1PpgKIqCQXQ2qKWZMOEIzXWprgu58mk6GddOWSc8RKjdIHJ5OYBPKS71V1ybsmMN2s3BqashzcgMQFrZcVmuXBUnlsiUt74jMLP%2BvsMGOqUBbHUuAD6G%2F8vepD5FFdWZBMcdP9lR7IttWtyC3f8XKzr25rkKtUQykY4f7WAbBWcD%2FeXZarv%2FigRL9%2FbSpDJKURqHk%2F3Qo6X8kxSn0B2NvC%2BmhyBa6vuS9Mw2f2i75JpS9AP%2F8dRRW%2B2BoT5ZhkfjfTcfjhJLyaEdLfmsYS83ajl5medm%2BtjH3bjWzzsrSxNlHj5g0v0oS7bO0bWWQrPPgW%2BlavKN&X-Amz-Signature=2373fe50fa2e71a1139006da5296eeced1aac82384431c52963e9ff9fa29d687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

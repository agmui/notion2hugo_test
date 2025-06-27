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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRW7V6ZA%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD69fw0wZcenUeTnkaJVBBQjVvOsdJppmxfJguefrmzFgIgNIpk9e2SAQupmexVxEPAJxIql17t01GNCTUq4zdDfn4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDK5FNHFo259dV5pq6ircA%2FDRb77eKiGQs6yaRKx1xyFcTif%2FCEt1J%2FC0taqsdKzP88aM4PYJUAUSZOKcAFvrb1U%2BjVels1DBPMqso5nEubAKaTuBK6HCeKrx0DQMF0VwgSfq%2FPaMkHNrU4jLPiYYpBOxl0MGwyo7hJjHltgxhqhlKWI4JwlOze4gl22Ki29%2Bun01qWgKQiiHMbBrSXGfLW%2BFDeWKF67m7BoU18ipfn9%2BbIRHOXJVkaw3HJMTL3eP5e1DChL8Nlm5WhNX%2F4ianI6HhzZjazaQksYj3G5AMe5rTCj0M6wU%2FiWuYf0J%2FtrhY6SvdZiH2r82Y7vvXdxQnAy4%2Fu8w0%2Fmj%2B7iTJQ38rpDhYle0XrVPwa8C9vXuo6J%2BGOfYiGk%2F%2BozkvPEFanhfZV%2ByxSjmEztpTvAg5ta1k2QftXNwr7WrXCFo3EkgxrG33JTYcprz2IWktbgJZz42THc2ogKy6PIu6FPCEAzG04Xnu86NDnbZNNlg7Y5BrQwSLjwv4BvShmGgm71EAAy1r9nTq4KdOkViP13S3GWEyZzZkb0%2BnhcNbAyOEQaSR5kVTNHb44ZC4FxYHPl9pkYA2CKxFFD0FeNHL8DzPiJFjH8SIPdLSWq77DuFfiSu7m4%2BM0OgX8239EU8OOuHMMjK%2B8IGOqUBC4HDCgQtVWdT%2FUt5RcCBBXTgRe6xJ7Fn7UEGEHNxTI6XuEkXX9%2F3SgRQ5i%2B3LeEeLR3uufUbY4wyXjEfT5FXE7kHtAXWhdjQBnnczvGatg5Rm0h8jGM327sGjiZdqb06JH68FZCDOZntinrQABZ9FrVOtPfVwQP2RiHBuDCxA4Busu1jwY7fCrJyOchhU8c51mBU0I2XC2PMU3XsSn1MfCHt%2B36c&X-Amz-Signature=2751d6771d33dd0ac227fe2876067978b82bf545da9fe710ebad28ef69d8bbfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

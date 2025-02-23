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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624CMGT4J%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHs%2FzLqcseMHvHv2xJYQJ35iMAxcQ2uBcuV%2BEkcGzGu2AiEArsmRKA%2BgFX%2Fcjr4qYv%2BUXXhRcjs7CdBziDibyftkU%2Bgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDO3WLfBXsM%2FFLt54VircA2sg%2BVnP5K479%2FmC8mDe6y4oXaFbIcTebcdSkvg28rIMOZCLAZrj9OTosPbXspZA9sM6t%2BtVdomSM1qsD9RJjMteo%2BuO%2Bi68n5SCqc5MdrHX%2FaFhCOd1%2BAhT1SpCfFcJYrf2oFQvrKh0ex3lOnftjHpSamFRX8%2BgPYSD0xmUhnnnUSgriKIuGFboUxv7sJMzlYyRfQuqKbMkPUnpsp%2FeJJsYOZc6kiv6%2FFRAlgt62g9L1c8si8t9gaN1qc1aLC7EW8OcTTdU9%2FbWuXd3n5%2FkuSNK4TtBTPZGy8E%2FbsFmP0Yo8Rfq7p8YlZTJ7KJJ8AneZIQbUeE3%2B%2BXnwl7O0toR3ygfsr%2FOfAGKTgwjfd2dc3bNX1sL1%2F22cqYgc%2FRL2vGmyBeyehuixWmCn93N7NGcz7bnSXr1ubSq90n4nrmq7Yn0DF%2BM8Kq1ldSFp2a4wKuv6zO8%2FYNcBB8YJc7UmS9WNvujAA9xpkYPwOkGLCGgZXAD0dkjSU7sjQbMCXAJO26z6L53cqD6BENwU0kN9F6OrNWCgduCJ8w4D%2Fa1T7fVrgZ8kwckZDuFWxlxnGS2WvzHodhzY1VVwBKXPe0WdxMrz0mHnOtr6q472q6wbOLDOx4bnaBwXfr4KqaXrHGWMLa%2B7L0GOqUB5WwpgDcc32Lc%2F7OAwoiHKt9mDUgutLyD%2FX4VLcHAl6RvSDWUhvsS3E5zydhg%2F0X%2BLWzZ2nD6ealwJFSBWdft%2BlFve6PBxDwJPXdr2uuwsxuleNvUJxQ0af%2BYNd83xCJMD9HPkw%2BsRkUh2GlTF8GVG0fmLk4tDYqEBvEI4Iz%2FSquhZ21sTTYYWRMb1lSnNWzQtx%2FsJVCu%2Ba9bujZjPzS%2B3Zp1xmZR&X-Amz-Signature=8c280db7cf041f2abf3d44747f21f6c9a8d7b18eba3f34ae92f5158198fc8906&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

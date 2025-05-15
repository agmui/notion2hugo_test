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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LRBZHCY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDCecjW3VGgdLnyqqIYTaqg4imZ3jj3RJoi7cy06zZifQIhALgZ3joYx8JLivNLFqlU8t9tuqyIK3CsbA3wsX0SjvTdKv8DCC4QABoMNjM3NDIzMTgzODA1Igyy%2FFdJKETH7NOJl7sq3AMNsMYnd1vmj1csIcmiuYewL7r2EG375Q%2F0QAdNPnOJZQaEuRbQWxISGWHYIv9I12x%2FY%2BT7pIZPnMJ86YCKR6FVzCHhDZSk%2FyofNvKK2udNY4NtA42tCoVpFeMn5t%2F391gO1QWQX4vTPAUxmXZHOOCgCfDW0Pr441JH27PWv%2FUQzPkxTypN0HJgH6GrsQ7feOUa3wlMQaC8J0kXooSwqLx3%2BeWxufy%2BGTcrH5vQt%2Fa33GEjkfV3N0zE3gmkwapngeWl07xZOAeeCs9juGADCKij3i71JyY9bJCXLHJjQcjQTluSL2fnr8cMOndlmk2OURfwXmuEsMgdi8JHDiB%2FGvHLNwDXcrqsgW8lr24WzN1Qh4Edn3u96lIth6%2B4xIGaLzYyAkFCNvS3i6tDC2pOYWuPAxU2amUI6P2s3SrXWIjb0wBNHAdnP9vb%2BrlpkIWd%2Bqvz04Al6OEIsTw2pkjkxVBFpibwIiWB5AkdKMiuY%2FtcZ577vDCGrqJplexWMsZFlnKyjqxd93EwFXj9ry6KKLkSxd543Jv8TtItMgEs7eRUCIGgo2%2FyGC9zrS4%2FNecOrtclgusB5ZUyWwcuPivxb6icxOceyWssgl6ul2AiUuKDCM3cKAZTD80LokEnVTClupfBBjqkAV1C2IStmPAuhSIFtvUja6hq2zSZ3d15hcPeyoMK4EPOHUSdAjWsY3sj%2BKeU2pNTjaDMP8MJbGETDh30N7eTVGWtcmPDh32BrfQflzcqOuHanCW7h1FQTu5%2Fwjo0Cyn7zohO8VxDr%2F81gNpuVSSD2LueAz4fnWr7MA%2BdMpPDWwgb1WmBTVSH6My8FhoC2d1%2BLy%2FLj1kETe0wg%2BlHHPto9iDcpOkm&X-Amz-Signature=5d0e5039406dca20dec0b7a2e28e7be17205cd83daa6a5f199b04bb4b2b8a49a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

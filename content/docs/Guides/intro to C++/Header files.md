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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYF3B3UU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCID1XP5lA64OzTJyrvYsdjij4mK1cC6MdtnaGJ3oiFEtTAiEA7fYok9WIT36rrF5BLwaldzVDlrmGcS3J0afk2iaiTgoq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMluArOW5V3xpEOCNCrcA%2F2rBSbHWLUjX4Yfx%2FyPiFSrTeNjn9KFvacrrqGzdM9I019YCpXYePC6sjCPwnId7tAgdy4dFsJSJ6Ai7Q7tcTDBX7z116XbAmMGE99t95x9rsEKsnmOv8huv%2B3uK39SUFGel4s3Tf7QRoo6CoglKfJvY4cEjqxN%2BO%2BrRKpN%2BoN9D5RAA8e4clXMjb2yjcnCcZ1Pf27%2BFmId9K7pj1%2FSt9GU7NvbX4iSi49Rjpu3xuH9awgowG5jD4yKHaDubsx1Z0Pyj8LQxpxKx2%2BpCkpUtYJPcZN%2FH1btCvCfWQK%2FPVlh98B57yutklg5t%2FXqxny6opE0shaa7Azpx8W1tUDg2Yqww7871HlmzR2I6D5b%2BvZ39dF5uz3xejWIOJ3pSm8lbcZpAURANp7WpybsBLF3pc%2FmJpuc4I7wwO4BphkP4K%2FsC5wr3eQMcf3exLPTxFIUPMmSU0KjsFx6DbnxnDP2wuYpHLd7bLHBygViScEW82ZxfSuf7I7%2BA1NzBUyKrK%2BkdHEU3n0%2B9P%2BQLL79S66Q3bOXfJecpBkNf9oFWD7%2FM%2FznDqUiBtkimZ88hVRQeRSqw53F3DpnKbj74WJUvw56h5AFjIzY3%2FvicSUsV3C7ghL2RP8qR4AXagpQIVOMMIi5kcEGOqUBYg9V8dkhuhryurHjUEs%2FtsfmtywL1eeHzp6aEYyB8t%2F%2BP4GJyS2o5TdKN0N7Z95Z9nweDlT%2B0Sq7ExzBRlkUfSaTGtch%2Fij0mddmvzWtZ22wNSOHVuOnrDt4IfjiieJ9sEIVBKrMrcgEU%2B61Iwpms0qRUX%2FGFDIy0xEPhflSHk5B0LDyWUaGtQFOntc%2FdMWZvG2%2FKep1sJO2BTmW0Lfu5e4InUem&X-Amz-Signature=d4a5c4c2a1a38ac4d08cee075c96b35b83b65838e45ce589ec1389352c407fe8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQH7XJB4%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9mlMqJnR9RjhzADvy16lu2IOxFD%2FUQ9CLnlO41IfUSAiEAlzm7Fr3rlJHU%2B6Zc5r2NpU5nMzX3xSc2dC%2FqfyYqQjgqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYxqVr0k2MdeIbf0CrcA%2FI7KfdAtSDXlZhNgWF7pUBS9DBgTJHD274SjFJmCNBpL7DuciAxxk3pZrRHAgjLKaZIaEz9urmtewi98SBkuatDaQ5v8wwlGGgjWUYKcR6yM38kJiDnaB%2FxsFi2kkjRsnwO5UdQML1hZSG%2BgI4C%2Fc8CrGMFt%2BjtJENT7c58SSjvOtJ8n%2BtEdActCoXK%2Bv0lyMYfAfodT21iQtRfKIgxSIB4p%2BsHBPvz33mtU2I%2FqFLGpYIV7UsXTGvwkEI3ddgY%2FjDR4pT5g4GZnhWoJSt5HfeFfiTxub0PTGY8NQ8vSwcaycRrq4q%2FxTrpWN%2B2zOdBXDPEd26lEWBpqLRrSZvu%2FXNJxB7wym1z9b6rQejudI7rZCiEIvGTWW6WSA%2Fuw9Oe29y%2FA%2BRPiNOJJVgWiMHyJ4RNDDK1AsUe9hjkXi70tGe0SggQP%2BJqz70oRVzqXEzDtelVP7GSDMZNsayiMC2vz3HO5oYMPwpmb1dapIBi13mTSFfj8DoWYYnyZWf1uPI2utbq0QEhNRAxPtUnYzPKvhHPK9DUhUD26SPu8w4yYq5IndoDstEprKl3FLsHUAnCFJ291Ynun2D0TgYxY8FQu54nGRYP8tjoomHhmSFZ1s7T1R485KoUApRvC6H4MImd%2FLwGOqUBcUShu%2FjABxCxIqXJpgm%2BkHegNyUhgrdS7OOscgiKriFsRD%2BgftRa5sWAvY%2Bwcv29AXVeS1a0koSWW%2F8EPEs2y6eFd7bKn7GQP6zdrrTPezw9ykb1kbZpiRNA1t%2FVIkCJpdU9%2BX4%2FDd5dP6HQ4Mxdpx3MxSJoFG6w0vf7ubPZjQLHrB0HLSrLOehh5YkmjAstjsQpuhHHAoQVrI6XqCGbEzv7smz%2F&X-Amz-Signature=02bcd92c6906e955be5897007dc3c1af0ecf40c87076700e0a53570c77eead03&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

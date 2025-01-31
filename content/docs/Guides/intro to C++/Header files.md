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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN5NHXDU%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVB9GUfHZnOS2Ggm02RHAe363y74jn6Ca0CqljjSoEmAiARelD6j%2F3KCM8oqMg0vW1zZdbunyiWoYEEJ7mHzTe5qCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9vr3in84lsRXEnfOKtwD%2BeVT8XTo4fNAN5%2FJcvWFXAL2OoCvtz5Jlb%2FMcXhIf8iLry0LT7ZT0VU%2B8HuWIfFlwrZHudLZDJEDeHaPNJu7kuRtkUcdQHLGrL6EIMihyub86WM%2Ben17vZPbueWwfvlXmpxMgt9elf9AzM1wFsXUpJiAo1xUHOAR%2BdxaVnQU1sW7p4rmkp3skR3AlxogEq13USJuRI83BfhCDdwCXCcrWMAzR1rgqPXyq2IgyY1Uu%2B4y%2FbDq3%2FwrS%2B7n%2BeY5bRvmnJXHhQH1qoRRjVNus6ZCG0M5cvw4Lh0u%2Fs3OgIOUL8GMSYcKJsaEVYUHpA%2FJzB06BErqGBL1GAdIOOFCfSlYat2ZlR1tpZ8K7zNWp2Z0kPz%2BUEVqDh7bOmnebXuiR%2BJRFQQHaBgYEwW9kN%2BwPAjyRAclfd8LTC%2BvywtL2gX61W7%2BUXos9aw8KAL2T10MfWeUEmFuxw3gdxiAhNRPmoif5WEASA%2F2hVp3nNYN7ncXuVanLoJeHDEJQoPEzKeRiszXBm8xdDgrjv3JZsujxTSd9L%2BAwFgYr9oFwFCUj8Qb%2FiUpf221eQvl9fxH94ou0OePApoPvGBdJ61NO2wQEH5z1Jqy0b0hqOlfylBdr6IDygn3L26x0z9DTG3gGZ4w5on0vAY6pgF3uYsV%2BclLRSL3h915bQxTWs%2FN01jEdZ5y61I%2FfHjM0gzgGA4%2BO449Fgf0lxFI7T15FYFdxTDkpt35%2FKJNLr55U81UZEVPUN5a4eIENU3yY8Cihk6gC5g5n54DI2sYLqONp4xRqlfAqeJyjfeuq6iQGWtEYvwOZGy9W30OnaODRW%2FGrYVKOSnMoccFDdgtrKC67Vqwhwihf4RQviKrm1oQM6a7FTsz&X-Amz-Signature=6d914fb6664788e706221c8f10d722e547c831f3fce69042eda69a16d0fee674&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

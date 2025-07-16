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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLJDR2YI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEB9N8OV4JJ9FA%2BYbAn3ydvqCuzAgCzdVNKN8hCnqLidAiEAmyHvfJ6uAjDC4e8rQjf4Z4li0IyTld2bSHdRHHQEsSUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBKszT%2B86OrLS5bJiCrcA1fVqxGonKTYT8dEpfH0FZNmx3DmlW5oaSk3vHlsgYmkecRR%2FiXZ7DYZ0ReLU%2BhI%2F6qUskJdhytAK%2FB9V234XZh%2FUqh7tyscFM1e15Jr41OCT2JDwMfxQWtyjZmP1h1qLV%2BOGsTiEIDs7IoDMy80rbytoSLKl97XcGyZFEWrgWgA8Jvmn8C6pixRfRI6dO87F0qcMkC07AGe2PCz9ktzahzTJFZhf16mDfxNWnJnHkaO%2F2gEGuJLlvOhXlDZQ2NMiiIhz4mFmapBH3%2BVYoC0m3fDlg%2Bq6Zu068D94omFRR%2BgGyGxlcSSLY5sI9T9%2FY3BmSrdg0zXEp%2FpSzvhlK4joF26wNadIVhtaZ9rV6d%2FFIRTQUv2usTKgjUVerYjOQplW5BFYXTA73TxGnFUIUbzadEBt4u0D8h8EGeUDBdg1fw%2FqAEUuXRjoEsqKqFtij2ijvDcklXz%2BG4qAVsQ2KwgcySSqz8M098F5MR1XqFe5oTwug3BbF2DZX8wCOr77SOjv%2B0MSHmV3W1LsFQmgZ9QXB6j157%2FEjDSW7z3YfLrDi0OV4lxYm9wJTv0GWIuNaVPGWB6IwrjSTDcjlVhPoGCWdCivK%2FbSMOHOxSAKp8%2BSJHUbqMptl9ud0%2FRLmQTMOXQ4MMGOqUB0EinzMsRRZ20XuhVBvgHT%2BkcEZwDDaEG8EOmf6geUiBjCFntjI%2BNbgQOzzuACGWVKugrmbiuwOe8utqpWN7EAsrwb5D4Fub9MZHp3%2BKNLzTKIkJZyhetDAiswHEyT903ptJPWzopo8QwxZ7WpKRmSxwAolBIdFwv6maHmrvcECLRojxbt3AXdCROCYK9xKXbnE2MgDhxEScvZ4NDVI8XCcSFGTw8&X-Amz-Signature=c2e1ad96da52b117656649d323631ab5bf82b2a21ae9df9e8925e65345198b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

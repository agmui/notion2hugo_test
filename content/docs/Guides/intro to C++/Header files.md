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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRZOU2T2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiZXUuwc9rHTR5Ys2CCZPh81P17oAxMjftk2BRhGtreAiEAlghh0qhaFVPrpS%2FOQ8ZVbRZgtvNLohIJq%2FrHR01G9QQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDDi3MqakNDujlNFwNSrcA15HpVu9r%2Bafx8Cdho4r5V4Xt9y43AGmuGErl%2Foe6FLRF1iz54wcc9qGVIpUCaytBzgo586Rn7iwQcGjlKf6TJNT8BmeCstLZgFKEUpvbLIrZ0I9fuImkDVpBz7yKmdydpg%2FCHHws0L3pHQ2KgM14rfKwtvU%2BSAns2EE%2BaYxNGZ1tce7%2BP8zuao57UTQ35sz7Woz5osB3iM329mEMS51uDLkrLH0koshnpKhoR4yzYrkk8bOxQTXpTymMyvH%2BOju4nadbHtxQv37NkpkJq6H4hhSXZtED%2Fblz2hx9ADaZVN%2FbalHgKBQUrkisUZhCbt23aw%2FACZi4lMwehkB6ErLqIKuh6gOGfBFSo5S7p32XT%2BxGkkXXFWvV7mDJ%2FlvDKbNk6YRIA0O1BxHGIv5nQ%2F4XMiEur5160FATDG%2BkoaVGORuCA1QiZ4NxI2sl0NopAn0esntNrSP6ZQGqJiTggn0dRslgH5jGR0H5FI9UZFF25V58zK4uc57MtE2GUHPmj4fhx2ab7au5bTpmuN4z8wJ%2FkGw7JrgNPRHp2wnYmBQXVYrat3KUmg10ouG%2BYdnN6S4PG4ZUIxgZh0RtBeeoVUp0WjQmSpGfnOuX4%2FfmJlSxLMQM6EuFNrrS25RtJBbMI7Lo8EGOqUB36XiRnux2Nvf7iDZap4my1KWm45Q2rPoqtUTb8rxrW%2BD4v%2FwWNlk%2B2nsta6j1L%2FFM4bXmXzMBmU%2BTH%2BxuE0m%2FDSztx%2F9KaB68DriaPR9ysagD4g%2FP1WVLhbXfQ9%2FEGZHEppQdVZls58cp0J22vFES%2BfFifE75Y8R0tf6Rod9NWh4CsugYpE9XlUBMJpJF5AkCskeJh4MZuxvQxJfTUWywnRTBWdf&X-Amz-Signature=e712ac81a338018727f53df8cb0a4c4e41776520ee131cf6766216769ca08e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

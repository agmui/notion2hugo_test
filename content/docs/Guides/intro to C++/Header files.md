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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IH2R2HF%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDnJmRfY4NbMpknRpIaoqBa1CqOdUgxrvNs%2BhBg7sfzAiEAypoSFsVL1gGcWDyMZj%2B2xqAGP7Gm1X4EYnIywUELWDAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBqIWARsvGeIS0znnyrcA209IJwDyT0mLqQ9DtZANbNLhb7TsX6QR6fSFjzr4Sj10%2FOjaQIKhdFd2UqlCZUBwae3yzPQgmxAQ7V3L0M0XaiOwGe7rbn3%2B2Jw55p2nypGT0VLpk3Jd0S8j2E4Lh105c8w9rgaCOdHQA2P9CnM6qK1tHx%2B1x8EYyEYO1Yr8n8SvEU5Je24z%2BAEdB0QlTU51AQqaYSydPSo8PVa%2BYpCjiUmrnJLUPTW0cPa2tIytK5SQrueqZwmec%2BmRwinie0lGkfYMwtve%2BKtuXAdn%2BFL2rYEjvDaRcwUeQ5niSE%2FxCUIYmkJZwZWpdCGZHgU92fcK2YAMryHy%2BEpoe17EyL2%2FRLHereSWbQ506kiRzX8kMC%2FodBLY1QELFdpsxm4YlgHFjweP8JRUAw7NT6iYehzSwrBOKQZvjhPaELig0eL1ycgPx%2Bscy3wKwuVo2X%2FSRG1IHIO8%2BhaEnVWtO0UawMzXfn%2Biu8wdCdSzJuEIoCb%2B2OTeD9u83nTli348eyhdGVvjOvos%2BP8My15QD81ZBsm1Y5jXlcFEETac5XInSamisdq%2B9AsT48lfwET56dO0H1xWVB3BaQQeFXYUkDNHzTt2LMJn7DbPQO7853QeZROs6obyTVksLrLGKTA5%2F9oMJXP67wGOqUBE0mvLVJ9YZNXMEvO%2BENrvDdH5uE28f0pqr99ldnTh9J1Y8u4Img%2F6l6BQtutUgNmS4cl5HfNwKWikOrFGAsvFxlkkbUzvhw5u4Igzx%2BzbO1SYz4mHL7hzNhb%2F9rkf14HkVhPz97Y%2BFwgQSPNdC82%2FsT2xtUO6RQf65ugBObnwZVU0XRjOnqlbek%2BBv55A814y0tQBgQsR16vOHZ6eqAuNudp9uvi&X-Amz-Signature=6115d88c1fe47ba2f9f1b8bb8b97aa99aa167c887cd1543d9f241dcf1ef25de0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

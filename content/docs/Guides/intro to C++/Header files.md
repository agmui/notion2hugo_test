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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4AVUVLK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCID0JpyIj081c0ectsHWofBp1%2FQMTP1vbHP6Ds7OCk1s9AiEA7%2FMOQFFTw1YnILjJAo1BibIAw%2FVTvL9Yv8%2FG2wEjhZQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BNZujyAADZT1jf9CrcA75yQidR%2FzQVjZNOzAmj2rTvsZ5eox4VWxCJrFl0XM9TR%2Fz%2BNPoSa19p28odZK80Z4tqYgvzvSarHEuthWw%2BJYC%2B8FjNcE0wsfvDs5gogTLaenPSNUexb3W8zpkKvEaDv9XpnD5XxfRO5Lhzdws8AmTUg54csTnPUexUmxdHu67UzIAxDSU57T9uLkI8%2BiIH6cC09ocxWDuYZ3tcNlUchhLQRG4e4wZACZ6Gdj0tCmqZU2Ew4utIoZR5DRT56yT7Da0Dm4Yl09%2FjYFKpu4M35Eh4TmJMguzHA9x9zCFxJoqrH7I2%2BkKQSKGh7aza8JtNAGKVps05NwczujVXSWFDZBhak3L0NMlbNxzG3MOmK6RV9%2B13SaHYiHZP1aVHvPMPIj2hDrn1PeqIZKAwKnVtP1%2FSa3YHwnjyGtWDLj%2B%2FU8qnQeij8QtYsgF%2FkmAevuSAnRTczBXUoWbjZmAd%2B%2FuNq%2Fdyo62m7NK69ND%2BbKGsHAkbYssN2hFyqwIGn3yM4IeO5Wp2ZEMlDisGozlD%2FOf6chD8DHMYoeFmoo9MHRJFEmQskPFIdO1h5ZjfLJkYhoaang5Pid6VfGcjKg04ApxBi3S2k9uE3LMCSuw%2BC1GgBQk%2FwkxT5SsdUmZ2iq1LMIqiqr8GOqUBbf9nMPIQRMK4yEmEMwpU%2B004%2Fcily35H82FGu7eMFXGEjeg5r%2Fy8xibXYt3pdpalVVur1W15x2jbN6frqQw75awmPG69RZVIN%2BJY6cVbNUxH2SdeEakf3mk3w%2Bk20Ezq9cPbKBheDoi%2FbkBRk5bdyKDeXiAt6U5D4utmY1rT6zYoL2aKNp%2FLgdlZNC%2FGyDFl%2FZzuyI91hnDvwDr%2BTClTL7RXZUcJ&X-Amz-Signature=e4dd7d1c52ad48ff296ea684c53ddc0beead5ecc36aa5dfd0da06099a0c83a38&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XROD4WPE%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqpIsKOYlgmP2JK1aLcBpqo50GIRgwACgtWSU%2Fp%2BP1WAiEA4POmqjA%2Fmf3WzGzn6CdRdg2n%2Ba1RRjxrSv3V4M9%2FqJAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE502uu1C9wOqSy6lCrcA%2FzROeoXeBPgHT7AREhoPncnl8DizdvMBrvkoH%2FgUDVRhPoLKoLvXMXQ7yugyRQfebi3mJ7cPYhzq8UZD2VZbJ5I%2BsriI%2Friu73TL5UDB4Woont%2BgGBhqbVOc5iPGCwjfh6N8yRuYDnHtCXUf71HCu%2Fc5ZuizBdSuHumMq9CkQX6IzTxauC783c1hOWsk2H9KTEs4%2FJRULAHAcX0in8hD2S8ngu8JC0nbPdoB89idxk3Ur8vQQWCSPPemSFydYGfkaYB5X3eqalIYRMmEUvtCfb6tb4kTjjna%2B2guoEtcx5srKB7liL8VAYLzZPSw9hNDbyZ1ISFMzScAGjODT%2B1GBkv6m3zCaZCCHaFB3bLq6b8sH%2BuzQ6iODAyYu7LT7pIomic3UTZUEkn5ZoqVKfJW%2FOw3u435RdSDZmHRtIReTurha29q0o40zWdVR7jjP9QuWbgAEQvWjoq6uT%2FHp%2B8WkfwVAnJ7jJKawsEmb8ZOWwHW9TQFgimd2PZGZ41xTNCL8fO0mBQise8UEhWCynjQkcM9wBSHWs%2FcBOZA8FkS3RFtQvSRGT4IlPSW8pLND5UljD%2Bh7tJBXjKmOjjyxbBxe6vhJMqGRudhoAifNde6BtzJWBnpZ5zwJkCk7i1MMimxcIGOqUBxCK5sgk2tEXa%2FgyIxQAveVZDsK%2BnjN2C6WZUOvsv64Us2%2FUfwbW8cpahNBlOl3LwXIt3fLKeTM%2Fh1wmaLuEa45B6nGGBkMjnsrrfMtPIrYsDWeas871OYx5ebxelBDQAhglliCAMT2ys6nTYSsZlEiXqgIgklt%2FK%2FskTL4EtnMxtzz5G4xcnS2ukkYdsLS7Ch1WJkV%2FSonAAKAN6nglHwa%2FiidkR&X-Amz-Signature=e96e7e87122cc046d673dd740ccd86cca2a98394051f300501d94327bfb73b71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

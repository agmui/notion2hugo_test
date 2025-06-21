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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST7XYSRQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANt3utqfidL%2B8ZxoIsY%2BwLVy6EEU6GfxLIs1ZsqWtJrAiEAifcj9xbqQDqabrir%2Bp4Cp6SUhmGUmnhLRPEmeZxF5NYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoh6JDL0kbkpB1eXSrcAxFCXF3uK%2Bn2ga3a2s00ai%2F36E5zbd%2FobfY%2FqzGDv9QMWw5SplzZ0QoTBS4faHJKkLBdU2MI2y6TK0GG5vnXDc7jiA9ZqeVcuKTQURHCRppvdxCa7LAnQFSjunCS67LdE1Z6pF5F4s3tKLkOm9UyeBxsdIpxUbmhcZBHJ%2F6TNHYwthU1sJXvUDRas%2B4Ej56mJR%2BfQn962LPRznruBrivZYULF2mdSFDbHRPrPzessY52fvOaZNZL4HNgihBD33JBjgqcq1U0wEVsE5PMHzro6jCSllY2gQlzqvDPd3DBLaVphULFnQSUdqvt8ZhOAN0jLCWKQOob%2FuVAyiGOBjuWOugJHr7Q4S2pMoNb6VsCO1ahn4DqqSn30XfD%2Bca3FmIRV698Ypl0ESxM9RhHQToIRUO1YfETfr%2B2ZeUkd0nMiYVnENpIGTAxCLvv%2F8yuEkczrxURVUN6J%2FyVGCJoYR%2FP7bmppIIqAkkLnlpqwf0KqpW%2F1YvIybsw%2B7lXKasA%2F5TaSd%2FxahVTimz%2B6MX9mufxzrutgOeP3oIH3%2FyDNjMyprYbIEccdMl7X0grBIDv4Q9eJwvFb6hyxqWXm6K%2BNuwe21D9%2BURq3f9leBZdivnWut30ATQU91LW3kZW8rvvMLis3MIGOqUBHuQUejRsEjjlSRYdQyw8aE0f48jCkcSFM2mZEWG7xK3NsVN%2B0%2F21DnrkUv455KCfZXaLUK3y39I1y8a%2BkwaI8s2B%2BOji9E0nO2yde1eYt4MDMXt3im%2B4QmVLCGEzXd%2FaA3zCgAQvnhDSz3TuQ1yfAVSAIQw1Rg8nY%2BjJ40lUJrYErXyANQ8J2BeKPEa3351J3V32cizk54OeHwrd08x1Ehq%2FuR5z&X-Amz-Signature=99d819ff0c73d445abd1486d1a99b7254f12e95401af2c170b1385fdf8d43795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

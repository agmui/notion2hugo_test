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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ56UNHV%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1hb94%2BEttc3AezL9oquqUXcp2rLNfZsHooIrW%2F5oD%2BwIgQeMedZ1ITWXHibxXtJUmXU7doayPbLu0%2FLWq0vbur58q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOn%2Bv1KgTioRLUnV%2FCrcA5fiJ%2FwYlvTTmOCjs44i6LFupR%2B4m%2B8Qn9rsqzS7ABRKBiRsC9qqwKyyVrtGx1gl%2FG6XqQ4sXwqJt%2FK0BSKx49b%2FPfN6oeAdGMNo76hwAwU%2FfVfYzxP0kvXjVwDqyW%2B14lgcnEoAvVIb4Vm3FLqhBaymmbkXptmslDzf79vw3GH1DtRlRA9UULRwz7ekka3ryF3KCyGqrmGSAPaJ3cC%2FK4%2FQn9v0c7MUZePNxsZuH5q%2F15qEywOIMNwAiJc91UTtJA8kl1%2Fp5LveSqa6ghHi6qxv1fa5Y0%2BiffnCrLF3%2FKJk9iDThYRlt%2BspR5Vhw70GFVlEY7%2F5kIQXS%2BAeOw6LWdTgvwrVPhxEl2cv64p4HqVS7MwJ8E4tL8yOn9dCsQ9hFniTD5du0ujKmGWkzogeoiHm0ZGomztaUSu5kiBnMNhUmxODtlk76EjU8v3MonncnVFlL4f99yN9dvk6siF71JBXMQOTJUJQjryO9dzNODqsytek91JEYLDvgSXgAQrJRYx4OzI8jodk0RpvlrbeXuMbrdcZ9PW%2BqgJF0%2F%2FDLjyLZSGSdHH2kZXIL2jLMC6odBc1gBBiEhssO%2BTiNeezsk5UYQ%2FULn%2Fub12SL1%2B%2Bgj9t8DftW87DyC4iKfrgMMiX7b0GOqUBGTuLwXe%2FYsk4h4jGdFpPW%2FaMcwpDt5XwctHLpTpLnLNMSS7ynqtIPUcTsCdoTrlfnU55aZV5lAqIw25%2FNs228IUIT6qPMUvzL66X8sjy%2BRCuQdKKYyKe5K4Ob4Icic1eXFTyrKpnUAlluMHbblZ79xIqTpQ4tm2nfV%2FuwZP5LLftBNlpAdBO8sCl%2BgbYmnwXszu9tXoEZyLUErhAHKwVdeAx4%2B4Y&X-Amz-Signature=8c27f1b4be32e8ea8d28d967ab056a870cf109151de004512f4dfab1ecc0f610&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

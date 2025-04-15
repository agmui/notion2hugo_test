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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQKA2JW%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqd%2BikY7l4an0z%2BrG4sVznuJXjHj8gEw1hCVJ%2F7DY8UwIhAOBHyUkALSliDxDi9UOpk7N0Z4jx4BTIfvJ%2FmPz4uuvHKv8DCDQQABoMNjM3NDIzMTgzODA1IgyYrxKmHS0U562BL9Qq3AM8BZmNE7BmHOJd2TQleFPEVTL02BBdcfnZ7tp2RDeRM7707botP2pv1MUTdGb4R6dRZyEaN%2BrnoZV%2BrW4Hp%2FB%2FJwuaZcTDdzR8k18OmiPr0v0lbtXTUQWLI5Px5bwziBeZJebgFrBpJCVvskPtPFeyT2P3z%2FqUa7Eg8Vve6TV3p1hdAXeFczUbqmTN3Oz0UzC5SoX4teEiaNevGw%2BAAdsjCg3%2Fm7rSvHMmpG41%2FgO1K55fwi74upQxqw%2F8sqPADshCn6I8oOIGr03lKwItOiTX%2BtcaO8F%2B0mGhczbK4SpVrw0NwB4X2gId9q5LmVHpmVjj3hQb%2Fen7e%2BxxkMqn3vwAgKmZJ5MYc7FPlBvQ%2BQnbGm2%2B8n%2BNjgh1x41P4xMq2utzVqXooj8gXrEr4wvtbav6Qv6P7WQXnKzCcJTKMU6vqE6jateSUYnTkZqbdkxOxO9iVV0mr6hG2ApNtGSIz%2Fgo2Ss2ApdER2SqgRqhsX2Q2A1NWZT049GLLPx%2BqlseLzghGemjZgamfhyWF%2F0I%2F%2FXLBFv3xwdEQMjFPpCVU%2BCnnEx6w6zsYNbL49eU0YRnYFwDmuCjAzoIPVBZEilL1tVZzP9%2BOP9zRTIrIA2K9RKpWAYLYiIX90mQ14RamDD91fq%2FBjqkAcr%2BPSZ1BDPJtfvyPWRp3iYAmzEvc%2BXQ9P1GyMzij4jNIFcw2RJl9xI2uNByGIZzfA1lIZ0fuugM6GNycMuhyQWYJwRJGvtKDrh49TjZUOnAIFcx5dD4WpWduHZkWh4QLWehVNdK4P7K%2BE2SMlh%2F241L%2FMt%2FTaXePjecPLrkBKlY57jqXAF7mjL7DSGZXEQLE9Kc7FtIwbE2ZwqQQitI%2BqWNpxd4&X-Amz-Signature=8f85b6057ef52cd67119d5671b5976f51bc77649ddc11e2ae3703ea4d06c6288&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

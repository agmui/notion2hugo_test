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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKWA7MT2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFS%2Bc3zx00uekkkp8jpjCtYER3QLdcRc5Ef75zx3GHcwAiEA0HwroqbdSkeIz2SiD8xXDtDl3jeiTaXuNHZ0I5ixGsAqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpBRIENQS8bM%2BZ3GircA01N8jG0rZnzXOt0eLJJIhCMspVKQCRts26W4Ah0mRRlpyAEpzxawIRteuPccV5c5zV2%2BFqk8W3235JYgS%2BdkeCLYeUuzFNB68aScxYpwraEWuQasxHhXaeUJtkvIeOpp6HKiccufrb8P4TbIt0BBLPveowe29VIf3PzkC4oFZmrrBrESc%2FsVBcI6vhZcoJvi05u5ITMq4jRsv10abxOlS%2B459wlyhTb42bnLl70jPDGa8isqBwPiMhmasUOTnbo49oEemB7jL43JZkF0i3iYh16suIfgb%2FbwMk7%2BW9D9axxw0PV3QzmMaegs7U39EiHk5EOetsV9h60q6HVxEfmK%2BXN6o%2Bdt2FmTwqLsgGVo5nTp7UaZgqPnexg2T%2FqpCPWFbl8W5sP0WDlXmjYd7XEIqnpQ3%2B3PVDcdwF6XwJDpo2QMLx2mTh%2FCPLzja8IIz8llmaAwh9xx2Mysl6VbM52fOX6h%2FisRCDac%2FJhjY%2FQ5iCBugOtvayiTPQhkeaQgXr%2B293%2FSTeSkF2YN9Skv03lRwLFXpij7plLKYe6S9xWjWOd5Ft%2FwfkJjErPjBytOuE%2FjwvNP%2F1RO9fcufMuHkBSw%2B%2BySw8pWm2F42UugDiYBYPO62x3VZytw7rP1OqOMInBrb0GOqUBqE7YXzdN4BoSEsLuwyY%2FG%2FF6Om8lTr2JvTTRpv2Bnwk%2BjSL%2B10IPitF4%2FonFKPjnzdqHwx8tzl8wmufDC0%2BZPoBu5KFw0m5euEMO6ApyR6j1AaPiqZ4VCmLD%2FWxfkdpoAagVkME56uzaoXX4aV6rTKompBNP3AMFYx0oWYTlX%2FeK9jU2FR6saSMw40KsX6eGTVYDZewH7fteyz2ZEP5xMf9SQz2r&X-Amz-Signature=5228f9a87e29c3d0f16704338608f989ed1e1550e2714d9d88f6153a0dcac3ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

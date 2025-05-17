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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB5B7LFH%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzAOk7XBrcSa8U0%2BO5uP3wTZgHbJX%2FXng1UDWr%2F2mgOwIgfymNFqWIMH79%2FWw45B2UCr%2FN5spu5BR%2B7jONkkE9odMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDkOt2LRsuW5tQ8v%2FyrcAwq3JIjM29un4NymE0OsrMxH05pOXvLZsKkIBnZadAH2pxOr0WGXKM1mIh2Jfa8HQpgQFWLwP8NooD9v4S2vBoqNpRV8lpoqXBOyp1%2BIWbLsaXE2pmKAazrQFQ0E3c06thrvl%2F%2BxsXPa5s8TB%2FUrwR5lCw8qo1vsGGzi%2BL9cy2JRMxplOd%2FX2DF8oTAK0i9JPWtYZYKqPHYxTB%2BhdTQf%2Br1PSpTvky35EOX773q3BYqSlAI4KUub5lX0awbEEZ7TW2ZZmHlS3AgTA93yssO3xi8xPjXZcibrmua2z9s87XAJf%2Faei6OGAwDevLrvD9CXtELHBQpsETt8AFT7ZKz2TE4h6WMScuwa%2B0uhBan9Yu5ON2LFVQpw1B%2F%2BUcY4EyiekSef8Y%2Fnj4msOiGJiXZ4cW4LJgJ91gVprF%2B5M3%2FAaxcqWN90ZORIzMiLqR4ABjilboWrnjRlDH5%2FTd5awIuwZr%2FDp0pAXNa7Vylb3OK0GMEbHUzJASmdK3G4M4pw0dH%2B7LzUwo%2FfJ7O3DL0ZxXJojx2pHwUBEKpnZzOPzQKzT0dWBY41cdQYbtHtLMp1GPACkpEiodnJj3ANmAgBfnJ%2Fkq77aopsxZw6RuXwrsllrJ%2BXcFp4%2FBo7MRqcslaVMOT3o8EGOqUB56wg4mfxYbi0gtlLchZzYsfjrfCzVti3CWIGml%2B3fA1CLhRToszgf6SwcpStlqkJA48CC6TAkwYdxnUAA3BBofDpbDsfJu8bQWWcH6WnhVWnBdoEryGF0NADkhB%2FDC9l4C6ohPyuVgZQcQ17My9KERH%2FZUebGGUDPDNr8Ur5zu7HU%2Fpf6KWZ1%2F%2Fvq%2Fbjm9ziDQqHf3dt%2FapgKx0bZ816shYwfjhL&X-Amz-Signature=9764d0281e5a6f789d601ac5299b714e1988a0cf25b45b9c7955cfa6d5cd89d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

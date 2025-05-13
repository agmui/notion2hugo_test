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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCIJAALD%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCw06JaLE9VEHGcZkeCsOVayUKUwsU6mHArXLwa2bwZ5QIgFreonks9IqWzwy4%2FaNvNwL%2FhY9rhUn%2FI1rxQRjUslYQqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ%2BezA2A%2FQ8v8qZeCrcA%2BHL0njohPTUTMeGJVx4dIfOR9gcOTHliQWFwWWe%2Fpi8fSjQWqCPmExAHykEpQkRL4YysG7WFBaromZl77cUP0dD%2F%2FP14KQLKvJwfBnmNIeAGwDt8b1rZHUGDXI4CWMWv3NQVayqBKixJEPMubkSXDdAR4KXJDo2oJ%2Bscqm1DVZu8TV7eh2XedTiFkVY4mqHiLyUj6dXkDOXceem1ZXLft5gGl%2BtaloAYpXcMZz5bo8I%2FQtRRWOfAUN2svL5RYIbzxmn8tENd8gWVgkFVfRmFVMeDKwP7Y%2FcvGlyQZngEdOWgsQ7hon%2B6bEKPDzzieilJ5TbhutK%2Ba5Gy%2FAux%2F5eSlB0RCn4pt4FE6%2FwocYtQ8O3HU4gTL7PalIbYGj8hc9t6rA5qnCRX%2BPx%2F1e7EuxViWuNNxmUFLtJcoMSTPpEi5OuBJb1fsLHb%2FPQdEpcNVKoM4WDQCBdgaocS5%2FHANw%2BVPD4WOkV9cS%2BhHo18ESDDljepyuA1c97rEY%2F%2FI%2FczYRJP4ibEw1rZzWZVN7mg7B%2FuByFZ0xNlTNnRSQX0rdyMWaN19MC%2Fy5ZyH8WL17xFihD7WvEff51vAUNyf7wu%2F0piMb0pLI%2Fvk921E6j3qRNCNBefNqwc0e4%2BhhlwtTUMOiNj8EGOqUBNHQHGQVP3wshbKgwA6RVRQtIrmPT16Sy9Rdvev5YT9tCQIufWwFEjI6IRDuCxOOnL8%2B5%2F1Fhco0cNKJRozaxEinLFjMROP49JklEJe15CgaukU10MfKfQQ9gLXS3FeJvHbq6kCwtvegzX2aFBNAEkZAIMiQr%2FosYaHjwafbl85kz1XiDzLtvRCBPBQ1we6hMQZLjCBVoZPUVV1SOsmm6QXKiGdod&X-Amz-Signature=d93f523f835207b322c7e58b7776d62e546578f8d44be6c1721e8b63abaad7e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

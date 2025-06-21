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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652E3C3EQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzJWs5asOLbFjamZJ%2BpOS3JyAT1eOLICmXPhN9KSTxmAiEAxy8veUkLAqeQidisHQdpjnUcAZe7jHa6uYt5qpicYugqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCt2%2FkV7CW4EuFglZircAyCsunQltAXvNPmnc09FXpFDQa%2B00lREM5D9d41%2F1hG%2Fy9jJhBf5rm1QVAhLNWZTIMzPvlrzyuPNk3aPq5xUA%2BKki6VN%2BvdYldpmLmpuuoPB%2FiScwJ0GjryE1Vq1QvOJH5hNJsafcTcRc6IHar6bywqoxeuDjz6SqvvSouv2ptKNwsJxEK33iiIDfFrJkrsT9sT2LWi%2B40LZAI1mPCq68f7ksbBypj4SKd1G3O8klrtU1H1OIjH8HO8eHWty4P53Rs7zqMKayvYqteJq0L0CAlHF1p9aQ56r93dr0VOvADKOJ4hV5xMcSaJosGanOVKFKxk04Iu440p686c251d8l7iPYtbHdeuO%2F%2BqhrLYISVBO39jmqmKrAichbeiAnsTDshy4GF86t7OVJ5TjKnQ4oAjPLY0ji6SPKFrglFL7GSA85luN6%2FZexsGnAJQxjGGfFmKiIc2pYaJ5xr%2BwNtYWtmxC%2BhYKcxufvTtp8mkTImj6AWyDlRSkeuloKN0YSdyxVY56uLAyqWJnVuReKlwNyzGMbTzXk21VUZaQ4ihHLWPP4TOVGm%2By5vMAp7zgwAGgDRPtmkdpP959PBhxcO7b%2F5Lbf8yUWRsv9EDQT1nLPCCR34Rzl4wPCXl1FHqXMJav2MIGOqUBpjZ2Hvm7z%2BALNPuSmV9wlpdyheG10mnVh9PrRVWbId5%2BmkiI7yVFRJnvZU7Y6CFYzXNIGvZ8WWSeYjL%2FhvLyejEFRpMACqpwB1shRhhIdWUdN9IkIAZmIfC%2F9X5zwSfcKJg1%2B66xKCMtaOBKgAo%2Fq0M262kxQd01YKR0bKXzZb1nxtsMWMMlZMtOPz4ZAbxZ%2FPT7bc2wTWbX%2BNSUmxA76tm5lqc8&X-Amz-Signature=630c9edef2a4483717ad9749f3799fee62acff36ade1ea1419b4475fbde5c81e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OJ6EKMT%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhdM1CqXrO4P0VttbDTH%2FYz%2FZU5kvjse0406OnXSsqpAiATpfccRtxYeaqp3AncA%2FVj8dcF4fxEdRQtxZTI%2BWvlOyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM4bPxnwbGA41S%2BX%2FyKtwDA31sTHYyV0xxn0tUcmkFadxyC1%2FdDtZbkc5d%2FdVou4wz9rr9feEiswCMz3iMtkylF9f4llJ4FxJG7t8fdcy%2BvBAEsAWH5jaL7ys1fdNS%2BlPHZm46sEtGcnA%2F9pQrsRshIH2CgYki5AVqr2%2BAj5W%2B74i%2BPZ7C0A%2FN7cr3WvjofS3Ww4igy2ieNmywFPZ3ugCNqMKfXkLV937HU08sEW%2FQmIcrfplLjqIn35l1MabFWcz3Y8QEEoOEM9nWF0W54DcegD2v6CvzUy%2BeAWNSw898gAnK8GU%2F%2BX%2BRSLbE%2B9Aq7LaUyjGs%2Fq97HAbO%2BKSzncroooxRDzVW%2FBqT5d1WtDVV%2BLUNi0oGojCZohXlgk0ngC5Dyp%2FpBhgrZRcpV%2B3YyQ%2F2PJ4n4oqeP5D%2BrwJ3Q%2FLIQSkrZKv%2BEUwQYCxNoOv4zfdb%2BUNYwxhUnAuPbqA2NiY1P39S2p2OkwC1WUQNxdcK1l3cAGiad0qULYUvmmmuw3N1iKhw2b%2FkTkrZozeAYV4%2Fcln7j4n5IgmjHBqTMlvn03obA09hUg%2B01YpghhC3zkGj5%2FEUSvS%2FFRQjmKcgpRLOWzOB%2FDQzPyd27g13aXKX7AhOcY1bJOQR8f5MMNvc7eV%2Fesy7OtvonmrdZc4w5JvuwAY6pgH8yseHxyKQxOMQSkCP6jLG4%2FdBl%2FJvqBIgEjauVRGxl4AX7UB%2F9Ps9zirMI3Ij%2Bxn01mqL3QU%2B%2F%2Fe7QeSm1KxQkJqDsSx1ElgOd4WftCzvi4zsCznsmAP76UgSGAq9S20gXNZssUdcXqX0b45NNeswtzLZMDonumfJbDAOhxBPLwIywT8mZrRDkqGi%2BV1XBy3aP3ZbChd0PoY63xtQfgkI3PoJfqDh&X-Amz-Signature=b2a8a1ab8b522ae889bfe6bbfaa22c831aaf0a4282258d7ee69920356577580f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

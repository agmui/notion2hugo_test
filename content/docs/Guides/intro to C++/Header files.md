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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQOB4ND%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcpKQLYduA%2Bz%2FRpLNJ9aSFecDXNmplja0Fgrdqai8%2FwgIgG2%2FiLkAaeC0A7c5TJsoNHAy9wP36DShR7mrjKwkCncwqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG0PwKQp5XNNlzn1HyrcAyoKbyQR4sqkY5M4SIzeKluVvEThhz7Bb%2BeuTpQ752nsdGj%2Bp04FPMW2xtjSnL4i6q9eG9muSKkWN3vn91F2ok9onnRLhpnkpagFl70IG7%2FEbGbEj%2Ft7j0A29EDj9IRQfCuGeHiAgmw9q%2FYghMmfIxZheKBNFmsOiZLwTsQs71EmkeVaWF4CalSuUWxkMKE%2FQt4mR0YJlnxmweuU6rIy%2FJKpHHtfdwNlXjop9Pp3OGMnOsT%2BpUnaw%2Be9uPdD8ynm2xT%2FmXQjZ1Mqop3Hk52tCVja57QjBLXtQw2TAkdIXw%2FN0EHf4u5uWjfBKpkADHf491VmAsOFhUmkgRGCkoKxPzf1eGhtf3g8NTl6%2BYIkFTh4ayjFFbzZ%2BEZ71P1WjeeD2zjtVJmk8jd74jzb84wF45%2B8axBVEU1B9CQsKkfI6xLQw6PUSqLTN74MSbtzcq9xqd2yRMEHJoI4v9vjizTbcxCW0luVyFTs2ihWCcq7v%2B48p0GdopSdKYzoyTGb5%2B1qTfhqP7mib0sIiOIWjYbdQQfw1aBna3YOYXwPq%2BDT4%2FHcB%2FSca7Q8pyHNWVLseesj6eRYtOJs%2FW6ZD2N62a%2FihYuM%2FzdStv4apvNQoU0lCIVHI430W8RV%2BLdD%2BVkgMKH4%2BMMGOqUBYSa9p4kQ8BGymIIcKZx6QvrZrw36ChWxdSNiJ9xQJGw5l8oaGw9F6Mo%2FQZV5JlExJ6O8dgMKpdumPg1WQe2bg6IH0ecPM3Rza9%2BUxbMnesV9AbS4DcY2CZ%2BiMXpHaIg8UuLhpTJ0GngeNRTSKLxgtjIF5UrJzbzoFOaPXvMHucJl%2FfuxO5TJFLjzO1q02EoZcj1%2FI2%2F4ThHsax%2BhfpdLusR9joNM&X-Amz-Signature=8e643b1b7a32ba8444d448909bdb17a9047a8139622bade64f12150a29ced090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

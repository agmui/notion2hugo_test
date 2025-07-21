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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFIPHP2X%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgPlKH7iQveyNvt6mPhZBQr5MSM9Z5coJSaJjXtDws%2FAiBNTnOAepI5tGfiZbPd4N7uX%2FO1V%2FXlsxLTSn75dN3iLSqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvAqRLfxJ6WxYCBKdKtwDYyNsOv3mRlWHTddzaNL6PIGxzaoK7MapagVkwjj3DUzkJI8y49pZvKQKQLwr2I%2BnBIROLYlGXD11f9OHoEWt2B%2B9dwui%2F5zAkn8iU0yPdb5Uw613tiFJdl7DIlvhfknwbN7%2FJAObNPp427Y6NdQ70soZGr5vcwFHCD8e5MK9uz78tnxHkQ8xttRTjlLRXlHfVkgJcid2n7ZL0sibfDzH27dWGTU1%2FwUjcgJHuEvR%2FN6sMKhbYr2OnmB6Crdp0uz%2FAprBKLG%2BKOsWK%2BG3KSOXJ3oQrwDLARHrRFM9W4szXCsdYFsHsIjgJttDhRgav%2F6nK7BIhyjPRsndppfZC5O5PsDaQKxqxQNJgycy6Qsd7atvWLMnY1esroPBSI9y1LOpaV6ngcdqPeKqd1UFfkNdV%2FX9SCxJRAGCjZ39j2RcALSrdcHwbNpqV0fB%2BRKJLjYgdj4U9KLhy8M3%2F3dcss1bvtw5F%2BLklyOiUXAACxO%2B2HqEqCQjJvB8mHAMLqOPGEtIdPdnj5wu7%2B%2FdSPG7uisTWl8Kg0eWSLMZQf4xIKwl6vcmDSXSCp9zM3XUWEnpFIvgWxxhnA85hiiNAkq6Lr3dpvYdIqCeaCQcmgLSBxTjK7CVqy9OYUo3twVeXi0w%2Fvn4wwY6pgExLQ70f2rr%2Fg1o9lzP2B3rhbcdOMrP%2BEZBCoOLDWPFz8LMG289sXjxN1cq1FN8fktT3TtV53xfpUWOPyK7LwNsqMXzqQ%2BiFu6EUfUWWFR7E1wS7V4dHxIC4cc8AP37PNEQzt%2BRu043h85IZe66TRbFduLu3wUErDVtdvy0tuurVURbGQKyY8lm34K6hdKgZfJy1kdWiI3%2B7l060EBvtiY1uT2WRNVf&X-Amz-Signature=b6038f197ed1b6bf050cfd758a7483988dbb0032c297dbb98b6eb288e2c26137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

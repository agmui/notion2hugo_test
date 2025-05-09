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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYWQ5CE7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWJS51AS9yp4PZx8SfGcFYra89kPeEXnFSgoJJnZ4PeAiEAujFcCSmvDUGR1cfA7Alb8LcShcggrV6lc89aNdb15eIqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2B5p0XP%2BsafeGcz6SrcA22TqluxwN2dFw%2BkGvlNVI5gBkSGkpXEdWenQe9AEG98J9w1T8yGozbrYEpzpc8R8ebDekARHDW1vE%2FwhzjU8n%2BLSZ22InpdB51DtsWn%2F3MC8AFPOPYbKBNd%2Bt18%2FgYvkVHq96CYQpcV%2BPjX%2B%2BPpZCrtVJWt0%2FPxb36L71WjAE%2Fn70MNbDqCurRouhuJf%2FPEFD95rU60hkiBYDdbxswqhMWeKXt%2BEtnulheRwW3bhBXzSaCH64z66xlFPzYrRFmgu26uWu7pqnIi4hAtlkKFlbQG9ufa4oG%2FFlXD5GpjM7o0X%2FgQPUebQxsi6VfQ%2BT5KWGx2cVnN%2BjEpn15fwfahOMOvZ6Pg3U77b3WdCcspbet4ZusJe4Bdimy%2BPhGRkSTf8ji%2BJPoV5oFh14heprdx%2Bb8LCUHutJweipsHx%2FEEjRh%2BMc4Whfm5Bw1%2F1ru9i1Vjedlb1H3NF9kUXe%2F6fv4lP9FaPmH310OBdzz6TFg2FPi9%2B1yc1K%2Bw3jq58D0z%2Fr3A6r97m22p0eLW%2B%2By8r7nGwIRa1cxEBLBcpfZPQyRgcmEwpcyolZf%2BgB2Jd%2FxqkZZ5wdRH84PoU0BgI6iBMI%2BjL5GRXzzDsA5HDEm3K9rolBwTXQuehl024wwLUKx7MOeI%2BMAGOqUBn1hNb%2FhLOX2VtcBl%2B7XCkbBJx52U5lH29PnOccXx8IzEqLqRKcBFam75ocf76k6A9uZpdA%2BMw0hLzvOi7o%2BOYGGO1ZRIOpaZIuJlKCyFzRctESQfFNAnh0ARYZ593N6%2FqrkjbWjS%2BsfNSB6OTfoVhX1GGiB8PKqyRjYLpw8RgQiNQrVowODds8rBTQDi09SQve1xB7ETDafxNKwtb8DBIWZyE8uE&X-Amz-Signature=6bfd9e69f22e178d684a766b21292cff6601d773c7b32bb7b89a0434f9c31516&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

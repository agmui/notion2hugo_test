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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZQXNQZJ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCeoAQvgti8r63A6wyuk3HwvuQ2gLwHVCvIdw4ItidxRgIgTIJVHrjkDactGZmVwIabAjkkeKXWdheSm5003fZ2UhsqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVBH2dPXm13P4VN2SrcAyoc1UlvzzB7%2FXOToqSj1LRCJZt85HRCh9kTte%2F8TJO02Ymx7rMdek7XcWE0u3NcbvR%2BZPmyMBwPlmkjbgQ35AV9NnbqbnWufAcdhEQdd5YGCPaMOeCkAYtFWWGsBdcf7baTWYy8kpC2F53UVnVTmR3G0g8LaklbPKG0FvHLdYDuMg08rb0EGcUikBS36OtCFp8iTrvyJtd3J9oloqKZMbICGS9M2vrwADorBLt9Eg74hbbuhhjkwcwcp5zESs%2BM1JtlEHHSCNW%2FiS8xSdyioYAlE4EKhV3SBxhYL99W13kiAg3Eg%2BNRnLyo3SFGMngd9h0o9kMj4jinGNxiEDMhpZWZn3VCFxCfVyIimM%2Fdrs2ZJBpVVkmePOBfPulwutvNZ2zWbYEFRU9F9r4QJ9T3YZqig580m%2FgLbo3XU0ReC3VwJrlRkrwrW%2Ftc03rRAWdqOPamzOFoi9bL1Uo7DH5gNnnJbj6n729cjuz9dqkM%2BXwFkR3Jtc%2B2WamfE%2BmgF8k8WRGy6v86a890AXOPcYzdmgtiqisO%2FcZYw1YEDjFoxnqVT%2BKHFs3rfb2BFaRFjokkjczEprIepUsmdKubRV8SQjYwBGihm9tDGkmIDnHqWSCDMhdoEoPz0KVD7S0DMO%2FL6b8GOqUBAKg%2BD6oLdS1H3OcuRCNKNN8apKFZMr7L%2B8erpzX8NQTseb2FRoq%2FHhD9W6wpjT8r%2Fd6dMRmbKSJ%2FKJqSQtVFXKCFzIwy7v1GUJKzTs50311GfAC8Bad9SeevMrkewWhGnyRZtQOsNEL19BBDirM7T6qNZCERCRGn3VnH%2BbJVDXQy5YDZz9gJJmyr09W3p5szdYire55xH211XyjH%2B44v8zgxDOKt&X-Amz-Signature=65c0a4b79c3dbed8af6fdd6a455943ab1807ea950260f3d15deff1415d5bc3f6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

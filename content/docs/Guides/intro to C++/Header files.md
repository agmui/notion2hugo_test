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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X55K2YDW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRvBc477UvTnGCPqTpPK4%2BZi8HAzcTqTDlbxkn49CMJAiEA68LJzkH%2BpKsstE6rQW9mbxgAbSYV7u3h1bqchTO2VmAqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFF4ua3%2F%2B1qRjIkEVSrcAwZYNa%2B8mcmEOP%2BgqCgOGM9yQybYZyFzBKLVVYEwLPsKirRu80saJO0jmA5H0h4HHo%2FnW9mYuE6nwtd8NMJXWpxmkC6wSaSDL%2FRyj16ecjp86CTd4D6m7%2Fw1vUc6QwbuN2ReAGW%2BrYL9eyswCV5FeZSx8XGE6Gc5RoTNFnBvaau4PfpOshikVR2srX4JbsHt0JZGu3Ek7cFvroYddscR%2B4irS0kde5dlAp0P8yKOFVRGY8ZG68Fq9%2B%2FT4dSjpjy8zMnUEFWA%2BofikLiUJGfOE2%2Fi1drJiw3JcwqnxsmniBZ%2Fci9K00RZ7zZnFPZDlBR%2FCdF5GRm3iCjryZ6K8WwQheKrE3eK%2BvjIF%2BHMoC%2FxTv6LDXg91Bt4dZ0cybgzqBB1PKTnUK8wX4SXutamR20M0KzaZqrPV7Va567is6jf0BUnYRCJvULhUaTyytLSF0bpjB8%2FDbpbR3LFfOldexf2qlOVznBPmDLZwSoyHk8qJb9PsmHXCTfI2xN5i%2BBoU0J3TB%2BgNi7bctwf0rvzmZHU%2Fq05U9%2BRIMe%2FRUsivpKQVUvsPzbWZ9DmatYcUxsUHobgv%2Fwj5Y6B9vXu4RJm9scLqCePyus%2BThtIhSdcLhmJa48VLphc8JxkYi5p63mcMIfR4MQGOqUBoBVC277AwxwttW3KPj%2BHq3GcL5epG1eROplFuGFUpKH9QvdpnBRAQuFsClt%2FeBKuD2igNDbsVchKwuWjo45Ci0Ps8C5ieRtVtpT1TtsBKNujw%2FU0BLj95H0TWp1nEV0sVgQy1Im%2FpfIYNoT5eueG0pO42iIRIt4S0ZV3nkXl8Aw2c%2Bm7%2Btiy9YiQWpRacpVETmUUNoHPpYHiUCpYofKvnyCF0DAU&X-Amz-Signature=a85669b1daff57b4d5f8489f0da787b6c46724ef58f0bb585a669eeaecb77e87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

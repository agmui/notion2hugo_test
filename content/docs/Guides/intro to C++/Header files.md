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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676WBRYWN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjlFifqdwDES384EbTtkNiH%2FXGozNZnrBH7L0h9I2PmAiEAmY85EB1gK9MC1AJPteBkSkW3AFbXT1t8aLZRoifuqSsq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPUt1RlMYpDph94VkircAxsDyhB%2FvKj5cIlTRR0fIwL2dXeUJ9xtaEOQRDYLAg%2BxEQQH9OwAGNMm8%2B4WEpQCBltjIhOTQT1blxGxry42AyT4xYUx9gkzCZprola%2B4HKNESooWEvO8rPnqatyD%2FNkwfObru%2ByaFXAuVLd6Vl9mSrSLReegkuvrVYL7Jg6R%2FO9Wa5ANnm0u25Jn5it5ZDJgMuZucUIoFgGEyYnhGLzO%2F4%2B7OOumUa8UULHI4XKHnEcbMo%2BDYnHcOcf8u6g4CJvhPurQt2iK76NaBp1cEYAq56aID6vacTmbj2C%2Ba1XI%2BZb1g46rVu3HJ218tKYySF5dtSo%2Bu0aDNxSvBiKbrqjCKgvfJY546fG7NT8sl9pWVSteJLQcYixmkEQdL77RaNkh61NdVdJQM7DdjniWk6w9M6SxhXqFfccAAHPZS5MlDO%2FsoCbMdG1JD9vtN%2B0%2BDBmkyO1ZprEsYiJSAm%2Bd49OmifPtJfcWPSwnor8rEAIXIvJj4mAtxdzgJ1emZy72Z7kDb%2BYGL8VpCOIcGZIRukAnGWGdfKbnP3CgVpInLnzY45DuZWKZMYgUV%2BjPJTwVcRWjcXjQ4KonaN13i50mhPUWX50YfSzWHtTj2BgKGn0W8DsWlIYPMhOpz0AOvWdMPjalL8GOqUBEZqIAhKr1qdHmYfyMx06m8Zq320qqaaSwIVqt186EXuTx%2Ftg8DQ1NqA4ASogwdFnOCdfWI021DpqFRTlpBgmz058bERTF%2Bwcct8aZFM2eB%2F6D%2BCAh5l%2FWjxhSqbVydmFyt31ghjUSbIjq4BqGk7PA6qkKwDGNqkAtnIQfwDkyssDNpeINd5HgPT5fzK1%2BhNqzkCfdKDPKj3zi8hjL36M4B7CqU%2B0&X-Amz-Signature=c5d8457190f067c6b73805990fb0b15196f953746777377433f316c36a1c71e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

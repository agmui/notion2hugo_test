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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64LECKL%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDgfuDrIoHEUBV3Q89CseUMv50wjTVuV93p3y4RqPGUjgIgbwq%2Fv3epf6lWzBpqy7O2YBPgQFivUbgONDTAekD9XMgq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHOAGDkh20tcopPqoSrcA0QtA%2FB6XmU%2Fr3M64p0ZkMSalbSS6zPk1oO6yG63lrl9ns28FAMFH5%2FKw8ymy9vgDPwFwlvbdKC5pkFjKH%2FV%2FT2wR1KAcOay68RDSdpS3p%2FGZ63scBzO%2FQZjs5XXKRspuZttHk%2FL0vmOfiWLkPBuqunMPQ0fri5I5PpWNj4%2Fho23C5hwzAHwQnsJ6vTJe8k1YZb4qY3cq0slXekkll30GPs7gMUrkWPAyR%2F%2Ban04OYpI8KaNlGf%2Fvn%2BfTRocJg%2BhQzsK%2FkYzIMXernDJVU2vbfr0Lt6AVKT0QyWV90SuaMxbViIUcdo3Bb5S4toXg2Ia5ZqWC0%2FxDOn0kCT0s9gLKzsimM5QM4D1DBFDgrCHSEJjraEjuwm5bQ%2FUafNcBcmvVCXFMHlPD00BcpeYPxfsF%2FCxBfCO1S%2F4uMxRzzqEkXUEM5OxOMXQ6zOoU9d4YATUnm81KqDBhBinne1M0sI1YnHLCDbU7baXujgwfAWgKrauujq7P3fNchhi12UAlrzffwAGRgd%2FFNjXdQ4DjKi29Dc4yVlbwU4lv3ngmDIT3rZMyxaa8lPbwUa38etjhWIHnHzoU%2F%2BuLpI%2FK6mAl0drMl8OS%2FOKSBkjpySdZdJawXklt6vYPVAbyl7nhwLGMNffxcEGOqUBMFVcNQTsTlGyfl7MIR%2B%2B8c7lLReYleMj2Dsq4%2FTAkSBNKxkkSJpASbBLFr8menPeJzEG%2B%2F8VeBbRPMKXXbkm00mAD%2B26I7pJ3CKA4bhOOIiXL8QiJSn4J499ZxCWBthPFDUZ1jEReNvlPcVGhkv1oZBgMrugo6oNLmAHebfBfgiDAOtr204X8KogS2%2BM8CD23sWD%2FftVeWtPBceINZY6W2T4gaty&X-Amz-Signature=fd21a595172be4314368b9a875c61cc36cc0f655f76f53d42b28a5ee38c84f97&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

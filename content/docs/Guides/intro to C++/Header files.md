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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5UJ3SQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIJ7t%2B3n9c4PGF8NBmccnaLWt5c3R6UNDOCB9r%2BfANLQIhAJ%2B9byPlSx%2BNRzWBXkStPyWXJQZh6FCmiz5uAir%2FrdckKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igze1YXUObOgG35CTpcq3AMDYxU6qTQdZ76asPfFYYSMv6%2FPbuIcMzAn6fBjZEgnEFDlqk0oKdvA5xJrCz0cmwj5ZNKLMkdwzh7pQlbieYLwdPWXf5ZP4lBc0xTh8yclFrZCulhaJJ1oicMytaCF06%2FEggigsr7XZt2YRveer%2BgTylH7VZcQrkcn%2BpKb8Z8%2BlHhAvCyU%2F%2BuJZUvRVPCwh%2F5z4DFm6eyZZxAwekbZjoXpzfhjsLVVpNJU4KcZAvb1gra%2FfxHw55yoevGwReKxkO0F4DRq8MCYQEtpSqLhl4QYCVWksYbmZrqJQ6HsEzINRn5pC0%2F0gY2iYrDYiKJ4kUqy6njh3RlGvBCXXvIaV0Zp1potQEvYruWmnwxNc7kS6kIzRAvJSz9JX6oZR1SB7JJRdIJKrGQ%2Bv3Nk26iv6LeFTfjYMczRWoQCI6kcsyXpMC9YbtZdXXFsz7Il3Q9kslGpwFR%2FIT1WHjma8RC7IGRiuUkCqlKiV3%2F%2FwsNu3S0hf45L%2FO0trHCDvMX6NEpBaWTpS3R8QDeYRVylDWdmyBKAiBERjikgy8l82fXJ4IjAh%2Fqsv967LiS5O%2B25%2Fq3hw13FzHPXourr2jM1WkMbgKV8J7pjGn7MbG79lz0ZGZXFpKiiduJouzrktacnLTDXmNrCBjqkAQvgM8xPNgPqkRWx4%2FGGOYtA%2B1SCpI%2BW9RC8wjs3y9xI6ZwRROKQ%2FRN0YNuoLT16t5KaZtrtnm42CYDMmYnlmPMnfTIn6QwL34vIadrgqsepyZRDMz4pOLusE0RyG41EYZlCG78y67KeKuepCwQPdnNT1Bg%2BB90Lt1FHv3L4gwRkL47kxvNSPQ5VR%2BguuI1Fh950alYX6VuDNXUhecZQSbC5JPN4&X-Amz-Signature=ea75fcc31b9b34b4d972f71b87ee292ca262a8c12e115249b2d8964f2c54bb57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

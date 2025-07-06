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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H3UHSH5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDtTcMqaJflH9I%2FN%2B%2F8lX%2B1B2N3mJZyr0Hfw17YBHmUawIhALP6hhvVFFywli0pUUSAOGDjjgnuoBlVrHDii9QGTSyfKv8DCF4QABoMNjM3NDIzMTgzODA1IgyLl%2FCWMdrYVOPZPSsq3ANsaaNrH4CNcRK1wBtEUnBfXe%2BwfJmOJ%2BqHuLRqIQTuGhYv9id3Qt4gvWgl1c%2BN%2F%2BxXyAhIqQ1sNQ3vTxR29p2rcc01izERyVgJvFOjuZFcPL4HbTJujUg%2FpRWLRU4RDVRxMy%2BTMRo4jswrtgvywnD5PnIdd0HFPETjpGo3TQw5Fk1if3a0c2Or%2BC5Oetkl%2FL85d8FW8%2B3HVZTr%2FDGd3QTCJvKT%2FUu%2BKAbRF7oO%2Fggb0mEce1zc2HofmGvZoHPk80%2FoxHf%2FcHuZ1w1GQVChJhCMWXPbLD8OFy8zJWEp7qvDDxJMtq0vm5II28mVPvFts42RgoxAX%2F6ljISaoGBb6i9urghuytMEMDYq0kySeK5wYsDt7MS7ZHXJNDwVh7if4Gu13LTNlncDkZFAwKcgyi1x18o7%2B54fyN3Iqo8n22j6V55VFNy4QO5vCLCLSMIzYF%2BNNPheCEk%2BXRPXWwgdvBlVvNPchWTeISsID6FEcQtSmPp3UYyncsYIpOxO4%2BTfrJFe2slQQGJpuDTLWKfIEO872EWRpISDElaiB94sp8ra0Izx6bWh4vUh60XEDGqw83TYGnjYJj2PqDY5kVksQNXuYrqsME4Ov0tNq%2FB1%2BwDbfh3otXy6Xr0pWx0WxTDT2anDBjqkAZSusILKJsDL8ekF0raj4eIhLIV7taWe0Uku3KR8CUWOZes8BCwlbeEW8WsUZrspCCxMaMbf9uwbzoawXBeHSowIR%2FPX3C6VSWSvS1JpilQS2T5vW8FSScnQGqeimRSbWSggPuj6vaHFmxlQ8AJfzLWQfyseX700MwmE%2BYvdwwDcU%2BBWfxUXq%2FtxuknTXmtgDuRvFRXKaBMZE4D6Bmf99qCbmlOz&X-Amz-Signature=961a000e55a8033ce1e9bf3d1fee87f9fad86f05d2021fcc21860f0389d7730a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

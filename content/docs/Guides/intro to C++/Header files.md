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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD3NO7RC%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCRBbYHx2wGXhViEBiY%2FIqpNrT3bCZKRwWF2V8tT5470wIhAL09o7Ku2XdTlaqCeAkhLem5vkt97Sw4HcOw3tNcM19xKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxn%2BpDM3Y8WFISlUw8q3ANnVo18xPHZHnyAIKeVSVSP6wdWErQWskQZUG3qx%2F4judZUFdQDc2Py1sBK4VMRRq0rC8dMprA0tf9bmDkYCVbP1Wub2C8Q1hDzwHhNc6%2Ff6hwwpARFkPoZdlP7vbb8rkegNiv4U%2F5wfpu7jJtaENw9aWe3qR52umGqTcR2oiyFhRvul8vcYV1Gins0cIBHZ%2Bf8IkpSEHfm08MzhVS3BQL2qKsWy%2Fz99PzhqE57XCWi57873i1SzCnym71OzAqZO1gqdb0XEjjVdiWNFf%2BWARJmCWsK2Zi5F7H0L%2BhT%2BC4RSM9OVKgoFSZpe0mYZcOodKwMt3jzUuv86mzy%2Bq%2FsvNKzEu8aTuY2Ok8BXO%2BSQpilemOiYzmBcbrn1myPEGTmKx%2BCaRr9z7Z6bXCyzvBoJeDckrR%2FC44eq6ozmM5VQAkW%2BPUqgv%2BG51smLxmqFuBl1M4hfxMO3Djyf9GMJSTpsxMVGfFLw%2BZRed%2FX7tz4B93AeVV4K6k8QmYEcpnC3k4cxR8PcWV93LLaMhxudFRN9%2Fub%2FL0MywQ3vK%2BPvK300Wnxc5cF17qhXWFDI%2BxwczGQajdVCsoiWXfjRcPv1%2FK8efErH4HRNNyx1AbbzIH4SsxLI0%2FBh69BLUm2Pwk2gzD2qIvBBjqkAciy%2BF4Gy3cNn%2BcjlqrLIlwl%2BZE4nZt56gTblfVyt%2Fsyl4c7bffw68UMrJJWO0Sr214aFfnoa78HIbVuGQ5sWslL1x%2FmuZVamNiKMe0ZXOQkgRz62aujVAwPQIBX3bIWJtgC1yRIXjZ940x%2F7cQYinqJ%2BgUvcv2U%2F9fbU860916RQytwBDPDcKenSrPvyyY3siojBnjLbmAwprHzYleN3CP3fShW&X-Amz-Signature=3c07ec7b23e92d86a692eeba0ed1e933415b8421aa44a9e65dc647297b0af681&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

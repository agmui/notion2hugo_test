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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBMBTH4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDTwZUpD2ze5EpuEiJXLcXdzOmOdKz28zScPEuntn8qtwIgCqa0Od5cyQbG2x8T8uqrRDkc4t8A%2FPCI1Kx6nxsoMcIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg0RxQfnTPgluzY5CrcA65ssu5BkH5CaiGalJ9WTOA9vtV5d4zECBsfR5WQtpfxZw0fNahTKg4nRpm2IqKIvwmNPDXKWQiBOFZHlzf1nm6euViHdCcNowkwb4YLe%2BpialGHd19NPQNDcu0QPfk8hGa6S2j%2FqDEnQFPfMLabNoevwMJgFY%2FjLT4TUZqAmRqPyJDhYIh%2FXWjvUM5QmLa0qB%2FEK%2FqMXNX4X%2B2RhrvIbRLygUPTf6WmkKe%2ByUgNgbuNN5CH%2B7upqS3s575hDibvF2SdWqBS%2Bae3vAro9PMfq%2FJcyOw9Hs7PmHtHFgyHTVbI0wKscot1%2BRm6DPGnw7jcGTP2rX%2B7Joob%2BUznM7zxrpvjyquqlBg6v0qGWDVI%2F5EBZPfy9sEvQJncB2nvmfdK5osfPaRiLZJVK8gGAq7W%2BBYAMh5gtpyEI7YNBVGiru7X27RF2KiXhiJzjCmKwPFSbrbTDKZB%2FzXk5KBqtvIMaHs6NOel%2BZlXuQ8dLaTFQF4k9rNJShIAugqDTMHW7vXI8TdLLH6vwiLQRTZ%2B236rdB1CCaCh%2Bapv3%2FdxNo2ES%2FIruLZQEydeA5BC8pNsQAFOfPMG2VDEy%2Bb4mV0HKsRmxGwlMY8waT1PCdbB0zNF4aeEOxplLV%2BbIs5FQiWUMJOFhcEGOqUB%2BoDd5qxNuTjgZjdQgL0CJsdAYjp8%2BQu%2BO5gWD9XRjmGATZ6corCUaZQnWNY2cpbDNSHN90umOtlQJ29TxGNzO%2FRW9blAo%2B%2Bk1m4ugGqO4pIobAOzE1tgBteXAvp4Rv6TAenk7mTkC9k6CU%2FutWpm6g80N0Ec4OrCkX1W7deEI9PCOZ6Vb%2F4R2CHmJ8MPp2T6MRy5Mr3O3h5pg6xjyYl57XrZhycj&X-Amz-Signature=4ec4773931ecbc112b799339ad8823f28f31790109522f43b60de961e526fa4a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

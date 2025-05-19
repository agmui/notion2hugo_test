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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCPOASZY%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFTSFdv5QLbRznsqeQ2vdhur8pIJJiVw4KZlIx8aFaXAiAq%2BRNCkorePVSRdfh1Q4aWfe4j5li%2BTuCDg%2BAM8qxfQCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDuuR7XStHotOMBvZKtwD1PApHf8KSu4iWs%2BF6DYy%2BioR8%2BVAl%2Fsx6hqxAXa8PXxctWo0JaxtSTTzX5cejl0%2F6Kk2zPOpQisa2WHKYscYDBA35giK9Njzbuxts41odeB7gx0qz%2Bpna4wqApLnC%2BwpwhZmAg4Qf3kpdB8%2FUto8335jpGqQ3AFnESNDPKMCwRZNsMATzVLOwhNjv13Ix9BGdSQWZnFz26EITIZKXWf7K1qzjwVAz8CHxfBoG4riaVWUblTtk%2BzoEMUP396oazYzlXxlTPSwLdhBX8oH02c9jZTkxnIkp06ysuBtW5Rufp6cYlJtym3Zx5CxnEGA9ip4cuL9Y1MK9IAMyIglPgfAM2WFdN%2BO3fiDBi0FI5h%2BX3BnWkwUKmQzRhDUoeSzzTZ1%2B1y9Nd5xjGlewoHATGKo4dHZodSdew9sbOkBSciBchdI2nW%2BFcmTvx%2FFWRxbpORc%2FNbZ3QnIdwI1cuQnbcmq%2Bd%2F7soAMd86w3fBOpXylQ6tpL2kP3Ue5fWAvx5fy6PS%2FS%2FsRXmGYkswn6f%2FAiJIMFxHANrmuA%2BD%2BRo1FzoZ4oCa2xzREykz6Z4EdtFa7q5Zy40hAP4b%2Bli7Ce4CKUWgxF5VXev%2FHxWo6WXnJAr474OcAh1JR21RKaXkwAvgw3uypwQY6pgGvISvF6Zhkq1npse%2BoSfKsQzhw7Lq302Zt73%2B9rak97G3QjHwKTkbWmWz%2B%2BmbwuxPXv1CNtlm7I8JuFxIFZF%2BzHHFCVthnTu5ezGTSfxNwFS4us2jKvTqB9Za5Ncj%2BLCoZl9fNRSjUn66o4CI%2FgBEm1r5AOgMCa742Wq3gu8R925AeOEVmBuJBKsDuV7OxVlnmMna%2BrztLOgbUKvXzCs6vxZH27gMh&X-Amz-Signature=de86e176aee855fba6a40cc8681c7fadf1f0659e70ce28245816a731220c4fe8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

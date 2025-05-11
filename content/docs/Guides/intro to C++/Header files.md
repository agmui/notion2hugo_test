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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667736VVVF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDikgpFaXl8stXEs9vu2QjhiYB3dCbVJV42qQpPhCLESQIhAI4kxxnMXynPG0GmVH2k54NaW%2F9jDymaAs%2Faqj17Hle0KogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5RmPF03YpT9Hx38gq3AN8YXnfrHjfu3bJUgRLNwWhUHT3%2BUjstAK1izvs%2BN8jiaM%2Bsh9xD6sqdccs%2B7bIqC3rgAwkT%2FBeik3gk50WW5li9dvwCyTz%2B5s1zsBYSuR01kIuKV1qmgmHR9TFuM4puRhpcC8AmTfq6boYp6sNlOREnUunXSexakrnqEXzsKLLabbZTjHlobrijujNSDupP6rffOyr3XI6vL9vVAeQGErztpBw3a0laxLTkahro2EItv1zH9Y0oLuZwUm3Ei2WRg2B7m6ODYvp3rYcQR1CyvbUcdKqEfI7z60b56gPpy1mSHKfo4VrLL6mU%2B3KtuFsnrAGTChlkBOvyMIKUpJFH34rak%2BdYAhFSUwa4Q90n7C1ymuGkHShwSeP05Jwg1erKOekSHEGs9jQnUi8jk%2BD8qq0%2FD969GopfDip7OXqF7vF3SeWsFC%2FP1Oawxt%2BkZIoBx%2BPoM1AEY8wSDhH1aEJX1wE1jBsvz0Zt9iJnMHb%2FM9Jmao2KWxTnoQX%2Fwa296VWjkYv%2B%2F8%2Bxrr77SeZBlS7kTMFvlOeqjxCIeHBQKHPH8VMP7qM%2FEng8b6Xefe6U3udLPdsWE5Ks8f%2FiUwpM4u4Bl2%2BteBYr%2FfWPFBekuTawVbbUHyfrx1MUC%2FTEh5fFTCkoYPBBjqkAa1JaIMpxVSyZyeYIMklBTJ%2FcP%2FS2wUvxbfxuhzgAZsJAAgrDGXOSxkRwbh6UD2taql8JgiUPiBFvmF8Cyuw8Gi6WOPI9fb0clOy9dV3uYbFb0f6%2BXfylTO0%2F1jvkROve6kW58jwuw8oi%2BfWFW83cQUG%2BX6vZoKqta4aH0inK2SgQR827tURx8aqzPs40RzpW7yBhrvGnzfq985FyyNTupx%2Bsgqp&X-Amz-Signature=b813834ee4ab94b338dd63c01219fcdc7a77c2615def65ee0f55b0ba98d23e95&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

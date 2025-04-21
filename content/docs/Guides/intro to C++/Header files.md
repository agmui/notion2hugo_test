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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U6ZHDC4%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFxq2Z4q69vds6FrPVpM%2B9%2FQMsOmnccedQ9bLRYjgv%2FuAiAecXrsTu8f6BZNhBZj0whbRl7bQA2c%2FoVAYE9Xsi8uEyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiCmbEoxb3GXrCq7CKtwD1iLiZXteTafnVI6oAc6SMJovRO2Nxy4M7nBk4ctr%2BrHVSXzvYe0qtoMW6gJBO9J%2FbUITTnFv0knvK4hHRe6gY1Km%2BtK7YxDwFKaxtkdQvIs2iyODaYMBvw2gwDJ02HObNSddCXwYuRPNcN%2FAipnfYxxDS6RivCfnZcI3DulfcnGK%2Blqzb6zJxxdZ6oo3g8mpR5LfptQFi35B7sXrybVi%2FyKWvpbptX3NaFO%2Bp6CNsIRzcQyDTH%2FbfMEp0jEb2nPc55MzTFA1DGP4IvtAQotVFc4mq5lOsNakvLMpRS64hgFfDLZ2qqTH%2FVnDikMgOeTzRxgqb7%2FbFJCX8qDB8iIjI%2FiMCzjZ1XwpfEf4S16HnrlkoKTFYzgEdZtZhOLUBBSOJwuM5iZ18PTewiIeayo9xrZbcPjdntSlWVoqeEYv1X7wGmk37YEfD16xmjPqL2ABWs1WD9WOumJyroYL4UIAYaSM0p1Uxam%2BHO19ukMKpeNiLrCo71GxB%2FbBt7AQxRZO0%2FWRI2pYqPt%2BHG4EvrH8djy7WRQo2q5yLwE4xWdDtievwMdQLowzLeYw9hrTUd75QFST%2Fxrm0wFwmXyr1i%2BEfmJwrfPQQyI9eABXPtbuGWbCaUT3oo79toVyv5sw8NKawAY6pgFKBA0MKB5QRTYWpap73sFPZJvr8waB0JxjNrsfy7BWzkZqfsCMsygvij1CRhalKxhNzVZtTgbceuIbF8BsV%2BH3SpYBa%2BS1EoZF0hbp5OxTW%2FBOHpxNmxCC6gqWIYSx8WoAZPE7enkwhzEWEC%2FX5XeiSDKYaYr8WPR2xeHD2vXmdePKmCAYA6%2B5zM7BeJEKTVlxWilYwnR3gj3qzEfxT9T%2F03%2B51YB4&X-Amz-Signature=649a5bb0ebed9e0cd9e93c335a2b576d2eafd9131b1e381c49360bc7c670188d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

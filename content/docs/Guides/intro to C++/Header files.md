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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7L7QOPW%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLEoBlx6otOR3qHPyxbHISLlKdmy5JgoMOa7lkvQEGfQIhAIMVaa4DrYUF3gNRCv%2BFgikBFULQw6ZVzDrRpDlAKhmLKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwC%2FN6dYn7wWxYvnTcq3AP%2F7Ec2Ud6BVnBF2L5uMjdfPZkOXrgl9mpA5Cm6dsMe2FalXE3GEOjKSG%2B1zBSSYh64dJ6R62mikqdApcQmU2M6OjqdKnRNl9UH8IuWLXB8crdNLY%2BFHDYbtP62upSDXBrolb5fMJUEGvjlPm%2BARw0ftYoN%2B%2BSQp2Dywg8BXyWhrYNxWk9Aea0rHann3QyjmsmaJ6KZ19YR4h2I1S5%2F20nR1vg8Ge4cD44PwcUcHqVUAIxHob%2F251QI%2BUx0H%2B%2FOwUo5QisLRweI1tB9%2FhRh6Drx70gkHKChk%2BidTx4SwC4cjXQ35CWZkB7PBwI3MQG23xPqrpqKPI9u5soW1Y8gpbuCH8QwF7JKLJwWych9orcaLd3szbKDMjQrc195nGuMUlpNXxlqM0DZDcwgJE4hbmupX2gtF5EhOT783KpECpDqv6cpVFYLck2vWy%2Bmr%2B32YvQbD2DtysydNBPm%2Fop%2FjDTboqv4pmOPN9vbPy3moFzg%2FSVYJDrXaKfTK2lLpCwgC7VJwcWnS61PiG9rqYYXbx1dJH0op7n%2FxWXkhILNNdT%2FWT3xp4FuNNaeRkbHjauUan43Toavtv2IXhu%2BqhOGeu5uOlrux2pJoF5zq9onsUf%2BfP4RFR2lNjwUSNIajTCT5PXABjqkAV34RY3EnnSzZPTEpq5HDtyKKk1VQArauWN3qL6Us7BSQST0tPXmyQw2cwZa%2FWiNn6nEGGVIWDu3DsOJr5JVl4wdD%2BZWvRnun%2BLEzdqOfGUxwe574giysU6rb1dHummidqyz%2FHjZpl1%2ByaPFsyh%2BKSY3mqy2deJkALvFLQprvO2aHR%2BWYBLWV02WV2gkqoppKO5nn9urqxBBrDd2IcXh4sw3mnag&X-Amz-Signature=a3c606501da550f9db5ecb8aef639c08f0d383429d3c36107996c91be8641473&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

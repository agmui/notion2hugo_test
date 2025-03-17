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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R44OSSGQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK5NTVjtTIQXIwlSOpsKcFP2I%2Ffo5DuDyrYxYMLdXm%2FwIgCUasYVsf1vGlz0ST0j7Iir9zdjuejfVR2nCQNHAhdgEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDL4XB1%2B8wAugdWd3USrcA3GVKjtpJH%2B59Gpup59vGSsvM%2F5DyOJby7pvc2%2FQDkYvNoD8j9Ep8gwqlBaI%2BO8%2BLKoCPdpyqqNNA%2F0tkQaL8YCjRi65ns%2Bhu8CbyvnMrqENiD475ArRM00FjNYbmOBZWp25Glia%2BC5e0kZDc8URUCT5uv4SKdmWWSY%2BS0z08qeSNQUakAP3PqkElBK1p%2BRBUYJcuYz6GgQOA8nxigNcEowehzMVuS5wdzNf4hEkiMlagxWq4ofxCr%2FoT3YOjKogShJxiU2INTeuU5%2BgkzAVs6%2BS%2B2VZn%2FsaKx1HFk82RKISzwDQbhfURwbpaci9fvAjUvUdI6U0Hf9cAoTgCkHF1lJgFPYS1ZJv%2BEnzHz%2FdNmgq5M3NC304J8BQld05PUZMmDemkIkUjlY66dEnvFU%2By%2BUku87wtVI5vtvS8uszLxMk1GtFo8bFf42VXMJOyD8VenFEcwLXMx3forD5GcUJYBuk118QlErHg9%2B6IeAFkZUwtzjEuaFgme6fyiM0HpW21QrJuYIzeMRvbKIKn5sBn1sxc0UWgs5NswUF7TJe1xKd9woMKePwY1cTPAvl%2Bvp74pBzJ68BdhkotUCahiMIhJIdirDMMlyOubP2JZ%2FF4e3HBEqdUXmCAgPSZAWYMM2S374GOqUB0TVhsmmb%2F8%2BVlPVb6PUx7b2ZYQC%2Fxly2R%2BKqpcrqc9nextRn0U8OPLb3LM5pPMd%2FAWZlgGcUDCx9fMMb9Qw3CpB9LaMhmu2fciL45Lw9vd7GlE5RywssgAhz%2Fy%2FXKyyv4V68W6HbpHgmXHQsK0zlsH6qftJsZvWn602uYhhQIY4CASSMN3iOwRVhSdZuW3DYf8NKeZ0CI%2B6pw3NBBjsdT5tIrcNO&X-Amz-Signature=82dcda9e57cd6e4a1f05fd480a7ecadc773160f088e83482aec623de13020417&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

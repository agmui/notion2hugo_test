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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T43VK6MF%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdPdDncVO%2B5CowTQbB2svg1ISlT%2BxKUZnY5ngqb0BLSgIgTT3PywnMlzoZ8Taba7c%2FJn95K4Yc%2Bo4ySX8D1BED5zEqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVbU9KMjX%2FfgmIGuyrcAzZX6RP2Ex5LP6fvT9bvhuNkqjZ21OFXVjzHmqtVpPO6jmZgmEp%2F%2BoQ4qp4PPGGygJ70vufmGRffBenNiwX1hcyjIZ0N%2BE6VODgPHSG4NrYxHBfu1Inqih%2FahP7oMIoIvieN%2B63CzKHymAq2vr2j%2FNM0JThc8gI8f5Bgy1jqCasu9bNYoHjZKoG2kyOTVMPaTRMwGkAZwrNKsc%2Fr0sVyUXwvfDPnzqAspUQwCmubne6abc2rWjV7UQTF9%2BpDpPowxmF04ewFzUDY5q6EOFKPDgUJUgJjTXTlHzh8v%2B961lAQUGk36sI8hPPLoQpl%2FZ2fYPRx2JzjbmB2mD9n%2FIXvJ8%2B8VDLI9pWxe8quzyaUnvYfOmgS%2BMYJ6wlivYZr3Hr8QRQ2yZoP83zjTnNfcMG3mEtm9tf1SPpKI20sy7P4SixgMfYeDX8JyhjGYEVvT5Bc38gsqhFaMyUBlhLHR6U6Kr%2FHQLaRGdFDo5Kx6Hyzgsq5QknB8Fz4lXaaIXHt0aXNsHyNTlpa4Tgld0cuY4NcMGwoVl7IQ7VG4fSNl4ihRtizu4jywXsBMvKT04VVFtmqSiF6H2WJCvwvgyGeVMjepSd%2FtBQJTT6gEwhdtAIdDl%2BvArkpwTCjbLyPmLI9MLbQ0r4GOqUB7%2FEURk6ktI5cdSoGxzkVH3gg91f6Ox07loIMuqWFzIgP9j8yGZFzCiPLhirrVII0S7DKNqBDqf%2Ba9ROyCgfUvyzh%2FGEQyhjNrY8aRBz3XGoVraNjcPnJRe8c4OB7cB4aBpzA6NW9R24VK3XcFHTrEUM0JECybOctJ6m6LRED7zlXp2rFcwMbi%2B4tq4%2FOlCW7DzaVE0Kv7Pc3juUdWv7JEVX1MuEx&X-Amz-Signature=4bb492d61f067a32bfaded9862e20bd33798cec02085c7a3f27d150697eecd04&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HBRYTNR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8UU9G3OULZp3fE2cQAWO5wfsp05%2BB9uSby%2BKM%2Bym14AIhAN0WDNhqlt30qOvt7UHkFkmuC%2FQLHf7zdr4hE1qFsVY2KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrvVImsUqWllIraZkq3AOtOPsd0Su%2FftRs3xEcSd7RSLZsH7gIOKFUwkjC1CEbocS2wXytlKwRdOZGSCbmsIjOZ0JWhfGuhtpGBhYL5ekbjgmdVHgFDaFjUjoIkJbHJyCds0D3EqjiWvMpAtV7TcZEfSfG%2FDLhLOs21biRKnoQFSX75v1yF1hKzASnZ1%2BOcMbeEgW5lpa%2F9SjNtXAM2CmxrxXwu0yoGy6X6fnu15RSELEqOA4DDZcP0vIGnX5k8g06w3SRUbfGvTv9QZ4uuEIGRI26sgRFY4bchoo0hzG2nf9IixpUv%2F36elXq9BpBkss8NCLwuer6GLTFndFG4OmoYW7Xp5yRUQp8lFmBYyYkBmDH3Tuej81mvwS8FZxVwVG1pv%2FqBdivdy8cMVokpGtvdcaj8ApKpeezOCDyXwDgMTjKlQ4lSs6yUofO93GOC6FrM9ilI%2FeKWkDO4pH0oLGOVaMP3TbGjcPRQQD1P%2FNiVnT5u1xpB4fm9zrmjoWj%2FAxwFHL%2FkDUmdcJEJSNYrDy8HF3uqyzg9kyUrFsHhm62tCw0AyesxZD%2FdbqekKqbZcitGF9Fa8JdgsuOQR%2B8md%2BAvFSpi0WnvVM6hvd6EWVsd5a2SRXU0Merp4xXmeaQDa4SRc7L5ja%2Bvs8MgDDbhvvABjqkAe6NLwpN3ChHMmelQPWM%2F9VRqMt2QhmJzI3a4o2R4%2BCsn6gCqxonTQDR6g%2BzKWH%2BVLR8lndSbASqVQdtD16vESSxIrAvrovCVZIPnIcdHmYRoXHdujc%2FY7tnC0KNW1sshS%2FwonlorDfOvw0yAq4ybMSXquC9XPf71aovcdWsNfVujGeI1PvbCdIryf49xJw4oL%2BTqIUhJNWTnUTlNPbYsytFlK8b&X-Amz-Signature=51e2931c93605bc70e615cb3284c400de9b00546a8fdce2242e538aefb057c57&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

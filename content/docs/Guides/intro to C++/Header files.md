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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4XWNUNG%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQC9%2FtRNg5%2F6tk3Fz2or%2Fl9r48ApizMLokl1ldUHVgevSwIhAL4OBEJ7LDK%2BQe7xRJAb%2Fzve1Esej02FWc2Wz4mJ1cukKv8DCG8QABoMNjM3NDIzMTgzODA1IgyUwyArwguuwq3KGvUq3ANkoMiPuKC4MKhN4lCigD5VM8IxGQXKIoGXtix7QdD2Rzv7yIhX20XArEdcb9%2FNZ%2Bj7NTP85vZnjl6b3KkyBJ1T%2BpLVIeIwd1418qiHdui%2FbEgHZYEysCdnlxx%2BjdSKzmWTlfO2g69%2BlqrCHZaXExeHSdGZEBylQpxamX0xF3cG2x5GXwS39pxoxjcvrAf5ccN%2BhXzgI9IpL1iPpljTwXw4NledI6dM1IyBzdopjPKvKsc4xz9RI4RUTjTpWvE5Pb%2FtX74b0yvYI2Nwba1ZsOng%2B5XOJGu5rFWSFHnZDdadsq9AOtQw8yRyhYwBwO4owTk%2FYS7A3%2FC3502OK7kAFUb6mkd%2Bz00uafuBe92oH2%2B5%2FJCYyLhJW7P2JObrPUrmZLqFEaPnLAtvXQyoKE4C5ciX2Tn5SujF%2Bjgt3c8s4MVocQUny6hfHO2geQb%2BFUGjbY5ybRUT7vapNSsmYqvP4Dcb0hoF7dDQvdSrEkISVFvnvuyalw%2FiPvyVsGzurv2J8uwZZxKndo3wOGoRvesPeus9RJmo%2F6lAEdKMA7Ew9h%2BtHDxKjjkLHFalGCrP5B1bWOXHYhRhI0F5ngv3nP4EIC07%2F6gvLxuwfgyMva9T8LwNYFCUQRuO618Q7fT9HzCEleLDBjqkAejprMoWTuyT3zX64NczDOdyWTwFMdLEtDj3xmMl99hKT6A81Jx9GagqkPSPAy%2B4U6lpov2amJdmyEEdW5GdN6YNC2ymRG6Z1kIWDNvsWJUXe4DGXyA9e73ucau60TP%2F%2Fzo0gUrxLoGqaunI48UPfP%2F9C5qvZArpo0zsd8hY1SJUiTkBO7l0gvYF8odwUPy1LutDGf%2Bxf8uR1UC1q8S07dt1BCIg&X-Amz-Signature=27785374bcf2c6d460faa3e1dbbd47a8cb36c6b16a2f7d8d6f1f96c651b8ebc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

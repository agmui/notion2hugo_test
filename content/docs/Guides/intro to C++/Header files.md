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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7PPRPX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7JD6njli2g5TpuO9S20HVsC6rVStVWhot6Te3d%2FGEmAiEA4R4kBuMvUWMvQO0uwTiCNW68xt9j8mpLPxxRYc%2BBhncqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiL4VMn4p8%2BD8D3hSrcA3ioLxOHhxB%2FlToe6FIhsC9BVM%2Fi3l71ix2hvbsHEFKbD4FT3DHIixfk8KmCzw%2B0sDE7Oey6agPuAhxHFyInAFQ4kYaLFodOBcy8I%2F6NVqEArjofsVq7Se5ZsFXgUh%2B4SCRoBInFm35lBtRvFwlmUgT1uPM2VuQQRKHETGULq5syVk7n0j7zsz6wmdD7IXk1WsnfNZcappne53QuMmeX5CviouBB%2BoswnFW2t4e9nKBrfIKWhG%2Bl6ulDH5mYJzlLrAvMkyMC3g1GPyQpswf6kMTI7e%2FAqGILk3gXMHNc8TBDUxXjZEgx0cjQEo79UsYyBpVpBwTG5eZQW9clgOh4NUxvp7VMRK2mcPiMpJdEa5PJTpd234wsArTjoEDzq%2BHuOlC2%2BT7LL9tbgR3mdf5TE1KWJstZTmgNSatqiCzkz60%2F4sIbaoxeCgIwZFHbwa0m62OrfOA3QT5Yp98gpo6SsdduDBctLPjt7reMz0DpOoYtLO%2BbKsEI9AQ284JBZFP9WJt5uPSeJu4PYZlzDJHUz7C0EGvNUKQJYPyhtIcddydvi3QodLQYFFIZ3C6ObA04p%2BI%2BMSl6oALu2qYNpe5kjKCbzMARFRvepkVg1TuXLP80E0NrQ%2B0nV1fG37x1MJPC2sIGOqUBqK6dxhi4o%2BbyrrSjBZlQBHmWPQkBqts2E5iUsXpNjq59cMzGazsZ2mLglfS%2F3lwHdpZZc%2BG6gUZM9aWQbadmGbXmzvNYG%2BLEfYo0KYDCy1gtArfmcy8a0bfdm5HftB0xObtqYWL12viv76qHs4Bh%2BPr%2BlXu38v9FBXIpX3C4YYbbgjB58JUdLWqXuq09kXwtXm82SO9mXaSQB69C0z3Es9zCk8ks&X-Amz-Signature=b40e0db9b4f6ca405c3073e62f1c9fafcc49a6c7bbc2565df0231e3a2d4d9c1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

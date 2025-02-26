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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2F2NQ4C%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDOWHOW6efzeO8T5RTNHX8O1I5pbZzOu5bJbPygciN1kAiEAx%2FbPd%2B9qZlZcJe%2B3V6SZUXZbwhKEWx4BGSQQAhm%2FvN8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBA4nu%2BbyV6zTG5R4SrcA450pcts2GlmbNFbx2e7a%2BoTNnDXCpuwDbLRzc4ZZ2aZ6e3%2Bq1OUTztNK055RcpLnY%2FIO8Yfw9jpMoWcnyM49eK93lqRWvTUPQ0DSrXfCUCcErCf0mluqO6tR5rPXnLRf%2FSy2debI3Z9h94BSVe%2B1P3FftdnI86xMbY0VPcMC6k5X%2Fuq0VyetLX%2Bw%2B5dVg%2FlyObWxymao56FfE3Do9QVxBh89BF0wRXE0FeJckLY9NZW9IyQ1D0sjOCqyfzY4%2FELCRuDeJszuixY1ysBNZQFfIqwAk0xsrQM%2FQWAWKCLsT%2BN8%2BYXoCvWFc%2FZaxtAc2aZQyEWqZRFq%2FsZX0noM2bafqs7NDaecU9n1yYWiMGXjadwp3BRdfQjAXOs8zEBYnE7KhdvppKXKG6PsZ7PHmmyNNcHHn8GDpDBoj7xV5qHXrb6soAxRTY7jItM%2Bd9dJ%2FJHaEK%2F0dp5tB6jiOAowG1BF9I1WdODaGKEqZ9X%2BQmBahvmTd%2Bdp2hulpUQpd%2F0PSH9etNWYHt6J28LgMnNhiPs4zONSRhfWQkapkwhGzDEaRs4kjbPnOYLc6DVnCapEox8iBo8Ef1dI5yuqG8HCpHHtNdcd%2FKCzviFLqFP7ndt7PC0ra2mWDBj7I2RCxx3MOK8%2Bb0GOqUBKHJ9o%2FZdRwCP4VaSNNzQ6Aj5cttqzVejHvsJ28Bg0hj%2ButDHLosclaTTMKoyRjNtC2g95422jGvItS8ivMZPBLCd1GFchsaWbGlqqnIcauyg53RsKlXxlc4m8hfS1k%2BPtiiv2f%2FvITTEalY36HWm8meTACuCuNcZrXYOAbB62dgRjPAhttVAaSl43zHEwxdvnfKF4fQIhRraGAetXqCuRKyzBYAP&X-Amz-Signature=105476358f3ed0b92c892d2cc4ce8b2779e2926e439607605e5f6a3da409b68b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

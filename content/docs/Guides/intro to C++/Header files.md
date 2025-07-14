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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TORUYXCA%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCAXzPcD9YRwqJGzCdL3OraSEKz6mvPsiUGPb84hUb2nAIhAJjy2NJx6RepyRNzrCLQAt4kE1BanhYin4ixBeTCMTryKv8DCCIQABoMNjM3NDIzMTgzODA1IgynGssXzZnCW0otP60q3AMYinwvqy%2F35zO7iqvRn7FUwbA1M0WO74khb88Tj3OpEZP6UlGBSs21wNPKQ1BCuMr1kmadzbShEqAz6z8yZPPM6SvO5oJIfpADvjcd%2BpBhR90udF2PHrxv8VCQdvCOGoC%2BpDSJxkcz7QiQx1tveh19QSys3tKXdi0W%2B7EAc6qLT2xNX4xuJBGu3Kvi9GYZTX1CChPcypRJkmLHou1cgQCRuCudBxrLtC6EbIGv%2FjDJ3ff4PK4jtIoFUxTWZdiMTCup0rGNCeYhzhs1JOycXRYHMIC%2BDBjNqWYiU9oWH6Wm3xf0VQeibNkvf9tcUH3nXtpeJg2G8OFEhzFcElbWEYIKEMFhzeLFKWf1ZQGensKUSH4tTvEsIEyEcg3SjctshsDlti7v8ARi7zbPDcJv7U1r4NrsKMkFecvV6LiXsOb7vTvcmXpLOaS8RxByxqSD7Gg%2Fqrt%2Fh3bhXVEDssMm2V3ucH2Lx7KA1wbp%2F4qtxky9ZMUD5V5rroroxUm8yjj3CQqerta3h6kobjr913dmiYZJZru7IpbmwiyDG4rMqTxWwWcH%2B8NKhbcjUZpMB%2BsQGYv8zilTQ43bcLcxqFQB9gozQoFCwi4wzNv5sn59lSngncccfjougdl%2B23dtczCuotHDBjqkAZckqUqoCk38H5fW5FePOfd0rHPei5WjlJ%2BMvqwNTBqd74GYfNVbSLPcKMTVQ65PjCacr7g4JqUdaN06K8tVlXugaxNn78nIVSYzhpyWBgMUgMShVIL%2BYgNCRCN7G%2BYEO34PIaWVOwxqX5ZT2WCOxu4CufFvdVyINeybRh%2FLbGK1VRcUa7ThVK62yg0%2Fz36hFAUBFUGtwyh15rnDpcB6jXjaY04%2F&X-Amz-Signature=5578b6b9d852edca79d98e2b3fa6ba0d4edfd969482cde3f65b821aa84e9ce59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN7SNY3J%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQClZYNpFz0I7PRx161eLepxe%2B4Lat59jLkIR1pDU%2F8t0QIgLAW%2Fjnt9zF5z1f9JuR7p3aUGr0KWl4a2x08Ou%2FsmYfUqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApvrbNNgdFFFEoAeCrcA50RyN9i%2Bgnu7vvkA0BaFQxgmkgmXnZ%2Fq%2BRCL920gAhqm3g8AsyMtrfpMdyOx540YfJnj%2BObJHY4rmkaMFzFDNQrzNmfmkQnfkZ9eusVg0xZRgdFujMfvv9npfcSjNwortI2BMDhCrFypuHTRDNjS%2FbDegvLVJxNauNi4selZYDIa4IES13Oi8UHi7xSV1eEfo3U7zsgL7QPZ3ly7zncLLvYSXjNN2gPbS0VMH%2BD8%2F8yT2OE2DsCKGSd1X7RwBi9DziHvClIXlVU21INe6njKbB14GgENz%2BRqIUSGEI9X5%2BlFF3eSxKLhyQvUEJvF4O6m9hDrznZUh6eGyau4N4vd7%2ByjFFmqrO7Vr%2BEN2sl3nxz8IP5gySUEt8Es2Uu58zrsUXW2amQNM3Cbj%2FVu04jZSP6WNi%2FoD6xj3FPJU5hPfKoak0xAeCbZeQ6zhInE%2BmcqiBHoO18vIl%2FHIvX46PgBnOBirQzWpjV%2F4qp1un5mABX%2F5lMGnFOHzo7QTwGj5hw5Qw6ohF0RASEuGJ6rH7MUQjU8VpIs5KozXdKphrx0E9f%2Fe%2BuWrhGsI6%2FMA9nPG4q%2FdrbBGypdJtFQBseEjWYe5%2BrquMBHheTG6ZE5xnB%2BDOOSM7pJEs%2BGUhZyMkTMIX3%2Br4GOqUBH5ZFpsJuifNqy81yfprWQh4c4Jy%2Bo0X4Oyid%2BRw0nC%2BJBvnZ3l2PS7DKTcte%2FxT9ZMJwxSrbpDVRBlKIh%2BPPD0WTxjjL5I53wQyrJyrZLJj9Sclkv38xD56IVp%2Br2xaTos0hC%2B6J%2B4126icN9DDDvTuDP1dUXZ%2FotGZmZCaIJ9jK8CWQ8jWVQHDYi46%2B943GCgobpgw%2BTNkNdJTU4NxYznSub1hS&X-Amz-Signature=e2b7bf2450db3775db2de6bdc1b935e3ec48df2c2b5e3701cb688441bbe366ec&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

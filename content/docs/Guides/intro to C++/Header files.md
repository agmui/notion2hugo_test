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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEACI6CC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCM59UvEkhePyRiGQy%2BRnPbEs%2Br7ZYGGjdDlSM%2F9mr%2BJgIgRhaS%2FoKLpMKJSdnODKi5WKjSXThh3IPD6t3nq%2Ff%2BhQYqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2B0MIWK2oKlQ2dZ4CrcAy%2FagEMmW5auoR9KLbl50IQLJoxJ6TF%2BW%2BJNeKdzIEQ8PcSHKmXuBuihxK14yY91atd7KoMXeGjVg5PnZV3CKZJpLLRRESsRQt8B%2FwzcC8w41P9DRUqhWem92pK0XazxcA%2FQFE9dVnPZ33rM1zdc3KHEqGSGZKZni%2FVQWadcuB%2FzHns%2FLGQl4d4bm1H3SDTKHPDtt5j0PBHXr74LieRuFL0iqynZZ572jp%2FaDa8UMU9o5zYVVTDh%2FJUnz63LLw6khx385yXjCPlMVGzLcS4iju6J2OB613%2FeHsYuxz9SMi4LREf7PXEbxXd7yxJSbN80ieNrQjTeGqatBscSrS2%2BDQoWW0JaPklLquPmhDYzEkPth0jNQoDREWb7NCRUSZ%2Bjc73hUCzSN18CbNBwGCvbRXTGLJmNRlL3iLVLsuRVWhaHz7sicE9JZrzbXAjT7tSnJrUplLaJzLAfVUZgKgePnTu8IdMJDQgPnsxRCEA%2FDJnhNX9oaszuQEJoTTIRsEqxHbC2WACl2r44VY5F%2B3NMfDtqh4K6b%2FH5m%2BC6oVWXFqAVwlhrrSKjzKZlPtpu5JLzpxzwQ2ZkKQPwLJT5FydYJJTLm6mrQzRMVIETFMsYYYoij7ZZ1sNbNqzANjHqMNTc48IGOqUBtGsSacZ04GspIpU0BiZZAMH6NZohKSRUqKdfjnIHo8KQE0L5k1ZYFQ0P%2BIwv3Nn0NaQlgasHDUJFA6slbqRR1JFM5fa8nPD7Nu9yrHie1cLrevlPaiJUim7PLgsFSzCWrMZyepGtFWXlEGYhQSYFd3k16LetMML5g%2B9JdvKHqPMVwTiZ%2FNfE2BdV8RnIl43EekNXgRtNHkVRJbm12XgS%2FgP9GKwx&X-Amz-Signature=37f7ae2ce56fac9f1106a33f8e1d72cb35a0d96d8b2ff6af02c6a8bb39180680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4RSBPGZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6NdU8RJf12GIA842TUSRkpk8zC3DpSHxITCDDqPX5MAiAIivTShRstKyRLykW%2FEz8MtUC5ruRC0j5R%2BvNVVP9hFCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTvn%2Fdp7NryGR%2FuaCKtwDiV3Er8HwhyljcJ5C%2BoneXx6YeN3vZoqBE%2BHQmUhd%2BxTDp3%2Fg%2FUPs89hyHj3yfHodQPmm8JKvLSKmkLYC8U8O5Lrj%2B%2BHY49tAOCa0VJHfJtjcRjjYmP5wBvwSBafeIAcRxqm0Ze0Je9gYnr3pUNgEzx2eweA7mO19hmXkn5QRbv%2Fw%2FZLixaDuksz1yJgIbLAVoVA9s%2BUq5Yf%2BeGo%2FoQKsYAJdJKKSfkR9q173WeGiN1p2rG0UHrKs5a6GzguXqwf%2BlLTw5r2rFIpSHk76LV9r8De80pK%2B9aG0P%2Bgzivma7a1%2FlpvB7Gsh9Q2F00pAevhe%2BU5moMnxMlT7MT6RDgqilPVoD6OTQWc1FX0iYz8alnbEI4FLxy6R2zBO6B81vFzHSMvR9ygGc8dncs3t1QNms%2BxeoSHHPN8xqX%2BM1oi3JW6OsUT6geV65rC%2BSV%2BdvpYJJaHnd2SZ646LeqdezFqJe2Wi4OAhck5W5e%2BNFT8WMVGecunJkHBDLiM0whyh2X%2BE3q8Xn%2FqWb5PU8EOMm4oVHle%2BItnERyk6l%2FA7VRvqge%2FOShl6uRsmRcJxyQ1l%2FNPgVwnS%2BLnO8pv608Bucc%2FfoLgM6UaFqg3QND5Um8nwZhaPmyyE5JMxvoTHf%2Bgw%2FNXzwwY6pgGwfrXNfAG7puxfFJL3uFQTl1EyViZrCKem7VHZP5Cdkxv08n7tRurvDkdBzYgfvZM1PqRZ6chpNZmvbQSdC%2Bru%2FbznwJQ2MRxeE2RKROUqY749AdUs9IrtDYzHYEBdoLvGvSwdWnYWI8q8NvYN0RDl8xa2ZcbKQB5xhvi%2FyYMiFWSOZ%2FmZK3BtLtP7hWuOIW7XRQk8NvOiQVYKIbKrTtMaKo4GNCwB&X-Amz-Signature=ce4498a71c184122a020b084b3990d537e495e6a62079d32564eee547b56f40e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

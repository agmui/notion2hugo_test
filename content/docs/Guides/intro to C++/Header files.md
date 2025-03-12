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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466633JL5AD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDm4%2BvdkDKB%2BT6FfsSeIBcZyKKN%2FLfKmi%2Fcls0FcjPALQIgKTwHCELwfNHam%2FqiV3R0tFITM2bC2S%2FEPhB5dWBUCuUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiQkvl2NfgMned9oircA2XE0blVjthmxzGZ%2BaQJ40e6CQouFZDMXTvqp3v53lXvslQ24AjGwIUJQdvFB3YtExitBK67HBkIjr2cPQN5twYcBr6Ov5JODUMq8WAT6rhaYh0f%2BXIF2AlssqPqpKPBI%2BX%2B4kOZ4TxfVjlceWzBd5ihQHLbXJRS%2F3k14qrUUXnLd9o%2F6Sit7Kxane4IOKB4A1Sj207KCauwMhrq6pjZxfsiBccovGpBhRkQkjYjj1GFfQWKo8heImD9%2FxC2hvCDZAVLYzEYj2h4A8wOrl2RtPwjRzMyXhxGBhYcL8pFLMDiNFDxZ9MhUXLVXJpuE5hXIAULyK9BR%2B3FIAPnmDobCbAMk1x0qFKh28QPjuwEGDPRNPgiEsUbUMZSsNvcJD%2B8699etxPNhXB3jVSp%2BaJsUlNo6o5GjfL%2B%2FKXmKXodlC7gcGIT%2Bjj2pPHA7zRL5g8E8221D7IL9nuYr7Y1rOu1jlpcCWtaJTaUDsbvtUrPn8xQJgcu3imoTy5rZXGRLDQSRzXZhbr0wvJ5Uxeu2ORAIOxk12LVzcOOniVMtQNVfP05FCVK53HYAehBkg55pCFce5hm7NtQQK6J%2F5dCesjMmfDpL%2BVWjI03seF1gv6xHG5cK73O%2BP7U7NUWFM8FMKv7w74GOqUBosZmlf8%2BcipnfrmrGxEOqDjnL88h5cp9hjYKbt1U2xk4aYT9Nc9Uk0%2FsJdrzNPnlnwfceD7TNoqVxQzAH1scrdPFWBYVbi%2BZR8UNeskV4irqGpqDQQjyVTx4U6PYyY0qk7zmQ0hAbpnHzf87heZaROsCbBWNbssEodnRQJHON0n%2FeglZQvXaL3UfYd%2FsvCpbY9wHJNp1KBoXwES%2FB%2Bqj9pu7ql%2Fy&X-Amz-Signature=6bf5f5177fa985e50c68f1b829a26f3a7aa140428fd9b0e4108636468fb38df6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

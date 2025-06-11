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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIGG6ACL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuQ5eIKPrKv68jL5nz7UB5mNBx8n86VZz30kghffhdMAiAqYIx4M%2FTdH7YdjRjtpcaZWAkjU54qfuBDRoZgp4DNeyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOwFSBEAgiBNnoEpVKtwDsbzilSfTuYUv7IlsOV%2BSobvySYLItYmhInUgUQM8tYGjqB4Cq1x74s28N2LGcfQXtgsdH1ZmDpRmwnRvvLVZQf1zt5z4WEaP6VCeeRSUKT35vWGzBLnVRh4kDMluTvG40K2KNi0iRPaA4%2FIrF1ZUmIGTvMw%2B%2FAtE83sojmT6c%2B4AftSIiQBmn2D%2BFrOsAAbrJ51GIdz9ihwRBEGtTE302%2F8lVmMtpWWZ0lH%2B1lyOTkpoLEWk2%2FyNy7lx3eWd7QfqYV0woFfI7BFEBzEf65u5XmUUEXs0DGjeGRh6mNv7btaO%2BVIovmTsB3YqBGhmsId55%2B6QUGe85qZenqSoiw43iYEi7mZ1E4DMCvSG0n3ODovBYAPKdNwDfvXo4k8%2BN%2Bkp%2FC6%2F8bfRMkFrUdGzBsD%2BGjQRKc5xi9LqAY%2Fsn1hbtspqhVIsmnxtkB4%2F8lD8YREMbX8FbmMBpnZO%2FOQGLu5QwrykqDMeSucbzMweMMKdxgJ9V74cawSg%2BOhLk1btfQLCg6VggSLzLmaRviSX9vzrvcI6l2QiOvT8V0pmabgQ9eyRzLpfqXZ7neEALvtCxsYuYP8pjMi3%2FDd2l5EUoNHZk9E%2F%2B%2FKx4Aai96nFXl3e%2Bl7u6ckH47G%2B%2FMtq54IwiJakwgY6pgHVuxlaciux%2FIOFgy6TAuPu%2BOf%2F1wVD2eTMf8fkpk8EbZ2ursRh1Zjz3%2BbeZ%2BMoTEUtcIl7Arp0sJPatGFSZi%2FNONI%2BULabZ24D2PLkKzbyyCl3eY7d2bDJff4AEtm9eTm5hVQgui0%2BqZ6MClBxkwTOk4p2o2LeBF9TtM5%2FGU%2B%2FXiEDZ%2FeTlXZlJIWF24l5EsyHSKTlKVLsSXueTTlKkcGOJcjCqyiJ&X-Amz-Signature=6e0aff21ee0269386236ef9860a8281ac4303e40080c3f7414d1b8d6840b966c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

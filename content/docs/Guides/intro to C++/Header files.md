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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJOTFFQA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFSPBYTEb%2BkHBvvdRT5fQiI4sI%2FXuBBqvM2qDMEBdx9AAiBYJEzRpcaQizUPL6SpYZby83BumbSDplts3y9YlDO1UyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5Urzb1zqPSOggjJJKtwDilvJkprSW8RidUxs9fXsqursu44UPQTp4ulWWl8UscS%2F%2F3otXRQ0zLnqe7RSHQYZMcyxwhqzhAohfWXybDEBCuEd9IKn%2FkXc3ZkYeQJ%2FOmbCK8oWw2gvpnxsEb9rkm7UfiEybIQq70EXZq8N1CRtH4oJOqi0IekPDq1xiX3YpJPJ7LwtqN8Fc84uXgfqUJC9aOnadSS%2BJ5aDoEoOKj8n63Di%2FkoRVvrElhIMGrFikVQEQqRJMv4HF%2F7tbyVklugMnwLlFKO2rdDNSOXKkg77faa9ZizR4Yl7k8nTae%2FdN1aFSRWE4V5uEfxdEQr6kznMNP3y%2F98we9uWl%2B2TIYJbqhxsx6Hwxm30iCnAUNqzYmJMhD1XhL7TS0A%2BuB0MF2L9J3F1lsac8IzvtEmRuVwTAtEhI7UL3cjyIlF4NbL3WqFPSBJaP5lnOteQOe8Hai4HvQPwSSVfbMgZfu2%2Fg5LxVeWbkAlYkfJ%2BWpS3%2BtQ1R%2F2hHL%2FcD%2B0%2Bgq6iNwByu6sQorrHuG%2Fli1WHZqBxA%2Bn%2B7kKKFN0Ur16wZYmM3yaQzBsHSgc%2B%2FJx6zroBT7Fha%2FyTXx0%2FPjrOc4gw31taXfi3PCBQk6scOSlvcbf%2FSF4sgM5GSwXgXoU1NJSfwOQwpvu0vwY6pgFS1rIfQa41lbmX%2B2MWFuzNhWTsm7Jnm8DLKVEHIfCiTqjlxrozgbMXBGS9xp4S2hLAV73H2DaoU0jyvGPZud1i8Pcl4MMY1yBjScumXAqvuvHp9Od1Jt7oaxnM9vRDcRro%2FxRDq8cuFg7wrJrjVqLJ%2F4D7GoP5F9AbhLR9C85Hl37JIIp2HS7LORilKEQrusXJ%2Bacg%2B%2BdgPFHpL%2BlKwvStGeW98OR7&X-Amz-Signature=579213831689906dc080743e0e43a4f1166b0381395b58659793ef0d10a9cd4e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

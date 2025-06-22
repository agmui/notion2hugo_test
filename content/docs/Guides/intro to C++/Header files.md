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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PKHEFNO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPLKMnNGu%2BoBAQVcZzTq9JoTbg2o1Ur17rY9u%2BQA%2BH%2FgIhALKzQE6ZrEUL4kcpzvx6KWJj1RjSUN%2FrqXGpvt5r%2FztdKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6amCnuYXiRvJgmXsq3AOr%2FzKUVbrqwR%2BArHVjxkbVlf%2FPJMLOHnGVd5dzf%2Bv2ZB%2BM8xo5KxXAu9HQ43Swo1nrIzLFH%2B3PNqe2aevTFljUhMWfj4m%2FK0gSOPaPYHcZFF9%2FSH%2Bgr%2B5iJ%2Fay7%2FXwsIoLYdz6fb7ZUbQjtj9llkvbupXLQxYjctdbzL4P4q4baPp2X5urCeZE1a6ONx8jp1vss%2F5VbRI6THqR13%2F8bnvk2ICzMAl8drFgaz6a2NEMG1NAAgfio4DBTLUf6xAkznxoAXuH61vHh%2BHwfvuIwIOxzycdmgHOPGsbLz%2FXH2y4X1ZN85m6lBCZ7ypsDvbmfCWgKhipnPOH%2F4VkOUCGE92sVZ4ayUh27f1YZSzEwqo4O1wmBWq57eBjOcszKXtXbXoYwBfhUvotCEMXOSLjDXuy8bZ5JYlt12%2Fp1%2FtUM6udwRBTbQVVYES0kv2tK7zIn3v80sAdCS0xw%2FU8iMBdd1n8BqO9YyAnrQuyJS8NputGv9ZH8gvlgdXFZVGzJjHtT%2BFpNQRn9yxPdP96Kkz4cunOTJ0upZqwsPc2xnHV244XGYryud%2FfHtLPENb091l3IkAjGKlNzsZBvDBbxngT20IpPwq1UGUYR%2FS5I%2Bl%2FlESKkV3T5ismSSJ5POaMjTDSot7CBjqkAegty%2BXFTUqWPOXpgFJS%2BgZkIOHSL8AzMYx3eU%2FNjyPtyIzPgBBONEDwO081G%2FP%2Fz%2FLHVVDPQnrVAjNssL8yGrbvBz4n%2BDne2c0KW0hjfA%2BU1JMmljFbYloTtWtcdSHtlwIKphOoM9iJSLuxRlq%2Fn3rPOHu8s%2F7GIf626nc86enfREmQfeiFiu0zoqP9GhWhSEONd1%2FTCYN6Tp4RJz%2FMX7EWEe3y&X-Amz-Signature=6c963043147ef12f6518b9ed2955cbc053366505e081c9fcdbef905d1abc3fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

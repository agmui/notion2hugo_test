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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT64RUZQ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzOOgwj7qFn80lfHK9Xk12SHXjS67Qa8Xgw0hEJHawMAiB9GwSIz%2BUsObiNEvz7pnmUq28orUVCKEMDAbDg2L%2FXQiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM017mi6olOeAtFro%2BKtwDx4Pz1Iso9EvWKSzBed9CwnD3Sngp13Zx9CnP3JMW94173Sw3hNsDx%2FimKn%2BtJwNL3YmHiQSIbSKHAlH0jIvlUtJOeRfeASigy0APqr4TpypFfl0wgTfj5EmNZ6b0xCJPLJZ%2FJj8qzUK8i%2BsHqZWV7xuDZNvMEE63wynrEWzVNlPnRn%2BUVTPPS%2FL3i5rrhA8W0GmGasBF%2FXWfvSqRhAxkMDUEReoDRzMvk6ih5W%2FSwRzp%2Bf9jQG%2Bc9xLSi9eqpYVFOBm%2FYDR%2BCDEU7WX27lFN9pkRmnSJX66wG1y7JBLBogQ1GyH7VKWRC5HDq1vpxSf198k3AKrdQ%2BYui%2B73GbqemrOunUSd%2F3gwlrW79Cb%2B37GRicxeybIQb9S%2FsaVT90d5NKBX2Jt37Jn9VfDaSz%2FqHT5HOWMBUpPij3jELT3IC8PtGkvF%2FSzAJ9%2FYyQHM0Pu76YntlAeDiYN9J6Wh72WKfo7WmNZ9IQwD8i92MijYr62w9Z6OPk0q%2BhOFdrcbg4LtEg9uatDQtPfDfav9JBpX1m%2BMwQMb7U9TtqG%2FvNT3a5063Mmp95e2o0YfGeuj3sHQm7yu1kaCrscP98UjENCNBgvDRUMH5Q8drh6JeC1GoX%2BKFc3KhtOFeGf7j%2F4wy6KgvQY6pgHWfFF%2F5SBmICg4HNEj8b7gfD7xsaI0jOb641kRhK4Gdmc5xrhSJZhZEcjxjTtyUXAxtW0fBAkgvvqaDaWcEVfaHYSTuRlxoxEin0g90oFO1Av6CPmPD%2BCROGc7Oa9jh9DfIKoBq6F8T7LB4KGRJsmmbAyXJ8MqkCHl9m8T0jt0CBKOXgAH1mZNSWz8vWH4QcqGJUkPs3xJw5%2BSQN6txoLuy5cqytTX&X-Amz-Signature=52a53373a73e4edbcf4411b6a84bb66663fd9298001dea8adcf65f97a61b1019&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

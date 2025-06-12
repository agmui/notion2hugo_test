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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UMUVHS7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIE4y9ZwcV5OCZCDUCzpRb7DQIS3dREh92K22bHrH5vFPAiEAmcE%2FJMHK6zlCpYeDTNA2CrGCJkXXlA2OzvoinGyy2gIqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWeboFNdGgEQ1MysyrcA6P4FMixO%2BqtmoXAhv32U97RYU9%2FburzSIG2IdkjbAMiknDUy4VpjhcHtjoSxEzGxxF2snqtKdCwKV3AzW%2FnTFqpBL066wWeim7cUoFtMYDfw0w56Epy41eHidqnaT9LqrT0m0Yc4LLcWB3g4nLDXCg%2FjGelWfpN2tlDX2Y27AllTZMOo0hyJAsB0%2BbCRbj0CbAMIA7%2BtRddwxzybU6ehfsf9WPNEcGEk6KvybhPDUbVaz2d85dg7OIeZ011pFPIL74gWkpsbk%2BDnwDcwISESlDKBh%2FUi7gAFfRRE41U8BvXN0L7VOqmr87SA4TZE7UjzdNJ3z9nDxkvGEAFlIlcK3X5DpDefcT6gfZ8mzhHxZZn3oC7lv73zIFjOMNd2Q9xUgrqlH1bHD09iVSP2qRfMUdgR1cp0YItwTt%2FBG2vtXrw73hyosN8N9%2BDowx8ptP4xaJBXynXjSxlkzu8fVXJfTBhOjUO%2Bw1si92sMko09h%2BS8EEO4rgC5wDSRVgI36kG1YPEJZuavOSTMYbm8OFLJUm%2BmR5wdnlHUXwFrk4X8yZZnJ2BNAZa0TVkKq0bps3puzco8u9ekSD2ocS%2Bd%2BA7vY0zPX5c%2Bo3D4mJrm7Re4Jywa9%2FyHSUwjuXabbAhMMXAqsIGOqUBQsQby%2Fdg%2BBvDP8%2BRACLE1YLg2IG6Bu7V8t0kyIrNevg1LcwsIgrZsW9wWtyt77SxBrdTK3tf9cATcdybkbr9MqMTbF5FZSvxNkwh0RCslAWYSN5Cxr77B9iBDC1L2pn9%2FJGx8ObJ6ar3640cvshOrOpFN7eQUQOP7Z4Okwh8m%2F64zCpLTHdnLiOxW3RFThxxp0wdYGI5onrnZxztnIhsSVG7hod%2F&X-Amz-Signature=9b832e8ef3113e193663615f02d6fefbdc0d8b1e75f330a5993153453ea6452b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

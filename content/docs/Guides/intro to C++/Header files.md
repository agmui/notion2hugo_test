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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7D3SECN%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1CQhxLjvSKAjf4Wowj5qc306GKqSNZU3jaPKQmhpOgwIhAI6R9ZdKgCY49bt3F2yX7AZ6GTE2dudnFPOJzjzV28cSKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxps3BalTkQcyLH7mIq3AO5xfZkRBvpfSus9%2FmmSbLGsuq81WzB%2B3dMFyM9vTNvHyzVyHUtn%2Bcg%2BEwlCzcD9h2Iy%2BTAiA5RfrH40fjIKIAKAtKr%2FHH2vJlv62cy0ymaLSmpqHbm7soKb7UBGtw7%2Fd7LmYyNVl6V7gqAt5pI6ikHc8AOB%2FA4cqGS%2FjYqkyphDGCkJ2o8j%2BVPtAqc4kRDipcXxzbKAWBEW36u%2B3ypJjlAZoAabS1L8WKvNfsRzrLGz%2BOFw39mYuDmlw5CrsNQ1sfvrJIfPuQ0r8HLn6vpl5D%2F6AW8RCqUyZpfKuzptJf4NTbJd2prklhcLkdQW1HfPXLGj18fKlICEEMzMr%2B9m%2Feu17npO54Q7uNQueYk8Xdo7BDWZTnDC8Ss5%2BkqKABhq9ko5HLOPKWrM3EaD2q2Zvm%2FqkL%2BAhHdyw9tkvjIEW91JdHyxv0VFQHeP7fcudP6BikM0j9voAXDSqxA%2FhYCaiPL0XdDWIezkfhMzsioKgqDeFJETLch%2FaVoMzLlmflBesYhM05%2BLQH0V8E8rvCKll3NMQFjzBp5dxfWGzyev1LjAxeBpdBc6hOWa%2FD3BRvCnxVqVqvqbzl5p09MQg7%2FbpUjxz%2FnxKzYSiFwBWZvZjv%2FxhzSiDi8ZhUM3GhcbjCxx%2BW9BjqkAexH7mTH1ovJLUpkVjTfGRwCzFtLo5qxob5mrOd9pXEMo6H9JcyUPz8nfccL2KIQOQGRIxDnIKBMsk8DI%2BWFyBVmrEOeAPrSy7Z%2FlkwKEFx74mw8zU3J8BT8HzZriwGUAQ42yswRqE5ERo%2Bp21inVFTbhVhXSst7W%2F7AxYCKrlScPOnaPV1PrJtZIFEHzIbT1h%2BMNOKb%2BsqUxh6zuJsMAJfIA69e&X-Amz-Signature=35c87d674fa87831b50fb5ae518abb005451b7b115b3717d9217d9330d7a5522&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

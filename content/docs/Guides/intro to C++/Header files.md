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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFYOBSF%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCICoSO73IiYEpUPnJxd0SmcVMmsUXwXiJMHf%2FT30ULkq3AiEAkz%2B1PbfmHt3ZXlkqi8zu8TqmbCFHqpbHT7d%2B8%2FwILI0qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyDjUmiOBVwBB8mnCrcA%2Bvoedr%2B35d1FCV04GWrftDwEhUjzlFolymrj6p6EOPL%2BrTW7mPBped9d1uzbLRJw9bYa%2F3TZS7eD4n4bWqv%2FILQouW9T%2BF6rsK58EVaCnIAjROfpjYL%2FacJ17rEObPO8r60PxOoYyQFRjL21R%2BlsQOuAEGZENjfeUPz5GueyQVpjGXw7gtaVSFV4jzkJhM5D9mWuYrjJYEXVCueIJ9RH%2BH592IwzD2YO89x6j32my7pCbeBrxIECHb0bv5XeX791BVqs9P7Fe%2FDDFG52eZ1ID6qX9oc%2BtO5Tu0GmtTQWdSQYPoYUHSn%2BWvOYbmtrZmbaiOVySkUQa8OjTbMYS7Xus5Vkk37%2F2MuP7tPm3K5LlFq4xXAC0vssaTnthHS%2FOqIJOFkoFU3ZpTXxDhMDwRIwIoMf7ppvRs7SIYjJiIvBF91Knd%2B1WXzS9canE7EMtFFlRTE4zFaaCPUnsgai%2BMUb8uAhymX3ls8RcXUpZJjMdVvLwKmBsk%2FEOtP9m76Opjg2bQb8Y5iKHWYLCwkdtq8fFzFHEygNWhhpfSM1ZaXoLyvAgFgMCp2RevW3U%2BN6KmyOaaNEZ3B3xFaT%2B5h90qYOTgPmzC%2BkxmO4%2FJOYhrPQCfb24y0kpU3An2NJg3sMMrYl8AGOqUB0yeiHtZrK92Qhl26zZbZjA%2FbzRMO26hxm68Om4dX3iIHKHew8IuVUfJ%2FQaiq9xnO%2BAUyJKAoVcJCGLDgXrDaRHyYHaBRSSC5Qoa4EdgrrAQC8mRCNMJaOunbqG4sJsJbcMu3BM%2BnjvGyb0llvtfQMRW3bczvCd1zvADPofW6M%2BvdGHBVK2y2oovJPFqEnNhhNBC9EpI9nEuzlg9Ko2gksEU%2FGI7L&X-Amz-Signature=8cec45eb52eeda9be94146aabe43675a5875ccd896a66836185bd973ca2c8c11&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

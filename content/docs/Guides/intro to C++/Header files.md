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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NGC5VAF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIBRdjSqflA6FSygy83LHQ0loV1xqHpc9yPaKU8prxZw7AiEA92fPZas6DCENBQO0%2BL%2BQmOj1apgskO%2BHMeM%2Bbny8WJoqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLqBEnzv2cbXxIv8ircA%2Fie%2BmbT4%2F9hiXH4NQe4ENKKvQrEkRDskyJpAinHeqVgNA5kZvzKCOCxyli6p%2FVRWgQVK06tICZ6b%2FghrKf9GTLGvkDLK8dWLketc9Dxw%2B2hgcV2oqV1vodwXrcHEskg4Q2y6kYOcgbFGKWOK4PKLM4CmghUmPAArOE1JsJ3dkH7Lj%2F4K2WtjC6WKa9bCITM0OCbxY3HgO8r4twJlppsIOXKfalnhJR9vWZCpm%2F1t4iyx5vFnLJmGWzo1e0sZfdt5DZgK%2FdZzJMvVpLuNfucO1apKJLwMxtcrOeCeYC9qDTSPn%2BmDzrH80qiDuTIOfx7sw7eZy8hz1X%2BejeOwAHCXtHS9byYStGdvLiBAZzUEeXRxpnygBZzUZuPaynQaZ6TXH6eJtOD38kY2STaih34xALWH%2B39YDmi%2F9lsut%2Fr0X%2B1vSpp6azLOOCCW0%2B5WfjXcmgpj%2Br%2FJDH%2BzQ9PLag%2FUh6GNIk2BEZuWUPnvpXlDIhH5Q6KZgDYmr7qACPwFcwCSKz%2BxMIp93WDTZ9EBdjIb0CcOgyBQU126bGMKspZhUdKUqAIf48JPvmy0udyQ0eABejdkWO%2B2tGdM38YMyZ%2BWJbXgIrJaLDxU9qwwAF4HBpqHGbmghpDHMMHjVnFMKu7nMAGOqUBCoTsO0XLEmWHLqoRXWPXQ2QAIQ8M0iTU5VkSPFprX2b9HMsRI8o4%2Fn6pZVb80kscjanZxNrNU0BigVfTwAn%2BUfDia76HePWEt0%2B46x4Qu7Jl5mzJkQ%2ByEa6nnTj5vg%2F%2BceONIqIkPft1Y25a0a2WBjwUX6uZ46XbctaaoJxlWDn55FLVHcsDbdSccWWmvj%2FK1Sg94AjfszxIkIRTxRC46ik0XURi&X-Amz-Signature=cf747a467ec74455fac730feffa0aa18f306a195127fb78fc3bbd1762d571ff8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

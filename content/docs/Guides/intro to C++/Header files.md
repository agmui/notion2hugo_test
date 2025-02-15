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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NY5YOH2%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIGzEnE8x6kqWCZINdIcyAiX29oDxsSOkUaOtMszux1BLAiB%2FH4dKW4JVcOv9nqBuqCGGCk00tYF7zmbqVVZsIFa4HCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMZrdNEwPlRX88p8vSKtwDxo0PNRhA8oSKIqpM0w7RZPIMOklirW40yweLReoaLOzuZj5czb%2BpwOK%2Fii7l1JPgegNtJUNvjFei9rukIvlMLumxeJOP%2BU2b4d3rgoivwJmwjPKBfHeYWGi4DVOrRb0K3Qk4M9RSVHABmDoocHtlPam1niVPLDGvkf1ua7uOI9R%2B9h7kLk%2BCVcq%2BK8H%2BQHqyaHXGqwhNgO2%2Fii%2BODryQ8dq0VHxidRmTFVX6BfuEYfUJ8No7SP8jCn%2BFQ%2BmR%2BwvQAM24%2FOJoAwM0Fwg67mSkqI5ZVUiKVwiJZDz8wUVSZiXsDVJw%2FR9F7t8Fm32mnzCfe2JSAvzdjX8riFDl6MYMNwOh4hMlkJiUq4Kanyk%2BcU6whQmssq%2B1sXZ1yIQBRwMVuBJOczbAHXH6yhIVPOl3xx0X2Dy29VumGpJxrp%2F0PRURfOQzva4MAId%2FXqqeMA%2BjYkvfcET5SqpxZaq4A2mSX7TXCsjD0rC9wb0q%2BHOONjDxhNQz02PDDbRDPyFDRguw9LJh4%2B%2FcPQy72MzKrnfSUiaafLX7orYPc7CPnNk3py%2FNv8SmZDGx8%2Fey4TZBGY79d5HMQEKUzA0Q8xFKby3cW85a0kZXGKbXONh6Zq%2BaUk0QEskieh6a%2BW0JWeIw54TBvQY6pgEb3Ydxb%2Fzrfny1OIG1csJYIVpatL60J0yQqezmBlhbQrV1trQTKyYshSLpof5iGOJaVbiJYEiUkb9oRJaba0rweF7hDPYAaG9FYUUBoaHWyrfChCJK2HC7CWiae6VbzBsu6Q%2B0iVljDMo4geKIVoN3QcjVX4ZF5zHHVuYy13cZwDNkQ3KMBdBMzNOibtgTewy9h%2FP0o31eKQ4ihEn9FkmrFGJE0LAp&X-Amz-Signature=da393882aa6356e71f867ddc5a27d041e3e33a5606896be3b899543be04933b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

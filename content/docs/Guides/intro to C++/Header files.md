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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LO4R76C%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrGBMvRojwQHzTE%2BWJShyilDVY7nqFM5Cpvh3etYajqwIhAIvPLNR1PW1FAjK1kQTIh0%2FjdQ0GqyEqUrr7i%2FiDJBEgKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyZgU5pZ2Ph6k79dsq3AMk1mh68Cwh53fgoxJwCO5pu5otsxurNtu92%2FGB9ck%2BLG9knb%2FbH6jUW7bjGUtUmXQJVrQr1RRJIjaUahvAnhrALmlTFdfXIPey1drDnyviknVguZc7jWPt7oMNfxVwZdbuU5iykiv7RgeV4FX8LW7Ow8Djb553tJ19BeZ%2BOWH01%2FLG1YbCZhADpCw7wj7mINovLLm4u%2FhJW5KG4yA30aKXzKTtWdotqM%2Be8wkxAuFj8HDi%2BTDywOTpNMFlIg3GRvDtKZNMtohZPMdLF5wuXVIcEqSyqWTmny8m0lOErLkfsyyJeLo%2FnXSmJWyjyYfJSpi%2F%2Bcic9fW5GiDH%2FdnYuA%2BaGs6m%2F63w0Xu2WXHPnwSUeFRgG%2BLz3UdslLj68ztqyaZ6JkuKTx3Xx5m2E7HKr%2B%2Bh%2BU6d6Gq0LPCMNw1DdfMsz7wBBYKAPXix6%2FHCZ%2F6X5%2Bxm8BUgQ1ZLlbNXlBcS%2F0t4RQhgpNVYo43GAwXlCCyzH0J3fa18qqovKNSXrvsahnOTHYBF26GK8A0MhHExWAsV2ZCXp96bioVl%2BurlCU9cnX%2BSKVyb4jCAZxB84lotSgBJU9rAEDU6yTYjDAGyHCBEScD7UVxw34dOAolXUuvItIXK2L87QyvfU24oOzC9%2FIzABjqkATgc6QHKfbgM3tvyu2trhr%2B5uY8ZJxfJDFtipzYw7CChBoxiCTitx3BEbzUZG867YFjclupjnciSJysCkdVNMSan9oBYTtBAft3%2FSNO6nmCYbg7wRweWq1H7RPPjPFBK6jaM%2Fy4n9dweuG16MF%2B5Dbz17O1NaPPXXJCZhF9%2FpwO%2BkB%2BzuyUzAihz2mj85ANf0BMmGNcjEBOHnJfpKXhkYXjua%2FlX&X-Amz-Signature=b09e1abc57d3c028cae08016a76114187865a8b75ea60dfbf99d0aa92534094c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

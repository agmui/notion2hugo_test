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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TJZG2H3%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYrSi08je4ebfYYjJoy0Jd43fe669zlCNy2EENCvVqrAiBaO70GzVYrP58lVL4h5cbgLSDgh3M6iafW1tXfQvr33iqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpSYGYYp7EHVSEgFVKtwDw44wfOmWprDTzGPJY99Y%2FFoiFz9%2Fw9%2BPEsfDgasNq2bbht8TUA7G9W%2FcdEkO1wmwcEh149byikz32TNQBOW8YYvmFSinC9kVUgGnMhwzbA8JdmxJlDBAZJB8PUoa8XjkX%2B5RuA9ChNcSo7IrpI978pJDaKL6Sg7yuRl2dxgszF6VHZdXZZDssRfL8GD0XlsYgV7QXSk0yp3XjuSTjifYSgbdg56HJSWspgthhvwLUZIq5sTInto0SEKUTbCMbeaCsWGTQx4vDdxpsaRlljogpcVcRKg7WLEEigYWkGY5siwgI6HJrMTA%2BpslGlWVvlJx4JFSE9dEfaUvhNknK5sYB6ifS6BJnYbNdS6xQn0WJiRJNVpot%2FuyB%2BUwvXbWELd6X6bcG6UeNygzbXCkB1t5ZBtkBUItkt4iZ%2F3iLADN%2FfdgpB7d%2BVUPK4xUBV2H5AEaeXF8d184KNvtCESrBMluXc%2F1GJnyyHD14oJ9LFDILm9ily%2ByZxmQ62kGJ%2BJ73Y3lxsPoaifQV%2FjJXeZmNgih6Ft5bpn%2BVhRlrvScOKv%2FVOvU%2Fu%2FhO%2FcsqXfYgpTkx1dwcnSDlS1IPlpSsYJQn6chddGs%2BjQjLn6jrQaouqwPhlLS7B2vd9wYYJS%2B%2BVww6NmmvQY6pgHhERLk46%2B2H8Gb1l72xVlIrpuhIKzut%2Bd6L3MEr3BOp1zuvaN8Ago%2FOowl0XCzAQgJ8prN%2BJZiClRvSusd0a6R7RGtolHafFW4lfe4kdsO1F5BGoWzt2VGZ9px4Om6vsMK3qEQ3uK02C4n6OzMj0B8Q9eDZaldesWNMaDbud4DrTc%2BJkpXLTFNFFimVugix1JsWkftZzgPVIhL95uQgqhh93Pq8%2BsE&X-Amz-Signature=f6dcaa3fad31091c5b23290ab0ccb9e980c84c83c88302dcd137f7914692e863&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLD4TZQS%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFzAqTC0src6bmQgTLvnCkyM1wZqcdcHguN7A1V9Ytu3AiAPwtv6%2B1eBbCmzqLC37kk0Y3Z5%2FJAqMA746vu4vnp9cyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfiqK1uBNeWFeeRaAKtwDdrs8qE1QvGqcnrSYGt%2Fu4RR9YHyuQsRpAtnwdqT4fJ8m8H6f9%2FKHtn7KpxzIEwdBHp94Rbxu7zkknKznrRNL%2FfL084%2Fus2efC3ztH1FcdbsaH8mkkHzESKJbPo6Lg4axPknXq%2BR10JyJUanpMsilAp0w1YYG9S868%2BAvtc3ar9qjWjnClN2GpJstWwp348O4Hn0KcNTR9L745ICsSa%2Bf4oywIHFGfY2xNM49QD%2Fk4ZhVhGkmvxW24Mpe42kvvElfcocuZryOYmHq4%2BQgflMwgVR5H4TEMkVpi0gG8QYX9IxXlS6fgQhVOsTpdJZodw902Xspe6cNi6Ozg0pLfcwZnqVB7b2cI7xfEynHX30mn4UvjWS2fDzenLWK%2BJsMBNZHR1RzyBwt%2F8YaVnt1w%2B3PaoMo3mW81bBC3Hxz9Xnl4uBpLrasasO4CU4cKHAnYPrzuOL96ZOoIpb50CGYBba0FjGgioStaYxWErCrOhXuYnMyHCZKR%2BYNTq9eZWz8JDFXmpaHd2%2Fq6Gx%2BsKwV5IK77k74zE0yVSj2EI2YSzRTMSFiYgrH%2BJx36%2BhLkj3t%2FdeOGsBvZjuttir9isngnTMkVtIZ1NsD2UGPKukUKKRiTODxEo6v8l4WBkTvt0Uw1YmtvwY6pgH9BvU4nfBCuzg44x8Z%2Bp8hTdfCvkHpUfgopq%2FngB3JHTUrQuo4%2FjVCQTXimeR8sgHYth2otSv9Te0kxroWuEBXA5rcrxX6jjLPajhlWQV0SuC0lAksb5cHzjZR98IfbNujyO7fjFEzbJ153dSQcelgVTNKuF43EL%2FVr1PwrEf05HEwNtLLrjbKFvMJmLL2ilyeO0N0jfdk8PTGBdOpXkDdZ1f4VO3P&X-Amz-Signature=0c03d294337da6227df64c0241cd33f06ef0c5142ca2a7c9f6820dd3daf23716&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

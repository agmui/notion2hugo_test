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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKP42IQ5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHTROEFLKV%2FwLaqUBGrGRzBmgR3ibQ8n100t5Uhd6ZfgIhAIVa7OG7SrOMgaMfcZejUmvsc2qUfuqaBWwb2Ldg%2B6FLKv8DCHIQABoMNjM3NDIzMTgzODA1IgzjoSOR81a9P7KU5kYq3AOklR%2F3VHDrZa95AbCF7xsv4pZVrm%2Bm0u9iIOh5Tlk2vSoFNRrh1zYquXS5g9D2lslv7tt%2FAPwxUbEdopdgEKxkC%2BMzFz%2Bxn8dva14sNqPjfK7BO70WMrUp3KiSCaQospr%2BxbQ%2FfoUnq52yuXFut5JC14MQFmwB2oG9%2BbqkDPqDR2YFm0JQAQRnMJ3Fnio1s8N9L6rA54my6E9ffjnVFQwW6584taMXpNfV9pphurG%2FMd42PpelRsAZpnENqKYWlE%2F7GxUihOYZTHbcS90r8FLZQEvSumVVtRHeo45WQOoh9EtGDP0WnlH7Zp%2B%2BYiEGFCe7Y2iMwR7EewxdeUQ%2Fac714VZMU1weUzy%2FIrYy2dAfwvxTPFrL%2B%2BsN8%2BmLy06viLuM9Eas6ot1xCZb4YOq3v71o%2BnRgKvYS0Z1ju5YbGrMPNGfGEz3aE7NIwfTInc7lVT5ZaROddvUT4VGwufxJT7aWepVPzdYE5UP63A%2BGH4b3wtZgKEHjXbIqC2C%2FgVmLFt%2BRv084M%2BKnkRhL4wn3NEAWulmDHy409qFzOjWuKI7VvvReEAGdwuyDjxzTWEmtTfVLYa2rpD6lqmfw0XJ4F6pxpKV%2BwnGqWOLZg1JHyReBBVyT3NB0AxanaB%2BpjDbu9O%2FBjqkAcgTITtMoDWtNhN2oiMrFUBbo%2FgrcgSBNbtisJ9G56%2FJY1KdHpESp74c5YnhPTBOzzULCi%2FMWH0vATsZYDV3uMqhHBwH%2BfwIpdDuP0HIGXqwKsJR3IZwMzHvHIAAiH9fJ9gRXJE0xEYC%2FeUxl3qFirh%2FKWXz5ISlqAceEIx8tSjrwvavq4LD22hAxo32NZma4rwzMYDj4vAsz%2FLPHE78yGlj5Hzl&X-Amz-Signature=13c22434bf4288142cf59648cc4393a75a6596894bf26a7233137ef29682d227&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

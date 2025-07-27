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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQ2O2B2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCBcQ3tfQ7%2BgM8JHTsD3oL7eULv18h%2FOeEyZuLpxtJaEwIhAPCqS%2F0L60U4gLMuc5RIZY0uEyExUmS0a%2FgPSUYNHgyAKv8DCG0QABoMNjM3NDIzMTgzODA1Igw8fNaRVs0PA88EFhsq3AMWxGgtYsQ3WRZyCWoqhCl3%2F7ZQx51m2zgVrcpsih0TPTizJDm4u4PWwHi1ozp8q18vv3dCfdOSLU90hZZAm1zkgpyAsCEn9ifpGAK5QdKu3wDduraHfY6pyH%2FCSdoA2GuMl01ELwBVPRUs09OIAl%2FpRSKeazBgXmckrArGFAeNfOphx2X1pShPIMx0nKW%2BIDBThrPWFGLu9Xcsx%2FQHrLv2tGTmjIElwujxYIO6xwAXVSOSb%2FOOc6uX%2FUbeqTqQjQB7bOQfXXa8B7hjHyCSSjk4dJDB1ujOPemEJz92Ry4PW9sb9AV2GsCtixFInHEyFA%2FE8h8Owks1CWTyqYjjJ7JU4fWPQo4Q7onnSDBQWke4Th9H1gt0LvD8ffMOeg0r0UsjPiaYwi0ERWe7AAy2823HgazmsMczWZw%2FiR%2F3XU%2B%2BaLgcD8n9apOgLwB6eI%2FTjOcyYUdWrQiGQzNBHCthzh34IMydTfyR6ztQLw%2F%2FpEHcKBcJZ7fDLvySj8nZGya9cHeUfcULpcdD59sHHxi444EdMl3fXDO%2FuxhgcVD8bFgdaw1axI0S4%2Bfuhi9kHSn4E3iYUWwMGxWNjFP8XLhDKsIuz5P58LJ8y%2Fq7b%2FS3nT32g7d0sB1JmSXIeKuWmDD2upbEBjqkAQP9C0IDS04gqRqBuCm51A8dBmLhdNk3y48R9WfAaA%2FdxtFkyt%2BBSLxYo8r6dt9JHb6M2U8R4TVd0%2BvowfFMKYxoZK%2BxVhAOSdqU3WjR33yGYNXzC1pv%2FCTgHKps%2BkR2ve0ZYCqK5SPLn4D0vgk%2BCVcbMDUEOAdfB5KDbtNlQQpFck4gFR14FPLK9cu627rDy0cyeVbjVO9BcZgUfxoX%2FHHaw%2F3R&X-Amz-Signature=846981f9c4a95fff2c59503a0c824cf826561b29f8eb5e6d85b6291c2fe5c8b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYUWZAX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFhzJSPXWn1dapsj7SqTGDhq7zBXCr%2BydzU701S9F0xlAiEAspN42j1REmnVlNHi30HqfEdNV97MWpRvSmzerBewgEsq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIH6Pd2aqgJFYh4ARircA8AU1Gidc9KuxzQGNMDmBVzRj9HkNhKcRercrqE8VCUCGIZ24zFnicOPbBf70kT30b3PZ%2FGfGKwxrVCTNFcpl%2BaAOHW5Y2OjdaaKvwHUkWn0PJUzHLDjtd2FRBfVDnw1%2BnXiMnXafOtIAQcncP3Qh4u36kgW92Lk0h8go5Uoq%2BBvkcNaRh6mGN9oU8XbhvpBgztxT9NfGZLPgqT9OMUpHkYzB9L0uNgsoFSgkFgAcRWvkQxWTEi1K9W82hK22rzmRXXxdJjzTFBD9AfCE5WcFQlb1gTzEvMsm3i%2BTF%2BlVzKeFDZpbBfXljr%2F6FvlkVaVzqRCGIlWLrbNvAKKqejpNcvb65agYd1nxcAjYT6soOc95XfOZK%2B56hJazUggurdCr%2FvVOLehhydJMiXpweo6604vxhwvKl26yJM5YnFV1lJhj2FbY6eD3wKl5i4GsEyWaBz88tbp%2BLMuYc9Patqjqr7lBBK2m5TLW5MQoUnEq2MwCHY%2FxvDuPlZQJxBfEMGNFvc99dBUbY29u6xXbnhAkLLWO90BPn3%2B7HkFHU0Rk06a515DghsxrNKIVpnPDfOJO6re51MinwqGrG%2FARAXwqF74SSIHDsH0jej1%2FMRI6RUua%2B5KjIBXbtWyKgZTMLO%2Frb4GOqUBn81tjq76CYVrQKVXi53WCi6%2F0ayJBFdJ2JPCyfx29rzr4iCchVKPa%2BYTP9BIH0cwATQGuO9WZIQ%2BhvnQ0OlWQSij%2BleSb1gvTQE%2BLv30cwTJvO7R3zqVkYo11h7nfcCckN6ueLtt35tCg%2FbgJJ5TsH7pqlyBQ1iYeFasfLk1TQ0b29Rew57FAsdtVoVVzq686450yPerhf%2FJvw12IfHOKK2LHF4p&X-Amz-Signature=4cb7b7d6dfd120d5e148253f03f6ebf433ce89805b9ba385d744af4429033046&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

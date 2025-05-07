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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JEHCNRI%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyNRnxtd4rWlAmWY8RNXdsusM2Rxrl4tRNwP7%2FIvAV1wIgdxfcPDBTUbxNpNw%2FHsZKFx1h50UO%2BNE24drMkr8apm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNiy%2FgydJfIXkhklfircA8Acyat2z1wC8NGOB%2FLE%2B1jJIV7iWQSCMzl2ccXH%2FkzucSQ5KZiEfB1d2j3v70%2BlFXsKD%2Bc%2BCA0hE1Dav35QE3lSdpOBlKI3aks9FOZgjz78x7QJoz6QPj4r6V9AZcmBnoqBkkEAfM4K6MIHEq%2F%2BdWAu5pv3wlrDb15UaGQVxtjSODO9c%2Fmt3qcAcwTALO2QkVGNZFOypcD6SlgIJVDnWlCACxRTSVbWv4%2FYZW9vSPRpcAuAJnYR5L%2BQzOCSU%2BHsdEtX7FO9WnlQ27ioN7V4NZjf5jXi3FO0yf0ZTZZykxV42fDRWYEAzZOJgNQ7m9gp57yiJiEP8cOWVg5HBkTozfAkM03E8Ua7tpaNZeDWeq%2FInyElx768SSZxWO9AZrM2nztsTiRq7muvAWvoDJesFqls9DakKcL0Fq60717pfb%2BGRINHkQ3jQER7UOJV6DaZ6phg%2BInGoVjy6703%2BRr%2BRJyouQb5Yj2RAM%2B5t1hl9ei0RhJxN4pG9F9UoDGOMZke6Y4ew6zTRSPAVcZ%2BTkTFxgjiE2BoOnNR0E3ikHsKmEYnNF%2BKdiL9mik508TWKrcmWIZ6EBSWiYk98VgKzQ0R6Ci253A2PYc8jHi3rKgknXCbvnmuaTjmTYOl21RCMPS47sAGOqUBlIHWni7lLSWO%2FTI%2FLJc%2BZl3crkhZbu3lBLjjk6Qs1SFHulWPGX8%2Br4ircsE%2BbKPdSToLKSovd1ppHyEXe7xRvOIvV4tcWVt%2BnrHCI4DvdZfQNVJsafbdkUG4pyEpzIuczwWRMsyCEi6SFK3Iuz1Tw5MwKmz7l1INB7iuOb8vgTXsA9HcvHv%2Ba8QDWwdC7ZMpgACwyEFSt6wHzDJnTN55wgUaB1On&X-Amz-Signature=aab621849d8ca55f4db4ba95ba6a6a82603ad59d63f97e57b1cf7e888cea84c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNMAN7ME%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOQVerBUA8DpX6mflqwaq%2FlTOPuVEgP0gW9ZEQ4Qis9AiEAxxpxeDQNvHGSX%2BcLsmtm9Dc9E%2FEtJpmptqLkiiZrdRcqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpPzYTM4tgzs9ZLnCrcA96BONxmG19YObCMeRUkvsNUXDcGpgndkFVE8CZNlrfSGgm2%2FzhbMmrosxmApNqsUW%2BdCESXQK%2F2h4DEw9EodNFgOXoWgDwPAMUJPiFjYxGWmMvzYT6SI1jZnwPY%2BqYIQ9%2FuIytCjKJ5UwotyH9ZGclEKW%2FWK9d3PAVozGaU%2BRkS24wkHoZCWNwXucXjAYmCAwjp9sSvoPL69BeiPAB4hfD32Elp3PrcMIn2VVWQZpOFih%2FS4J5KiQofU8EBuhLu1nVvqCFRqapkevFxeIBImV%2BjGbMtCRbq2chq08rqNv%2BMGKReoLo7TBOgfG7yls8xqBK4LzYhuUIfcu%2BfK%2Bn2nK91QuD3%2FokcVniMoo4%2B251IvkLeARvDuy7nGmEwf%2FfnrCHcdb1VuDhrK%2BLvVxtuoAbzQAa9%2BHpYhhd7OaW2Ah%2Fcldjp%2BTM9FiupJ1Rv7ZRIjb1MDWDtfk01uEkjpf65KMXO8IK5TZZ6S4sQLaPFfvytEsK2LHK3B3bh6SmOIJ2YVw0vQi478hJ5%2FW%2BgMrJ8Gjrg9UBR7%2B7j9uMDWAtwgpxja%2Bn7Yst3l7KVFvSwO%2FtnSl%2F9qMhlhnZe7JDrfbq%2BktaZtfO3idVHuCJ3D8qoNVvzOwsjMsmi6JCzca9RMOnzkcMGOqUBX%2FpqVxDSaoJ8cRxREat9nW7ikr78wOVnFpvGA%2BP9HkGDM%2F86SdNCscqbY2QV3WljlrF%2F1pfknRulNByuUkahYxk5VThK576eIRRWHWdCCKiTQsKi7lEm1rXw1BBmanT8dkor9XG%2F2JjQaKLBJefK77l3ugwXYj95IurnHjW%2FGwVrkZqBPYjzwYjCV79hVdsueW7i%2BNcw9PqtRocIjEaSBMNXO0E%2F&X-Amz-Signature=9feb1487469c242bb962f164421f2e2aad7a1641a01ef0d93e63e11135675307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

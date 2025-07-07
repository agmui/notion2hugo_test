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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6P72JGS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCID3cj5RVVkq7Bq9YGYL9%2B7tBDOUPyLDi7VcjlZy27196AiEAvsAOkSQSwRFFKZDpFzYENXeRJMJOo6vyBxotG6V%2Bxjkq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEYzfJKcNtS%2B5pWDxSrcA60IhKC26NIPFsNdHcIiEV10eqHIaLsrZKxLj7viKxQ5M2B5eZFLoGOBBZYjv6pmgZrexPqW8Dxx4SC7ZqhbKnhoVIBepj4yg6Fc8sRtxYwXdJQD%2BJ4WqfCGCY%2Bu06COIsADeuf5p9e%2B0va6kJNRYz3MEfDeSd322w2RYJMxZaT78mnmBG23ISEthS5ejGIlfhYSDyiwCt%2FeUHaNsmXq%2FIDkgGEygqa9cRNxOXHtqTw%2B%2BCNcCVqeZZ5zvdDWEpC5EDPOEZaFcStKXfx2HcZ6U1YwhJbt4ZDFhTkG9EnGFYXi%2BSB8KvoUlYQCjJct967Nqeh%2BaRun6bM6FH2ZI6%2BW82PFNzu4OJ%2FfAccg1MoTfmQmtoQt%2FKgn6Dlat45rQ81ZI4OKOSQP2Lh38tSw%2F1FLQ7%2B604UQj2B61GmrvtM8szO7ss3DH3SqK0X5%2BP7xhFQBb14ts23pupXBXGRIxwQrhF%2FFYOV9Jg2YgM00aQ583bjDNSU08dc5YyhFnrR%2FU6CB4Iagrlw2pGBSn4FZuv%2FBPsN3PrlJAWrWOiaE3bVitfectPuX27obk3WCeO3jzbyQOLBa2DxXnSXYUs4lOw3UjKX9IabKhhkKZx2IyjdrI%2FHMTwtfzD2v%2BblUGRVKMPPpsMMGOqUBDTcexak4g4aDWbYUAA2rRx4CW2vw99S8DiFOun9O15HUb53%2B%2BWKjgnBtdK8uzGqGXasVCyDVAAsGoySnE6qJYhjiIGcVqee5CABIOQ%2BS1OQFkM4WxI7IzW9tkEhFHGaxVNHdMqY6KZpJQ%2B%2Bn0C91ri75ySsbC0AX0lhRK350wlyFg558%2B0Kw7zR1PCXmgaUa83Ak2pWBK%2Bo0pFbwSw51zNrXu74U&X-Amz-Signature=9617a17a8c8376d79110fef8eebb23a35a5f970fd6ad0a832f9ec48893e3b01c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

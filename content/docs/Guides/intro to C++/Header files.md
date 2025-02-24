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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ENZEIY%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBNRGLHCeEc9ZPb%2BADcZThB3%2FEGKMLBMua%2FK1CSDdrRAiEAsAVSoyUs0v7aX8h%2F501oA24yVLncAbZ9j0fr%2FGL7CdYq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDC2V96Q8vr2JBpw9GircA4jFBL3LSuGiH1PnuzGc1VBywTRRHpbt%2FIUTWlQVT%2BQPJTLwOqLhczX2PE2BDM5rQSt9xWTCVpLtvhZP4PE%2BuYRzmF%2Fm5N24pyjwfcQwI1%2B6fBOQ9fqcTheu3SRpeLEHz8w3gfye77dnVpJW%2FxzU9EMeRY717AtQ5h7Q9YrErRkX1ZGZBzG1d%2Bb2KY%2Fhq0QvOb%2BNE3U503fXd2xG1dG1ghqLnF1e0SNgby9qXALessjnKScQbgijg8gNjkeY52cmPaDLVBH9ZUEtbm%2F6nHn9R8TthhOFsNAnV3TL8qJJRp%2BsY4CbZy9Znxg6g%2BvpC2mzvr7qFOgb%2BitRqBdk4lSigVOluymcAyWipZ0BFkYWCNeND%2FxzSG7xBIQ2MqF7e4fPFE8WKTx7pXAxO%2BoViiMnrgwmoU%2BKqu4CmCiIkACTPJXJ9GJC7aPrRFFT6MFlywhZe6O92zaJyvcy9n26sm0SX49mzkWo9WK%2BKt0d%2Flgi%2BAOn4VROhH7CdtDMt4MMT51xcKcDJ2wqvuhEk2b4WYioick%2F0o0UefSn8CDbVWCvcaQPwBKLs2wcbpLZsXi4J2oLHqGaCaMe2mR7ckm6uez86ooiMHJnMu7fEPjLnAYKuKtdVaFZQw%2Fb6gXzVBxOMIvx7r0GOqUBphsATYwnhKnLbPhv372vs0JQmLmN%2B39A6M5Ct8%2FugQBxuR7VwtR8H5fSKinSJp5hUr67KnIFvA1ZJFy5zm1OA2ZhzFPOfHpzhgLBhMAPRRmLSwHsG44SeX4YebGnV3CyWT55A7eA7foXijXCi5TTip3Hht03a%2BRCzA%2BpngFdK7WrlB0gvPP0VSea0%2BmyNHez3CtbmuBF8CdezXHCteZNPTF7JUlq&X-Amz-Signature=4003167a4c8e2132e5ffa15337c3acb765d78749ce505e2e8bc8c5e47189d44e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

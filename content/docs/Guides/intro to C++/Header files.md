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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU5L2B2J%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBbTDMQnqxS054jgjN5EF0L83QgwCniFQ72OuigwIOIqAiAwWjtLBTh1EDd1MS5CFRdngj9vGparjiLphETf%2F6G8tSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5l5fVMFFyP5j3vn5KtwDCQVBl58wvmdv3ztk6fGIYtsJrHwq0wfJHqYfQDlMwwXtkCnM7YffNkNap2XDtjW2IKxDeYArA8dRwfJ7bRoQRTsrZwiVAJTfCvkG4v922XozIeQAUz8DnN8OrCOQOkqfjA6MOsGvIpXEATZ%2FK7QxSwppoXMbdvqduhd%2FNx6q%2BMLIYdTo66XnrHrI6vhlgNN%2BdQpB5ntlxBGGWCayV2cugJ%2BrXYGcAYr6xdohsrHl0C%2BN7NqhXY2aJZVXsTtR%2FO0nFdVNe9zJin5eMRsEtysnSM5eMpTfQoSYXRo9oJlfE2uzEV%2B0r0V9Z2yMaEuhjfZs9CGfCztTxDlwEH0%2BegiILFfWJUuPmGAhTXE6WdowAe2mlsN6sZl9n4fR9bvbAOG1bET8JmMgDXuFY7jFyXnAZ8Vv7rVxJVPPO%2BM72EwUST46w%2BmOL1qro1yn0AIjw3QWF8%2BwrpYP9cLDXHt7Z%2FKCB%2BRMI9XV6KMU7CGwtTUt%2FejCVaY8Y3Muq2cZkscvcQKJESC%2FFisV0fww0N%2BEqXOWtTlJTSCOJYcwnAZ5PyhLGJteUeeFYSgapEdn8FaGzmQRcGC9X3dIgYosqbSHkaV92NiiEOYVjLip9vVMFOR2Xady29jTXA%2B1736wNA0w5fKgwAY6pgFdv0dzoRpLn2TJiFSBvYM0IQwIXpulzQZa6QgKJ6EF0hhVWyGEztlhcbwUqmY3LvJGDbKYpeQoEKIekiGBmKgkXB9GRbidnefwhkCFKrcSaKllJFkgO0oJTRfUi26EA5ptmUO1bTWKZE3f9WaP4%2BkfQ6x9yqHqJWhbPnfCDA4lPb7m4juybFZxsSpAZvqmk9UzmtCdGISAEPipxd2rzfNCWQy6Oxu5&X-Amz-Signature=3100db618eab3dc947161b8a13dbff6b899aeebaca07ae261121aa465ee37214&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

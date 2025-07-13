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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUN4ACSM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCNK5RvQopo8uCLUkiuFezAHkrbUzDcsF2KOm0OWUHCOAIhAK1l5QX2tr8IARv8cDnkcBUZHHu6Tp%2F34nySZAIOOKQlKv8DCBsQABoMNjM3NDIzMTgzODA1IgzQNQ4n5bzuFgmpYT0q3AP2yyu04Hb%2F0MiqPK6Ua7YELGj3kCD%2FAmdOFPjCeBh0IRXm0mf%2F%2BjNgZqTgoqaRoXPROYC8Qo2lD9MuVD8dEZSSTRFX7AF3OigG4XNaal3VaPX5NLSxNatQpTLNi%2BcihWU1SzSHE9oHtgWgD8ZMuidKNqdEG3Vfdw%2B6pUSJ2%2FXXJo2UmL%2FVamSkAj%2BZF0%2F1CoI%2FwV6MC88z9wUmjQvSlJ0uIPsbNp1L%2B55GCez6EKmqHy5fow2mh6CDdsxfSesGxmvO6ZORR2zkBNoN7yNRRwduScIW8X4YOiiC2JGMQGKtbLNO3IXmSJa498aEyrbriflmK5loG9TW3pCYJnrk1GZPkWU7%2BsrGsk0WSNQYK6QP%2BfPBC3DXsDGTth0E9qa5leldTfHk4VdeezSICg%2FegLah%2FtDdF9RdlCpbfJCjurA47eXYTWzAmY%2BKzSoU5ZrPUeS2RV44hFpxOAv24T%2BSMnnpCTxFlyQoiBZ7vAtskUSgNNRpSOQXrGB4d8zQU%2BXQS3zpV0JMcTndbq5bWc0Ml1VDZ9dkdKl%2BV3HyzH39ge0%2FsP3s1ZvKsUTwkT5uoXtvFeo7fQB8c%2BZ096wp9sYizU9KpkeM8ze1cL9hcE2cuek3xs39OarlT1t5v0Dm%2BzD35s%2FDBjqkAXfbh4qGIL%2B3VfAem0dr%2BxklMQ21qsKvzXWannXOEj1%2BvpV1rDc71Xyxap362W8xU65uScvTIraPxB5DStIqZVjii1QaOncWiKA1sLWdCcccSQUV3MEVo5wGTvfxNvaGZHPbA8En%2BLtd0IfxcXd0SGg7gRMoEaXWNXBbKoy6yVj6lcmsoYCVZ%2FVzKvDWIIpXg%2FgX%2F2jzKygSfCCKuvnYvc34%2B53q&X-Amz-Signature=94863b08a69723bb9ae2c7683da13515f44159d5dd95e3eda10e66ac2b4fa74b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRSTU4BO%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1ouDdlHvCeLFCyqB009sIT9TKETDynNi7hcSswih%2FuwIgPKf4C3ep2S32CNjMCl2vUEcpZMJLefD8PcALfWCw4QYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE9Lmp9wqLCgbRvvYyrcA34ToLy4tdSujitxm46t2QCHxADFpOmlDiwJEh0085b%2BWUW8TWBSeDEaIye7sHLqTLgRk8dKaGk5sLGtHsPmH8RjmRF6hCKktoyTdquzslBWZr10m6q8B%2B672hsIa4r7n5Z90U8NC4WltrBca2w07gzm0GpzSTSD4UT3jTOr0HZXo3DCrGe0YFB5pmwbc9aj0XphjlhQrsey0ekHBhc8wfXtnie%2FqgugYkN1oQRveStJit1%2Bq54BAb1l9cwUNiMgqP%2Fdu8dtyFfOHgiBB4uskqHmPhUyFM5%2FVpzgNGtF%2BJmlEvRellXhpdA92Ak0yFW%2BPH3p6jFepYyrFfFMieI8h2RnkoZw0dnQDNTCei0Yi3UXSshI3JBtt83OA%2FDq4jfV%2B%2B4N%2FTqTv1e%2FGIeIeGk0kxkITcE3wJ%2BnlAEEd6eJHK5lM6F49h5FgC%2B9Y4PnWHJOvhjNZWD65etZrvG8AdY9lLv2zYzPT%2FWJwED%2Bqyonu58MfPfax%2F6ujLiTqOobAqX8b008N6arBEx%2FWsHBMRCoqnDNy47t%2F1b5c2m0iEiZ7KarIP00oro6zVipwn8U5GJHWyuqB76W9lOysToMuZRjqXXdHyoXysiQQ7rdCZ9NzE0Q%2BSUTrLr%2FYVi45KLjMJ6Vkb8GOqUB4qg3V4J0eXtfduyMuA%2BRdvMsFBfXWsP9vFZPycbeZxpDXjoktByDM4%2FSchSmgtO2DLObwhJ%2FGYfIH45uleowRQ5WkPzyO6afdFQaXl%2B5QfJ2jF2y41TrS%2BXJIYVx0tx%2B%2F%2B8tCD2NLOnDzWYbwlW1Er1%2B3hQtsev%2F7olibBLkJaUDz4Q%2BimvQE7EixGzEma0Odr7Jnx0X%2FnFuykwKm09PCxZ06ewx&X-Amz-Signature=85536b991b9eaf6cc2b9737fa4e2a3910a72f2bc40fa8878bfd2dcc9b44849be&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

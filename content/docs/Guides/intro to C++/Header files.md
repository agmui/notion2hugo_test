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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MRYA7Y4%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwWSdWKLlPW3KQdKzyNMx8KNz%2BPe%2F1whk0zYuBUdAsQAiEAlZY6VANhLOGSfpJ2Z43GAXrrZhAp%2ByOdBsq%2FfQK9XLQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAxlqCpSP7gUUPiyqyrcA2o2BGGdD5SIXXFz9ANcPscG7tWqxI0GS3vAxlRsG7LwqYRu%2FwXkc%2BKpTp6PjLFCBTHFIOTmjqnGz%2FRhsKBU2vcyIKiK3m2V%2FXGilVGc5B6%2FXBXJPvH8OU4dPZuSBjqmhD8ORXVmvPVTcBOl0tE7RarWZokNnxGHrtykeivVqULByc2o4g3kHWIU3qLAfX%2BZNnuGzyP0sRF6rg3CsOSPEgn7X9S%2FQ2cv6sjJD636d6Muz4wWAhopew8g3PTTs0XW2P%2BHq5htf%2FBsdcymMJQznxXz5rqF56NOoX7C55iwarjpWQPZKpr8jXyQznspj11%2BsMZvGrDbBwGqqFFW8TxCnDupJF3ur5hlIarKqTXvAC%2BQjudbphx92WP9RS91VQJ%2FJV%2FZLyXOQ%2FTsc0DbOkX9vN2I%2Fv6M%2F91O4fTe6QLofupIvo6%2Fl%2F6Ih%2BlUyL0ywoFR53qWJMzRrryOajYzt8STPXBizdyhfCdpz9T88N7bW3I8NxdykAEA2vKJsyqhlWeDZ6d%2BK0Ndjf0J0jLtisyyszjtYAxouu3kBfFQCSTGgpDd9OIWslWdggwB%2FEtmWqwV5KTVOf5QTJJnb7rx2MGdBA1Vz%2BH%2FGWBw1YLXFlB68rbkTHJF9sLaJuas9jK7MPKhyr8GOqUBKKPcz08DgqLSxI%2BFx2%2FPLednaIE2QT%2Fxf3HK%2FSGWH%2BA8VbYDu8SsLRdWvoVm0LaxKyir6TPxxEVqLDXpSNT5aC4RGMmqya%2BVaIW%2FxZUqEkhg0HEWxK3RX9EGWYS6pgIU1E%2FlzlEZrNV7JpkeN7eh6o7JJH8ShLV5vF8Tbgf9ED9BQ%2B%2BhiNT%2BMcuy3WcQujystm2KcB%2FvnBcMaY28WbYwcTMilaO3&X-Amz-Signature=7672735530df71d753c981fd61f1aa4b737a894593eb828dd5d95b2080251d14&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

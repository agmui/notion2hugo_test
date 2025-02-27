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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4J4NDN%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDgBaZ1ALr6IO7DZGa76XWOa%2F7ioUib8iU8CR4A0f1aEgIhALwkIh%2FIlygq3arhkcnRqOpWGe6bDKOrrnn707Vmrl3PKv8DCHwQABoMNjM3NDIzMTgzODA1Igy22fS%2Fwd%2BkBo2MMnsq3AP5%2FA%2B%2Bl9%2BOANOpQ3sKnVkwE4YLJURq1uLfy9x4Px%2BV0%2BPaXol7DOSKG7AZt787l4gsrfqNNs6sc0OsWxRamnFVTnaKLrtEAUiT2%2BWdIwguG6Wk2W%2FP2yHrn%2FtBfwQM%2BvnntVYw5DpTdCxaxuPQrDYi7wZVhqrX9pve4cJHoLhOmCoDh3ftWL0hKWxipro5BIntbdo%2FURWWaABvY1Z6Yjsl3M9H%2FaWaeBl7z0PjUkNimJp%2BoIwr2gHVaE5G1kXAigzGyvO0atsDxDEWBOedDcn5UZBc216BNk%2B17CTR7FLeidlG6l137q9gSxVMJb2Olt5hz%2B7zQIAnA6A0c4f2JWrz4lVV8h44uwfE%2FxHBIBhguO30qOiEvBNUznoF4IBVazjXk0C5JLaKKSrZ1w%2BDsFBLFNU8g48CjqHBoivEFblmDVUTA0XTD2OcxxSXO%2BrSPg7WEobcFljI%2BDA5Iykq5eqdyEXo9Wq95RGHyP0CQ4APMsiwPFc5dCuDWwmC68V75Hin7J8zLoY3GC9iaN8%2FLWOF0lBzV2znLBQ9YtsYpL6hXUXug2tbzdQPMttibI29V05Yt6al7evrAYgCf%2B80MnlSCucPO1mVwxYz%2B2LAIqL02t%2F%2Fgx7mUwmEO1zFWDDu8IK%2BBjqkAfeOqJynWQhfpekMVZps7fujmFjNJAXwDbFl1kjNtJ4omYcGWrLC9z7YvVc46ZjYbBt7rKwEPWAi7JtF9IbMQlEEn5xM8gZaNm2ROHKQZYz8HY4fLh4zfHSNYC0CmkzDb4Lz7Ejp%2FKg2Nk3pkONHDUrGuuW4JhuEOOxSXM3RBi5mAlil2sNfTGkLYhg00%2BKWDrAjEY7TC2CeeEsHZ4QrlUieqJRV&X-Amz-Signature=3e9b9c581945a2ec13181bb36f8bc03c918a5b5147285821a34f0a5271d59394&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

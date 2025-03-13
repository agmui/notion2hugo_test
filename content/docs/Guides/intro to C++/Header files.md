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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666USQJH32%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrzt8BmaEpYksTKTqXc1iJeGCWffRwyxqXfDnEGMDRlAiEA8Eu1xkIPN%2BDLRnfySXoc4ER7%2FzgVNnl%2Ft7cIvU6DcmQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuob4eRHLP%2BUR%2F8yyrcA%2BpM1vcoCIj6iYfpzs3ww3c5fyV9nZbzlFg%2B%2BwKJ13NS5JRvDwGUBpm%2FHrRFU0N1xo%2F1XjUxmtauHB3hh8ZNmN85uAYN55yhwND8j9fKchULcUI2SwrLaCOQInoA86zniQKv%2BEXtPzhXF1CQwE0tvae%2Brdm0MgZzY8DhygbXbP2ZNEeqZWsKfyyZz5bQBOneGeBrq8NkYmEnDjicuUmbvPK3W3J%2BsnlvlOqdezlTcrt1DOiagjvniQuAq7f3ckige%2FygOSi9ptwfLUrAwEQfGGxVpRhed%2FIhswkvCFPt4QRVEiwL%2BG9e10UnFzgwmF33mBTr%2FnwUYLkmZkqLbqS3vVXUKrpgTDWSLXidvRAt0qgEwwBXvte2NASY5qckMObyVrdMOBjpqZTaBgVzObEpv7edsFBd8rss9nxn7EjbzSAtE%2FctfMIofaYYYc6I5xOUQcyV13Eqlv2fTJeNwJ96CYSuJarRRJLDz7fkPgnG7zTtNXsV%2Byd4mGO3xFBFRwsHCEDYgqcBfXZr%2FGAyB8z5WWWMvozfEWGLEwHj0KyyMUS%2FL6pOe8MOpKwjMgEmUxglCVHAkaOynWyxCeARQH311iGsbd2Arl436Rf3ECT8wA5u%2BLntgt9SC1y8hIRYMMieyb4GOqUB0Xo0ksf6I2L5fpyakbe0K4oUnlkUbCpLVOhgj1h1lXlziZLFtVA63doUOxbUA6AqynBjoZ%2FyqHrQcnu%2BXL31DGipO3ZIGJA5BAecO3165TSfpnyLbZUu3lajnASxWCC%2FGsyrusBCVb51HoH%2FcjzCMRw4gOqxO2POpqciucOxgPz%2B1HuXxvq6Z8gmm9JnKkda4yy5KOMsaw1Z0TeuLj8dh9wlaB7A&X-Amz-Signature=0a53c9240ba50abcdc0f46e3481b00ce120d0da964e61cc743ebc7f42ec89cf1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

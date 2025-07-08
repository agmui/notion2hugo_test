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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQF6I7PE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHNfD2Q1UPb40e2clSdkVgE9BFgsrnZLq9MdqMiCsNyAAiBGkXHWHyfeGxx4yAlzmZYmhRNp5zjptB8M%2BH%2FZgV3ifyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA%2BLu5i9cDOrqVcjwKtwDU%2B%2F70UhFHqQhDHrf42JwPIEAud%2BUtFUYdQul3LGk2h2k8J3eTUUUvQL%2Ba6B0zMSIcw1cGqt2VstOfhTA332xgHe2M1UsDq0Qcs9f51H7Q7VlueV02XvU3KO1rGDm2gHdqsXn0Jv9ltVqtVkmY5zkAX1fMqifQwWEl%2BTjAcmH5dbNUPisOP9G%2FFMo3DT8Jn%2BbsTD1XeZ6GDEoaFYhihX74Zh5CqsCNusbiL0RRQbULQj%2FRrwUsg19B2ZQ5y41ZXAtTtv1U0izF6aCiOFQOZ69iXG%2FAl2wJcent4Lr79ptjnMqtBS%2FVdCYJriwqMlGHbEIbimtEmRuOlF8cKDLj57yU6XZwjt7bAUXnZndfK0AWZToIR9qSpDKWL8d%2B%2FufUHX5fyNS2i53hRMMF0tHNzGbJ5aKTnjdeSJIaGoR4WKU5JrLHfmCLEodNucib2UQhsiSofgy3CG4PEbvxcpb%2FRaimQVfQ0i7axVwg63myBCxwvL%2BbIU%2BHPMChpvWLYbjnGmUncMMp2H4Y2gGL9uxcaaO5ctk88njmijnEur7%2BG9UX116%2BWHwm8HUa7jDsg9%2B0e8ahYt2qlCD2Up4ZUlvrlOr4wHbxtVWejSHiA033mzB8WAWKbCD0YiIUfcl2WQwyYOywwY6pgG7blWvpG4PRrIH3FJIprvUtih5LTy5%2FsVCu6NklCYc0ZZrUQLfxmjbHdkNshUh3TSg5RJ%2F4TCZDI5wHTfxVzrLSXReyGNItzoHjhcFAmn%2Fubsnt7woARqi%2Bq7bZao4l0K59SnNaloZNviirUnt1qtfcBDI7mPXFOblv4Uw35H9PzxxPj3yqnxSRKJnrxSVx%2FW21%2BFmknrSzvRwV3o4DWMZriWKUB0y&X-Amz-Signature=cb9991208721abf37f5a49949819b86ba86c3e06c7ff9e306f804d402683abe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

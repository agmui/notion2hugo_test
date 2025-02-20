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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBAJNL3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr9Byh6mmL00G15%2FAu%2Fz90QPr2wS%2BCiDfCK7mYho1T6QIgHpCoXL4WwVlHnuOMl06t8m4bDqIR1RZZzYqgBgf%2F5s0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkNrU0CvYFeKKbb7SrcA31HDo9yWfG%2BxqbKU9aHZMdz5PF3Lq6SVX%2Fd7dwgOJaMgWrFW0k%2BaBxsp1%2F1PHtQhnDV%2B9iJCCJ8I%2B4zbm2A4e9ulSynmvFjPWT6aY3Tkf9zmhS1O8pOilvcP3VmqavvcksUEK%2Byr7FZ11uhGL8D8Ls%2Fgnm%2BU5q77hAQwDLThbzfzpPTgcSTcwXqgG5XlJjEQoqzpP5wMbjwNX95sZ5R5EXmaK5A%2Ft9NTwAk1XhO0kv4FYL7SgV2XFLWbwGwoBXWNenYIxIVYWiHNjZ7trMw1b6r661rL7NsSOQ7UNwbYEj56mHbObpP2QZ5%2BsZYvA3b6v5%2BXM0zAxI%2B8AlQ46Op5EnfhdL%2Bj38lDwzuKlY%2F7b4pR3MpHuimDZcwEfeQ7PLePY5NuiKneVIf0QM8usRW5R6V4yQNPveeYsMrwdmKDYvfAsMO4zMEiTW4jNohFJmzFgNMZsiz2RffyATncNOcyXy3P8EU32VDKCIfM1cBNUtNSp1mV%2FngXPWJzYcPKHuuFzXU%2FELrAmOjOITv%2FQ9UZiWvapTp1e2MiIS9WbqqnufLTITUHE3M5fwdVn5JO7Kbwk49qQWAwJn6%2B2UfoVfSBvsYkOv71mWj1dxJnlJ%2FYX%2FVjWFkiegb97T%2Bs6%2FSMMyN3r0GOqUBKzjO1OYF9zt5TYuJem6XCr8HgQ4p7Aulgksy4VXGeWYmKlSEziVDhfKwv1bS3amqT2458%2F3M7q6IJqRJsYz5i4ftIyPMOUPWLZwxj4%2Blk8RPDvZ3TClzjY2gyyknJBrUo5y68aWsaM9%2FWw1PblQ%2FG71vuLIBVoEcncUZDcJRbLo74lULY%2FlBv2nXwf32567w6C6dix4HytPvYulhTSUe4uAJMQMr&X-Amz-Signature=89bddfefe1471240fedf4540a121df21515563cd84bf299959ec3887c3cc83b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

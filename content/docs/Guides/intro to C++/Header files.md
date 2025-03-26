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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTT2UGC2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECpBo0lLNINiMtUwvuN3K16shNyYxf5tx1MfAcovBZ5AiEA7DObPoX7%2BJ0YSGDrw%2FsxJjRUF1RM7AONH33uYRvOCn4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDM4su5LjlZ2Dpnq%2BLSrcA6yDU9C8Ihpcwf%2BDV4qO352EvXVoRRnAzZVEqaoYsrr%2BbNqeSjmEpMmDG8QfQa6iVhtn4DBpVNnr7bN7RDiJydCMqL6P%2BVe7EoAZGUPED8Vm2QbFkETKzLPrQI9KzyuS2x%2Bp27PEvcrisGqXMKFGviBLb2zgjLa1GU%2BUey1XHmhH5n8CPLCBCxpIipaGvk5eqJam%2F%2By7b1lwvQ5EpBZ%2FMgI71h3Mv%2BSwMmG9EiRYuquYt87zTl99uZzROSrLU0CLIt0%2FCf2QKleL8U0bjDinDEMz8vfHMli0cV9wUhj%2BwNTtZjW9bhwTyco8MZpXyaruQbxsPFWTjyTAt%2FBcBAQ%2FYIT8xsVFEOjsLxIHNOJsYVCmoERdkIyFxC5Tkba2xQKAP05M%2FMqFDHmrZRTlDBgIX0r69JkA9ptNjL3mgbDzAPPGvFrE0nHjh01Ophvw5a1gENkM2AJy4JOO904Ob%2BW6hOC6a51AtuBgDhSLmqtm6I2q8ap7cTOc3cIgd4Z%2BhgZD3tIbYk6ifZOfmNWCVczc7eo9CoJ5eH1E1bLYmrHE5056J7j44IH6UKBrN8Z8xP2knBgshv53YF1LVBp45lKdB42xTchrvt%2BGycngkXA5DIRcX1sYPD6m9PSyy0I4MKa5kL8GOqUB5yG9grKI03LhDuz9EeFS86MA3twzjNqBKbA7r79Kb1cTl%2FzQ38NSRjqji4Vn%2F%2F9QbvxoHv301GhrsO5ZkiJjoyXVjWaupojN%2BHnGIYfK9E1CkxD799AqYDb036fEyCDGN4Z4zETuV%2B0xSPkbXuJdp66CS84L9dKTlLnjRrrOG9TB2rrhbGoJGe5%2BVmdEGHFC602sGDP1dCzqFjGc09cgupDFgBgM&X-Amz-Signature=625cc7658c366d0ace8eccd63cf1251c4c61840e07298df943cb978898050815&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

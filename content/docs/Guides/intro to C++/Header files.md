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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625NREENN%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCezUpjyPSn5HE06pnVakXnhUTYkVLo%2FQ8eun%2Bex6hP7AIgB133PRw%2BQRqSFmGC5SawQdM8WUYEtRcc8horXp9TwQIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAs5EUylTWKVJN6MbSrcA5R39CI2UUFThaNp%2FN77q69quH2GUpuA1cFyi2ho0nYD2MGQ9B5xQS4E0dI7O5K4eZ9Bqe%2FYwkmxQY1g65lDvME8DMjZVht4BSouuIB0TNXiWv%2FGkEtyf%2BPF%2FaKzYDizLlaG8QvDk1oKQokowkDBtyYf0%2B%2FyE7xzwMx7ZjXKp14VQ8WcNftTAYWeCDyqb%2FajfUAAwvrOLfNl67EtILrMryyrRIRS8OESXrFl2b3sk5x24q%2Fd%2FdLvTZ59zK5Dv%2FWy0pRyPHzdHj%2BIJ6kSxcDStEFVNf401nPGpWVJc1iUZzjiNrtoMgFlZU%2Bv1bRoq%2BD8lsm9GId1vdmlfXWYJmb3%2Bz2PCX3nTMK2G0tSy%2FltLP0WvDidgavHDLpRdsv%2FV4L35ZQIyHSi9X1n%2F7t38YRAw49Z%2FAIBtT0cNcCUam2k0DKrG5GyznnX9k026CUC5W3029clgatigOiwIeO4t9ooU3kP5mEsT0fYGhL4TQ7LFsYfx6XT2cy71WkdEQwjj6GXfpEQZ20B8DdZpfY2djnelcOGBRW%2FG11L5lUsGzSVHgEND%2BuXy2SIhAZ8vOH1cI5YdG8DefuZVjsO5szbpPhehNS%2Bv0Fc3f%2BswLlBwMB4kOPP1rt1dlUL%2FnVVfAMmMNLD2sEGOqUBCVZD4h0D7N9pDEF4AimlRD0FmjkoN7C5%2FNDb1KN4%2BWOJoIOalQI3vXc0hHoEDJ9Ny2Dnbu9Gh8BPLUvGc%2Bgkc6FGcNmFk%2FHCGqdBku4%2F4RFaXFacuDaKZC3kkhYd4xCZtF4tLEIqQvGe0QZGhGPjn%2B85E6k2rCtU5qtw2UJ8Vub6caqtEnGjdV4JPEbXhsV1K9htqaUjuTuy2Vq5OKyFJ%2BNyjL35&X-Amz-Signature=bb88b6d626de31074d03afb4578ae97fed081cb46dff5a1d9e8f949791102de7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

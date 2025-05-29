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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5CTGJH%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLO14XYgulGyM4cBISqUcwBOwR6wHVRRfAcojyvnLeGgIgfL0MBnTRbWcrENOwiy3Yo%2FU%2F4rql9%2FEfA1j49QcyJc4qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVLXUSTEkM5i17llCrcA5EcR%2BT8bDPjKZqYdd4FBEtJsqKv7ezI1QBWe37uBMIKoyjJDOaozIQOydOVBt7Gi2vOi2F0WeyCdHk0sqWthOInHkgyAx3KIYrKQISZXa1V2bwi3%2Fm4K7EeF57aFipFZZlLhj6afRG%2BUMEbKL1nbVvFzXmUVxKmwugS7bnQ8lcYhwLz9kD03UV9PoNeQ%2FxmeAdf3ImG0GDs%2B9vEmlMpH89EFDP5nXyEQwH%2F1lqjkzrmQ%2BuZI7kbaTEGohJy9NUjFPdkIRpNE1a0ZStxvdXr6fNo3ZgEe6K1w0M0yF%2BPScXZLNJbN8KkDh391fR0apkZgT%2F9ZnnzR6Ak7843QFNpggbajWMuiLqEpktmiXgrWEkPBKEKpY0uIPH%2B1zfezMmf4b9FVTg%2Fpc2VNU2nlfZJANSmKI9hufNk5He0W7X4rRkEDd%2B%2BAcW80FVaXYrJboo0gSODkdj0dmB6qsP3PNWA1S%2FcdPwQEbomhoUmSrtKl12dSFSMYX9mlAdraFVTmCyrYCxBc2UsjnyqELnz55Og1vKebPFY7on2hP%2FIgUipRvfnkHyXm68jznwZFXB8bgWW0KI06c00ScJ771cigzhSx1Ytc49gjIwQubtZtxx2fkvFEJqEq1y%2FLKYlgQE6MNeH38EGOqUB8v6dD6AAuQ4jTE0elhfcJ%2BlGiEFOgZRfW9PRABJUSbk%2Fxz7rzeudPg%2FGvC4V1AlG7MImPy8isB7btaO70A96O6m%2F04uXKx3TiIHxnCUok%2FYUxwazppmjjZMPUuxPxoK5dIiSyWXe2dwf0cBwdO5WHwe490L2c7hiVYn0XYz4%2F%2FXTqdYthZQQ2aSN7XLXMYWdaK%2BYmBiiOdV9Ejewe%2FF09AXXB6U7&X-Amz-Signature=fe44094328a520bd8d7211390420170e33ae27e01e4f5c7ddb2e6610e9460818&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

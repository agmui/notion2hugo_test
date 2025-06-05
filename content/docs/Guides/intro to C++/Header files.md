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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642JMMLEG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDnWaJYo%2BfLCGcblQJhjxinENhScXjQ3S%2F%2FbvaxYOJw8AIgb%2Fij6jOkB3vIEtTVNPlykC%2BXkGgIxxhZCj11cAgquNMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOZfYzACVNZkEbar9SrcAyUxv%2FXZolvqn3oQLlRHdnAoYMbSfHAcmx2dRzlKDOoAqC4pnVmSPRNmt36%2BT4bmgSST2%2F%2F%2Fr9Ri457cFwn7Butu5FL2tSn8NDfbaetR22A5TysGGQTfH%2FF0X5xwVHxeFR28tzEpd%2FdTKJc1ihc%2BMMn1KAfn9nHueRir1lLGMvWgtoagjoE9VS%2BKAmVT7Tes7XvB31PN5klPy0pSUV96fOLHSJGhh%2Fsfpn7rHI8ieePeeERfGjhFeKukYZXh20Qx9DUf7gYywuw3zroFQYXpz%2BhZILnszOq9vwwQ%2BBy4kfsdt9W55eXJv7abQaj4Kyw%2FpKPEjLnojrnPKoM2Be1VQjTLfJSRn6FjcQ4FMGZz2ikcrO5UyamOHItRLXtFl%2BihNtzdPpRZi1BSg%2FtQ5jH9DY6mYA7NyOjXkJPCxiTJwODQbFexr3l3PNBaH5XRN1uZG%2Fh4DCXlX8Sm6kyzvEqaGJ3EpkxUPQpuH%2BofopsJrBxbmz1El8TEGG8FRX0VC3qME6DvHWcRp1IwtBnsnTC6oeUCoVaZP6k8twlRTXpcD%2B7EXynGZOkcuLbj17V81iBdIXKqSDesQV%2Ftu9YiQJ2HJ%2BJLRWSYQIFIQnN8IfRY2jWjuC%2FvjvlpwF5i3q6aMNOmhMIGOqUBpF7ZcQWHepN82Aufxi14hEHJJvHbUh%2BQNhk%2BBMBYKGzA5nE0Jv8CGNhPtdGaSoJeVBlSedf0ou8kZaHwmDo2vqwLwTyXr37aIBqp1DGrWJzMuk4SBVOQkJYIoxG06I%2BZ64RQ6D4iQQh44oum%2F%2FEduKgDKxGKOCjis46YrcffqeDEKCUGfH3CE%2FI9sJgIcLyAM4dYcnjPqKwFMRsOKjb6nfVIcSb6&X-Amz-Signature=40f62fc3d33605af9bec47bad152c3d37ac2af8fff2be1956835ce1fffabf512&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

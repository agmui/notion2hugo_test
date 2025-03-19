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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q66MZ3PR%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIAGlAnsoWOKAKNiFY5RCYohdg3PDWwTJGLAyJnwBO9NRAiEAvxez5fbXs9HafjpH7V4rcleVsul5MtBARGObuo3YYaIq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDC5rZAtHMkMjdEi9ICrcA%2B%2FtchhoYrVcVp3ZifreqEagSE4hTijvcxudgw0lqD1340gA9%2B8FCtiBQ3MipwN3%2FKLM07bR9QC9tG%2FQlLqKvPAxJlYiVUTz3UcK6vhIsgGAnGlB%2B83LzzBxOYa%2FArDiir5sdWlwYkpy%2FsSSAHhm1yU5JqEbunJeBqBwpOg%2F3Qm5AUSK9XLUqtMO3RNR%2BrSyEKqkYxIFP7CDq42vnGai3OuJ8m8mxEgRpeCt2vrrpPL%2FTNI%2BGwvsWQsXaKBmWDZbSbMGL8aIre96AECRh0%2Fx51qxcQR6f3q%2B9PPKRmG10daNm6R%2BSpiATVWsQW2gOA8EGTbfR%2Fl7iWg8c75oiCg2EOQ0LYwid3G3Y3oDIsLyorWMhnF%2BKKfL%2Bw5hfFQ91jynnKEBepkFr9nYuEOoyQzVsBkrbeKGmXEGmF8d2u3eJuDJ6TYP58k3SROlnm1lHvHBS0iYxKC21UuybsXdqYfDM0RmJxzX4%2FnTHgUEAVne5c%2Fah7FPZY77qNo1FpCPcX%2FlEf07GzQpK%2B8U%2F8Rb4MWowNAf51HZjPG5T1DbL3LmEKUdgAIzZCkI%2FPEPICvEr8PKVrD%2BDO7g7wcspX4K0J%2FKXmfOOBPHN7El6acbkugjM4tkeJ4tZeja2DMGXUxXMITA6r4GOqUBmzE6pARVCxe53M%2F1bLNAHZrFq4zfqVrl6cltzgrqLQTJK3zlksP3tq2aAn%2Bd5JeIJvBOwgF0%2FEb3eLUDAh9WXlB6WKSBSywexG91hTasOfnhfeFB5oYzBAofGVs%2Bq%2B891GcJu36bmSsWkxyIFyvdkn8KskFXsSm94OON887gqJ8Vh1vnc3d6md7f%2FnfmXyk%2BDf8P%2B9gxDpYdcGsliRoVayWRIKgm&X-Amz-Signature=f9842c2ee8f1941df206847ea40d495fe92db75c6fac81b37b958bc10c3510f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

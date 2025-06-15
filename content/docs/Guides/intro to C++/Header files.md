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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCTXGVGH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCnDPX7ZhvJuyLHVkY9nRnQ6SA32q2x%2FbCxJpkdzgwW2AIgdrX4%2FS3AHggYM724hXbbZ2Mp1nkdD%2BPgL61qNUy2ld4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJvOOy0juOy9cm6tCSrcA3FkV03%2FMz5D%2BAhmumFCaambW4cZ0ys5Z4RKeItWMWL4INU4yv9itKwGIQJfG9onAtaHKRKUMlTnlMFCQontxWCf%2BD6kGb%2FsKlqJMdSf0L4kjjy91%2B%2FdKjn4xkkO5M%2F26n25wP4gsqF5S5Mma1o4MAl3TgeSZx8aL5ZMHTQjKWCsWO2Lx3cqIbQhXoXccDxQAmpGrCNXzF3mgmE6BUSVUpnZy7RE6wM6nlPEaGLNbteWns9QDkTnPq%2F4GKV%2Fz68Np0DiU5P3uadq9ky2L5anb8gHYzbok%2BG6b8MDFLcjKKbCoWqilnGEQDBdSfbBTAFrOXFoBpv2r0tH5FNrefp0hSjym6Th7oHWdL%2BNeq0bE5x2IywK1YWBKuq0BsMRLC6RRnYbWf%2BBp%2BtkCkXhjdWzPLgnLSs0Gglobg6oMPd5q7OBR8ggMDPtdVbccOeGgOXO1iD2%2BFOHTM0F7ZeUpLv49xcwg7fQ9I5JOI0XexePc%2BXBIapZdVmsb71P743gFJCKfSlTaUkjcQp1BMQDZcahxxC9XBigenDJcefb6jZfhD%2BrseFp%2FPLiz41%2B25N6gK36eaMDmwDNdQ8ntFAXbW7oZiGXDrLFpZEIU0%2BpvHumz8URBZUZ2TXgFRBEcyEpMOHOvMIGOqUBLMPp0w3H4mf8CSMBTJeMnPB1%2B%2Fs9LXGC6A%2B2EkUJVrkGws1Bdnz58kVYK5KNTgWx5lP4aJU67xYPm9bXW%2BrwT%2FEACB7rRkMCvYqGJrE4VHPBYYVJw9htcTy4pfX1p6lKeOJ%2F1DV2kqVBFzcGatRgTv1wB%2Buv9pnoWcC7kHWO%2F26e3vz41yDBRhV2fMozS%2BHM3QCXcweNt0Bql%2BkThwYm2U%2FAUhFZ&X-Amz-Signature=2a610b519ae04fabff48b5dd9ac64a5a1e2ee4aa6cee676974dc12babf14c5f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

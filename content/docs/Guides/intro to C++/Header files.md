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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVO4TWA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGxoVoP3G7EI83OY5g0gI8lnbUAXzlxh%2FZ1iuAeCYTpgIhAKPjLUB%2BW6zm8nMk0M4alvMc%2BCcd0TTt%2FVBjJy2AdGMsKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaUqQ1Y%2FHvTptlCp0q3ANZ2N1ucslJuwM9zAcBrrnQ4ltsZT%2BxXlVV32ndt8jRAWeoD8%2BtjaOTZ2ZOnlevQ4ZZdEGYCg6RoqBkWmtD06KrGbldqPB0mEy9%2B8%2Bah2daVPqA9YheGdIqf50G9xKPxz87c6ThQLWWrJMr1rKUZLGzEnCK7uAh3OHGHX7eRp%2BdF1pCuZmDPSA6jNxa3NAVk16EXPLadTWP8BfwG1TBJ8WAk4tCzyD1ckqsv2IZoshsr6dKAt4nJUvcDHfGnNxY7FJpvfXJ632TvM4Vogms5Ku6lPTeYrJPeMmxZyuewsWOu7IZgU51KsGbXC%2FS9GGpJMKnPWeaT%2Fk3vHWbWi1i%2B4azP8gHn4E0ZW3kTP7IPS9C2k0He%2BVArBjdNI5WS%2BXVl55eSIjCA2v%2FZ4l8lyC3LEXgbtv8dE2lFvlxL6YHJ3KVq21RD44BB2tVQfoANghHHwxMMx28mvWlpTgf8SXih6geY7ru%2Fk0Ev1T9jzfWRjprCyGUATfM0x4mCrfH%2FGJQgRBhwAJCHWqpJ4QSWwmfiECxKdIT8M53d93UX8mkr4EVwZQzOxLEYbYjen57qe043xQP7GZEEWge1NJ1aImSX3XhvNOSPyW%2FGdqNd3ztdESc9eTZsJ%2B8SlqL2WgvqTC0xbvDBjqkAfS1jbiD%2F3j5C3XknamO9hsiHGKWVn18VRXn7fRwM%2Fx%2Fl2LRvTk4RMbzUXTYxo8L0zAjdZv8qggTR%2BsfJeuVS2JgOsQRWEaviZW5XxXxg3Mmpg4JZqR8UCcrNhiMBiV7NdMKH3PpFyxlbIAksFW28CrcJpmtTIrNvJL%2BBwNhF38wOSGZKO8B6N3yf%2Fq1%2FLENFcUUXVwA8s6pH%2FlZPGgxTP1Jd7yf&X-Amz-Signature=0707f3dc68a3c14774a442b4b19a57157e19938ae7c1a799d90cc8983b5d7353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

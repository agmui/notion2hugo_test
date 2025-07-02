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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWZIDMMO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIknq3t3sr4Npa9B0nP76X2E81ttTn8Mi1v%2F9DOqKt7wIhAIl6kJinJF%2Fl8k5Tpm6ecfHUe7E%2BRtqnARn79qzCdYiiKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzmiOjuy2Vj0c5YD8q3AOS3iR2L0Z77ZqyLlLGUk9tByuY%2BHB5NqRHJmLN3YdgAs9ZoVStIz1ScFkcXntIj6gvuWopg04qa94R2fB8LW0udCr7IZ3y3j7dbtOpbm%2FGMM%2FVd5DGpUs7kvnRJhCk7lh9Sm4IsiDbeuwBYcV3f94v0V4FBFpU08WKvQ3VkSOLXrccUaYL4L3z7nT8AvQDRt%2BhzjDeK7X6HkGcjjAIv2Rd7Hd%2FdsVyH08O6oTejJR5iNhFwbYqTN1V1L8%2Fd1K1C6%2BHPycfngYsdUpXp3Fwq3fflzZ0YBiQtE2g4qzhkpG5w%2Bs%2BtTqOI9l%2FDuSVbduLJlzoSTqAFywtudrGq65XoLjJmoDOOaDx7RDGkXL5cenUiGHdZXXAcxNYROJKF9GibU%2BAxrQxE9uuOIxDy75mUew9EOFrYwjOy%2FPRFr%2FKcXCNPc7U38fPfG3K1eWSySAuhUZg6Cp0nhe2paDwrE9QPfBI3qAiCXoeO60t1YCdZShESgluwYzCVNHBdMngOwC8TwedUU%2FeTPp7yCv%2FgFd6Wtjqt7rCCqR7GjEhgBY6pRet%2FuE9fHUd2gd6A8moTSDPVtTLHDw3YpOVyUYzINJyGTzknk2kVLFlfoBKTvQFynAlog2RyijhKU4HwNQsmTCotZPDBjqkAZhUp%2FMNrK994Q5QiqTUC1YSp1sURpTuizW3DxRnfKRHOjRj5CC%2B91jR2N1DkGQU57Lw6Ymaw0RYAa6SXpiPvb7OHuYQlInpnZCorz4e%2BCd5Z%2BM5XL9YrI9KC5i%2B6I5Jo8ssFrZBkiROG1Qw2XzHDFmaN58i8%2B1DDECI6BYNrl4NmVIcl08jYYuCnJ8Ekcv1u9BLbY5ANzWnxi1%2B5rlaRlZDq%2FBn&X-Amz-Signature=1ab8420a2df2f3f0b2885aa39ea48e03773b443aa238601fe986d24c81735402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

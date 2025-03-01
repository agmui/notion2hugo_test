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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCGRR73%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICs2o%2B1dYOF8WpPqNlUF7TvjjQIgW%2B73BEWIDuncY46%2FAiEAwlphD3zczpDl7y3Tj3JTD%2F0qFCETrx7q6S60XmXfV3EqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJuR8Y5aNuKAQDJkRSrcA1rVNSFs1wyJLa%2Fkzy4cMTuVGzxh6GmOpRtaP49kEFWMze%2FtFYKnMwC%2FDLsw0iVzSRhE3aSdXa438bBV2tMEy75GCY7W50K6gpa3SAFBEKQk3OB%2BvRby7ss%2FwT4Pje%2FaidZHJWcVz7V9et5LKLg6QFLkio4%2FyRiU4Sneo4IHKGjpMYFATH7tJyaIlmILER9C1%2FsKq0ZffLPrwVMaWM%2BCbPrh%2FUTHKj%2BHRZzD3hHhvvW19nOrt783PZF0qvUknL4lOgivLGEUVjW%2FpaW0MGwMl0VI51dBWinb9BcaP5Ho0RWqaSVakrv6F%2B79MXXZk1PLkKYokOT2NQuTUqnQ2dJkWiMTsDIr3ea3DmvYjo4Egy8rCcARjrI%2FlixwG%2B1VE78%2FoM1h%2BuZP%2FlJOLGDsSn0jWz46XQ1YasFbeg04HSUTEjkntVRNlKU2L%2BUyo0mNOCQdRDVHBwuG9KvKJW8cFTvDq%2FUqj3B1x1lHo5mQd8Ck4dooiAJ81rfd0S7bLPfPGnbWpJbaFNkJIujN%2Fq9E1XQ00AI%2BQPXI7yuAkyeT5CdPo7FAw83Ic4Z3x4YQmMHETN9nFuYpnc5GxfEymreTgGIVbm6OE1CV0H%2F%2FSgqCk1IfknCiHzuilBVbsAaY13BAMJDyib4GOqUBF0XKhZooCMSbrQJHw8mgFIPxIo3ejv1Fek3vbh0r3xRnQkfLmJFjTJRdXDVxDKrvKEKjCgZE%2F1Txh7L9HpIjQk%2B6cg84YhVVd4RvO4XwYUWogrUQgLFQA%2FTYzk64S%2BXXRaxduE%2FaYGjMKY6A4be4hnN%2FHoRckfVUfJr6j6WeBrt6vxjH3unK05OKS97RhF1KbqqPPiKZqV8xjjuli4FolxnRj%2B5Q&X-Amz-Signature=01b6a3dad9668309c574d0cf0791ab81b40c7fc8a96f67650c122e7aecb931cc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

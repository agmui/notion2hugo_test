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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH3VGVKX%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCGhj93bv4p3PfYM1ZVBlUufKJnv1qaXf2Mm%2F%2BeCUtHIAIgH4neEOhv84tHT2FdfssMz0EecYMPr4E5VOz3%2FJcTOJAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcqRqLXb%2BSUuHNqmSrcA2SUBfrMpIuxvWWzmAzZSb6I6529yQBEEiQykZFlAiAhjo13uf0ob3G%2Bl%2FWHEGVryZ6IMcakJ1g2L4yaiOKNTNg1rch88zU8hkQZJZ31ksSbZ8WEtPN93ZrpkwsUeeX48lfQ6fVmGkMgY%2FsMEdav6BLJZU%2BfUwA9CYTRMkkFYPiwyUhczq%2Fu2Ur%2FPc%2FCSwpEG9GokMeYw93tUsuXyjDTaJNFukhJ0UPdGuJHCk84%2Bfg5iDs8h4emqH2hdLZE2rdpGQwc2Aq4HpbKWV4OsLVrgs1Px8TnS%2Fo7dILmCNjFlSeFDFDicmJbe2eX36RhLVuzQBCheTwI3hr20YD2IbkQOChSoNJW6lIKLMsqDND0O6HpztZGoZlHaIZ5w%2FgJu4mRt4sMEmOPsn45ceHzCKY%2F57DGR1sEMdhjwFMsakP7n9JR48Xvv%2BJ4WYO8%2FNpIkwM63xhBdmeOTyMYq0CsfXGvb%2FkpT0hfWViBCcpl1CIqHl%2BvU%2FbqzX9D7hR%2FV92SStZylV%2FRPoq2vFWjWiRcimOhAveDnQkzSuuEMGuw3fGG2eMQCqcQgyfxlvL9ReK%2BuxyUgA1iQTIJ%2Bx%2B%2FNR8xRxMh9%2FATk2DxuwrDrYF%2FV0zwRg%2FknLHPR9RvQ6jVJrYCMJDb070GOqUBA61U4VD2PguATj4LbY79B2H4vL5MrK1kikC4inGvZeTsecvnvGcudZziL%2FxjlKhbp28lj3SeOX5QroxXCt%2Br3DRthOIFFRGV3hHrPAvi0lHb0fbsylG4IySl4Lk6yfJeFHg4OEGCbMA5LqHcSTid8%2FHoxpmLaD1VZAsuAiJgQjkKF3vy9LpaRjL2E3HeAoSASf5skTOMa9GDy9d09IONVvvLXL7%2B&X-Amz-Signature=0570f7c6dc561be2210755809c9736bed6b00e293a03d81ac6c8d39266ec2b3b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

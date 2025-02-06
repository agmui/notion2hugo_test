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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OCLY5DK%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDcQefbr83jrg43PYSFFjZ9Qmu46qCBHCsAHSaM5G7HOQIgccrgBt6moDLm3rs%2F82sCRAkqXrrhd2dWvONqXpNN0aYq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBHA4oigLJET%2FaxKYSrcAxtWMc6S9Nu5HTup8w5886PBXyzZgAUg3mSFnum4R%2B53nPcudLpZrTe8Ulz6TKGdoZfsieDRS%2Fl3wJ9GunWBCIuuFoB8h7z7RldkySDtVOA%2Bovc4V5Mv4M6Y1gzML8%2BhfpPfUFYDRkGOS3v%2BrbWCbRFIRgkHmWibFulLk3QLMPwIiviAOUQgjn5gCHEsciFDfFh%2Fx48ePYTsA4wBdJMYXLVS1Twi%2F3liDZSMMGe1k5hxG%2BiUh9Vb3oPBw0QXZ1htFHyECR6rdbpjzumZnvXW1Vi%2F3W5ww7Qj3dAdCPZpffHiqmpZjR8Orl4W1sCi9QWbMAWnnSEGEwAv8n%2FtEPDgMw28OhhwEGDHxQXBxRu9Bg4SsdHnwQ%2BhXRzDd%2BCrVI%2BHM503paMKgmjX8xOAjKkbl6H2wXTa%2F%2BH%2FRoLICBn7UuBNl18BJlbURa%2FjvZA1ZtuNQ1RjJPGYZKOFq8Ymw0RuFMhC0dwzkH1czptp%2Bhl3%2BHnLdJ4XKxaSWbCWLQjOKmSHEY9OgRf3eiz%2B1xypNBdJD97PgVXKt3vr%2Fw3pytr9eNmnBucybyqdi%2F6nBr%2FnroturYCew5YTUzrIC94yGFihvZ9NxbTMo7Pxp98IXfDfMXnAs9L4gZRN7zHUePNGMN2dk70GOqUBxMjZpwEoAHfs8QH%2BrNV81iup3j9ccLC428MFz2n8Jx6TLv4RXflhTemnxHp0i6JdhScKAd7J3kyik2fLu4JzgZWHzVfk0c2X9wbBdoEdZYf7TEcDr%2BsDaaqZwNexqvDRJ0I1zK5q%2F4ZFsV6nhU7ljQ3hPtJDC6xZIZ5%2BTKb3dgkcHFg%2B2iA3w%2FhK9HTO7%2BePbX2lRox1LFUoIQSZSao1Otf04ThI&X-Amz-Signature=fde668816417b210cbe7aa427323853ecbe3f20c945ff807498303a496ac7d51&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

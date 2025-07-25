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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPH3KFQ5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIC7voPdftdahv0CXLDG1aIai7ScxeFU76%2BxOL9MfFsjnAiAKU1gCBwOGLqSZRvSOrhBqMXb62lFQY8EEH%2FQr4Onk4yr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMFRQaZVKmcAWm9O%2B3KtwD9G1NK3vc1CLbkDUyPdkfnuiRceeJWqBiX%2BWuikisE0K7cWoky5mh2KRIc9SiGn%2FWXM5O3oUqKby%2FI34%2Bl6OeoSR0%2FpgxC0jUBBE32h4GeuwYHlz3MGj6DakNc1%2BCoAu64ziLA5nlL8YdG5uJrkPe3YfB6WvK8lRhUwFTWzESv6zEJyjoDrqvb7rwXy3IndOLPrsUtY0EkysF2PoW0UyjLnKrP1HY1xsyEpZwerlBexWbbCMF%2Fk2fle9vmj6P4tOe%2BP3N273pxPRFb%2BJg06TZ84od7YREMOdXnISFAf6hdj%2B724l%2FMnIgYfnJgDoZQ89HbczUDmXvdvVJrlBhB1Hqo2hyn6plAu50M8TStOvQN42tuc2XlyUaVkczpNPzqfWHd1rqHPH%2BtnAXKdHYAvjF0Rr8gf0IzU0cSUJf7i6x5vcfdhRozXNe7EDWjjRlbqGDVVPDYSptNhW4uYuMHz0vmIYcplJ%2BTqU9IyZV293LjCXMkuQSHlT47UTZYZTtwFCnnth3VGNp5EGVTUqQBomqJ53gMoup1vClTIn45pVbTAIcEN0JYTAG3Aub%2FWvJUjVbxkCCA5sDB2keJsHypxPoWAUwYXbdwHi%2F9jJLFmsc3QJiHV9Jj6W4O5wpr6gwwcGMxAY6pgHNxruZgKq55qaI%2B7D49xP5pWkcT%2BrbkzFfvmYTEMSswCHt3UExEZaUC9Z8pjwBFdicvtkhzaoQRVKQzT7EFhpC7ALNIf3z7Dr3SpfjmED3h5%2FwTBIjqv%2F9et7QbluyAjJaulQBM8EVPa0GnFh9IWhrCTE0hXWqGSP86DBJQR5Z%2Fo911PTDc%2FKzlJcqxRp74oKkQ2dJBYQm0FBlFd1VcazN9rdDi4yt&X-Amz-Signature=1a7e56c5871ae73d6385a236945b800a6ea7507ccd9e4fd75c2ec37a301d2e98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L4PH6OY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIAkr%2ByxGLdw7dmFPhJu7x%2FM8gkdMvJ5cxAOrftFWV3jJAiEA6BvrenF9qT0Ca4b8aSHXlebI%2FHcKy1u5e1ct1PO1ZyoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqPnxrJBHULLApX1yrcAytVXUvrJFbnXIWO0OTX2CmtoCXlcAo%2B0ke6Rs%2FKlwVzrW26%2BBgE87554am3S1KBEYO7gdS0JoKYm3BxQzA3hRGBJaizH1O0O7UboElr5bbFY4XgU7b53axbIQ%2ByjhoENLe6ps8Mo3rMlP6Ar8Xae2smZikC4enIeGz3QhhZhjHUuCb991uyQGPGMWMgWHQF3F8ZJ1PkmqQ25CPbg2OJ84YA6j8T33jPjbaWHFq2DoKamPPxj%2F6ZIF7fryMKcqK8JASDI4K2rD6WXKdR2Nwf%2BIHprXKZyaRTn892L5gFW0BKhz2gLj3ki122LKvb%2FJjZNe06aP%2FrKU34%2FCEdWaRXdJ3s%2BS9wQdbq3HjBbzT%2BOsgQ2McIJR9RbGvhVTzaKifGfYBwLZ4Seo74tMoB7z5EyMaSgv%2Br%2BybIBtsp5EjPYfczbyEaHecqUuEdtdKkOq%2FAhCFOHRokAGFyE0H9KAV9azB6%2FrXLa909O7M6zFo1f5bo2HPYS4%2BlK7pFe27eKaCl6tKKtqm3rYPa3yYmgfn9kKaluVtad2CkBCcNsXaKSSOVGnHmnTqLZwfdZt%2FvX4apwKHi85jbHvKosOg6liZht4OdQl7Cmn18FHOSU%2Fw3EAxQCOW8KAal6ycfWPnNMPDG1sQGOqUBNSNpA68rPGpF7LrFhgzGigSGXwveSQdJt%2B4M8jBjZjqUEHlBe2Z%2Bcl%2F%2B1%2B53tJpU5Oe0WChHzbJ9fmkMIibL5oY6PBner2w8H01CeK57Lx0g3ci%2FahibnLVpdXXxkip3Z2%2FimX%2BrzF0XcAYHa4iQ%2Fa1zSRhCVeqeWyIwmZpIObIMGe8N8Et0vhk4W4AEdS5i5O4UZD8sfb81XHp65Uq8KXzfHMwf&X-Amz-Signature=efd9eaa8217dde1a5afa1b58c2414cc6ee8a6bcffdb8753c5a2a55f0783a3989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

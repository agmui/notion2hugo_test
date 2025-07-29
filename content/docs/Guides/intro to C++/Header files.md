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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5VLVVDT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFHG%2FqqK9X%2BKIzC8YN0%2Fo1nZbthX%2BHzO1GvInA1EbF6RAiEA2kccI3R9WA9PKYgV54XwVUV9iQ2tUJZd%2BULBhDyBZDsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO07naIR%2FFDcwpvncCrcA66bdKqXGkY1K8gvuPN0xcm244kLP9Tn2LIJMC2zkuiT0nRr%2Fy3aWU3BTBRjKMR0Ix%2Faz8lAg4r%2FBukW72a%2BBEPjB8QzLZVrbx06bzo9RlYlsF5F3UW5FKI8aiYLSIQS1OWinq1O%2FGykmp0Lola%2F7%2BsLXzVm5qFUyeU3ruOygj4UfzsLDoKTyL4JMXLRriWyThB%2FyPkYxKCx6niyUuyxJiA7ji7Ww5BRB7HR3QZ1kHdLmqBWxrSU7LvZIrP%2FrYgL7rAGmYw%2FWuDEQGZIdX%2FMta6rnEMTTbMk3wzK2ripM9C7z1zqNkd%2Bk%2BMujd8Vubv%2Fu6L%2BhuULz2icU1Z%2BLgsGyukmJh9O3uBqifjaF%2FZVLgxi2%2FoyLteaxm1pomndOdieYocd%2Fcsx4mLiuYPVF70AcZw8wiARRE8Sr7p49k3O8zjgh4F4%2FsyctJPW1%2FPRV6h%2BPVjd6lhoeup0TSEQ366FJ%2FC5SdJDgDYFf6eQPVDcjOFip1Iy37NImjnW0i4wDJccz3uhXxEDuCtEFTpmHRbSaUVO8a9DM%2F2w1qBuXIFL7rn5qqyNcG9lwlwCVZY6QNIfUYPxsDGK%2BoBLVHJWz0KKyX9N6e3dYgZjsyACInWTQXhFiqAdwRUDwE12MAP0MMuYo8QGOqUBMpLg3sCtRxdW61JbIeR%2FjevnBGZ%2FPwuvsFitybzL8H8z2OBhrI5P%2Bd%2Bq3JaNvc5lFdJyH3VAEIAxChVF8BSbN%2BkFTjWuXpthu6SsywxAUQTU7ph9lIH%2BrkS24fMnopzCrwo%2FakXHUbjjQVLmaSQhtP7mmTXC%2BY6QGc%2Fp1PnM2jGvgRzPzm8JXAJEBR3fhbUA8urvFiaML59VwSoJu2zAbPBKgznT&X-Amz-Signature=bbb9b87890c99b1c577bdadca714cf2b789bb2aa2b2721d7ed85d8a913cf9d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

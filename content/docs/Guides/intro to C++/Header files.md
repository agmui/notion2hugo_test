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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MTW4GXR%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDZSQ5lDTUqbXXFKAxuDND1tZnGba1njVI7Q1ziAgdFSQIgYTYDIXq5sctkFWlgyYa7Bv4dAJ5TYqbDZ9QeBLWq4gAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPam3zVO0dI2OmODZyrcA0OefkNV4qLRtiQzSkaWwl4ps5N8%2FfhmdYlZQnoamvF8xn%2FgboPh%2BCaNWlVR9TXxqBy7ERkrKGqsjgu3PEuYpHUd82mXBW%2BDHVWqSxCOtUozWntvJ%2BH7BKpfe8%2FZ7QnUjXQmIt8CWhInOX65%2BPHqfyT%2BSva%2F4cMqlAJFTMmN%2BnDVjzDV6kXY8WWUrCH9aSePdKCMURe2obXJtqPmh%2BBupsssVgveN3537%2BhaMB1M0ZU6yeZL2N1W%2F2oH7EWPHYn6yPeko3zHjmqStmYbiUwohSIJqQsJutDRppwnA%2FQGZWtS611Dc3EWFh5nr%2FhLmIm%2Bs6iLQWjJIm0xvSVKZAPDfI5Oxk3cXhfB1zjV0Pm6%2Fg3uyblpuyth8vIGDdp22Bvm2Nk1q0fkOstfAHAeYCo0oDh5Gvh5QRjYXltoaqIpz%2F1CBASVfQvZBDzwYHMYl5qAf8%2Bxde0kfh5ETrEIIppjP8UO6ThlMqq1HGBskrcW5javRi5I%2BVply7iFvpPrcFOS8Xkx%2FrufzEu4h8kJdRvpysCaCIBgIZRe5PPVDCAXNZVRR6%2FPEjQ9zUgoQ%2BnYOReIAE1bFXTQK1zL4mF%2BHN3EJfFVSVPCJ76I1mXagsEkZNrJXdefVin5Nik%2FwPqlMLPr3r8GOqUBDF5YQEL7pf1d5HfRGl3oqRgkaXjLyN7iqndEhR0tOftxPZzbSB06l2xjThZf%2BTjiIDzguGlv0Q3mbc09sgkd%2B5LQlAXH4rpUzdMEv1E5dVIrtMBsUHlHwKjZUdKE%2BDQnx%2BnuhaLLp4m2l%2FtAqxLzK7qSeOxQij7Uh6GZLoKY3IWi%2F3p1uiOhqOfbBLNorW%2BEztE5W23ikBKG3YjUYHsxhTRq0BhS&X-Amz-Signature=87846966c6207d8d08331b25b46907305694f6c92ffe6909a08f01e0bad11b36&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

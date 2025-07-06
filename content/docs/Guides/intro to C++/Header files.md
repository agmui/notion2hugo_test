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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCCGFEB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQD3ffgAwoFCJFN8j%2FfXsQuwzSSL449lJWx7PT3r5fcq7gIhAPHU199kUKg8Gt3roZ4HRxPIiY09gT3JC3k%2BUBPxzjfpKv8DCF0QABoMNjM3NDIzMTgzODA1Igw3TwzofsWe4Yb9xUYq3AOgulWdon44hwVylk4UCmGcTLuZggsIvmMh8wVl63BfYFUe%2F%2BDUOfVQqCNOlpNjAt0flLyYMT7HyvXFRU9Nsbp2%2BOQf64qBM%2F0Ypi%2Bh75pwlgYhT45xDTq4qu4QjWjhyV8fVFIEc1SxQEmyOrnOYWFQ%2FNU48SmF0BucAwuRaY5HnIyci%2FdYfvKQvbfti48bK9mk3DJIgOpsvE76SF4PRAm6%2BuVbwTS5P3vnB258rmfbvwBc3AtmnedZwSJACr%2Fh5lHVzZRusHRfVtWyCnPmLaKwslO5oPx0MBkwOhTjGms4KCQdAJkTQA4zXCx8jbB%2FjCW8pG2kfYS6DDSD9%2F2N9jh%2FYEbCiXfVnZA%2BnuRxCQCuF9TQG4lLGqgcv6ERz9HfWtz14J%2Ff8%2BocdaxJZjr6uvMLip%2BXZL7cVieyR5hptio7fAGdZcaga8uarE454zvw4XTZr2DCxXTMqE97G%2FlVJBjN2MyitCTg5bI5j%2FkxMjAQOoLg5IvVpeof8pvAH3UmmTtN3TCluT7cX7fEm09VhzPP9AcaO93Y0wKBxG9EbF7xr%2FXw0I6jAasf56z6TDJ4BhJNOYY%2BHH6v15zvwEk8JM7I3WEfMeWYm2ah%2BShEjR4%2BUY4cui2KoJLzc6GmzjD6xqnDBjqkAY8ClNhLDYYlU%2FXy%2FbiEWSIo4PmkRhZI6zRD1OFf3dNCkOll%2BE4%2BNuizY2hGXKAOKQr2j6Rl07vwfzW2A5Y5o%2FsU877BfNKt1HxsL%2FU2xuc7X5a9zP5hCcjzN8cO%2FuBA6MkQV2m50lA1HhgFTVVW%2FsuBv3ma91KnYZ%2FVZtAczxW%2FCaKTRnRFBeHVCfbiZU%2BsGRXs26DzkW8yZJXdO00hXL8oNB%2Bt&X-Amz-Signature=9f3d98bb6f2fb53e6e2c1211f4553bf8e8b1c7d23bb9518ed79b65510255683d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

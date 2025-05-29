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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KK7NRFB%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyVBRGdrsgUwAskBH4xW6F3bF0pXTngkmvcmuMIHhjqAiEA7Fp7i32X1T4tJxHlgU66xKOz%2BhQSt4J6e%2BIx422Zo4kqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2Fr7N29u9uZx%2BpkWCrcA4x1adqKWjy2DWDYiPbYkLyh0lkzUXQe8c1xvqpkXKHpmtp%2FciLSt0cGqUGeNOH2jSF5i4m1nY4V%2FioRGH3Dz%2BjJKV0LgVPl%2BtFGKw6IozDGP9l%2FkzpgpBqpdh1Nm%2BlMP9mcPmd4hqgPzdkKLES66H0hC5XoZ5oc1%2FnnewYYdrvoDdSm8vGym6knAN8oQlSl5xuj59%2BMD5JjWdVcp%2BA3MvJfWN9J3ApAdSxGnaDVgH0mv2%2FXSEoY4RSOrUiFWpvF2iZdy%2FEv0Zd%2BQnUZ6gEmckuzjkENcOpNDaSrI59uCb%2BcbWwKihDKB7MS75YdeqixqEac0eqlLzKsC25qXVGiuVRe2GzRLAtnPP1bQgNDIUKhmng7yi6JODfbEEsgTquJcFymljHXs6KRpwQzDfZ5t1C7HUU5x2oJ9dggGViI6zJQGslE0quSI578VHujT9JoAdFVeSgBmS5d3gepzs9OKYJBoRAwFic7YQC3wRnHFZkhCQSxFxQleTWLNoyk2BSijjH2l0RF9SBcm8aBXjsSZmTEd5L%2BMuvx4nYbR80xc%2FoPSh%2BR2NrbTaAYC8pmgEHFmJfrGE4hNI7ABXTVQtIzITwUJYp4WcnOZkVUBKW9Eea3HIcu5wDCgfLLCaTCMKKy4cEGOqUBEThyUoOk22dzH9pHDHp4by2J7B4mUUGD3lNFqguJoxiTvmzYR9T%2B3QJ1MNCGUwSkrfVry1ra08zktvkGzxDc4hH054P7VsaVtHbQF82SZVVbyDUxyeJ%2BnH8V6PK%2F2qaY1EtJJ5uuqkdsg0sM%2BWNXWf5Hf83LjMmoMiMLDf%2FPfXJR%2Fo%2FiXltLYxhebR%2F9FSTV2NDuMy5pUsIwhrLC%2BwA8EeWKUa4T&X-Amz-Signature=ce094218cd027c35a20ada24e2b21385e4ac8fc548ced977e4ec3b886aa3af66&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

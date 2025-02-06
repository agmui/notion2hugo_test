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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAX7QQGO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQC07z5CDmBpHzYzVP07OXwZZS2ctXgg6kyfd9NurwG1WgIhAIi1bbr0KYbylxiXdy%2B1szEff%2BT0feCQMfNdd8335XV6Kv8DCFEQABoMNjM3NDIzMTgzODA1IgyUC8pQfKMl2t%2FnXQEq3APHf%2F6rVTjOy8ptm6X2M28zACVL8SOm%2B0YScxnGoLdG4K6NLSo906OKt2zbnwfReP0K5X7IpHMvLxotpYLjDU%2BN81vSi2dZD0SpwhcnoepQeX2w%2FhdnDCJzC%2BMCwEqzc8tVtj7yYu0l%2FMoGwbVOcnrLusDmmZSLfOTK%2B0Yi9sL%2B0ip77YMXHboX4MulFIlGzVcgZT3zUONGPKYWTlBj9UnCrATtrBwv2OQWQAYhN1vDz%2BrhUHidwm8zaGJ9aDEGHPSTvuH%2BKKbxvXvQu2kVdVdBAOQHjLTfLO%2Fqdrh%2FLtjpt7aTqmLjFSF%2FTL8n5kr8yexmEVoUqB8gKiB%2B5102bzu86YXWd%2BZ625LteV9EF04S4HDU%2B4Nsf2hmXTo4MFizSWOpzzmsnG4Su9VTY0foUKvRIgIcP7SmLMR%2BjC5A4%2BxXF32j%2FM4lQkAu7ysn7kNdCWbvikzreuCvtAbyFdSBHzONToOqTb38wJ%2B1Lons5X7c6NqfuQMIRw4RX6wvHAUCQ9hzo6oA0Cr9iTJc%2BW6QYd4JSy62jJQq47A0DCd%2FukgcU4ojr06JA%2BuCsZ9R7l03L%2BuuKwTgoB%2Bt6woRgSGKkyprN30eJcZIsgdVz4RwXr5Z2ZYm2KqXqEA4SPHisDDP7I%2B9BjqkAXXj%2BUNrgGcGQILXMsGICgebHOkHcF19GFz8i01VJ1fclVOewovLXtWw0pfjPT0jgyXb1lCID3bYrU7YY0Q79MnRTqbjIZjCbvznndRQ9PqM9ulXluklRgjVrFZ%2FA1txtPgVVAkjH3P8l5gVT4z9m2ZKWYwsWPMGb3oTIGqGDS3l%2FFbtbEvR3Yu9%2BO4Isy6hYAjyTzA7ly13LTH4JfQMIC8xK2Be&X-Amz-Signature=bec61cf74a39f162e321bad7aaaf85c823536329464197b8f850f58ddedf2b54&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653REQOXK%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDVXYFJx0EyU2TIkTsCleMk%2B1YaOZqHA9ylWSSwyCO3rwIhAPs%2FaeDEJCYiOjilV9jNLgdKJgfmhpp1m5JC4D%2Bc06BEKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxEMMB5gPMkAU0scIq3AMlAh3ykARJJkiOjb%2BmBcpybHvhpUvRn6TRGnZ8J0NNhMFqhVLeowhCVI7BoXM8Ln%2BsXAmyHLVSAMD1JRtXh163%2FKCoSKrp2e16VA2MOp1pwJ%2B8wyUZwFNpt8a0o%2BypnWcDloSI3Wwh8bWCRh7YMB5Wyi1HvzFuklEROiOzNkdO%2B8kF%2FncqCJEfeHjXiiu4oZ0qJeeHMqqkru7JhCp9gkUFWh%2BLngsdyAr7B2D3FLNLTTuDH1IDUtV%2BXkGu5B9ddnSXQvxU6APEB83aX%2FIgkZQbBnZBsS2caChyyZJKdEmSfssVYzYM5NPJPsEUvP%2BwZ63xBneyzYfD9UY%2Fw5VoVELWKsArvxQdvlbvIs4QZho9zLqNldU8KzMAXU7iOU008kIOvihqC8ld0Vj2EHKyyz4VWHYswq02AwgrRn3hZa4pA%2BzytNZtS4EhoCr%2F1S3tE3OyOImMYcIH%2B1P3dq0e%2BA1k6zVNRTfeJ2RLtnz8NNqN5cphKiSqgMNq79aRREEz%2BQZ3Y%2BU5EauMznZXLU18jqsYHZf4sMoBqWvFP%2BbXTmGfvYA53JHDt4nolHo%2B%2FL6ttHskT7LH83N0KHp5XVUODWzzO%2F2e5xcP5iZPKtZkcgKG%2FjRqw%2BUqW8yUO0PwhTCXiZzABjqkAePFFkjADGddPrLIuJxwx3UMskC3JfHw2WZhjJpMu8bsYauAgjn%2F9hI2DpzKixQL%2BUa6jQgpkqBRs45%2BmM4Mp%2BCCAbOUXGuZQUx3SiUKICNu%2Fsjl2JYujTnMvrWdeC8ktG%2FOgrNAmNlHCSUwxZna7dW7fH1MDd6TVJA8eIYMeqs0lcz9zkJVX27eO370sGQfWVg2o8wuc1GCrQnmZR4A8xCsYbaq&X-Amz-Signature=8bc3f015d9448dd74ac34a1c94a18eee7bb267feefb2d8867916d773717b2212&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

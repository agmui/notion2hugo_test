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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JDZQ7AD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcIU0W8zFls%2FI%2FX6JdQvSHcud7IG0bYYOlS8PEnzoRTgIhAMwhGwcVPRUeQ%2F%2FtqRU%2FUuOKvXwwPBe%2Fg%2BOufzH%2Bh9noKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytYCkJpWMT7yukNLkq3AN3zTaMP8yInGGZCwDlHoiw90K9fZKofVMzp%2BvclRjR1U4DFkY3XQlW2Fff7x6YsF4derA%2F8tw0d7%2BgosKHn%2FzzbhvhaBxhHrXVlgz250IcqB2D82C52Bn0Ei7aGDwyh6lRmBb5wt7XIScVWlLW5VXKzAAWw4mZLBqWeDHTpozvTCxy24R1SlT6dYdBJhEIrbTW1Ry%2F58z3t39JPDN4yZlaaOG64SdrULQfBZyV%2FLWGnVTaT6xT2uj5Kp3iJLntjQbnUtz%2BRCYW5uLx7A8tiBoWmEKHNKTAYaQylmmJAbsP6u4bK5zCDh46ukghGiNs%2FJhTqlEYuFToWvL6Tk6H%2Fmj9ILwCwEFQsD9J3MQ3ouCANYbs8ZaObBooYPlevJJkgLkdm0zwRrfbtWeNFw3JCl6PhxJPI8s2C48nXIBS%2FiWykmPPhs82dTl5UxSLzVEYegcJS0dbUELgubizBB6b%2B%2FzRYuf4elfIgqrBoqr%2FprOQ6SJ3G3Jx%2BmW%2FyKEkCWbrO%2B5vsgeOPl64BYfrDATR93IYHToUom%2BO6gjb%2F42V7qOOnx01UIInNzevrd6qEwBkym5%2FWoXoWrAj356qzptfJN1ZT9Jn3gBa3KXp2XU0KAs%2F7B9%2BmEkt4PnrnbwoujDgyfK%2FBjqkAZRo1r%2Bx12Hx83xkQu1a%2FSv%2BFycdkgPadpSA0jDyF7Chjx7VD%2BpigJcVJsueDewhyOIc7OsZRx4Bg02up%2FhVa3img6OuHWaXCrkvxOC7CY85bjuSo5F5qTznQpIl%2BXDY4H5jrGovBzA7xKEyHgHw5c08iJg5V4m2Op6TriKYCMUFRJTWueGFjNWHT6UBamee9L27bR%2By%2Bv3gII9XWWGjCPWG6uCB&X-Amz-Signature=24f0fa867ffa8979112cfc0ff23c49d9770fca42961fedd901d8bb6a3e1b1ddf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

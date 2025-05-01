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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVA5FJC7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDF1duK2LvTMmRlTFBRM9QUvQJeE%2FYaZd7q5%2BTK%2BUv7nQIgCb4vefnH%2F42d89Xxhoi%2FJ7BcYqxlzEyhYCWcjiCKcG0qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg%2BpJLIQRPP0VszZyrcA3%2Fz5xDtc8kSi%2BG5d4To5rVvA%2BlkESeZ%2BXWFM9zIUhYo3wb2EdAvPMHZN%2B2fUygc7%2BanfL0LbB523hC%2FX9MtUE9QkyRq3YsfpiZODi%2BCjH8opbhRhYw5c%2FfibBKfGfoi3hg9pp4RegdBu%2F%2BdR9cuTlwLp5PpG0546XvYmXgSXal1T8iZt0l%2F8Ky6B1Qcz%2FDq4QILsSpbZfpGLzL88C8TIgYLRIgqUgyBRZw5SgqhLOLoT86kkXVcA3TeTIwdDUp3LC5UiGg6t3MRv4eMlZUtgfI%2BV77U0naasR69bn0l27ACfECymzass1Cmdc376BXZlUYPRxBXK491iVMWqH2m%2FNaWjWAABz1saJCuWGurGUDMnFVX%2Bi0FT1XvJjMvyPqcJV947gvgMSRDVoOyzKi1zae%2B06tb4z8Aj8mpouafTImRFCw0hesMewu3cEo5iZnfqApotFFmHeR8sqWw4ZdU%2BgneLLaF4hqozmGDaFQ8vtFtEvvJ6loOBHe0AsuU97Zzn7EK3g79PYZMnY4YBW%2FiemPOmHyipW5xJMDCrjeWOwcCHyrpafOH73ukVu%2BghDj7%2F2sIvtEW%2BKHn5E2xqGDjEAcnSms0Xj2ncG1gx1M6et3JINKOk%2FWWiHOENoE8MIexzMAGOqUBxtJ1vOjULQaQDcuZ3EScQdXSSAHmYvYHt7Hi8wio9%2B%2BWQLDBu0mVuVU6OOjjLMBR0P8j%2FygxH6WXA%2B6gGv%2FJOhQb5D4azslwzDiyjBq4N5HExvuwt5CKzIriL%2BC8IiYHzwQC5%2FXo8VMF4AH24F4PpQqH%2BwPWlNxcMBBPr9ZUBWocgUzRhjjgXluJ0UoWT4FzofulwcqppCTf7kf0KOrPCxHKAgCi&X-Amz-Signature=20f69e6236cd595c00dcce6b90c85c2c93b2412d2022f6945a551a29f896e621&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

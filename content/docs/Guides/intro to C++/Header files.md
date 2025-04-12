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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIBZR4L%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQD2i60vIEv9J2Jw0StMcSMFC3aTjPoJXNfA64tt5eQjgwIgbNZpPFRNd9GOWz7E9P0Qa7IRuKtzwD2GFtebspk7Nj0qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiJZJkDLW4QhOQi0SrcA78PngjpRTkNpEsiRj7Of3eSWjrkWztcLhZTk4k5dXjvo9pvQugMBfjNB2ucP1kUYLDyjkbqlBV3Zyvucx3rsmoL2Jti5UNHQQLI79YOuD8rIJpIBx0kFhjLIVSdkTzGVQjpTsTqBBmEw4duOP8e5U9gpAso4ITnOLW3xvIt842039%2FnKCgFlmNqhT8X59%2BBcGfazoPGXR2YeHFQ6S4vDKFSGVAdf4rKw0OjbgnQooYeBb19I5Y32GyyA75b4gr4LTCP1rDDn%2F5BETXJCTnVFpIgabM5LAkkhr4RsAkk66J1PEFQ3Hlm6xxXcrwlTaNs5ZbQxTBnO5AL%2Fxsg8GERW8vtiD%2B8tjUw3X4H7UYXgozJXe3FAN7%2FAp54esp7ZCV0a1%2BH0dndGmkfuqeY45mgRkWbwb7zHe5zBP06tia8lB3CxFSYXNeNivWFl1MGxNumZR5TejjOU2av%2FwXlak6OqTr9hH18Skc849u7CFQ4F7ymU%2Bzoy9%2BwdFK8gMQNxkWPOjXBBQ0oNl3L479gsQq4y5zgIZWc90timc7fmPVLUu3zsSSSPAz7JFdQhUNYAxeXKlDmCt0NijpZQX6pIvedQkjCd1y5XF0%2F%2BWsee%2FhWHT8kbpB6B5K113%2BzBmZ2MJqo6L8GOqUBPo0IkUWkpuhiFhuzXy3FX7Gmeh2tWCy69bUjTen0aJplldL6yHvdZhVKsYSFAtWYJBD%2FtbcofkDzgZNsuE4z4MdysZ3A2pSAaZhlENZ2oixuI6Y4TmFfZx9ozGYOVkk0oF%2FbrWYu92abLhaFzqpIZxwUwbBJiW2FH1NzR9inmPA2CCd3RSnoIegJdOADXTrdBzW%2B9VNCjV5bBBmVqSUlGcNeDBR%2B&X-Amz-Signature=4aac9d6451deb19243b81252de9d9612626ff080ba412cd695d8c5f8f9765309&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

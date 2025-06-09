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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WAAKHZ7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi0jTW1prp4r0ijxPTi0VyAn20bA7%2FAILUKxAE0ajUOAIgd5imu6T903nOurakYschHbPp2IOWvruBKI%2BfJGuKsH8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVKxaKAcfOYNbGuqCrcA0B%2FL39ssg3G9yDBKNrF9J8CilAZ0RBwfVBxD1Jfz6Le9oX6Sr8fDDyCK282ZOW7nmMJrqFyG92uDK%2FLvkFLo6QptHw%2BBgS%2FJcLYDwaCxLoZqb7J4ep18DIc%2BIL2WTvFzZeWROUb5ClY2UB4MzCKpGWY6c73vpzb4zvk%2BLMw8Dp0kt0Muc30pZdKHEvZFn5b4i7UtvR3UYXdJEdcyWXI5zvqxrwUQ09BJeE2BA2Ta2gxwsWmQ2VWmSn6ZHGaC9Tz3TV8dNYOm%2FoWNrC1LIpDJgccQhfNoVdOSMhvhZRxvw7Iutz4GwROS09ziua47F1ro5jU%2FU8cquNUvFZz8SNhD9%2Ffun9%2Foupp7QcUvqDRaqx8iavpOTnNlMFg9tnkcGZoIENFKz2IjwWNgR45BiYJnY0FKByA3DgB3t%2F6EzTRUABf6nWUfnCHXvOpJ50dd%2F42GU1A19YTD7YPiX%2BScfGP32t5%2BpI9Pk7dYMIUXcaVRz8ql4ogmFG6DiIgk%2FHmZTXVxcWSM9LxwtgKZ9aNqVfMPThtMFBrsSTMBNUylubGizCP1SQvOvhP8Xhy23vokNOz936g7jtW8glh6XP3OzKOx4CJY%2F9%2FJMOXsvmJH6A9Pkp4Epn%2BtiRQj3gDVGhVMPmdm8IGOqUBTDv9hztxvk0mcdjniknkmov9%2BhwRLp6zktpahcQbmyaBH5g0odW1AjBWYVWUghl5VHzfFEWeZMZfKMUjAdxIUNDRvlo4HEEjnSjYSEzSF8KPwzC%2Fnt7zSW4Bo1KlZ3MzdMOyd28TSTKYPxWc7SgP91vI%2Bqm9adFoLttTDC6KyrJaiMH4Q3ltulnuDr%2B1BAaMtsbIxmnxrPWch372s3006aTBrx2b&X-Amz-Signature=32d5f079db91f462e450c5cc60d3f1bf656f2377540177e7e293528ad5439106&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

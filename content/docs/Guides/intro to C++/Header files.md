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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2NU5KE4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyeRF49V471a6BLSYzAeRNlgJAh48ITlLNAdQ9czjyLQIgakhs7yO3iAS0X6P9M1RHV1B06EOw3iutyzurS33maFwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwh8%2FXselq%2FIqgN%2FircA%2BLS7y8xnEP3YUxhs32AwOfQbqMH3ku%2FAiyHahyeb1io3blTZBzXBJoapPjDKQlaX3B32WFOrhJH4ANnDL9Nfzh2NRMdnmv2uu67TaCA%2Fr3eEcPbehXiUyk5eFqaC%2FGf1H2LhSO5BDliW1ylU5XWIXIJHwEU4rq8cMeFRUBizmkyBCPVH5dFhBSKm0VA4oSF2E2gm8cnA4omrwKjHbHkRiat29hxqzh3H2WcGzueqHYQdbjAKZi2imI7AoQwTaleFRIWxlbmpmDevCYS7fvBJ0pSSH%2F6dXIZ1wrNrMC0%2FVsS6s9avp6QnxBF26b03LmJle519xB0dQJtWAafJ9nuu%2BLTVGjAKAbHiv4LtcMDhWbylaRKe9vWTHxOSvQ0SltXImWxWfY%2BsRUj7qZM0VYYty3EyeMoXge3THJ2Vk4xJiVUcwYksY2JPppV3clkSZgqFrTGJ8fB5lV84niBGDg3QWx4yVL33o%2F52G6bCIVoTC2herRVQHw8fTJtwEu9aVuG3Yoq9lkbmczdJ8n%2F1uIn%2FyVY4tN48YhXkHI7llAeZO47D7wUAU%2FB8r%2Fr%2FmFdFixOmAQlonqUWAZA%2FQKewe8dKCwQ9qtXbmEdudX1hjCE7G8WvtziQTi1zuH9YQrtMIOW8cMGOqUBu%2BPmoBZdofM6he78%2BSGchQVAkhRTXYNelOtcIDkSXEmLmMY6CikE3Q0PeSmhUz%2B4tOurhoRkyGmxp%2Bq0dYMPLTC5sQy2zv4zGZP2tWZew5anCBa4OjpQ%2BnJorYxLGg0QhAoBDUdBvCkUU1e7euU0mvCpyzBNDS42%2BWMug7ZpXgGNlrZkm6l1SAqoADZc4es6wOIoiL4qFNvC2DQxQH%2FvcQcTtyCv&X-Amz-Signature=35e8a84cc044f1416b530406d593ba24a1dc2b85175b348fc5727384cd9dedf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

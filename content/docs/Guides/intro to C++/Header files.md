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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KOGIH5B%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGQnOl3lYqV%2B9gWO8LGQDMgWk8cZEU8%2FSyuZMiZs95lTAiAKi5PvwCdVEoLH8%2ByIEzbHmLtrR35I78w1V%2FZgxDp%2F9Cr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMxl51RPg1HiB6K8HVKtwDGtrkGGW52LULCUvzaukWjWYQN2hKOvs%2FUcEFfBpCrnn2DHW3ghlVJVrG2TMPW8SOGmRcqM3BLT4kRjBI4wGBG3E2X3HAGwX4sZJegRZ043exYdQF7rjMnWvWY%2BJmH9w0u4yqK2oVzWOg8D9hLrYxreVICIURLfJc6Bk58uFsdkXJLATU3BBqbPlqTVualZCLx4qZ4DHhtHXy5T35GrzY%2F0ghwI1cswJ2o0cgidL8HOMbRqzpXCJsIAUel9MVaAO0gdEnPdiswCRIFAK%2FF8CQ9LsyI%2F1ZPvS8ihB5Hd0ukfMBA%2FdDurlZg8Nf%2BxZBD1kdtZUIEOVn4gBkiH%2FntFxJ4oKZifd6I%2BgDl8i%2Brc04htPhYpiNFbvSjQZwhwSWZ8L1WPHn6McPLbEG5mtrggJUdG9mNwqoMCMsSF9rbgqSmMxMI9RcFlUd0iAlWXiJkWBUTBXDfL%2FRDR36pmNcbDsMX1hThJ9FmXiTG4UpKz%2BopzvJ9eNo1Pfomct0Apv2gh62L3O1doe%2FgB%2F87ik6AgCzlqSwpn%2BuHtWtYqAHRJUtFUuMHCUDa2gxCMo3b2bShVGxG5V8P%2B956g%2FPHw7ubxrym9u9aNFpaKMo5tRbzvbAMuUnumO4m1OTMhg0220w1sPtwgY6pgGckfJhVU3ZxET%2Bk28MespUQBlwJsHOkkQEPdtAQUFuq%2BsKSp9RNxwlHkgH5NAZdJA0LmKwNw5%2FwvjSBg5qx0fVXsUAjnqNkOVvTm2IorqBSaz%2FfEMgF40C0uFUhAIIcvsILRtmGliQb4nQMe%2FCzW34MtzkMfZwLyWL7SgfqQgX7vdLATbGmiltS%2By8oHiuo1Ra3YxMLBBiI7BacxCzmSVxZY8WBKsi&X-Amz-Signature=7ad543729225d438673e1c34eec503074b7e8254a24fb710ab19cb0d4d67ce49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

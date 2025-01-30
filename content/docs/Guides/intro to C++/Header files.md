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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ74N524%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCepfUQsNURYgPazRP4w6AKtGsTfnhOJUp41sBrbMextQIhAOKY1hNj%2Fe3EVmLdIK3pqdtkjDwdrRLbVTfiPjbObObFKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoJJD126CSQOHIy5oq3ANw%2BVRZSa4LCYNzYCtr%2F1nB4cRyOJRcO%2FM%2FNBAcHIlv36JaalVvu0Fb%2FfIU5YUJRhd49wlhiLcOscAHYTyiFQoZ9hgEw04GRnX9Bk6ytGhKuwqtwsVXHrzvzcaMmyV9u3wnQ4R9ERMafMrhEyiRPu5MHONsv2dHuJkUht13SwUqw3JEpszc8UdiIVwLRKR%2Ff%2Bi%2BSK%2BNA1sgcsCKPP7x85ABQgQCy0Y5IYgAptDRDhErCNHRzJrole%2F0RWr84OGnAXelvrzd0rrYNygjGbSIcWFdoKtEGEFbcDmPDqP9U591E0N0xtmWEQ7lfxBQU4Zwt0puwivtPJAwhdpVknhos0oFXDntqtMzcM7cqgnm2ndCT0PjzVFoIonhhm91uSDdTXumIkCvuiN4bXhp2jg6QMtbKwYgZU5KyrpWaMPN3Y9E3FfyY29rKLAV8jby%2FWFmlNqsVC4NKRfSBN1Co%2FbgQGxQyUAey%2F7KxiZzBxL8IVezIBX8U1YzMl%2BQo8t9ats0Oogn%2FD7BxMMEDvu2M2XVNAULZOymu4fLxa%2BDRql00jfyGlHiMRmFYHR8%2BVBxz2ic3BpcVW8QzAH9pu3M8WZZMtw%2FqnVHd2MUFL%2F8Sl8sOcQ9ZGfhmHD%2BhkzmATLvvjD%2B4e%2B8BjqkAWEN18ALnCtdFpBDA%2FyV%2FeBfGoZf%2BVuHQtqQnsytOjio%2F66PYik7BXIV9nhKk67J3KK1t75b9n1aFXGebZHw5FM19jncINwjmuvLLM6Dz8%2Ffcyy6T%2BsUsCbEhStDGYFal72b6%2FakUFFxVq1JG5F1CbDouYr2Jde6CecXzDixspec7fnW5kch9Aqg2lSHnAb8DPf%2FLqh3Hl7RSBWA%2FR%2FoEbzAW9SA&X-Amz-Signature=e839877278cc34b0361e8a442164178585aade43991685c4af3cd4aa312c6b29&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

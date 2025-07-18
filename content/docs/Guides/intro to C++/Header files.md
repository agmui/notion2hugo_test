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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K57DF7S%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDNplZa0strk9dSVoCMlT9TlPBGZ8HRdet%2FmYnz04r1zAiEArPNmbxhTSWgNOZJHmESsHGPH9j7UO0YG%2BSvZ5g2chPkqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANd2z4qfoitJ33LTSrcA2OE4mkTYT%2FePAyOEUcNwwIvQaoF6wao3q2xSSsXfLNnwWn2%2Fp%2FVJWlgBELIedBciolO0Why%2FKmF4h07ZTSiLl19LOMvi5mFYtwyoKgw%2Ba%2Fu4IFU%2BTMknDLYFhpAJ%2Fx9ktMh85gL1DdMmGIftYlyRUwgnCQF%2BXlE2VLSZp5B99X6qyjqy3IennFtVdh6%2FYOrOfz2RacUktzWvNXmDcUGfVYIL6qrrNpi%2Bza1SKCVA%2F7nFdfhyOm7qayxGqfuXY%2FCpdpFuf8m0fcEY14qk5RBx1pndTStmjGILm4DoC6jl4AOI1KpVWInD9uH3WMkmTUjdLJeAFVgRhj1qGNhgwz43iByFjmHV5V2y8WiHZkgfA98h0HjcifUXhR4c%2FWQTteKwwOLqFE%2BFh2ofPsxKXJlWRp%2BbNk1kY4dumSeMd0SN2BP0a%2FOajvh51vD7T0ho%2FleBEiC9Pv823C4hiYYElmGWkHVQCtz6I%2FkafDpDQTOXsQspKpfznm51zh9wHzCEWywP2cGJtf5YFygPLsE271lULwKSlMjGDpY1n315mMl%2FY%2BSXKgvZaCbBx0WX5qep7o%2FzlJUr1e9n8lLVhDBU9%2FrNoBOJyau%2FKgCxTTW6lltRlcqU4dyltHntGLYUnj5MISa6sMGOqUBGsugRMPtG2vZ3YVb7DHOLKrXZZLgk5w%2FY010J3A%2FhJl7SSHt1UHGATwd1qkL0jZBQsdk3Masx%2Br19LU6MwYz8A0bWn7o7Jod4yhYXaPKfq2NdoolkWgNgSk8bdiLcsHsDUWdDjTERmP0xjCbB1FRiX0spDzoPnj40jlz9gInlfvxQ%2FVOfkpVsq2YhmHt2YS68tz3wsSx912cpXdoaMN2Le8tcDlu&X-Amz-Signature=a2adb559f05c9db44390e5c1051f16162fd4cb2ab1763885adafa54dd72042da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

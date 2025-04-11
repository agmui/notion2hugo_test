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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCMDL6M%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIDJjUG9BX8LBjjJeKwvHhlLOcfkiJ2%2BMIe3grPpQMMtoAiA9z%2B7SDMY3jaIV%2Bbm%2Fq66lz0n8E1hxAvl4v02Vgqc98CqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHQTP2ZM2y0SLGvYBKtwDX7LzwH0pe4YV9mLmH3mc8Jq9djve8ZdyBrneAwDZlBg3Idx46GqWkDp9N6BQYuu2QSoFKXjW%2BXKOFBu%2FSUYxEeWDVSjyJ%2Bk6AdPAHIAuqtZIrEdfRBSKD8LdfR8fV1SGT6FMkozG6VPVNNOHN%2Fgq6O5Bv2QnwreIXGOtwoBiEsHCwHVnvbYzPVmNsD0aPj6Zex83dfZYeZUHjK39PYvY2i%2FjQnNUoQq4xdfyuz9p1RS4YFmbgIQLwM4T2mKsyMq7SeJXi5i%2BwXE2WLqTTYQmvVVvmyXFEwI%2B4sBvlvlFh4KUweQ5kTwy5QDJhQmK1nZD82vSWqB7fuvZKyqrweVEg%2FQLYgK2Z3eRPTFtBURmydu6eiY3mPY54Lvntybro1ksLWTqJiF691sXvfhdlsCo5aVUlrrGD3kw80xMmea01fFjbnx%2F%2BJPTKcAd5am08VP1HY6nUqo6%2F%2BpI1gHZ4KgiEVBHjq1999jQNY067LeBetTf1uB3PRO73YzHEJYoNcQis2JBJ1qOSgUMGNeKFYRFmb98e%2B6%2B3xQm%2Fh3i5pvD3NdpEVenE7dnib3EV4zjV3y88m6PtZd%2B5tHtreIZ7jl6lRWSLDcGVBw4AkKLY5rb3Lb6rufk6PiSCiAQJ6owqr3lvwY6pgFP8MR%2F%2FQOgAX9FOEaFeD9chEKDF0VFL7D%2FYeK4kV0zTW9yovZzIGBMELcY0VcNymHTaVfO6fLRhJSTrd%2FJ2XrTPynVyfEk7mzZzx6H9nJwSPmwBEJfqmvXdsPp%2B%2BTMyO7VDQnbcW8Uhy8OOFqWK%2B8qbQz3aq1S0DTnx%2Bt1Ko6dRp8EaabUTh%2F9gz14Ktn%2FEd%2BuAvKWgPSxXPu2DaWzZoqfydT11y2k&X-Amz-Signature=5d5dc48dcd0bfec541b772ea3a8db9fe128010713cef12160e40f96a78236987&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
